'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      <nav className="bg-white/90 backdrop-blur-sm shadow-lg rounded-full">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Desktop Navigation */}
            <div className="hidden sm:flex flex-1 items-center justify-center space-x-8">
              {/* Left Links */}
              {leftNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
                >
                  {link.text}
                </Link>
              ))}

              {/* Logo in the middle */}
              <Link href="/home" className="flex-shrink-0 flex items-center px-4">
                <Image
                  src="/images/Naga Balm__SecondaryLogomark_Black.png"
                  alt="Naga Balm"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                  priority
                />
              </Link>

              {/* Right Links */}
              {rightNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
                >
                  {link.text}
                </Link>
              ))}
            </div>

            {/* Mobile Layout */}
            <div className="sm:hidden flex justify-between items-center w-full">
              <Link href="/home" className="flex-shrink-0 flex items-center">
                <Image
                  src="/images/Naga Balm__SecondaryLogomark_Black.png"
                  alt="Naga Balm"
                  width={100}
                  height={32}
                  className="h-6 w-auto"
                  priority
                />
              </Link>
              
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden absolute top-full left-0 right-0 mt-2 bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg">
            <div className="pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 first:rounded-t-3xl last:rounded-b-3xl"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  )
} 