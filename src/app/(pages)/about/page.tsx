import Hero from './components/Hero'
import Mission from './components/Mission'
import History from './components/History'
import Team from './components/Team'
import Partners from './components/Partners'

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