/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.facebook.com'],
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