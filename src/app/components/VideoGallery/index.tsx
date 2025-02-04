'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './VideoGallery.module.css';
import dynamic from 'next/dynamic';
import { getFacebookVideoMetrics } from '@/app/utils/facebook';

const DynamicVideoPlayer = dynamic(
  () => import('@/app/(pages)/home/components/VideoPlayer'),
  { ssr: false }
);

export default function VideoGallery({ videos }: { videos: Array<{
  id: string;
  title: string;
  videoUrl: string;
  description: string;
}> }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<null | typeof videos[0]>(null);
  const [videoMetrics, setVideoMetrics] = useState<Array<{ views: number; likes: number; }>>([]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && videos.length > 0) {
      const fetchMetrics = async () => {
        const metrics = await getFacebookVideoMetrics(videos.map(v => v.videoUrl));
        setVideoMetrics(metrics);
      };
      fetchMetrics();
    }
  }, [isClient, videos]);

  const handleSlideChange = (index: number) => {
    if (!trackRef.current) return;
    setActiveIndex(index);
    const slideWidth = trackRef.current.offsetWidth;
    trackRef.current.scrollTo({
      left: index * slideWidth,
      behavior: 'smooth'
    });
  };

  const handleVideoClick = (video: typeof videos[0]) => {
    setSelectedVideo(video);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = '';
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
        {isClient && (
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
                onClick={() => handleSlideChange(Math.min(videos.length - 1, activeIndex + 1))}
                disabled={activeIndex === videos.length - 1}
                className={styles.navButton}
                aria-label="Next video"
              >
                →
              </button>
            </div>

            <div ref={trackRef} className={styles.carouselTrack}>
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className={`${styles.slide} ${index === activeIndex ? styles.activeSlide : ''}`}
                  onClick={() => handleVideoClick(video)}
                >
                  <div className={styles.videoCard}>
                    <DynamicVideoPlayer
                      url={video.videoUrl}
                      width={320}
                      height={568}
                    />
                    <div className={styles.videoInfo}>
                      <h3>{video.title}</h3>
                      <div className={styles.stats}>
                        <span>{videoMetrics[index]?.views?.toLocaleString() || '...'} views</span>
                        <span>{videoMetrics[index]?.likes?.toLocaleString() || '...'} likes</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.indicators}>
              {videos.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.indicator} ${index === activeIndex ? styles.activeIndicator : ''}`}
                  onClick={() => handleSlideChange(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <AnimatePresence>
        {selectedVideo && isClient && (
          <motion.div
            className={styles.modal}
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
              <button className={styles.closeButton} onClick={closeModal}>×</button>
              <DynamicVideoPlayer
                url={selectedVideo.videoUrl}
                width={320}
                height={568}
                isModal
              />
              <div className={styles.modalInfo}>
                <h3>{selectedVideo.title}</h3>
                <p>{selectedVideo.description}</p>
                <div className={styles.stats}>
                  <span>{videoMetrics[videos.findIndex(v => v.id === selectedVideo.id)]?.views?.toLocaleString() || '...'} views</span>
                  <span>{videoMetrics[videos.findIndex(v => v.id === selectedVideo.id)]?.likes?.toLocaleString() || '...'} likes</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}