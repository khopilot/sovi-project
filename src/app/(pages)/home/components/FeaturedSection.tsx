'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './FeaturedSection.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { getProducts } from '@/app/(pages)/products/products';
import type { Product as ProductType } from '@/app/(pages)/products/products';

export default function FeaturedSection() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const loadProducts = async () => {
      const allProducts = await getProducts();
      // Get first 3 products
      setProducts(allProducts.slice(0, 3));
    };
    loadProducts();
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 800 : -800,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 800 : -800,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = useCallback((newDirection: number) => {
    if (products.length === 0) return;
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + products.length) % products.length);
  }, [products.length]);

  useEffect(() => {
    if (products.length > 0) {
      paginate(1);
    }
  }, [products.length, paginate]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (products.length > 0) {
        paginate(1);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [paginate, products.length]);

  if (products.length === 0) {
    return null; // Or a loading state
  }

  return (
    <section className={styles.featuredSection}>
      <div className={styles.backgroundPattern} style={{ opacity: 0.05 }} />
      <div className={styles.container}>
        <h2 className={styles.title}>Featured Products</h2>
        <p className={styles.subtitle}>Discover our most popular solutions for pain relief</p>
        
        <div className={styles.carouselContainer}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 250, damping: 25 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
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
              className={styles.productCard}
            >
              <div className={styles.productImage}>
                <Image
                  src={products[currentIndex].image}
                  alt={products[currentIndex].name.en}
                  width={400}
                  height={400}
                  priority
                />
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{products[currentIndex].name.en}</h3>
                <p className={styles.productDescription}>{products[currentIndex].description.en}</p>
                <div className={styles.productDetails}>
                  <span className={styles.category}>{products[currentIndex].category}</span>
                  <span className={styles.keyIngredient}>
                    Key Ingredient: {products[currentIndex].keyIngredient.name}
                  </span>
                </div>
                <Link 
                  href="/products"
                  className={styles.shopNowButton}
                >
                  Shop Now
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          <button 
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={() => paginate(-1)}
          >
            ←
          </button>
          <button 
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={() => paginate(1)}
          >
            →
          </button>

          <div className={styles.indicators}>
            {products.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ''}`}
                onClick={() => {
                  const direction = index - currentIndex;
                  setDirection(direction);
                  setCurrentIndex(index);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 