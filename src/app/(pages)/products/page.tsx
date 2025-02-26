import { Metadata, Viewport } from 'next'
import Image from 'next/image'
import { getProducts } from './products'
import SearchWrapper from './components/SearchWrapper'
import BackToTop from '../home/components/BackToTop'
import UseCasesSection from './components/UseCasesSection'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: 'Naga Balm Products | Wellness Boutique',
  description: 'Explore our curated collection of premium healing balms and remedies. Traditional Cambodian wellness products crafted with care for your well-being.',
  openGraph: {
    title: 'Naga Balm Products | Wellness Boutique',
    description: 'Discover premium healing balms and traditional Cambodian wellness products.',
    images: ['/images/og-products.jpg'],
  },
}

export const revalidate = 3600 // Revalidate every hour

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 w-screen h-screen">
          <Image
            src="/images/Naga Balm Element (Cloud)/Background 4.png"
            alt="Background Pattern"
            fill
            quality={85}
            sizes="100vw"
            className="object-cover w-full h-full"
            style={{ 
              transform: 'scale(1.1)',
              transformOrigin: 'center'
            }}
            priority
            loading="eager"
          />
          <div 
            className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10"
            aria-hidden="true"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
          {/* Logo Container with Animation */}
          <div className="relative w-[250px] h-[250px] mx-auto mb-12 animate-float">
            <div 
              className="absolute inset-0 bg-white/10 rounded-full blur-2xl transform scale-110"
              aria-hidden="true"
            ></div>
            <Image 
              src="/images/png/naga-balm-logo-white.png"
              alt="Naga Balm Logo"
              fill
              className="object-contain drop-shadow-2xl"
              priority
              loading="eager"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              <span className="block mb-2">Welcome to Our</span>
              <span className="block bg-gradient-to-r from-emerald-200 to-white bg-clip-text text-transparent">
                Wellness Boutique
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-50 max-w-3xl mx-auto leading-relaxed">
              Explore our curated collection of premium healing balms and remedies. 
              Each product tells a story of Cambodian tradition, crafted with care for your well-being.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a 
                href="#products"
                className="px-8 py-4 bg-white text-emerald-800 rounded-full font-semibold hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Browse Collection
              </a>
              <a 
                href="#bestsellers"
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                View Bestsellers
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
            aria-hidden="true"
          >
            <svg 
              className="w-6 h-6 text-white opacity-75" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <UseCasesSection />

      {/* Products Section */}
      <section id="products" className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <SearchWrapper products={products} />
      </section>

      {/* Back to Top Button */}
      <BackToTop />
    </main>
  )
} 