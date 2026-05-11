import Link from 'next/link';
import FaqAccordion from '../components/FaqAccordion';

const faqs = [
  {
    question: 'What areas do you Travel to?',
    answer:
      'WE have structured our rentals as DIY pick up/drop off so we can offer lower prices. However,for an additional fee we can provide drop off/pick up to the Palmetto, Parrish, Bradenton, and Lakewood Ranch, and surrounding areas. Contact us for details!',
  },
  {
    question: 'How much space is needed for the foam cannon?',
    answer:
      'We recommend at least a 20×20 ft open outdoor area for the foam cannon. Foam parties should never be done in a pool for safety reasons.',
  },
  {
    question: 'What ages is a foam party appropriate for?',
    answer:
      'Foam parties are loved by children and adults alike! Dogs can even join in on the fun.',
  },
  {
    question: 'Is foam easy to clean up?',
    answer:
      'One of the best things about foam parties is that the foam is made from a biodegradable, non-toxic solution that breaks down quickly and can be easily cleaned with water.',
  },
  {
    question: 'Can I rent multiple items for the same event?',
    answer:
      'Yes! Many clients bundle party games with foam rentals for the ultimate event experience. Just mention everything you need in your inquiry.',
  },
  {
    question: 'How do I book?',
    answer:
      'Click "Book Now" on any equipment page or the "Book Now" button in the navigation. You will be taken to our form where you can submit your event details and we will get back to you within 24 hours.',
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
