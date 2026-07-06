import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { ShieldIcon, StarIcon } from "@/components/icons";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Removalists Gold Coast",
  description:
    "Fixed-price removalists on the Gold Coast. White glove furniture moving and rubbish removal across Broadbeach, Surfers Paradise, Robina, Burleigh Heads and Miami.",
  alternates: { canonical: "/moving-gold-coast" },
  openGraph: {
    title: "Removalists Gold Coast | Residence Relocations",
    description:
      "Fixed-price removalists on the Gold Coast. White glove furniture moving and rubbish removal, quoted in 30 seconds.",
    url: `${SITE_URL}/moving-gold-coast`,
  },
};

const suburbs = [
  "Surfers Paradise",
  "Broadbeach",
  "Robina",
  "Burleigh Heads",
  "Miami",
  "Mermaid Beach",
  "Southport",
  "Coolangatta",
  "Currumbin",
  "Palm Beach",
  "Main Beach",
  "Varsity Lakes",
  "Helensvale",
  "Nerang",
  "Coomera",
  "Tugun",
];

const reasons = [
  {
    title: "High-rise & apartment specialists",
    body: "Lift bookings, loading dock access and building move-in permits are second nature to us — we coordinate directly with body corporates across Surfers Paradise and Broadbeach towers.",
  },
  {
    title: "Fixed pricing, beach-traffic proof",
    body: "Summer weekends bring heavy coastal traffic — your fixed quote already accounts for it, so a slow M1 or Gold Coast Highway never adds a cent to your bill.",
  },
  {
    title: "Trusted by local agents",
    body: "We partner with Ray White, McGrath and Stone offices across the Gold Coast on pre-sale cleans and removals, tuned to settlement-day timelines.",
  },
];

const faqs = [
  {
    question: "Do you service Gold Coast apartment towers and body corporates?",
    answer:
      "Yes — we regularly coordinate lift bookings, certificates of currency and move-in time slots with building managers across Surfers Paradise, Broadbeach and Main Beach. Let us know your building when you book and we'll handle the paperwork.",
  },
  {
    question: "Which Gold Coast suburbs do you cover?",
    answer:
      "The full Gold Coast, from Coolangatta and Tugun in the south to Helensvale and Coomera in the north, plus Robina, Burleigh Heads, Nerang and everywhere in between.",
  },
  {
    question: "Can you move between Brisbane and the Gold Coast?",
    answer:
      "Absolutely — this is one of our most common routes. Distance is factored straight into your fixed quote, so there's no separate long-distance surcharge to negotiate.",
  },
];

export default function MovingGoldCoastPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="GOLD COAST REMOVALISTS"
        breadcrumb="Moving to the Gold Coast"
        title="Removalists on the Gold Coast, Without the Guesswork"
        description="Fixed-price moving and rubbish removal from Coolangatta to Coomera — including high-rise apartments and body corporate coordination. Get an instant quote in 30 seconds."
      />

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <Reveal>
            <span className="text-[11px] font-medium tracking-[0.22em] text-ink/45">SERVICE AREA</span>
            <h2 className="mt-4 max-w-lg font-serif text-[32px] italic leading-[1.15] text-ink sm:text-[40px]">
              Moving the Gold Coast, suburb by suburb.
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-3">
            {suburbs.map((suburb, i) => (
              <Reveal key={suburb} delay={i * 30}>
                <span className="inline-block rounded-full bg-white px-4 py-2 text-[13px] text-ink/70 ring-1 ring-ink/10">
                  {suburb}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="grain relative overflow-hidden bg-ink py-16 text-white sm:py-24">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <Reveal>
            <div className="flex items-center gap-2">
              <span className="flex gap-0.5 text-white">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-3.5 w-3.5" />
                ))}
              </span>
              <span className="text-[12.5px] text-white/60">4.9/5 from Gold Coast homeowners</span>
            </div>
            <h2 className="mt-5 max-w-lg font-serif text-[32px] italic leading-[1.15] sm:text-[40px]">
              Why Gold Coast homeowners choose us.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {reasons.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 100}>
                <div className="border-t-2 border-white/15 pt-6">
                  <ShieldIcon className="h-6 w-6 text-white" />
                  <h3 className="mt-4 text-[15.5px] font-medium">{reason.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-white/60">{reason.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={330}>
            <div className="mt-14 flex flex-col gap-4 rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <p className="max-w-md text-[15px] leading-relaxed text-white/70">
                Heading up from Brisbane? We specialise in{" "}
                <Link
                  href="/removalists-brisbane-to-gold-coast"
                  className="text-white underline underline-offset-4"
                >
                  Brisbane to Gold Coast removals
                </Link>
                {" "}— or add a{" "}
                <Link href="/services/rubbish-removal" className="text-white underline underline-offset-4">
                  rubbish removal
                </Link>{" "}
                before you list.
              </p>
              <Link
                href="/removalists-brisbane-to-gold-coast"
                className="shrink-0 rounded-md px-6 py-3 text-[13px] font-medium tracking-[0.06em] text-white ring-1 ring-white/30 transition hover:bg-white/10"
              >
                THE CORRIDOR ROUTE
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQSection heading="Gold Coast Moving FAQs" items={faqs} />
      <Footer />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Residential and office removalist service",
          provider: { "@type": "MovingCompany", name: "Residence Relocations", url: SITE_URL },
          areaServed: {
            "@type": "City",
            name: "Gold Coast",
            containedInPlace: { "@type": "State", name: "Queensland" },
          },
          url: `${SITE_URL}/moving-gold-coast`,
        }}
      />
    </main>
  );
}
