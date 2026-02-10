import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimisation des images
  images: {
    // Formats modernes (WebP en priorité, puis AVIF)
    formats: ['image/avif', 'image/webp'],
    
    // Tailles d'images optimisées pour différents écrans
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Qualité par défaut (réduire de 75 à 70 pour gagner en taille)
    minimumCacheTTL: 60 * 60 * 24 * 30, // Cache 30 jours
  },
  
  // Compression des assets
  compress: true,
  
  // Optimisations de production
  poweredByHeader: false,
  
  // Headers pour le cache navigateur
  async headers() {
    return [
      {
        source: '/hero-accueil.jpg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/catalogue/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/logo.jpg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
