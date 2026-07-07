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
  title: "Office Relocations Brisbane & Gold Coast | After-Hours Business Moves",
  description:
    "Office and small business relocations across Brisbane and the Gold Coast. After-hours and weekend moves, IT handled with care, fixed pricing — minimal downtime for your team.",
  alternates: { canonical: "/services/office-relocations" },
  openGraph: {
    title: "Office Relocations Brisbane & Gold Coast | Residence Relocations",
    description:
      "After-hours and weekend business moves with IT handled carefully and fixed pricing.",
    url: `${SITE_URL}/services/office-relocations`,
  },
};

const features = [
  {
    icon: TruckIcon,
    title: "After-hours & weekend moves",
    body: "Close Friday afternoon, open Monday morning in the new office. Most business moves run evenings or weekends so your team never works around boxes.",
  },
  {
    icon: BoxIcon,
    title: "Desks, IT and files — systemised",
    body: "Workstations are labelled by seat map, monitors and towers padded and boxed, cabling bagged per desk, and archive files kept in order. Everything lands where it belongs.",
  },
  {
    icon: ShieldIcon,
    title: "Building & lift coordination",
    body: "We handle loading dock bookings, lift protection and certificates of currency with building managers at both ends — one less thing on your ops plate.",
  },
  {
    icon: HandIcon,
    title: "Fixed project price",
    body: "One quote for the whole relocation, agreed up front. No hourly meter running while a lift is held or a dock is queued.",
  },
];

const faqs = [
  {
    question: "How do you minimise downtime for our business?",
    answer:
      "The standard pattern is: crates and labels delivered mid-week, staff pack personal items Friday, our crew moves everything Friday night or Saturday, IT reconnects Sunday, and your team walks into a working office Monday. Most small offices lose zero business hours.",
  },
  {
    question: "Can you move our server rack and IT equipment?",
    answer:
      "We move racks, workstations, monitors and networking gear with anti-static wrapping and padded transport, coordinating with your IT provider for shutdown and reconnection. For live production servers we recommend your IT partner handles final cutover while we handle the physical move.",
  },
  {
    question: "Do you supply crates and packing materials?",
    answer:
      "Yes — stackable business crates, labels and bubble wrap are delivered ahead of the move and collected after unpacking, which is faster and tidier than cardboard for office moves.",
  },
  {
    question: "What size offices do you relocate?",
    answer:
      "Our sweet spot is 2–50 person offices, clinics, studios and retail back-of-house across Brisbane and the Gold Coast — including relocations between the two cities on our daily corridor run.",
  },
];

export default function OfficeRelocationsPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="OFFICE RELOCATIONS"
        breadcrumb="Office Relocations"
        title="Office Moves Without the Downtime"
        description="After-hours and weekend business relocations across Brisbane and the Gold Coast — desks mapped, IT handled with care, buildings coordinated, and one fixed project price."
      />

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <Reveal>
            <span className="text-[11px] font-medium tracking-[0.22em] text-ink/45">HOW WE WORK</span>
            <h2 className="mt-4 max-w-xl font-serif text-[32px] italic leading-[1.15] text-ink sm:text-[40px]">
              Close Friday. Open Monday. Nothing lost in between.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {features.map((item, i) => (
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
                Fitting out the new space first? Pair the move with{" "}
                <Link href="/services/rubbish-removal" className="text-white underline underline-offset-4">
                  fit-out waste removal
                </Link>{" "}
                so old furniture and packaging disappear the same weekend.
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

      <FAQSection heading="Office Relocation FAQs" items={faqs} />
      <Footer />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Office and commercial relocation service",
          provider: { "@type": "MovingCompany", name: "Residence Relocations", url: SITE_URL },
          areaServed: [
            { "@type": "City", name: "Brisbane" },
            { "@type": "City", name: "Gold Coast" },
          ],
          url: `${SITE_URL}/services/office-relocations`,
        }}
      />
    </main>
  );
}
