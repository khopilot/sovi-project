'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Naga Balm Element (Cloud)/Background 2.png"
          alt=""
          fill
          className="object-cover object-center opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-buttercup/70 via-buttercup/60 to-buttercup/70"></div>
      </div>
      
      {/* Decorative Cloud Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {/* Element 1 - Top Right */}
        <motion.div 
          className="absolute top-0 right-0 w-64 md:w-96 opacity-20"
          initial={{ x: 20, y: -20, rotate: 10 }}
          animate={{ x: 0, y: 0, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image 
            src="/images/Naga Balm Element (Cloud)/Element 1.png" 
            alt="Decorative cloud" 
            width={400} 
            height={200}
            className="w-full h-auto"
          />
        </motion.div>
        
        {/* Element 2 - Top Left */}
        <motion.div 
          className="absolute -top-20 -left-20 w-64 md:w-96 opacity-20"
          initial={{ x: -20, y: -20, rotate: -5 }}
          animate={{ x: 0, y: 0, rotate: 0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <Image 
            src="/images/Naga Balm Element (Cloud)/Element 2.png" 
            alt="Decorative cloud" 
            width={400} 
            height={200}
            className="w-full h-auto"
          />
        </motion.div>
        
        {/* Element 3 - Bottom Right */}
        <motion.div 
          className="absolute bottom-10 right-0 w-80 md:w-[500px] opacity-20"
          initial={{ x: 20, y: 20, rotate: 5 }}
          animate={{ x: 0, y: 0, rotate: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Image 
            src="/images/Naga Balm Element (Cloud)/Element 3.png" 
            alt="Decorative cloud" 
            width={500} 
            height={250}
            className="w-full h-auto"
          />
        </motion.div>
        
        {/* Element 4 - Bottom Left */}
        <motion.div 
          className="absolute bottom-0 left-10 w-64 md:w-80 opacity-20"
          initial={{ x: -20, y: 20, rotate: -10 }}
          animate={{ x: 0, y: 0, rotate: 0 }}
          transition={{ duration: 1.7, ease: "easeOut" }}
        >
          <Image 
            src="/images/Naga Balm Element (Cloud)/Element 4.png" 
            alt="Decorative cloud" 
            width={400} 
            height={200}
            className="w-full h-auto"
          />
        </motion.div>
      </div>
      
      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl lg:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo with Khmer text */}
          <div className="relative w-64 h-32 mx-auto mb-8 lg:mx-0">
            <Image
              src="/images/Logo/nagablam-withkhtext.png"
              alt="Naga Balm Logo with Khmer Text"
              fill
              className="object-contain w-full h-full"
              priority
            />
          </div>
          
          <motion.h1 
            className="text-4xl font-bold tracking-tight text-fire sm:text-6xl font-karla"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Contact Us
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-lg leading-8 text-gray-800 font-montserrat"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Have questions about our products or interested in becoming a distributor? 
            We&apos;d love to hear from you. Get in touch with our team and we&apos;ll respond as soon as possible.
          </motion.p>
          
          {/* Decorative line */}
          <motion.div 
            className="mt-8 h-1 w-32 bg-fire rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </motion.div>
      </div>
    </section>
  )
} 