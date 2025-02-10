'use client'

import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-screen overflow-hidden flex items-center">
      {/* Main Background Image */}
      <div className="absolute inset-0 w-screen h-screen">
        <Image
          src="/images/Naga Balm Element (Cloud)/Background 3.png"
          alt="Background Pattern"
          fill
          quality={100}
          sizes="100vw"
          className="object-cover w-full h-full"
          style={{ 
            transform: 'scale(1.1)',
            transformOrigin: 'center'
          }}
          priority
        />
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-transparent to-amber-900/5"></div>
        
        {/* Decorative Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.amber.600)_1px,transparent_0)] 
          [background-size:40px_40px] opacity-[0.03]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Cloud Elements */}
        <div className={`absolute top-[25%] ${styles.floatLR}`}>
          <div className="relative w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 opacity-90">
            <Image
              src="/images/Naga Balm Element (Cloud)/Element 3.png"
              alt=""
              fill
              className={`object-contain ${styles.rotate}`}
              priority
            />
          </div>
        </div>

        <div className={`absolute top-[45%] ${styles.floatRL}`}>
          <div className="relative w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 opacity-90">
            <Image
              src="/images/Naga Balm Element (Cloud)/Element 2.png"
              alt=""
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className={`absolute top-[65%] ${styles.floatLR2}`}>
          <div className="relative w-28 sm:w-40 md:w-56 h-28 sm:h-40 md:h-56 opacity-90">
            <Image
              src="/images/Naga Balm Element (Cloud)/Element 3.png"
              alt=""
              fill
              className={`object-contain ${styles.rotate}`}
              priority
            />
          </div>
        </div>

        {/* Brand Mark Elements */}
        <div className={`absolute top-[15%] ${styles.floatRL2}`}>
          <div className="relative w-16 sm:w-20 md:w-28 h-16 sm:h-20 md:h-28 opacity-90">
            <Image
              src="/images/Logo/Naga Balm__Brandmark_Black.png"
              alt=""
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className={`absolute top-[35%] ${styles.floatLR3}`}>
          <div className="relative w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 opacity-90">
            <Image
              src="/images/Logo/Naga Balm__Brandmark_Fire.png"
              alt=""
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className={`absolute top-[55%] ${styles.floatRL3}`}>
          <div className="relative w-18 sm:w-22 md:w-30 h-18 sm:h-22 md:h-30 opacity-90">
            <Image
              src="/images/Logo/Naga Balm__Brandmark_Gambodge.png"
              alt=""
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className={`absolute top-[75%] ${styles.floatLR}`}>
          <div className="relative w-24 sm:w-28 md:w-36 h-24 sm:h-28 md:h-36 opacity-90">
            <Image
              src="/images/Logo/Naga Balm__Brandmark_Ice.png"
              alt=""
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className={`absolute top-[85%] ${styles.floatRL}`}>
          <div className="relative w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 opacity-90">
            <Image
              src="/images/Logo/Naga Balm__Brandmark_White.png"
              alt=""
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16 lg:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content with Enhanced Typography */}
          <div className="flex items-center order-2 md:order-1">
            <div className="relative">
              {/* Decorative Line with Glow */}
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-fire/0 via-fire/30 to-fire/0
                shadow-[0_0_15px_rgba(255,166,0,0.3)]"></div>
              
              <div className="space-y-4 sm:space-y-6 md:space-y-8 relative pl-8">
                {/* Title Section with Enhanced Effects */}
                <div className="relative group">
                  <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full 
                    bg-gradient-to-br from-fire to-amber-600 opacity-20
                    before:absolute before:inset-0 before:rounded-full before:bg-fire/40 
                    before:animate-ping before:animation-delay-2000
                    after:absolute after:inset-0 after:rounded-full after:bg-fire/20 
                    after:animate-pulse after:animation-delay-1000"></div>
                  
                  <h1 className="font-karla text-xl sm:text-2xl md:text-3xl lg:text-headline font-bold tracking-wide
                    text-fire drop-shadow-[0_2px_10px_rgba(255,166,0,0.2)] uppercase">
                    <span className="block mb-2 transform transition-all duration-500 ease-out
                      hover:translate-x-2 hover:text-amber-600 hover:drop-shadow-[0_5px_15px_rgba(255,166,0,0.3)]">
                      About Us
                    </span>
                    <span className="block transform transition-all duration-500 ease-out
                      hover:translate-x-2 hover:text-amber-600 hover:drop-shadow-[0_5px_15px_rgba(255,166,0,0.3)]">
                      Our Journey &<br className="hidden sm:block" /> Values
                    </span>
                  </h1>
                </div>

                {/* Subtitle with Refined Styling */}
                <div className="relative group">
                  <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full 
                    bg-gradient-to-br from-ochre to-amber-600 opacity-40
                    group-hover:opacity-60 transition-opacity duration-300"></div>
                  <h2 className="font-karla text-lg sm:text-xl md:text-subheading font-medium text-ochre
                    max-w-2xl transform transition-all duration-500 ease-out
                    hover:translate-x-2 hover:text-amber-700 group-hover:drop-shadow-[0_2px_5px_rgba(255,166,0,0.2)]">
                    From traditional roots to modern innovation
                  </h2>
                </div>

                {/* Description with Enhanced Readability */}
                <div className="relative group">
                  <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full 
                    bg-gradient-to-br from-ochre to-amber-600 opacity-40
                    group-hover:opacity-60 transition-opacity duration-300"></div>
                  <p className="font-karla text-sm sm:text-base md:text-body text-ochre/90 max-w-2xl leading-relaxed
                    transform transition-all duration-500 ease-out hover:translate-x-2
                    group-hover:text-amber-800">
                    Discover how we blend ancient Cambodian healing wisdom with contemporary practices 
                    to create effective natural remedies.
                  </p>
                </div>

                {/* Enhanced CTA Button with Better Visual Feedback */}
                <div className="pt-4 sm:pt-6 md:pt-8 group">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-fire/50 to-amber-600/50 
                      rounded-lg blur-lg group-hover:blur-xl opacity-70 group-hover:opacity-100 
                      transition-all duration-500"></div>
                    <a 
                      href="#mission" 
                      className="relative inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 
                        bg-fire hover:bg-amber-600 text-white rounded-lg 
                        transition-all duration-500 hover:translate-x-2 
                        group-hover:shadow-[0_5px_15px_rgba(255,166,0,0.3)]
                        text-sm sm:text-base"
                    >
                      <span className="relative flex items-center font-medium tracking-wide">
                        Explore Our Story
                        <svg 
                          className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform transition-transform duration-500 group-hover:translate-x-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M17 8l4 4m0 0l-4 4m4-4H3" 
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo Side with Enhanced Effects */}
          <div className="flex justify-center items-center order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative w-1/2 sm:w-2/5 md:w-3/4 aspect-square group">
              <div className="absolute -inset-4 bg-gradient-to-br from-fire/20 to-amber-600/20 
                rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-sm 
                group-hover:bg-white/10 transition-all duration-500 p-4 sm:p-6 md:p-8
                before:absolute before:inset-0 before:rounded-full before:border-2 
                before:border-fire/20 before:scale-90 before:opacity-0
                group-hover:before:scale-100 before:opacity-100 before:transition-all before:duration-500">
                <Image
                  src="/images/Logo/Naga Balm_Primary_Logomark_Primary.png"
                  alt="Naga Balm Logo"
                  fill
                  className="object-contain scale-90 group-hover:scale-95 transition-transform duration-500"
                  priority
                />
              </div>
              <div className="absolute -inset-4 rounded-full border border-fire/20 
                group-hover:border-fire/30 transition-colors duration-500
                group-hover:scale-105 transition-transform duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}