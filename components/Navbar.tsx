"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Our Approach", href: "/#approach" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Guides", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 bg-ink/60 backdrop-blur-md transition-all duration-500 ${
        scrolled || menuOpen
          ? "border-b border-white/10 bg-ink/85 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1440px] items-center justify-between px-6 transition-all duration-500 sm:px-8 ${
          scrolled ? "py-3.5" : "py-5 sm:py-6"
        }`}
      >
        <Link href="/" className="transition-opacity hover:opacity-80" onClick={() => setMenuOpen(false)}>
          <Logo />
        </Link>
        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="nav-link text-[12.5px] tracking-[0.14em] text-white/80 transition hover:text-white"
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/#quote"
            className="btn-shine hidden shrink-0 border border-white/70 px-6 py-3 text-[11.5px] font-medium tracking-[0.16em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-ink sm:inline-block"
          >
            GET A FIXED QUOTE
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-white lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 block h-[1.5px] w-5 bg-white transition-all duration-300 ${
                  menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-[1.5px] w-5 -translate-y-1/2 bg-white transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 block h-[1.5px] w-5 bg-white transition-all duration-300 ${
                  menuOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`grid overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <nav className="flex flex-col gap-1 border-t border-white/10 px-6 pb-6 pt-2 sm:px-8">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/5 py-4 text-[15px] tracking-[0.04em] text-white/85 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#quote"
              onClick={() => setMenuOpen(false)}
              className="mt-5 rounded-md bg-white px-6 py-3.5 text-center text-[12.5px] font-medium tracking-[0.14em] text-ink"
            >
              GET A FIXED QUOTE
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
