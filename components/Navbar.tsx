import Logo from "./Logo";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Our Approach", href: "#approach" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-5">
        <a href="#top">
          <Logo />
        </a>
        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] tracking-[0.12em] text-white/85 transition hover:text-white"
            >
              {link.label.toUpperCase()}
            </a>
          ))}
        </nav>
        <a
          href="#quote"
          className="hidden shrink-0 border border-white/80 px-6 py-3 text-[12px] font-medium tracking-[0.14em] text-white transition hover:bg-white hover:text-ink sm:inline-block"
        >
          GET A FIXED QUOTE
        </a>
      </div>
    </header>
  );
}
