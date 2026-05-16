'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

const categoryConfig: Record<string, { gradient: string; emoji: string }> = {
  foam:            { gradient: 'from-brand-sky to-cyan-300',       emoji: '🫧' },
  concessions:     { gradient: 'from-pink-400 to-rose-300',        emoji: '🍬' },
  'chairs-tables': { gradient: 'from-brand-green to-green-300',    emoji: '🪑' },
  party:           { gradient: 'from-brand-yellow to-yellow-300',  emoji: '🎉' },
};

interface EquipmentCardProps {
  name: string;
  description: string;
  imageSrc?: string;
  images?: string[];
  category: 'party' | 'foam' | 'concessions' | 'chairs-tables';
  price?: number;
}

export default function EquipmentCard({ name, description, imageSrc, images, category, price }: EquipmentCardProps) {
  const config = categoryConfig[category] ?? categoryConfig.party;
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const allImages = images ?? (imageSrc ? [imageSrc] : []);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + allImages.length) % allImages.length);
  }, [allImages.length]);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % allImages.length);
  }, [allImages.length]);

  const open = () => { setCurrentIndex(0); setIsOpen(true); };
  const close = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, prev, next]);

  return (
    <>
      {/* Card */}
      <div
        className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group aspect-[3/4] cursor-pointer"
        onClick={open}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') open(); }}
        aria-label={`View details for ${name}`}
      >
        {/* Background — photo or gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient}`} />
        {allImages.length > 0 ? (
          <Image
            src={allImages[0]}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={90}
            className="object-contain group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-8xl opacity-40">{config.emoji}</span>
          </div>
        )}

        {/* Dark gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Price badge */}
        {price !== undefined && (
          <div className="absolute top-4 right-4 bg-brand-navy text-brand-yellow font-bold text-sm px-3 py-1 rounded-full shadow-md">
            ${price} / 2 days
          </div>
        )}

        {/* Text pinned to the bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-display text-2xl text-white leading-tight mb-2 drop-shadow">
            {name}
          </h3>
          <p className="text-white/75 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image area */}
            <div className="relative w-full bg-gray-100 flex-shrink-0" style={{ maxHeight: '65vh' }}>
              {allImages.length > 0 ? (
                <Image
                  src={allImages[currentIndex]}
                  alt={`${name} — image ${currentIndex + 1}`}
                  width={1200}
                  height={900}
                  sizes="(max-width: 896px) 100vw, 896px"
                  quality={90}
                  className="w-full h-auto max-h-[65vh] object-contain"
                />
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} flex items-center justify-center`}>
                  <span className="text-9xl opacity-40">{config.emoji}</span>
                </div>
              )}

              {/* Close button */}
              <button
                onClick={close}
                className="absolute top-3 right-3 z-10 bg-black/50 hover:bg-black/75 text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors text-lg leading-none"
                aria-label="Close"
              >
                ✕
              </button>

              {/* Prev / Next arrows */}
              {allImages.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prev(); }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/75 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors text-xl"
                    aria-label="Previous image"
                  >
                    ‹
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); next(); }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/75 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors text-xl"
                    aria-label="Next image"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {/* Dot indicators */}
            {allImages.length > 1 && (
              <div className="flex justify-center gap-2 pt-4 pb-1">
                {allImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    aria-label={`Image ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentIndex ? 'w-5 bg-brand-navy' : 'w-2 bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Text */}
            <div className="px-8 pt-5 pb-8 overflow-y-auto">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h2 className="font-display text-3xl text-brand-navy">{name}</h2>
                {price !== undefined && (
                  <div className="flex-shrink-0 bg-brand-navy text-brand-yellow font-bold text-base px-4 py-1.5 rounded-full">
                    ${price} / 2 days
                  </div>
                )}
              </div>
              <p className="text-gray-600 text-base leading-relaxed">{description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
