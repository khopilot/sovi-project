'use client'

import Image from 'next/image';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      {/* Background Logo */}
      <div className={styles.backgroundLogo}>
        <Image
          src="/images/Logo/Naga Balm__Brandmark_Fire.png"
          alt="Naga Balm Brandmark"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>

      {/* Decorative Gradients */}
      <div className={styles.decorativeGradientTop} />
      <div className={styles.decorativeGradientBottom} />

      {/* Main Content */}
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <Image
            src="/images/png/Naga Balm_Primary_Wordmark_White.png"
            alt="Naga Balm Logo"
            width={300}
            height={100}
            className="object-contain mb-8"
            priority
          />
          <h1 className="font-karla text-headline text-gray-800 uppercase tracking-wide mb-6">
            Experience Ancient Wisdom, Feel Modern Relief
          </h1>
          <p className="font-karla text-subheading text-gray-700 mb-4">
            Discover the power of traditional Cambodian healing, reimagined for today&apos;s wellness needs. Our unique blend of natural ingredients delivers fast-acting relief and long-lasting recovery.
          </p>
          <p className="font-karla text-subheading text-gray-700 mb-8">
            Whether you&apos;re an athlete, busy professional, or seeking natural pain relief, Naga Balm&apos;s time-tested formula works with your body to soothe, heal, and revitalize.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className={styles.primaryButton}>
              Find Your Relief Today
            </a>
            <a href="#learn-more" className={styles.secondaryButton}>
              Discover Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 