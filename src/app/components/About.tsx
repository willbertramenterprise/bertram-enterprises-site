export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0d1b2e]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-semibold text-[#3b82f6] uppercase tracking-wider mb-3">
              About Us
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Engineering excellence,{" "}
              <span className="text-gray-400">delivered.</span>
            </h3>
            <p className="mt-6 text-gray-400 leading-relaxed">
              Bertram Enterprises is a technology consulting firm specializing in
              software engineering, artificial intelligence, and automation. We
              partner with businesses to design, build, and scale systems that
              solve real problems.
            </p>
            <p className="mt-4 text-gray-400 leading-relaxed">
              From full-stack development and system architecture to AI agents
              and algorithmic trading systems — we bring deep technical expertise
              and a bias for execution.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "10+", label: "Years Experience" },
              { value: "AI", label: "& Automation" },
              { value: "Full", label: "Stack Engineering" },
              { value: "24/7", label: "Production Systems" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center"
              >
                <div className="text-2xl font-bold text-[#3b82f6]">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
