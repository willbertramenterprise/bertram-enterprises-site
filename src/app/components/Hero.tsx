export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-24 md:pb-32 overflow-hidden">
      {/* Atmospheric background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,_rgba(201,168,76,0.08),_transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-3xl">
          <p className="animate-fade-up text-[13px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-8">
            Technology Consulting & Engineering
          </p>

          <h1 className="animate-fade-up delay-100 font-display text-5xl md:text-7xl lg:text-8xl font-medium text-[var(--color-foreground)] leading-[0.95] tracking-tight">
            We build
            <br />
            <em className="text-[var(--color-muted)] italic">what matters.</em>
          </h1>

          <p className="animate-fade-up delay-200 mt-8 text-lg text-[var(--color-muted)] max-w-xl leading-relaxed">
            Software engineering, intelligent systems, and strategic technology
            consulting for businesses that need to move fast and build right.
          </p>

          <div className="animate-fade-up delay-300 mt-12 flex items-center gap-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-[var(--color-accent)] text-[var(--color-background)] text-sm font-medium tracking-wide hover:bg-[var(--color-accent)]/90 transition-colors duration-300"
            >
              Start a conversation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors duration-300 tracking-wide"
            >
              View services
            </a>
          </div>
        </div>

        {/* Decorative rule */}
        <div className="animate-fade-up delay-400 absolute right-8 bottom-24 md:bottom-32 hidden lg:flex flex-col items-end gap-3 text-right">
          <div className="w-px h-20 bg-gradient-to-b from-transparent to-[var(--color-accent)]/30" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Est. 2024
          </span>
        </div>
      </div>
    </section>
  );
}
