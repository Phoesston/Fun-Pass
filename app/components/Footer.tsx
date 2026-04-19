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
              src="/Fun-PassLogo.png"
              alt="Fun Pass Entertainment Group"
              width={140}
              height={70}
              className="h-16 w-auto mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed">
              Making every event unforgettable with premium party and foam rentals.
            </p>
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
                <Link href="/gallery" className="text-white/70 hover:text-brand-yellow transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-brand-yellow text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>📧 info@funpassentertainment.com</li>
              <li>📞 (555) 123-4567</li>
              <li>📍 Your City, State</li>
            </ul>
            <a
              href="/party-rentals#book"
              className="inline-block mt-5 bg-brand-yellow text-brand-navy font-bold px-5 py-2.5 rounded-full text-sm uppercase tracking-wide hover:brightness-110 transition-all"
            >
              Book Now
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 text-center text-white/40 text-sm">
          &copy; {new Date().getFullYear()} Fun Pass Entertainment Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
