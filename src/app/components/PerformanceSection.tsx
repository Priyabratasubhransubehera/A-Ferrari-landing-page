import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { useCountUp } from '../hooks/useCountUp';

const stats = [
  { label: 'Top Speed', value: 340, unit: 'km/h', position: 'top-1/4 left-1/4' },
  { label: 'Horsepower', value: 800, unit: 'HP', position: 'top-1/3 right-1/4' },
  { label: '0-100', value: 2.9, unit: 'sec', position: 'bottom-1/3 left-1/3', decimal: true },
];

export const PerformanceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-15, 0, 15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <div 
      id="performance"
      ref={containerRef} 
      className="relative min-h-screen bg-black flex items-center justify-center py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FF2800]/10 via-black to-black" />

      <div className="relative z-10 container mx-auto px-8">
        <motion.h2
          className="text-6xl lg:text-8xl font-bold text-white text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Raw <span className="text-[#FF2800]">Power</span>
        </motion.h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Central Car Image */}
          <motion.div
            className="relative perspective-1000"
            style={{ 
              rotateY,
              scale,
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            onViewportEnter={() => setIsInView(true)}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 1 }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1760191062947-fabf83477e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJyYXJpJTIwc2lkZSUyMHByb2ZpbGUlMjBkYXJrfGVufDF8fHx8MTc3NTI4MTEzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Ferrari Performance"
                className="w-full h-auto"
              />
              
              {/* Pulsing glow around car */}
              <motion.div
                className="absolute inset-0 bg-[#FF2800] blur-3xl opacity-20"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          {/* Floating Stats */}
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ 
  stat, 
  index, 
  isInView 
}: { 
  stat: typeof stats[0]; 
  index: number; 
  isInView: boolean;
}) => {
  const count = useCountUp(
    isInView ? stat.value : 0,
    2000, 
    stat.decimal || false
  );

  const displayValue = stat.decimal ? count.toFixed(1) : Math.floor(count);

  return (
    <motion.div
      className={`absolute ${stat.position} hidden lg:block`}
      initial={{ opacity: 0, scale: 0 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <motion.div
        className="relative bg-black/60 backdrop-blur-md border border-white/10 rounded-sm p-8 min-w-[200px]"
        whileHover={{ scale: 1.1, borderColor: 'rgba(255, 40, 0, 0.5)' }}
        transition={{ duration: 0.3 }}
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 bg-[#FF2800] rounded-sm blur-xl opacity-0"
          whileHover={{ opacity: 0.2 }}
          transition={{ duration: 0.3 }}
        />
        
        <div className="relative z-10">
          <motion.div 
            className="text-5xl font-bold text-[#FF2800] mb-2"
            animate={isInView ? {
              textShadow: [
                '0 0 10px rgba(255, 40, 0, 0)',
                '0 0 20px rgba(255, 40, 0, 0.5)',
                '0 0 10px rgba(255, 40, 0, 0)',
              ]
            } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {displayValue}
            <span className="text-2xl ml-1">{stat.unit}</span>
          </motion.div>
          <div className="text-sm text-white/70 uppercase tracking-widest">
            {stat.label}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};