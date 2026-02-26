export default function Footer() {
  return (
    <footer className="py-10 bg-[var(--color-background)] border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="text-sm font-display text-[var(--color-muted)]">
            Bertram Enterprises
          </span>
          <span className="w-1 h-1 rounded-full bg-[var(--color-accent)]/50" />
          <span className="text-sm text-[var(--color-muted)]">
            &copy; {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex items-center gap-8">
          {[
            { label: "Top", href: "#" },
            { label: "Services", href: "#services" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[12px] uppercase tracking-[0.15em] text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
