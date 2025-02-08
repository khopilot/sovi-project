'use client';

import { useState, useEffect } from 'react';
import styles from '../../../components/VideoGallery/VideoGallery.module.css';

interface VideoPlayerProps {
  url: string;
  onLoad?: () => void;
  autoplay?: boolean;
}

export default function VideoPlayer({ url, onLoad, autoplay = false }: VideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Clean and encode the URL
  const cleanUrl = url.trim();
  const encodedUrl = encodeURIComponent(cleanUrl);
  
  // Create Facebook embed URL with responsive dimensions
  const embedUrl = `https://www.facebook.com/plugins/video.php?href=${encodedUrl}&show_text=false&width=560&height=315&autoplay=${autoplay ? 1 : 0}`;

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  useEffect(() => {
    // Reset states when URL changes
    setIsLoading(true);
    setHasError(false);
  }, [url]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className={styles.videoWrapper}>
      {isLoading && (
        <div className={styles.loadingState}>
          <div className={styles.loadingSpinner}>
            <svg className={styles.spinnerIcon} viewBox="0 0 50 50">
              <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
            </svg>
          </div>
        </div>
      )}
      
      {hasError && (
        <div className={styles.errorState}>
          <p>Sorry, this video could not be loaded.</p>
          <button onClick={() => window.open(url, '_blank')} className={styles.watchExternalButton}>
            Watch on Facebook
          </button>
        </div>
      )}

      {isMounted && (
        <iframe
          src={embedUrl}
          className={styles.videoFrame}
          style={{ opacity: isLoading ? 0 : 1 }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  );
} 