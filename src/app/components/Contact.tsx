export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0d1b2e]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-sm font-semibold text-[#3b82f6] uppercase tracking-wider mb-3">
          Contact
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Let&apos;s work together
        </h3>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          Have a project in mind or need technical expertise? Reach out and
          let&apos;s discuss how we can help.
        </p>

        <a
          href="mailto:will@bertramenterpises.com"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium rounded-lg transition-colors text-lg"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          will@bertramenterpises.com
        </a>

        <div className="mt-16 grid sm:grid-cols-3 gap-8">
          {[
            {
              label: "Email",
              value: "will@bertramenterpises.com",
              href: "mailto:will@bertramenterpises.com",
            },
            {
              label: "Location",
              value: "United States",
              href: null,
            },
            {
              label: "Availability",
              value: "Open to new projects",
              href: null,
            },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-sm text-gray-500 mb-1">{item.label}</div>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-white hover:text-[#3b82f6] transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <div className="text-white">{item.value}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
