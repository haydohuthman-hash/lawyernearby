const faqs = [
  {
    q: "Is it actually free?",
    a: "Yes — no credit card, no trial that converts into a charge. Just your email.",
  },
  {
    q: "What if this isn't for me?",
    a: "Unsubscribe with one click, any time. We'd rather you leave than stay annoyed.",
  },
  {
    q: "Do I need an existing business?",
    a: "It's built for founders already selling something, but the frameworks work just as well if you're about to launch.",
  },
  {
    q: "Will I get sales emails after this?",
    a: "You'll get the blueprint, the bonus prompt pack, and occasional emails when we publish something worth your time — nothing more.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-[#eaf4ee] py-20 sm:py-28">
      <div className="mx-auto max-w-[720px] px-5 sm:px-8">
        <div className="text-center">
          <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0e1a14]/40">FAQ</div>
          <h2 className="mt-4 text-[32px] font-extrabold leading-tight tracking-[-0.01em] text-[#0e1a14] sm:text-[42px]">
            Questions, answered
          </h2>
        </div>

        <div className="mt-12 divide-y divide-black/10 rounded-2xl bg-white ring-1 ring-black/5">
          {faqs.map((item) => (
            <details key={item.q} className="group p-6 open:pb-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15.5px] font-semibold text-[#0e1a14]">
                {item.q}
                <span className="shrink-0 text-[18px] text-[#0e1a14]/40 transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[14px] leading-relaxed text-[#0e1a14]/60">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
