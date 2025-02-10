'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './UseCasesSection.module.css';

interface UseCase {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  className: string;
  backgroundImage: string;
  productCategory: string;
}

const useCases: UseCase[] = [
  {
    id: 'muscle-pain',
    title: "For Muscle Pain",
    description: "An active lifestyle can sometimes bring about muscle pain. These aches may have various origins, but they all lead to discomfort that can hold you back. To help you keep moving, Naga Balm® offers a discreet patch that provides long-lasting relief—perfect for both day and night.",
    icon: "🏃‍♂️",
    benefits: [
      "Long-lasting relief",
      "Discreet application",
      "Day and night use",
      "Non-invasive solution"
    ],
    className: styles.musclePain,
    backgroundImage: "/images/use-case/1. For Muscle Pain.jpg",
    productCategory: "balms"
  },
  {
    id: 'stiffness',
    title: "For Stiffness",
    description: "Regardless of your lifestyle, you may occasionally experience stiffness in your upper back, neck, and shoulders. For many, these recurring tensions can limit your ability to fully enjoy life. Naga Balm® presents an unobtrusive solution with its innovative patch, designed to deliver continuous relief whether you're at work or at rest.",
    icon: "💆‍♂️",
    benefits: [
      "Targeted relief",
      "Continuous comfort",
      "Work-friendly solution",
      "Natural movement support"
    ],
    className: styles.stiffness,
    backgroundImage: "/images/use-case/For Stiffness .jpg",
    productCategory: "oils"
  },
  {
    id: 'daily-use',
    title: "For Daily Use",
    description: "Our everyday routines can sometimes generate stress and tension. Extended periods of standing, repetitive movements, or long hours at a desk can lead to discomfort in the lower back, neck, or shoulders. No matter the source, Naga Balm® products are here to support you, easing tension so you can embrace every moment with ease.",
    icon: "🌟",
    benefits: [
      "Stress relief",
      "Tension reduction",
      "Everyday comfort",
      "Versatile application"
    ],
    className: styles.dailyUse,
    backgroundImage: "/images/use-case/2. For Daily Use.jpg",
    productCategory: "sprays"
  },
  {
    id: 'sports',
    title: "For Sports",
    description: "Whether you engage in regular training or enjoy occasional workouts, sports can be demanding. A proper warm-up and recovery are essential to prevent strain. Naga Balm® supports your active lifestyle through a range of products—from massage balms to lotions and fluids—allowing you to choose the formula that best suits your needs.",
    icon: "🏋️‍♂️",
    benefits: [
      "Pre-workout preparation",
      "Post-exercise recovery",
      "Multiple product options",
      "Athletic performance support"
    ],
    className: styles.sports,
    backgroundImage: "/images/use-case/3. For Sport.jpg",
    productCategory: "inhalers"
  }
];

const UseCaseCard = ({ useCase, index }: { useCase: UseCase; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const handleExploreProducts = () => {
    // Scroll to products section
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Dispatch custom event to update product filter
    const event = new CustomEvent('updateProductFilter', {
      detail: { useCase: useCase.id }
    });
    window.dispatchEvent(event);
  };

  return (
    <motion.div
      ref={cardRef}
      className={styles.useCase}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: 50 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.6,
            delay: index * 0.2,
            ease: "easeOut"
          }
        }
      }}
    >
      <div className={`${styles.content} ${useCase.className}`}>
        <Image
          src={useCase.backgroundImage}
          alt={useCase.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={90}
          priority={index === 0}
          style={{
            objectFit: 'cover',
            zIndex: 0
          }}
        />
        <motion.div 
          className={styles.contentInner}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className={styles.iconContainer}>
            <span className={styles.icon} aria-hidden="true">
              {useCase.icon}
            </span>
          </div>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            {useCase.title}
          </motion.h2>
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {useCase.description}
          </motion.p>
          <motion.ul 
            className={styles.benefits}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {useCase.benefits.map((benefit, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + idx * 0.1 }}
              >
                {benefit}
              </motion.li>
            ))}
          </motion.ul>
          
          {/* Add Explore Products Button */}
          <motion.button
            onClick={handleExploreProducts}
            className={styles.exploreButton}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Products
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function UseCasesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const cards = container.children;
      if (cards[index]) {
        const cardWidth = cards[0].clientWidth;
        const scrollPosition = cardWidth * index + (index * 32); // 32px is the gap
        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
        setActiveIndex(index);
      }
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollPosition = container.scrollLeft;
      const cardWidth = container.children[0].clientWidth + 32; // width + gap
      const newIndex = Math.round(scrollPosition / cardWidth);
      setActiveIndex(newIndex);
    }
  };

  const scrollPrev = () => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    }
  };

  const scrollNext = () => {
    if (activeIndex < useCases.length - 1) {
      scrollToIndex(activeIndex + 1);
    }
  };

  return (
    <section className={styles.useCasesSection}>
      <motion.div
        className={styles.headerContainer}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className={styles.mainTitle}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          How to Use Naga Balm®
        </motion.h1>
        <motion.div 
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Discover the perfect solution for your needs
        </motion.div>
      </motion.div>

      <div 
        ref={containerRef}
        className={styles.useCasesContainer}
        onScroll={handleScroll}
      >
        <AnimatePresence>
          {useCases.map((useCase, index) => (
            <UseCaseCard 
              key={useCase.id} 
              useCase={useCase} 
              index={index} 
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className={styles.navigationButtons}>
        <button 
          className={styles.navButton}
          onClick={scrollPrev}
          disabled={activeIndex === 0}
          aria-label="Previous use case"
        >
          ←
        </button>
        <button 
          className={styles.navButton}
          onClick={scrollNext}
          disabled={activeIndex === useCases.length - 1}
          aria-label="Next use case"
        >
          →
        </button>
      </div>

      {/* Indicators */}
      <div className={styles.indicators}>
        {useCases.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === activeIndex ? styles.indicatorActive : ''}`}
            onClick={() => scrollToIndex(index)}
            aria-label={`Go to use case ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
} 