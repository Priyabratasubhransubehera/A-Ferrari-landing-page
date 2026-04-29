import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';

const models = [
  {
    name: 'SF90 Stradale',
    type: 'Hybrid V8 Supercar',
    specs: '1000 HP • 340 km/h',
    image: 'https://images.unsplash.com/photo-1774811734441-5c2037ff197b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJyYXJpJTIwcmVkJTIwc3VwZXJjYXIlMjBsdXh1cnklMjBzcG9ydHN8ZW58MXx8fHwxNzc3MzU2MDg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#FF2800'
  },
  {
    name: 'LaFerrari',
    type: 'Limited Edition Hypercar',
    specs: '963 HP • 350+ km/h',
    image: 'https://images.unsplash.com/photo-1716341967794-8e0901651468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmZXJyYXJpJTIwcmVkJTIwc3VwZXJjYXIlMjBsdXh1cnklMjBzcG9ydHN8ZW58MXx8fHwxNzc3MzU2MDg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#D62828'
  },
  {
    name: 'F8 Tributo',
    type: 'V8 Excellence',
    specs: '720 HP • 340 km/h',
    image: 'https://images.unsplash.com/photo-1773220383896-70f684de57d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxmZXJyYXJpJTIwcmVkJTIwc3VwZXJjYXIlMjBsdXh1cnklMjBzcG9ydHN8ZW58MXx8fHwxNzc3MzU2MDg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#CC0000'
  },
  {
    name: '488 Pista',
    type: 'Track Performance',
    specs: '710 HP • 340 km/h',
    image: 'https://images.unsplash.com/photo-1768088929852-8b723572fa4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxmZXJyYXJpJTIwcmVkJTIwc3VwZXJjYXIlMjBsdXh1cnklMjBzcG9ydHN8ZW58MXx8fHwxNzc3MzU2MDg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#FF2800'
  },
  {
    name: '812 Superfast',
    type: 'V12 Grand Tourer',
    specs: '800 HP • 340 km/h',
    image: 'https://images.unsplash.com/photo-1758409313194-29aea230c369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJyYXJpJTIwYmxhY2slMjBzcG9ydHMlMjBjYXIlMjByYWNpbmd8ZW58MXx8fHwxNzc3MzU2MDg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#1A1A1A'
  },
  {
    name: 'Roma',
    type: 'Modern Elegance',
    specs: '620 HP • 320 km/h',
    image: 'https://images.unsplash.com/photo-1758785064253-284ea0e65965?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmZXJyYXJpJTIwYmxhY2slMjBzcG9ydHMlMjBjYXIlMjByYWNpbmd8ZW58MXx8fHwxNzc3MzU2MDg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#2C2C2C'
  },
  {
    name: 'Monza SP2',
    type: 'Limited Series Speedster',
    specs: '810 HP • 300+ km/h',
    image: 'https://images.unsplash.com/photo-1697678000483-ecbce759c9c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxmZXJyYXJpJTIwYmxhY2slMjBzcG9ydHMlMjBjYXIlMjByYWNpbmd8ZW58MXx8fHwxNzc3MzU2MDg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#000000'
  },
  {
    name: 'F40 Competizione',
    type: 'Racing Legend',
    specs: '520 HP • 324 km/h',
    image: 'https://images.unsplash.com/photo-1772273197612-d7dc4f34b646?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJyYXJpJTIweWVsbG93JTIwcmFjaW5nJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzc3MzU2MDg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#FFD700'
  }
];

export const ModelsShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ['5%', '-50%']);

  return (
    <div id="models" ref={containerRef} className="relative min-h-screen bg-black py-32 overflow-hidden">
      <div className="mb-20 px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
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
            <span className="text-[#FF2800] text-sm uppercase tracking-widest">Legendary Models</span>
          </motion.div>
          <h2 className="text-6xl lg:text-8xl font-bold text-white mb-4">
            Our <span className="text-[#FF2800]" style={{ textShadow: '0 0 40px rgba(255, 40, 0, 0.6)' }}>Collection</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl">
            Explore our range of iconic Ferrari models, each representing the pinnacle of automotive excellence and Italian craftsmanship.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Gallery */}
      <motion.div 
        className="flex gap-8 px-8 lg:px-16"
        style={{ x }}
      >
        {models.map((model, index) => (
          <ModelCard key={model.name} model={model} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

const ModelCard = ({
  model,
  index
}: {
  model: typeof models[0];
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative flex-shrink-0 w-[450px] lg:w-[650px] group cursor-pointer"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl"
        style={{
          transformStyle: 'preserve-3d',
          transformPerspective: 1000,
        }}
        animate={{
          rotateY: isHovered ? 5 : 0,
          rotateX: isHovered ? -2 : 0,
          z: isHovered ? 50 : 0,
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Image Container with 3D effect */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.img
            src={model.image}
            alt={model.name}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.15 : 1,
              filter: isHovered ? 'brightness(1.1) contrast(1.1)' : 'brightness(1) contrast(1)'
            }}
            transition={{ duration: 0.8 }}
          />

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

          {/* Dynamic Color Glow */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at center, ${model.color}40 0%, transparent 70%)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />

          {/* Animated light reflection */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"
            initial={{ opacity: 0, x: '-100%', y: '-100%' }}
            animate={{
              opacity: isHovered ? 1 : 0,
              x: isHovered ? '100%' : '-100%',
              y: isHovered ? '100%' : '-100%',
            }}
            transition={{ duration: 1.2 }}
          />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          {/* Top badge */}
          <motion.div
            className="absolute top-6 right-6 px-4 py-2 rounded-full"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : -20
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-white text-xs font-medium uppercase tracking-wider">{model.specs}</span>
          </motion.div>

          <motion.div
            animate={{ y: isHovered ? -15 : 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Model Name */}
            <motion.h3
              className="text-4xl lg:text-5xl font-bold text-white mb-2"
              style={{
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)',
              }}
            >
              {model.name}
            </motion.h3>

            {/* Model Type */}
            <motion.p
              className="text-white/80 text-lg mb-4"
              style={{
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)',
              }}
            >
              {model.type}
            </motion.p>

            {/* Divider */}
            <motion.div
              className="w-20 h-1 mb-6"
              style={{
                background: `linear-gradient(90deg, ${model.color} 0%, transparent 100%)`,
                boxShadow: `0 0 20px ${model.color}80`,
              }}
              animate={{
                width: isHovered ? 120 : 80,
              }}
              transition={{ duration: 0.4 }}
            />

            {/* CTA Button */}
            <motion.button
              className="relative px-8 py-4 rounded-full overflow-hidden font-medium text-white text-sm uppercase tracking-widest"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 20,
                borderColor: isHovered ? `${model.color}80` : 'rgba(255, 255, 255, 0.3)',
                boxShadow: isHovered ? `0 10px 40px ${model.color}60` : '0 0 0 transparent',
              }}
              transition={{ duration: 0.3 }}
              whileHover={{
                scale: 1.08,
                background: model.color,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Explore Model</span>
            </motion.button>
          </motion.div>
        </div>

        {/* 3D Border Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            border: `2px solid ${model.color}00`,
          }}
          animate={{
            borderColor: isHovered ? `${model.color}CC` : `${model.color}00`,
            boxShadow: isHovered ? `0 0 60px ${model.color}80, inset 0 0 60px ${model.color}40` : 'none',
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Corner Accents */}
        <motion.div
          className="absolute top-0 left-0 w-16 h-16 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="absolute top-0 left-0 w-full h-0.5"
            style={{
              background: `linear-gradient(90deg, ${model.color} 0%, transparent 100%)`,
              boxShadow: `0 0 10px ${model.color}`,
            }}
          />
          <div
            className="absolute top-0 left-0 w-0.5 h-full"
            style={{
              background: `linear-gradient(180deg, ${model.color} 0%, transparent 100%)`,
              boxShadow: `0 0 10px ${model.color}`,
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};