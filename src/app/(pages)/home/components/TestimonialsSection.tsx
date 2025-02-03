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
  
  export default function TestimonialsSection() {
    return (
      <section className="relative py-20 overflow-hidden bg-[#FFD36F]">
        <div className="relative max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-[#EE4922]"
            >
              Trusted by Our Community
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Join thousands of satisfied customers who have found natural relief with Naga Balm
            </motion.p>
          </div>
  
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FFD36F]/30 rounded-full opacity-50 blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#FFD36F]/30 rounded-full opacity-50 blur-xl"></div>
  
                  {/* Content */}
                  <div className="relative">
                    {/* Profile and Rating */}
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#EE4922] to-[#e13d0f] rounded-full flex items-center justify-center text-xl font-bold text-white">
                        {testimonial.initial}
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-lg text-[#EE4922]">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                        <div className="flex text-yellow-400 mt-1">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
  
                    {/* Product Tag */}
                    <div className="inline-block px-3 py-1 bg-[#FFD36F]/20 text-[#EE4922] text-sm rounded-full mb-4">
                      {testimonial.product}
                    </div>
  
                    {/* Testimonial Text */}
                    <p className="text-gray-600 leading-relaxed">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
  
                    {/* Quote Icon */}
                    <div className="absolute -bottom-2 -right-2 text-[#FFD36F]">
                      <svg className="w-12 h-12 transform rotate-180" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10 8c-3.314 0-6 2.686-6 6s2.686 6 6 6c.796 0 1.557-.156 2.25-.438-.45 2.72-2.48 4.438-5.25 4.438v4c5.277 0 9-4.723 9-10v-4h-6v-6zm16 0c-3.314 0-6 2.686-6 6s2.686 6 6 6c.796 0 1.557-.156 2.25-.438-.45 2.72-2.48 4.438-5.25 4.438v4c5.277 0 9-4.723 9-10v-4h-6v-6z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
  
          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-16"
          >
            <button className="px-8 py-4 bg-[#EE4922] text-white rounded-full font-semibold hover:bg-[#e13d0f] transform hover:scale-105 transition-all duration-300 shadow-lg">
              Share Your Experience
            </button>
          </motion.div>
        </div>
      </section>
    )
  } 