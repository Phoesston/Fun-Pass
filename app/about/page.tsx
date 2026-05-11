import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <>
      {/* ── Hero header ── */}
      <section className="bg-gradient-to-br from-brand-navy via-blue-900 to-brand-navy pt-32 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-6xl mb-4">🎊</div>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-4">
            About <span className="text-brand-yellow">Us</span>
          </h1>
          <p className="text-white/75 text-xl">
            Veteran-owned. Family-operated. Community driven.
          </p>
        </div>
      </section>

      {/* ── Veteran badge strip ── */}
      <section className="bg-brand-yellow py-5">
        <p className="font-display text-brand-navy text-xl md:text-2xl text-center">
          🇺🇸 Proudly Veteran-Owned &amp; Family-Operated &nbsp;•&nbsp; Serving Palmetto, FL &amp; the Suncoast 🇺🇸
        </p>
      </section>

      {/* ── Our Story ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* Logo / image side */}
            <div className="flex justify-center order-last md:order-first">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-brand-yellow/30 to-brand-sky/30 rounded-3xl blur-xl" />
                <Image
                  src="/logos/Fun-PassLogo1.png"
                  alt="Fun Pass Entertainment Group"
                  width={420}
                  height={420}
                  className="relative w-full max-w-sm h-auto drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Text side */}
            <div>
              <h2 className="font-display text-4xl md:text-5xl text-brand-navy mb-6">
                Our <span className="text-brand-yellow">Story</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Welcome to <strong className="text-brand-navy">Fun Pass Entertainment Group</strong>, your
                  local source for fun, laughter, and unforgettable memories in Palmetto, Florida and
                  the surrounding Suncoast communities.
                </p>
                <p>
                  We are a <strong className="text-brand-navy">veteran-owned and family-operated</strong> business,
                  proudly serving our neighbors with the same dedication, reliability, and teamwork that
                  guided us during our military service. As a family, we understand how important celebrations
                  are, and we take pride in helping other families create memories that last a lifetime.
                </p>
                <p>
                  We specialize in yard &amp; party game rentals, concession machines, and exciting foam
                  parties. Whether you&apos;re planning a birthday party, school event, family reunion, corporate
                  gathering, church function, or neighborhood celebration. We&apos;re here to make your event
                  simple, fun, and stress-free.
                </p>
                <p>
                  When you book with us, you&apos;re not just getting games or foam,{' '}
                  <strong className="text-brand-navy">you&apos;re supporting a local veteran family</strong> committed
                  to bringing fun to every event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl text-brand-navy mb-4">
              Why Choose <span className="text-brand-yellow">Fun Pass?</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              We bring more than just equipment — we bring peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: '🎖️', title: 'Veteran-Owned', body: 'Built on military values — reliability, integrity, and service above self.' },
              { emoji: '🎉', title: 'All Ages Welcome', body: 'Our rentals are designed for kids and adults to enjoy together.' },
              { emoji: '💧', title: 'Safe & Clean', body: 'Equipment is sanitized before every event. Your safety is our priority.' },
              { emoji: '🤝', title: 'Community First', body: 'Proud Palmetto residents supporting families and local organizations.' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
              >
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h3 className="font-display text-xl text-brand-navy mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Events we serve ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl text-brand-navy mb-4">
            We Serve All Kinds of <span className="text-brand-yellow">Events</span>
          </h2>
          <p className="text-gray-500 text-lg mb-10">No celebration is too big or too small.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              '🎂 Birthday Parties',
              '🏫 School Events',
              '👨‍👩‍👧 Family Reunions',
              '🏢 Corporate Gatherings',
              '⛪ Church Functions',
              '🏘️ Neighborhood Celebrations',
              '🎓 Graduations',
              '🌞 Summer Camps',
              '🎪 Festivals',
            ].map((tag) => (
              <span
                key={tag}
                className="bg-brand-navy/5 text-brand-navy font-bold text-sm px-5 py-2.5 rounded-full border border-brand-navy/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Area ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-5xl mb-4">📍</div>
          <h2 className="font-display text-4xl text-brand-navy mb-4">
            Where We <span className="text-brand-yellow">Serve</span>
          </h2>
          <p className="text-gray-500 text-lg mb-10">
            Based in Palmetto, FL — proudly serving the entire Suncoast region.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              'Palmetto', 'Bradenton', 'Parrish', 'Ellenton',
              'Lakewood Ranch', 'Sarasota', 'Ruskin',
              'Sun City Center', 'Apollo Beach', 'Terra Ceia',
            ].map((city) => (
              <span
                key={city}
                className="bg-white border border-brand-navy/15 text-brand-navy font-bold text-sm px-5 py-2.5 rounded-full shadow-sm"
              >
                📍 {city}
              </span>
            ))}
          </div>
          <p className="text-gray-400 text-sm">
            Don&apos;t see your city?{' '}
            <a href="/party-rentals#book" className="text-brand-sky font-bold hover:underline">
              Contact us
            </a>{' '}
            and we&apos;ll let you know if we can make it out to you!
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-brand-navy py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            Ready to Book Your <span className="text-brand-yellow">Event?</span>
          </h2>
          <p className="text-white/70 mb-10 text-lg">
            Check out our rentals and request a quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/party-rentals"
              className="bg-brand-yellow text-brand-navy font-bold px-8 py-4 rounded-full uppercase tracking-wide hover:scale-105 transition-transform"
            >
              🎉 Party Rentals
            </Link>
            <Link
              href="/foam-rentals"
              className="bg-brand-sky text-brand-navy font-bold px-8 py-4 rounded-full uppercase tracking-wide hover:scale-105 transition-transform"
            >
              🫧 Foam Rentals
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
