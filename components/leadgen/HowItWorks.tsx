const steps = [
  {
    number: "01",
    title: "Drop your email",
    body: "Takes 5 seconds. No forms, no calls, no credit card.",
  },
  {
    number: "02",
    title: "Get the blueprint",
    body: "A 24-page PDF plus the AI prompt pack, ready to open right away.",
  },
  {
    number: "03",
    title: "Run the playbook",
    body: "Follow the 30-day calendar and start moving toward your next $10K month.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#eaf4ee] py-20 sm:py-28">
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
        <div className="mx-auto max-w-xl text-center">
          <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0e1a14]/40">
            How it works
          </div>
          <h2 className="mt-4 text-[32px] font-extrabold leading-tight tracking-[-0.01em] text-[#0e1a14] sm:text-[42px]">
            Three steps. Five minutes.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="text-center sm:text-left">
              <div className="text-[15px] font-bold text-[#0e1a14]/30">{step.number}</div>
              <div className="mt-3 text-[18px] font-semibold text-[#0e1a14]">{step.title}</div>
              <div className="mt-2 text-[14px] leading-relaxed text-[#0e1a14]/60">{step.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
