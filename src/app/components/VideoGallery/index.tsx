'use client';

import { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './VideoGallery.module.css';
import VideoPlayer from '@/app/(pages)/home/components/VideoPlayer';

// Dynamically import VideoPlayer with no SSR
const VideoPlayerComponent = dynamic(
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
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video);
    setIsPlaying(true);
  };

  return (
    <section className="relative w-full bg-gray-900 py-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 opacity-50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4 uppercase tracking-wide">
            Discover Our Story
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Journey through our collection of videos showcasing the ancient wisdom and modern applications of Naga Balm.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className={styles.videoGrid}>
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              className={styles.videoCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleVideoClick(video)}
            >
              {/* Thumbnail */}
              <div className={styles.thumbnail}>
                <img
                  src={video.thumbnailUrl}
                  alt={`${video.title} thumbnail`}
                  className="w-full h-full object-cover"
                />
                <div className={styles.playButton}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-12 h-12"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              {/* Video Info */}
              <div className={styles.videoInfo}>
                <h3 className="text-xl font-bold text-yellow-400">{video.title}</h3>
                <p className="text-gray-400 mt-2">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Player Modal */}
        {selectedVideo && (
          <VideoPlayer
            isOpen={isPlaying}
            onClose={() => {
              setIsPlaying(false);
              setSelectedVideo(null);
            }}
            videoUrl={selectedVideo.videoUrl}
            title={selectedVideo.title}
            description={`Experience the power of Naga Balm&apos;s healing touch through this enlightening video.`}
          />
        )}
      </div>
    </section>
  );
}