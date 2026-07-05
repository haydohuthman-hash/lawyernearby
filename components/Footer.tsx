import Logo from "./Logo";

const columns = [
  {
    title: "Services",
    links: ["White Glove Moving", "Rubbish Removal", "Furniture & Heavy Items", "Pre Sale & Post Move Cleans"],
  },
  {
    title: "Company",
    links: ["About", "Our Approach", "Reviews", "Contact"],
  },
  {
    title: "Service Areas",
    links: ["Brisbane", "Gold Coast", "Sunshine Coast", "Ipswich"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink pt-20 text-white">
      <div className="mx-auto max-w-[1440px] px-8">
        <div className="grid grid-cols-1 gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
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
                  <li key={link}>
                    <a href="#" className="text-[13.5px] text-white/70 transition hover:text-white">
                      {link}
                    </a>
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
