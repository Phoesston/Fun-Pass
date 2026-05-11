import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
    // Workaround for Next.js 16.2.3 + Turbopack bug where the image optimizer
    // produces 0-byte buffers, causing LRU cache write failures.
    unoptimized: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;
