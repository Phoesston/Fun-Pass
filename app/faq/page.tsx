import Link from 'next/link';
import FaqAccordion from '../components/FaqAccordion';

const faqs = [
  {
    question: 'What areas do you serve?',
    answer:
      'We currently serve the local surrounding area. Contact us through the booking form to confirm availability at your location.',
  },
  {
    question: 'How far in advance should I book?',
    answer:
      'We recommend booking at least 1–2 weeks in advance to guarantee availability, especially for weekends and holidays. Last-minute bookings may be available — just reach out!',
  },
  {
    question: 'Does the rental include setup and cleanup?',
    answer:
      'Yes! All rentals include full delivery, setup, and cleanup. You just focus on having fun — we handle the rest.',
  },
  {
    question: 'Is the foam safe for kids?',
    answer:
      'Absolutely. We use a non-toxic, biodegradable foam solution that is safe for all ages, including young children. It rinses off easily with water.',
  },
  {
    question: 'What happens if it rains on my event day?',
    answer:
      'Weather happens! Contact us as soon as possible and we will work with you to reschedule at no extra charge, subject to availability.',
  },
  {
    question: 'Do you require a deposit?',
    answer:
      'Yes, a deposit is required to hold your date. The remaining balance is due before or on the day of the event. Details are handled through HoneyBook during booking.',
  },
  {
    question: 'How much space do I need for the foam cannon?',
    answer:
      'We recommend at least a 20×20 ft open outdoor area for the foam cannon. Larger packages may require more space — we will confirm during booking.',
  },
  {
    question: 'Can I rent multiple items for the same event?',
    answer:
      'Yes! Many clients bundle party games with foam rentals for the ultimate event experience. Just mention everything you need in your inquiry.',
  },
  {
    question: 'Are you insured?',
    answer:
      'Yes, Fun Pass Entertainment Group is fully insured with general liability coverage for every event.',
  },
  {
    question: 'How do I book?',
    answer:
      'Click "Get a Quote" on any equipment page or the "Book Now" button in the navigation. You will be taken to our HoneyBook form where you can submit your event details and we will get back to you within 24 hours.',
  },
];

export default function FAQ() {
  return (
    <>
      {/* ── Header ── */}
      <section className="bg-gradient-to-br from-brand-green via-green-800 to-brand-navy pt-32 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-6xl mb-4">❓</div>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-4">
            Frequently Asked <span className="text-brand-yellow">Questions</span>
          </h1>
          <p className="text-white/75 text-xl">
            Everything you need to know before booking.
          </p>
        </div>
      </section>

      {/* ── FAQ List ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ── Still have questions CTA ── */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-white/70 mb-8">
            Reach out through our booking form and we&apos;ll get back to you within 24 hours.
          </p>
          <Link
            href="/party-rentals#book"
            className="inline-block bg-brand-yellow text-brand-navy font-bold px-8 py-4 rounded-full uppercase tracking-wide hover:scale-105 transition-transform"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
