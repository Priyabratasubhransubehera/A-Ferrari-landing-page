import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { Cpu, Layers, Wind, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "V12 Engine",
    subtitle: "Pure Power",
    description: "Engineering excellence with 800+ horsepower delivering unmatched performance",
    image: "https://images.unsplash.com/photo-1768370771126-18f6f6d9a5be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJyYXJpJTIwZW5naW5lJTIwdjEyJTIwZGV0YWlsfGVufDF8fHx8MTc3NTI4MjMwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "#FF2800",
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Carbon Fiber",
    subtitle: "Lightweight Design",
    description: "Advanced materials reducing weight while maximizing structural integrity",
    image: "https://images.unsplash.com/photo-1774759617562-6350530f5b97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJib24lMjBmaWJlciUyMHRleHR1cmUlMjBsdXh1cnklMjBjYXJ8ZW58MXx8fHwxNzc1MjgyMzAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "#FFD700",
  },
  {
    icon: <Wind className="w-8 h-8" />,
    title: "Aerodynamics",
    subtitle: "Perfect Balance",
    description: "Wind tunnel tested design for optimal downforce and minimal drag",
    image: "https://images.unsplash.com/photo-1732634121983-fb73c4fa96d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJyYXJpJTIwYWVyb2R5bmFtaWNzJTIwZGVzaWdufGVufDF8fHx8MTc3NTI4MjMwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "#00D9FF",
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      className="group relative h-[500px] cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      <motion.div
        className="relative h-full rounded-3xl overflow-hidden"
        style={{
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(30px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
        animate={{
          rotateX: isHovered ? (mousePosition.y - 0.5) * 10 : 0,
          rotateY: isHovered ? (mousePosition.x - 0.5) * 10 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Background image */}
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={feature.image}
            alt={feature.title}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        </motion.div>

        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, ${feature.color}30 0%, transparent 50%)`,
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Border glow */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            boxShadow: `0 0 40px ${feature.color}40, inset 0 0 40px ${feature.color}10`,
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-8">
          {/* Icon */}
          <motion.div
            className="self-start"
            style={{ color: feature.color }}
            animate={{
              scale: isHovered ? 1.2 : 1,
              rotate: isHovered ? 360 : 0,
            }}
            transition={{ duration: 0.6 }}
          >
            {feature.icon}
          </motion.div>

          {/* Text content */}
          <div>
            <motion.div
              className="text-sm uppercase tracking-widest mb-2"
              style={{ color: feature.color }}
              animate={{
                y: isHovered ? -5 : 0,
              }}
            >
              {feature.subtitle}
            </motion.div>

            <motion.h3
              className="text-4xl font-bold text-white mb-4"
              style={{
                textShadow: `0 0 30px ${feature.color}40`,
              }}
              animate={{
                y: isHovered ? -5 : 0,
              }}
              transition={{ delay: 0.05 }}
            >
              {feature.title}
            </motion.h3>

            <motion.p
              className="text-white/70 leading-relaxed"
              animate={{
                y: isHovered ? -5 : 0,
                opacity: isHovered ? 1 : 0.7,
              }}
              transition={{ delay: 0.1 }}
            >
              {feature.description}
            </motion.p>

            {/* Interactive line */}
            <motion.div
              className="h-1 rounded-full mt-6"
              style={{
                background: `linear-gradient(90deg, ${feature.color} 0%, transparent 100%)`,
              }}
              animate={{
                scaleX: isHovered ? 1 : 0.3,
              }}
              transition={{ duration: 0.4 }}
              style={{ transformOrigin: 'left' }}
            />
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {isHovered && [...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: feature.color,
                boxShadow: `0 0 10px ${feature.color}`,
                left: `${20 + i * 20}%`,
                bottom: '20%',
              }}
              initial={{ y: 0, opacity: 0 }}
              animate={{
                y: [-10, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* Corner accents */}
        <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none">
          <motion.div
            className="absolute top-0 right-0 w-full h-0.5"
            style={{
              background: `linear-gradient(90deg, transparent, ${feature.color})`,
            }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scaleX: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            style={{ transformOrigin: 'right' }}
          />
          <motion.div
            className="absolute top-0 right-0 w-0.5 h-full"
            style={{
              background: `linear-gradient(180deg, transparent, ${feature.color})`,
            }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scaleY: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            style={{ transformOrigin: 'top' }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export const TechFeatures3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative py-32 bg-black overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 40, 0, 0.08) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <motion.div style={{ y, opacity }}>
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
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <Sparkles className="w-4 h-4 text-[#FF2800]" />
              <span className="text-white text-sm uppercase tracking-widest">Innovation & Technology</span>
            </motion.div>

            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Engineering
              <br />
              <span
                className="text-[#FF2800]"
                style={{
                  textShadow: '0 0 40px rgba(255, 40, 0, 0.6)',
                }}
              >
                Perfection
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Every detail crafted for performance, every component designed for excellence
            </p>
          </motion.div>

          {/* Feature cards grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
