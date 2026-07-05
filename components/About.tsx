const stats = [
  { value: "12+", label: "Years in business" },
  { value: "8,400+", label: "Successful moves" },
  { value: "250+", label: "5-star reviews" },
  { value: "100%", label: "Insured moves" },
];

export default function About() {
  return (
    <section id="about" className="bg-ink py-24 text-white">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-14 px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-[11px] font-medium tracking-[0.2em] text-white/45">ABOUT US</span>
          <h2 className="mt-4 font-serif text-[38px] italic leading-[1.15] sm:text-[44px]">
            Relocation, done the way it should be.
          </h2>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-white/60">
            Residence Relocations was founded on a simple idea: moving day shouldn&apos;t be stressful,
            unpredictable, or priced by the hour. We built a team of vetted, professional movers and
            paired them with transparent, fixed-price quoting — so you always know what you&apos;ll pay
            before a single box is packed.
          </p>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/60">
            Today we work alongside Brisbane and Gold Coast&apos;s leading real estate agencies, helping
            homeowners move, declutter and prepare properties for sale — without compromise.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10">
              <div className="font-serif text-[36px] italic">{s.value}</div>
              <div className="mt-2 text-[13px] text-white/50">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
