'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/party-rentals', label: 'Party Rentals' },
  { href: '/foam-rentals', label: 'Foam Rentals' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent ? 'bg-transparent' : 'bg-brand-navy shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 🔥 Shrinks on scroll */}
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'h-20' : 'h-28'
          }`}
        >
          
          {/* Logo (also shrinks) */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/Fun-PassLogo.png"
              alt="Fun Pass Entertainment Group"
              width={300}
              height={150}
              className={`w-auto transition-all duration-300 ${
                scrolled ? 'h-20' : 'h-35'
              }`}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-bold uppercase tracking-wide transition-colors duration-200 ${
                  scrolled ? 'text-sm' : 'text-base'
                } ${
                  pathname === link.href
                    ? 'text-brand-yellow'
                    : 'text-white hover:text-brand-yellow'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* CTA button also scales slightly */}
            <a
              href="/party-rentals#book"
              className={`bg-brand-yellow text-brand-navy font-bold rounded-full uppercase tracking-wide hover:brightness-110 transition-all duration-300 ${
                scrolled ? 'px-5 py-2 text-sm' : 'px-6 py-3 text-base'
              }`}
            >
              Book Now
            </a>
          </div>

          {/* Mobile button */}
          <button
            className="md:hidden text-white p-3"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-brand-navy border-t border-white/20 py-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-4 font-bold text-base uppercase tracking-wide transition-colors ${
                  pathname === link.href
                    ? 'text-brand-yellow'
                    : 'text-white hover:text-brand-yellow'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="px-4 pt-4">
              <a
                href="/party-rentals#book"
                className="block text-center bg-brand-yellow text-brand-navy font-bold px-6 py-3 rounded-full text-base uppercase tracking-wide"
                onClick={() => setMenuOpen(false)}
              >
                Book Now
              </a>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}
