import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Gauge, Zap, Wind } from 'lucide-react';

const models = [
  {
    name: "Ferrari 488 GTB",
    tagline: "Born on the Track",
    image: "https://images.unsplash.com/photo-1716341930202-af49146d9a1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJyYXJpJTIwNDg4JTIwcmVkJTIwc3BvcnRzJTIwY2FyfGVufDF8fHx8MTc3NTI4MjA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    specs: [
      { icon: <Gauge className="w-4 h-4" />, value: "661 HP", label: "Power" },
      { icon: <Zap className="w-4 h-4" />, value: "3.0s", label: "0-100" },
      { icon: <Wind className="w-4 h-4" />, value: "330 km/h", label: "Top Speed" },
    ],
    price: "From $252,800"
  },
  {
    name: "Ferrari F8 Tributo",
    tagline: "Pure Performance",
    image: "https://images.unsplash.com/photo-1730110206438-84d983766aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJyYXJpJTIwZjglMjB0cmlidXRvJTIwcmVkfGVufDF8fHx8MTc3NTI4MjA2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    specs: [
      { icon: <Gauge className="w-4 h-4" />, value: "720 HP", label: "Power" },
      { icon: <Zap className="w-4 h-4" />, value: "2.9s", label: "0-100" },
      { icon: <Wind className="w-4 h-4" />, value: "340 km/h", label: "Top Speed" },
    ],
    price: "From $280,000"
  },
  {
    name: "Ferrari SF90 Stradale",
    tagline: "Hybrid Excellence",
    image: "https://images.unsplash.com/photo-1764013327169-05b660a18379?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJyYXJpJTIwc2Y5MCUyMHN0cmFkYWxlJTIwbHV4dXJ5fGVufDF8fHx8MTc3NTI4MjA2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    specs: [
      { icon: <Gauge className="w-4 h-4" />, value: "1000 HP", label: "Power" },
      { icon: <Zap className="w-4 h-4" />, value: "2.5s", label: "0-100" },
      { icon: <Wind className="w-4 h-4" />, value: "340 km/h", label: "Top Speed" },
    ],
    price: "From $625,000"
  },
];

export const FeaturedModels3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % models.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + models.length) % models.length);
  };

  return (
    <div ref={containerRef} className="relative py-32 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0A0A] to-black" />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-0 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 40, 0, 0.1) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

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
              <span className="text-[#FF2800] text-sm uppercase tracking-widest">Featured Collection</span>
            </motion.div>
            
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-4">
              Legendary <span className="text-[#FF2800]">Models</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Discover the pinnacle of automotive engineering
            </p>
          </motion.div>

          {/* Slider */}
          <div className="relative max-w-7xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl">
              {/* Model cards */}
              {models.map((model, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 w-full"
                  initial={false}
                  animate={{
                    x: `${(index - activeIndex) * 100}%`,
                    scale: index === activeIndex ? 1 : 0.9,
                    opacity: index === activeIndex ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div 
                    className="relative h-[600px] lg:h-[700px] rounded-3xl overflow-hidden group"
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    {/* Car image */}
                    <motion.img
                      src={model.image}
                      alt={model.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle at 50% 80%, rgba(255, 40, 0, 0.2) 0%, transparent 60%)',
                      }}
                    />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 z-10">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <div className="text-[#FF2800] text-sm uppercase tracking-widest mb-3">
                          {model.tagline}
                        </div>
                        <h3 
                          className="text-4xl lg:text-6xl font-bold text-white mb-6"
                          style={{
                            textShadow: '0 0 40px rgba(0, 0, 0, 0.8)',
                          }}
                        >
                          {model.name}
                        </h3>

                        {/* Specs grid */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                          {model.specs.map((spec, i) => (
                            <motion.div
                              key={i}
                              className="relative rounded-xl p-4"
                              style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                              }}
                              whileHover={{
                                borderColor: 'rgba(255, 40, 0, 0.5)',
                                boxShadow: '0 0 30px rgba(255, 40, 0, 0.3)',
                              }}
                            >
                              <div className="text-[#FF2800] mb-2">{spec.icon}</div>
                              <div className="text-2xl font-bold text-white mb-1">{spec.value}</div>
                              <div className="text-white/60 text-xs uppercase tracking-wider">{spec.label}</div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Price and CTA */}
                        <div className="flex items-center justify-between flex-wrap gap-4">
                          <div className="text-3xl font-bold text-white">
                            {model.price}
                          </div>
                          <motion.button
                            className="px-8 py-4 rounded-full text-white font-medium"
                            style={{
                              background: 'linear-gradient(135deg, #FF2800 0%, #cc2000 100%)',
                              boxShadow: '0 10px 30px rgba(255, 40, 0, 0.4)',
                            }}
                            whileHover={{
                              scale: 1.05,
                              boxShadow: '0 15px 40px rgba(255, 40, 0, 0.6)',
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Configure & Order
                          </motion.button>
                        </div>
                      </motion.div>
                    </div>

                    {/* Top corner badge */}
                    <div className="absolute top-8 right-8">
                      <motion.div
                        className="px-6 py-3 rounded-full"
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="text-white text-sm uppercase tracking-widest">New</span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Placeholder for height */}
              <div className="h-[600px] lg:h-[700px]" />
            </div>

            {/* Navigation buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 lg:-mx-20 pointer-events-none">
              <motion.button
                onClick={prevSlide}
                className="w-14 h-14 rounded-full flex items-center justify-center pointer-events-auto"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: 'rgba(255, 40, 0, 0.8)',
                  borderColor: 'rgba(255, 40, 0, 0.5)',
                }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </motion.button>

              <motion.button
                onClick={nextSlide}
                className="w-14 h-14 rounded-full flex items-center justify-center pointer-events-auto"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: 'rgba(255, 40, 0, 0.8)',
                  borderColor: 'rgba(255, 40, 0, 0.5)',
                }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </motion.button>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center gap-3 mt-8">
              {models.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="relative w-12 h-1 rounded-full overflow-hidden"
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-[#FF2800]"
                    initial={false}
                    animate={{
                      scaleX: index === activeIndex ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: 'left' }}
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
