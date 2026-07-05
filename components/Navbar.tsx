"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Our Approach", href: "#approach" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-ink/85 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1440px] items-center justify-between px-8 transition-all duration-500 ${
          scrolled ? "py-3.5" : "py-6"
        }`}
      >
        <a href="#top" className="transition-opacity hover:opacity-80">
          <Logo />
        </a>
        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link text-[12.5px] tracking-[0.14em] text-white/80 transition hover:text-white"
            >
              {link.label.toUpperCase()}
            </a>
          ))}
        </nav>
        <a
          href="#quote"
          className="btn-shine hidden shrink-0 border border-white/70 px-6 py-3 text-[11.5px] font-medium tracking-[0.16em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-ink sm:inline-block"
        >
          GET A FIXED QUOTE
        </a>
      </div>
    </header>
  );
}
