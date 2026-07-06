import Link from "next/link";
import { StarIcon } from "./icons";

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumb: string;
}) {
  return (
    <section className="grain relative overflow-hidden bg-ink pb-16 pt-14 text-white sm:pb-24 sm:pt-20">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-[1000px] px-5 sm:px-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] text-white/45">
          <Link href="/" className="transition hover:text-white/80">
            Home
          </Link>
          <span aria-hidden>/</span>
          <span className="text-white/70">{breadcrumb}</span>
        </nav>

        <div className="mt-8 flex items-center gap-2 text-white/85">
          <span className="flex gap-0.5 text-white">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-3.5 w-3.5" />
            ))}
          </span>
          <span className="text-[12.5px]">4.9/5 from 250+ reviews</span>
        </div>

        <p className="mt-6 text-[11px] font-medium tracking-[0.22em] text-white/45">{eyebrow}</p>
        <h1 className="mt-4 font-serif text-[36px] italic leading-[1.1] xs:text-[42px] sm:text-[52px] lg:text-[62px]">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-[15.5px] leading-relaxed text-white/65 sm:text-[16.5px]">
          {description}
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/#quote"
            className="btn-shine btn-shine-dark rounded-md bg-white px-8 py-4 text-center text-[13px] font-medium tracking-[0.08em] text-ink shadow-[0_8px_30px_rgba(255,255,255,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(255,255,255,0.2)]"
          >
            GET A FIXED QUOTE
          </Link>
          <Link
            href="/#contact"
            className="rounded-md px-8 py-4 text-center text-[13px] font-medium tracking-[0.08em] text-white ring-1 ring-white/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:ring-white/60"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </section>
  );
}
