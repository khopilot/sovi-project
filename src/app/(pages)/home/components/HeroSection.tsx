'use client'

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import styles from './HeroSection.module.css';

// Dynamically import ReactPlayer to avoid hydration issues
const ReactPlayer = dynamic(() => import('react-player'), {
  ssr: false, // Disable server-side rendering
});

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      {/* Background Pattern */}
      <div className={styles.backgroundPattern}>
        <Image
          src="/images/Naga Balm Element (Cloud)/Background 3.png"
          alt="Background Pattern"
          fill
          quality={100}
          sizes="100vw"
          style={{ 
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          priority
        />
      </div>

      {/* Background Brandmark */}
      <div className={styles.backgroundBrandmark}>
        <Image
          src="/images/Logo/Naga Balm__Brandmark_Fire.png"
          alt="Naga Balm Brandmark"
          width={600}
          height={600}
          className={styles.brandmarkImage}
          priority
        />
      </div>

      {/* Top Right Cloud */}
      <div className={styles.topRightCloud}>
        <Image
          src="/images/Naga Balm Element (Cloud)/Element 4.png"
          alt="Decorative Cloud"
          width={300}
          height={180}
          className={styles.cloudImage}
          priority
        />
      </div>

      {/* Wave Pattern */}
      <div className={styles.wavePattern}>
        <Image
          src="/images/Naga Balm Element (Cloud)/Element 1.png"
          alt="Wave Pattern"
          width={1920}
          height={120}
          className={styles.waveImage}
          priority
        />
      </div>

      {/* Hero Content Container */}
      <div className={styles.heroContent}>
        <div className={styles.contentGrid}>
          {/* Text Content */}
          <div className={styles.textContent}>
            <h1 className={styles.headline}>
              Say Goodbye to Pain
            </h1>
            <div className={styles.wordmarkContainer}>
              <Image
                src="/images/png/Naga Balm_Primary_Wordmark_Primary.png"
                alt="Naga Balm"
                width={300}
                height={80}
                className={styles.wordmarkImage}
                priority
              />
            </div>
            <p className={styles.description}>
              Naga Balm - we blend tradition with modern innovation, delivering clean pain relief solutions to soothe, relieve, and heal.
            </p>
            <div className={styles.ctaContainer}>
              <a href="#relief" className={styles.primaryButton}>
                Find Your Relief
              </a>
              <a href="#learn" className={styles.secondaryButton}>
                Learn More
              </a>
            </div>
          </div>

          {/* Video Content */}
          <div className={styles.videoContainer}>
            <div className={styles.videoWrapper}>
              <Suspense fallback={<div className={styles.videoPlaceholder} />}>
                <ReactPlayer
                  url="/videos/naga-showcase.mp4"
                  width="100%"
                  height="100%"
                  playing
                  loop
                  muted
                  playsinline
                  className={styles.reactPlayer}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 