'use client'

import { motion } from 'framer-motion'

const testimonials = [
  // Large featured reviews (2x2)
  {
    type: 'instagram',
    name: 'Review 1',
    handle: '@placeholder1',
    text: 'Placeholder for social media review embed',
    className: 'col-span-2 row-span-2',
    bgColor: 'bg-[#EE4922]'
  },
  // Medium reviews (2x1)
  {
    type: 'twitter',
    name: 'Review 2',
    handle: '@placeholder2',
    text: 'Placeholder for social media review embed',
    className: 'col-span-2 row-span-1',
    bgColor: 'bg-[#FFD36F]'
  },
  {
    type: 'instagram',
    name: 'Review 3',
    handle: '@placeholder3',
    text: 'Placeholder for social media review embed',
    className: 'col-span-2 row-span-1',
    bgColor: 'bg-[#F14823]'
  },
  // Small reviews (1x1)
  ...Array(10).fill(null).map((_, index) => ({
    type: index % 2 === 0 ? 'twitter' : 'instagram',
    name: `Review ${index + 4}`,
    handle: `@placeholder${index + 4}`,
    text: 'Placeholder for social media review embed',
    className: 'col-span-1 row-span-1',
    bgColor: `bg-[${
      [
        '#EE4922',
        '#FFD36F',
        '#F14823',
        '#FFA500'
      ][index % 4]
    }]`
  }))
].flat()

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What Our Community Says
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[200px]">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`${testimonial.className} group relative overflow-hidden rounded-2xl`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Background with brand color */}
              <div className={`absolute inset-0 ${testimonial.bgColor} opacity-10 group-hover:opacity-15 transition-opacity duration-300`} />
              
              {/* Content Container */}
              <div className="relative h-full p-4 flex flex-col bg-white/90 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/95">
                {/* Social Icon */}
                <div className="mb-2">
                  {testimonial.type === 'twitter' ? (
                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                    </svg>
                  )}
                </div>

                {/* Placeholder for embed */}
                <div className="flex-grow flex items-center justify-center text-sm text-gray-400">
                  {/* This div will be replaced with actual social media embed */}
                  <p>Social Media Review #{index + 1}</p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-current to-transparent opacity-10 rounded-full transform rotate-45" />
                <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 bg-gradient-to-tr from-current to-transparent opacity-10 rounded-full transform -rotate-45" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 