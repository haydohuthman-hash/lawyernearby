"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";
import AddressInput from "./AddressInput";
import { DEFAULT_FROM, DEFAULT_TO, estimateRoute, fetchRoute, type Place, type RouteResult } from "./geo";
import { SparkleIcon } from "./icons";

const LiveMap = dynamic(() => import("./LiveMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-[#0c0f0d] text-[12px] text-white/40">
      Loading map…
    </div>
  ),
});

type ServiceType = "Moving" | "Rubbish Removal";

const MOVING_SIZES = [
  { key: "studio", label: "Studio / 1 Bedroom", desc: "Small apartment or unit", base: 349 },
  { key: "2br", label: "2 Bedroom", desc: "Apartment or townhouse", base: 499 },
  { key: "3br", label: "3 Bedroom", desc: "Standard family home", base: 649 },
  { key: "4br", label: "4+ Bedroom", desc: "Large family home", base: 849 },
  { key: "office", label: "Office / Commercial", desc: "Small business move", base: 599 },
];

const RUBBISH_SIZES = [
  { key: "small", label: "Small Load", desc: "A few items or boxes", base: 149 },
  { key: "half", label: "Half Truck Load", desc: "Single room clear-out", base: 289 },
  { key: "full", label: "Full Truck Load", desc: "Whole home or garage", base: 449 },
  { key: "multi", label: "Multiple Loads", desc: "Full property clearance", base: 699 },
];

export default function QuoteCalculator() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [from, setFrom] = useState<Place>(DEFAULT_FROM);
  const [to, setTo] = useState<Place>(DEFAULT_TO);
  const [date, setDate] = useState("2026-08-24");
  const [serviceType, setServiceType] = useState<ServiceType>("Moving");
  const [route, setRoute] = useState<RouteResult>(() => estimateRoute(DEFAULT_FROM, DEFAULT_TO));
  const [routing, setRouting] = useState(false);

  const sizeOptions = serviceType === "Moving" ? MOVING_SIZES : RUBBISH_SIZES;
  const [sizeKey, setSizeKey] = useState(sizeOptions[2].key);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const abortRef = useRef<AbortController>();

  useEffect(() => {
    setSizeKey(sizeOptions[0].key);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceType]);

  useEffect(() => {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    setRouting(true);
    setRoute(estimateRoute(from, to));
    fetchRoute(from, to, controller.signal)
      .then((r) => setRoute(r))
      .catch(() => {})
      .finally(() => setRouting(false));
    return () => controller.abort();
  }, [from, to]);

  const distanceKm = route.km;
  const durationMins = route.mins;
  const selectedSize = sizeOptions.find((s) => s.key === sizeKey) ?? sizeOptions[0];
  const distanceCost = Math.round(distanceKm * 1.2);
  const estimatedPrice = selectedSize.base + distanceCost;

  const formattedDate = useMemo(() => {
    const d = new Date(date + "T00:00:00");
    if (Number.isNaN(d.getTime())) return date;
    return d.toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });
  }, [date]);

  const durationLabel =
    durationMins >= 60 ? `${Math.floor(durationMins / 60)}h ${durationMins % 60}m` : `${durationMins}m`;

  const nameValid = name.trim().length > 1;
  const phoneValid = phone.replace(/[^0-9]/g, "").length >= 8;
  const canSubmit = nameValid && phoneValid;

  function handlePrimaryAction() {
    if (step === 1) return setStep(2);
    if (step === 2) return setStep(3);

    setTouched(true);
    if (!canSubmit) return;

    const subject = encodeURIComponent(`Quote request — ${selectedSize.label} (${serviceType})`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email || "-"}`,
        "",
        `Service: ${serviceType}`,
        `Home / load size: ${selectedSize.label}`,
        `From: ${from.label}`,
        `To: ${to.label}`,
        `Move date: ${formattedDate}`,
        `Distance: ${distanceKm} km${route.real ? "" : " (estimated)"}`,
        "",
        `Estimated price: $${estimatedPrice} AUD — this is an estimate only, not a final price.`,
      ].join("\n")
    );

    if (typeof window !== "undefined") {
      window.location.href = `mailto:hello@residencerelocations.com.au?subject=${subject}&body=${body}`;
      window.gtag?.("event", "generate_lead", {
        value: estimatedPrice,
        currency: "AUD",
        service_type: serviceType,
      });
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div id="quote" className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1fr]">
        <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl bg-panel/90 p-8 text-center text-white shadow-[0_24px_60px_rgba(0,0,0,0.5)] ring-1 ring-white/10 backdrop-blur-xl sm:p-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
            <SparkleIcon className="h-6 w-6 text-white" />
          </div>
          <h3 className="mt-6 font-serif text-[26px] italic">Thanks, {name.split(" ")[0]}!</h3>
          <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-white/60">
            Your estimate of <span className="font-medium text-white">${estimatedPrice} AUD</span>{" "}
            has been sent to our team. We&apos;ll call {phone}{" "}
            shortly to confirm your exact fixed price — this estimate isn&apos;t final until we do.
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setStep(1);
            }}
            className="mt-7 rounded-lg px-6 py-3 text-[13px] font-medium text-white/70 ring-1 ring-white/15 transition hover:text-white"
          >
            Start a new quote
          </button>
        </div>
        <div className="min-h-[300px] overflow-hidden rounded-2xl bg-[#0c0f0d] ring-1 ring-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.5)] lg:min-h-0">
          <LiveMap from={from} to={to} route={route} />
        </div>
      </div>
    );
  }

  return (
    <div id="quote" className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1fr]">
      <div className="flex flex-col rounded-2xl bg-panel/90 p-6 text-white shadow-[0_24px_60px_rgba(0,0,0,0.5)] ring-1 ring-white/10 backdrop-blur-xl sm:p-7">
        <div className="flex items-center gap-2.5">
          <SparkleIcon className="h-4 w-4 text-white" />
          <h3 className="font-sans text-[15px] font-medium">AI Quote Calculator</h3>
        </div>
        <p className="mt-1.5 text-[13px] text-white/55">
          Get an instant estimate in 30 seconds — no obligation.
        </p>

        <div className="mt-6 flex items-center gap-2 text-[11px] text-white/45">
          {(["Details", "Home Size", "Your Quote"] as const).map((label, i) => {
            const n = (i + 1) as 1 | 2 | 3;
            const active = step === n;
            const done = step > n;
            return (
              <div key={label} className="flex items-center gap-2">
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-medium ${
                    active || done ? "bg-white text-ink" : "bg-white/10 text-white/50"
                  }`}
                >
                  {n}
                </span>
                <span className={active ? "text-white" : ""}>{label}</span>
                {n < 3 && <span className="mx-1 h-px w-4 bg-white/15 sm:w-5" />}
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex-1">
          {step === 1 && (
            <div className="space-y-4">
              <div className="text-[11px] font-medium tracking-[0.14em] text-white/45">DETAILS</div>

              <AddressInput label="From" value={from} onChange={setFrom} placeholder="Pickup address" />
              <AddressInput label="To" value={to} onChange={setTo} placeholder="Drop-off address" />

              <label className="block">
                <span className="mb-1.5 block text-[12px] text-white/60">Move Date</span>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-lg bg-white/5 px-3.5 py-3 text-[13px] text-white outline-none ring-1 ring-white/10 [color-scheme:dark] focus:ring-white/30"
                />
              </label>

              <div>
                <span className="mb-1.5 block text-[12px] text-white/60">Service Type</span>
                <div className="grid grid-cols-2 gap-2 rounded-lg bg-white/5 p-1 ring-1 ring-white/10">
                  {(["Moving", "Rubbish Removal"] as ServiceType[]).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setServiceType(type)}
                      className={`rounded-md py-2.5 text-[12.5px] font-medium transition ${
                        serviceType === type ? "bg-white text-ink" : "text-white/60 hover:text-white"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="text-[11px] font-medium tracking-[0.14em] text-white/45">
                {serviceType === "Moving" ? "HOME SIZE" : "LOAD SIZE"}
              </div>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {sizeOptions.map((option) => {
                  const active = option.key === sizeKey;
                  return (
                    <button
                      key={option.key}
                      type="button"
                      onClick={() => setSizeKey(option.key)}
                      className={`rounded-lg p-4 text-left ring-1 transition ${
                        active
                          ? "bg-white text-ink ring-white"
                          : "bg-white/5 text-white ring-white/10 hover:bg-white/10"
                      }`}
                    >
                      <div className="text-[13.5px] font-medium">{option.label}</div>
                      <div className={`mt-1 text-[12px] ${active ? "text-ink/55" : "text-white/45"}`}>
                        {option.desc}
                      </div>
                      <div className={`mt-2 text-[11px] font-medium ${active ? "text-ink/70" : "text-white/40"}`}>
                        from ${option.base}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="text-[11px] font-medium tracking-[0.14em] text-white/45">YOUR DETAILS</div>

              <label className="block">
                <span className="mb-1.5 block text-[12px] text-white/60">Full name</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Smith"
                  className={`w-full rounded-lg bg-white/5 px-3.5 py-3 text-[13px] text-white outline-none ring-1 placeholder:text-white/30 focus:ring-white/30 ${
                    touched && !nameValid ? "ring-red-400/60" : "ring-white/10"
                  }`}
                />
                {touched && !nameValid && (
                  <span className="mt-1.5 block text-[11.5px] text-red-300">Please enter your name.</span>
                )}
              </label>

              <label className="block">
                <span className="mb-1.5 block text-[12px] text-white/60">Phone number</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0400 000 000"
                  className={`w-full rounded-lg bg-white/5 px-3.5 py-3 text-[13px] text-white outline-none ring-1 placeholder:text-white/30 focus:ring-white/30 ${
                    touched && !phoneValid ? "ring-red-400/60" : "ring-white/10"
                  }`}
                />
                {touched && !phoneValid && (
                  <span className="mt-1.5 block text-[11.5px] text-red-300">
                    Please enter a valid phone number.
                  </span>
                )}
              </label>

              <label className="block">
                <span className="mb-1.5 block text-[12px] text-white/60">Email (optional)</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@example.com"
                  className="w-full rounded-lg bg-white/5 px-3.5 py-3 text-[13px] text-white outline-none ring-1 ring-white/10 placeholder:text-white/30 focus:ring-white/30"
                />
              </label>

              <div className="rounded-lg bg-white/5 p-4 ring-1 ring-white/10">
                <div className="flex justify-between gap-3 text-[13px] text-white/70">
                  <span>
                    {serviceType === "Moving" ? "Home size" : "Load size"} ({selectedSize.label})
                  </span>
                  <span className="text-white">${selectedSize.base}</span>
                </div>
                <div className="mt-2 flex justify-between gap-3 text-[13px] text-white/70">
                  <span>
                    Distance ({distanceKm} km{route.real ? "" : " est."})
                  </span>
                  <span className="text-white">${distanceCost}</span>
                </div>
                <div className="mt-2 flex justify-between gap-3 border-t border-white/10 pt-2 text-[13px] text-white">
                  <span>Estimated total</span>
                  <span className="font-semibold">${estimatedPrice}</span>
                </div>
              </div>

              <p className="rounded-lg bg-amber-400/10 p-3.5 text-[12px] leading-relaxed text-amber-200/90 ring-1 ring-amber-400/20">
                This is an instant estimate, not your final price. A team member will confirm your exact
                fixed quote by phone or email before anything is booked.
              </p>
            </div>
          )}
        </div>

        <div className="mt-6 rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
          <div className="text-[10px] tracking-[0.14em] text-white/45">ESTIMATED PRICE</div>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span className="font-serif text-[34px] leading-none text-white">${estimatedPrice}</span>
            <span className="text-[12px] text-white/50">AUD</span>
          </div>
          <div className="mt-1 text-[12px] text-white/45">Estimate only — not a final price.</div>

          <div className="mt-4 flex gap-3">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep((s) => (s === 3 ? 2 : 1))}
                className="rounded-lg px-5 py-3 text-[13px] font-medium text-white/70 ring-1 ring-white/15 transition hover:text-white"
              >
                Back
              </button>
            )}
            <button
              type="button"
              onClick={handlePrimaryAction}
              className="btn-shine btn-shine-dark flex flex-1 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3.5 text-[13px] font-medium text-ink transition hover:bg-white/90"
            >
              {step === 1 && `Continue to ${serviceType === "Moving" ? "Home" : "Load"} Size`}
              {step === 2 && "Continue to Your Details"}
              {step === 3 && "Get My Fixed Quote"}
              <span aria-hidden>→</span>
            </button>
          </div>

          <div className="mt-3 text-center text-[11px] text-white/35">
            Takes 30 seconds &nbsp;·&nbsp; No obligation to book
          </div>
        </div>
      </div>

      <div className="flex min-h-[440px] flex-col overflow-hidden rounded-2xl bg-[#0c0f0d] ring-1 ring-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.5)] lg:min-h-0">
        <div className="relative flex-1">
          <div className="absolute inset-0">
            <LiveMap from={from} to={to} route={route} />
          </div>
        </div>
        <div className="relative z-10 grid grid-cols-2 divide-x divide-white/10 border-t border-white/10 bg-[#0c0f0d]">
          <div className="px-5 py-4 sm:px-6">
            <div className="text-[10px] tracking-[0.14em] text-white/45">DISTANCE</div>
            <div className="mt-1 text-sm font-medium text-white">
              {routing ? "…" : `${distanceKm} km${route.real ? "" : " (est.)"}`}
            </div>
          </div>
          <div className="px-5 py-4 sm:px-6">
            <div className="text-[10px] tracking-[0.14em] text-white/45">EST. TIME</div>
            <div className="mt-1 text-sm font-medium text-white">{routing ? "…" : durationLabel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
