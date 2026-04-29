import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const timelineData = [
  {
    year: '1947',
    title: 'The Birth of a Legend',
    description: 'Enzo Ferrari creates the first car bearing his name',
    image: 'https://images.unsplash.com/photo-1762857362399-2feaa4fea09e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJyYXJpJTIwdmludGFnZSUyMHJhY2luZyUyMGhlcml0YWdlfGVufDF8fHx8MTc3NTI4MTEzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    year: '1975',
    title: 'Racing Excellence',
    description: 'Dominating circuits worldwide with innovation',
    image: 'https://images.unsplash.com/photo-1614102147062-7ff82414003b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJyYXJpJTIwcmFjaW5nJTIwdHJhY2slMjBzcGVlZHxlbnwxfHx8fDE3NzUyODExNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    year: '2024',
    title: 'Future Forward',
    description: 'Redefining luxury performance for tomorrow',
    image: 'https://images.unsplash.com/photo-1749566710664-2190fe0e2281?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBmZXJyYXJpJTIwbW9kZXJuJTIwc3VwZXJjYXJ8ZW58MXx8fHwxNzc1MjgxMTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export const LegacySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-66%']);

  return (
    <div id="heritage" ref={containerRef} className="relative min-h-screen bg-black py-32 overflow-hidden">
      <div className="mb-20 px-8 lg:px-16">
        <motion.h2
          className="text-6xl lg:text-8xl font-bold text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          A Legacy of <span className="text-[#FF2800]">Excellence</span>
        </motion.h2>
      </div>

      {/* Horizontal Scroll Timeline */}
      <div className="relative">
        <motion.div 
          className="flex gap-16 px-8 lg:px-16"
          style={{ x }}
        >
          {timelineData.map((item, index) => (
            <motion.div
              key={item.year}
              className="flex-shrink-0 w-screen lg:w-[800px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Year */}
              <div className="relative">
                <motion.span
                  className="text-[12rem] lg:text-[18rem] font-bold text-transparent"
                  style={{
                    WebkitTextStroke: '2px rgba(255, 255, 255, 0.1)',
                  }}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {item.year}
                </motion.span>
                <motion.div
                  className="absolute top-1/2 left-0 w-32 h-1 bg-[#FF2800]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  style={{ transformOrigin: 'left' }}
                />
              </div>

              {/* Content */}
              <div className="space-y-6">
                <motion.div
                  className="relative overflow-hidden rounded-sm aspect-video"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h3 className="text-4xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xl text-white/70">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};