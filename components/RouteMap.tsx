import { PinIcon } from "./icons";

const roads = [
  "M0 40 H400",
  "M0 90 H400",
  "M0 150 H400",
  "M0 220 H400",
  "M0 290 H400",
  "M0 340 H400",
  "M40 0 V400",
  "M110 0 V400",
  "M190 0 V400",
  "M260 0 V400",
  "M330 0 V400",
];

const areaLabels = [
  { label: "Moreton Bay", x: 300, y: 40 },
  { label: "Brisbane", x: 42, y: 95 },
  { label: "Carindale", x: 250, y: 130 },
  { label: "Indooroopilly", x: 55, y: 165 },
  { label: "Sunnybank", x: 55, y: 235 },
  { label: "Loganholme", x: 280, y: 240 },
  { label: "Beenleigh", x: 220, y: 265 },
  { label: "Helensvale", x: 300, y: 320 },
  { label: "Gold Coast", x: 320, y: 365 },
];

export default function RouteMap({
  from,
  to,
  distance,
  duration,
}: {
  from: string;
  to: string;
  distance: string;
  duration: string;
}) {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-[#0c0f0d]">
      <div className="relative flex-1 overflow-hidden">
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.35]"
          viewBox="0 0 400 400"
          preserveAspectRatio="xMidYMid slice"
        >
          {roads.map((d, i) => (
            <path key={i} d={d} stroke="#3a4440" strokeWidth="1" />
          ))}
        </svg>

        {areaLabels.map((a) => (
          <span
            key={a.label}
            className="pointer-events-none absolute font-sans text-[10px] tracking-wide text-white/35"
            style={{ left: `${(a.x / 400) * 100}%`, top: `${(a.y / 400) * 100}%` }}
          >
            {a.label}
          </span>
        ))}

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 400 400"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M120 90 C 150 115, 100 130, 140 155 S 220 210, 190 250 S 260 300, 250 340"
            stroke="white"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M120 90 C 150 115, 100 130, 140 155 S 220 210, 190 250 S 260 300, 250 340"
            stroke="white"
            strokeOpacity="0.15"
            strokeWidth="9"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        <div className="absolute" style={{ left: "26%", top: "18%" }}>
          <div className="flex -translate-x-1/2 -translate-y-full flex-col items-center">
            <div className="mb-1 whitespace-nowrap rounded-md bg-white px-2.5 py-1.5 text-[11px] leading-tight text-ink shadow-lg">
              <div className="font-semibold">{from.split(",")[0]}</div>
              <div className="text-ink/60">{from.split(",").slice(1).join(",").trim()}</div>
            </div>
            <PinIcon className="h-7 w-7 drop-shadow" />
          </div>
        </div>

        <div className="absolute" style={{ left: "62%", top: "83%" }}>
          <div className="flex -translate-x-1/2 -translate-y-full flex-col items-center">
            <div className="mb-1 whitespace-nowrap rounded-md bg-white px-2.5 py-1.5 text-[11px] leading-tight text-ink shadow-lg">
              <div className="font-semibold">{to.split(",")[0]}</div>
              <div className="text-ink/60">{to.split(",").slice(1).join(",").trim()}</div>
            </div>
            <PinIcon className="h-7 w-7 drop-shadow" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 divide-x divide-white/10 border-t border-white/10 bg-[#0c0f0d]">
        <div className="px-6 py-4">
          <div className="text-[10px] tracking-[0.14em] text-white/45">DISTANCE</div>
          <div className="mt-1 text-sm font-medium text-white">{distance}</div>
        </div>
        <div className="px-6 py-4">
          <div className="text-[10px] tracking-[0.14em] text-white/45">EST. TIME</div>
          <div className="mt-1 text-sm font-medium text-white">{duration}</div>
        </div>
      </div>
    </div>
  );
}
