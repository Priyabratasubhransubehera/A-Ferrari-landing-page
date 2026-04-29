import { motion } from 'motion/react';
import { useState, useRef } from 'react';

const experiences = [
  {
    title: 'Interior',
    description: 'Handcrafted luxury meets cutting-edge technology',
    image: 'https://images.unsplash.com/photo-1770064746893-c93e3fde849f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJyYXJpJTIwaW50ZXJpb3IlMjBsdXh1cnklMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzc1MjgxMTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Design',
    description: 'Aerodynamic perfection sculpted by passion',
    image: 'https://images.unsplash.com/photo-1650263133421-30bfd4b59497?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJyYXJpJTIwd2hlZWwlMjBkZXRhaWwlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3NTI4MTEzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Engineering',
    description: 'Precision engineering for ultimate performance',
    image: 'https://images.unsplash.com/photo-1761751237639-78711166d6f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJyYXJpJTIwZW5naW5lJTIwcGVyZm9ybWFuY2UlMjBtb3RvcnxlbnwxfHx8fDE3NzUyODExMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export const ExperienceSection = () => {
  return (
    <div id="experience" className="relative min-h-screen bg-black py-32">
      <div className="container mx-auto px-8 lg:px-16">
        <motion.h2
          className="text-6xl lg:text-8xl font-bold text-white text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          The <span className="text-[#FF2800]">Experience</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.title} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ExperienceCard = ({ 
  experience, 
  index 
}: { 
  experience: typeof experiences[0]; 
  index: number;
}) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="group relative perspective-1000"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative overflow-hidden rounded-sm backdrop-blur-md bg-white/5 border border-white/10 p-1"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        whileHover={{ scale: 1.05 }}
      >
        {/* Glassmorphism Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-sm" />
        
        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-[#FF2800] rounded-sm blur-xl opacity-0 group-hover:opacity-20"
          transition={{ duration: 0.5 }}
        />

        <div className="relative rounded-sm overflow-hidden" style={{ transform: 'translateZ(20px)' }}>
          {/* Image */}
          <div className="relative aspect-square overflow-hidden">
            <motion.img
              src={experience.image}
              alt={experience.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative p-8">
            <motion.h3
              className="text-3xl font-bold text-white mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {experience.title}
            </motion.h3>
            <motion.p
              className="text-white/70 text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {experience.description}
            </motion.p>
          </div>
        </div>

        {/* Shine Effect on Hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ x: '-100%', y: '-100%' }}
          whileHover={{ x: '100%', y: '100%' }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
          }}
        />
      </motion.div>
    </motion.div>
  );
};