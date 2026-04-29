import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-[#FF2800] origin-left z-[60]"
      style={{ scaleX }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-[#FF2800] blur-sm opacity-60" />
    </motion.div>
  );
};
