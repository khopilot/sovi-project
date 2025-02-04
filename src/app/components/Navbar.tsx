'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/home', text: 'Home' },
  { href: '/products', text: 'Products' },
  { href: '/use-cases', text: 'Use Cases' },
  { href: '/faq', text: 'FAQ' },
  { href: '/about', text: 'About' },
  { href: '/contact', text: 'Contact' }
];

// Split navigation links for left and right sides of the logo
const leftNavLinks = navLinks.slice(0, navLinks.length / 2);
const rightNavLinks = navLinks.slice(navLinks.length / 2);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  
  // Handle client-side-only features
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
    
    // Set initial scroll state and add listener
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll() // Set initial state
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Don't render anything until mounted
  if (!mounted) {
    return (
      <div className="fixed top-4 left-0 right-0 z-50 w-full">
        <div className="max-w-5xl mx-auto px-4">
          <nav className="bg-white/90 backdrop-blur-sm shadow-lg rounded-full">
            {/* Static initial render */}
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center justify-center w-full">
                  <Image
                    src="/images/Naga Balm__SecondaryLogomark_Black.png"
                    alt="Naga Balm"
                    width={120}
                    height={40}
                    className="h-8 w-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    )
  }

  const baseNavClasses = "transition-all duration-500 bg-white/90 backdrop-blur-sm shadow-lg"

  // Animation variants for menu items
  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    })
  }

  // Stagger animation for desktop nav items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
      className={`fixed z-50 w-full transition-all duration-300 ${
        scrolled ? 'top-0 pt-4' : 'top-4'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <nav className={`${baseNavClasses} rounded-full ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md' 
            : 'bg-white/90 backdrop-blur-sm'
        }`}>
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              {/* Desktop Navigation */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="hidden sm:flex flex-1 items-center justify-center space-x-8"
              >
                {/* Left Links */}
                {leftNavLinks.map((link, i) => (
                  <motion.div key={link.href} variants={menuItemVariants} custom={i}>
                    <Link
                      href={link.href}
                      className="group relative px-1 pt-1"
                    >
                      <span className={`text-sm font-medium transition-colors duration-200
                        ${pathname === link.href ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                      >
                        {link.text}
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 
                        transform origin-left transition-transform duration-300 ease-out
                        scale-x-0 group-hover:scale-x-100"
                      />
                    </Link>
                  </motion.div>
                ))}

                {/* Logo with hover effect */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-shrink-0 flex items-center px-4"
                >
                  <Link href="/home">
                    <Image
                      src="/images/Naga Balm__SecondaryLogomark_Black.png"
                      alt="Naga Balm"
                      width={120}
                      height={40}
                      className="h-8 w-auto transition-all duration-300 hover:brightness-110"
                      priority
                    />
                  </Link>
                </motion.div>

                {/* Right Links */}
                {rightNavLinks.map((link, i) => (
                  <motion.div key={link.href} variants={menuItemVariants} custom={i + leftNavLinks.length}>
                    <Link
                      href={link.href}
                      className="group relative px-1 pt-1"
                    >
                      <span className={`text-sm font-medium transition-colors duration-200
                        ${pathname === link.href ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                      >
                        {link.text}
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 
                        transform origin-left transition-transform duration-300 ease-out
                        scale-x-0 group-hover:scale-x-100"
                      />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Mobile Layout */}
              <div className="sm:hidden flex justify-between items-center w-full">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center"
                >
                  <Link href="/home" className="flex items-center">
                    <Image
                      src="/images/Naga Balm__SecondaryLogomark_Black.png"
                      alt="Naga Balm"
                      width={100}
                      height={32}
                      className="h-8 w-auto"
                      priority
                    />
                  </Link>
                </motion.div>

                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="inline-flex items-center justify-center p-2 rounded-full
                    text-gray-400 hover:text-gray-500 hover:bg-gray-100
                    transition-colors duration-200 ease-in-out"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-expanded={isMenuOpen}
                  aria-label="Toggle navigation menu"
                >
                  <span className="sr-only">Open main menu</span>
                  <motion.div
                    animate={isMenuOpen ? "open" : "closed"}
                    variants={{
                      open: { rotate: 180 },
                      closed: { rotate: 0 }
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {!isMenuOpen ? (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    ) : (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </div>

          {/* Mobile menu with animations */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="sm:hidden absolute left-0 right-0 mt-2 mx-4"
              >
                <motion.div 
                  className="bg-white/95 backdrop-blur-md rounded-3xl shadow-lg"
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                      custom={i}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-6 py-3 text-base font-medium
                          transition-all duration-200 ease-in-out
                          ${pathname === link.href
                            ? 'text-gray-900 bg-gray-50'
                            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                          }
                          first:rounded-t-3xl last:rounded-b-3xl
                          hover:pl-8
                        `}
                      >
                        {link.text}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </motion.div>
  )
} 