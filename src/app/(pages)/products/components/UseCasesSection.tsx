'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
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
    id: 'active-lifestyle',
    title: "For the Active Lifestyle",
    description: "Perform, recover, and stay in motion. Whether you're an athlete, fitness enthusiast, or someone who loves staying active, Naga Balm supports your movement by easing post-workout soreness and helping you recover faster.",
    icon: "🏃‍♂️",
    benefits: [
      "Post-workout recovery",
      "Muscle relief",
      "Performance support",
      "Quick absorption"
    ],
    className: styles.activeLifestyle,
    backgroundImage: "/images/use-case/3. For Sport.jpg",
    productCategory: "active"
  },
  {
    id: 'everyday-relief',
    title: "For Everyday Relief",
    description: "Soothe aches, tension, and stiffness from daily life. From long work hours to household chores, Naga Balm delivers fast-acting, natural relief for the entire family.",
    icon: "🌟",
    benefits: [
      "Tension relief",
      "Stress reduction",
      "Family-friendly",
      "Natural ingredients"
    ],
    className: styles.everydayRelief,
    backgroundImage: "/images/use-case/2. For Daily Use.jpg",
    productCategory: "daily"
  }
];

const UseCaseCard = ({ useCase, index }: { useCase: UseCase; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
    // Check if device supports touch
    setIsTouchDevice('ontouchstart' in window);
  }, [isInView, controls]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) {
      setMousePosition({ x: 0.5, y: 0.5 });
    }
  };

  const rotateX = isTouchDevice ? 0 : mousePosition.y * 10 - 5; // Reduced rotation for better usability
  const rotateY = isTouchDevice ? 0 : mousePosition.x * 10 - 5; // Reduced rotation for better usability

  const handleExploreProducts = () => {
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    const event = new CustomEvent('updateProductFilter', {
      detail: { category: useCase.productCategory }
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
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.6,
            delay: index * 0.2,
            ease: "easeOut"
          }
        }
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.2s ease-out'
      }}
    >
      <div className={`${styles.content} ${useCase.className}`}>
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <motion.div
            className="absolute inset-0"
            animate={{
              scale: 1,
              filter: 'brightness(0.6)'
            }}
            whileHover={{
              scale: 1.05,
              filter: 'brightness(0.8)'
            }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={useCase.backgroundImage}
              alt={useCase.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={90}
              priority={index === 0}
              className="object-cover"
            />
          </motion.div>
        </div>

        <motion.div 
          className={styles.contentInner}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div 
            className={styles.iconContainer}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <span className={styles.icon} aria-hidden="true">
              {useCase.icon}
            </span>
          </motion.div>

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
                className="relative"
              >
                <motion.div
                  className="absolute -left-2 w-1 h-1 rounded-full bg-emerald-400"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                />
                {benefit}
              </motion.li>
            ))}
          </motion.ul>
          
          <motion.button
            onClick={handleExploreProducts}
            className={styles.exploreButton}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Explore Products</span>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function UseCasesSection() {
  return (
    <section className={styles.useCasesSection}>
      <motion.div
        className={styles.headerContainer}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.sectionTitle}>
          Find Your Perfect Solution
        </h2>
        <p className={styles.sectionDescription}>
          Discover our range of products tailored to your specific needs
        </p>
      </motion.div>

      <div className={styles.useCasesGrid}>
        {useCases.map((useCase, index) => (
          <UseCaseCard
            key={useCase.id}
            useCase={useCase}
            index={index}
          />
        ))}
      </div>
    </section>
  );
} 