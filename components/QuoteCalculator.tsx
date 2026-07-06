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

const ITEMS = [
  { key: "boxes", label: "Boxes & Small Items", unit: "$4 / box", price: 4 },
  { key: "furniture", label: "Furniture Pieces", unit: "$45 / item", price: 45 },
  { key: "appliances", label: "Appliances", unit: "$65 / item", price: 65 },
  { key: "piano_pool", label: "Specialty (Piano, Pool Table)", unit: "$220 / item", price: 220 },
];

export default function QuoteCalculator() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [from, setFrom] = useState<Place>(DEFAULT_FROM);
  const [to, setTo] = useState<Place>(DEFAULT_TO);
  const [date, setDate] = useState("2026-08-24");
  const [serviceType, setServiceType] = useState<ServiceType>("Moving");
  const [route, setRoute] = useState<RouteResult>(() => estimateRoute(DEFAULT_FROM, DEFAULT_TO));
  const [routing, setRouting] = useState(false);
  const [quantities, setQuantities] = useState<Record<string, number>>({
    boxes: 20,
    furniture: 6,
    appliances: 2,
    piano_pool: 0,
  });
  const abortRef = useRef<AbortController>();

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

  const basePrice = serviceType === "Moving" ? 449 : 180;
  const distanceCost = Math.round(distanceKm * 1.2);
  const itemsCost = useMemo(
    () => ITEMS.reduce((sum, item) => sum + (quantities[item.key] ?? 0) * item.price, 0),
    [quantities]
  );

  const estimatedPrice = step === 1 ? basePrice + distanceCost : basePrice + distanceCost + itemsCost;

  const formattedDate = useMemo(() => {
    const d = new Date(date + "T00:00:00");
    if (Number.isNaN(d.getTime())) return date;
    return d.toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });
  }, [date]);

  const durationLabel =
    durationMins >= 60 ? `${Math.floor(durationMins / 60)}h ${durationMins % 60}m` : `${durationMins}m`;

  function updateQuantity(key: string, delta: number) {
    setQuantities((prev) => ({ ...prev, [key]: Math.max(0, (prev[key] ?? 0) + delta) }));
  }

  return (
    <div id="quote" className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1fr]">
      <div className="flex flex-col rounded-2xl bg-panel/90 p-6 text-white shadow-[0_24px_60px_rgba(0,0,0,0.5)] ring-1 ring-white/10 backdrop-blur-xl sm:p-7">
        <div className="flex items-center gap-2.5">
          <SparkleIcon className="h-4 w-4 text-white" />
          <h3 className="font-sans text-[15px] font-medium">AI Quote Calculator</h3>
        </div>
        <p className="mt-1.5 text-[13px] text-white/55">Get an instant fixed price in 30 seconds.</p>

        <div className="mt-6 flex items-center gap-2 text-[11px] text-white/45">
          {(["Details", "Items", "Quote"] as const).map((label, i) => {
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
              <div className="text-[11px] font-medium tracking-[0.14em] text-white/45">ITEMS</div>
              {ITEMS.map((item) => (
                <div
                  key={item.key}
                  className="flex items-center justify-between gap-3 rounded-lg bg-white/5 px-4 py-3 ring-1 ring-white/10"
                >
                  <div className="min-w-0">
                    <div className="truncate text-[13px] text-white">{item.label}</div>
                    <div className="text-[11px] text-white/40">{item.unit}</div>
                  </div>
                  <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.key, -1)}
                      aria-label={`Fewer ${item.label}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:h-7 sm:w-7"
                    >
                      −
                    </button>
                    <span className="w-5 text-center text-[13px] text-white">{quantities[item.key] ?? 0}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.key, 1)}
                      aria-label={`More ${item.label}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:h-7 sm:w-7"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {step === 3 && (
            <div className="space-y-3">
              <div className="text-[11px] font-medium tracking-[0.14em] text-white/45">QUOTE SUMMARY</div>
              <div className="space-y-2 rounded-lg bg-white/5 p-4 text-[13px] ring-1 ring-white/10">
                <div className="flex justify-between gap-3 text-white/70">
                  <span>Base call-out ({serviceType})</span>
                  <span className="text-white">${basePrice}</span>
                </div>
                <div className="flex justify-between gap-3 text-white/70">
                  <span>
                    Distance ({distanceKm} km{route.real ? "" : " est."})
                  </span>
                  <span className="text-white">${distanceCost}</span>
                </div>
                <div className="flex justify-between gap-3 text-white/70">
                  <span>Items & handling</span>
                  <span className="text-white">${itemsCost}</span>
                </div>
                <div className="mt-1 flex justify-between gap-3 border-t border-white/10 pt-2 text-white">
                  <span>Total fixed price</span>
                  <span className="font-semibold">${estimatedPrice}</span>
                </div>
              </div>
              <p className="text-[12px] text-white/45">
                Move on {formattedDate} from {from.label.split(",")[0]} to {to.label.split(",")[0]}. Price
                is fixed once confirmed — no hourly surprises.
              </p>
            </div>
          )}
        </div>

        <div className="mt-6 rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
          <div className="text-[10px] tracking-[0.14em] text-white/45">ESTIMATED FIXED PRICE</div>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span className="font-serif text-[34px] leading-none text-white">${estimatedPrice}</span>
            <span className="text-[12px] text-white/50">AUD</span>
          </div>
          <div className="mt-1 text-[12px] text-white/45">No hidden fees. No hourly rates.</div>

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
              onClick={() => setStep((s) => (s === 3 ? 3 : ((s + 1) as 1 | 2 | 3)))}
              className="btn-shine btn-shine-dark flex flex-1 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3.5 text-[13px] font-medium text-ink transition hover:bg-white/90"
            >
              {step === 1 && "Continue to Items"}
              {step === 2 && "Get My Quote"}
              {step === 3 && "Confirm & Book"}
              <span aria-hidden>→</span>
            </button>
          </div>

          <div className="mt-3 text-center text-[11px] text-white/35">
            Takes 30 seconds &nbsp;·&nbsp; Save 10% when you book online
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
