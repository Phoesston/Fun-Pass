import EquipmentCard from '../components/EquipmentCard';
import HoneyBookEmbed from '../components/HoneyBookEmbed';

// ── HoneyBook config ──────────────────────────────────────────────────────────
// Get these from your HoneyBook dashboard → Tools → Embeddable Contact Form
const HONEYBOOK_COMPANY_ID = '';
const HONEYBOOK_FORM_ID = '';
// ─────────────────────────────────────────────────────────────────────────────

const partyEquipment = [
  {
    name: 'Giant Connect Four',
    description:
      'The classic 4-in-a-row game blown up to party size. A crowd-pleaser for all ages at any event.',
  },
  {
    name: 'Giant Jenga',
    description:
      'Stack those oversized blocks and hope it doesn\'t tumble! Hours of laughs guaranteed.',
  },
  {
    name: 'Giant Checkers',
    description:
      'Oversized checkers set perfect for lawn parties, corporate events, and family reunions.',
  },
  {
    name: 'Snow Cone Machine',
    description:
      'Commercial-grade machine with your choice of flavors. A must-have for outdoor events.',
  },
  {
    name: 'Cornhole Set',
    description:
      'Custom bean bag toss boards — the ultimate classic outdoor party game.',
  },
  {
    name: 'Carnival Ring Toss',
    description:
      'Bring the carnival to your backyard with this ring toss setup. Add prizes for extra fun!',
  },
  {
    name: 'Oversized Bowling',
    description:
      'Inflatable lawn bowling set — easy to set up and impossible to stop playing.',
  },
  {
    name: 'Limbo Set',
    description:
      'How low can you go? Our colorful limbo kit gets every age group on their feet.',
  },
  {
    name: 'Tug of War Rope',
    description:
      'Classic competition rope for team events, field days, and birthday battles.',
  },
];

export default function PartyRentals() {
  return (
    <>
      {/* ── Header ── */}
      <section className="bg-gradient-to-br from-brand-navy via-blue-900 to-brand-navy pt-32 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-4">
            Party <span className="text-brand-yellow">Rentals</span>
          </h1>
          <p className="text-white/75 text-xl">
            Giant games, snow cones, and carnival fun — everything you need for an epic party.
          </p>
        </div>
      </section>

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
