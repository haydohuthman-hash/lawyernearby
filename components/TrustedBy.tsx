const brands = [
  { name: "Ray White", style: "font-serif italic font-medium" },
  { name: "LJ Hooker", style: "font-sans font-semibold" },
  { name: "Belle", sub: "PROPERTY", style: "font-serif italic" },
  { name: "McGrath", style: "font-serif" },
  { name: "STONE", style: "font-sans tracking-[0.2em] font-medium" },
  { name: "firstnational", style: "font-sans font-medium" },
];

function BrandRow() {
  return (
    <>
      {brands.map((b) => (
        <div
          key={b.name}
          className={`shrink-0 px-12 text-[20px] text-white/60 transition duration-300 hover:text-white ${b.style}`}
        >
          {b.name}
          {b.sub && <div className="-mt-1 text-center text-[8px] tracking-[0.3em] text-white/40">{b.sub}</div>}
        </div>
      ))}
    </>
  );
}

export default function TrustedBy() {
  return (
    <div className="border-t border-white/10 bg-ink">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-8 px-5 py-12 sm:px-8 lg:flex-row">
        <span className="shrink-0 whitespace-nowrap text-[11px] tracking-[0.16em] text-white/40">
          TRUSTED BY HOMEOWNERS &amp; INDUSTRY PROFESSIONALS
        </span>
        <div
          className="marquee relative min-w-0 flex-1 overflow-hidden"
          style={{
            maskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
          }}
        >
          <div className="marquee-track flex w-max items-center">
            <BrandRow />
            <BrandRow />
          </div>
        </div>
      </div>
    </div>
  );
}
