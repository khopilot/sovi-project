'use client'

import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import styles from './HeroSection.module.css';

const VideoPlaceholder = () => (
  <div className={styles.videoPlaceholder}>
    <Image
      src="/images/video-thumbnail.jpg"
      alt="Video thumbnail"
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      quality={90}
      priority
      className={styles.thumbnailImage}
    />
    <div className={styles.loadingOverlay}>
      <div className={styles.loadingSpinner} />
    </div>
  </div>
);

// Create a separate component for the Facebook Video iframe
const FacebookVideo = dynamic(
  () =>
    Promise.resolve(() => (
      <iframe
        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fnagabalmkh%2Fvideos%2F637876325250858%2F&show_text=false"
        className={styles.videoIframe}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        loading="lazy"
      />
    )),
  {
    ssr: false,
    loading: () => <VideoPlaceholder />
  }
);

const FacebookVideoEmbed: React.FC = () => {
  return (
    <div className={styles.fbVideoWrapper}>
      <div className={styles.videoContainer}>
        <Suspense fallback={<VideoPlaceholder />}>
          <FacebookVideo />
        </Suspense>
      </div>
    </div>
  );
};

const HeroSection: React.FC = () => {
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
            <FacebookVideoEmbed />
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