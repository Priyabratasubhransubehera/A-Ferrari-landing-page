import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { useCountUp } from '../hooks/useCountUp';
import { Gauge, Zap, Trophy, Flame, Wind, Target } from 'lucide-react';

const stats = [
  {
    icon: <Gauge className="w-8 h-8" />,
    value: 340,
    suffix: "+",
    label: "KM/H",
    description: "Top Speed",
    color: "#FF2800",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    value: 800,
    suffix: "+",
    label: "HP",
    description: "Horsepower",
    color: "#FFD700",
  },
  {
    icon: <Wind className="w-8 h-8" />,
    value: 2.9,
    decimal: true,
    suffix: "s",
    label: "0-100",
    description: "Acceleration",
    color: "#00D9FF",
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    value: 16,
    suffix: "+",
    label: "Titles",
    description: "Championships",
    color: "#FF2800",
  },
  {
    icon: <Flame className="w-8 h-8" />,
    value: 75,
    suffix: "+",
    label: "Years",
    description: "Legacy",
    color: "#FFD700",
  },
  {
    icon: <Target className="w-8 h-8" />,
    value: 99,
    suffix: "%",
    label: "Precision",
    description: "Engineering",
    color: "#00D9FF",
  },
];

const StatCard = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const count = useCountUp(isVisible ? stat.value : 0, 2000, stat.decimal);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div
        className="relative h-full rounded-3xl p-8 overflow-hidden cursor-pointer"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%)',
          backdropFilter: 'blur(30px) saturate(150%)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6), inset 0 0 80px rgba(255, 40, 0, 0.05)',
        }}
        whileHover={{
          scale: 1.08,
          borderColor: `${stat.color}CC`,
          boxShadow: `0 20px 60px rgba(0, 0, 0, 0.8), 0 0 60px ${stat.color}60, inset 0 0 80px ${stat.color}20`,
        }}
        transition={{ duration: 0.4 }}
      >
        {/* Animated background glow */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${stat.color}30 0%, ${stat.color}10 50%, transparent 80%)`,
          }}
        />

        {/* Shine effect on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)',
          }}
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: stat.color,
                left: `${20 + i * 30}%`,
                bottom: 0,
              }}
              animate={{
                y: [-10, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            className="mb-6"
            style={{ color: stat.color }}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            {stat.icon}
          </motion.div>

          {/* Counter */}
          <div className="mb-4">
            <motion.div
              className="text-6xl font-bold text-white mb-2"
              style={{
                textShadow: `0 0 40px ${stat.color}80, 0 4px 20px rgba(0, 0, 0, 0.8)`,
              }}
            >
              {count}
              <span className="text-4xl" style={{ color: stat.color, textShadow: `0 0 30px ${stat.color}` }}>
                {stat.suffix}
              </span>
            </motion.div>
            <div className="text-2xl text-white font-medium mb-1" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)' }}>
              {stat.label}
            </div>
            <div className="text-white/70 text-sm uppercase tracking-widest" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)' }}>
              {stat.description}
            </div>
          </div>

          {/* Progress bar */}
          <div className="relative h-1 bg-white/10 rounded-full overflow-hidden mt-6">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                background: `linear-gradient(90deg, ${stat.color} 0%, ${stat.color}80 100%)`,
                boxShadow: `0 0 20px ${stat.color}60`,
              }}
              initial={{ width: 0 }}
              animate={{ width: isVisible ? '100%' : 0 }}
              transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `linear-gradient(90deg, transparent, ${stat.color})`,
              boxShadow: `0 0 10px ${stat.color}`,
            }}
          />
          <div
            className="absolute top-0 right-0 w-0.5 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `linear-gradient(180deg, transparent, ${stat.color})`,
              boxShadow: `0 0 10px ${stat.color}`,
            }}
          />
        </div>

        {/* Glow border on hover */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            boxShadow: `0 0 40px ${stat.color}40, inset 0 0 40px ${stat.color}10`,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

export const PerformanceStats3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);

  return (
    <div ref={containerRef} className="relative py-32 bg-black overflow-hidden">
      {/* 3D Ferrari Background Image */}
      <div className="absolute inset-0">
        {/* Ferrari Image Layer */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1553985214-1c3f33cf3ecb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0.4) contrast(1.1)',
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

        {/* Red Accent Overlay */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255, 40, 0, 0.2) 0%, transparent 60%)',
          }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* 3D Depth Effect - Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.9) 100%)',
          }}
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 40, 0, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 40, 0, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Animated light reflection */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, rgba(255, 40, 0, 0.1) 50%, transparent 100%)',
          }}
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 2,
          }}
        />

        {/* Radial glow spotlight */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 40, 0, 0.2) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        style={{ 
          y,
          rotateX,
          transformPerspective: 1000,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="container mx-auto px-8 lg:px-16">
          {/* Section header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-6"
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6)',
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 8px 32px rgba(255, 40, 0, 0.4)',
              }}
            >
              <Gauge className="w-4 h-4 text-[#FF2800]" />
              <span className="text-white text-sm uppercase tracking-widest" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)' }}>
                Performance Excellence
              </span>
            </motion.div>

            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              <span style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.9)' }}>
                Numbers That
              </span>
              <br />
              <span
                className="text-[#FF2800]"
                style={{
                  textShadow: '0 0 60px rgba(255, 40, 0, 0.9), 0 0 100px rgba(255, 40, 0, 0.5), 0 4px 20px rgba(0, 0, 0, 0.9)',
                }}
              >
                Define Greatness
              </span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto" style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.9)' }}>
              Every statistic tells a story of relentless pursuit of perfection
            </p>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.button
              className="px-12 py-5 rounded-full text-white font-medium text-lg"
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
              Explore Full Specifications
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative elements - Enhanced */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: i % 3 === 0 ? '4px' : '3px',
            height: i % 3 === 0 ? '4px' : '3px',
            background: i % 3 === 0 ? '#FF2800' : i % 2 === 0 ? '#FFD700' : '#00D9FF',
            boxShadow: `0 0 20px ${i % 3 === 0 ? '#FF2800' : i % 2 === 0 ? '#FFD700' : '#00D9FF'}`,
            left: `${10 + i * 12}%`,
            top: i % 2 === 0 ? '15%' : '80%',
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Ferrari Logo Watermark */}
      <motion.div
        className="absolute top-10 right-10 text-[#FF2800] font-bold text-xl tracking-[0.3em] opacity-20"
        style={{
          textShadow: '0 0 30px rgba(255, 40, 0, 0.6)',
          fontFamily: 'serif',
        }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        PERFORMANCE
      </motion.div>
    </div>
  );
};
