import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import PostArt from "@/components/PostArt";
import { POSTS, getPost, formatPostDate } from "@/content/posts";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: post.metaTitle ?? post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.metaTitle ?? post.title,
      description: post.description,
      url,
      publishedTime: post.date,
      modifiedTime: post.updated,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle ?? post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <main>
      <Navbar />

      <article>
        <header className="grain relative -mt-[88px] overflow-hidden bg-ink pb-14 pt-[calc(3.5rem+88px)] text-white sm:pb-20 sm:pt-[calc(5rem+88px)]">
          <div
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-15 blur-3xl"
            style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)" }}
          />
          <div className="relative mx-auto max-w-[760px] px-5 sm:px-8">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[12px] text-white/45">
              <Link href="/" className="transition hover:text-white/80">
                Home
              </Link>
              <span aria-hidden>/</span>
              <Link href="/blog" className="transition hover:text-white/80">
                Guides
              </Link>
              <span aria-hidden>/</span>
              <span className="text-white/70">{post.category}</span>
            </nav>

            <div className="mt-8 flex items-center gap-3 text-[11px] font-medium tracking-[0.16em] text-white/45">
              <span>{post.category.toUpperCase()}</span>
              <span aria-hidden>·</span>
              <span>{post.readMins} MIN READ</span>
            </div>
            <h1 className="mt-4 font-serif text-[30px] italic leading-[1.15] xs:text-[36px] sm:text-[46px]">
              {post.title}
            </h1>
            <p className="mt-5 text-[13px] text-white/50">Updated {formatPostDate(post.updated)}</p>
          </div>
        </header>

        <PostArt icon={post.artIcon} photo={post.photo} className="h-40 sm:h-56" />

        <div className="bg-cream py-14 sm:py-20">
          <div className="mx-auto max-w-[760px] px-5 sm:px-8">
            <div className="article">{post.body}</div>

            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-14 border-t border-ink/10 pt-10">
                <h2 className="font-serif text-[26px] italic text-ink">Frequently asked questions</h2>
                <div className="mt-6 divide-y divide-ink/10 border-t border-ink/10">
                  {post.faqs.map((faq) => (
                    <div key={faq.question} className="py-6">
                      <h3 className="text-[15.5px] font-medium text-ink">{faq.question}</h3>
                      <p className="mt-2.5 text-[14px] leading-relaxed text-ink/60">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-14 rounded-2xl bg-ink p-8 text-white sm:p-10">
              <h2 className="font-serif text-[24px] italic sm:text-[28px]">Get your fixed quote</h2>
              <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-white/65">
                Fixed-price, fully insured Brisbane to Gold Coast removals — quoted in 30 seconds, confirmed
                before moving day.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#quote"
                  className="btn-shine btn-shine-dark rounded-md bg-white px-8 py-4 text-center text-[13px] font-medium tracking-[0.08em] text-ink transition-all duration-300 hover:-translate-y-0.5"
                >
                  GET A FIXED QUOTE
                </Link>
                <Link
                  href="/removalists-brisbane-to-gold-coast"
                  className="rounded-md px-8 py-4 text-center text-[13px] font-medium tracking-[0.08em] text-white ring-1 ring-white/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  THE CORRIDOR SERVICE
                </Link>
              </div>
            </div>

            {related.length > 0 && (
              <div className="mt-14">
                <h2 className="font-serif text-[22px] italic text-ink">Keep reading</h2>
                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/blog/${r.slug}`}
                      className="group overflow-hidden rounded-2xl bg-white ring-1 ring-ink/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(10,10,10,0.1)]"
                    >
                      <PostArt icon={r.artIcon} photo={r.photo} className="h-28" />
                      <div className="p-6">
                        <div className="text-[11px] font-medium tracking-[0.16em] text-ink/45">
                          {r.category.toUpperCase()}
                        </div>
                        <h3 className="mt-3 font-serif text-[18px] italic leading-[1.3] text-ink">{r.title}</h3>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-ink">
                          Read more{" "}
                          <span
                            aria-hidden
                            className="transition-transform duration-300 group-hover:translate-x-1.5"
                          >
                            →
                          </span>
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>

      <Footer />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/blog` },
            { "@type": "ListItem", position: 3, name: post.title },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.updated,
          author: { "@type": "Organization", name: "Residence Relocations" },
          publisher: { "@type": "Organization", name: "Residence Relocations", url: SITE_URL },
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          url,
        }}
      />
      {post.faqs && post.faqs.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: post.faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }}
        />
      )}
    </main>
  );
}
