import { StarIcon } from "./icons";

const reviews = [
  {
    quote:
      "The fixed quote was exactly what we paid — no last-minute surprises. The crew was careful with every piece of furniture and finished ahead of schedule.",
    name: "Sarah M.",
    context: "Brisbane QLD",
  },
  {
    quote:
      "Booked their rubbish removal service after a renovation. Fast, professional, and the AI quote tool made getting a price genuinely take under a minute.",
    name: "David L.",
    context: "Gold Coast QLD",
  },
  {
    quote:
      "As an agent I recommend Residence Relocations to every client preparing to list. Their pre-sale cleans consistently help properties present better.",
    name: "Priya K.",
    context: "Ray White Partner Agent",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-ink py-24 text-white">
      <div className="mx-auto max-w-[1440px] px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-[11px] font-medium tracking-[0.2em] text-white/45">REVIEWS</span>
            <h2 className="mt-4 font-serif text-[38px] italic leading-[1.15] sm:text-[44px]">
              Loved by homeowners.
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex gap-0.5 text-white">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </span>
            <span className="text-[13px] text-white/60">4.9/5 from 250+ reviews</span>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10">
              <span className="flex gap-0.5 text-white">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-3.5 w-3.5" />
                ))}
              </span>
              <p className="mt-5 text-[14.5px] leading-relaxed text-white/70">&ldquo;{r.quote}&rdquo;</p>
              <div className="mt-6 text-[13px] font-medium text-white">{r.name}</div>
              <div className="text-[12px] text-white/45">{r.context}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
