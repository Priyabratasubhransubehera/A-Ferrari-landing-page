import { motion } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';
import { useState } from 'react';

export const SoundToggle = () => {
  const [isSoundOn, setIsSoundOn] = useState(false);

  return (
    <motion.button
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center group"
      onClick={() => setIsSoundOn(!isSoundOn)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
    >
      {/* Glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#FF2800] opacity-0 group-hover:opacity-20 blur-xl"
        transition={{ duration: 0.3 }}
      />
      
      {/* Icon */}
      <motion.div
        className="relative z-10"
        animate={{ rotate: isSoundOn ? 0 : 360 }}
        transition={{ duration: 0.5 }}
      >
        {isSoundOn ? (
          <Volume2 className="w-5 h-5 text-[#FF2800]" />
        ) : (
          <VolumeX className="w-5 h-5 text-white/60" />
        )}
      </motion.div>

      {/* Pulse animation when sound is on */}
      {isSoundOn && (
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-[#FF2800]"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.6, 0, 0.6]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      )}
    </motion.button>
  );
};
