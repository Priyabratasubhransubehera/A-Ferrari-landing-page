import { motion } from 'motion/react';
import { useRef } from 'react';
import { useScroll, useTransform } from 'motion/react';

export const ScrollTransition = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ['-100%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <div ref={containerRef} className="relative h-screen w-full bg-black flex items-center justify-center overflow-hidden">
      {/* Red Streak Animation */}
      <motion.div
        className="absolute w-full h-2 bg-gradient-to-r from-transparent via-[#FF2800] to-transparent"
        style={{ x, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 blur-sm" />
      </motion.div>
      
      {/* Additional glow effect */}
      <motion.div
        className="absolute w-full h-32 bg-gradient-to-r from-transparent via-[#FF2800]/20 to-transparent blur-3xl"
        style={{ x, opacity }}
      />
    </div>
  );
};
