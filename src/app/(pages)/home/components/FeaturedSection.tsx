'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './FeaturedSection.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useCarousel } from '../hooks/useCarousel';
import { cardVariants } from '../animations/carousel';
import { FEATURED_PRODUCTS } from './data/featured-products';
import { CarouselNavigation } from './CarouselNavigation';
import { ProductCard } from './ProductCard';

export default function FeaturedSection() {
  const [mounted, setMounted] = useState(false);
  const {
    currentIndex,
    isMounted,
    visibleProducts,
    handleNext,
    handlePrev,
    goToSlide
  } = useCarousel(FEATURED_PRODUCTS.length);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isMounted || !mounted) {
    return null;
  }

  return (
    <section className={styles.section}>
      <div className={styles.backgroundContainer}>
        <div className={styles.backgroundImage}>
          <Image
            src="/images/Naga Balm Element (Cloud)/Background 3.png"
            alt="Background Pattern"
            fill
            quality={100}
            priority
            sizes="100vw"
          />
        </div>
        <div className={styles.logoContainer}>
          <Image
            src="/images/Logo/Naga Balm_Primary_Logomark_Primary.png"
            alt="Naga Balm Logo"
            fill
            priority
            sizes="100vw"
          />
        </div>
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Featured Products</h2>
          <p className={styles.subtitle}>Our Top Pain Relief Picks</p>
        </motion.div>

        <div className={styles.carouselContainer}>
          <div className={styles.productsContainer}>
            <AnimatePresence initial={false} mode="popLayout">
              {visibleProducts.map(({ index, position }) => {
                const product = FEATURED_PRODUCTS[index];
                return (
                  <motion.div
                    key={`${product.id}-${position}`}
                    className={styles.cardWrapper}
                    data-position={position}
                    variants={cardVariants}
                    initial={position}
                    animate={position}
                    onClick={() => position !== 'center' && goToSlide(index)}
                  >
                    <ProductCard 
                      product={product} 
                      className={position !== 'center' ? styles.inactive : ''}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <CarouselNavigation
            currentIndex={currentIndex}
            totalSlides={FEATURED_PRODUCTS.length}
            onPrev={handlePrev}
            onNext={handleNext}
            onDotClick={goToSlide}
          />
        </div>
      </div>
    </section>
  );
} 