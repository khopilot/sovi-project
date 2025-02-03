import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'
import Hero from './components/Hero'
import Map from './components/Map'

export default function ContactPage() {
  return (
    <main>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <ContactForm />
        </div>
        <div className="space-y-8">
          <ContactInfo />
          <Map />
        </div>
      </div>
    </main>
  )
} 