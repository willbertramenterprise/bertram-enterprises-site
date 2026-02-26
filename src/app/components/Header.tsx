"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080f1a]/90 backdrop-blur-xl border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-lg font-display font-semibold tracking-wide text-[var(--color-foreground)]">
            Bertram
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] group-hover:scale-150 transition-transform duration-300" />
          <span className="text-lg font-display font-semibold tracking-wide text-[var(--color-muted)]">
            Enterprises
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[13px] uppercase tracking-[0.15em] text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:will@bertramenterprises.org"
              className="text-[13px] uppercase tracking-[0.15em] px-5 py-2 border border-[var(--color-accent)]/40 text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-background)] transition-all duration-300"
            >
              Inquire
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#080f1a]/98 backdrop-blur-xl border-b border-[var(--color-border)]">
          <ul className="flex flex-col items-center gap-6 py-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[13px] uppercase tracking-[0.15em] text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
