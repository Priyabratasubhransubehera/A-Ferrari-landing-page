import { motion } from 'motion/react';
import { useMousePosition } from '../hooks/useMousePosition';
import { useState } from 'react';

const hotspots = [
  {
    id: 'engine',
    label: 'V12 Engine',
    description: '800+ HP of pure performance',
    position: { top: '45%', left: '60%' }
  },
  {
    id: 'wheels',
    label: 'Carbon Ceramic Brakes',
    description: 'Precision stopping power',
    position: { top: '70%', left: '25%' }
  },
  {
    id: 'interior',
    label: 'Luxury Interior',
    description: 'Hand-crafted Italian leather',
    position: { top: '35%', left: '35%' }
  }
];

export const InteractiveCarSection = () => {
  const mousePosition = useMousePosition();
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
      
      <div className="relative z-20 w-full max-w-7xl mx-auto px-8">
        <motion.h2
          className="text-6xl lg:text-8xl font-bold text-white text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Explore the <span className="text-[#FF2800]">Details</span>
        </motion.h2>

        <div className="relative">
          {/* Car Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://images.unsplash.com/photo-1770998610672-8f18f5773255?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBtb3Rpb24lMjBibHVyfGVufDF8fHx8MTc3NTI4MTEzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Ferrari Details"
              className="w-full h-auto"
            />

            {/* Mouse-follow Spotlight Effect */}
            <motion.div
              className="absolute w-96 h-96 rounded-full pointer-events-none"
              style={{
                left: mousePosition.x - 192,
                top: mousePosition.y - 192,
                background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,40,0,0.1) 30%, transparent 70%)',
                filter: 'blur(30px)',
                mixBlendMode: 'overlay',
              }}
            />
          </motion.div>

          {/* Interactive Hotspots */}
          {hotspots.map((hotspot, index) => (
            <motion.div
              key={hotspot.id}
              className="absolute cursor-pointer"
              style={{ 
                top: hotspot.position.top, 
                left: hotspot.position.left,
                transform: 'translate(-50%, -50%)'
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onHoverStart={() => setActiveHotspot(hotspot.id)}
              onHoverEnd={() => setActiveHotspot(null)}
            >
              {/* Hotspot Pulse */}
              <motion.div
                className="relative"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Outer Ring */}
                <motion.div
                  className="absolute w-16 h-16 rounded-full border-2 border-[#FF2800]"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 0, 0.6]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                  style={{ transform: 'translate(-50%, -50%)' }}
                />
                
                {/* Inner Dot */}
                <motion.div
                  className="w-4 h-4 rounded-full bg-[#FF2800] relative z-10"
                  whileHover={{ scale: 1.5 }}
                  animate={{
                    boxShadow: [
                      '0 0 10px rgba(255, 40, 0, 0.5)',
                      '0 0 30px rgba(255, 40, 0, 0.8)',
                      '0 0 10px rgba(255, 40, 0, 0.5)',
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Tooltip */}
              <motion.div
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64"
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: activeHotspot === hotspot.id ? 1 : 0,
                  y: activeHotspot === hotspot.id ? 0 : 10
                }}
                transition={{ duration: 0.3 }}
                style={{ pointerEvents: 'none' }}
              >
                <div className="bg-black/90 backdrop-blur-md border border-[#FF2800]/30 rounded-sm p-4">
                  <h4 className="text-white font-bold text-lg mb-1">
                    {hotspot.label}
                  </h4>
                  <p className="text-white/70 text-sm">
                    {hotspot.description}
                  </p>
                  
                  {/* Tooltip Arrow */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-black/90 border-r border-b border-[#FF2800]/30 rotate-45" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
