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

export default function NagaBalmCommunityGrid() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [gridLayout, setGridLayout] = useState<string>('mosaic')
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Animation variants for grid items
  const gridItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    })
  }

  // Animation variants for the modal
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }
    }
  }

  // Function to determine grid span classes based on index and layout
  const getGridSpanClass = (index: number) => {
    if (gridLayout === 'mosaic') {
      // Create a visually interesting mosaic pattern with more variation
      const patterns = [
        'md:col-span-1 md:row-span-1', // Small
        'md:col-span-2 md:row-span-1', // Wide
        'md:col-span-1 md:row-span-2', // Tall
        'md:col-span-2 md:row-span-2', // Large
      ]
      return patterns[index % patterns.length]
    } else if (gridLayout === 'columns') {
      // Column-based layout
      return 'col-span-1'
    } else {
      // Default uniform grid
      return 'col-span-1'
    }
  }

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-azure/30 to-azure/10 py-16 px-4 md:px-8 flex flex-col items-center justify-start overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-azure/40 via-azure/20 to-azure/30 z-0"></div>
      
      {/* Decorative wave patterns */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute top-0 left-0 right-0 h-40 bg-[url('/images/wave-pattern.svg')] bg-repeat-x bg-contain"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-[url('/images/wave-pattern.svg')] bg-repeat-x bg-contain transform rotate-180"></div>
      </div>
      
      {/* Title & Subtitle with animated reveal */}
      <motion.div
        className="z-10 text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-karla text-5xl md:text-6xl text-fire font-bold mb-3 tracking-wide uppercase">
          The Naga Balm Community
        </h1>
        <p className="max-w-2xl mx-auto font-montserrat text-lg text-gray-800">
          Explore the vibrant tapestry of moments from our Cambodian community, united by the healing power of Naga Balm.
        </p>
      </motion.div>

      {/* Layout Controls */}
      <motion.div 
        className="flex gap-4 mb-8 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <button 
          onClick={() => setGridLayout('mosaic')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all font-karla ${
            gridLayout === 'mosaic' 
              ? 'bg-fire text-white' 
              : 'bg-white/80 text-gray-800 hover:bg-white'
          }`}
        >
          Mosaic
        </button>
        <button 
          onClick={() => setGridLayout('columns')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all font-karla ${
            gridLayout === 'columns' 
              ? 'bg-fire text-white' 
              : 'bg-white/80 text-gray-800 hover:bg-white'
          }`}
        >
          Columns
        </button>
        <button 
          onClick={() => setGridLayout('uniform')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all font-karla ${
            gridLayout === 'uniform' 
              ? 'bg-fire text-white' 
              : 'bg-white/80 text-gray-800 hover:bg-white'
          }`}
        >
          Uniform
        </button>
      </motion.div>

      {/* Dynamic Photo Grid */}
      <div className="w-full max-w-[1600px] mx-auto">
        <motion.div 
          className={`w-full grid gap-4 md:gap-6 ${
            gridLayout === 'columns' 
              ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5' 
              : gridLayout === 'uniform'
                ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
                : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px]'
          }`}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05
              }
            }
          }}
        >
          {nagaBalmPhotos.map((photo, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-xl shadow-lg ${getGridSpanClass(index)} ${
                gridLayout === 'uniform' ? 'aspect-square' : 
                gridLayout === 'columns' ? 'aspect-[3/4]' : ''
              }`}
              variants={gridItemVariants}
              custom={index}
              onClick={() => setSelectedImage(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(78, 195, 224, 0.4)",
                zIndex: 10
              }}
              style={{
                height: gridLayout === 'mosaic' ? 'auto' : undefined
              }}
            >
              {/* Gradient overlay that appears on hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-azure/90 via-azure/40 to-transparent z-10 flex items-end p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <p className="text-white font-karla text-sm md:text-base font-medium">{photo.alt}</p>
                  <div className="h-0.5 w-0 bg-fire mt-1 transition-all duration-500" 
                    style={{ width: hoveredIndex === index ? '100%' : '0%' }}
                  />
                </div>
              </motion.div>
              
              {/* Image */}
              <div className="absolute inset-0 bg-black/10"></div>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div 
          className="fixed inset-0 bg-azure/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div 
            className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            layoutId={`photo-${selectedImage}`}
          >
            <div className="relative w-full h-[80vh]">
              <Image
                src={nagaBalmPhotos[selectedImage].src}
                alt={nagaBalmPhotos[selectedImage].alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-azure/80 p-4 backdrop-blur-sm">
              <h3 className="text-white text-xl font-bold font-karla">{nagaBalmPhotos[selectedImage].alt}</h3>
              <p className="text-white/90 mt-1 font-montserrat">Naga Balm Community, Cambodia</p>
            </div>
            
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 bg-white/20 text-white rounded-full p-2 hover:bg-fire/80 transition-colors backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Navigation buttons */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 flex space-x-4">
              <button 
                className="bg-white/20 text-white rounded-full p-2 hover:bg-fire/80 transition-colors backdrop-blur-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage === 0 ? nagaBalmPhotos.length - 1 : selectedImage - 1);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex space-x-4">
              <button 
                className="bg-white/20 text-white rounded-full p-2 hover:bg-fire/80 transition-colors backdrop-blur-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage === nagaBalmPhotos.length - 1 ? 0 : selectedImage + 1);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Image counter */}
            <div className="absolute top-4 left-4 bg-white/20 text-white px-3 py-1 rounded-full text-sm font-karla backdrop-blur-sm">
              {selectedImage + 1} / {nagaBalmPhotos.length}
            </div>
          </motion.div>
        </motion.div>
      )}
      
      {/* Decorative elements */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-fire/5 blur-3xl z-0"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-azure/20 blur-3xl z-0"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-ice/10 blur-2xl z-0"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-azure/15 blur-2xl z-0"></div>
    </section>
  )
}