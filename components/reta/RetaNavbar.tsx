"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#" },
  { label: "Peptides", href: "#peptides" },
  { label: "Science", href: "#science" },
  { label: "Results", href: "#results" },
  { label: "Protocols", href: "#protocols" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function RetaNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 sm:px-8">
        <Link href="#" className="flex flex-col leading-none" onClick={() => setMenuOpen(false)}>
          <span className="text-2xl font-black tracking-tight text-[#0e1e3d]">RETA</span>
          <span className="text-[9px] font-semibold tracking-[0.35em] text-slate-500">PEPTIDES</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[13px] font-semibold tracking-wide text-slate-700 transition hover:text-[#0e1e3d]"
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button aria-label="Account" className="hidden text-slate-700 hover:text-[#0e1e3d] sm:block">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" />
            </svg>
          </button>
          <button aria-label="Cart" className="hidden text-slate-700 hover:text-[#0e1e3d] sm:block">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 8h12l-1.2 11.2a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8L6 8Z" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            </svg>
          </button>
          <Link
            href="#"
            className="hidden rounded-full bg-[#0e1e3d] px-5 py-2.5 text-[12px] font-bold tracking-wide text-white transition hover:bg-[#16294f] sm:inline-block"
          >
            SHOP NOW
          </Link>

          <button
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center text-[#0e1e3d] lg:hidden"
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-[14px] font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-[#0e1e3d]"
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
            <Link
              href="#"
              onClick={() => setMenuOpen(false)}
              className="mt-3 rounded-full bg-[#0e1e3d] px-5 py-3 text-center text-[13px] font-bold tracking-wide text-white"
            >
              SHOP NOW
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
