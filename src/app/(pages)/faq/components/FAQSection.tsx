'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './FAQSection.module.css';

const faqs = [
  {
    question: "What is Naga Balm®?",
    answer: "Naga Balm® is a premium, natural herbal remedy that unites Cambodia's rich traditional healing practices with modern scientific innovation. Designed to relieve muscle discomfort, ease stiffness, and alleviate tension, it's a trusted solution for both everyday wellness and active lifestyles around the world."
  },
  {
    question: "How Do I Use Naga Balm®?",
    answer: "For immediate relief, apply a thin layer of Naga Balm® to the affected area and massage gently until it's fully absorbed. For long-lasting support, our innovative patch delivers continuous relief and can be comfortably worn day or night."
  },
  {
    question: "Who Can Benefit from Naga Balm®?",
    answer: "Our products are ideal for anyone experiencing occasional muscle pain, stiffness, or stress—whether you're part of our local Khmer community or an international customer. Naga Balm® is also a great ally for athletes and professionals who demand optimal performance and recovery."
  },
  {
    question: "Is Naga Balm® Suitable for Sensitive Skin?",
    answer: "Naga Balm® is formulated with natural ingredients and is generally gentle. However, if you have sensitive skin, we recommend performing a patch test before full application. Should any irritation occur, please discontinue use and consult a healthcare professional."
  },
  {
    question: "Can I Use Naga Balm® During Physical Activities?",
    answer: "Absolutely. Whether you're preparing for a workout or recovering afterward, Naga Balm® can help reduce muscle tension and speed up recovery, keeping you ready for whatever your day brings."
  },
  {
    question: "How Is Naga Balm® Made?",
    answer: "Proudly produced in Cambodia, Naga Balm® harnesses time-honored Khmer wellness traditions alongside modern research. We adhere to strict quality controls and international safety standards to ensure that every product delivers effective, reliable relief."
  },
  {
    question: "Where Can I Purchase Naga Balm®?",
    answer: "You can order Naga Balm® directly from our official website or through our network of selected retail partners. For our international B2B clients interested in distribution or wholesale opportunities, please visit our dedicated B2B inquiry page or contact our sales team directly."
  },
  {
    question: "Do You Offer B2B Partnerships?",
    answer: "Yes. We welcome partnerships with international distributors, retailers, and wellness professionals. Our B2B program provides competitive pricing, comprehensive marketing support, and personalized service to help you successfully introduce Naga Balm® to your market."
  },
  {
    question: "How Should I Store Naga Balm®?",
    answer: "To maintain its quality, store Naga Balm® in a cool, dry place away from direct sunlight. Always keep the product out of reach of children."
  },
  {
    question: "Are There Any Side Effects?",
    answer: "Naga Balm® is made with natural ingredients and is generally well-tolerated. However, individual reactions may vary. If you experience any irritation or discomfort, please stop using the product and consult a healthcare professional."
  },
  {
    question: "Where Can I Learn More About Naga Balm®?",
    answer: "For further details on the science, ingredients, and traditional inspirations behind Naga Balm®, please visit our \"About Us\" or \"Research\" sections on our website. We're committed to transparency and quality, ensuring that our products meet the highest standards of wellness and efficacy."
  },
  {
    question: "Who Do I Contact for More Information?",
    answer: "Whether you're a consumer with a question about usage or an international partner interested in collaboration, our dedicated customer support team is here to help. Reach out via our contact page, and we'll be happy to assist you."
  }
];

const FAQItem = ({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <motion.div
      className={styles.faqItem}
      initial={false}
    >
      <button
        className={`${styles.question} ${isOpen ? styles.open : ''}`}
        onClick={onToggle}
      >
        <span>{question}</span>
        <motion.span
          className={styles.icon}
          animate={{ rotate: isOpen ? 180 : 0 }}
        >
          ↓
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className={styles.answer}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={styles.faqSection}>
      <div className={styles.hero}>
        <Image
          src="/images/about-grid/430720496_388817580758751_2341257138742686116_n.jpg"
          alt="Naga Balm FAQ Hero"
          fill
          priority
          quality={100}
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
        <motion.h1
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Frequently Asked Questions
          <br />
          About Naga Balm®
        </motion.h1>
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.faqList}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
} 