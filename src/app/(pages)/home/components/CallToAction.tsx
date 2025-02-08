'use client';

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './CallToAction.module.css'

const partners = [
  {
    name: "7-11",
    logo: "/images/partners/7-11.png",
    description: "Convenience Store Chain"
  },
  {
    name: "Circle K",
    logo: "/images/partners/Circle K.png",
    description: "Convenience Store Chain"
  },
  {
    name: "Total Bonjour Mart",
    logo: "/images/partners/Total Bonjour Mart.png",
    description: "Convenience Store Partner"
  },
  {
    name: "Aosot Plus",
    logo: "/images/partners/Aosot Plus.jpg",
    description: "Pharmacy Partner"
  },
  {
    name: "SuperDuper",
    logo: "/images/partners/SuperDuper.png",
    description: "Retail Partner"
  },
  {
    name: "HRK Care",
    logo: "/images/partners/HRK Care.jpg",
    description: "Healthcare Partner"
  },
  {
    name: "Point Sante Pharmacy",
    logo: "/images/partners/Point Sante Pharmacy.jpg",
    description: "Pharmacy Partner"
  },
  {
    name: "Pharmacy Chhat",
    logo: "/images/partners/Pharmacy Chhat.jpg",
    description: "Pharmacy Partner"
  },
  {
    name: "Our Pharmacy BKK",
    logo: "/images/partners/Our Pharmacy BKK.jpg",
    description: "Pharmacy Partner"
  },
  {
    name: "Phnom Penh International Airport",
    logo: "/images/partners/Phnom Penh International Airport.png",
    description: "Travel Retail Partner"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export default function CallToAction() {
  return (
    <section className={styles.callToAction}>
      {/* Background Image */}
      <div className={styles.backgroundPattern}>
        <Image
          src="/images/Naga Balm Element (Cloud)/Background 3.png"
          alt="Background Pattern"
          fill
          quality={100}
          sizes="100vw"
          className={styles.backgroundImage}
          priority
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 text-center">
        {/* Main CTA Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.mainContent}
        >
          <h2 className={styles.mainTitle}>Experience Natural Healing Today</h2>
          <p className={styles.mainDescription}>
            Join thousands of satisfied customers who have discovered the power of traditional 
            Cambodian healing with Naga Balm.
          </p>
          <Link 
            href="/products" 
            className={styles.shopButton}
          >
            Shop Now
          </Link>
        </motion.div>

        {/* Partners Section */}
        <motion.div
          className={styles.partnersSection}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className={styles.partnersTitle}>Now Available at</h3>
          
          {/* Partners Grid */}
          <motion.div 
            className={styles.partnersGrid}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {partners.map((partner, index) => (
              <motion.div 
                key={index}
                className={styles.partnerCard}
                variants={item}
              >
                <div className={styles.logoContainer}>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className={styles.logo}
                    sizes="(max-width: 768px) 33vw, 20vw"
                    priority={index < 6}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Discover More CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link 
              href="/about#partners" 
              className={styles.discoverButton}
            >
              Discover More Retailers
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className={styles.arrowIcon}
              >
                <path 
                  d="M5 12H19M19 12L12 5M19 12L12 19" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 