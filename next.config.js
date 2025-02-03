/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true // This will optimize CSS loading
  },
  // Existing config options...
  images: {
    domains: ['localhost', 'your-domain.com'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://www.facebook.com"
          }
        ]
      }
    ]
  },
}

module.exports = nextConfig 