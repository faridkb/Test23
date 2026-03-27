export default function Footer() {
  return (
    <footer className="bg-[#1F2937] text-gray-400 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <a href="#" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-200">
          CorpDash
        </a>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          {[
            { label: 'Privacy Policy', href: '#' },
            { label: 'Terms of Service', href: '#' },
            { label: 'Contact', href: '#contact' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} CorpDash. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
