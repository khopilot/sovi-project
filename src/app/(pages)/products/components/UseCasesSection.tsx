'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation, useDragControls } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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

const UseCaseCard = ({ useCase, index, isActive }: { useCase: UseCase; index: number; isActive: boolean }) => {
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

  const rotateX = isTouchDevice ? 0 : mousePosition.y * 20 - 10;
  const rotateY = isTouchDevice ? 0 : mousePosition.x * 20 - 10;

  const handleExploreProducts = () => {
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    const event = new CustomEvent('updateProductFilter', {
      detail: { useCase: useCase.id }
    });
    window.dispatchEvent(event);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`${styles.useCase} ${isActive ? styles.active : ''}`}
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
              scale: isActive ? 1.1 : 1,
              filter: isActive ? 'brightness(0.8)' : 'brightness(0.6)'
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
            whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
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

interface DragEndInfo {
  offset: {
    x: number;
    y: number;
  };
  velocity: {
    x: number;
    y: number;
  };
}

export default function UseCasesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const dragControls = useDragControls();

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current || !touchStart) return;

    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;
    
    if (Math.abs(diff) > 50) { // Minimum swipe distance
      const direction = diff > 0 ? 1 : -1;
      const newIndex = Math.max(0, Math.min(activeIndex + direction, useCases.length - 1));
      scrollToIndex(newIndex);
      setTouchStart(0);
    }
  };

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const cards = container.children;
      if (cards[index]) {
        const cardWidth = cards[0].clientWidth;
        const gap = parseInt(window.getComputedStyle(container).gap);
        const scrollPosition = index * (cardWidth + gap);
        
        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
        setActiveIndex(index);
      }
    }
  };

  const handleScroll = () => {
    if (containerRef.current && !isDragging) {
      const container = containerRef.current;
      const scrollPosition = container.scrollLeft;
      const cardWidth = container.children[0].clientWidth;
      const gap = parseInt(window.getComputedStyle(container).gap);
      const newIndex = Math.round(scrollPosition / (cardWidth + gap));
      setActiveIndex(newIndex);
    }
  };

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: DragEndInfo) => {
    setIsDragging(false);
    if (containerRef.current) {
      const container = containerRef.current;
      const cardWidth = container.children[0].clientWidth + 32;
      const delta = info.offset.x;
      
      if (Math.abs(delta) > cardWidth / 3) {
        const newIndex = delta > 0 
          ? Math.max(activeIndex - 1, 0)
          : Math.min(activeIndex + 1, useCases.length - 1);
        scrollToIndex(newIndex);
      } else {
        scrollToIndex(activeIndex);
      }
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
        <h2 className={styles.sectionTitle}>
          Find Your Perfect Solution
        </h2>
        <p className={styles.sectionDescription}>
          Discover our range of products tailored to your specific needs
        </p>
      </motion.div>

      <div className="relative">
        <motion.div
          ref={containerRef}
          className={styles.useCasesContainer}
          onScroll={handleScroll}
          drag={isTouchDevice ? false : "x"}
          dragControls={dragControls}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          whileTap={{ cursor: "grabbing" }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={useCase.id}
              useCase={useCase}
              index={index}
              isActive={index === activeIndex}
            />
          ))}
        </motion.div>

        {/* Navigation Dots - Show only on mobile */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 md:hidden">
          {useCases.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={styles.navigationDot}
              aria-label={`Go to slide ${index + 1}`}
            >
              <motion.div
                className={`w-full h-full rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-emerald-500 scale-125' 
                    : 'bg-emerald-200'
                }`}
                whileTap={{ scale: 0.8 }}
              />
            </button>
          ))}
        </div>

        {/* Navigation Arrows - Hide on mobile */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 hidden md:flex justify-between pointer-events-none">
          <motion.button
            onClick={() => scrollToIndex(Math.max(activeIndex - 1, 0))}
            className={`p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg pointer-events-auto transition-opacity duration-300 ${
              activeIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            disabled={activeIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </motion.button>
          <motion.button
            onClick={() => scrollToIndex(Math.min(activeIndex + 1, useCases.length - 1))}
            className={`p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg pointer-events-auto transition-opacity duration-300 ${
              activeIndex === useCases.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            disabled={activeIndex === useCases.length - 1}
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </motion.button>
        </div>
      </div>
    </section>
  );
} 