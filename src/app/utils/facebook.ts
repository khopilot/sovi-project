'use server';

const FB_ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN;

export async function getFacebookVideoMetrics(videoUrls: string[]) {
  if (!FB_ACCESS_TOKEN) {
    console.error('Facebook access token is not configured. Please set FACEBOOK_ACCESS_TOKEN in your environment variables.');
    return videoUrls.map(() => ({ views: 0, likes: 0 }));
  }

  try {
    console.log(`Fetching metrics for ${videoUrls.length} videos...`);
    
    const metrics = await Promise.all(
      videoUrls.map(async (url) => {
        const videoId = extractVideoId(url);
        if (!videoId) {
          console.error(`Could not extract video ID from URL: ${url}`);
          return { views: 0, likes: 0 };
        }

        try {
          const apiUrl = `https://graph.facebook.com/v18.0/${videoId}`;
          const params = new URLSearchParams({
            fields: 'views,likes.summary(true),engagement',
            access_token: FB_ACCESS_TOKEN
          });

          const response = await fetch(`${apiUrl}?${params.toString()}`, { 
            next: { revalidate: 3600 }, // Cache for 1 hour
            headers: {
              'Accept': 'application/json',
            }
          });

          if (!response.ok) {
            const error = await response.json();
            console.error(`Facebook API error for video ${videoId}:`, error);
            return { views: 0, likes: 0 };
          }

          const data = await response.json();
          console.log(`Metrics for video ${videoId}:`, {
            views: data.views || 0,
            likes: data.likes?.summary?.total_count || 0
          });

          return {
            views: data.views || 0,
            likes: data.likes?.summary?.total_count || 0,
          };
        } catch (error) {
          console.error(`Error fetching metrics for video ${url}:`, error);
          return { views: 0, likes: 0 };
        }
      })
    );

    console.log('All metrics fetched successfully:', metrics);
    return metrics;
  } catch (error) {
    console.error('Error fetching Facebook metrics:', error);
    return videoUrls.map(() => ({ views: 0, likes: 0 }));
  }
}

function extractVideoId(url: string): string | null {
  try {
    // Handle different Facebook video URL formats
    if (url.includes('/videos/')) {
      const match = url.match(/\/videos\/(\d+)/);
      return match ? match[1] : null;
    }
    if (url.includes('/reel/')) {
      const match = url.match(/\/reel\/(\d+)/);
      return match ? match[1] : null;
    }
    if (url.includes('watch?v=')) {
      const match = url.match(/watch\?v=(\d+)/);
      return match ? match[1] : null;
    }
    console.error(`Unsupported Facebook video URL format: ${url}`);
    return null;
  } catch (error) {
    console.error('Error extracting video ID:', error);
    return null;
  }
} 