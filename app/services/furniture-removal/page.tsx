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
  title: "Furniture Removals Brisbane & Gold Coast | Single Items to Full Homes",
  description:
    "Furniture removalists for single items or whole rooms — sofas, fridges, wardrobes, outdoor settings. Blanket-wrapped, fully insured, fixed price across Brisbane and the Gold Coast.",
  alternates: { canonical: "/services/furniture-removal" },
  openGraph: {
    title: "Furniture Removals Brisbane & Gold Coast | Residence Relocations",
    description:
      "Single items or whole rooms, blanket-wrapped and fully insured at a fixed price.",
    url: `${SITE_URL}/services/furniture-removal`,
  },
};

const jobs = [
  {
    icon: TruckIcon,
    title: "Single-item moves",
    body: "Bought a couch on Marketplace? Sending Grandma's dresser to your sister in Robina? We do one-item runs across Brisbane, the Gold Coast and the corridor between — properly wrapped, not thrown in a ute.",
  },
  {
    icon: BoxIcon,
    title: "Big & awkward pieces",
    body: "Fridges, washers, wardrobes, buffets, outdoor settings, gym equipment, trampolines. If it needs two people and a trolley, it's our bread and butter.",
  },
  {
    icon: HandIcon,
    title: "Disassembly included",
    body: "Bed frames, tables and modular sofas come apart when they need to and are reassembled at the other end — hardware bagged and labelled, nothing lost.",
  },
  {
    icon: ShieldIcon,
    title: "Blanket-wrap standard",
    body: "Every piece gets moving blankets and strapping in the truck. Full transit insurance covers each item door to door.",
  },
];

const faqs = [
  {
    question: "Do you move single items of furniture?",
    answer:
      "Yes — single-item and small moves are a core service, not a nuisance job. A one-couch run across Brisbane starts from around $149, and corridor runs (Brisbane ↔ Gold Coast) are quoted flat based on distance.",
  },
  {
    question: "Can you pick up furniture I bought online or at auction?",
    answer:
      "Absolutely. Send us the pickup address (store, warehouse or seller's home) and we'll collect, wrap and deliver. We coordinate directly with the seller if you like — many Marketplace sellers just want a time window.",
  },
  {
    question: "How do you protect furniture in the truck?",
    answer:
      "Everything is blanket-wrapped, corners padded and strapped to the truck walls so nothing shifts in transit. Fragile pieces (glass cabinets, marble tops) get additional board protection.",
  },
  {
    question: "Do you take stairs and apartment lifts?",
    answer:
      "Yes. Tell us the access at both ends when you book — number of stairs, lift dimensions, loading dock rules — and the crew arrives prepared. We regularly book lifts with Gold Coast building managers on your behalf.",
  },
];

export default function FurnitureRemovalPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="FURNITURE REMOVALS"
        breadcrumb="Furniture Removal"
        title="Furniture Removals, From One Couch to a Whole Home"
        description="Single items, awkward pieces and full rooms — blanket-wrapped, insured and moved at a fixed price across Brisbane, the Gold Coast, and the corridor between."
      />

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <Reveal>
            <span className="text-[11px] font-medium tracking-[0.22em] text-ink/45">WHAT WE HANDLE</span>
            <h2 className="mt-4 max-w-xl font-serif text-[32px] italic leading-[1.15] text-ink sm:text-[40px]">
              No job too small, no piece too awkward.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {jobs.map((item, i) => (
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

          <Reveal delay={300}>
            <div className="mt-14 flex flex-col items-start gap-5 rounded-2xl bg-ink p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <p className="max-w-lg text-[15px] leading-relaxed text-white/70">
                Specialty item? See{" "}
                <Link href="/services/piano-removal" className="text-white underline underline-offset-4">
                  piano removals
                </Link>{" "}
                and{" "}
                <Link href="/services/pool-table-removal" className="text-white underline underline-offset-4">
                  pool table removals
                </Link>
                . Clearing out instead? Our{" "}
                <Link href="/services/rubbish-removal" className="text-white underline underline-offset-4">
                  rubbish removal
                </Link>{" "}
                takes the old furniture away responsibly.
              </p>
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

      <FAQSection heading="Furniture Removal FAQs" items={faqs} />
      <Footer />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Furniture removal service",
          provider: { "@type": "MovingCompany", name: "Residence Relocations", url: SITE_URL },
          areaServed: [
            { "@type": "City", name: "Brisbane" },
            { "@type": "City", name: "Gold Coast" },
          ],
          url: `${SITE_URL}/services/furniture-removal`,
        }}
      />
    </main>
  );
}
