'use client';

import { useState, useEffect } from 'react';
import styles from '../../../components/VideoGallery/VideoGallery.module.css';

interface VideoPlayerProps {
  url: string;
  onLoad?: () => void;
  autoplay?: boolean;
  title?: string;
}

export default function VideoPlayer({ url, onLoad, autoplay = false, title = '' }: VideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  // Clean and encode the URL
  const cleanUrl = url.trim();
  const encodedUrl = encodeURIComponent(cleanUrl);
  
  // Create Facebook embed URL with responsive dimensions
  const embedUrl = `https://www.facebook.com/plugins/video.php?href=${encodedUrl}&show_text=false&width=560&height=315&autoplay=${autoplay ? 1 : 0}`;

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
    setRetryCount(0);
    onLoad?.();
  };

  const handleError = () => {
    if (retryCount < maxRetries) {
      setRetryCount(prev => prev + 1);
      setTimeout(() => {
        const iframe = document.querySelector(`iframe[src="${embedUrl}"]`) as HTMLIFrameElement;
        if (iframe) {
          iframe.src = embedUrl;
        }
      }, 1000);
    } else {
      setIsLoading(false);
      setHasError(true);
    }
  };

  const handleRetry = () => {
    setIsLoading(true);
    setHasError(false);
    setRetryCount(0);
    const iframe = document.querySelector(`iframe[src="${embedUrl}"]`) as HTMLIFrameElement;
    if (iframe) {
      iframe.src = embedUrl;
    }
  };

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    setRetryCount(0);
  }, [url]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className={styles.videoWrapper} style={{ background: 'black' }}>
      {isLoading && (
        <div className={styles.loadingState}>
          <div className={styles.loadingSpinner}>
            <svg className={styles.spinnerIcon} viewBox="0 0 50 50">
              <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
            </svg>
          </div>
          {retryCount > 0 && (
            <p className={styles.retryMessage}>
              Retrying... ({retryCount}/{maxRetries})
            </p>
          )}
        </div>
      )}
      
      {hasError && (
        <div className={styles.errorState}>
          <div className={styles.errorActions}>
            <button onClick={handleRetry} className={styles.retryButton}>
              Try Again
            </button>
            <button 
              onClick={() => window.open(url, '_blank')} 
              className={styles.watchExternalButton}
              aria-label="Watch video on Facebook"
            >
              Watch on Facebook
            </button>
          </div>
        </div>
      )}

      {isMounted && (
        <iframe
          src={embedUrl}
          className={styles.videoFrame}
          style={{ 
            opacity: isLoading ? 0 : 1,
            background: 'black',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            maxWidth: '100vw',
            maxHeight: '100vh',
            aspectRatio: '16/9',
            border: 'none'
          }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          onLoad={handleLoad}
          onError={handleError}
          title={title || 'Video player'}
          aria-label={title || 'Video player'}
          loading="lazy"
        />
      )}
    </div>
  );
} 