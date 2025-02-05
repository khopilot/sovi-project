'use client';

import { useState, useEffect } from 'react';
import styles from '../../../components/VideoGallery/VideoGallery.module.css';

interface VideoPlayerProps {
  url: string;
  width: number;
  height: number;
  isModal?: boolean;
  onLoad?: () => void;
}

export default function VideoPlayer({ url, width, height, isModal = false, onLoad }: VideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldAutoplay, setShouldAutoplay] = useState(isModal);

  // Update autoplay when modal state changes
  useEffect(() => {
    setShouldAutoplay(isModal);
  }, [isModal]);

  // Clean and encode the URL
  const cleanUrl = url.trim();
  const encodedUrl = encodeURIComponent(cleanUrl);
  
  // Create Facebook embed URL
  let embedUrl = `https://www.facebook.com/plugins/video.php?href=${encodedUrl}`;
  embedUrl += `&show_text=false`;
  embedUrl += `&width=${width}`;
  embedUrl += `&height=${height}`;
  embedUrl += `&autoplay=${shouldAutoplay}`;

  // Calculate responsive dimensions
  const aspectRatio = height / width;
  const containerStyle = {
    position: 'relative' as const,
    width: '100%',
    paddingTop: `${aspectRatio * 100}%`,
    overflow: 'hidden',
    borderRadius: isModal ? '12px' : '8px',
    background: '#f0f0f0',
    zIndex: 3,
    cursor: 'pointer'
  };

  const iframeStyle = {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none',
    overflow: 'hidden',
    opacity: isLoading ? 0 : 1,
    transition: 'opacity 0.3s ease-in-out',
    zIndex: 3,
    pointerEvents: 'auto' as const
  };

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  return (
    <div style={containerStyle}>
      {isLoading && (
        <div className={styles.videoPlaceholder}>
          <div className={styles.loadingSpinner} />
        </div>
      )}
      <iframe
        key={`${url}-${shouldAutoplay}`} // Force iframe refresh when autoplay changes
        src={embedUrl}
        style={iframeStyle}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        onLoad={handleLoad}
      />
    </div>
  );
} 