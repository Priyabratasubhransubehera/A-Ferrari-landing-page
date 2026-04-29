import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

export const LoadingScreen = ({ onLoadComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadComplete(), 300);
          return 100;
        }
        return prev + 5; // Faster progress
      });
    }, 20); // Faster interval

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  if (progress >= 100) return null; // Remove from DOM when complete

  return (
    <motion.div
      className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress >= 100 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      style={{ pointerEvents: progress >= 100 ? 'none' : 'auto' }}
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Radial gradient pulses */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 40, 0, 0.15) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 40, 0, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 40, 0, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Ferrari Logo with 3D effect */}
      <motion.div
        className="mb-12 relative"
        initial={{ scale: 0.8, opacity: 0, rotateY: -45 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px',
        }}
      >
        <h1 
          className="text-6xl lg:text-8xl font-bold text-[#FF2800] tracking-wider relative z-10"
          style={{
            textShadow: '0 0 40px rgba(255, 40, 0, 0.6), 0 0 80px rgba(255, 40, 0, 0.3)',
          }}
        >
          FERRARI
        </h1>
        
        {/* 3D shadow layer */}
        <div 
          className="absolute top-2 left-2 text-6xl lg:text-8xl font-bold tracking-wider -z-10"
          style={{
            color: 'rgba(255, 40, 0, 0.2)',
            transform: 'translateZ(-10px)',
          }}
        >
          FERRARI
        </div>
      </motion.div>

      {/* Progress Bar Container with glassmorphism */}
      <div 
        className="w-80 lg:w-96 h-1 relative overflow-hidden rounded-full"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Progress Bar */}
        <motion.div
          className="absolute top-0 left-0 h-full rounded-full"
          style={{ 
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #FF2800 0%, #ff5530 100%)',
            boxShadow: '0 0 20px rgba(255, 40, 0, 0.8)',
          }}
          transition={{ duration: 0.1 }}
        >
          {/* Glow Effect */}
          <div className="absolute right-0 top-0 w-20 h-full bg-white blur-xl opacity-60" />
        </motion.div>
      </div>

      {/* Progress Percentage with glow */}
      <motion.p
        className="mt-6 text-white text-2xl font-bold tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{
          textShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
        }}
      >
        {progress}%
      </motion.p>

      {/* Subtitle */}
      <motion.p
        className="mt-8 text-white/60 text-xs uppercase tracking-[0.3em]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        Preparing Your Experience
      </motion.p>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#FF2800]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 10px #FF2800',
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};