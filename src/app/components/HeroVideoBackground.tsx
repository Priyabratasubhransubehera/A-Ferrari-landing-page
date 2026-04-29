import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Play, Zap, TrendingUp, Volume2, VolumeX } from 'lucide-react';

export const HeroVideoBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const { scrollY } = useScroll();

  // Detect scroll to show text
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50 && !hasScrolled) {
      setHasScrolled(true);
    }
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const yPosition = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // Text opacity based on scroll
  const textOpacity = hasScrolled ? 1 : 0;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Video autoplay failed:', err);
      });
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Background */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ scale, y: yPosition }}
      >
        {/* Fallback image while video loads */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1920&q=80)',
            opacity: isVideoLoaded ? 0 : 1,
            transition: 'opacity 1s ease-in-out'
          }}
        />

        {/* Video Element */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          style={{
            opacity: isVideoLoaded ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            filter: 'brightness(0.7) contrast(1.1) saturate(1.2)',
          }}
        >
          {/* Add your Ferrari video source here */}
          {/* For now, using a placeholder - replace with actual Ferrari video URL */}
          <source
            src="https://cdn.coverr.co/videos/coverr-red-sports-car-driving-fast/1080p.mp4"
            type="video/mp4"
          />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>

        {/* 3D Depth effect overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.8) 100%)',
          }}
        />
      </motion.div>

      {/* Cinematic gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none z-10" />

      {/* Red accent glow from bottom - Enhanced */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-96 pointer-events-none z-10"
        style={{
          background: 'radial-gradient(ellipse at bottom, rgba(255, 40, 0, 0.4) 0%, rgba(255, 40, 0, 0.2) 40%, transparent 70%)',
        }}
        animate={{
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Spotlight effect on Ferrari */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none z-10"
        style={{
          background: 'radial-gradient(circle, rgba(255, 40, 0, 0.15) 0%, transparent 60%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Animated red neon line - Only when not scrolled */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 z-20"
        style={{
          background: 'linear-gradient(90deg, transparent, #FF2800, transparent)',
          boxShadow: '0 0 20px rgba(255, 40, 0, 0.8), 0 0 40px rgba(255, 40, 0, 0.4)',
          opacity: hasScrolled ? 0 : 1,
        }}
        animate={{
          opacity: hasScrolled ? 0 : [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: hasScrolled ? 0 : Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Ferrari Brand Watermark - Only visible before scroll */}
      <motion.div
        className="absolute top-8 left-8 z-30"
        style={{ opacity: hasScrolled ? 0 : 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-[#FF2800] font-bold tracking-[0.3em] text-2xl"
          style={{
            textShadow: '0 0 30px rgba(255, 40, 0, 0.8), 0 0 60px rgba(255, 40, 0, 0.4)',
            fontFamily: 'serif',
          }}
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          FERRARI
        </motion.div>
      </motion.div>

      {/* Sound Toggle Button */}
      <motion.button
        onClick={toggleMute}
        className="absolute top-24 right-8 z-30 p-4 rounded-full"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}
        whileHover={{
          scale: 1.1,
          background: 'rgba(255, 40, 0, 0.2)',
          borderColor: 'rgba(255, 40, 0, 0.5)',
        }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-white" />
        ) : (
          <Volume2 className="w-5 h-5 text-[#FF2800]" />
        )}
      </motion.button>

      {/* Main content overlay */}
      <motion.div
        className="relative z-20 h-full flex flex-col justify-between"
        style={{ opacity }}
      >
        {/* Top section - Title and tagline */}
        <div className="container mx-auto px-8 lg:px-16 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: textOpacity, y: textOpacity === 1 ? 0 : 60 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl"
          >
            {/* Premium badge */}
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 8px 32px 0 rgba(255, 40, 0, 0.3)',
                opacity: textOpacity,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 12px 48px 0 rgba(255, 40, 0, 0.5)',
              }}
              animate={{
                boxShadow: textOpacity === 1 ? [
                  '0 8px 32px 0 rgba(255, 40, 0, 0.3)',
                  '0 12px 40px 0 rgba(255, 40, 0, 0.5)',
                  '0 8px 32px 0 rgba(255, 40, 0, 0.3)',
                ] : '0 8px 32px 0 rgba(255, 40, 0, 0.3)',
              }}
              transition={{
                duration: 3,
                repeat: textOpacity === 1 ? Infinity : 0,
                ease: "easeInOut"
              }}
            >
              <Zap className="w-5 h-5 text-[#FF2800]" />
              <span className="text-white text-sm font-medium uppercase tracking-widest">
                Cinematic 3D Experience
              </span>
            </motion.div>

            {/* Main headline with cinematic animation */}
            <motion.h1
              className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-6 tracking-tight leading-[0.9]"
              style={{ opacity: textOpacity }}
            >
              <motion.span
                className="block"
                style={{ opacity: textOpacity }}
              >
                Unleash the
              </motion.span>
              <motion.span
                className="block text-[#FF2800]"
                style={{
                  textShadow: '0 0 60px rgba(255, 40, 0, 0.9), 0 0 100px rgba(255, 40, 0, 0.5), 0 0 140px rgba(255, 40, 0, 0.3)',
                  opacity: textOpacity,
                }}
                whileHover={{
                  textShadow: '0 0 80px rgba(255, 40, 0, 1), 0 0 120px rgba(255, 40, 0, 0.7), 0 0 160px rgba(255, 40, 0, 0.4)',
                }}
              >
                Legend
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl lg:text-3xl text-white/90 max-w-3xl leading-relaxed"
              style={{
                textShadow: '0 2px 20px rgba(0, 0, 0, 0.8)',
                opacity: textOpacity,
              }}
            >
              Where Italian craftsmanship meets raw power. Experience the thrill of automotive perfection in motion.
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom section - Performance stats and CTAs */}
        <motion.div
          className="container mx-auto px-8 lg:px-16 pb-20"
          style={{ opacity: textOpacity }}
        >
          {/* Glassmorphism performance cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {[
              { icon: <Zap className="w-6 h-6" />, value: "340+", label: "KM/H", sublabel: "Top Speed" },
              { icon: <TrendingUp className="w-6 h-6" />, value: "800+", label: "HP", sublabel: "Raw Power" },
              { icon: <Play className="w-6 h-6" />, value: "2.9s", label: "0-100", sublabel: "KM/H" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl p-6 cursor-pointer backdrop-blur-xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                  opacity: textOpacity,
                }}
                animate={{
                  y: textOpacity === 1 ? 0 : 40,
                }}
                transition={{ duration: 0.8, delay: textOpacity === 1 ? index * 0.15 : 0 }}
                whileHover={{
                  scale: 1.08,
                  y: -10,
                  borderColor: 'rgba(255, 40, 0, 0.6)',
                  boxShadow: '0 20px 60px rgba(255, 40, 0, 0.4)',
                }}
              >
                {/* Animated glow background */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(255, 40, 0, 0.15) 0%, transparent 70%)',
                  }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="text-[#FF2800] mb-3"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div
                    className="text-5xl font-bold text-white mb-1"
                    style={{
                      textShadow: '0 0 30px rgba(255, 255, 255, 0.4), 0 2px 10px rgba(0, 0, 0, 0.8)',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white/90 font-semibold text-lg">
                    {stat.label}
                  </div>
                  <div className="text-white/50 text-sm uppercase tracking-wider mt-1">
                    {stat.sublabel}
                  </div>
                </div>

                {/* Border glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{
                    boxShadow: '0 0 40px rgba(255, 40, 0, 0.6), inset 0 0 40px rgba(255, 40, 0, 0.1)',
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Call to action buttons */}
          <motion.div
            className="flex flex-wrap gap-6"
            style={{ opacity: textOpacity }}
            animate={{ y: textOpacity === 1 ? 0 : 30 }}
            transition={{ duration: 1, delay: textOpacity === 1 ? 0.5 : 0 }}
          >
            {/* Primary CTA */}
            <motion.button
              className="group relative px-12 py-6 rounded-full overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #FF2800 0%, #cc2000 100%)',
                boxShadow: '0 15px 60px rgba(255, 40, 0, 0.5), 0 0 80px rgba(255, 40, 0, 0.3)',
              }}
              whileHover={{
                scale: 1.08,
                y: -5,
                boxShadow: '0 20px 80px rgba(255, 40, 0, 0.7), 0 0 100px rgba(255, 40, 0, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 text-white text-lg font-bold flex items-center gap-3 uppercase tracking-wider">
                Book Test Drive
                <Play className="w-6 h-6" fill="white" />
              </span>

              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                initial={{ x: '-200%' }}
                animate={{ x: '200%' }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              />
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              className="group relative px-12 py-6 rounded-full overflow-hidden backdrop-blur-xl"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
              }}
              whileHover={{
                scale: 1.08,
                y: -5,
                borderColor: 'rgba(255, 40, 0, 0.6)',
                background: 'rgba(255, 40, 0, 0.1)',
                boxShadow: '0 15px 60px rgba(255, 40, 0, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 text-white text-lg font-bold uppercase tracking-wider">
                Explore Collection
              </span>

              {/* Glow on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at center, rgba(255, 40, 0, 0.15) 0%, transparent 70%)',
                }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated scroll indicator - Only show when no text visible */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3"
        style={{ opacity: hasScrolled ? 0 : opacity }}
        animate={{ y: [0, 15, 0] }}
        transition={{
          y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div
          className="w-8 h-14 rounded-full flex items-start justify-center p-2"
          style={{
            border: '2px solid rgba(255, 255, 255, 0.4)',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 0 20px rgba(255, 40, 0, 0.3)',
          }}
        >
          <motion.div
            className="w-2 h-2 rounded-full"
            style={{
              background: 'linear-gradient(180deg, #FF2800 0%, white 100%)',
              boxShadow: '0 0 10px rgba(255, 40, 0, 0.8)',
            }}
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <motion.span
          className="text-white/70 text-xs font-medium uppercase tracking-[0.2em]"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Scroll to Explore
        </motion.span>
      </motion.div>

      {/* Ambient particles floating around Ferrari - Only when not scrolled */}
      {!hasScrolled && (
        <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: i % 3 === 0 ? '3px' : i % 2 === 0 ? '2px' : '4px',
                height: i % 3 === 0 ? '3px' : i % 2 === 0 ? '2px' : '4px',
                background: '#FF2800',
                boxShadow: '0 0 20px #FF2800',
                left: `${10 + (i * 8)}%`,
                top: `${20 + (i % 4) * 20}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, (i % 2 === 0 ? 30 : -30), 0],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 6 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}

      {/* Corner design accents - Always visible */}
      <motion.div
        className="absolute top-0 left-0 w-40 h-40 pointer-events-none z-20"
        style={{ opacity: hasScrolled ? 0.3 : 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-0.5"
          style={{
            background: 'linear-gradient(90deg, #FF2800 0%, transparent 100%)',
            boxShadow: '0 0 20px rgba(255, 40, 0, 0.8)',
          }}
          animate={{ scaleX: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-0 left-0 w-0.5 h-full"
          style={{
            background: 'linear-gradient(180deg, #FF2800 0%, transparent 100%)',
            boxShadow: '0 0 20px rgba(255, 40, 0, 0.8)',
          }}
          animate={{ scaleY: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      <motion.div
        className="absolute bottom-0 right-0 w-40 h-40 pointer-events-none z-20"
        style={{ opacity: hasScrolled ? 0.3 : 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute bottom-0 right-0 w-full h-0.5"
          style={{
            background: 'linear-gradient(270deg, #FF2800 0%, transparent 100%)',
            boxShadow: '0 0 20px rgba(255, 40, 0, 0.8)',
          }}
          animate={{ scaleX: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-0.5 h-full"
          style={{
            background: 'linear-gradient(0deg, #FF2800 0%, transparent 100%)',
            boxShadow: '0 0 20px rgba(255, 40, 0, 0.8)',
          }}
          animate={{ scaleY: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </motion.div>
    </div>
  );
};
