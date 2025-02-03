'use client'

import React from 'react';
import { motion } from 'framer-motion';
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
    description: "An active lifestyle can sometimes bring about muscle pain. These aches may have various origins, but they all lead to discomfort that can hold you back. To help you keep moving, Naga Balm® offers a discreet patch that provides long-lasting relief—perfect for both day and night.",
    icon: "🏃‍♂️",
  },
  {
    title: "For Stiffness in the Neck, Shoulders, and Back",
    description: "Regardless of your lifestyle, you may occasionally experience stiffness in your upper back, neck, and shoulders. For many, these recurring tensions can limit your ability to fully enjoy life. Naga Balm® presents an unobtrusive solution with its innovative patch, designed to deliver continuous relief whether you're at work or at rest.",
    icon: "💆‍♂️",
  },
  {
    title: "For Daily Life",
    description: "Our everyday routines can sometimes generate stress and tension. Extended periods of standing, repetitive movements, or long hours at a desk can lead to discomfort in the lower back, neck, or shoulders. No matter the source, Naga Balm® products are here to support you, easing tension so you can embrace every moment with ease.",
    icon: "🌟",
  },
  {
    title: "For Sports and Exercise",
    description: "Whether you engage in regular training or enjoy occasional workouts, sports can be demanding. A proper warm-up and recovery are essential to prevent strain. Naga Balm® supports your active lifestyle through a range of products—from massage balms to lotions and fluids—allowing you to choose the formula that best suits your needs.",
    icon: "🏋️‍♂️",
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

export default function UseCases() {
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
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Use Naga Balm®
        </motion.h2>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={cardVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <div className={styles.iconContainer}>
                <span className={styles.icon} aria-hidden="true">
                  {useCase.icon}
                </span>
              </div>
              <h3 className={styles.cardTitle}>{useCase.title}</h3>
              <p className={styles.description}>{useCase.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 