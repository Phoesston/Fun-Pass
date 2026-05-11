import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Image
              src="/logos/Fun-PassLogo1.png"
              alt="Fun Pass Entertainment Group"
              width={320}
              height={160}
              className="h-60 w-auto"
            />
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display text-brand-yellow text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/70 hover:text-brand-yellow transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/party-rentals" className="text-white/70 hover:text-brand-yellow transition-colors">
                  Party Rentals
                </Link>
              </li>
              <li>
                <Link href="/foam-rentals" className="text-white/70 hover:text-brand-yellow transition-colors">
                  Foam Rentals
                </Link>
              </li>
              <li>
                <Link href="/concessions" className="text-white/70 hover:text-brand-yellow transition-colors">
                  Concessions
                </Link>
              </li>
              <li>
                <Link href="/chairs-tables" className="text-white/70 hover:text-brand-yellow transition-colors">
                  Chairs &amp; Tables
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-brand-yellow text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>📧 info@funpassentertainment.com</li>
              <li>📞 (941) 396-3366</li>
              <li>📍 Palmetto, Florida</li>
            </ul>
          </div>
        </div>

        {/* Service area */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/50 text-xs uppercase tracking-widest mb-2 font-bold">Proudly Serving</p>
          <p className="text-white/50 text-sm">
            Palmetto · Bradenton · Parrish · Ellenton · Lakewood Ranch · Sarasota · Ruskin · Sun City Center · Apollo Beach · Terra Ceia
          </p>
          <p className="text-white/35 text-xs mt-1">
            Don&apos;t see your city?{' '}
            <a href="/party-rentals#book" className="underline hover:text-white/60 transition-colors">
              Contact us
            </a>{' '}
            to check availability.
          </p>
        </div>

        <div className="border-t border-white/10 mt-6 pt-6 text-center text-white/30 text-sm">
          &copy; {new Date().getFullYear()} Fun Pass Entertainment Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
