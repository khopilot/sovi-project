'use client';

import { useState } from 'react';
import styles from '../../../components/VideoGallery/VideoGallery.module.css';

interface VideoPlayerProps {
  url: string;
  onLoad?: () => void;
  autoplay?: boolean;
}

export default function VideoPlayer({ url, onLoad, autoplay = false }: VideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Clean and encode the URL
  const cleanUrl = url.trim();
  const encodedUrl = encodeURIComponent(cleanUrl);
  
  // Create Facebook embed URL with responsive dimensions
  const embedUrl = `https://www.facebook.com/plugins/video.php?href=${encodedUrl}&show_text=false&width=560&height=315&autoplay=${autoplay ? 1 : 0}`;

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  return (
    <div className={styles.videoWrapper}>
      {isLoading && (
        <div className={styles.videoPlaceholder}>
          <div className={styles.loadingSpinner} />
        </div>
      )}
      <iframe
        src={embedUrl}
        className={styles.videoFrame}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        onLoad={handleLoad}
      />
    </div>
  );
} 