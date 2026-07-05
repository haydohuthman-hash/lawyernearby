import CountUp from "./CountUp";
import Reveal from "./Reveal";

const stats = [
  { end: 12, suffix: "+", label: "Years in business" },
  { end: 8400, suffix: "+", label: "Successful moves" },
  { end: 250, suffix: "+", label: "5-star reviews" },
  { end: 100, suffix: "%", label: "Insured moves" },
];

export default function About() {
  return (
    <section id="about" className="grain relative overflow-hidden bg-ink py-28 text-white">
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[480px] w-[480px] rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)" }}
      />
      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-14 px-8 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="text-[11px] font-medium tracking-[0.22em] text-white/45">ABOUT US</span>
          <h2 className="mt-4 font-serif text-[40px] italic leading-[1.12] sm:text-[48px]">
            Relocation, done the way it should be.
          </h2>
          <p className="mt-7 max-w-lg text-[15px] leading-relaxed text-white/60">
            Residence Relocations was founded on a simple idea: moving day shouldn&apos;t be stressful,
            unpredictable, or priced by the hour. We built a team of vetted, professional movers and
            paired them with transparent, fixed-price quoting — so you always know what you&apos;ll pay
            before a single box is packed.
          </p>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/60">
            Today we work alongside Brisbane and Gold Coast&apos;s leading real estate agencies, helping
            homeowners move, declutter and prepare properties for sale — without compromise.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="rounded-2xl bg-white/5 p-9 ring-1 ring-white/10 transition-colors duration-500 hover:bg-white/[0.08]">
                <div className="font-serif text-[40px] italic leading-none">
                  <CountUp end={s.end} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-[13px] text-white/50">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
