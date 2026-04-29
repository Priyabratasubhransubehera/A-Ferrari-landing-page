import { motion, useScroll, useTransform } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import { Ferrari3DScene } from './Ferrari3DScene';
import { useMousePosition } from '../hooks/useMousePosition';
import { useRef, useState, useEffect } from 'react';
import { Play, Zap, TrendingUp } from 'lucide-react';

export const Hero3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const mousePosition = useMousePosition();
  const [mouseNormalized, setMouseNormalized] = useState({ x: 0.5, y: 0.5 });

  // Normalize mouse position for 3D scene
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMouseNormalized({
        x: mousePosition.x / window.innerWidth,
        y: mousePosition.y / window.innerHeight,
      });
    }
  }, [mousePosition]);

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
      {/* 3D Canvas Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ opacity, scale }}
      >
        <Canvas
          shadows
          gl={{ 
            antialias: true, 
            alpha: true,
            powerPreference: "high-performance"
          }}
          dpr={[1, 2]}
        >
          <Ferrari3DScene mouseX={mouseNormalized.x} mouseY={mouseNormalized.y} />
        </Canvas>
      </motion.div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none z-10" />

      {/* Neon accent lines */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF2800] to-transparent opacity-50"
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main content overlay */}
      <motion.div 
        className="relative z-20 h-full flex flex-col justify-between"
        style={{ opacity }}
      >
        {/* Top section - Title and tagline */}
        <div className="container mx-auto px-8 lg:px-16 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            {/* Glassmorphism badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px 0 rgba(255, 40, 0, 0.2)',
              }}
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="w-4 h-4 text-[#FF2800]" />
              <span className="text-white text-sm uppercase tracking-widest">Premium 3D Experience</span>
            </motion.div>

            <h1 className="text-6xl lg:text-8xl xl:text-9xl font-bold text-white mb-6 tracking-tight leading-none">
              Unleash the
              <br />
              <span 
                className="text-[#FF2800]"
                style={{
                  textShadow: '0 0 40px rgba(255, 40, 0, 0.8), 0 0 80px rgba(255, 40, 0, 0.4)',
                }}
              >
                Power
              </span>
            </h1>
            
            <motion.p 
              className="text-xl lg:text-2xl text-white/80 max-w-2xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Experience automotive excellence in stunning 3D. Where Italian craftsmanship meets cutting-edge technology.
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom section - Stats and CTA */}
        <div className="container mx-auto px-8 lg:px-16 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {/* Glassmorphism stat cards */}
            {[
              { icon: <Zap className="w-6 h-6" />, value: "340+", label: "KM/H Top Speed" },
              { icon: <TrendingUp className="w-6 h-6" />, value: "800+", label: "Horsepower" },
              { icon: <Play className="w-6 h-6" />, value: "2.9s", label: "0-100 KM/H" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl p-6 cursor-pointer"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgba(255, 40, 0, 0.5)',
                }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(255, 40, 0, 0.1) 0%, transparent 70%)',
                  }}
                />
                
                <div className="relative z-10">
                  <div className="text-[#FF2800] mb-3">
                    {stat.icon}
                  </div>
                  <div 
                    className="text-4xl font-bold text-white mb-2"
                    style={{
                      textShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>

                {/* Border glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{
                    boxShadow: '0 0 30px rgba(255, 40, 0, 0.4), inset 0 0 30px rgba(255, 40, 0, 0.1)',
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            {/* Primary CTA - Book Test Drive */}
            <motion.button
              className="group relative px-10 py-5 rounded-full overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #FF2800 0%, #cc2000 100%)',
                boxShadow: '0 10px 40px rgba(255, 40, 0, 0.4)',
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 15px 60px rgba(255, 40, 0, 0.6)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 text-white text-lg font-medium flex items-center gap-2">
                Book a Test Drive
                <Play className="w-5 h-5" />
              </span>
              
              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>

            {/* Secondary CTA - Explore Models */}
            <motion.button
              className="group relative px-10 py-5 rounded-full overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
              }}
              whileHover={{ 
                scale: 1.05,
                borderColor: 'rgba(255, 40, 0, 0.5)',
                boxShadow: '0 10px 40px rgba(255, 40, 0, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 text-white text-lg font-medium">
                Explore Models
              </span>
              
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(circle at center, rgba(255, 40, 0, 0.1) 0%, transparent 70%)',
                }}
              />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div 
          className="w-6 h-10 rounded-full flex items-start justify-center p-2"
          style={{
            border: '2px solid rgba(255, 255, 255, 0.3)',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span className="text-white/60 text-xs uppercase tracking-widest">Scroll</span>
      </motion.div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 pointer-events-none z-20">
        <div 
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF2800] to-transparent"
          style={{ boxShadow: '0 0 20px rgba(255, 40, 0, 0.5)' }}
        />
        <div 
          className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#FF2800] to-transparent"
          style={{ boxShadow: '0 0 20px rgba(255, 40, 0, 0.5)' }}
        />
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none z-20">
        <div 
          className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-[#FF2800] to-transparent"
          style={{ boxShadow: '0 0 20px rgba(255, 40, 0, 0.5)' }}
        />
        <div 
          className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-[#FF2800] to-transparent"
          style={{ boxShadow: '0 0 20px rgba(255, 40, 0, 0.5)' }}
        />
      </div>
    </div>
  );
};
