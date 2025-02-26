import { Viewport } from 'next'
import FAQSection from './components/FAQSection'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
}

export default function FAQPage() {
  return (
    <main>
      <FAQSection />
    </main>
  )
} 