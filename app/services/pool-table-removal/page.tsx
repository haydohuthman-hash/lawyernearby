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
  title: "Pool Table Removals Brisbane & Gold Coast | Slate Specialists",
  description:
    "Specialist pool table removalists for Brisbane and the Gold Coast. Slate tables disassembled, moved and reassembled level — fixed price, fully insured. Most movers won't touch them. We do.",
  alternates: { canonical: "/services/pool-table-removal" },
  openGraph: {
    title: "Pool Table Removals Brisbane & Gold Coast | Residence Relocations",
    description:
      "Slate pool tables disassembled, moved and reassembled level — fixed price, fully insured.",
    url: `${SITE_URL}/services/pool-table-removal`,
  },
};

const whySpecialist = [
  {
    icon: ShieldIcon,
    title: "Slate is unforgiving",
    body: "A 3-piece slate bed weighs 150–300kg and cracks if it's flexed. We move each slate separately, on edge, with padded slate trolleys — never flat, never as one piece.",
  },
  {
    icon: HandIcon,
    title: "Disassembly & reassembly included",
    body: "Cushions, rails, pockets, slates, frame — catalogued, wrapped and rebuilt at the other end. We re-level the slates with a machinist's level, not a phone app.",
  },
  {
    icon: TruckIcon,
    title: "The right gear on the truck",
    body: "Slate trolleys, piano jacks, ratchet frames and floor protection come standard on every pool table job. No improvising with furniture dollies.",
  },
  {
    icon: BoxIcon,
    title: "Recloth while it's apart?",
    body: "Moving day is the perfect time to replace worn cloth. Ask when you book and we'll coordinate the recloth so your table is rebuilt with fresh felt.",
  },
];

const steps = [
  {
    n: "01",
    title: "Photo quote",
    body: "Tell us the table size (7ft, 8ft, 9ft), brand if you know it, and access at both ends. You'll get one fixed price — no hourly rate.",
  },
  {
    n: "02",
    title: "Careful teardown",
    body: "Rails, pockets and cloth come off first, then each slate is lifted, padded and labelled so reassembly is exact.",
  },
  {
    n: "03",
    title: "Protected transport",
    body: "Slates travel on edge in a padded rack; the frame and rails are blanket-wrapped. Your table rides alone in its section of the truck.",
  },
  {
    n: "04",
    title: "Rebuild & re-level",
    body: "We reassemble, shim and level the slates, refit the cloth and rails, and roll test before we leave. You rack up that night.",
  },
];

const faqs = [
  {
    question: "How much does pool table removal cost in Brisbane or the Gold Coast?",
    answer:
      "Most slate pool table moves are quoted from around $220 as part of a house move, or from around $350–$550 as a standalone job depending on table size, slate count and access (stairs, tight corners). You get one fixed price before we arrive — never an hourly rate.",
  },
  {
    question: "Can you move a slate pool table without taking it apart?",
    answer:
      "For anything beyond rolling it across a flat room — no, and you shouldn't let anyone try. Slate beds crack under flex, and doorways, stairs and truck ramps flex a table no matter how many people are lifting. Proper disassembly is the only safe way, and it's included in our price.",
  },
  {
    question: "Do you move pool tables up or down stairs?",
    answer:
      "Yes. Stairs are exactly why the table gets broken down into rails, slates and frame — each piece is manageable and protected on stairs. Tell us about the stairs when you book so the right crew size is scheduled.",
  },
  {
    question: "Will the table play the same after the move?",
    answer:
      "Yes — reassembly includes shimming and levelling the slates with a precision level and a roll test on every rail. If the cloth was worn, moving day is also the cheapest time to recloth since the table is already apart.",
  },
  {
    question: "Do you move air hockey tables, table tennis and arcade machines too?",
    answer:
      "We do. Anything heavy, awkward and precious follows the same process: fixed quote, purpose-built equipment, wrapped transport and careful reassembly.",
  },
];

export default function PoolTableRemovalPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="POOL TABLE REMOVALS"
        breadcrumb="Pool Table Removal"
        title="Pool Table Removals, Done by Specialists"
        description="Most removalists won't touch a slate table — we bring the slate trolleys, break it down properly, and rebuild it dead level at your new place. Brisbane, Gold Coast and everywhere on the corridor, for one fixed price."
      />

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <Reveal>
            <span className="text-[11px] font-medium tracking-[0.22em] text-ink/45">WHY A SPECIALIST</span>
            <h2 className="mt-4 max-w-xl font-serif text-[32px] italic leading-[1.15] text-ink sm:text-[40px]">
              A pool table is the one item you don&apos;t improvise.
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink/60">
              Between the slate bed, the hardwood frame and the cloth, a quality table is heavy,
              fragile and expensive to get wrong — a cracked slate usually means replacing the bed.
              Here&apos;s how we make sure that never happens.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {whySpecialist.map((item, i) => (
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
            <span className="text-[11px] font-medium tracking-[0.22em] text-white/45">HOW IT WORKS</span>
            <h2 className="mt-4 max-w-xl font-serif text-[32px] italic leading-[1.15] sm:text-[40px]">
              From teardown to a level roll, in four steps.
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
              <p className="max-w-lg text-[15px] leading-relaxed text-white/70">
                Moving house at the same time? The pool table rides with the rest of your furniture on our{" "}
                <Link href="/removalists-brisbane-to-gold-coast" className="text-white underline underline-offset-4">
                  Brisbane to Gold Coast service
                </Link>{" "}
                — one truck, one crew, one fixed price. Also see{" "}
                <Link href="/services/piano-removal" className="text-white underline underline-offset-4">
                  piano removals
                </Link>
                .
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

      <FAQSection heading="Pool Table Removal FAQs" items={faqs} />
      <Footer />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Pool table removal and reassembly service",
          provider: { "@type": "MovingCompany", name: "Residence Relocations", url: SITE_URL },
          areaServed: [
            { "@type": "City", name: "Brisbane" },
            { "@type": "City", name: "Gold Coast" },
          ],
          url: `${SITE_URL}/services/pool-table-removal`,
        }}
      />
    </main>
  );
}
