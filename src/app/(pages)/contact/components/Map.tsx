'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Map() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl h-full border border-amber-200">
      {/* Decorative element */}
      <div className="absolute -top-20 -right-20 pointer-events-none opacity-10 z-0">
        <Image
          src="/images/Logo/Naga Balm__Brandmark_Ice.png"
          alt=""
          width={200}
          height={200}
          className="w-full h-auto"
        />
      </div>
      
      <div className="p-5 sm:p-6 md:p-8 relative z-10 h-full flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-2xl font-bold tracking-tight text-blue-900 font-karla mb-2">
            Our Location
          </h2>
          <p className="text-sm text-gray-600 font-montserrat">
            Visit our facility in Phnom Penh, Cambodia
          </p>
        </motion.div>
        
        <motion.div 
          className="relative flex-grow rounded-lg overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Map iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7714073885424!2d104.91224999999999!3d11.568888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951add5e2cd81%3A0x171e0b69c7c6f7ba!2sPhnom%20Penh%2C%20Cambodia!5e0!3m2!1sen!2sus!4v1652893733272!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, position: 'absolute', top: 0, left: 0, height: '100%', minHeight: '250px' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Naga Balm Location"
            className="rounded-lg"
          ></iframe>
          
          {/* Map overlay */}
          <div className="absolute inset-0 bg-[#EE4922]/10 pointer-events-none"></div>
          
          {/* Location pin */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="w-6 h-6 rounded-full bg-[#EE4922] shadow-lg animate-pulse"></div>
            <div className="w-4 h-4 rounded-full bg-[#EE4922]/70 -mt-2"></div>
          </div>
        </motion.div>
        
        <motion.p 
          className="mt-4 text-sm text-gray-600 font-montserrat"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Our facility is located in the heart of Phnom Penh, where we produce our traditional Cambodian healing balms using time-honored methods and locally sourced ingredients.
        </motion.p>
      </div>
    </div>
  )
} 