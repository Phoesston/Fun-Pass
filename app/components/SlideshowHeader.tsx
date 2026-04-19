'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface SlideshowHeaderProps {
  images: string[];
  emoji: string;
  title: React.ReactNode;
  subtitle: string;
  overlay?: string;
}

export default function SlideshowHeader({
  images,
  emoji,
  title,
  subtitle,
  overlay = 'bg-brand-navy/65',
}: SlideshowHeaderProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative pt-32 pb-20 text-center overflow-hidden min-h-80">
      {/* Background images — fade between them */}
      {images.length > 0 ? (
        images.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image src={src} alt="" fill className="object-cover" priority={i === 0} />
          </div>
        ))
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-sky via-cyan-600 to-brand-navy" />
      )}

      {/* Tinted overlay so text stays readable */}
      <div className={`absolute inset-0 ${overlay}`} />

      {/* Text */}
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <div className="text-6xl mb-4">{emoji}</div>
        <h1 className="font-display text-5xl md:text-6xl text-white mb-4">{title}</h1>
        <p className="text-white/80 text-xl">{subtitle}</p>
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
