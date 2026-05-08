import Image from 'next/image';
import Link from 'next/link';

// Add your photo filenames to /public/gallery/ and list them here.
// Example: { src: '/gallery/foam-party-1.jpg', alt: 'Summer foam party', label: 'Summer Foam Party' }
const photos: { src: string; alt: string; label: string }[] = [
  // { src: '/gallery/your-photo.jpg', alt: 'Description', label: 'Event Name' },
];

// Number of placeholder slots to show when no real photos have been added yet
const PLACEHOLDER_COUNT = 12;

export default function Gallery() {
  const hasPhotos = photos.length > 0;

  return (
    <>
      {/* ── Header ── */}
      <section className="bg-gradient-to-br from-brand-green via-green-700 to-brand-navy pt-32 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-6xl mb-4">📸</div>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-4">
            Our <span className="text-brand-yellow">Gallery</span>
          </h1>
          <p className="text-white/80 text-xl">
            See the smiles, the foam, and the fun we bring to every event.
          </p>
        </div>
      </section>

      {/* ── Photo Grid ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {hasPhotos ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {photos.map((photo, i) => (
                <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden group relative">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={800}
                    height={600}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {photo.label && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white font-bold text-sm">{photo.label}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            /* ── Placeholder grid shown until real photos are added ── */
            <div>
            
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => {
                  const isEven = i % 2 === 0;
                  const aspectClass = i % 3 === 0 ? 'aspect-[4/5]' : 'aspect-[4/3]';
                  const bg = isEven
                    ? 'bg-gradient-to-br from-brand-yellow/30 to-yellow-100'
                    : 'bg-gradient-to-br from-brand-sky/30 to-cyan-100';
                  const emoji = i % 3 === 0 ? '🫧' : i % 3 === 1 ? '🎉' : '📸';

                  return (
                    <div
                      key={i}
                      className={`break-inside-avoid rounded-2xl overflow-hidden ${bg} ${aspectClass} flex flex-col items-center justify-center gap-2`}
                    >
                      <span className="text-5xl">{emoji}</span>
                      <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                        Photo {i + 1}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Want to be in our gallery?
          </h2>
          <p className="text-white/70 mb-8">Book your event and let&apos;s make some memories!</p>
          <Link
            href="/party-rentals#book"
            className="inline-block bg-brand-yellow text-brand-navy font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wide hover:scale-105 transition-transform"
          >
            Book Your Event
          </Link>
        </div>
      </section>
    </>
  );
}
