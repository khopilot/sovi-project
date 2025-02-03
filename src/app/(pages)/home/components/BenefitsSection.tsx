'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { HeritageIcon, HandcraftIcon, QualityIcon } from './icons'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const benefits = [
  {
    title: "Cambodian Heritage",
    subtitle: "The Legacy of Preng Kola",
    description: "We are modernizing the time-honored remedy of the Preng Kola, preserving its rich Cambodian heritage while evolving it for the 21st century.",
    Icon: HeritageIcon
  },
  {
    title: "Handcrafted Care",
    subtitle: "The Human Touch",
    description: "From mixing formulations to pouring and labeling, we do everything by hand. We believe the human touch is an essential part of what makes Naga Balm special.",
    Icon: HandcraftIcon
  },
  {
    title: "Boutique Quality",
    subtitle: "Small Batch Excellence",
    description: "Operating from our cosmetics-grade facility in Chak Angre Krom, we're proudly boutique—small but ambitious, committed to elevating the standards of topical pain relief.",
    Icon: QualityIcon
  }
]

export default function BenefitsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative w-full">
      <motion.section 
        ref={sectionRef} 
        className="relative py-16 md:py-24 lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#FED26F]"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#EE4922] uppercase tracking-wide">
              The Essence of Naga Balm
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-900 max-w-3xl mx-auto">
              Proudly rooted in Cambodia, we are dedicated to providing effective and safe pain relief solutions
              that honor tradition while embracing innovation.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-16">
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={item}
                className="bg-white rounded-xl shadow-xl p-6 md:p-8 h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#EE4922] rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <div className="text-white w-10 h-10 md:w-12 md:h-12">
                    <benefit.Icon />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-[#EE4922] uppercase">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 font-medium mb-3 text-base md:text-lg">
                    {benefit.subtitle}
                  </p>
                  <p className="text-gray-900 leading-relaxed text-base md:text-lg">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Quote */}
          <div className="text-center px-4">
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif text-gray-900 italic max-w-4xl mx-auto">
              &ldquo;While we appreciate the efficiency of machines, we value people more—the human touch is what makes Naga Balm truly special.&rdquo;
            </blockquote>
          </div>
        </div>
      </motion.section>
    </div>
  )
} 