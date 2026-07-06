import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { BoxIcon, HandIcon, ShieldIcon, TruckIcon } from "@/components/icons";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Removalists & Furniture Moving Services",
  description:
    "White glove removalist services across Brisbane and the Gold Coast. Fixed, upfront pricing, trained crews, and full transit insurance — no hourly surprises.",
  alternates: { canonical: "/services/removalists" },
  openGraph: {
    title: "Removalists & Furniture Moving Services | Residence Relocations",
    description:
      "White glove removalist services across Brisbane and the Gold Coast. Fixed, upfront pricing and full transit insurance.",
    url: `${SITE_URL}/services/removalists`,
  },
};

const included = [
  {
    icon: ShieldIcon,
    title: "Fixed price, confirmed upfront",
    body: "Your quote is calculated from your inventory and distance before the day — the number you see is the number you pay.",
  },
  {
    icon: HandIcon,
    title: "Blankets, wrapping & disassembly",
    body: "Furniture is padded, wrapped and disassembled where needed at no extra charge — and reassembled on arrival.",
  },
  {
    icon: TruckIcon,
    title: "Modern, fully-equipped fleet",
    body: "Our trucks carry trolleys, ramps and rigging gear so awkward items move safely, without damage to walls or floors.",
  },
  {
    icon: BoxIcon,
    title: "Packing materials on request",
    body: "Need boxes, tape or packing paper? We supply materials ahead of your move so you're never scrambling the night before.",
  },
];

const moveTypes = [
  {
    title: "House removals",
    body: "Full-service moves for 1–6 bedroom homes, including garages, sheds and outdoor furniture.",
  },
  {
    title: "Apartment & unit moves",
    body: "Lift bookings, loading dock coordination and building access managed for you ahead of moving day.",
  },
  {
    title: "Office & small business relocations",
    body: "After-hours and weekend moves to minimise downtime, with desks, IT equipment and files handled with care.",
  },
  {
    title: "Interstate & long-distance",
    body: "Brisbane and Gold Coast moves further afield, with route planning built into your fixed quote.",
  },
];

const faqs = [
  {
    question: "How is the fixed price calculated?",
    answer:
      "We use your pickup and drop-off addresses, move date, and an inventory of your items (boxes, furniture, appliances and specialty pieces) to calculate one all-inclusive price. That price doesn't change on the day, regardless of traffic or how long loading takes.",
  },
  {
    question: "Do you provide packing boxes and materials?",
    answer:
      "Yes. You can add boxes, tape, bubble wrap and packing paper to your quote, delivered ahead of your move date so you have time to pack at your own pace.",
  },
  {
    question: "Are my belongings insured during the move?",
    answer:
      "Every move includes full transit insurance as standard, covering your belongings from the moment they leave your old address until they're placed in your new home.",
  },
  {
    question: "How much notice do you need to book?",
    answer:
      "We recommend booking 1–2 weeks ahead for weekday moves and 2–4 weeks for weekend slots, especially at the end of the month. Last-minute and same-week moves are often still possible — get an instant quote to check availability.",
  },
];

export default function RemovalistsPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="REMOVALIST SERVICES"
        breadcrumb="Removalists"
        title="Removalists & Furniture Moving, Done Properly"
        description="From a single-bedroom apartment to a six-bedroom family home, our trained crews move your belongings with the same care as their own — for one fixed price, confirmed before moving day."
      />

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <Reveal>
            <span className="text-[11px] font-medium tracking-[0.22em] text-ink/45">WHAT&apos;S INCLUDED</span>
            <h2 className="mt-4 max-w-lg font-serif text-[32px] italic leading-[1.15] text-ink sm:text-[40px]">
              Everything you need for moving day, included as standard.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {included.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink/5">
                    <item.icon className="h-5 w-5 text-ink" />
                  </div>
                  <div>
                    <h3 className="text-[15.5px] font-medium text-ink">{item.title}</h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-ink/60">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="grain relative overflow-hidden bg-ink py-16 text-white sm:py-24">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <Reveal>
            <span className="text-[11px] font-medium tracking-[0.22em] text-white/45">MOVE TYPES</span>
            <h2 className="mt-4 max-w-lg font-serif text-[32px] italic leading-[1.15] sm:text-[40px]">
              Whatever you&apos;re moving, we&apos;ve done it before.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {moveTypes.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="border-t-2 border-white/15 pt-6">
                  <h3 className="text-[15.5px] font-medium">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/60">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={360}>
            <div className="mt-14 rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 sm:p-10">
              <p className="max-w-2xl text-[15px] leading-relaxed text-white/70">
                Also getting rid of items you don&apos;t want to bring with you? Pair your move with our{" "}
                <Link href="/services/rubbish-removal" className="text-white underline underline-offset-4">
                  rubbish removal service
                </Link>{" "}
                and we'll clear the unwanted furniture on the same visit.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQSection heading="Removalist FAQs" items={faqs} />
      <Footer />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Furniture removalist and moving service",
          provider: { "@type": "MovingCompany", name: "Residence Relocations", url: SITE_URL },
          areaServed: [
            { "@type": "City", name: "Brisbane" },
            { "@type": "City", name: "Gold Coast" },
          ],
          url: `${SITE_URL}/services/removalists`,
        }}
      />
    </main>
  );
}
