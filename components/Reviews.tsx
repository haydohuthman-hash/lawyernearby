import { StarIcon } from "./icons";
import Reveal from "./Reveal";

const featured = {
  quote:
    "From the first quote to the final box, everything was handled with genuine care. The price never changed, the crew was immaculate, and our four-bedroom move finished two hours early. It's the first move we've ever enjoyed.",
  name: "Charlotte & James W.",
  context: "New Farm to Broadbeach, QLD",
};

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

function Stars({ className }: { className?: string }) {
  return (
    <span className={`flex gap-0.5 text-white ${className ?? ""}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className="h-3.5 w-3.5" />
      ))}
    </span>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="grain relative overflow-hidden bg-ink py-16 text-white sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="text-[11px] font-medium tracking-[0.22em] text-white/45">REVIEWS</span>
              <h2 className="mt-4 font-serif text-[40px] italic leading-[1.12] sm:text-[48px]">
                Loved by homeowners.
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <Stars />
              <span className="text-[13px] text-white/60">4.9/5 from 250+ reviews</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <figure className="mt-16 border-l-2 border-white/25 pl-8 sm:pl-12">
            <blockquote className="max-w-4xl font-serif text-[24px] italic leading-[1.5] text-white/90 sm:text-[30px]">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-4">
              <Stars />
              <span className="text-[13.5px] font-medium">{featured.name}</span>
              <span className="text-[12.5px] text-white/45">{featured.context}</span>
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 110}>
              <div className="flex h-full flex-col rounded-2xl bg-white/5 p-9 ring-1 ring-white/10 transition-colors duration-500 hover:bg-white/[0.08]">
                <Stars />
                <p className="mt-5 flex-1 text-[14.5px] leading-relaxed text-white/70">&ldquo;{r.quote}&rdquo;</p>
                <div className="mt-7 text-[13px] font-medium text-white">{r.name}</div>
                <div className="mt-0.5 text-[12px] text-white/45">{r.context}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
