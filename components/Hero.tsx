import { HandIcon, PersonIcon, ShieldIcon, StarIcon } from "./icons";
import QuoteCalculator from "./QuoteCalculator";

const features = [
  {
    icon: ShieldIcon,
    title: "Fixed Price Guarantee",
    body: "Upfront quotes. No surprises.",
  },
  {
    icon: HandIcon,
    title: "White Glove Service",
    body: "Care, protection and attention to every detail.",
  },
  {
    icon: ShieldIcon,
    title: "Fully Insured & Trusted",
    body: "Your home and belongings are in safe hands.",
  },
  {
    icon: PersonIcon,
    title: "Experienced Professionals",
    body: "Trained, reliable and dedicated to excellence.",
  },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #6b7280 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-8 pb-20 pt-14">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_1.05fr] lg:items-start">
          <div>
            <div className="flex items-center gap-2 text-white/85">
              <span className="flex gap-0.5 text-white">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </span>
              <span className="text-[13px]">4.9/5 from 250+ reviews</span>
            </div>

            <h1 className="mt-6 font-serif text-[56px] italic leading-[1.02] text-white sm:text-[68px]">
              Move Without
              <br />
              Compromise.
            </h1>

            <p className="mt-6 max-w-md text-[16px] leading-relaxed text-white/65">
              Premium moving and rubbish removal services with fixed prices and no hourly surprises.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#quote"
                className="rounded-md bg-white px-7 py-3.5 text-[13px] font-medium tracking-[0.06em] text-ink transition hover:bg-white/90"
              >
                GET A FIXED QUOTE
              </a>
              <a
                href="#services"
                className="rounded-md px-7 py-3.5 text-[13px] font-medium tracking-[0.06em] text-white ring-1 ring-white/25 transition hover:bg-white/10"
              >
                OUR SERVICES
              </a>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-4 sm:gap-x-8">
              {features.map((f) => (
                <div key={f.title}>
                  <f.icon className="h-7 w-7 text-white" />
                  <div className="mt-3 text-[13px] font-medium tracking-[0.02em] text-white">{f.title}</div>
                  <div className="mt-1.5 text-[12.5px] leading-snug text-white/50">{f.body}</div>
                </div>
              ))}
            </div>
          </div>

          <QuoteCalculator />
        </div>
      </div>
    </section>
  );
}
