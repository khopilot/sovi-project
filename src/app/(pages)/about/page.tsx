import { Viewport } from 'next'
import Hero from './components/Hero'
import Mission from './components/Mission'
import History from './components/History'
import Team from './components/Team'
import Partners from './components/Partners'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
}

export default function AboutPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <Mission />
      <History />
      <Team />
      <Partners />
    </main>
  )
} 