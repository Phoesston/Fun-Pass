import Link from 'next/link';
import Image from 'next/image';
import SlideshowHeader from './components/SlideshowHeader';

const heroImages = [
  '/party-rentals/nerf.png',
  '/concessions/foodMachineBundleAd.png',
  '/party-rentals/cornHole.jpg',
  '/foam-rentals/foam1.jpg',
  '/foam-rentals/foamCannonAd.png',
  '/party-rentals/tetrisTumble.jpg',
  '/party-rentals/giantGuessWho.jpeg',
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <SlideshowHeader images={heroImages} overlay="bg-black/45" className="min-h-screen">
        <div className="text-center px-4 max-w-4xl mx-auto pt-20">
          <Image
            src="/logos/Fun-PassLogo1.png"
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
          <div className="flex flex-wrap gap-4 justify-center">
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
            <Link
              href="/concessions"
              className="bg-brand-green text-white font-bold px-8 py-4 rounded-full text-lg uppercase tracking-wide hover:scale-105 transition-transform shadow-xl"
            >
              🍿 Concessions
            </Link>
            <Link
              href="/chairs-tables"
              className="bg-white text-brand-navy font-bold px-8 py-4 rounded-full text-lg uppercase tracking-wide hover:scale-105 transition-transform shadow-xl"
            >
              🪑 Chairs &amp; Tables
            </Link>
          </div>
        </div>
      </SlideshowHeader>

      {/* ── Marquee strip ── */}
      <section className="bg-brand-yellow py-4">
        <p className="font-display text-brand-navy text-xl md:text-2xl text-center">
          🎊 Serving The Suncoast Region &nbsp;•&nbsp; Affordable Prices &nbsp;•&nbsp; Veteran-Owned Business 🎊
        </p>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl text-brand-navy mb-4">How It Works</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Getting the party started is easier than you think.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop only) */}
            <div className="hidden md:block absolute top-14 left-1/3 right-1/3 h-0.5 bg-brand-yellow/40" />

            {[
              { step: '1', emoji: '🎉', title: 'Browse Our Rentals', desc: 'Explore our equipment and find what fits your event — games, foam, concessions, chairs & tables, and more.' },
              { step: '2', emoji: '📋', title: 'Send an Inquiry', desc: 'Ready to book? Fill out our simple inquiry form with your event details and we\'ll take it from there.' },
              { step: '3', emoji: '📬', title: 'We\'ll Reach Out', desc: 'We\'ll review your request and get back to you within 24 hours to confirm availability and finalize everything.' },
            ].map(({ step, emoji, title, desc }) => (
              <div key={step} className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-28 h-28 rounded-full bg-brand-yellow/15 flex items-center justify-center text-5xl">
                    {emoji}
                  </div>
                  <span className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-brand-navy text-white text-sm font-bold flex items-center justify-center">
                    {step}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-brand-navy mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/party-rentals#book"
              className="inline-block bg-brand-yellow text-brand-navy font-bold px-10 py-4 rounded-full text-lg uppercase tracking-wide hover:scale-105 transition-transform shadow-lg"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl text-brand-navy mb-3">The Premier Party Rental Company on the Suncoast!</h2>
            <p className="font-display text-2xl text-brand-sky mb-5">The Party Comes to You!</p>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
              Fun Pass Entertainment Group brings the fun straight to your backyard, venue, or event location — so you can focus on making memories while we handle everything else. Whether it&apos;s a birthday bash, school event, church gathering, corporate outing, or neighborhood block party, we have everything you need to make it a day everyone will be talking about.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: '📍', title: 'Local & Dependable', desc: 'We\'re based right here in Palmetto, FL. When you book with us, you\'re supporting a local business that genuinely cares about your community and your event.' },
              { emoji: '💰', title: 'Transparent Pricing', desc: 'No hidden fees, no surprises. We keep our pricing straightforward and affordable so you can plan your event budget with confidence.' },
              { emoji: '🎯', title: 'Right for Any Occasion', desc: 'Birthday parties, school events, corporate outings, neighborhood block parties — our equipment lineup is designed to fit events of all sizes and styles.' },
              { emoji: '🤝', title: 'Personalized Service', desc: 'You\'re not just a transaction. We take the time to understand your event, answer your questions, and make sure you get exactly what you need for a great experience.' },
              { emoji: '✅', title: 'Easy Booking Process', desc: 'Just browse our rentals, send us an inquiry, and we\'ll get back to you within 24 hours to lock in the details. Simple, fast, and hassle-free.' },
            ].map(({ emoji, title, desc }) => (
              <div key={title} className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{emoji}</div>
                <h3 className="font-display text-xl text-brand-navy mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Area ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-14">
            <div className="lg:w-2/5 shrink-0">
              <p className="text-brand-sky font-bold uppercase tracking-widest text-sm mb-3">Where We Serve</p>
              <h2 className="font-display text-4xl md:text-5xl text-brand-navy leading-tight mb-4">
                Proudly Serving<br />the Suncoast
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                We serve anywhere across the greater Tampa Bay &amp; Sarasota area. Don&apos;t see your city? Reach out — we may still be able to make it work.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-brand-navy text-white font-bold px-8 py-4 rounded-full uppercase tracking-wide hover:scale-105 transition-transform shadow-lg"
              >
                Contact Us
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 content-start">
              {['Palmetto', 'Bradenton', 'Parrish', 'Ellenton', 'Lakewood Ranch', 'Sarasota', 'Ruskin', 'Sun City Center', 'Apollo Beach', 'Terra Ceia'].map((city) => (
                <span
                  key={city}
                  className="flex items-center gap-2 bg-gray-50 border border-gray-200 text-brand-navy font-semibold text-sm px-5 py-2.5 rounded-full hover:border-brand-sky hover:bg-brand-sky/5 transition-colors"
                >
                  <span className="text-brand-sky text-xs">📍</span>
                  {city}
                </span>
              ))}
            </div>
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
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/party-rentals"
              className="bg-brand-yellow text-brand-navy font-bold px-8 py-4 rounded-full text-lg uppercase hover:scale-105 transition-transform"
            >
              🎉 Party Rentals
            </Link>
            <Link
              href="/foam-rentals"
              className="bg-brand-sky text-brand-navy font-bold px-8 py-4 rounded-full text-lg uppercase hover:scale-105 transition-transform"
            >
              🫧 Foam Rentals
            </Link>
            <Link
              href="/concessions"
              className="bg-brand-green text-white font-bold px-8 py-4 rounded-full text-lg uppercase hover:scale-105 transition-transform"
            >
              🍿 Concessions
            </Link>
            <Link
              href="/chairs-tables"
              className="bg-white text-brand-navy font-bold px-8 py-4 rounded-full text-lg uppercase hover:scale-105 transition-transform"
            >
              🪑 Chairs &amp; Tables
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
