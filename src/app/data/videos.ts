export interface Video {
  id: string;
  title: string;
  videoUrl: string;
  description: string;
  thumbnailUrl?: string;
}

export const videos: Video[] = [
  {
    id: '1',
    title: 'Naga Balm - Natural Healing Power',
    videoUrl: 'https://www.facebook.com/nagabalmkh/videos/1269625507619812/',
    description: 'Experience the natural healing power of Naga Balm',
    thumbnailUrl: '/images/Video Thumbnail 2/Video 1.jpg'
  },
  {
    id: '2',
    title: 'Traditional Healing Methods',
    videoUrl: 'https://www.facebook.com/nagabalmkh/videos/498660102779675/',
    description: 'Discover traditional Cambodian healing methods with Naga Balm',
    thumbnailUrl: '/images/Video Thumbnail 2/Video 2.jpg'
  },
  {
    id: '3',
    title: 'Sports Recovery with Naga Balm',
    videoUrl: 'https://www.facebook.com/nagabalmkh/videos/1323579092381033/',
    description: 'See how athletes use Naga Balm for recovery and performance',
    thumbnailUrl: '/images/Video Thumbnail 2/Video 3.jpg'
  },
  {
    id: '4',
    title: 'Daily Wellness Routine',
    videoUrl: 'https://www.facebook.com/nagabalmkh/videos/804614788535316/',
    description: 'Incorporate Naga Balm into your daily wellness routine',
    thumbnailUrl: '/images/Video Thumbnail 2/Video 4.jpg'
  },
  {
    id: '5',
    title: 'Natural Pain Relief',
    videoUrl: 'https://www.facebook.com/nagabalmkh/videos/1077255727366703/',
    description: 'Natural pain relief solutions with Naga Balm',
    thumbnailUrl: '/images/Video Thumbnail 2/Video 5.jpg'
  },
  {
    id: '6',
    title: 'Muscle Recovery Guide',
    videoUrl: 'https://www.facebook.com/nagabalmkh/videos/1182079582995540/',
    description: 'Learn how to use Naga Balm for muscle recovery',
    thumbnailUrl: '/images/Video Thumbnail 2/Video 6.jpg'
  }
]; 