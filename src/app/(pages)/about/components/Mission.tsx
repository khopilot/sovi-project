'use client';

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FC } from 'react'

const Mission: FC = () => {
  const missions = [
    {
      title: "Petroleum-Free, Safe, and Effective",
      subtitle: "Quality Without Compromise",
      description: "Our products are formulated to deliver relief without compromise. Free from petrochemicals, harsh chemicals and filler additives, Naga Balm provides effective and safe pain relief. Every ingredient matters.",
      image: "/images/about-grid/370182647_262382353402275_462936422139193930_n.jpg",
      imageAlt: "Traditional Cambodian healing practices",
      logo: "/images/Logo/Naga Balm__Brandmark_Fire.png"
    },
    {
      title: "Handcrafted Excellence",
      subtitle: "Made in Cambodia",
      description: "Operating from our cosmetics-grade facility in Phnom Penh, Cambodia, we are a specialized handcraft manufacturer—small yet driven, dedicated to raising the standards of topical pain relief. While we appreciate the efficiency of machines, we value people more.",
      image: "/images/about-grid/469337321_17914579515030307_4981590020092049347_n.jpg",
      imageAlt: "Handcrafted production process",
      logo: "/images/Logo/Naga Balm__Brandmark_Ice.png"
    },
    {
      title: "Wide Product Range",
      subtitle: "Versatile Solutions",
      description: "Naga Balm offers versatile pain relief for athletes, professionals, seniors, and everyday users - different formats and use cases, same effectiveness.",
      image: "/images/about-grid/f35175_70a09b0406004ef084d747e4845fe1c0~mv2.jpg",
      imageAlt: "Modern laboratory and safety standards",
      logo: "/images/Logo/Naga Balm__Brandmark_Gambodge.png"
    }
  ]

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

  return (
    <section className="bg-gradient-to-b from-[#FDD16E] to-amber-100 py-24 overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-[#FDD26E]/50" />
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 mb-16 relative z-10"
      >
        <div className="max-w-3xl mx-auto text-center">
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
          <h2 className="font-karla text-headline font-bold mb-6 leading-tight text-amber-900 uppercase">
            The Essence of Naga Balm
          </h2>
          <p className="font-montserrat text-subheading text-amber-800/90 leading-relaxed">
            Proudly rooted in Cambodia, we are dedicated to providing effective and safe pain relief solutions
            that honor tradition while embracing innovation.
          </p>
        </div>
      </motion.div>

      {/* Mission Cards */}
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div 
          className="grid md:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border border-amber-200/50"
            >
              {/* Background Image */}
              <div className="absolute -inset-1">
                <Image
                  src={mission.image}
                  alt={mission.imageAlt}
                  fill
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ 
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transform: 'scale(1.1)'
                  }}
                  className="opacity-90 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 via-amber-800/70 to-amber-700/30"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Logo */}
                <div className="relative w-16 h-16 md:w-20 md:h-20 mb-8 mx-auto md:mx-0">
                  <div className="absolute inset-0 bg-amber-200/30 rounded-2xl transform rotate-6 transition-transform group-hover:rotate-12" />
                  <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center transform transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 border border-amber-200/30">
                    <Image
                      src={mission.logo}
                      alt={mission.title}
                      fill
                      className="object-contain p-3"
                      sizes="(max-width: 768px) 64px, 80px"
                    />
                  </div>
                </div>
                
                <div className="text-center md:text-left">
                  <h3 className="font-karla text-xl md:text-2xl font-bold mb-2 text-white group-hover:translate-x-1 transition-transform duration-300">
                    {mission.title}
                  </h3>
                  <p className="font-karla text-lg text-white/90 font-semibold mb-4">
                    {mission.subtitle}
                  </p>
                  <p className="font-karla text-body text-white/80 leading-relaxed">
                    {mission.description}
                  </p>
                  
                  {/* Decorative elements */}
                  <div className="mt-6 flex items-center">
                    <div className="h-0.5 w-12 bg-amber-300 transform origin-left scale-0 
                      group-hover:scale-100 transition-transform duration-500"></div>
                    <div className="ml-2 text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm font-medium">
                      Learn More
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Values Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 mt-16 relative z-10"
      >
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl
          hover:shadow-2xl transition-shadow duration-500 hover:bg-white/95">
          <h3 className="font-karla text-2xl md:text-3xl font-bold text-amber-900 mb-8">Our Values</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="font-karla text-lg font-bold text-amber-900 mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                  <div className="w-4 h-4 rounded-full bg-amber-600"></div>
                </span>
                Quality First
              </h4>
              <p className="font-montserrat text-body text-amber-800/90 leading-relaxed pl-11">
                Every product we create undergoes rigorous quality control to ensure 
                the highest standards of effectiveness and safety.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-karla text-lg font-bold text-amber-900 mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                  <div className="w-4 h-4 rounded-full bg-amber-600"></div>
                </span>
                Sustainable Practice
              </h4>
              <p className="font-montserrat text-body text-amber-800/90 leading-relaxed pl-11">
                We are committed to environmentally conscious manufacturing processes 
                and responsible sourcing of ingredients.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Bottom Quote with decorative elements */}
      <motion.div 
        className="text-center px-4 relative mt-20 z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-amber-700 opacity-20 text-6xl font-serif">&quot;</div>
        <blockquote className="font-karla text-2xl md:text-3xl text-amber-900 italic max-w-4xl mx-auto leading-relaxed font-medium pt-8">
          We are modernizing the time-honored remedy of the Preng Kola, preserving its rich Cambodian heritage while evolving it for the 21st century.
        </blockquote>
        <div className="mt-6 w-20 h-1 bg-amber-600 mx-auto rounded-full opacity-50" />
      </motion.div>
    </section>
  )
}

export default Mission 