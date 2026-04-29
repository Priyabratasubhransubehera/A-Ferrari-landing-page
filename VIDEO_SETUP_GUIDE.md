# Ferrari Video Background Setup Guide

## Current Setup

Your Ferrari website now features a **cinematic 3D video background** on the home screen with:

- ✅ Full-screen video background with parallax scroll effect
- ✅ Cinematic overlays and gradients for depth
- ✅ Sound toggle button (mute/unmute)
- ✅ Smooth fade-in when video loads
- ✅ High-quality fallback image from Unsplash
- ✅ Performance optimized with proper video attributes
- ✅ Glassmorphism UI elements over video
- ✅ Animated performance stats and CTAs

## Video Sources

### Free Ferrari Video Resources

To add your own Ferrari video, download from these sites:

1. **Pexels** (Free, no attribution required)
   - https://www.pexels.com/search/videos/ferrari/
   - https://www.pexels.com/search/videos/red%20sports%20car/

2. **Pixabay** (Free)
   - https://pixabay.com/videos/search/ferrari/
   - https://pixabay.com/videos/search/sports%20car/

3. **Coverr** (Free)
   - https://coverr.co/videos/cars
   - https://coverr.co/videos/sports-car

### Recommended Video Specifications

For best performance and quality:
- **Resolution**: 1920x1080 (Full HD) or 3840x2160 (4K)
- **Format**: MP4 (H.264 codec)
- **Frame Rate**: 30fps or 60fps
- **Duration**: 10-30 seconds (will loop)
- **File Size**: Under 20MB for fast loading
- **Content**: Red Ferrari in motion, racing, or cinematic shots

## How to Add Your Video

### Option 1: Local Video File

1. Download your Ferrari video
2. Place it in `/public/videos/ferrari-hero.mp4`
3. Update the video source in `src/app/components/HeroVideoBackground.tsx`:

```tsx
<source
  src="/videos/ferrari-hero.mp4"
  type="video/mp4"
/>
```

### Option 2: CDN/External URL

Simply replace the video URL in `HeroVideoBackground.tsx`:

```tsx
<source
  src="YOUR_VIDEO_URL_HERE.mp4"
  type="video/mp4"
/>
```

### Option 3: Multiple Video Formats (Best Practice)

For maximum browser compatibility:

```tsx
<video ...>
  <source src="/videos/ferrari-hero.webm" type="video/webm" />
  <source src="/videos/ferrari-hero.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

## Video Optimization Tips

1. **Compress your video**: Use tools like HandBrake or FFmpeg
   ```bash
   ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow output.mp4
   ```

2. **Create a poster image**: Add a high-quality thumbnail
   ```tsx
   <video poster="/images/ferrari-poster.jpg" ...>
   ```

3. **Lazy loading**: For better initial page load
   ```tsx
   <video loading="lazy" ...>
   ```

## Current Placeholder

The component currently uses a temporary video from Coverr. Replace it with your own Ferrari video for the best experience!

## Features Included

- **Parallax Effect**: Video scales and moves on scroll
- **Cinematic Overlays**: Dark gradients and red accent glows
- **Sound Control**: Toggle button in top-right corner
- **Smooth Loading**: Fades from fallback image to video
- **Responsive**: Works on all screen sizes
- **Performance**: Optimized with proper video attributes
- **Accessibility**: Includes fallback for unsupported browsers

## Need Help?

The video is controlled in: `/src/app/components/HeroVideoBackground.tsx`

Key customization points:
- Line 46-54: Video element and source
- Line 18-26: Video filters and effects
- Line 181-246: Content overlays
- Line 32-37: Sound toggle button

Enjoy your cinematic Ferrari experience! 🏎️✨
