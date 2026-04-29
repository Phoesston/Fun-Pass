import EquipmentCard from '../components/EquipmentCard';
import HoneyBookEmbed from '../components/HoneyBookEmbed';
import SlideshowHeader from '../components/SlideshowHeader';
import { foamEquipment } from '../../lib/equipment';

// ── HoneyBook config ──────────────────────────────────────────────────────────
// Get these from the HoneyBook dashboard → Tools → Embeddable Contact Form
const HONEYBOOK_COMPANY_ID = '';
const HONEYBOOK_FORM_ID = '';
// ─────────────────────────────────────────────────────────────────────────────

const images = [
  '/foam-rentals/foam1.jpg',
  '/foam-rentals/foam2.JPG',
  '/foam-rentals/foam3.JPG',
];

export default function FoamRentals() {
  return (
    <>
      <SlideshowHeader
        images={images}
        emoji="🫧"
        title={<>Foam <span className="text-brand-yellow">Rentals</span></>}
        subtitle="High-powered foam cannons and packages for the most unforgettable parties ever."
        overlay="bg-brand-sky/60"
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
          <HoneyBookEmbed companyId={HONEYBOOK_COMPANY_ID} formId={HONEYBOOK_FORM_ID} />
        </div>
      </section>
    </>
  );
}
