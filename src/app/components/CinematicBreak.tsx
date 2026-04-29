import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export const CinematicBreak = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

  return (
    <div 
      ref={containerRef} 
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <motion.div
        className="absolute inset-0"
        style={{ scale }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1730298876364-2cab8e09d0a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJyYXJpJTIwd2hpdGUlMjBsdXh1cnklMjBleG90aWN8ZW58MXx8fHwxNzc1MjgxMTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Ferrari Cinematic"
          className="w-full h-full object-cover"
          style={{ opacity }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
      </motion.div>

      {/* Subtle Quote */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <motion.p
          className="text-white text-4xl lg:text-6xl font-light text-center max-w-4xl px-8"
          initial={{ y: 40 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          "Racing is life. Anything before or after is just waiting."
        </motion.p>
      </motion.div>
    </div>
  );
};
