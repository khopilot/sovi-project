'use client';

import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './VideoGallery.module.css';
import dynamic from 'next/dynamic';

const DynamicVideoPlayer = dynamic(
  () => import('@/app/(pages)/home/components/VideoPlayer'),
  { 
    ssr: false,
    loading: () => (
      <div className={styles.videoPlaceholder}>
        <div className={styles.loadingSpinner} />
      </div>
    )
  }
);

export default function VideoGallery({ videos }: { videos: Array<{
  id: string;
  title: string;
  videoUrl: string;
  description: string;
}> }) {
  // Filter out videos at indices 0, 9, and 13
  const filteredVideos = videos.filter((_, index) => 
    index !== 0 && index !== 10 && index !== 14 && index !== 20 && index !== 13
  );
  
  const trackRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [activeIndex, setActiveIndex] = useState(7); // Start with video #8 (index 7)
  const [selectedVideo, setSelectedVideo] = useState<null | typeof videos[0]>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Use useLayoutEffect to avoid hydration mismatch
  useLayoutEffect(() => {
    setIsClient(true);
  }, []);

  // Add scroll snap detection
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const slideWidth = track.offsetWidth;
      const newIndex = Math.round(track.scrollLeft / slideWidth);
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    track.addEventListener('scroll', handleScroll);
    return () => track.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  // Don't render anything during SSR
  if (!isClient) {
    return null;
  }

  const handleSlideChange = (index: number) => {
    if (!trackRef.current) return;
    setActiveIndex(index);
    const slideWidth = trackRef.current.offsetWidth;
    trackRef.current.scrollTo({
      left: index * slideWidth,
      behavior: 'smooth'
    });
  };

  const handleVideoClick = (video: typeof videos[0], e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    setSelectedVideo(video);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setIsFullScreen(false);
    document.body.style.overflow = '';
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <section className={styles.container}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Experience Natural Relief</h2>
        <p className={styles.sectionDescription}>
          See how Naga Balm brings traditional healing to modern lifestyles
        </p>
      </div>

      <div className={styles.carouselWrapper}>
        <>
          <div className={styles.navigationButtons}>
            <button
              onClick={() => handleSlideChange(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              className={styles.navButton}
              aria-label="Previous video"
            >
              ←
            </button>
            <button
              onClick={() => handleSlideChange(Math.min(filteredVideos.length - 1, activeIndex + 1))}
              disabled={activeIndex === filteredVideos.length - 1}
              className={styles.navButton}
              aria-label="Next video"
            >
              →
            </button>
          </div>

          <div ref={trackRef} className={styles.carouselTrack}>
            {filteredVideos.map((video, index) => (
              <div
                key={video.id}
                className={`${styles.slide} ${index === activeIndex ? styles.activeSlide : ''}`}
                onClick={(e) => handleVideoClick(video, e)}
              >
                <div className={styles.videoCard}>
                  <DynamicVideoPlayer
                    key={`player-${video.id}`}
                    url={video.videoUrl}
                    width={320}
                    height={568}
                  />
                  <div className={styles.videoInfo}>
                    <h3>{video.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.indicators}>
            {filteredVideos.map((video, index) => (
              <button
                key={video.id}
                className={`${styles.indicator} ${index === activeIndex ? styles.activeIndicator : ''}`}
                onClick={() => handleSlideChange(index)}
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Go to video "${video.title}"`}
                tabIndex={0}
              />
            ))}
          </div>
        </>
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className={`${styles.modal} ${isFullScreen ? styles.fullScreen : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className={styles.modalContent}
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            >
              <div className={styles.modalControls}>
                <button className={styles.fullScreenButton} onClick={(e) => {
                  e.stopPropagation();
                  toggleFullScreen();
                }}>
                  {isFullScreen ? '↙' : '↗'}
                </button>
                <button className={styles.closeButton} onClick={closeModal}>×</button>
              </div>
              <DynamicVideoPlayer
                key={selectedVideo.id} // Force new instance when video changes
                url={selectedVideo.videoUrl}
                width={320}
                height={568}
                isModal={true}
              />
              <div className={styles.modalInfo}>
                <h3>{selectedVideo.title}</h3>
                <p>{selectedVideo.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}