'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HeritageIcon, HandcraftIcon, QualityIcon } from './icons'
import Image from 'next/image'

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
    title: "Petroleum-Free, Safe, and Effective",
    subtitle: "Quality Without Compromise",
    description: "Our products are formulated to deliver relief without compromise. Free from petrochemicals, harsh chemicals and filler additives, Naga Balm provides effective and safe pain relief. Every ingredient matters.",
    Icon: QualityIcon
  },
  {
    title: "Wide Product Range",
    subtitle: "Versatile Solutions",
    description: "Naga Balm offers versatile pain relief for athletes, professionals, seniors, and everyday users - different formats and use cases, same effectiveness.",
    Icon: HandcraftIcon
  },
  {
    title: "Handcrafted Quality",
    subtitle: "Made in Cambodia",
    description: "Operating from our cosmetics-grade facility in Phnom Penh, Cambodia, we are a specialized handcraft manufacturer—small yet driven, dedicated to raising the standards of topical pain relief. While we appreciate the efficiency of machines, we value people more.",
    Icon: HeritageIcon
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
          <div className="absolute inset-0 bg-[#97D6E3]" />
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-[#FDD26E]/50" />
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {/* Section Header */}
            <motion.div 
              className="text-center mb-20"
              variants={item}
            >
              {/* Logo above title */}
              <div className="relative w-24 h-24 mx-auto mb-6">
                <Image
                  src="/images/Naga Balm__SecondaryLogomark_Black.png"
                  alt="Naga Balm Logo"
                  width={96}
                  height={96}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <span className="text-gray-700 text-lg font-medium mb-4 block">Our Values</span>
              <h2 className="font-karla text-headline text-gray-800 tracking-tight uppercase">
                The Essence of Naga Balm
              </h2>
              <p className="font-karla text-subheading text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Proudly rooted in Cambodia, we are dedicated to providing effective and safe pain relief solutions
                that honor tradition while embracing innovation. We are modernizing the time-honored remedy of the Preng Kola, 
                preserving its rich Cambodian heritage while evolving it for the 21st century.
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit.title}
                  variants={item}
                  className="group relative rounded-2xl shadow-lg p-8 md:p-10 h-full transform hover:translate-y-[-8px] transition-all duration-500 hover:shadow-xl border border-white/20 overflow-hidden"
                >
                  {/* Background Image */}
                  <div className="absolute -inset-1">
                    <Image
                      src="/images/Naga Balm Element (Cloud)/Background 1.png"
                      alt="Card Background"
                      fill
                      quality={100}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ 
                        objectFit: 'cover',
                        objectPosition: 'center',
                        transform: 'scale(1.1)'
                      }}
                      className="opacity-90"
                    />
                  </div>
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="relative w-16 h-16 md:w-20 md:h-20 mb-8 mx-auto md:mx-0">
                      <div className="absolute inset-0 bg-ice/20 rounded-2xl transform rotate-6 transition-transform group-hover:rotate-12" />
                      <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 border border-ice/20">
                        <div className="text-ice">
                          <benefit.Icon />
                        </div>
                      </div>
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="font-karla text-xl md:text-2xl font-bold mb-3 text-white group-hover:translate-x-1 transition-transform duration-300">
                        {benefit.title}
                      </h3>
                      <p className="font-karla text-subheading text-white/90 font-semibold mb-4">
                        {benefit.subtitle}
                      </p>
                      <p className="font-karla text-body text-white/80 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
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
                We are modernizing the time-honored remedy of the Preng Kola, preserving its rich Cambodian heritage while evolving it for the 21st century.
              </blockquote>
              <div className="mt-6 w-20 h-1 bg-gray-400 mx-auto rounded-full opacity-50" />
            </motion.div>
          </div>
        </motion.section>
      </AnimatePresence>
    </div>
  )
} 