import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { HandIcon, ShieldIcon, StarIcon, TruckIcon } from "@/components/icons";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Removalists Brisbane to Gold Coast | Fixed-Price Corridor Specialists",
  description:
    "The Brisbane to Gold Coast removalist specialists. We run this one corridor every day — fixed-price, fully insured, white-glove moves both directions. Get an instant quote in 30 seconds.",
  alternates: { canonical: "/removalists-brisbane-to-gold-coast" },
  openGraph: {
    title: "Removalists Brisbane to Gold Coast | Residence Relocations",
    description:
      "Brisbane to Gold Coast removalist specialists. Fixed-price, fully insured, white-glove moves both directions.",
    url: `${SITE_URL}/removalists-brisbane-to-gold-coast`,
  },
};

const whyCorridor = [
  {
    icon: TruckIcon,
    title: "We run this route every day",
    body: "Brisbane to Gold Coast isn't a job we take on the side — it's the only corridor we specialise in. Our crews know the M1, the toll points, the beach-suburb access quirks and the fastest loading windows at both ends.",
  },
  {
    icon: ShieldIcon,
    title: "One fixed price, both directions",
    body: "Whether you're moving from New Farm to Broadbeach or Burleigh back up to Paddington, distance is built into your quote upfront. No interstate-style surcharges, no hourly clock ticking in traffic.",
  },
  {
    icon: HandIcon,
    title: "White glove, standard pricing",
    body: "Move Without Compromise means you don't choose between careful and affordable. Blanket-wrapping, disassembly and reassembly are included as standard, not billed as extras.",
  },
];

const routePairs: { from: string; to: string; fromSlug?: string; toSlug?: string }[] = [
  { from: "New Farm", to: "Broadbeach", fromSlug: "new-farm", toSlug: "broadbeach" },
  { from: "Paddington", to: "Burleigh Heads", fromSlug: "paddington", toSlug: "burleigh-heads" },
  { from: "Bulimba", to: "Mermaid Beach", fromSlug: "bulimba", toSlug: "mermaid-beach" },
  { from: "West End", to: "Surfers Paradise", fromSlug: "west-end", toSlug: "surfers-paradise" },
  { from: "Ascot", to: "Main Beach", fromSlug: "ascot" },
  { from: "Indooroopilly", to: "Robina", fromSlug: "indooroopilly", toSlug: "robina" },
  { from: "Carindale", to: "Varsity Lakes" },
  { from: "Chermside", to: "Helensvale" },
];

const process = [
  {
    n: "01",
    title: "Instant corridor quote",
    body: "Enter your Brisbane and Gold Coast addresses and get a fixed estimate in 30 seconds — distance along the M1 is calculated automatically.",
  },
  {
    n: "02",
    title: "Locked-in date & crew",
    body: "We confirm your exact price and reserve your moving date. Peak dates (end of month, weekends) book out fast on this corridor.",
  },
  {
    n: "03",
    title: "One-trip white glove move",
    body: "A single dedicated truck and crew for your move — loaded in Brisbane, unloaded on the Coast, same day. Nothing shared, nothing left behind.",
  },
  {
    n: "04",
    title: "Settled in, stress-free",
    body: "We place furniture where you want it, reassemble beds and tables, and clear all packaging so your new place is ready to live in.",
  },
];

const faqs = [
  {
    question: "How much do removalists cost from Brisbane to the Gold Coast?",
    answer:
      "A Brisbane to Gold Coast move is priced on your home size and the distance between your two addresses, agreed as one fixed figure before the day. A typical 2-bedroom corridor move starts from around $549 and a 3-bedroom home from around $699, with the exact price confirmed on your quote. Because we specialise in this single corridor, there's no interstate surcharge and no hourly rate that blows out in M1 traffic.",
  },
  {
    question: "How long does a Brisbane to Gold Coast move take?",
    answer:
      "The drive is roughly 75–95 minutes each way depending on your exact suburbs and traffic. Most corridor moves are completed in a single day — loaded in the morning at one end and unloaded the same afternoon at the other, with one dedicated truck and crew for your job.",
  },
  {
    question: "Do you move in both directions — Gold Coast to Brisbane as well?",
    answer:
      "Yes. We run the corridor both ways every day, so a Gold Coast to Brisbane move is priced and handled exactly the same as Brisbane to Gold Coast. Sea-change or tree-change, the fixed price and white-glove service are identical.",
  },
  {
    question: "Is my furniture insured during the move between cities?",
    answer:
      "Every corridor move includes full transit insurance as standard, covering your belongings from the moment they leave your old address until they're placed in your new home — the entire M1 leg included.",
  },
  {
    question: "How far in advance should I book a Brisbane–Gold Coast move?",
    answer:
      "For weekday moves we recommend 1–2 weeks' notice, and 2–4 weeks for weekends and end-of-month dates, which are the busiest on this corridor. Last-minute moves are often still possible — get an instant quote to check live availability for your date.",
  },
];

export default function CorridorPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="BRISBANE ↔ GOLD COAST SPECIALISTS"
        breadcrumb="Brisbane to Gold Coast Removalists"
        title="Removalists Brisbane to Gold Coast"
        description="Most removalists treat the Brisbane–Gold Coast run as an afterthought. It's the only corridor we do. Fixed-price, fully insured, white-glove moves in both directions — quoted in 30 seconds."
      />

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <Reveal>
            <span className="text-[11px] font-medium tracking-[0.22em] text-ink/45">THE CORRIDOR SPECIALISTS</span>
            <h2 className="mt-4 max-w-xl font-serif text-[32px] italic leading-[1.15] text-ink sm:text-[40px]">
              Why a corridor specialist beats a generalist mover.
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink/60">
              A generalist removalist might do the Gold Coast run once a week. We do it every single day —
              which means tighter scheduling, fewer surprises, and a crew that already knows the fastest way
              in and out of your suburb at both ends.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {whyCorridor.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="flex h-full flex-col rounded-2xl bg-white p-7 ring-1 ring-ink/5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ink/5">
                    <item.icon className="h-5 w-5 text-ink" />
                  </div>
                  <h3 className="mt-5 text-[15.5px] font-medium text-ink">{item.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-ink/60">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="grain relative overflow-hidden bg-ink py-16 text-white sm:py-24">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <Reveal>
            <span className="text-[11px] font-medium tracking-[0.22em] text-white/45">POPULAR ROUTES</span>
            <h2 className="mt-4 max-w-xl font-serif text-[32px] italic leading-[1.15] sm:text-[40px]">
              Moves we run up and down the M1.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {routePairs.map((pair, i) => (
              <Reveal key={`${pair.from}-${pair.to}`} delay={i * 50}>
                <div className="flex items-center gap-3 border-b border-white/10 pb-4 text-[14.5px]">
                  {pair.fromSlug ? (
                    <Link
                      href={`/removalists/${pair.fromSlug}`}
                      className="text-white underline decoration-white/25 underline-offset-4 transition hover:decoration-white"
                    >
                      {pair.from}
                    </Link>
                  ) : (
                    <span className="text-white">{pair.from}</span>
                  )}
                  <span className="flex-1 border-t border-dashed border-white/20" />
                  <span aria-hidden className="text-white/40">
                    →
                  </span>
                  {pair.toSlug ? (
                    <Link
                      href={`/removalists/${pair.toSlug}`}
                      className="text-white underline decoration-white/25 underline-offset-4 transition hover:decoration-white"
                    >
                      {pair.to}
                    </Link>
                  ) : (
                    <span className="text-white">{pair.to}</span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <p className="mt-8 text-[13.5px] text-white/50">
              Moving the other way? We price{" "}
              <span className="text-white/80">Gold Coast to Brisbane</span> moves exactly the same — same
              fixed price, same white-glove crew.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <Reveal>
            <span className="text-[11px] font-medium tracking-[0.22em] text-ink/45">HOW IT WORKS</span>
            <h2 className="mt-4 max-w-xl font-serif text-[32px] italic leading-[1.15] text-ink sm:text-[40px]">
              Your corridor move, start to finish.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <Reveal key={step.n} delay={i * 100}>
                <div className="border-t-2 border-ink/15 pt-6">
                  <div className="font-serif text-[16px] italic text-ink/35">{step.n}</div>
                  <h3 className="mt-4 text-[15.5px] font-medium text-ink">{step.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-ink/60">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-14 flex flex-col items-start gap-6 rounded-2xl bg-ink p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div className="flex items-center gap-4">
                <span className="flex gap-0.5 text-white">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                </span>
                <p className="max-w-md text-[15px] leading-relaxed text-white/70">
                  Rated 4.9/5 by Brisbane and Gold Coast homeowners who wanted a careful move without the
                  luxury price tag.
                </p>
              </div>
              <Link
                href="/#quote"
                className="btn-shine btn-shine-dark shrink-0 rounded-md bg-white px-8 py-4 text-[13px] font-medium tracking-[0.08em] text-ink transition-all duration-300 hover:-translate-y-0.5"
              >
                GET YOUR FIXED QUOTE
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="grain relative overflow-hidden bg-ink py-16 text-white sm:py-24">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <Reveal>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-[11px] font-medium tracking-[0.22em] text-white/45">
                  MORE THAN FURNITURE
                </span>
                <h2 className="mt-4 font-serif text-[32px] italic leading-[1.15] sm:text-[40px]">
                  Clearing out before you move?
                </h2>
                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/65">
                  A move is the perfect time to lighten the load. Add{" "}
                  <Link href="/services/rubbish-removal" className="text-white underline underline-offset-4">
                    rubbish removal
                  </Link>{" "}
                  to clear unwanted items before we pack — and for specialty items, our{" "}
                  <Link href="/services/piano-removal" className="text-white underline underline-offset-4">
                    piano
                  </Link>{" "}
                  and{" "}
                  <Link href="/services/pool-table-removal" className="text-white underline underline-offset-4">
                    pool table removal
                  </Link>{" "}
                  crews handle the heavy, awkward pieces most movers won&apos;t touch.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/moving-brisbane"
                  className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition hover:bg-white/[0.08]"
                >
                  <div className="text-[15px] font-medium">Moving in Brisbane</div>
                  <div className="mt-1.5 text-[13px] text-white/50">Suburb-by-suburb removals</div>
                </Link>
                <Link
                  href="/moving-gold-coast"
                  className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition hover:bg-white/[0.08]"
                >
                  <div className="text-[15px] font-medium">Moving to the Gold Coast</div>
                  <div className="mt-1.5 text-[13px] text-white/50">High-rise &amp; coastal moves</div>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQSection heading="Brisbane to Gold Coast Moving FAQs" items={faqs} />
      <Footer />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Brisbane to Gold Coast removalist service",
          provider: { "@type": "MovingCompany", name: "Residence Relocations", url: SITE_URL },
          areaServed: [
            { "@type": "City", name: "Brisbane" },
            { "@type": "City", name: "Gold Coast" },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Brisbane to Gold Coast moves",
            itemListElement: [
              { "@type": "Offer", name: "2 Bedroom corridor move", priceCurrency: "AUD", price: "549" },
              { "@type": "Offer", name: "3 Bedroom corridor move", priceCurrency: "AUD", price: "699" },
            ],
          },
          url: `${SITE_URL}/removalists-brisbane-to-gold-coast`,
        }}
      />
    </main>
  );
}
