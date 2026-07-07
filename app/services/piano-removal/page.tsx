import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { HandIcon, ShieldIcon, TruckIcon } from "@/components/icons";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Piano Removals Brisbane & Gold Coast | Upright & Grand",
  description:
    "Specialist piano removalists across Brisbane and the Gold Coast. Uprights, baby grands and grands moved with piano trolleys, ramps and trained crews — fixed price, fully insured.",
  alternates: { canonical: "/services/piano-removal" },
  openGraph: {
    title: "Piano Removals Brisbane & Gold Coast | Residence Relocations",
    description:
      "Uprights, baby grands and grands moved with the right equipment and trained crews — fixed price, fully insured.",
    url: `${SITE_URL}/services/piano-removal`,
  },
};

const pianoTypes = [
  {
    title: "Upright pianos",
    body: "From compact consoles (~200kg) to full uprights (~300kg). Moved on a piano trolley with the keyboard lid locked and body fully wrapped.",
  },
  {
    title: "Baby grand & grand pianos",
    body: "Legs and lyre removed, the body rotated onto a padded piano skid, then wrapped and strapped. Reassembled and positioned in your new room.",
  },
  {
    title: "Pianolas & antiques",
    body: "Older instruments are heavier and more fragile than they look. We plan these moves piece by piece and treat original casework like the heirloom it is.",
  },
  {
    title: "Digital & hybrid pianos",
    body: "Lighter, but still awkward and scratch-prone. Wrapped, boxed where possible, and transported upright the way the manufacturer intended.",
  },
];

const steps = [
  {
    n: "01",
    title: "Tell us the piano & the path",
    body: "Type, brand if known, and the access at both ends — steps, turns, gravel, lifts. Photos help us quote exactly.",
  },
  {
    n: "02",
    title: "One fixed price",
    body: "Piano moves are quoted flat, based on instrument and access. No hourly clock, no surprise 'heavy item' fee on the day.",
  },
  {
    n: "03",
    title: "The move itself",
    body: "Trained lifters, piano trolley or skid, ramps for every step, floor protection at both ends. Slow is smooth; smooth is safe.",
  },
  {
    n: "04",
    title: "In position, ready to tune",
    body: "We place the piano exactly where you want it. Allow a couple of weeks for it to acclimatise, then book your tuner.",
  },
];

const faqs = [
  {
    question: "How much does it cost to move a piano in Brisbane or the Gold Coast?",
    answer:
      "Upright pianos typically move from around $220 as part of a house move or $300–$450 standalone, depending on access. Grands and baby grands are quoted individually — usually $450–$750 — because leg removal, skid work and crew size vary. Every quote is a fixed price agreed before the day.",
  },
  {
    question: "Can you move a piano up or down stairs?",
    answer:
      "Yes — stairs are the most common complication and the main thing we plan for. We use ramps, stair rollers and additional crew depending on the flight. Tell us the number of steps and any landings when you book.",
  },
  {
    question: "Will moving the piano put it out of tune?",
    answer:
      "Any move can slightly affect tuning because of vibration and humidity change, not damage. Standard advice: let the piano settle in its new room for 2–3 weeks, then have it tuned. The move itself, done properly, won't harm the instrument.",
  },
  {
    question: "Is the piano insured during the move?",
    answer:
      "Yes — full transit insurance covers the instrument door to door, the same as every item we move.",
  },
  {
    question: "Do you move pianos between Brisbane and the Gold Coast?",
    answer:
      "Every week. A piano can ride as part of your full house move on the corridor, or as a standalone piano-only job in either direction.",
  },
];

export default function PianoRemovalPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="PIANO REMOVALS"
        breadcrumb="Piano Removal"
        title="Piano Removals With the Right Hands"
        description="Uprights, baby grands and grands moved by crews trained for them — piano trolleys, skids and ramps on every job, one fixed price, full transit insurance. Brisbane, Gold Coast, and the corridor between."
      />

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <Reveal>
            <span className="text-[11px] font-medium tracking-[0.22em] text-ink/45">WHAT WE MOVE</span>
            <h2 className="mt-4 max-w-xl font-serif text-[32px] italic leading-[1.15] text-ink sm:text-[40px]">
              Every piano, from console to concert grand.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {pianoTypes.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="rounded-2xl bg-white p-7 ring-1 ring-ink/5">
                  <h3 className="text-[15.5px] font-medium text-ink">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink/60">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="grain relative overflow-hidden bg-ink py-16 text-white sm:py-24">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <Reveal>
            <span className="text-[11px] font-medium tracking-[0.22em] text-white/45">HOW IT WORKS</span>
            <h2 className="mt-4 max-w-xl font-serif text-[32px] italic leading-[1.15] sm:text-[40px]">
              Planned like a rigging job, priced like a removal.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 100}>
                <div className="border-t-2 border-white/15 pt-6">
                  <div className="font-serif text-[16px] italic text-white/40">{step.n}</div>
                  <h3 className="mt-4 text-[15.5px] font-medium">{step.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-white/60">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-14 flex flex-col items-start gap-5 rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div className="flex gap-4">
                <ShieldIcon className="h-7 w-7 shrink-0 text-white" />
                <p className="max-w-lg text-[15px] leading-relaxed text-white/70">
                  Moving the whole house too? The piano joins your{" "}
                  <Link
                    href="/removalists-brisbane-to-gold-coast"
                    className="text-white underline underline-offset-4"
                  >
                    Brisbane–Gold Coast move
                  </Link>{" "}
                  at a reduced add-on rate. Also moving a{" "}
                  <Link href="/services/pool-table-removal" className="text-white underline underline-offset-4">
                    pool table
                  </Link>
                  ? Same crew, same visit.
                </p>
              </div>
              <Link
                href="/#quote"
                className="btn-shine btn-shine-dark shrink-0 rounded-md bg-white px-8 py-4 text-[13px] font-medium tracking-[0.08em] text-ink transition-all duration-300 hover:-translate-y-0.5"
              >
                GET A FIXED QUOTE
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQSection heading="Piano Removal FAQs" items={faqs} />
      <Footer />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Piano removal service",
          provider: { "@type": "MovingCompany", name: "Residence Relocations", url: SITE_URL },
          areaServed: [
            { "@type": "City", name: "Brisbane" },
            { "@type": "City", name: "Gold Coast" },
          ],
          url: `${SITE_URL}/services/piano-removal`,
        }}
      />
    </main>
  );
}
