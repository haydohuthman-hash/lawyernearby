import { BoxIcon, HouseIcon, ShieldIcon, TrashIcon, TruckIcon } from "./icons";

const services = [
  {
    icon: TruckIcon,
    title: "White Glove Moving",
    body: "Careful, professional moving services for homes of all sizes.",
  },
  {
    icon: TrashIcon,
    title: "Rubbish Removal",
    body: "Fast, responsible removal of unwanted items.",
  },
  {
    icon: BoxIcon,
    title: "Furniture & Heavy Item Relocation",
    body: "Specialists in heavy lifting and complex item moves.",
  },
  {
    icon: HouseIcon,
    title: "Pre Sale & Post Move Cleans",
    body: "Leave your old place spotless or come home to clean.",
  },
];

const whyUs = ["Fixed, itemised pricing", "Background-checked crews", "Full transit insurance"];

export default function Services() {
  return (
    <section id="services" className="bg-cream py-24">
      <div className="mx-auto max-w-[1440px] px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="text-[11px] font-medium tracking-[0.2em] text-ink/45">WHAT WE DO</span>
            <h2 className="mt-4 font-serif text-[38px] italic leading-[1.15] text-ink sm:text-[44px]">
              Premium Moving &amp; Rubbish Removal
            </h2>

            <div className="mt-8 rounded-2xl bg-ink p-8 text-white">
              <h3 className="font-serif text-[20px] italic">Why choose us?</h3>
              <ul className="mt-5 space-y-4">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[14px] text-white/75">
                    <ShieldIcon className="h-4 w-4 shrink-0 text-white" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#quote"
                className="mt-7 inline-block rounded-md bg-white px-6 py-3 text-[12.5px] font-medium tracking-[0.08em] text-ink transition hover:bg-white/90"
              >
                GET A FIXED QUOTE
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.title}
                className="flex flex-col rounded-2xl bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-ink/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ink/5">
                  <s.icon className="h-5 w-5 text-ink" />
                </div>
                <h3 className="mt-5 font-serif text-[19px] leading-snug text-ink">{s.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink/55">{s.body}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink transition hover:gap-2.5"
                >
                  Learn more <span aria-hidden>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
