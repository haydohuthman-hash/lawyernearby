import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import PostArt from "@/components/PostArt";
import { POSTS } from "@/content/posts";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Moving Guides & Tips",
  description:
    "Practical guides for moving between Brisbane and the Gold Coast — moving costs, checklists, suburb guides and tips from the corridor specialists at Residence Relocations.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Moving Guides & Tips | Residence Relocations",
    description:
      "Practical guides for moving between Brisbane and the Gold Coast — costs, checklists, suburb guides and tips.",
    url: `${SITE_URL}/blog`,
  },
};

export default function BlogIndex() {
  const [featured, ...rest] = POSTS;

  return (
    <main>
      <Navbar />

      <section className="grain relative -mt-[88px] overflow-hidden bg-ink pb-16 pt-[calc(3.5rem+88px)] text-white sm:pb-20 sm:pt-[calc(5rem+88px)]">
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-[1000px] px-5 sm:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] text-white/45">
            <Link href="/" className="transition hover:text-white/80">
              Home
            </Link>
            <span aria-hidden>/</span>
            <span className="text-white/70">Guides</span>
          </nav>
          <p className="mt-8 text-[11px] font-medium tracking-[0.22em] text-white/45">MOVING GUIDES &amp; TIPS</p>
          <h1 className="mt-4 font-serif text-[36px] italic leading-[1.1] xs:text-[42px] sm:text-[52px]">
            Move smarter, Brisbane to the Gold Coast.
          </h1>
          <p className="mt-6 max-w-2xl text-[15.5px] leading-relaxed text-white/65 sm:text-[16.5px]">
            Costs, checklists and suburb guides from the crew that runs the corridor every day — everything
            you need to plan a move without the guesswork.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-[1000px] px-5 sm:px-8">
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group block overflow-hidden rounded-2xl bg-white ring-1 ring-ink/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(10,10,10,0.12)]"
            >
              <PostArt icon={featured.artIcon} className="h-40 sm:h-56" />
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-3 text-[11px] font-medium tracking-[0.16em] text-ink/45">
                  <span>{featured.category.toUpperCase()}</span>
                  <span aria-hidden>·</span>
                  <span>{featured.readMins} MIN READ</span>
                </div>
                <h2 className="mt-4 font-serif text-[27px] italic leading-[1.2] text-ink sm:text-[32px]">
                  {featured.title}
                </h2>
                <p className="mt-4 max-w-2xl text-[14.5px] leading-relaxed text-ink/60">{featured.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink">
                  Read the guide{" "}
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 90}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-ink/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(10,10,10,0.12)]"
                >
                  <PostArt icon={post.artIcon} className="h-32" />
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-center gap-3 text-[11px] font-medium tracking-[0.16em] text-ink/45">
                      <span>{post.category.toUpperCase()}</span>
                      <span aria-hidden>·</span>
                      <span>{post.readMins} MIN READ</span>
                    </div>
                    <h3 className="mt-4 font-serif text-[21px] italic leading-[1.25] text-ink">{post.title}</h3>
                    <p className="mt-3 flex-1 text-[14px] leading-relaxed text-ink/60">{post.excerpt}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink">
                      Read more{" "}
                      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-14 flex flex-col items-start gap-5 rounded-2xl bg-ink p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div>
                <h2 className="font-serif text-[24px] italic sm:text-[28px]">Ready to move?</h2>
                <p className="mt-2 max-w-md text-[14.5px] leading-relaxed text-white/65">
                  Skip the guesswork — get a fixed Brisbane to Gold Coast quote in 30 seconds.
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

      <Footer />
    </main>
  );
}
