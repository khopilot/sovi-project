'use client';

import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './Hero.module.css'
import { FC } from 'react'

const Partners: FC = () => {
  const partners = [
    {
      name: "7-11",
      logo: "/images/partners/7-11.png",
      description: "Convenience Store Chain"
    },
    {
      name: "21 Degree",
      logo: "/images/partners/21 Degree.jpg",
      description: "Retail Partner"
    },
    {
      name: "Aosot Plus",
      logo: "/images/partners/Aosot Plus.jpg",
      description: "Pharmacy Partner"
    },
    {
      name: "Babel Guesthouse",
      logo: "/images/partners/Babel Guesthouse.jpg",
      description: "Hospitality Partner"
    },
    {
      name: "Circle K",
      logo: "/images/partners/Circle K.png",
      description: "Convenience Store Chain"
    },
    {
      name: "For Someone I Like",
      logo: "/images/partners/For Someone I Like.jpg",
      description: "Retail Partner"
    },
    {
      name: "HRK Care",
      logo: "/images/partners/HRK Care.jpg",
      description: "Healthcare Partner"
    },
    {
      name: "Inter Badminton Club",
      logo: "/images/partners/Inter Badminton Club.jpg",
      description: "Sports & Fitness Partner"
    },
    {
      name: "Interter Club",
      logo: "/images/partners/Interter Club.jpg",
      description: "Sports Club Partner"
    },
    {
      name: "Kabas Concept Store",
      logo: "/images/partners/Kabas Concept store.jpg",
      description: "Retail Partner"
    },
    {
      name: "Kingdom Fight Gym",
      logo: "/images/partners/Kingdom Fight Gym.jfif",
      description: "Martial Arts Partner"
    },
    {
      name: "Kun Khmer International Federation",
      logo: "/images/partners/Kun Khmer international Federation.jpg",
      description: "Martial Arts Federation"
    },
    {
      name: "Medilance Pharmacy",
      logo: "/images/partners/Medilance Pharmacy.jpg",
      description: "Pharmacy Partner"
    },
    {
      name: "Our Pharmacy BKK",
      logo: "/images/partners/Our Pharmacy BKK.jpg",
      description: "Pharmacy Partner"
    },
    {
      name: "Pharmacy Chhat",
      logo: "/images/partners/Pharmacy Chhat.jpg",
      description: "Pharmacy Partner"
    },
    {
      name: "Pharmacy Phsar Chas",
      logo: "/images/partners/Pharmacy Phsar Chas.jpg",
      description: "Pharmacy Partner"
    },
    {
      name: "Phnom Penh International Airport",
      logo: "/images/partners/Phnom Penh International Airport.png",
      description: "Travel Retail Partner"
    },
    {
      name: "Phnom Penh Sport Club",
      logo: "/images/partners/Phnom Penh Sport CLub.jpg",
      description: "Sports & Fitness Partner"
    },
    {
      name: "Point Sante Pharmacy",
      logo: "/images/partners/Point Sante Pharmacy.jpg",
      description: "Pharmacy Partner"
    },
    {
      name: "Sen Bunthen Club",
      logo: "/images/partners/Sen Bunthen Club.png",
      description: "Sports Club Partner"
    },
    {
      name: "Shop Satu",
      logo: "/images/partners/Shop Satu.jpg",
      description: "Retail Partner"
    },
    {
      name: "SuperDuper",
      logo: "/images/partners/SuperDuper.png",
      description: "Retail Partner"
    },
    {
      name: "The Ring Fitness Club",
      logo: "/images/partners/The Ring Fitness Club.png",
      description: "Fitness Partner"
    },
    {
      name: "Total Bonjour Mart",
      logo: "/images/partners/Total Bonjour Mart.png",
      description: "Convenience Store Partner"
    },
    {
      name: "Villa Martial Art",
      logo: "/images/partners/Villa Martial Art.jpg",
      description: "Martial Arts Partner"
    }
  ]

  // Group partners by type for better organization
  const partnerTypes = {
    'Retail': partners.filter(p => p.description.includes('Retail')),
    'Pharmacy': partners.filter(p => p.description.includes('Pharmacy')),
    'Sports & Fitness': partners.filter(p => 
      p.description.includes('Sports') || 
      p.description.includes('Fitness') || 
      p.description.includes('Martial Arts')
    ),
    'Other': partners.filter(p => 
      !p.description.includes('Retail') && 
      !p.description.includes('Pharmacy') && 
      !p.description.includes('Sports') && 
      !p.description.includes('Fitness') && 
      !p.description.includes('Martial Arts')
    )
  }

  return (
    <section className="bg-gradient-to-b from-[#FDD16E] to-amber-100 py-24 overflow-hidden relative">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.amber.600)_1px,transparent_0)] 
        [background-size:48px_48px] opacity-5"></div>

      {/* Decorative Clouds */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className={`absolute -left-[250px] top-[10%] w-[600px] h-[600px] ${styles.cloudFloat1}`}
        >
          <Image
            src="/images/png/cloud-balm.avif"
            alt=""
            fill
            className="object-contain opacity-80"
            priority
          />
        </motion.div>

        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className={`absolute -right-[200px] top-[15%] w-[450px] h-[450px] ${styles.cloudFloat2}`}
        >
          <Image
            src="/images/png/cloud-balm.avif"
            alt=""
            fill
            className="object-contain opacity-80"
            priority
          />
        </motion.div>

        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className={`absolute -left-[180px] bottom-[10%] w-[500px] h-[500px] ${styles.cloudFloat3}`}
        >
          <Image
            src="/images/png/cloud-balm.avif"
            alt=""
            fill
            className="object-contain opacity-80"
            priority
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6 leading-tight">
            Our Partners
          </h2>
          <p className="text-xl md:text-2xl text-amber-800/90 leading-relaxed">
            Working together with trusted partners across Cambodia to deliver quality and authenticity in every product.
          </p>
        </motion.div>

        {/* Partners Grid by Category */}
        {Object.entries(partnerTypes).map(([type, typePartners]) => (
          typePartners.length > 0 && (
            <motion.div
              key={type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16 last:mb-0"
            >
              <h3 className="text-2xl font-bold text-amber-900 mb-8 pl-4 border-l-4 border-amber-600">
                {type} Partners
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                {typePartners.map((partner, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg
                      transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl 
                      hover:bg-white/95 relative">
                      {/* Logo Container */}
                      <div className="relative aspect-square mb-3 bg-white rounded-lg 
                        overflow-hidden flex items-center justify-center">
                        <div className="relative w-full h-full p-3">
                          <Image
                            src={partner.logo}
                            alt={partner.name}
                            fill
                            className="object-contain transition-transform duration-500 
                              group-hover:scale-105"
                            priority
                          />
                        </div>
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-amber-900/0 group-hover:bg-amber-900/5
                          transition-colors duration-300"></div>
                      </div>

                      {/* Partner Info */}
                      <div className="text-center">
                        <h4 className="text-sm font-medium text-amber-900 mb-1 line-clamp-1
                          group-hover:text-amber-700 transition-colors duration-300">
                          {partner.name}
                        </h4>
                      </div>

                      {/* Corner Accents */}
                      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 
                        border-amber-600/0 group-hover:border-amber-600/20 rounded-tl-lg transition-colors duration-300"></div>
                      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 
                        border-amber-600/0 group-hover:border-amber-600/20 rounded-tr-lg transition-colors duration-300"></div>
                      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 
                        border-amber-600/0 group-hover:border-amber-600/20 rounded-bl-lg transition-colors duration-300"></div>
                      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 
                        border-amber-600/0 group-hover:border-amber-600/20 rounded-br-lg transition-colors duration-300"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )
        ))}

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto
            shadow-xl hover:shadow-2xl transition-shadow duration-500 hover:bg-white/95">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">
              Become a Partner
            </h3>
            <p className="text-lg text-amber-800/90 mb-6">
              Join our growing network of partners and be part of the Naga Balm success story.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 
                border-2 border-amber-600 text-base font-medium rounded-xl 
                text-amber-900 bg-transparent hover:bg-amber-600 hover:text-white
                transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Partners 