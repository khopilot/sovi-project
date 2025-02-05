'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from './UseCases.module.css';

// Add type for custom CSS properties
type PatternStyle = React.CSSProperties & {
  '--s': string;
  '--c1': string;
  '--c2': string;
  '--_g': string;
};

const useCases = [
  {
    title: "For Muscle Pain",
    description: "Relief for active lifestyles",
    image: "/images/NB-Ointments1.jpg",
    className: "main",
    link: "/use-cases#muscle-pain"
  },
  {
    title: "For Stiffness",
    description: "Neck, shoulders & back relief",
    image: "/images/NB-ExtremeLinimentOil51.jpg",
    className: "tall",
    link: "/use-cases#stiffness"
  },
  {
    title: "For Daily Life",
    description: "Everyday comfort & wellness",
    image: "/images/NB-EnergizingLinimentOil2.jpg",
    className: "small",
    link: "/use-cases#daily-life"
  },
  {
    title: "For Sports",
    description: "Pre & post workout support",
    image: "/images/NB-MosquitoRepellent3.jpg",
    className: "small",
    link: "/use-cases#sports"
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CardContent = ({ useCase }: { useCase: typeof useCases[0] }) => (
  <Link href={useCase.link} className={styles.cardLink}>
    <div className={styles.cardContent}>
      <div className={styles.imageWrapper}>
        <Image
          src={useCase.image}
          alt={useCase.title}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 30vw"
        />
      </div>
      <div className={styles.cardOverlay}>
        <div className={styles.cardInfo}>
          <h3 className={styles.cardTitle}>{useCase.title}</h3>
          <p className={styles.description}>{useCase.description}</p>
        </div>
        <div className={styles.arrow}>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M5 12H19M19 12L12 5M19 12L12 19" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </Link>
);

export default function UseCases() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Initial SSR render
  if (!mounted) {
    return (
      <section className={styles.useCases}>
        <div className={styles.container}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>
              Use <span className={styles.brandText}>Naga Balm®</span>
            </h2>
            <p className={styles.subtitle}>Discover the perfect solution for your needs</p>
          </div>
          <div className={styles.grid}>
            {useCases.map((useCase, index) => (
              <CardContent key={index} useCase={useCase} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Client-side render with animations
  return (
    <section className={styles.useCases}>
      {/* Pattern Background */}
      <div 
        className={styles.backgroundPattern}
        style={{
          '--s': '150px',
          '--c1': '#FFD36F',
          '--c2': '#FFA500',
          '--_g': 'var(--c1) 0% 5%, var(--c2) 6% 15%, var(--c1) 16% 25%, var(--c2) 26% 35%, var(--c1) 36% 45%, var(--c2) 46% 55%, var(--c1) 56% 65%, var(--c2) 66% 75%, var(--c1) 76% 85%, var(--c2) 86% 95%, transparent 96%',
          background: `
            radial-gradient(50% 50% at 100% 0, var(--_g)),
            radial-gradient(50% 50% at 0 100%, var(--_g)),
            radial-gradient(50% 50%, var(--_g)),
            radial-gradient(50% 50%, var(--_g)) calc(var(--s) / 2) calc(var(--s) / 2)
            var(--c1)
          `,
          backgroundSize: 'var(--s) var(--s)'
        } as PatternStyle} 
      />
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Use <span className={styles.brandText}>Naga Balm®</span>
          </motion.h2>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover the perfect solution for your needs
          </motion.p>
        </div>

        <div className={styles.grid}>
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className={`${styles.card} ${styles[useCase.className]}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <CardContent useCase={useCase} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 