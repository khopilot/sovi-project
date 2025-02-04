'use client'

import { motion } from 'framer-motion'

const testimonials = [
    {
      initial: 'S',
      name: 'Sarah L.',
      location: 'Phnom Penh',
      rating: 5,
      text: 'Amazing relief for my chronic back pain. The Naga Balm Fire is now my go-to solution! The warming sensation is perfect and long-lasting.',
      product: 'Naga Balm Fire'
    },
    {
      initial: 'M',
      name: 'Michael R.',
      location: 'Siem Reap',
      rating: 5,
      text: 'The mosquito repellent is a game-changer. Natural and effective - exactly what I needed! Perfect for evening walks and outdoor activities.',
      product: 'Mosquito Repellent'
    },
    {
      initial: 'J',
      name: 'Jenny K.',
      location: 'Kampot',
      rating: 5,
      text: 'I love how the original balm helps with my headaches. Natural ingredients make all the difference! The cooling sensation is so soothing.',
      product: 'Original Naga Balm'
    }
  ]
  
  // Animation variants for better reusability
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }
  
  const cardHover = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }
  
  // Add new stagger container variant
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }
  
  export default function TestimonialsSection() {
    return (
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#FFD36F] to-[#FFE5A3]">
        {/* Enhance background decorations */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-72 h-72 bg-[#EE4922]/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#EE4922]/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2 animate-pulse" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#FFD36F]/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        </div>
  
        <div className="relative max-w-7xl mx-auto px-4 z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              variants={fadeInUp}
              className="inline-block px-6 py-2 bg-[#EE4922]/10 rounded-full text-[#EE4922] text-sm font-medium mb-4"
            >
              Customer Stories
            </motion.div>
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6 text-[#EE4922] tracking-tight"
            >
              Trusted by Our Community
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={fadeInUp}
              className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            >
              Join thousands of satisfied customers who have found natural relief with Naga Balm
            </motion.p>
          </div>
  
          {/* Enhanced Testimonials Grid with stagger animation */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.name}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative group"
              >
                <motion.div 
                  variants={cardHover}
                  className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:bg-white/90"
                >
                  {/* Enhanced decorative elements */}
                  <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#FFD36F]/30 to-[#EE4922]/20 rounded-full opacity-50 blur-xl group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-[#FFD36F]/30 to-[#EE4922]/20 rounded-full opacity-50 blur-xl group-hover:scale-110 transition-transform duration-300"></div>
  
                  {/* Content */}
                  <div className="relative">
                    {/* Profile and Rating */}
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#EE4922] to-[#e13d0f] rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg">
                        {testimonial.initial}
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-lg text-[#EE4922]">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                        <div className="flex text-yellow-400 mt-1 space-x-0.5">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
  
                    {/* Product Tag */}
                    <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#FFD36F]/20 to-[#EE4922]/10 text-[#EE4922] text-sm font-medium rounded-full mb-4">
                      {testimonial.product}
                    </div>
  
                    {/* Testimonial Text */}
                    <p className="text-gray-600 leading-relaxed text-lg">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
  
                    {/* Enhanced quote icon with animation */}
                    <div className="absolute -bottom-2 -right-2 text-[#EE4922]/10 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <svg className="w-14 h-14 transform rotate-180" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10 8c-3.314 0-6 2.686-6 6s2.686 6 6 6c.796 0 1.557-.156 2.25-.438-.45 2.72-2.48 4.438-5.25 4.438v4c5.277 0 9-4.723 9-10v-4h-6v-6zm16 0c-3.314 0-6 2.686-6 6s2.686 6 6 6c.796 0 1.557-.156 2.25-.438-.45 2.72-2.48 4.438-5.25 4.438v4c5.277 0 9-4.723 9-10v-4h-6v-6z" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
  
          {/* Enhanced Call to Action */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mt-20"
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-[#EE4922] to-[#e13d0f] text-white rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
              <span className="relative z-10 flex items-center justify-center">
                Share Your Experience
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#e13d0f] to-[#EE4922] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </motion.div>
        </div>
      </section>
    )
  } 