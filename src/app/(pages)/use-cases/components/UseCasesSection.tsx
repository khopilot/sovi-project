'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './UseCasesSection.module.css';

const useCases = [
  {
    title: "For Muscle Pain",
    description: "An active lifestyle can sometimes bring about muscle pain. These aches may have various origins, but they all lead to discomfort that can hold you back. To help you keep moving, Naga Balm® offers a discreet patch that provides long-lasting relief—perfect for both day and night.",
    icon: "🏃‍♂️",
    benefits: [
      "Long-lasting relief",
      "Discreet application",
      "Day and night use",
      "Non-invasive solution"
    ],
    images: [
      "/images/NB-Ointments1.jpg",
      "/images/NB-OintmentsBox1.jpg",
      "/images/NB-OintmentsBox3.jpg",
      "/images/about-grid/430720496_388817580758751_2341257138742686116_n.jpg"
    ]
  },
  {
    title: "For Stiffness in the Neck, Shoulders, and Back",
    description: "Regardless of your lifestyle, you may occasionally experience stiffness in your upper back, neck, and shoulders. For many, these recurring tensions can limit your ability to fully enjoy life. Naga Balm® presents an unobtrusive solution with its innovative patch, designed to deliver continuous relief whether you're at work or at rest.",
    icon: "💆‍♂️",
    benefits: [
      "Targeted relief",
      "Continuous comfort",
      "Work-friendly solution",
      "Natural movement support"
    ],
    images: [
      "/images/NB-RollOn.jpg",
      "/images/NB-Inhaler-RollOn2.jpg",
      "/images/about-grid/419733320_348958818077961_8508059249082127494_n.jpg",
      "/images/about-grid/419002545_348958694744640_5701280740609446071_n.jpg"
    ]
  },
  {
    title: "For Daily Life",
    description: "Our everyday routines can sometimes generate stress and tension. Extended periods of standing, repetitive movements, or long hours at a desk can lead to discomfort in the lower back, neck, or shoulders. No matter the source, Naga Balm® products are here to support you, easing tension so you can embrace every moment with ease.",
    icon: "🌟",
    benefits: [
      "Stress relief",
      "Tension reduction",
      "Everyday comfort",
      "Versatile application"
    ],
    images: [
      "/images/about-grid/391619663_294858813487962_4740528239290929594_n.jpg",
      "/images/about-grid/370867629_262382400068937_5776579610531504209_n.jpg",
      "/images/NB-MosquitoRepellent2.jpg",
      "/images/NB-MosquitoRepellent4.jpg"
    ]
  },
  {
    title: "For Sports and Exercise",
    description: "Whether you engage in regular training or enjoy occasional workouts, sports can be demanding. A proper warm-up and recovery are essential to prevent strain. Naga Balm® supports your active lifestyle through a range of products—from massage balms to lotions and fluids—allowing you to choose the formula that best suits your needs.",
    icon: "🏋️‍♂️",
    benefits: [
      "Pre-workout preparation",
      "Post-exercise recovery",
      "Multiple product options",
      "Athletic performance support"
    ],
    images: [
      "/images/about-grid/430720496_388817580758751_2341257138742686116_n.jpg",
      "/images/NB-Ointments1.jpg",
      "/images/NB-OintmentsBox1.jpg",
      "/images/NB-OintmentsBox3.jpg"
    ]
  }
];

export default function UseCasesSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden -mt-[88px]">
        {/* Background Pattern */}
        <div className="absolute inset-0" style={{
          backgroundColor: 'rgba(223, 219, 229, 0.1)',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%23FA4614' fill-opacity='0.4' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E")`
        }}>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#FA4614] mb-6">
            <span className="block mb-2">Real Stories,</span>
            <span className="block">Real Results</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
            Discover how Naga Balm has transformed lives through natural healing. 
            From athletes to everyday heroes, these are their stories.
          </p>

          {/* Simple CTA Button */}
          <button className="px-8 py-4 bg-[#FA4614] text-white rounded-full font-semibold hover:bg-[#e13d0f] transition-all duration-300 transform hover:scale-105 shadow-lg">
            Explore Use Cases
          </button>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg 
              className="w-6 h-6 text-[#FA4614] opacity-75" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Rest of the content */}
      <section className={styles.useCasesSection}>
        <motion.h1
          className={styles.mainTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          How to Use Naga Balm®
        </motion.h1>

        {useCases.map((useCase, index) => (
          <motion.div
            key={index}
            className={styles.useCase}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.content}>
              <div className={styles.iconContainer}>
                <span className={styles.icon} aria-hidden="true">
                  {useCase.icon}
                </span>
              </div>
              <h2 className={styles.title}>{useCase.title}</h2>
              <p className={styles.description}>{useCase.description}</p>
              <ul className={styles.benefits}>
                {useCase.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div className={styles.imageGrid}>
              {useCase.images.map((image, idx) => (
                <motion.div
                  key={idx}
                  className={styles.imageContainer}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Image
                    src={image}
                    alt={`${useCase.title} - Image ${idx + 1}`}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>
    </>
  );
} 