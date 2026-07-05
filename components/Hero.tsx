import { HandIcon, PersonIcon, ShieldIcon, StarIcon } from "./icons";
import QuoteCalculator from "./QuoteCalculator";

const HERO_IMAGE =
  "https://d8j0ntlcm91z4.cloudfront.net/user_37P7ksDqPG5XEMOTptYX6VU1Jn8/hf_20260705_115508_90c88867-abe1-49be-b574-37c32cfa5725.png";

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
    <section id="top" className="grain relative -mt-[88px] overflow-hidden bg-ink pt-[88px]">
      {/* cinematic photo backdrop with dusk-gradient fallback beneath */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, #101318 0%, #0a0a0a 45%, #0d0f0e 100%)",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMAGE}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover object-[62%_center] opacity-70"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(10,10,10,0.96) 0%, rgba(10,10,10,0.82) 34%, rgba(10,10,10,0.45) 60%, rgba(10,10,10,0.72) 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-48"
          style={{ background: "linear-gradient(180deg, transparent, rgba(10,10,10,0.9))" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-8 pb-24 pt-16">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_1.05fr] lg:items-start">
          <div>
            <div className="rise flex items-center gap-2 text-white/85" style={{ ["--rise-delay" as string]: "0ms" }}>
              <span className="flex gap-0.5 text-white">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </span>
              <span className="text-[13px]">4.9/5 from 250+ reviews</span>
            </div>

            <h1
              className="rise mt-7 font-serif text-[58px] italic leading-[1.0] tracking-[-0.01em] text-white sm:text-[74px]"
              style={{ ["--rise-delay" as string]: "120ms" }}
            >
              Move Without
              <br />
              Compromise.
            </h1>

            <p
              className="rise mt-7 max-w-md text-[16.5px] leading-relaxed text-white/70"
              style={{ ["--rise-delay" as string]: "240ms" }}
            >
              Premium moving and rubbish removal services with fixed prices and no hourly surprises.
            </p>

            <div className="rise mt-9 flex flex-wrap gap-4" style={{ ["--rise-delay" as string]: "360ms" }}>
              <a
                href="#quote"
                className="btn-shine btn-shine-dark rounded-md bg-white px-8 py-4 text-[13px] font-medium tracking-[0.08em] text-ink shadow-[0_8px_30px_rgba(255,255,255,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(255,255,255,0.2)]"
              >
                GET A FIXED QUOTE
              </a>
              <a
                href="#services"
                className="rounded-md px-8 py-4 text-[13px] font-medium tracking-[0.08em] text-white ring-1 ring-white/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:ring-white/60"
              >
                OUR SERVICES
              </a>
            </div>

            <div
              className="rise mt-16 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-x-8"
              style={{ ["--rise-delay" as string]: "480ms" }}
            >
              {features.map((f) => (
                <div key={f.title} className="group">
                  <f.icon className="h-7 w-7 text-white transition-transform duration-300 group-hover:-translate-y-1" />
                  <div className="mt-3.5 text-[13px] font-medium tracking-[0.02em] text-white">{f.title}</div>
                  <div className="mt-1.5 text-[12.5px] leading-snug text-white/50">{f.body}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rise" style={{ ["--rise-delay" as string]: "300ms" }}>
            <QuoteCalculator />
          </div>
        </div>
      </div>
    </section>
  );
}
