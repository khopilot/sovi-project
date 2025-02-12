'use client'

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';
import Link from 'next/link';

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className={styles.heroSection}>
      {isClient && (
        <div className={styles.videoBackground}>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className={styles.backgroundVideo}
          >
            <source src="/video/naga-balm.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      
      <div className={styles.overlay} />
      
      <div className={styles.heroContent}>
        <motion.div 
          className={styles.contentGrid}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.textContent}>
            <motion.div 
              className={styles.wordmarkContainer}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Image
                src="/images/png/Naga Balm_Primary_Wordmark_Primary.png"
                alt="Naga Balm"
                width={300}
                height={100}
                className={styles.wordmarkImage}
                priority
              />
            </motion.div>
            
            <motion.h1 
              className={styles.headline}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Say Goodbye to Pain
            </motion.h1>
            
            <motion.p 
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Naga Balm - we blend tradition with modern innovation, delivering clean pain relief solutions to soothe, relieve, and heal.
            </motion.p>
            
            <motion.div 
              className={styles.ctaContainer}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Link href="/products" className={styles.primaryButton}>
                Find Your Relief
              </Link>
              <Link href="/about" className={styles.secondaryButton}>
                Learn More
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {isClient && (
        <button 
          className={styles.soundControl}
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          )}
          <span className={styles.soundLabel}>
            {isMuted ? 'Unmute' : 'Mute'}
          </span>
        </button>
      )}
    </section>
  );
} 