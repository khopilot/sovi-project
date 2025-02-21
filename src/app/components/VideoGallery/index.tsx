'use client';

import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './VideoGallery.module.css';

// Dynamically import VideoPlayer with no SSR
const VideoPlayer = dynamic(
  () => import('@/app/(pages)/home/components/VideoPlayer'),
  { ssr: false }
);

interface Video {
  id: string;
  title: string;
  videoUrl: string;
  description: string;
  thumbnailUrl?: string;
}

export default function VideoGallery({ videos }: { videos: Video[] }) {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const openModal = (video: Video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className={styles.container}>
      <div className={styles.backgroundPattern} />
      <div className={styles.contentContainer}>
        <div className={styles.header}>
          <motion.div 
            className={styles.logoWrapper}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/Naga Balm__SecondaryLogomark_Black.png"
              alt="Naga Balm Logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience Our Story
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover the power of traditional Cambodian healing through our collection of stories, testimonials, and expert insights. See how Naga Balm is making a difference in people&apos;s lives across the country.
          </motion.p>
        </div>

        <motion.div 
          className={styles.mosaicGrid}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {videos.slice(0, 6).map((video, index) => (
            <motion.div
              key={video.id}
              className={`${styles.mosaicItem} ${styles[`item${index + 1}`]}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openModal(video)}
            >
              <div className={styles.thumbnailWrapper}>
                {video.thumbnailUrl ? (
                  <Image
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className={styles.thumbnailImage}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className={styles.placeholderThumbnail}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.placeholderIcon}>
                      <path d="M21 12c0 1.1-.9 2-2 2h-2v2c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2v-2H3c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h2V3c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v2h2c1.1 0 2 .9 2 2v5zm-4-2V5c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-5zm-1 0h-8V6h8v4z" fill="currentColor"/>
                    </svg>
                  </div>
                )}
                <div className={styles.mosaicContent}>
                  <div className={styles.playIcon}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5v14l11-7z" fill="currentColor"/>
                    </svg>
                  </div>
                  <h3 className={styles.videoTitle}>{video.title}</h3>
                  <p className={styles.videoDescription}>{video.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {isModalOpen && selectedVideo && (
            <motion.div 
              className={styles.modal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className={styles.modalOverlay} onClick={closeModal} />
              <motion.div 
                className={styles.modalContent}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              >
                <button className={styles.closeButton} onClick={closeModal}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className={styles.modalVideoWrapper}>
                  <VideoPlayer 
                    url={selectedVideo.videoUrl} 
                    autoplay={true}
                  />
                </div>
                <div className={styles.modalInfo}>
                  <h3>{selectedVideo.title}</h3>
                  <p>{selectedVideo.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}