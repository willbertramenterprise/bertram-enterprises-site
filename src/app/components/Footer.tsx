export default function Footer() {
  return (
    <footer className="py-8 bg-[#0a1628] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Bertram Enterprises. All rights
          reserved.
        </div>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
          >
            Top
          </a>
          <a
            href="#services"
            className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
