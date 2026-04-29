import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useMousePosition } from '../hooks/useMousePosition';
import { useRef } from 'react';

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const mousePosition = useMousePosition();

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Mouse parallax effect
  const mouseX = mousePosition.x;
  const mouseY = mousePosition.y;

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ scale }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black z-10" />
        <motion.img
          src="https://images.unsplash.com/photo-1661293721687-d3b36e104e63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJyYXJpJTIwcmVkJTIwc3BvcnRzJTIwY2FyJTIwbHV4dXJ5fGVufDF8fHx8MTc3NTI4MTEzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Ferrari"
          className="w-full h-full object-cover"
          style={{
            transform: `translate(${mouseX * 0.02}px, ${mouseY * 0.02}px)`
          }}
        />
      </motion.div>

      {/* Light Streaks */}
      <motion.div
        className="absolute top-1/4 right-0 w-1/2 h-1 bg-gradient-to-l from-[#FF2800] to-transparent opacity-30 blur-sm"
        animate={{
          x: ['-100%', '100%'],
          opacity: [0, 0.6, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-2/3 right-0 w-1/3 h-1 bg-gradient-to-l from-white to-transparent opacity-20 blur-sm"
        animate={{
          x: ['-100%', '100%'],
          opacity: [0, 0.4, 0]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut",
          delay: 0.5
        }}
      />

      {/* Content */}
      <motion.div 
        className="relative z-20 h-full flex items-center"
        style={{ y, opacity }}
      >
        <div className="container mx-auto px-8 lg:px-16">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-7xl lg:text-9xl font-bold text-white mb-6 tracking-tight">
                Engineered<br />for <span className="text-[#FF2800]">Emotion</span>
              </h1>
              
              <motion.p 
                className="text-xl lg:text-2xl text-white/80 mb-12 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Where performance meets passion in perfect harmony
              </motion.p>

              <motion.button
                className="group relative px-10 py-5 bg-transparent border-2 border-white text-white text-lg font-medium overflow-hidden transition-all duration-500 hover:border-[#FF2800]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                  Explore the Machine
                </span>
                <motion.div
                  className="absolute inset-0 bg-[#FF2800]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-white/60 text-sm uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-6 h-6 text-white/60" />
      </motion.div>

      {/* Mouse-follow light reflection */}
      <motion.div
        className="absolute w-96 h-96 rounded-full pointer-events-none z-30"
        style={{
          left: mouseX - 192,
          top: mouseY - 192,
          background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
    </div>
  );
};
