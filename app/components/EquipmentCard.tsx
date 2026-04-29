import Image from 'next/image';

interface EquipmentCardProps {
  name: string;
  description: string;
  imageSrc?: string;
  category: 'party' | 'foam';
  bookingHref?: string;
}

export default function EquipmentCard({ name, description, imageSrc, category, bookingHref }: EquipmentCardProps) {
  const href = bookingHref ?? (category === 'foam' ? '/foam-rentals#book' : '/party-rentals#book');
  const placeholderGradient =
    category === 'foam'
      ? 'from-brand-sky to-cyan-300'
      : 'from-brand-yellow to-yellow-300';

  const placeholderEmoji = category === 'foam' ? '🫧' : '🎉';

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group flex flex-col">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${placeholderGradient} flex flex-col items-center justify-center gap-2`}
          >
            <span className="text-6xl">{placeholderEmoji}</span>
            <span className="text-brand-navy/50 text-xs font-bold uppercase tracking-widest">
              Photo Coming Soon
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-xl text-brand-navy mb-2">{name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{description}</p>
        <a
          href={href}
          className="block text-center bg-brand-navy text-white font-bold py-3 rounded-full text-sm uppercase tracking-wide hover:bg-brand-sky transition-colors"
        >
          Get a Quote
        </a>
      </div>
    </div>
  );
}
