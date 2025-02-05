'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FlowerLotus, // More elegant for heritage
  HandHeart, // More meaningful for care
  Drop // More relevant for balm/medicine
} from '@phosphor-icons/react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
}

const benefits = [
  {
    title: "Cambodian Heritage",
    subtitle: "The Legacy of Preng Kola",
    description: "We are modernizing the time-honored remedy of the Preng Kola, preserving its rich Cambodian heritage while evolving it for the 21st century.",
    Icon: FlowerLotus
  },
  {
    title: "Handcrafted Care",
    subtitle: "The Human Touch",
    description: "From mixing formulations to pouring and labeling, we do everything by hand. We believe the human touch is an essential part of what makes Naga Balm special.",
    Icon: HandHeart
  },
  {
    title: "Boutique Quality",
    subtitle: "Small Batch Excellence",
    description: "Operating from our cosmetics-grade facility in Chak Angre Krom, we're proudly boutique—small but ambitious, committed to elevating the standards of topical pain relief.",
    Icon: Drop
  }
]

export default function BenefitsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="relative w-full">
      <AnimatePresence>
        <motion.section 
          ref={sectionRef} 
          className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          {/* Decorative background */}
          <div className="absolute inset-0 bg-[#FDD26E]" />
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-[#FDD26E]/50" />
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {/* Section Header */}
            <motion.div 
              className="text-center mb-20"
              variants={item}
            >
              <span className="text-gray-700 text-lg font-medium mb-4 block">Our Philosophy</span>
              <h2 className="font-karla text-headline text-gray-800 tracking-tight uppercase">
                The Essence of Naga Balm
              </h2>
              <p className="font-karla text-subheading text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Proudly rooted in Cambodia, we are dedicated to providing effective and safe pain relief solutions
                that honor tradition while embracing innovation.
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit.title}
                  variants={item}
                  className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-10 h-full transform hover:translate-y-[-8px] transition-all duration-500 hover:shadow-xl border border-white/20"
                >
                  <div className="relative w-16 h-16 md:w-20 md:h-20 mb-8 mx-auto md:mx-0">
                    <div className="absolute inset-0 bg-fire/10 rounded-2xl transform rotate-6 transition-transform group-hover:rotate-12" />
                    <div className="absolute inset-0 bg-fire rounded-2xl flex items-center justify-center transform transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <benefit.Icon 
                        className="text-white transition-all duration-300"
                        weight="light"
                        size={40}
                      />
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="font-karla text-xl md:text-2xl font-bold mb-3 text-gray-800 group-hover:translate-x-1 transition-transform duration-300">
                      {benefit.title}
                    </h3>
                    <p className="font-karla text-subheading text-gray-700 font-semibold mb-4">
                      {benefit.subtitle}
                    </p>
                    <p className="font-karla text-body text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Quote with decorative elements */}
            <motion.div 
              className="text-center px-4 relative"
              variants={item}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 text-gray-400 opacity-20 text-6xl font-serif">&quot;</div>
              <blockquote className="font-karla text-2xl md:text-3xl text-gray-700 italic max-w-4xl mx-auto leading-relaxed font-medium pt-8">
                While we appreciate the efficiency of machines, we value people more—the human touch is what makes Naga Balm truly special.
              </blockquote>
              <div className="mt-6 w-20 h-1 bg-gray-400 mx-auto rounded-full opacity-50" />
            </motion.div>
          </div>
        </motion.section>
      </AnimatePresence>
    </div>
  )
} 