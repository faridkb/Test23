'use client';

import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-[#2563EB]">
            CorpDash
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {['Features', 'Pricing', 'About', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[#1F2937] hover:text-[#2563EB] font-medium transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#pricing"
              className="bg-[#2563EB] text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Get Started
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-[#1F2937] focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 space-y-3">
          {['Features', 'Pricing', 'About', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block text-[#1F2937] hover:text-[#2563EB] font-medium py-1 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setMenuOpen(false)}
            className="block bg-[#2563EB] text-white px-5 py-2 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
