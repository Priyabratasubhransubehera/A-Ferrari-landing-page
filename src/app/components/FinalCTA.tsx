import { motion } from 'motion/react';
import { Calendar, Zap, Shield, Award } from 'lucide-react';

export const FinalCTA = () => {
  const scrollToModels = () => {
    const modelsSection = document.getElementById('models');
    if (modelsSection) {
      modelsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden py-20">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FF2800]/20 via-black to-black"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 20% 80%, rgba(255, 40, 0, 0.15) 0%, transparent 50%)',
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 40, 0, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 40, 0, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 container mx-auto px-8 max-w-6xl">
        <div className="text-center mb-16">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <Award className="w-4 h-4 text-[#FF2800]" />
            <span className="text-white text-sm uppercase tracking-widest">Your Ferrari Journey Awaits</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-bold text-white mb-8 leading-none"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span className="block mb-4">Book Your</motion.span>
            <motion.span
              className="block text-[#FF2800]"
              style={{
                textShadow: '0 0 60px rgba(255, 40, 0, 0.8), 0 0 100px rgba(255, 40, 0, 0.4)',
              }}
              animate={{
                textShadow: [
                  '0 0 60px rgba(255, 40, 0, 0.8), 0 0 100px rgba(255, 40, 0, 0.4)',
                  '0 0 80px rgba(255, 40, 0, 1), 0 0 120px rgba(255, 40, 0, 0.6)',
                  '0 0 60px rgba(255, 40, 0, 0.8), 0 0 100px rgba(255, 40, 0, 0.4)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Test Drive
            </motion.span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-xl lg:text-3xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Experience the thrill of Ferrari performance. Feel the power, hear the engine roar, and discover automotive perfection.
          </motion.p>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              { icon: <Calendar className="w-7 h-7" />, title: "Flexible Scheduling", desc: "Book at your convenience" },
              { icon: <Zap className="w-7 h-7" />, title: "Expert Guidance", desc: "Professional test drive team" },
              { icon: <Shield className="w-7 h-7" />, title: "Premium Experience", desc: "VIP treatment guaranteed" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="relative p-6 rounded-2xl group cursor-pointer"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
                whileHover={{
                  scale: 1.05,
                  borderColor: 'rgba(255, 40, 0, 0.5)',
                  boxShadow: '0 20px 60px rgba(255, 40, 0, 0.3)',
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(255, 40, 0, 0.1) 0%, transparent 70%)',
                  }}
                />
                <div className="relative z-10">
                  <div className="text-[#FF2800] mb-3 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-white text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-white/60 text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Primary CTA - Explore Models */}
            <motion.button
              onClick={scrollToModels}
              className="group relative px-14 py-7 rounded-full overflow-hidden font-bold text-lg uppercase tracking-wider"
              style={{
                background: 'linear-gradient(135deg, #FF2800 0%, #cc2000 100%)',
                boxShadow: '0 20px 80px rgba(255, 40, 0, 0.5), 0 0 100px rgba(255, 40, 0, 0.3)',
              }}
              whileHover={{
                scale: 1.08,
                y: -5,
                boxShadow: '0 25px 100px rgba(255, 40, 0, 0.7), 0 0 120px rgba(255, 40, 0, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="relative z-10 flex items-center gap-3 text-white"
                animate={{
                  textShadow: [
                    '0 0 0px rgba(255,255,255,0)',
                    '0 0 20px rgba(255,255,255,0.5)',
                    '0 0 0px rgba(255,255,255,0)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Explore Models
                <motion.span
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.span>

              {/* Pulsing Glow */}
              <motion.div
                className="absolute inset-0 bg-white rounded-full"
                animate={{
                  opacity: [0, 0.15, 0],
                  scale: [1, 1.08, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Animated Shine */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                initial={{ x: '-200%' }}
                animate={{ x: '200%' }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut"
                }}
              />
            </motion.button>

            {/* Secondary CTA - Contact Us */}
            <motion.button
              className="group relative px-14 py-7 rounded-full overflow-hidden font-bold text-lg uppercase tracking-wider backdrop-blur-xl"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
              }}
              whileHover={{
                scale: 1.08,
                y: -5,
                borderColor: 'rgba(255, 40, 0, 0.6)',
                background: 'rgba(255, 40, 0, 0.1)',
                boxShadow: '0 20px 80px rgba(255, 40, 0, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 text-white">Contact Us</span>

              {/* Glow on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at center, rgba(255, 40, 0, 0.15) 0%, transparent 70%)',
                }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Floating Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: i % 2 === 0 ? '4px' : '6px',
              height: i % 2 === 0 ? '4px' : '6px',
              background: i % 3 === 0 ? '#FF2800' : '#FFD700',
              boxShadow: `0 0 20px ${i % 3 === 0 ? '#FF2800' : '#FFD700'}`,
              left: `${15 + i * 10}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, (i % 2 === 0 ? 50 : -50), 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Corner Accent Lines */}
      <div className="absolute top-0 left-0 w-64 h-64 pointer-events-none opacity-50">
        <motion.div
          className="absolute top-0 left-0 w-full h-1"
          style={{
            background: 'linear-gradient(90deg, #FF2800 0%, transparent 100%)',
            boxShadow: '0 0 30px rgba(255, 40, 0, 0.8)',
          }}
          animate={{
            scaleX: [0.3, 1, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-0 left-0 w-1 h-full"
          style={{
            background: 'linear-gradient(180deg, #FF2800 0%, transparent 100%)',
            boxShadow: '0 0 30px rgba(255, 40, 0, 0.8)',
          }}
          animate={{
            scaleY: [0.3, 1, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none opacity-50">
        <motion.div
          className="absolute bottom-0 right-0 w-full h-1"
          style={{
            background: 'linear-gradient(270deg, #FF2800 0%, transparent 100%)',
            boxShadow: '0 0 30px rgba(255, 40, 0, 0.8)',
          }}
          animate={{
            scaleX: [0.3, 1, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-1 h-full"
          style={{
            background: 'linear-gradient(0deg, #FF2800 0%, transparent 100%)',
            boxShadow: '0 0 30px rgba(255, 40, 0, 0.8)',
          }}
          animate={{
            scaleY: [0.3, 1, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>
    </div>
  );
};
