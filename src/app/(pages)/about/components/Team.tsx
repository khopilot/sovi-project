'use client';

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FC } from 'react'

const Team: FC = () => {
  const values = [
    {
      title: "Artisanal Excellence",
      description: "Every product is handcrafted with precision and care, ensuring the highest quality in every batch.",
      image: "/images/about-grid/430720496_388817580758751_2341257138742686116_n.jpg"
    },
    {
      title: "Local Expertise",
      description: "Our team brings generations of knowledge in traditional Cambodian healing practices.",
      image: "/images/about-grid/391671432_294858683487975_2328397320296936_n.jpg"
    },
    {
      title: "Modern Standards",
      description: "We combine traditional methods with contemporary quality and safety standards.",
      image: "/images/about-grid/391619663_294858813487962_4740528239290929594_n.jpg"
    }
  ]

  return (
    <section className="bg-gradient-to-b from-[#FDD16E] to-amber-100 py-24 overflow-hidden relative">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.amber.600)_1px,transparent_0)] 
        [background-size:48px_48px] opacity-5"></div>

      <div className="container mx-auto px-4 relative">
        {/* Team Introduction */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6 leading-tight">
            Our Team
          </h2>
          <p className="text-xl md:text-2xl text-amber-800/90 leading-relaxed">
            Meet the dedicated hands behind every Naga Balm product.
          </p>
        </motion.div>

        {/* Team Values Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 md:gap-8 mb-20">
          {values.map((value, index) => (
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
                hover:bg-white/95 relative h-full">
                {/* Image Container */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 via-amber-900/40 to-transparent 
                    opacity-60 group-hover:opacity-50 transition-opacity duration-300"></div>
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2
                    group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold text-white mb-1 drop-shadow-lg">{value.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-amber-800/90 text-base leading-relaxed">{value.description}</p>
                  
                  {/* Decorative elements */}
                  <div className="mt-4 flex items-center">
                    <div className="h-0.5 w-12 bg-amber-600 transform origin-left scale-0 
                      group-hover:scale-100 transition-transform duration-500"></div>
                    <div className="ml-2 text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm font-medium">
                      Read More
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

        {/* Team Quote Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl
            hover:shadow-2xl transition-shadow duration-500 hover:bg-white/95 relative">
            <blockquote className="relative">
              {/* Large decorative quote marks */}
              <div className="absolute -top-6 -left-4 text-amber-500/20 text-8xl font-serif">&ldquo;</div>
              <div className="absolute -bottom-6 -right-4 text-amber-500/20 text-8xl font-serif">&rdquo;</div>
              
              {/* Quote content */}
              <div className="relative z-10 text-center">
                <p className="text-xl md:text-2xl text-amber-900 leading-relaxed mb-6 italic">
                  We believe in the power of human touch - from mixing formulations to labeling each product, 
                  our hands-on approach ensures that every Naga Balm product carries the essence of our dedication.
                </p>
                <div className="flex items-center justify-center">
                  <div className="h-0.5 w-12 bg-amber-600"></div>
                  <span className="mx-4 text-amber-800 font-medium">The Naga Balm Team</span>
                  <div className="h-0.5 w-12 bg-amber-600"></div>
                </div>
              </div>
            </blockquote>
          </div>
        </motion.div>
      </div>

      {/* Decorative Blurs */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl"></div>
    </section>
  )
}

export default Team 