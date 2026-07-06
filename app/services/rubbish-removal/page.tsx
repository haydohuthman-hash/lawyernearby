import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { BoxIcon, HouseIcon, ShieldIcon, TrashIcon } from "@/components/icons";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rubbish & Junk Removal Services",
  description:
    "Fast, responsible rubbish and junk removal across Brisbane and the Gold Coast. Fixed pricing, same-week availability, and responsible recycling and disposal.",
  alternates: { canonical: "/services/rubbish-removal" },
  openGraph: {
    title: "Rubbish & Junk Removal Services | Residence Relocations",
    description:
      "Fast, responsible rubbish and junk removal across Brisbane and the Gold Coast. Fixed pricing and responsible disposal.",
    url: `${SITE_URL}/services/rubbish-removal`,
  },
};

const whatWeTake = [
  "Old furniture & mattresses",
  "Whitegoods & appliances",
  "General household junk",
  "Green waste & garden offcuts",
  "Renovation & construction debris",
  "Office & commercial fit-out waste",
  "E-waste & electronics",
  "Deceased estate clearances",
];

const process = [
  {
    n: "01",
    title: "Get a fixed quote",
    body: "Describe what needs to go — or let us estimate from photos — and get an all-inclusive price before we arrive.",
  },
  {
    n: "02",
    title: "We do the heavy lifting",
    body: "Our crew arrives on time, loads everything from wherever it sits (no need to drag items to the curb), and leaves the space swept.",
  },
  {
    n: "03",
    title: "Responsible disposal",
    body: "Items are sorted for donation, recycling or landfill — we divert as much as possible away from tip.",
  },
];

const faqs = [
  {
    question: "Do I need to move items to the curb myself?",
    answer:
      "No — our crew collects items from wherever they are, including garages, backyards, upstairs rooms and sheds. You don't need to lift a thing.",
  },
  {
    question: "What happens to the items you remove?",
    answer:
      "We sort everything on collection: usable furniture and goods go to local charities and donation centres, recyclable materials are separated, and only genuine waste goes to landfill.",
  },
  {
    question: "Can you remove items after a renovation or deceased estate clean-out?",
    answer:
      "Yes, this is one of our most common jobs. We handle full property clear-outs, including bulky items, appliances and general debris, and can coordinate around trades or agents preparing a property for sale.",
  },
  {
    question: "How quickly can you come?",
    answer:
      "Same-week bookings are usually available across Brisbane and the Gold Coast. Get an instant fixed quote to see live availability for your postcode.",
  },
];

export default function RubbishRemovalPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="RUBBISH REMOVAL"
        breadcrumb="Rubbish Removal"
        title="Rubbish Removal That Doesn't Cut Corners"
        description="From a single old mattress to a full property clear-out, our crews remove it responsibly — with fixed pricing agreed before we arrive, and no hourly clock running while you wait."
      />

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <Reveal>
            <span className="text-[11px] font-medium tracking-[0.22em] text-ink/45">WHAT WE TAKE</span>
            <h2 className="mt-4 max-w-lg font-serif text-[32px] italic leading-[1.15] text-ink sm:text-[40px]">
              If it&apos;s taking up space, we&apos;ll take it away.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3">
            {whatWeTake.map((item, i) => (
              <Reveal key={item} delay={i * 60}>
                <div className="flex items-start gap-2.5 text-[14px] text-ink/70">
                  <TrashIcon className="mt-0.5 h-4 w-4 shrink-0 text-ink/40" />
                  {item}
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
            <h2 className="mt-4 max-w-lg font-serif text-[32px] italic leading-[1.15] sm:text-[40px]">
              Three steps, one fixed price.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {process.map((step, i) => (
              <Reveal key={step.n} delay={i * 100}>
                <div className="border-t-2 border-white/15 pt-6">
                  <div className="font-serif text-[16px] italic text-white/40">{step.n}</div>
                  <h3 className="mt-4 text-[15.5px] font-medium">{step.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-white/60">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={320}>
            <div className="mt-14 flex flex-col items-start gap-6 rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div className="flex gap-4">
                <ShieldIcon className="h-8 w-8 shrink-0 text-white" />
                <div>
                  <h3 className="text-[15.5px] font-medium">Preparing a property for sale?</h3>
                  <p className="mt-1.5 max-w-md text-[14px] leading-relaxed text-white/60">
                    Pair rubbish removal with our{" "}
                    <Link href="/services/removalists" className="text-white underline underline-offset-4">
                      furniture moving service
                    </Link>{" "}
                    or a pre-sale clean to present a property at its best.
                  </p>
                </div>
              </div>
              <BoxIcon className="hidden h-10 w-10 shrink-0 text-white/30 sm:block" />
              <HouseIcon className="hidden h-10 w-10 shrink-0 text-white/30 sm:block" />
            </div>
          </Reveal>
        </div>
      </section>

      <FAQSection heading="Rubbish Removal FAQs" items={faqs} />
      <Footer />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Rubbish and junk removal service",
          provider: { "@type": "MovingCompany", name: "Residence Relocations", url: SITE_URL },
          areaServed: [
            { "@type": "City", name: "Brisbane" },
            { "@type": "City", name: "Gold Coast" },
          ],
          url: `${SITE_URL}/services/rubbish-removal`,
        }}
      />
    </main>
  );
}
