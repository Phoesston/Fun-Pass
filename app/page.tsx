import Link from 'next/link';
import Image from 'next/image';
import EquipmentCard from './components/EquipmentCard';

const featuredItems = [
  {
    name: 'Giant Connect Four',
    description: 'The classic 4-in-a-row game blown up to party size. Perfect for guests of all ages.',
    category: 'party' as const,
  },
  {
    name: 'Snow Cone Machine',
    description: 'Commercial-grade snow cone machine — cool treats that keep the party going.',
    category: 'party' as const,
  },
  {
    name: 'Foam Cannon Deluxe',
    description: 'High-powered foam cannon that fills any space with fun, fluffy foam.',
    category: 'foam' as const,
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Looping background video — place your video at /public/videos/hero.mp4 */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Gradient fallback (shows when video hasn't loaded or doesn't exist) */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-blue-900 to-brand-sky" />
        {/* Dark overlay so text pops over any background */}
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <Image
            src="/Fun-PassLogo.jpeg"
            alt="Fun Pass Entertainment Group"
            width={220}
            height={110}
            className="mx-auto mb-8 drop-shadow-2xl rounded-2xl"
            priority
          />
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

        {/* Scroll arrow */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Marquee strip ── */}
      <section className="bg-brand-yellow py-4">
        <p className="font-display text-brand-navy text-xl md:text-2xl text-center">
          🎊 Serving Your Area &nbsp;•&nbsp; Fully Insured &nbsp;•&nbsp; Setup &amp; Cleanup Included 🎊
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
