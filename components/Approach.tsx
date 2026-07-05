import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Instant Fixed Quote",
    body: "Tell us your move details and get a transparent, all-inclusive price in under 30 seconds — no site visit required.",
  },
  {
    n: "02",
    title: "Plan & Confirm",
    body: "We schedule your crew, confirm access details and send a reminder with everything you need to know before moving day.",
  },
  {
    n: "03",
    title: "White Glove Moving Day",
    body: "Our trained, insured team handles, protects and transports your belongings with care from door to door.",
  },
  {
    n: "04",
    title: "Settle In, Stress-Free",
    body: "We unload, place furniture where you want it, and clear all packaging — leaving your new place ready to live in.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="bg-cream pb-28 pt-4">
      <div className="mx-auto max-w-[1440px] px-8">
        <div className="border-t border-ink/10 pt-24">
          <Reveal>
            <div className="max-w-xl">
              <span className="text-[11px] font-medium tracking-[0.22em] text-ink/45">OUR APPROACH</span>
              <h2 className="mt-4 font-serif text-[40px] italic leading-[1.12] text-ink sm:text-[48px]">
                A simpler way to move.
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 110}>
                <div className="group border-t-2 border-ink/15 pt-7 transition-colors duration-500 hover:border-ink">
                  <div className="font-serif text-[17px] italic text-ink/35 transition-colors duration-500 group-hover:text-ink">
                    {step.n}
                  </div>
                  <h3 className="mt-5 text-[16.5px] font-medium text-ink">{step.title}</h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-ink/55">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
