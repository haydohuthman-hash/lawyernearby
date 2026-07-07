import Link from "next/link";
import { BoxIcon, HouseIcon, ShieldIcon, TrashIcon, TruckIcon } from "./icons";
import Reveal from "./Reveal";

const services = [
  {
    icon: TruckIcon,
    title: "White Glove Moving",
    body: "Careful, professional moving services for homes of all sizes.",
    href: "/services/removalists",
  },
  {
    icon: TrashIcon,
    title: "Rubbish Removal",
    body: "Fast, responsible removal of unwanted items.",
    href: "/services/rubbish-removal",
  },
  {
    icon: BoxIcon,
    title: "Furniture & Heavy Item Relocation",
    body: "Specialists in heavy lifting, pianos and pool tables.",
    href: "/services/furniture-removal",
  },
  {
    icon: HouseIcon,
    title: "Pre Sale & Post Move Cleans",
    body: "Leave your old place spotless or come home to clean.",
    href: "/services/pre-sale-cleaning",
  },
];

const whyUs = ["Fixed, itemised pricing", "Background-checked crews", "Full transit insurance"];

export default function Services() {
  return (
    <section id="services" className="bg-cream py-16 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Reveal>
              <span className="text-[11px] font-medium tracking-[0.22em] text-ink/45">WHAT WE DO</span>
              <h2 className="mt-4 font-serif text-[40px] italic leading-[1.12] text-ink sm:text-[48px]">
                Premium Moving &amp; Rubbish Removal
              </h2>
            </Reveal>

            <Reveal delay={150}>
              <div className="grain relative mt-9 overflow-hidden rounded-2xl bg-ink p-9 text-white shadow-[0_24px_60px_rgba(10,10,10,0.25)]">
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20 blur-3xl"
                  style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)" }}
                />
                <h3 className="relative font-serif text-[22px] italic">Why choose us?</h3>
                <ul className="relative mt-6 space-y-4">
                  {whyUs.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[14px] text-white/75">
                      <ShieldIcon className="h-4 w-4 shrink-0 text-white" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#quote"
                  className="btn-shine btn-shine-dark relative mt-8 inline-block rounded-md bg-white px-7 py-3.5 text-[12.5px] font-medium tracking-[0.1em] text-ink transition-all duration-300 hover:-translate-y-0.5"
                >
                  GET A FIXED QUOTE
                </a>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="group flex h-full flex-col rounded-2xl bg-white p-8 ring-1 ring-ink/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_rgba(10,10,10,0.12)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink/5 transition-colors duration-500 group-hover:bg-ink group-hover:text-white">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-serif text-[20px] leading-snug text-ink">{s.title}</h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink/55">{s.body}</p>
                  <Link
                    href={s.href}
                    className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[13px] font-medium text-ink"
                  >
                    Learn more{" "}
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
