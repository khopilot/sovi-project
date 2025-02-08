'use client';

import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styles from './VideoGallery.module.css';

const VideoPlayer = dynamic(
  () => import('@/app/(pages)/home/components/VideoPlayer'),
  { ssr: false }
);

interface Video {
  id: string;
  title: string;
  videoUrl: string;
}

export default function VideoGallery({ videos }: { videos: Video[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextVideo = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }
  };

  const previousVideo = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    }
  };

  const handleVideoLoad = () => {
    setIsTransitioning(false);
  };

  return (
    <section className={styles.container}>
      <div className={styles.carouselHeader}>
        <h2 className={styles.title}>Featured Videos</h2>
        <p className={styles.subtitle}>Watch our latest content</p>
      </div>

      <div className={styles.carouselContainer}>
        <button 
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={previousVideo}
          aria-label="Previous video"
        >
          ←
        </button>

        <div className={styles.carouselTrack} ref={carouselRef}>
          <div 
            className={styles.carouselSlide}
            style={{ opacity: isTransitioning ? 0.5 : 1 }}
          >
            <VideoPlayer 
              url={videos[currentIndex].videoUrl}
              onLoad={handleVideoLoad}
              autoplay={isInView}
            />
            <div className={styles.videoInfo}>
              <h3>{videos[currentIndex].title}</h3>
            </div>
          </div>
        </div>

        <button 
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={nextVideo}
          aria-label="Next video"
        >
          →
        </button>
      </div>

      <div className={styles.indicators}>
        {videos.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ''}`}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentIndex(index);
              }
            }}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}