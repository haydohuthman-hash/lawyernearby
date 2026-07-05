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
    <section id="approach" className="bg-cream py-24">
      <div className="mx-auto max-w-[1440px] px-8">
        <div className="max-w-xl">
          <span className="text-[11px] font-medium tracking-[0.2em] text-ink/45">OUR APPROACH</span>
          <h2 className="mt-4 font-serif text-[38px] italic leading-[1.15] text-ink sm:text-[44px]">
            A simpler way to move.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.n} className="border-t border-ink/15 pt-6">
              <div className="font-serif text-[15px] italic text-ink/40">{step.n}</div>
              <h3 className="mt-4 text-[16px] font-medium text-ink">{step.title}</h3>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink/55">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
