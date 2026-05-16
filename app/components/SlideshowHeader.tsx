'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface SlideshowHeaderProps {
  images: string[];
  emoji?: string;
  title?: React.ReactNode;
  subtitle?: string;
  overlay?: string;
  badge?: { src: string; alt: string };
  children?: React.ReactNode;
  className?: string;
}

export default function SlideshowHeader({
  images,
  emoji,
  title,
  subtitle,
  overlay = 'bg-brand-navy/65',
  badge,
  children,
  className = '',
}: SlideshowHeaderProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className={`relative pt-32 pb-20 text-center overflow-hidden min-h-80 flex items-center justify-center ${className}`}>
      {/* Background images — fade between them */}
      {images.length > 0 ? (
        images.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image src={src} alt="" fill sizes="100vw" quality={90} className="object-cover" priority={i === 0} loading="eager" />
          </div>
        ))
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-sky via-cyan-600 to-brand-navy" />
      )}

      {/* Tinted overlay so text stays readable */}
      <div className={`absolute inset-0 ${overlay}`} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {children ?? (
          <>
            {emoji && <div className="text-6xl mb-4">{emoji}</div>}
            {badge ? (
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-4">
                <h1 className="font-display text-5xl md:text-6xl text-white">{title}</h1>
                <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-3 ring-2 ring-white/30 flex-shrink-0">
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    width={120}
                    height={120}
                    className="h-28 w-auto"
                  />
                </div>
              </div>
            ) : (
              <h1 className="font-display text-5xl md:text-6xl text-white mb-4">{title}</h1>
            )}
            {subtitle && <p className="text-white/80 text-xl">{subtitle}</p>}
          </>
        )}
      </div>

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? 'w-5 bg-white' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
