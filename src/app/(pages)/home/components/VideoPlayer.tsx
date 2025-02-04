'use client';

interface VideoPlayerProps {
  url: string;
  width: number;
  height: number;
  isModal?: boolean;
  onLoad?: () => void;
}

export default function VideoPlayer({ url, width, height, isModal = false, onLoad }: VideoPlayerProps) {
  // Clean and encode the URL
  const cleanUrl = url.trim();
  const encodedUrl = encodeURIComponent(cleanUrl);
  
  // Create Facebook embed URL
  let embedUrl = `https://www.facebook.com/plugins/video.php?href=${encodedUrl}`;
  embedUrl += `&show_text=false`;
  embedUrl += `&width=${width}`;
  embedUrl += `&height=${height}`;
  embedUrl += `&autoplay=false`;

  // Calculate responsive dimensions
  const aspectRatio = height / width;
  const containerStyle = {
    position: 'relative' as const,
    width: '100%',
    paddingTop: `${aspectRatio * 100}%`,
    overflow: 'hidden',
    borderRadius: isModal ? '12px' : '8px',
    background: '#f0f0f0', // Loading background
  };

  const iframeStyle = {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none',
    overflow: 'hidden',
  };

  return (
    <div style={containerStyle}>
      <iframe
        src={embedUrl}
        style={iframeStyle}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        onLoad={onLoad}
      />
    </div>
  );
} 