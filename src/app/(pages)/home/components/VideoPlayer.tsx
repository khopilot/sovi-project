'use client';

interface VideoPlayerProps {
  url: string;
  width: number;
  height: number;
}

export default function VideoPlayer({ url, width, height }: VideoPlayerProps) {
  // Clean and encode the URL
  const cleanUrl = url.replace('watch/?v=', '')  // Remove watch/?v= if present
  const encodedUrl = encodeURIComponent(cleanUrl)
  const embedUrl = `https://www.facebook.com/plugins/video.php?href=${encodedUrl}&show_text=false&width=${width}&height=${height}&appId`

  return (
    <iframe
      src={embedUrl}
      width={width}
      height={height}
      style={{ border: 'none', overflow: 'hidden', borderRadius: '8px' }}
      scrolling="no"
      frameBorder="0"
      allowFullScreen={true}
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    />
  );
} 