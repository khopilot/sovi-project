'use client';

import React from 'react';
import UseCasesSection from './components/UseCasesSection';
import styles from './page.module.css';

export default function UseCasesPage() {
  return (
    <main className={styles.main}>
      <UseCasesSection />
    </main>
  );
} 