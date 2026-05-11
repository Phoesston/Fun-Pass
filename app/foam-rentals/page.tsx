import EquipmentCard from '../components/EquipmentCard';
import InquiryForm from '../components/InquiryForm';
import SlideshowHeader from '../components/SlideshowHeader';
import { foamEquipment } from '../../lib/equipment';

const images = [
  '/foam-rentals/foam1.jpg',
  '/foam-rentals/foam2.jpg',
];

export default function FoamRentals() {
  return (
    <>
      <SlideshowHeader
        images={images}
        emoji="🫧"
        title={<>Foam <span className="text-brand-yellow">Rentals</span></>}
        subtitle="High-powered foam cannons and packages for the most unforgettable parties ever."
        overlay="bg-brand-navy/65"
      />

      {/* ── Equipment Grid ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {foamEquipment.map((item) => (
              <EquipmentCard key={item.name} {...item} category="foam" />
            ))}
          </div>
        </div>
      </section>

      {/* ── What You'll Need ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl text-brand-navy mb-3">
              What You&apos;ll <span className="text-brand-yellow">Need</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Make sure your venue is ready before the foam flies.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '💧', title: 'Water Source', desc: 'A standard garden hose hookup within 50 ft of the setup area.' },
              { icon: '⚡', title: 'Power Outlet', desc: 'A grounded 120V outlet within 100 ft — a heavy-duty extension cord works fine.' },
              { icon: '📐', title: 'Open Space', desc: 'At least 20×20 ft of flat, clear ground for safe foam play.' },
              { icon: '🌿', title: 'Grass or Concrete', desc: 'Foam works best on grass or sealed concrete — avoid gravel or dirt.' },
              { icon: '👕', title: 'Swim Attire', desc: "Guests should wear swimwear or clothes they don't mind getting soaked." },
              { icon: '☀️', title: 'Good Weather', desc: 'We recommend temperatures above 65°F for the most comfortable experience.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-display text-brand-navy text-xl mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
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
          <InquiryForm defaultService="Foam Rentals" />
        </div>
      </section>
    </>
  );
}
