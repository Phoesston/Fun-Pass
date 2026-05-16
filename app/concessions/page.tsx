import EquipmentCard from '../components/EquipmentCard';
import InquiryForm from '../components/InquiryForm';
import SlideshowHeader from '../components/SlideshowHeader';
import { concessionEquipment } from '../../lib/equipment';

export default function Concessions() {
  return (
    <>
      <SlideshowHeader
        images={[]}
        emoji="🍬"
        title={<>Concession <span className="text-brand-yellow">Rentals</span></>}
        subtitle="Sweet treats and snacks that take your event to the next level."
        overlay="bg-brand-navy/65"
      />

      {/* ── Marquee strip ── */}
      <section className="bg-brand-yellow py-4">
        <p className="font-display text-brand-navy text-xl md:text-2xl text-center">
          Ask us about bundling to save more! 🎁
        </p>
      </section>

      {/* ── Equipment Grid ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {concessionEquipment.map((item) => (
              <EquipmentCard key={item.name} {...item} category="concessions" />
            ))}
          </div>
        </div>
      </section>

      {/* ── HoneyBook Inquiry ── */}
      <section className="bg-gray-50 py-20" id="book">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl text-brand-navy mb-3">
              Request a <span className="text-brand-yellow">Quote</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Fill out the form and we&apos;ll get back to you within 24 hours!
            </p>
          </div>
          <InquiryForm defaultService="Concessions" />
        </div>
      </section>
    </>
  );
}
