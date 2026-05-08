import Link from 'next/link';
import Image from 'next/image';
import EquipmentCard from './components/EquipmentCard';
import SlideshowHeader from './components/SlideshowHeader';
import { featuredItems } from '../lib/equipment';

const heroImages = [
  '/party-rentals/cornHole.jpeg',
  '/foam-rentals/foam1.jpg',
  '/party-rentals/giantJenga.jpeg',
  '/foam-rentals/foam2.JPG',
  '/party-rentals/tetrisTumble.jpg',
  '/foam-rentals/foam3.JPG',
  '/party-rentals/yardDice.jpeg',
  '/party-rentals/giantGuessWho.jpeg',
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <SlideshowHeader images={heroImages} overlay="bg-black/45" className="min-h-screen">
        <div className="text-center px-4 max-w-4xl mx-auto pt-20">
          <Image
            src="/logos/Fun-PassLogo.png"
            alt="Fun Pass Entertainment Group"
            width={220}
            height={110}
            className="mx-auto mb-3 drop-shadow-2xl rounded-2xl"
            priority
          />
          <p className="text-white text-sm uppercase tracking-widest mb-8 drop-shadow-lg font-bold">
            📍 Palmetto · Bradenton · Parrish · Ellenton · Lakewood Ranch · Sarasota &amp; more
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-white mb-5 drop-shadow-lg leading-tight">
            Where Every Event Becomes a{' '}
            <span className="text-brand-yellow">Party!</span>
          </h1>
          <p className="text-white/85 text-xl md:text-2xl mb-10 font-medium">
            Premium party &amp; foam rentals for birthdays, corporate events, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/party-rentals"
              className="bg-brand-yellow text-brand-navy font-bold px-8 py-4 rounded-full text-lg uppercase tracking-wide hover:scale-105 transition-transform shadow-xl"
            >
              🎉 Party Rentals
            </Link>
            <Link
              href="/foam-rentals"
              className="bg-brand-sky text-brand-navy font-bold px-8 py-4 rounded-full text-lg uppercase tracking-wide hover:scale-105 transition-transform shadow-xl"
            >
              🫧 Foam Rentals
            </Link>
          </div>
        </div>
      </SlideshowHeader>

      {/* ── Marquee strip ── */}
      <section className="bg-brand-yellow py-4">
        <p className="font-display text-brand-navy text-xl md:text-2xl text-center">
          🎊 Serving The Suncoast Region &nbsp;•&nbsp; Affordable Prices &nbsp;•&nbsp; Unforgettable Experiences 🎊
        </p>
      </section>

      {/* ── Services ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl text-brand-navy mb-4">What We Offer</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              From giant lawn games to epic foam parties — we bring the fun to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/party-rentals"
              className="bg-gradient-to-br from-brand-yellow/20 to-yellow-50 rounded-3xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <div className="text-6xl mb-4">🎮</div>
              <h3 className="font-display text-2xl text-brand-navy mb-3">Party Rentals</h3>
              <p className="text-gray-600 text-sm">
                Giant games, snow cones, carnival fun — perfect for any event.
              </p>
            </Link>

            <Link
              href="/foam-rentals"
              className="bg-gradient-to-br from-brand-sky/20 to-cyan-50 rounded-3xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <div className="text-6xl mb-4">🫧</div>
              <h3 className="font-display text-2xl text-brand-navy mb-3">Foam Rentals</h3>
              <p className="text-gray-600 text-sm">
                High-powered foam cannons for the most memorable parties ever.
              </p>
            </Link>

            <Link
              href="/gallery"
              className="bg-gradient-to-br from-brand-green/20 to-green-50 rounded-3xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <div className="text-6xl mb-4">📸</div>
              <h3 className="font-display text-2xl text-brand-navy mb-3">Gallery</h3>
              <p className="text-gray-600 text-sm">
                See the smiles and memories we&apos;ve helped create.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured equipment ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl text-brand-navy mb-4">Popular Rentals</h2>
            <p className="text-gray-500 text-lg">A taste of what we bring to your event.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((item) => (
              <EquipmentCard key={item.name} {...item} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/party-rentals"
              className="inline-block bg-brand-navy text-white font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wide hover:bg-brand-sky transition-colors"
            >
              View All Rentals
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="bg-brand-navy py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            Ready to Make <span className="text-brand-yellow">Memories?</span>
          </h2>
          <p className="text-white/75 text-xl mb-10">
            Book your next event with Fun Pass Entertainment Group today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/party-rentals"
              className="bg-brand-yellow text-brand-navy font-bold px-8 py-4 rounded-full text-lg uppercase hover:scale-105 transition-transform"
            >
              Party Rentals
            </Link>
            <Link
              href="/foam-rentals"
              className="bg-brand-sky text-brand-navy font-bold px-8 py-4 rounded-full text-lg uppercase hover:scale-105 transition-transform"
            >
              Foam Rentals
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
