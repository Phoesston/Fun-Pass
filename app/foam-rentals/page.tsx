import Image from 'next/image';
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

      {/* Certification seal */}
      <div className="max-w-2xl mx-auto px-4 mb-10">
        <div className="flex items-center justify-center gap-8 bg-white rounded-3xl shadow-md ring-1 ring-gray-100 px-10 py-8">
          <Image
            src="/logos/carSealBg.png"
            alt="Certified Autism Resource"
            width={200}
            height={200}
            className="h-60 w-auto flex-shrink-0"
          />
          <div className="text-left">
            <p className="font-display text-brand-navy text-3xl leading-tight mb-2">Certified Autism Resource</p>
            <p className="text-gray-400 text-base">Inclusive &amp; sensory-friendly events</p>
          </div>
        </div>
      </div>

      {/* ── HoneyBook Inquiry ── */}
      <section className="bg-gray-50 py-20" id="book">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-display text-4xl text-brand-navy mb-3">
              Request a <span className="text-brand-yellow">Quote</span>
            </h2>
            <p className="text-gray-500 text-lg mb-8">
              Fill out the form and we&apos;ll get back to you within 24 hours!
            </p>
          </div>

          <HoneyBookEmbed companyId={HONEYBOOK_COMPANY_ID} formId={HONEYBOOK_FORM_ID} />
        </div>
      </section>
    </>
  );
}
