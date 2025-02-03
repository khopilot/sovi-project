interface RawVideoData {
  isVideo: string;
  text: string;
  'media/0/thumbnailImage/uri': string;
  facebookUrl: string;
  likes: string;
  viewsCount: string;
  postId: string;
}

export interface ParsedVideo {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
  description: string;
  likes: number;
  views: number;
}

export function parseVideoData(rawData: RawVideoData[]): ParsedVideo[] {
  return rawData
    .filter(item => item.isVideo === 'true')
    .map(item => ({
      id: item.postId,
      title: item.text.split('\n')[0],
      thumbnailUrl: item['media/0/thumbnailImage/uri'],
      videoUrl: item.facebookUrl,
      description: item.text,
      likes: parseInt(item.likes) || 0,
      views: parseInt(item.viewsCount) || 0
    }));
} 