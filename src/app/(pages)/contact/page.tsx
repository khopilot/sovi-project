'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Hero from './components/Hero'
import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'
import Map from './components/Map'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <Hero />
      
      {/* Main Content */}
      <section className="relative py-12 sm:py-16 md:py-24">
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-0 left-0 w-64 md:w-96 opacity-20 pointer-events-none"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.2, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image 
            src="/images/Naga Balm Element (Cloud)/Element 2.png" 
            alt="" 
            width={400} 
            height={200}
            className="w-full h-auto"
          />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-0 right-0 w-80 md:w-[500px] opacity-20 pointer-events-none"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.2, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image 
            src="/images/Naga Balm Element (Cloud)/Element 3.png" 
            alt="" 
            width={500} 
            height={250}
            className="w-full h-auto"
          />
        </motion.div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-10 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-r from-amber-100 to-amber-50 backdrop-blur-sm py-8 px-6 rounded-2xl shadow-sm inline-block border border-amber-200">
              <h2 className="text-3xl font-bold tracking-tight text-amber-900 sm:text-4xl font-karla">
                Get in Touch
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-700 max-w-2xl mx-auto font-montserrat">
                We value your feedback and inquiries. Whether you have questions about our products, 
                distribution opportunities, or just want to say hello, we&apos;re here to help.
              </p>
            </div>
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2 lg:gap-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Contact Form */}
              <div className="lg:col-span-1 h-full">
                <ContactForm />
              </div>
              
              {/* Contact Info and Map */}
              <div className="lg:col-span-1 flex flex-col space-y-6 md:space-y-8">
                <div className="flex-1">
                  <ContactInfo />
                </div>
                <div className="flex-1">
                  <Map />
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative line */}
          <motion.div 
            className="mt-16 md:mt-24 h-1 w-32 bg-fire rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </div>
      </section>
    </main>
  )
}
