'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const rentalLinks = [
  { href: '/party-rentals',  label: 'Party Rentals' },
  { href: '/foam-rentals',   label: 'Foam Rentals' },
  { href: '/concessions',    label: 'Concessions' },
  { href: '/chairs-tables',  label: 'Chairs & Tables' },
];

const topLinks = [
  { href: '/',        label: 'Home' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about',   label: 'About' },
  { href: '/faq',     label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

const rentalHrefs = rentalLinks.map((l) => l.href);

export default function Navbar() {
  const [menuOpen, setMenuOpen]       = useState(false);
  const [rentalsOpen, setRentalsOpen] = useState(false);
  const [mobileRentals, setMobileRentals] = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const pathname  = usePathname();
  const isHome    = pathname === '/';
  const dropRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setRentalsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const transparent = isHome && !scrolled;
  const onRentalPage = rentalHrefs.includes(pathname);
  const bookHref = onRentalPage ? '#book' : '/party-rentals#book';

  const linkClass = (active: boolean) =>
    `font-bold uppercase tracking-wide transition-colors duration-200 ${
      scrolled ? 'text-sm' : 'text-base'
    } ${active ? 'text-brand-yellow' : 'text-white hover:text-brand-yellow'}`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent ? 'bg-transparent' : 'bg-brand-navy shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'h-20' : 'h-28'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logos/Fun-PassLogo.png"
              alt="Fun Pass Entertainment Group"
              width={300}
              height={150}
              className={`w-auto transition-all duration-300 ${scrolled ? 'h-20' : 'h-35'}`}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">

            <Link href="/" className={linkClass(pathname === '/')}>Home</Link>

            {/* Rentals dropdown */}
            <div className="relative" ref={dropRef}>
              <button
                onClick={() => setRentalsOpen((o) => !o)}
                className={`flex items-center gap-1 ${linkClass(onRentalPage)}`}
              >
                Rentals
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${rentalsOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {rentalsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 bg-brand-navy rounded-2xl shadow-2xl ring-1 ring-white/10 overflow-hidden">
                  {rentalLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setRentalsOpen(false)}
                      className={`block px-5 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${
                        pathname === link.href
                          ? 'text-brand-yellow bg-white/10'
                          : 'text-white hover:text-brand-yellow hover:bg-white/10'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {topLinks.slice(1).map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(pathname === link.href)}>
                {link.label}
              </Link>
            ))}

            <a
              href={bookHref}
              className={`bg-brand-yellow text-brand-navy font-bold rounded-full uppercase tracking-wide hover:brightness-110 transition-all duration-300 ${
                scrolled ? 'px-5 py-2 text-sm' : 'px-6 py-3 text-base'
              }`}
            >
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
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
            <Link
              href="/"
              className={`block px-4 py-4 font-bold text-base uppercase tracking-wide transition-colors ${pathname === '/' ? 'text-brand-yellow' : 'text-white hover:text-brand-yellow'}`}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            {/* Mobile rentals accordion */}
            <button
              className={`w-full flex items-center justify-between px-4 py-4 font-bold text-base uppercase tracking-wide transition-colors ${onRentalPage ? 'text-brand-yellow' : 'text-white hover:text-brand-yellow'}`}
              onClick={() => setMobileRentals((o) => !o)}
            >
              Rentals
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${mobileRentals ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileRentals && (
              <div className="bg-white/5 border-l-2 border-brand-yellow ml-4 mb-1">
                {rentalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${
                      pathname === link.href ? 'text-brand-yellow' : 'text-white/80 hover:text-brand-yellow'
                    }`}
                    onClick={() => { setMenuOpen(false); setMobileRentals(false); }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            {topLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-4 font-bold text-base uppercase tracking-wide transition-colors ${pathname === link.href ? 'text-brand-yellow' : 'text-white hover:text-brand-yellow'}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="px-4 pt-4">
              <a
                href={bookHref}
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
