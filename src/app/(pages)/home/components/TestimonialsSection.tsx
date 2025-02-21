'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

// All photos with evocative alt text
const nagaBalmPhotos = [
  { src: '/images/Community Photo/459147107_505390699101438_6388652628537632214_n.jpg', alt: 'Mystical Awakening' },
  { src: '/images/Community Photo/459192999_505390715768103_7809267072028969117_n.jpg', alt: 'Serpentine Serenity' },
  { src: '/images/Community Photo/459200808_505390495768125_7451554020268559979_n.jpg', alt: 'Ancient Rituals' },
  { src: '/images/Community Photo/459271419_505390389101469_445338857696236040_n.jpg', alt: 'Sacred Embrace' },
  { src: '/images/Community Photo/476647538_617613157879191_329585433537263117_n.jpg', alt: 'Healing Harmony' },
  { src: '/images/Community Photo/476836729_619117477728759_3774417074368033909_n.jpg', alt: 'Balm of Life' },
  { src: '/images/Community Photo/DSC06869.jpg', alt: 'Divine Moments' },
  { src: '/images/Community Photo/DSC06889.jpg', alt: 'Ethereal Glow' },
  { src: '/images/Community Photo/DSC06930.jpg', alt: 'Celestial Calm' },
  { src: '/images/Community Photo/DSC06936.jpg', alt: "Serpent's Whisper" },
  { src: '/images/Community Photo/DSC06940.jpg', alt: 'Mystic Vision' },
  { src: '/images/Community Photo/DSC06942.jpg', alt: 'Sacred Relief' },
  { src: '/images/Community Photo/DSC06957.jpg', alt: 'Infinite Tranquility' },
  { src: '/images/Community Photo/DSC06989.jpg', alt: 'The Balm Ritual' },
  { src: '/images/Community Photo/DSC07002.jpg', alt: 'Ancient Energy' },
  { src: '/images/Community Photo/DSC07024.jpg', alt: 'Serpentine Splendor' },
  { src: '/images/Community Photo/DSC07032.jpg', alt: 'Balm Blessing' },
  { src: '/images/Community Photo/DSC07040.jpg', alt: 'Mystic Journey' },
  { src: '/images/Community Photo/DSC07056.jpg', alt: 'Sacred Pulse' },
  { src: '/images/Community Photo/DSC07067.jpg', alt: "Naga's Touch" },
  { src: '/images/Community Photo/DSC07091.jpg', alt: 'Healing Legacy' },
  { src: '/images/Community Photo/DSC07102.jpg', alt: 'Divine Renewal' },
  { src: '/images/Community Photo/DSC07112.jpg', alt: 'Serene Transformation' },
  { src: '/images/Community Photo/DSC07117.jpg', alt: 'Balm of Tranquility' },
  { src: '/images/Community Photo/DSC07122.jpg', alt: 'Mystical Reflection' },
  { src: '/images/Community Photo/DSC07178.jpg', alt: 'Transcendent Balm' },
  { src: '/images/Community Photo/DSC07189.jpg', alt: 'Ethereal Journey' },
  { src: '/images/Community Photo/DSC07190.jpg', alt: 'Celestial Balm' },
  { src: '/images/Community Photo/DSC07191.jpg', alt: 'Serpentine Ritual' },
  { src: '/images/Community Photo/DSC07192.jpg', alt: 'Sacred Energy' },
  { src: '/images/Community Photo/DSC07213.jpg', alt: 'Mystic Pulse' },
  { src: '/images/Community Photo/DSC07215.jpg', alt: 'Balm of Enlightenment' },
  { src: '/images/Community Photo/DSC07244.jpg', alt: 'Divine Essence' },
  { src: '/images/Community Photo/DSC07248.jpg', alt: 'Mystic Rebirth' }
]

export default function NagaBalmCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden text-gold">
      {/* Title & Subtitle */}
      <motion.div
        className="z-10 text-center px-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-3 tracking-wide">
          The Naga Balm Journey
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
          Immerse yourself in the serpentine magic of Naga Balm. Slide through these moments of healing and discovery!
        </p>
      </motion.div>

      {/* Horizontal Slider */}
      <div className="relative w-full mt-12">
        <motion.div
          className="flex gap-6 px-6 overflow-x-scroll no-scrollbar snap-x snap-mandatory"
          // Animate the container on mount
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {nagaBalmPhotos.map((photo, index) => (
            <motion.div
              key={index}
              className="snap-center flex-shrink-0 relative w-[80vw] md:w-[60vw] h-[60vh] md:h-[70vh] rounded-xl overflow-hidden bg-gray-900"
              whileHover={{ scale: 1.02 }}
              onViewportEnter={() => setActiveIndex(index)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 60vw"
              />
              {/* Overlay & Caption */}
              <motion.div
                className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-4"
              >
                <p className="text-white font-medium">
                  {photo.alt}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Active Slide Indicator */}
      <div className="z-10 mt-6 flex gap-2">
        {nagaBalmPhotos.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 
              ${activeIndex === i ? 'bg-gold scale-110' : 'bg-gray-600'}
            `}
          />
        ))}
      </div>
    </section>
  )
}