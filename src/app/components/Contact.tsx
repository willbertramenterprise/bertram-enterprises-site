export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-12 gap-16 md:gap-8">
          {/* Left */}
          <div className="md:col-span-5">
            <p className="text-[13px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4">
              Contact
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-[var(--color-foreground)] leading-tight tracking-tight">
              Let&apos;s work
              <br />
              <em className="text-[var(--color-muted)] italic">together.</em>
            </h2>

            <p className="mt-6 text-[var(--color-muted)] leading-relaxed max-w-sm">
              Have a project in mind or need technical expertise? We&apos;d like to hear about it.
            </p>
          </div>

          {/* Right */}
          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center">
            <a
              href="mailto:will@bertramenterprises.org"
              className="group flex items-center gap-4 py-6 border-b border-[var(--color-border)] hover:border-[var(--color-accent)]/40 transition-colors duration-500"
            >
              <span className="text-[13px] uppercase tracking-[0.15em] text-[var(--color-muted)] w-24 shrink-0">
                Email
              </span>
              <span className="text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors duration-300">
                will@bertramenterprises.org
              </span>
              <svg
                className="w-4 h-4 ml-auto text-[var(--color-muted)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <div className="flex items-center gap-4 py-6 border-b border-[var(--color-border)]">
              <span className="text-[13px] uppercase tracking-[0.15em] text-[var(--color-muted)] w-24 shrink-0">
                Location
              </span>
              <span className="text-[var(--color-foreground)]">
                United States
              </span>
            </div>

            <div className="flex items-center gap-4 py-6 border-b border-[var(--color-border)]">
              <span className="text-[13px] uppercase tracking-[0.15em] text-[var(--color-muted)] w-24 shrink-0">
                Status
              </span>
              <span className="flex items-center gap-2 text-[var(--color-foreground)]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for new projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
