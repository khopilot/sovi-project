/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.facebook.com',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fpnh1-1.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fpnh2-1.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fpnh3-1.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fpnh4-1.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fpnh5-1.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'scontent-sin6-1.xx.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'scontent-sin6-2.xx.fbcdn.net',
      },
    ],
    // Allow unoptimized images for local files in public directory
    unoptimized: process.env.NODE_ENV === 'development',
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://www.facebook.com; frame-src 'self' https://www.facebook.com https://*.facebook.com"
          }
        ],
      },
    ];
  },
};

module.exports = nextConfig; 