'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const [visibleImages, setVisibleImages] = useState<number[]>([])

  const mosaicImages = [
    { 
      src: '/images/about-grid/430720496_388817580758751_2341257138742686116_n.jpg',
    },
    { 
      src: '/images/about-grid/391671432_294858683487975_2328397320296936_n.jpg',
    },
    { 
      src: '/images/about-grid/475543227_611132651860575_6219166345296305196_n.jpg',
    },
    { 
      src: '/images/about-grid/391619663_294858813487962_4740528239290929594_n.jpg',
    },
    { 
      src: '/images/about-grid/420033960_348959618077881_592468932604044747_n.jpg',
    },
    { 
      src: '/images/about-grid/469337321_17914579515030307_4981590020092049347_n.jpg',
    },
    { 
      src: '/images/about-grid/475753767_611132935193880_5434604327035901400_n.jpg',
    },
    { 
      src: '/images/about-grid/370182647_262382353402275_462936422139193930_n.jpg',
    },
    { 
      src: '/images/about-grid/370867629_262382400068937_5776579610531504209_n.jpg',
    }
  ]

  useEffect(() => {
    const remainingIndices = [...Array(mosaicImages.length)].map((_, i) => i)
    let timeoutId: NodeJS.Timeout

    const showNextImage = () => {
      if (remainingIndices.length > 0) {
        const randomIndex = Math.floor(Math.random() * remainingIndices.length)
        const imageIndex = remainingIndices[randomIndex]
        remainingIndices.splice(randomIndex, 1)
        
        setVisibleImages(prev => [...prev, imageIndex])
        
        if (remainingIndices.length > 0) {
          timeoutId = setTimeout(showNextImage, 500)
        }
      }
    }

    timeoutId = setTimeout(showNextImage, 100)

    return () => clearTimeout(timeoutId)
  }, [mosaicImages.length])

  return (
    <section className="relative min-h-[100svh] overflow-x-hidden flex items-center">
      {/* Main Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Naga Balm Element (Cloud)/Background 2.png"
          alt="Background Pattern"
          fill
          quality={100}
          sizes="100vw"
          style={{ 
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          priority
          className={styles.backgroundImage}
        />
      </div>

      {/* Background Clouds - Adjusted positioning and overflow handling */}
      <div className="absolute inset-0 w-full overflow-hidden pointer-events-none">
        {/* Large cloud in top-right - Adjusted positioning */}
        <div className={`absolute -right-[10%] sm:-right-[15%] top-[10%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] ${styles.cloudFloat1}`}>
          <Image
            src="/images/png/cloud-balm.avif"
            alt=""
            fill
            className="object-contain opacity-90 rotate-12"
            priority
          />
        </div>

        {/* Medium cloud in middle-left - Adjusted positioning */}
        <div className={`absolute -left-[10%] sm:-left-[15%] top-[40%] w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] ${styles.cloudFloat2}`}>
          <Image
            src="/images/png/cloud-balm.avif"
            alt=""
            fill
            className="object-contain opacity-90 -rotate-12"
            priority
          />
        </div>

        {/* Small cloud in bottom-right - Adjusted positioning */}
        <div className={`absolute -right-[5%] sm:-right-[10%] bottom-[15%] w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] ${styles.cloudFloat3}`}>
          <Image
            src="/images/png/cloud-balm.avif"
            alt=""
            fill
            className="object-contain opacity-95"
            priority
          />
        </div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="flex items-center">
            <div className="relative">
              {/* Decorative line */}
              <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-1 h-24 bg-fire rounded-r hidden md:block"></div>
              
              <div className={`space-y-6 md:space-y-8 relative ${styles.fadeUpAnimation}`}>
                <h1 className="font-karla text-2xl sm:text-3xl md:text-headline font-bold text-fire uppercase tracking-wide">
                  <span className="block mb-2">About Us</span>
                  <span className="block">
                    Our Journey &<br className="hidden sm:block" /> Values
                  </span>
                </h1>
                <h2 className="font-karla text-subheading text-ochre max-w-2xl">
                  From traditional roots to modern innovation
                </h2>
                <p className="font-karla text-body text-ochre max-w-2xl">
                  Discover how we blend ancient Cambodian healing wisdom with contemporary practices 
                  to create effective natural remedies.
                </p>
              </div>
            </div>
          </div>

          {/* Mosaic Grid */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full aspect-square">
              {mosaicImages.map((image, index) => (
                <div 
                  key={index}
                  className={`relative overflow-hidden rounded-lg sm:rounded-2xl shadow-lg hover:shadow-xl 
                    transition-all duration-500 group ${visibleImages.includes(index) ? styles.fadeUpAnimation : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src}
                      alt={`Naga Balm team and process ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 33vw, 20vw"
                      priority={index < 6}
                    />
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-fire/30 via-black/0 to-black/0 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Elements - Adjusted positioning */}
            <div className="absolute -bottom-8 -left-8 w-24 h-24 sm:w-48 sm:h-48 bg-salmon/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-8 -right-8 w-24 h-24 sm:w-48 sm:h-48 bg-bubblegum/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Scroll Indicator - Adjusted positioning */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg 
            className="w-6 h-6 text-fire opacity-75" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}