import Link from "next/link";
import Logo from "./Logo";
import Reveal from "./Reveal";

const columns = [
  {
    title: "Services",
    links: [
      { label: "White Glove Moving", href: "/services/removalists" },
      { label: "Rubbish Removal", href: "/services/rubbish-removal" },
      { label: "Pool Table Removal", href: "/services/pool-table-removal" },
      { label: "Piano Removal", href: "/services/piano-removal" },
      { label: "Furniture Removal", href: "/services/furniture-removal" },
      { label: "Office Relocations", href: "/services/office-relocations" },
      { label: "Pre-Sale Cleans", href: "/services/pre-sale-cleaning" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Our Approach", href: "/#approach" },
      { label: "Moving Guides", href: "/blog" },
      { label: "Reviews", href: "/#reviews" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Service Areas",
    links: [
      { label: "Brisbane to Gold Coast", href: "/removalists-brisbane-to-gold-coast" },
      { label: "Brisbane", href: "/moving-brisbane" },
      { label: "Gold Coast", href: "/moving-gold-coast" },
      { label: "All Service Areas", href: "/service-areas" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink pt-16 text-white sm:pt-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <Reveal>
          <div className="border-b border-white/10 pb-12 text-center sm:pb-20">
            <p className="text-[11px] font-medium tracking-[0.22em] text-white/40">READY WHEN YOU ARE</p>
            <h2 className="mx-auto mt-6 max-w-3xl font-serif text-[32px] italic leading-[1.1] xs:text-[38px] sm:text-[44px] lg:text-[60px]">
              Your next chapter, moved with care.
            </h2>
            <Link
              href="/#quote"
              className="btn-shine btn-shine-dark mt-10 inline-block rounded-md bg-white px-10 py-4 text-[13px] font-medium tracking-[0.1em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(255,255,255,0.2)]"
            >
              GET A FIXED QUOTE
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 pb-14 pt-12 sm:grid-cols-2 sm:gap-12 sm:pt-20 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-[13.5px] leading-relaxed text-white/45">
              Premium moving and rubbish removal services with fixed prices and no hourly surprises.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <div className="text-[12px] font-medium tracking-[0.14em] text-white/45">
                {col.title.toUpperCase()}
              </div>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-[13.5px] text-white/70 transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-[12px] text-white/40 sm:flex-row">
          <span>© 2026 Residence Relocations. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/70">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white/70">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
