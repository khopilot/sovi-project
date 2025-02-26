import { Viewport } from 'next'
import HeroSection from './components/HeroSection'
import BenefitsSection from './components/BenefitsSection'
import FeaturedSection from './components/FeaturedSection'
import VideoGallery from '@/app/components/VideoGallery'
import UseCases from './components/UseCases'
import TestimonialsSection from './components/TestimonialsSection'
import CallToAction from './components/CallToAction'
import ResellerMap from './components/ResellerMap'
import { videos } from '@/app/data/videos'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
}

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <FeaturedSection />
      <VideoGallery videos={videos} />
      <UseCases />
      <ResellerMap />
      <TestimonialsSection />
      <CallToAction />
    </main>
  )
} 