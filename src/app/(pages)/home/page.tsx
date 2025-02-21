import HeroSection from './components/HeroSection'
import BenefitsSection from './components/BenefitsSection'
import FeaturedSection from './components/FeaturedSection'
import VideoGallery from '@/app/components/VideoGallery'
import UseCases from './components/UseCases'
import TestimonialsSection from './components/TestimonialsSection'
import CallToAction from './components/CallToAction'
import ResellerMap from './components/ResellerMap'

const videos = [
  {
    id: '1',
    title: 'Naga Balm Athletes',
    videoUrl: 'https://www.facebook.com/nagabalmkh/videos/637876325250858/',
    description: 'Athletes using Naga Balm for performance and recovery',
    thumbnailUrl: 'https://scontent.fpnh1-1.fna.fbcdn.net/v/t15.5256-10/428987492_1122570042307012_8518983982873796844_n.jpg'
  },
  {
    id: '2',
    title: 'Traditional Healing',
    videoUrl: 'https://www.facebook.com/nagabalmkh/videos/1269625507619812/',
    description: 'Discover our traditional healing methods',
    thumbnailUrl: 'https://scontent.fpnh1-1.fna.fbcdn.net/v/t15.5256-10/428987492_1122570042307012_8518983982873796844_n.jpg'
  },
  {
    id: '3',
    title: 'Natural Pain Relief',
    videoUrl: 'https://www.facebook.com/nagabalmkh/videos/498660102779675/',
    description: 'Experience natural pain relief with Naga Balm',
    thumbnailUrl: 'https://scontent.fpnh1-1.fna.fbcdn.net/v/t15.5256-10/428987492_1122570042307012_8518983982873796844_n.jpg'
  },
  {
    id: '4',
    title: 'Product Showcase',
    videoUrl: 'https://www.facebook.com/nagabalmkh/videos/1323579092381033/',
    description: 'Explore our range of natural healing products',
    thumbnailUrl: 'https://scontent.fpnh1-1.fna.fbcdn.net/v/t15.5256-10/428987492_1122570042307012_8518983982873796844_n.jpg'
  },
  {
    id: '5',
    title: 'Customer Stories',
    videoUrl: 'https://www.facebook.com/nagabalmkh/videos/804614788535316/',
    description: 'Real people sharing their Naga Balm experiences',
    thumbnailUrl: 'https://scontent.fpnh1-1.fna.fbcdn.net/v/t15.5256-10/428987492_1122570042307012_8518983982873796844_n.jpg'
  },
  {
    id: '6',
    title: 'Application Guide',
    videoUrl: 'https://www.facebook.com/nagabalmkh/videos/1077255727366703/',
    description: 'How to apply Naga Balm for best results',
    thumbnailUrl: 'https://scontent.fpnh1-1.fna.fbcdn.net/v/t15.5256-10/428987492_1122570042307012_8518983982873796844_n.jpg'
  },
  {
    id: '7',
    title: 'Sports Recovery',
    videoUrl: 'https://www.facebook.com/nagabalmkh/videos/1182079582995540/',
    description: 'Athletes recovery routine with Naga Balm',
    likes: 1300,
    views: 5500
  },
  {
    id: '8',
    title: 'Daily Wellness',
    videoUrl: 'https://www.facebook.com/nagabalmkh/videos/518969877467151/',
    description: 'Incorporating Naga Balm into your daily routine',
    likes: 920,
    views: 4300
  },
  {
    id: '9',
    title: 'Active Lifestyle',
    videoUrl: 'https://www.facebook.com/nagabalmkh/videos/368500472775181/',
    description: 'Stay active with Naga Balm',
    likes: 850,
    views: 3900
  },
  {
    id: '10',
    title: 'Healing Journey',
    videoUrl: 'https://www.facebook.com/nagabalmkh/videos/1251255039587242/',
    description: 'Natural healing with traditional remedies',
    likes: 780,
    views: 3600
  },
  {
    id: '11',
    title: 'Muscle Recovery',
    videoUrl: 'https://www.facebook.com/nagabalmkh/videos/1569129917355071/',
    description: 'Fast and effective muscle recovery techniques',
    likes: 930,
    views: 4100
  },
  {
    id: '12',
    title: 'Professional Athletes',
    videoUrl: 'https://www.facebook.com/nagabalmkh/videos/1415746949200083/',
    description: 'Professional athletes trust Naga Balm for performance',
    likes: 1450,
    views: 5800
  },
  {
    id: '13',
    title: 'Training Tips',
    videoUrl: 'https://www.facebook.com/reel/338828812495026/',
    description: 'Training and recovery tips with Naga Balm',
    likes: 870,
    views: 3900
  },
  {
    id: '14',
    title: 'Wellness Routine',
    videoUrl: 'https://www.facebook.com/nagabalmkh/videos/1522029818697050/',
    description: 'Daily wellness routine featuring Naga Balm',
    likes: 980,
    views: 4400
  },
  {
    id: '15',
    title: 'Natural Healing',
    videoUrl: 'https://www.facebook.com/nagabalmkh/videos/819568380149231/',
    description: 'Experience the power of natural healing',
    likes: 1100,
    views: 4700
  },
  {
    id: '16',
    title: 'Performance Tips',
    videoUrl: 'https://www.facebook.com/nagabalmkh/videos/791275669861356/',
    description: 'Enhance your performance with Naga Balm',
    likes: 840,
    views: 3800
  },
  {
    id: '17',
    title: 'Recovery Guide',
    videoUrl: 'https://www.facebook.com/nagabalmkh/videos/406823585196815/',
    description: 'Complete guide to recovery with Naga Balm',
    likes: 920,
    views: 4200
  },
  {
    id: '18',
    title: 'Athlete Stories',
    videoUrl: 'https://www.facebook.com/nagabalmkh/videos/1102436564734219/',
    description: 'Athletes share their Naga Balm success stories',
    likes: 1250,
    views: 5100
  },
  {
    id: '19',
    title: 'Training Recovery',
    videoUrl: 'https://www.facebook.com/nagabalmkh/videos/310652508656167/',
    description: 'Post-training recovery with Naga Balm',
    likes: 890,
    views: 4000
  },
  {
    id: '20',
    title: 'Wellness Journey',
    videoUrl: 'https://www.facebook.com/nagabalmkh/videos/1022010915676664/',
    description: 'Start your wellness journey with Naga Balm',
    likes: 960,
    views: 4300
  },
  {
    id: '21',
    title: 'Active Living',
    videoUrl: 'https://www.facebook.com/nagabalmkh/videos/133074479856120/',
    description: 'Stay active and pain-free with Naga Balm',
    likes: 830,
    views: 3700
  }
]

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <FeaturedSection />
      <VideoGallery videos={videos} />
      <UseCases />
      <ResellerMap />
      <TestimonialsSection />
      <CallToAction />
    </main>
  )
} 