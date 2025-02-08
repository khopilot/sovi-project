'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './FeaturedSection.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const FEATURED_PRODUCTS = [
  {
    id: 'naga-balm-ice',
    name: 'Naga Balm Ice',
    description: 'NATURALLY COOL. Cooling and soothing through the cooling power of menthol and arnica. Temporary pain relief from joint pain, sore muscles, chest and nasal congestion relief.',
    image: '/images/NB-Ointment-Ice.jpg',
    category: 'Cooling Relief',
    keyIngredient: 'Arnica & Menthol'
  },
  {
    id: 'extreme-liniment-oil',
    name: 'Naga Balm Extreme Liniment Oil',
    description: 'EXTREME RELIEF. The extreme reliever of severe or chronic pain with long-lasting heat. Relief of severe or chronic pain. Great for muscle recovery.',
    image: '/images/NB-ExtremeLinimentOil1.jpg',
    category: 'Deep Heat',
    keyIngredient: 'Capsicum & Wintergreen'
  },
  {
    id: 'inhaler-roll-on',
    name: 'Naga Balm Roll-On',
    description: 'TWO-IN-ONE RELIEF. A two-in-one touch-free pain relief solution to take on the go. Inhaler: Relief from nausea, congestion, headaches & stress.',
    image: '/images/NB-Inhaler-RollOn1.jpg',
    category: 'On-The-Go Relief',
    keyIngredient: 'Pomelo Peel & Wintergreen'
  },
  {
    id: 'mosquito-repellent',
    name: 'Naga Balm Mosquito Repellent',
    description: 'EMBRACE LIFE, REPEL MOSQUITOES. The most effective and safe mosquito repellent in Cambodia. Made with 20% Picaridin, it is child safe (6 months up) and skin safe.',
    image: '/images/NB-MosquitoRepellent1.jpg',
    category: 'Protection',
    keyIngredient: 'Picaridin'
  }
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

export default function FeaturedSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % FEATURED_PRODUCTS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + FEATURED_PRODUCTS.length) % FEATURED_PRODUCTS.length);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <section className={styles.section}>
      {/* Background Image */}
      <Image
        src="/images/Naga Balm Element (Cloud)/Background 4.png"
        alt="Background Pattern"
        fill
        quality={100}
        sizes="100vw"
        className={styles.backgroundImage}
        priority
      />

      <div className={styles.container}>
        {/* Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Featured Products</h2>
          <p className={styles.subtitle}>Our Top Pain Relief Picks</p>
        </motion.div>

        {/* Carousel Container */}
        <div className={styles.carouselContainer}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className={styles.carouselSlide}
            >
              <div className={styles.productCard}>
                <div className={styles.productImage}>
                  <Image
                    src={FEATURED_PRODUCTS[currentIndex].image}
                    alt={FEATURED_PRODUCTS[currentIndex].name}
                    width={300}
                    height={300}
                    className={styles.image}
                    priority
                  />
                </div>
                <div className={styles.productInfo}>
                  <span className={styles.category}>{FEATURED_PRODUCTS[currentIndex].category}</span>
                  <h3 className={styles.productName}>{FEATURED_PRODUCTS[currentIndex].name}</h3>
                  <p className={styles.productDescription}>{FEATURED_PRODUCTS[currentIndex].description}</p>
                  <div className={styles.keyIngredient}>
                    <span className={styles.keyIngredientLabel}>Key Ingredients:</span>
                    <span className={styles.keyIngredientValue}>{FEATURED_PRODUCTS[currentIndex].keyIngredient}</span>
                  </div>
                  <Link 
                    href={`/products#${FEATURED_PRODUCTS[currentIndex].id}`}
                    className={styles.learnMoreButton}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={() => {
              setDirection(-1);
              paginate(-1);
              setIsAutoPlaying(false);
            }}
            aria-label="Previous product"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.navIcon}>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={() => {
              setDirection(1);
              paginate(1);
              setIsAutoPlaying(false);
            }}
            aria-label="Next product"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.navIcon}>
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Pagination Dots */}
          <div className={styles.pagination}>
            {FEATURED_PRODUCTS.map((_, index) => (
              <button
                key={index}
                className={`${styles.paginationDot} ${index === currentIndex ? styles.activeDot : ''}`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                aria-label={`Go to product ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 