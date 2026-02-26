export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-12 gap-16 md:gap-8 items-start">
          {/* Left column — label + stats */}
          <div className="md:col-span-4">
            <p className="text-[13px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-12">
              About
            </p>

            <div className="space-y-8">
              {[
                { value: "10+", label: "Years in engineering" },
                { value: "AI", label: "Systems & automation" },
                { value: "Full-stack", label: "Design to deployment" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-4">
                  <span className="font-display text-2xl font-semibold text-[var(--color-foreground)]">
                    {stat.value}
                  </span>
                  <span className="text-sm text-[var(--color-muted)]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — prose */}
          <div className="md:col-span-7 md:col-start-6">
            <h2 className="font-display text-3xl md:text-4xl font-medium text-[var(--color-foreground)] leading-tight tracking-tight">
              Engineering excellence,
              <br />
              <em className="text-[var(--color-muted)] italic">thoughtfully applied.</em>
            </h2>

            <div className="mt-8 space-y-5 text-[var(--color-muted)] leading-relaxed">
              <p>
                Bertram Enterprises is a technology consulting firm specializing in
                software engineering, artificial intelligence, and automation. We
                partner with businesses to design, build, and scale systems that
                solve real problems.
              </p>
              <p>
                From full-stack development and system architecture to AI agents
                and algorithmic trading systems — we bring deep technical expertise
                and a bias for execution. No decks, no fluff. Working software,
                delivered.
              </p>
            </div>

            <div className="mt-10 h-px bg-gradient-to-r from-[var(--color-accent)]/30 to-transparent w-32" />
          </div>
        </div>
      </div>
    </section>
  );
}
