'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const calculateScrollProgress = () => {
      const winScroll = window.pageYOffset
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      
      setScrollProgress(scrolled)
      setIsVisible(winScroll > 300)
    }

    window.addEventListener('scroll', calculateScrollProgress)
    return () => window.removeEventListener('scroll', calculateScrollProgress)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Back to top"
        >
          {/* Progress Circle */}
          <svg 
            className="w-12 h-12 transform -rotate-90"
            viewBox="0 0 100 100"
          >
            {/* Background Circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              className="stroke-emerald-100 fill-white"
              strokeWidth="8"
            />
            {/* Progress Circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              className="stroke-emerald-500"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
              strokeDasharray={`${scrollProgress * 2.51}, 251.2`}
              style={{
                transition: 'stroke-dasharray 0.3s ease'
              }}
            />
          </svg>

          {/* Button Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white transition-transform duration-300 group-hover:bg-emerald-600">
              <ChevronUp className="w-5 h-5 animate-bounce" />
              <motion.div
                className="absolute inset-0 bg-emerald-500 rounded-full"
                initial={{ scale: 1 }}
                animate={{ scale: 1.2, opacity: 0 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
            </div>
          </div>

          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="bg-gray-900 text-white text-sm px-3 py-1.5 rounded whitespace-nowrap"
            >
              Back to top ({Math.round(scrollProgress)}%)
              <div className="absolute bottom-0 right-4 w-2 h-2 -mb-1 rotate-45 bg-gray-900" />
            </motion.div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  )
} 