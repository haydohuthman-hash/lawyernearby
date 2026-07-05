"use client";

import { useMemo, useState } from "react";
import { SparkleIcon } from "./icons";
import RouteMap from "./RouteMap";

type ServiceType = "Moving" | "Rubbish Removal";

const ITEMS = [
  { key: "boxes", label: "Boxes & Small Items", unit: "$4 / box", price: 4 },
  { key: "furniture", label: "Furniture Pieces", unit: "$45 / item", price: 45 },
  { key: "appliances", label: "Appliances", unit: "$65 / item", price: 65 },
  { key: "piano_pool", label: "Specialty (Piano, Pool Table)", unit: "$220 / item", price: 220 },
];

function hashString(value: string) {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function estimateDistanceKm(from: string, to: string) {
  if (/22 river terrace/i.test(from) && /45 ocean view/i.test(to)) return 78;
  const combined = `${from.trim().toLowerCase()}|${to.trim().toLowerCase()}`;
  if (!from.trim() || !to.trim()) return 78;
  return 12 + (hashString(combined) % 180);
}

export default function QuoteCalculator() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [from, setFrom] = useState("22 River Terrace, Brisbane QLD");
  const [to, setTo] = useState("45 Ocean View Ave, Miami QLD");
  const [date, setDate] = useState("2026-08-24");
  const [serviceType, setServiceType] = useState<ServiceType>("Moving");
  const [quantities, setQuantities] = useState<Record<string, number>>({
    boxes: 20,
    furniture: 6,
    appliances: 2,
    piano_pool: 0,
  });

  const distanceKm = useMemo(() => estimateDistanceKm(from, to), [from, to]);
  const durationMins = useMemo(() => Math.round(distanceKm * 0.96 + 12), [distanceKm]);

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
      <div className="flex flex-col rounded-2xl bg-panel/90 p-7 text-white shadow-[0_24px_60px_rgba(0,0,0,0.5)] ring-1 ring-white/10 backdrop-blur-xl">
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
                {n < 3 && <span className="mx-1 h-px w-5 bg-white/15" />}
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex-1">
          {step === 1 && (
            <div className="space-y-4">
              <div className="text-[11px] font-medium tracking-[0.14em] text-white/45">DETAILS</div>

              <label className="block">
                <span className="mb-1.5 block text-[12px] text-white/60">From</span>
                <input
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="w-full rounded-lg bg-white/5 px-3.5 py-2.5 text-[13px] text-white outline-none ring-1 ring-white/10 placeholder:text-white/30 focus:ring-white/30"
                  placeholder="Pickup address"
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-[12px] text-white/60">To</span>
                <input
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="w-full rounded-lg bg-white/5 px-3.5 py-2.5 text-[13px] text-white outline-none ring-1 ring-white/10 placeholder:text-white/30 focus:ring-white/30"
                  placeholder="Drop-off address"
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-[12px] text-white/60">Move Date</span>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-lg bg-white/5 px-3.5 py-2.5 text-[13px] text-white outline-none ring-1 ring-white/10 [color-scheme:dark] focus:ring-white/30"
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
                      className={`rounded-md py-2 text-[12.5px] font-medium transition ${
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
                  className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3 ring-1 ring-white/10"
                >
                  <div>
                    <div className="text-[13px] text-white">{item.label}</div>
                    <div className="text-[11px] text-white/40">{item.unit}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.key, -1)}
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                    >
                      −
                    </button>
                    <span className="w-5 text-center text-[13px] text-white">{quantities[item.key] ?? 0}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.key, 1)}
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
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
                <div className="flex justify-between text-white/70">
                  <span>Base call-out ({serviceType})</span>
                  <span className="text-white">${basePrice}</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Distance ({distanceKm} km)</span>
                  <span className="text-white">${distanceCost}</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Items & handling</span>
                  <span className="text-white">${itemsCost}</span>
                </div>
                <div className="mt-1 flex justify-between border-t border-white/10 pt-2 text-white">
                  <span>Total fixed price</span>
                  <span className="font-semibold">${estimatedPrice}</span>
                </div>
              </div>
              <p className="text-[12px] text-white/45">
                Move on {formattedDate} from {from.split(",")[0]} to {to.split(",")[0]}. Price is fixed
                once confirmed — no hourly surprises.
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
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-[13px] font-medium text-ink transition hover:bg-white/90"
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

      <div className="min-h-[420px]">
        <RouteMap from={from} to={to} distance={`${distanceKm} km`} duration={durationLabel} />
      </div>
    </div>
  );
}
