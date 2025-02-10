'use client';

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FC } from 'react'

const History: FC = () => {
  const milestones = [
    {
      year: "2013",
      title: "The Beginning",
      description: "Coco Khmer began as a triple bottom line social enterprise, producing premium virgin coconut oil.",
      image: "/images/about-grid/430720496_388817580758751_2341257138742686116_n.jpg"
    },
    {
      year: "2014",
      title: "The Birth",
      description: "The first Naga Balm was formulated, marking the beginning of our journey in traditional healing.",
      image: "/images/about-grid/391671432_294858683487975_2328397320296936_n.jpg"
    },
    {
      year: "2019",
      title: "Global Expansion",
      description: "Naga Balm travelled around the world to Singapore, Australia, Europe, and Greater Asia.",
      image: "/images/about-grid/391619663_294858813487962_4740528239290929594_n.jpg"
    },
    {
      year: "2023",
      title: "The Rebirth",
      description: "After COVID restructuring, we relaunched with a brand refresh and relocated to our purpose-built cosmetics-grade facility in Chak Angre Krom.",
      image: "/images/about-grid/420033960_348959618077881_592468932604044747_n.jpg"
    },
    {
      year: "Today",
      title: "Growing Strong",
      description: "Available in 200+ locations around Cambodia, with an impressive 2025 portfolio of 19 SKUs (11 unique products).",
      image: "/images/about-grid/430720496_388817580758751_2341257138742686116_n.jpg"
    },
    {
      year: "Future",
      title: "Global Vision",
      description: "Committed to making Naga Balm available internationally, offering a petroleum-free and safe option in the traditional healing category.",
      image: "/images/about-grid/391671432_294858683487975_2328397320296936_n.jpg"
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
        className="container mx-auto px-4 mb-20"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-amber-900 mb-8 leading-tight">
            Our Journey
          </h2>
          <p className="text-xl md:text-2xl text-amber-800/90 leading-relaxed">
            A decade of innovation, tradition, and growth - from humble beginnings 
            to international recognition.
          </p>
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Horizontal Line */}
        <div className="absolute top-[140px] left-0 right-0 h-0.5 bg-gradient-to-r from-amber-300/0 via-amber-600/30 to-amber-300/0"></div>

        {/* Timeline Content */}
        <div className="container mx-auto px-4">
          {/* Desktop Timeline */}
          <div className="hidden lg:flex justify-between items-start relative gap-4">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group w-[180px]"
              >
                {/* Year Marker */}
                <div className="relative mb-6 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-amber-600 border-2 border-[#FDD16E] 
                    group-hover:scale-150 transition-transform duration-300"></div>
                  <div className="mt-3 px-4 py-1.5 bg-amber-800 text-amber-50 rounded-full text-sm font-semibold
                    shadow-lg transform transition-all duration-300 group-hover:scale-105">
                    {milestone.year}
                  </div>
                </div>

                {/* Content Card */}
                <div className="relative">
                  {/* Image */}
                  <div className="relative h-[120px] rounded-xl overflow-hidden mb-4">
                    <Image
                      src={milestone.image}
                      alt={milestone.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-amber-900/20 to-transparent 
                      opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                  </div>

                  {/* Text Content */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg
                    transform transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-xl">
                    <h3 className="text-base font-bold text-amber-900 mb-2">{milestone.title}</h3>
                    <p className="text-amber-800/90 text-xs leading-relaxed line-clamp-4">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden">
            <div className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="min-w-[250px] snap-center"
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg">
                    <div className="relative h-[160px]">
                      <Image
                        src={milestone.image}
                        alt={milestone.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-transparent opacity-60"></div>
                      <div className="absolute bottom-3 left-3">
                        <span className="px-4 py-1.5 bg-amber-800 text-amber-50 rounded-full text-sm font-semibold">
                          {milestone.year}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-amber-900 mb-2">{milestone.title}</h3>
                      <p className="text-amber-800/90 text-sm leading-relaxed line-clamp-3">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Heritage Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 mt-20"
      >
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-amber-900 mb-6">Our Heritage</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-bold text-amber-900 mb-3">Traditional Roots</h4>
              <p className="text-amber-800/90 text-sm leading-relaxed">
                Founded on the ancient healing traditions of Preng Kola, a time-honored 
                Cambodian remedy passed down through generations.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-amber-900 mb-3">Modern Innovation</h4>
              <p className="text-amber-800/90 text-sm leading-relaxed">
                Developed a unique formulation that preserves traditional effectiveness 
                while meeting modern safety and quality standards.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default History 