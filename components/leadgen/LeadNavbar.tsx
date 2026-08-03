const LINKS = [
  { href: "#whats-inside", label: "What you get" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#faq", label: "FAQ" },
];

export default function LeadNavbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-[#eaf4ee]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0e1a14] text-[15px] font-bold text-white">
            N
          </span>
          <span className="text-[17px] font-bold tracking-[-0.01em] text-[#0e1a14]">Northbound</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium text-[#0e1a14]/70 transition-colors hover:text-[#0e1a14]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#top-form"
          className="rounded-full bg-[#0e1a14] px-5 py-2.5 text-[13px] font-semibold tracking-[0.01em] text-white transition-transform duration-200 hover:-translate-y-0.5"
        >
          Get the Blueprint
        </a>
      </div>
    </header>
  );
}
