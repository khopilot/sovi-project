import Link from 'next/link'
import styles from './CallToAction.module.css'

export default function CallToAction() {
  return (
    <section className={styles.callToAction}>
      {/* Background Pattern */}
      <div className={styles.backgroundPattern} />

      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#EE4922]">Experience Natural Healing Today</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers who have discovered the power of traditional 
          Cambodian healing with Naga Balm.
        </p>
        <Link 
          href="/products" 
          className="inline-block px-8 py-4 bg-[#EE4922] text-white rounded-full font-semibold hover:bg-[#e13d0f] transform hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Shop Now
        </Link>
      </div>
    </section>
  )
} 