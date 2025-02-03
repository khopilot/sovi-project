'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import styles from './VideoGallery.module.css';
import dynamic from 'next/dynamic';

const DynamicVideoPlayer = dynamic(() => import('@/app/(pages)/home/components/VideoPlayer'), {
  ssr: false,
  loading: () => (
    <div style={{ aspectRatio: '9/16', background: '#f0f0f0', borderRadius: '8px' }} />
  ),
});

interface Video {
  id: string;
  title: string;
  videoUrl: string;
  description: string;
  likes: number;
  views: number;
}

interface VideoGalleryProps {
  videos: Video[];
}

export default function VideoGallery({ videos }: VideoGalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [windowWidth, setWindowWidth] = useState(0);

  const getCardDimensions = () => {
    if (windowWidth <= 480) {
      return { width: 200, height: 357 };
    }
    return { width: 267, height: 476 };
  };

  const dimensions = getCardDimensions();
  const gap = windowWidth <= 768 ? 20 : 40;

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavigation = (direction: 'left' | 'right') => {
    if (!trackRef.current) return;
    
    const scrollAmount = direction === 'left' 
      ? -trackRef.current.offsetWidth 
      : trackRef.current.offsetWidth;
    
    trackRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  const handleDotClick = (index: number) => {
    const slideWidth = dimensions.width + gap;
    controls.start({
      x: -index * slideWidth,
      transition: { duration: 0.5, ease: 'easeInOut' }
    });
    setActiveIndex(index);
  };

  const handleVideoClick = (video: Video) => {
    document.body.style.overflow = 'hidden';
    setSelectedVideo(video);
  };

  const closeModal = () => {
    document.body.style.overflow = '';
    setSelectedVideo(null);
  };

  return (
    <section className={styles.container}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Watch Us</h2>
        <p className={styles.sectionDescription}>
          Discover how Naga Balm helps athletes and everyday people achieve natural pain relief
        </p>
      </div>

      <div className={styles.carouselContainer}>
        <button
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={() => handleNavigation('left')}
          aria-label="Previous videos"
        >
          ‹
        </button>

        <div
          ref={trackRef}
          className={styles.carouselTrack}
        >
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              className={`${styles.carouselSlide} ${index === activeIndex ? styles.activeSlide : ''}`}
              onClick={() => handleVideoClick(video)}
              style={{ minWidth: `${dimensions.width}px` }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.videoCard}>
                <div className={styles.thumbnailContainer}>
                  <DynamicVideoPlayer
                    url={video.videoUrl}
                    width={dimensions.width}
                    height={dimensions.height}
                  />
                </div>
                <div className={styles.videoInfo}>
                  <h3 className={styles.videoTitle}>{video.title}</h3>
                  <div className={styles.videoStats}>
                    <span>{video.views.toLocaleString()} views</span>
                    <span>•</span>
                    <span>{video.likes.toLocaleString()} likes</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <button
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={() => handleNavigation('right')}
          aria-label="Next videos"
        >
          ›
        </button>

        <div className={styles.dotContainer}>
          {videos.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${activeIndex === index ? styles.activeDot : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className={styles.modal}
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.3, bounce: 0.1 }}
            >
              <button
                className={styles.closeButton}
                onClick={closeModal}
                aria-label="Close video"
              >
                ×
              </button>
              <div className={styles.videoWrapper}>
                <DynamicVideoPlayer
                  url={selectedVideo.videoUrl}
                  width={267}
                  height={476}
                />
              </div>
              <div className={styles.modalInfo}>
                <h2>{selectedVideo.title}</h2>
                <p>{selectedVideo.description}</p>
                <div className={styles.modalStats}>
                  <span>{selectedVideo.views.toLocaleString()} views</span>
                  <span>•</span>
                  <span>{selectedVideo.likes.toLocaleString()} likes</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}