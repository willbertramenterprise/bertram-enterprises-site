const services = [
  {
    number: "01",
    title: "Software Engineering",
    description:
      "Custom development, architecture design, and full-stack engineering. We build robust, scalable systems from the ground up.",
  },
  {
    number: "02",
    title: "AI & Automation",
    description:
      "Intelligent agents, workflow automation, and ML integration. We turn manual processes into autonomous, reliable systems.",
  },
  {
    number: "03",
    title: "Technical Consulting",
    description:
      "Technology strategy, code review, and system design. Expert guidance for the engineering decisions that matter most.",
  },
  {
    number: "04",
    title: "Trading Technology",
    description:
      "Algorithmic trading systems, market data pipelines, and financial technology. High-performance systems for modern markets.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-baseline justify-between mb-20">
          <div>
            <p className="text-[13px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4">
              Services
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-[var(--color-foreground)] tracking-tight">
              What we do
            </h2>
          </div>
          <div className="hidden md:block w-32 h-px bg-[var(--color-border)]" />
        </div>

        <div className="grid md:grid-cols-2 gap-0 border-t border-[var(--color-border)]">
          {services.map((service, i) => (
            <div
              key={service.number}
              className={`group p-10 md:p-12 border-b border-[var(--color-border)] ${
                i % 2 === 0 ? "md:border-r" : ""
              } hover:bg-[var(--color-surface-raised)] transition-colors duration-500`}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-display text-sm text-[var(--color-accent)]">
                  {service.number}
                </span>
                <svg
                  className="w-4 h-4 text-[var(--color-muted)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-medium text-[var(--color-foreground)] mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-[15px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
