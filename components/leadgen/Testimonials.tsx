import { StarIcon } from "@/components/icons";

const quotes = [
  {
    quote:
      "Read it on a Sunday, launched the offer from page 8 by Wednesday. First sales came in that same week.",
    name: "Maya",
    role: "Founder, coaching business",
  },
  {
    quote:
      "The email scripts alone were worth it. I stopped writing from scratch and just adapted theirs.",
    name: "Daniel",
    role: "Solo consultant",
  },
  {
    quote: "Finally a free guide that isn't secretly a 40-minute pitch for a $2,000 course.",
    name: "Priya",
    role: "E-commerce owner",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
        <div className="mx-auto max-w-xl text-center">
          <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0e1a14]/40">
            From founders who read it
          </div>
          <h2 className="mt-4 text-[32px] font-extrabold leading-tight tracking-[-0.01em] text-[#0e1a14] sm:text-[42px]">
            12,400+ downloads and counting
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {quotes.map((t) => (
            <div key={t.name} className="rounded-2xl bg-[#f6faf7] p-6 ring-1 ring-black/5">
              <span className="flex gap-0.5 text-[#0e1a14]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-3.5 w-3.5" />
                ))}
              </span>
              <p className="mt-4 text-[14.5px] leading-relaxed text-[#0e1a14]/75">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-5 text-[13.5px] font-semibold text-[#0e1a14]">{t.name}</div>
              <div className="text-[12.5px] text-[#0e1a14]/50">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
