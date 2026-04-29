import EquipmentCard from '../components/EquipmentCard';
import HoneyBookEmbed from '../components/HoneyBookEmbed';
import SlideshowHeader from '../components/SlideshowHeader';
import { partyEquipment } from '../../lib/equipment';

// ── HoneyBook config ──────────────────────────────────────────────────────────
// Get these from your HoneyBook dashboard → Tools → Embeddable Contact Form
const HONEYBOOK_COMPANY_ID = '';
const HONEYBOOK_FORM_ID = '';
// ─────────────────────────────────────────────────────────────────────────────

const images = [
  '/party-rentals/kerPlunk.jpeg',
  '/party-rentals/cornHole.jpeg',
  '/party-rentals/tetrisTumble.jpeg',
];

export default function PartyRentals() {
  return (
    <>
      <SlideshowHeader
        images={images}
        emoji="🎉"
        title={<>Party <span className="text-brand-yellow">Rentals</span></>}
        subtitle="Giant games, snow cones, and carnival fun — everything you need for an epic party."
        overlay="bg-brand-navy/65"
      />

      {/* ── Equipment Grid ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {partyEquipment.map((item) => (
              <EquipmentCard key={item.name} {...item} category="party" />
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
