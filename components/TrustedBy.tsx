const brands = [
  { name: "Ray White", style: "font-serif italic font-medium" },
  { name: "LJ Hooker", style: "font-sans font-semibold" },
  { name: "Belle", sub: "PROPERTY", style: "font-serif italic" },
  { name: "McGrath", style: "font-serif" },
  { name: "STONE", style: "font-sans tracking-[0.2em] font-medium" },
  { name: "firstnational", style: "font-sans font-medium" },
];

export default function TrustedBy() {
  return (
    <div className="border-t border-white/10 bg-ink">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-8 px-8 py-10 sm:flex-row sm:justify-between">
        <span className="whitespace-nowrap text-[11px] tracking-[0.16em] text-white/40">
          TRUSTED BY HOMEOWNERS &amp; INDUSTRY PROFESSIONALS
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
          {brands.map((b) => (
            <div key={b.name} className={`text-[19px] text-white ${b.style}`}>
              {b.name}
              {b.sub && <div className="-mt-1 text-center text-[8px] tracking-[0.3em] text-white/60">{b.sub}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
