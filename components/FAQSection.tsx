import JsonLd from "./JsonLd";
import Reveal from "./Reveal";

type QA = { question: string; answer: string };

export default function FAQSection({ heading, items }: { heading: string; items: QA[] }) {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-[900px] px-5 sm:px-8">
        <Reveal>
          <h2 className="font-serif text-[32px] italic leading-[1.15] text-ink sm:text-[40px]">{heading}</h2>
        </Reveal>
        <div className="mt-10 divide-y divide-ink/10 border-t border-ink/10">
          {items.map((item, i) => (
            <Reveal key={item.question} delay={i * 80}>
              <div className="py-6">
                <h3 className="text-[15.5px] font-medium text-ink">{item.question}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-ink/60">{item.answer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }}
      />
    </section>
  );
}
