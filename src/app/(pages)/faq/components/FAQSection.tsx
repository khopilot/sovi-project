'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import styles from './FAQSection.module.css';

const faqs = [
  {
    question: "What is Naga Balm?",
    answer: "Naga Balm is a brand of premium, petroleum-free topical pain relief solutions. Explore our products at "
  },
  {
    question: "How does Naga Balm Work?",
    answer: `Through a powerful blend of herbal ingredients, Naga Balm products work to provide pain relief to targeted muscles, joints, through three key bio-mechanisms:

1. Overriding pain signals by activating cooling and warming receptors on the skin;
2. Reducing inflammation, swelling, and stiffness in affected tissues;
3. Stimulating blood circulation and promoting recovery by increasing oxygen and nutrient delivery to affected areas

Whether in balm, oil or spray format, Naga Balm products deliver the same relief.`
  },
  {
    question: "How Do I Use Naga Balm?",
    answer: `Depending on the format and product, Naga Balm can be applied in a number of ways. Firstly, please read the packaging instructions. Apply liberally onto the affected area as needed.

If using the Inhaler, insert the Inhaler into each nostril and take a light inhale.`
  },
  {
    question: "Who Can Benefit from Naga Balm?",
    answer: "Naga Balm is designed for anyone who needs fast, effective relief from pain, tension, and everyday discomfort without compromise to health. Whether you're active, dealing with chronic pain, or simply looking for natural relief, Naga Balm® has a solution for you."
  },
  {
    question: "How often can Naga Balm be used?",
    answer: "Naga Balm can be applied 3-4 times daily, unless instructed otherwise by a healthcare professional."
  },
  {
    question: "Has Naga Balm Been Clinically Tested and Is It Considered A Valid Medical Treatment?",
    answer: `All Naga Balm products are independently and rigorously lab-tested to ensure conformity with stated ingredients and to ensure that there are no microbiological contaminants.

Naga Balm is designed as a complementary, non-invasive support for an active and pain-free lifestyle. Formulated with herbal ingredients that have been tried, tested, and trusted for generations, it provides natural relief that has stood the test of time. While on its own cannot be considered a medical treatment, it can be used alongside other wellness practices to help manage everyday discomfort, especially as a frontline first-to-act tool.

If you have specific medical concerns, we recommend consulting a healthcare professional before use.`
  },
  {
    question: "Can Children Use Naga Balm?",
    answer: `Most Naga Balm products are advised for children aged 12 and older.
The Naga Balm Original can be used for children aged 6 and older.
The Naga Balm 20% Picaridin Mosquito Repellent can be used on children 6 months (yes, months!) and older.`
  },
  {
    question: "Is Naga Balm Suitable for Sensitive Skin or Pregnancy?",
    answer: `Naga Balm is formulated with herbal, petroleum-free ingredients and is generally gentle on the skin. The base oil is coconut oil, which also provides deep hydration and quick absorption. However, if you have sensitive skin, we recommend performing a patch test before full application, as some essential oils may react adversely. Should any irritation occur, please discontinue use and consult a healthcare professional.

If pregnant or breastfeeding, ask a health professional before use.`
  },
  {
    question: "Can I Use Naga Balm During Physical Activities?",
    answer: "Absolutely. Whether you're preparing for a workout, needing a touch up, or recovering afterward, Naga Balm can help activate the body, reduce muscle tension and speed up recovery, keeping you ready for whatever your day brings."
  },
  {
    question: "How Should I Store Naga Balm?",
    answer: "To maintain its quality, store Naga Balm® in a cool, dry place away from direct sunlight under 30°C (86°F ). Always keep products out of reach of children."
  },
  {
    question: "Are There Any Side Effects?",
    answer: "Naga Balm products are generally well-tolerated. However, individual reactions may vary. If you experience any irritation or discomfort, please stop using the product and consult a healthcare professional."
  },
  {
    question: "Does Naga Balm contain any NSAIDs?",
    answer: "No, Naga Balm does not contain any Non-Steroidal Anti-Inflammatory Drugs (NSAIDs). Instead, we opt for an all-herbal formulation."
  },
  {
    question: "Where Can I Purchase Naga Balm?",
    answer: "If you're in Cambodia, you can order Naga Balm directly from our Telegram, or you can purchase at one of our retail partner locations. For our international inquiries, we're working hard to make products available near you!"
  },
  {
    question: "Is Naga Balm available for B2B Partnerships for Distribution and Wholesale?",
    answer: "If you're interested in distribution or wholesale opportunities, please "
  }
];

const FAQItem = ({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  // Special handling for FAQs that contain links
  const isFirstFAQ = question === "What is Naga Balm?";
  const isB2BFAQ = question === "Is Naga Balm available for B2B Partnerships for Distribution and Wholesale?";
  
  // Format the answer text to handle line breaks properly
  const formattedAnswer = answer.split('\n').map((line, index, array) => {
    if (isFirstFAQ) {
      return (
        <React.Fragment key={index}>
          {line}
          <Link href="/products" className={styles.inlineLink}>our products page</Link>
          {index < array.length - 1 && <br />}
        </React.Fragment>
      );
    }
    if (isB2BFAQ) {
      return (
        <React.Fragment key={index}>
          {line}
          <Link href="/contact" className={styles.inlineLink}>send us a message</Link>
          {" - we would love to talk."}
          {index < array.length - 1 && <br />}
        </React.Fragment>
      );
    }
    return (
      <React.Fragment key={index}>
        {line}
        {index < array.length - 1 && <br />}
      </React.Fragment>
    );
  });

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
            {formattedAnswer}
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
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <motion.div
              className={styles.header}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className={styles.title}>Any questions?</h1>
              <p className={styles.subtitle}>We got you.</p>
              <p className={styles.description}>
                Find answers to commonly asked questions about Naga Balm. 
                Can&apos;t find what you&apos;re looking for? Feel free to contact us.
              </p>
            </motion.div>
          </div>

          <motion.div
            className={styles.rightColumn}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.faqList}>
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 