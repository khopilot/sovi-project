/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'www.facebook.com',
      'scontent.fpnh1-1.fna.fbcdn.net',
      'scontent.fpnh2-1.fna.fbcdn.net',
      'scontent.fpnh3-1.fna.fbcdn.net',
      'scontent.fpnh4-1.fna.fbcdn.net',
      'scontent.fpnh5-1.fna.fbcdn.net',
      'scontent-sin6-1.xx.fbcdn.net',
      'scontent-sin6-2.xx.fbcdn.net'
    ],
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