import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { HandIcon, ShieldIcon, TruckIcon } from "@/components/icons";
import { SUBURBS, getSuburb } from "@/content/suburbs";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return SUBURBS.map((s) => ({ suburb: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ suburb: string }>;
}): Promise<Metadata> {
  const { suburb: slug } = await params;
  const suburb = getSuburb(slug);
  if (!suburb) return {};
  const title = `Removalists ${suburb.name}`;
  const description = `Fixed-price removalists in ${suburb.name}, ${suburb.region}. White-glove furniture moving, local access know-how and full transit insurance — quoted in 30 seconds.`;
  return {
    title,
    description,
    alternates: { canonical: `/removalists/${suburb.slug}` },
    openGraph: {
      title: `${title} | Residence Relocations`,
      description,
      url: `${SITE_URL}/removalists/${suburb.slug}`,
    },
  };
}

export default async function SuburbPage({ params }: { params: Promise<{ suburb: string }> }) {
  const { suburb: slug } = await params;
  const suburb = getSuburb(slug);
  if (!suburb) notFound();

  const regionHref = suburb.region === "Brisbane" ? "/moving-brisbane" : "/moving-gold-coast";
  const siblings = SUBURBS.filter((s) => s.slug !== suburb.slug && s.region === suburb.region).slice(0, 3);

  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow={`${suburb.region.toUpperCase()} REMOVALISTS`}
        breadcrumb={`Removalists ${suburb.name}`}
        title={`Removalists ${suburb.name}`}
        description={suburb.intro}
      />

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <Reveal>
            <span className="text-[11px] font-medium tracking-[0.22em] text-ink/45">LOCAL KNOWLEDGE</span>
            <h2 className="mt-4 max-w-xl font-serif text-[32px] italic leading-[1.15] text-ink sm:text-[40px]">
              Moving in {suburb.name}, the way locals need it done.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <Reveal>
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink/5">
                  <TruckIcon className="h-5 w-5 text-ink" />
                </div>
                <div>
                  <h3 className="text-[15.5px] font-medium text-ink">The homes we move here</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-ink/60">{suburb.housing}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink/5">
                  <HandIcon className="h-5 w-5 text-ink" />
                </div>
                <div>
                  <h3 className="text-[15.5px] font-medium text-ink">Access, planned in advance</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-ink/60">{suburb.access}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="grain relative overflow-hidden bg-ink py-16 text-white sm:py-24">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <Reveal>
            <span className="text-[11px] font-medium tracking-[0.22em] text-white/45">POPULAR ROUTES</span>
            <h2 className="mt-4 max-w-xl font-serif text-[32px] italic leading-[1.15] sm:text-[40px]">
              Where {suburb.name} moves usually go.
            </h2>
          </Reveal>

          <div className="mt-10 space-y-4">
            {suburb.popularRoutes.map((route, i) => (
              <Reveal key={route.to} delay={i * 80}>
                <div className="flex flex-col gap-1 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:gap-3">
                  <div className="flex items-center gap-3 text-[15px]">
                    <span className="text-white">{suburb.name}</span>
                    <span aria-hidden className="text-white/40">
                      →
                    </span>
                    <span className="text-white">{route.to}</span>
                  </div>
                  <span className="text-[13px] text-white/45 sm:ml-2">— {route.note}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={260}>
            <div className="mt-12 flex flex-col items-start gap-5 rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div className="flex gap-4">
                <ShieldIcon className="h-7 w-7 shrink-0 text-white" />
                <p className="max-w-lg text-[15px] leading-relaxed text-white/70">
                  Heading down (or up) the M1? See our{" "}
                  <Link
                    href="/removalists-brisbane-to-gold-coast"
                    className="text-white underline underline-offset-4"
                  >
                    Brisbane to Gold Coast corridor service
                  </Link>{" "}
                  — the route we run every day.
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

      <FAQSection heading={`${suburb.name} Moving FAQs`} items={suburb.faqs} />

      <section className="bg-cream pb-16 sm:pb-24">
        <div className="mx-auto max-w-[900px] px-5 sm:px-8">
          <h2 className="font-serif text-[22px] italic text-ink">Nearby service areas</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {siblings.map((s) => (
              <Link
                key={s.slug}
                href={`/removalists/${s.slug}`}
                className="rounded-full bg-white px-4 py-2 text-[13px] text-ink/70 ring-1 ring-ink/10 transition hover:text-ink hover:ring-ink/30"
              >
                Removalists {s.name}
              </Link>
            ))}
            <Link
              href={regionHref}
              className="rounded-full bg-ink px-4 py-2 text-[13px] text-white transition hover:bg-ink/85"
            >
              All {suburb.region} moves
            </Link>
            <Link
              href="/service-areas"
              className="rounded-full bg-white px-4 py-2 text-[13px] text-ink/70 ring-1 ring-ink/10 transition hover:text-ink hover:ring-ink/30"
            >
              All service areas
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: `Removalist service in ${suburb.name}`,
          provider: { "@type": "MovingCompany", name: "Residence Relocations", url: SITE_URL },
          areaServed: {
            "@type": "Place",
            name: `${suburb.name}, ${suburb.region} QLD`,
          },
          url: `${SITE_URL}/removalists/${suburb.slug}`,
        }}
      />
    </main>
  );
}
