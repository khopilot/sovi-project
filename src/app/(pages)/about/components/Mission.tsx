'use client';

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FC } from 'react'

const Mission: FC = () => {
  const missions = [
    {
      title: "Traditional Wisdom",
      description: "Drawing from ancient Cambodian healing practices, our formulation preserves the time-honored remedy of Preng Kola, passed down through generations.",
      image: "/images/about-grid/370182647_262382353402275_462936422139193930_n.jpg",
      imageAlt: "Traditional Cambodian healing practices"
    },
    {
      title: "Handcrafted Excellence",
      description: "Every product is carefully crafted by hand, ensuring the highest quality and attention to detail in our manufacturing process.",
      image: "/images/about-grid/469337321_17914579515030307_4981590020092049347_n.jpg",
      imageAlt: "Handcrafted production process"
    },
    {
      title: "Innovation & Safety",
      description: "We combine traditional methods with modern safety standards and innovative techniques to create effective, reliable products.",
      image: "/images/about-grid/f35175_70a09b0406004ef084d747e4845fe1c0~mv2.jpg",
      imageAlt: "Modern laboratory and safety standards"
    }
  ]

  return (
    <section className="bg-gradient-to-b from-[#FDD16E] to-amber-100 py-24 overflow-hidden">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 mb-16"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6 leading-tight">
            Our Mission
          </h2>
          <p className="text-xl md:text-2xl text-amber-800/90 leading-relaxed">
            Bridging tradition with modern innovation to deliver natural healing solutions.
          </p>
        </div>
      </motion.div>

      {/* Mission Cards */}
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg
                transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl 
                hover:bg-white/95 relative">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={mission.image}
                    alt={mission.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 via-amber-900/40 to-transparent 
                    opacity-60 group-hover:opacity-50 transition-opacity duration-300"></div>
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2
                    group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold text-white mb-1 drop-shadow-lg">{mission.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-amber-800/90 text-base leading-relaxed line-clamp-3">{mission.description}</p>
                  
                  {/* Decorative elements */}
                  <div className="mt-4 flex items-center">
                    <div className="h-0.5 w-12 bg-amber-600 transform origin-left scale-0 
                      group-hover:scale-100 transition-transform duration-500"></div>
                    <div className="ml-2 text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm font-medium">
                      Learn More
                    </div>
                  </div>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 border-2 border-amber-600/0 rounded-xl
                  group-hover:border-amber-600/20 transition-colors duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 mt-16"
      >
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl
          hover:shadow-2xl transition-shadow duration-500 hover:bg-white/95">
          <h3 className="text-2xl md:text-3xl font-bold text-amber-900 mb-8">Our Values</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-lg font-bold text-amber-900 mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                  <div className="w-4 h-4 rounded-full bg-amber-600"></div>
                </span>
                Quality First
              </h4>
              <p className="text-amber-800/90 text-sm leading-relaxed pl-11">
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
              <h4 className="text-lg font-bold text-amber-900 mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                  <div className="w-4 h-4 rounded-full bg-amber-600"></div>
                </span>
                Sustainable Practice
              </h4>
              <p className="text-amber-800/90 text-sm leading-relaxed pl-11">
                We are committed to environmentally conscious manufacturing processes 
                and responsible sourcing of ingredients.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Mission 