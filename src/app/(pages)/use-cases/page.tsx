'use client';

import React from 'react';
import { Viewport } from 'next';
import UseCasesSection from './components/UseCasesSection';
import styles from './page.module.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
};

export default function UseCasesPage() {
  return (
    <main className={styles.main}>
      <UseCasesSection />
    </main>
  );
} 