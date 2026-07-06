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
  title: "Removalists Brisbane",
  description:
    "Fixed-price removalists in Brisbane. White glove furniture moving and rubbish removal across New Farm, Paddington, Ascot, Carindale and every inner and outer suburb.",
  alternates: { canonical: "/moving-brisbane" },
  openGraph: {
    title: "Removalists Brisbane | Residence Relocations",
    description:
      "Fixed-price removalists in Brisbane. White glove furniture moving and rubbish removal, quoted in 30 seconds.",
    url: `${SITE_URL}/moving-brisbane`,
  },
};

const suburbs = [
  "New Farm",
  "Paddington",
  "West End",
  "Ascot",
  "Hamilton",
  "Bulimba",
  "Indooroopilly",
  "Toowong",
  "Carindale",
  "Chermside",
  "Wilston",
  "Clayfield",
  "Sunnybank",
  "Chapel Hill",
  "Kangaroo Point",
  "Fig Tree Pocket",
];

const reasons = [
  {
    title: "We know Brisbane's housing stock",
    body: "Queenslanders on stumps, steep driveways, and narrow inner-city streets — our crews plan access before they arrive, so moving day isn't spent working out how to get a couch up the stairs.",
  },
  {
    title: "Fixed pricing, no surprises",
    body: "Your quote factors in Brisbane's traffic and distance between suburbs upfront, so the price you're quoted is the price you pay — no hourly blowouts if the Story Bridge is backed up.",
  },
  {
    title: "Trusted by local agents",
    body: "We work alongside Ray White, LJ Hooker, Belle Property and McGrath offices across Brisbane on pre-sale cleans and removals, so we understand settlement-day deadlines.",
  },
];

const faqs = [
  {
    question: "Which Brisbane suburbs do you service?",
    answer:
      "We cover all of greater Brisbane — inner-city suburbs like New Farm, West End and Paddington, as well as Carindale, Chermside, Indooroopilly, Sunnybank and everywhere in between. If you're unsure, enter your address in the quote calculator and we'll confirm instantly.",
  },
  {
    question: "Can you move furniture from a Queenslander with stairs or a steep driveway?",
    answer:
      "Yes — this is one of the most common jobs we do in Brisbane. Our crews carry ramps, trolleys and rigging gear for stairs, stumps and tight access, and we'll ask about access details when you book so the right equipment is on the truck.",
  },
  {
    question: "Do you offer same-day or weekend moves in Brisbane?",
    answer:
      "Weekend slots are popular and best booked 1–2 weeks ahead. Weekday and same-week availability is usually more flexible — get an instant quote to see live availability for your move date.",
  },
];

export default function MovingBrisbanePage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="BRISBANE REMOVALISTS"
        breadcrumb="Moving in Brisbane"
        title="Removalists in Brisbane You Can Actually Trust"
        description="Fixed-price moving and rubbish removal across every Brisbane suburb — from inner-city apartments to Queenslanders in the outer suburbs. Get an instant quote in 30 seconds."
      />

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <Reveal>
            <span className="text-[11px] font-medium tracking-[0.22em] text-ink/45">SERVICE AREA</span>
            <h2 className="mt-4 max-w-lg font-serif text-[32px] italic leading-[1.15] text-ink sm:text-[40px]">
              Moving Brisbane, suburb by suburb.
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
              <span className="text-[12.5px] text-white/60">4.9/5 from Brisbane homeowners</span>
            </div>
            <h2 className="mt-5 max-w-lg font-serif text-[32px] italic leading-[1.15] sm:text-[40px]">
              Why Brisbane homeowners choose us.
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
                Also planning a clear-out before you list? See our{" "}
                <Link href="/services/rubbish-removal" className="text-white underline underline-offset-4">
                  Brisbane rubbish removal service
                </Link>
                .
              </p>
              <Link
                href="/moving-gold-coast"
                className="shrink-0 rounded-md px-6 py-3 text-[13px] font-medium tracking-[0.06em] text-white ring-1 ring-white/30 transition hover:bg-white/10"
              >
                MOVING TO THE GOLD COAST?
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQSection heading="Brisbane Moving FAQs" items={faqs} />
      <Footer />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Residential and office removalist service",
          provider: { "@type": "MovingCompany", name: "Residence Relocations", url: SITE_URL },
          areaServed: { "@type": "City", name: "Brisbane", containedInPlace: { "@type": "State", name: "Queensland" } },
          url: `${SITE_URL}/moving-brisbane`,
        }}
      />
    </main>
  );
}
