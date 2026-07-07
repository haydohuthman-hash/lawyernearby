import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { HandIcon, HouseIcon, ShieldIcon, TrashIcon } from "@/components/icons";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pre-Sale & Post-Move Cleans Brisbane & Gold Coast",
  description:
    "Pre-sale, end-of-lease and post-move cleaning across Brisbane and the Gold Coast. Present your property at its best for listing photos and inspections — trusted by local agents.",
  alternates: { canonical: "/services/pre-sale-cleaning" },
  openGraph: {
    title: "Pre-Sale & Post-Move Cleans | Residence Relocations",
    description:
      "Present your property at its best for listing photos and inspections — trusted by local agents.",
    url: `${SITE_URL}/services/pre-sale-cleaning`,
  },
};

const cleans = [
  {
    icon: HouseIcon,
    title: "Pre-sale presentation cleans",
    body: "Deep clean before listing photos and open homes — kitchens, bathrooms, windows, skirting, light fittings. The clean agents ask for because it photographs well.",
  },
  {
    icon: ShieldIcon,
    title: "End-of-lease / bond cleans",
    body: "Checklist-based clean matched to standard agency exit reports: oven, rangehood, tracks, walls spot-cleaned, garage swept. Receipt provided for your property manager.",
  },
  {
    icon: HandIcon,
    title: "Post-move 'walk into clean' service",
    body: "We clean your new home before the truck arrives — so beds go into fresh rooms, not someone else's dust.",
  },
  {
    icon: TrashIcon,
    title: "Clear-out + clean combos",
    body: "Deceased estates and downsizing: rubbish removal and cleaning as one booking, leaving the property inspection-ready.",
  },
];

const faqs = [
  {
    question: "Why get a pre-sale clean before listing?",
    answer:
      "Listing photos and first inspections decide buyer interest, and cleanliness reads as 'well maintained' to buyers. Agents consistently report better photo results and stronger open-home feedback after a professional presentation clean — it's one of the cheapest returns in a sale campaign.",
  },
  {
    question: "Do you work with real estate agents directly?",
    answer:
      "Yes — a large share of our cleaning work is referred by agents preparing properties for sale across Brisbane and the Gold Coast. We schedule around photography and campaign dates and can invoice the vendor or the agency.",
  },
  {
    question: "Is this the same as a bond clean?",
    answer:
      "Related but not identical. A bond clean follows the agency's exit checklist to get your deposit back; a pre-sale clean prioritises what shows in photos and inspections. Tell us the goal and we'll scope the right clean.",
  },
  {
    question: "Can you combine cleaning with my move?",
    answer:
      "That's the ideal combo: we move you out, clean the old property for sale or bond, and if you like, clean the new home before unloading. One booking, one coordinated schedule.",
  },
];

export default function PreSaleCleaningPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="PRE-SALE & POST-MOVE CLEANS"
        breadcrumb="Cleaning"
        title="Cleans That Sell Houses and Settle Nerves"
        description="Pre-sale presentation cleans, bond cleans and post-move cleans across Brisbane and the Gold Coast — scheduled around your listing, settlement or moving day."
      />

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <Reveal>
            <span className="text-[11px] font-medium tracking-[0.22em] text-ink/45">CLEANING SERVICES</span>
            <h2 className="mt-4 max-w-xl font-serif text-[32px] italic leading-[1.15] text-ink sm:text-[40px]">
              The finishing touch agents recommend.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {cleans.map((item, i) => (
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
                Selling and moving? Combine the clean with your{" "}
                <Link
                  href="/removalists-brisbane-to-gold-coast"
                  className="text-white underline underline-offset-4"
                >
                  Brisbane–Gold Coast move
                </Link>{" "}
                and a{" "}
                <Link href="/services/rubbish-removal" className="text-white underline underline-offset-4">
                  pre-listing clear-out
                </Link>{" "}
                — one coordinated booking.
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

      <FAQSection heading="Pre-Sale & Bond Cleaning FAQs" items={faqs} />
      <Footer />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Pre-sale, bond and post-move cleaning service",
          provider: { "@type": "MovingCompany", name: "Residence Relocations", url: SITE_URL },
          areaServed: [
            { "@type": "City", name: "Brisbane" },
            { "@type": "City", name: "Gold Coast" },
          ],
          url: `${SITE_URL}/services/pre-sale-cleaning`,
        }}
      />
    </main>
  );
}
