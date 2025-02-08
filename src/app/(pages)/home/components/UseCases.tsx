'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from './UseCases.module.css';

const useCases = [
  {
    title: "For the Active Lifestyles",
    description: "Perform, recover, and stay in motion. Whether you're an athlete, fitness enthusiast, or someone who loves staying active, Naga Balm supports your movement by easing post-workout soreness, reducing muscle fatigue, and helping you recover faster. Perfect for sports, gym sessions, and physically demanding activities—so you can keep pushing your limits.",
    products: "Explore products like Naga Balm Energizing Pain Relief Spray, Naga Balm Extreme Liniment Oil, Naga Balm Fire, amongst others for your targeted relief.",
    image: "/images/use-case/3. For Sport.jpg",
    link: "/products#active"
  },
  {
    title: "For the Everyday Relief",
    description: "Soothe aches, tension, and stiffness from daily life. From long work hours and travel fatigue to household chores and minor strains, Naga Balm delivers fast-acting, natural relief. Whether it's back pain, joint stiffness, or general discomfort, our herbal-powered formula keeps you moving comfortably throughout your day. Naga Balm also delivers products that are suitable for the entire family.",
    products: "Explore products like Naga Balm Original, Naga Balm Inhaler, Naga Balm Roll-On, Naga Balm Mosquito Repellent, amongst others for your everyday support.",
    image: "/images/use-case/2. For Daily Use.jpg",
    link: "/products#daily"
  }
];

const UseCaseCard = ({ useCase }: { useCase: typeof useCases[0] }) => (
  <motion.div 
    className={styles.card}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className={styles.cardContent}>
      <div className={styles.imageWrapper}>
        <Image
          src={useCase.image}
          alt={useCase.title}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          quality={90}
        />
      </div>
      <div className={styles.cardOverlay}>
        <div className={styles.cardInfo}>
          <h3 className={styles.cardTitle}>{useCase.title}</h3>
          <p className={styles.description}>{useCase.description}</p>
          <p className={styles.products}>{useCase.products}</p>
          <Link href={useCase.link} className={styles.exploreButton}>
            Explore Products
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className={styles.arrowIcon}
            >
              <path 
                d="M5 12H19M19 12L12 5M19 12L12 19" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function UseCases() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className={styles.useCases}>
        <div className={styles.container}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>
              USE <span className={styles.brandText}>NAGA BALM</span>
            </h2>
            <div className={styles.logoWrapper}>
              <Image
                src="/images/Logo/Naga Balm_Primary_Logomark_Primary.png"
                alt="Naga Balm Logo"
                width={120}
                height={120}
                className={styles.logo}
                priority
              />
            </div>
            <p className={styles.subtitle}>Discover the perfect solution for your needs.</p>
          </div>
          <div className={styles.grid}>
            {useCases.map((useCase, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardContent}>
                  {/* Static content for SSR */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.useCases}>
      <div className={styles.container}>
        <motion.div 
          className={styles.titleWrapper}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            USE <span className={styles.brandText}>NAGA BALM</span>
          </h2>
          <div className={styles.logoWrapper}>
            <Image
              src="/images/Logo/Naga Balm_Primary_Logomark_Primary.png"
              alt="Naga Balm Logo"
              width={120}
              height={120}
              className={styles.logo}
              priority
            />
          </div>
          <p className={styles.subtitle}>Discover the perfect solution for your needs.</p>
        </motion.div>
        <div className={styles.grid}>
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index} useCase={useCase} />
          ))}
        </div>
      </div>
    </section>
  );
} 