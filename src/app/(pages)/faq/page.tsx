import FAQSection from './components/FAQSection'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function FAQPage() {
  return (
    <main>
      <FAQSection />
    </main>
  )
} 