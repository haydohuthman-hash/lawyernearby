import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { SUBURBS } from "@/content/suburbs";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas | Brisbane & Gold Coast Removalists",
  description:
    "Every suburb we service across Brisbane and the Gold Coast — plus the daily Brisbane to Gold Coast corridor. Find your suburb and get a fixed quote in 30 seconds.",
  alternates: { canonical: "/service-areas" },
  openGraph: {
    title: "Service Areas | Residence Relocations",
    description:
      "Every suburb we service across Brisbane and the Gold Coast, plus the daily corridor run.",
    url: `${SITE_URL}/service-areas`,
  },
};

export default function ServiceAreasPage() {
  const brisbane = SUBURBS.filter((s) => s.region === "Brisbane");
  const goldCoast = SUBURBS.filter((s) => s.region === "Gold Coast");

  return (
    <main>
      <Navbar />

      <section className="grain relative -mt-[88px] overflow-hidden bg-ink pb-16 pt-[calc(3.5rem+88px)] text-white sm:pb-20 sm:pt-[calc(5rem+88px)]">
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
            <span className="text-white/70">Service Areas</span>
          </nav>
          <p className="mt-8 text-[11px] font-medium tracking-[0.22em] text-white/45">SERVICE AREAS</p>
          <h1 className="mt-4 font-serif text-[36px] italic leading-[1.1] xs:text-[42px] sm:text-[52px]">
            Brisbane to the Gold Coast, suburb by suburb.
          </h1>
          <p className="mt-6 max-w-2xl text-[15.5px] leading-relaxed text-white/65 sm:text-[16.5px]">
            We run the corridor every day — which means deep local knowledge at both ends. Find your
            suburb below, or go straight to a{" "}
            <Link href="/#quote" className="text-white underline underline-offset-4">
              fixed quote
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-[1000px] px-5 sm:px-8">
          <Reveal>
            <Link
              href="/removalists-brisbane-to-gold-coast"
              className="group block rounded-2xl bg-ink p-8 text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(10,10,10,0.35)] sm:p-10"
            >
              <p className="text-[11px] font-medium tracking-[0.22em] text-white/45">THE SPECIALTY</p>
              <h2 className="mt-3 font-serif text-[26px] italic leading-[1.2] sm:text-[32px]">
                Brisbane ↔ Gold Coast corridor moves
              </h2>
              <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-white/60">
                The route we run every single day, both directions — one truck, one crew, one fixed price.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium">
                See the corridor service{" "}
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </span>
            </Link>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-2">
            <Reveal>
              <div>
                <h2 className="font-serif text-[26px] italic text-ink">Brisbane</h2>
                <p className="mt-2 text-[13.5px] text-ink/55">
                  Inner-city, riverside and western suburbs —{" "}
                  <Link href="/moving-brisbane" className="underline underline-offset-4">
                    see all Brisbane moves
                  </Link>
                  .
                </p>
                <ul className="mt-6 space-y-3">
                  {brisbane.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/removalists/${s.slug}`}
                        className="group flex items-center justify-between rounded-xl bg-white px-5 py-4 ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(10,10,10,0.08)]"
                      >
                        <span className="text-[14.5px] font-medium text-ink">Removalists {s.name}</span>
                        <span
                          aria-hidden
                          className="text-ink/40 transition-transform duration-300 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={110}>
              <div>
                <h2 className="font-serif text-[26px] italic text-ink">Gold Coast</h2>
                <p className="mt-2 text-[13.5px] text-ink/55">
                  Beachside, tower and family suburbs —{" "}
                  <Link href="/moving-gold-coast" className="underline underline-offset-4">
                    see all Gold Coast moves
                  </Link>
                  .
                </p>
                <ul className="mt-6 space-y-3">
                  {goldCoast.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/removalists/${s.slug}`}
                        className="group flex items-center justify-between rounded-xl bg-white px-5 py-4 ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(10,10,10,0.08)]"
                      >
                        <span className="text-[14.5px] font-medium text-ink">Removalists {s.name}</span>
                        <span
                          aria-hidden
                          className="text-ink/40 transition-transform duration-300 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <p className="mt-12 text-[14px] leading-relaxed text-ink/55">
              Don&apos;t see your suburb? We cover all of greater Brisbane and the Gold Coast — enter your
              address in the{" "}
              <Link href="/#quote" className="underline underline-offset-4">
                quote calculator
              </Link>{" "}
              and we&apos;ll confirm instantly.
            </p>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
