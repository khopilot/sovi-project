'use client'

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './HeroSection.module.css';

// Import ReactPlayer with no SSR
const ReactPlayer = dynamic(() => import('react-player'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-[#97D7E3] flex items-center justify-center rounded-2xl">
      <div className="animate-pulse">Loading video...</div>
    </div>
  ),
});

const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className={styles.heroSection}>
      {/* Background Pattern */}
      <div className={styles.backgroundPattern} />

      {/* Content Container */}
      <div className={styles.contentContainer}>
        {/* Left Side – Logo, Title, Text, and Contact Button */}
        <div className={styles.leftContent}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.logo}
          >
            <Image
              src="/images/Naga Balm__SecondaryLogomark_Primary.png"
              alt="Naga Balm Logo"
              width={200}
              height={100}
              className="object-contain"
              priority
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.title}
          >
            Experience the Magic of Naga Balm
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className={styles.description}
          >
            Discover our revolutionary blend of ancient wisdom and modern science – designed to soothe, heal, and rejuvenate your body and mind.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className={styles.buttonContainer}
          >
            <a href="#contact" className={styles.primaryButton}>
              Contact Us
            </a>
            <a href="#learn-more" className={styles.secondaryButton}>
              Learn More
            </a>
          </motion.div>
        </div>

        {/* Right Side – Video Player Card */}
        <div className={styles.rightContent}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={styles.videoCard}
          >
            {mounted && (
              <div className={styles.videoWrapper}>
                <ReactPlayer
                  url="https://www.facebook.com/nagabalmkh/videos/637876325250858/"
                  playing
                  loop
                  muted
                  width="100%"
                  height="100%"
                  style={{ borderRadius: '1.5rem', overflow: 'hidden' }}
                />
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className={styles.decorativeGradientTop}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className={styles.decorativeGradientBottom}
        />
      </div>
    </section>
  );
};

export default HeroSection; 