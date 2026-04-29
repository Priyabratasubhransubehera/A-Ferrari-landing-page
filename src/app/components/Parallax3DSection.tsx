import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface Layer {
  image: string;
  depth: number; // 0-1, where 1 is closest
  blur?: number;
}

export const Parallax3DSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Different parallax speeds for each layer
  const y1 = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y4 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.1]);

  return (
    <div 
      ref={containerRef} 
      className="relative h-screen overflow-hidden bg-black"
      style={{ perspective: '1000px' }}
    >
      {/* Background layer - slowest */}
      <motion.div
        className="absolute inset-0"
        style={{ 
          y: y1,
          opacity,
          filter: 'blur(3px)',
          transformStyle: 'preserve-3d',
          transform: 'translateZ(-100px) scale(1.1)',
        }}
      >
        <div 
          className="w-full h-full bg-gradient-to-b from-[#1a0505] via-black to-black"
        />
      </motion.div>

      {/* Middle layer */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ 
          y: y2,
          opacity,
          transformStyle: 'preserve-3d',
          transform: 'translateZ(-50px) scale(1.05)',
        }}
      >
        <div className="relative">
          {/* Circular glow effects */}
          <motion.div
            className="absolute w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255, 40, 0, 0.3) 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Content layer */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ 
          y: y3,
          scale,
          opacity,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="container mx-auto px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-[#FF2800] text-sm uppercase tracking-widest">3D Parallax Experience</span>
            </motion.div>

            <h2 
              className="text-6xl lg:text-8xl font-bold text-white mb-6"
              style={{
                textShadow: '0 0 60px rgba(255, 40, 0, 0.4)',
              }}
            >
              Feel the
              <br />
              <span className="text-[#FF2800]">Dimension</span>
            </h2>

            <p className="text-2xl text-white/70 max-w-2xl mx-auto mb-12">
              Experience depth and motion like never before
            </p>

            <motion.button
              className="px-12 py-5 rounded-full text-white font-medium text-lg"
              style={{
                background: 'linear-gradient(135deg, #FF2800 0%, #cc2000 100%)',
                boxShadow: '0 10px 40px rgba(255, 40, 0, 0.5)',
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 15px 60px rgba(255, 40, 0, 0.7)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore More
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Foreground layer - fastest */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ 
          y: y4,
          opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.5, 0.5, 0]),
        }}
      >
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i % 2 === 0 ? '#FF2800' : '#FFD700',
              boxShadow: `0 0 20px ${i % 2 === 0 ? '#FF2800' : '#FFD700'}`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Vignette effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent via-transparent to-black/60" />
    </div>
  );
};
