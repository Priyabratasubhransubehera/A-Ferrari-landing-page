import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { Calendar, MapPin, User, Mail, Phone, ArrowRight, Sparkles } from 'lucide-react';

export const BookTestDrive3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    date: '',
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 10]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div id="book-test-drive" ref={containerRef} className="relative py-32 bg-black overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 30% 50%, rgba(255, 40, 0, 0.15) 0%, transparent 50%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Diagonal light streaks */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF2800] to-transparent"
          animate={{
            x: ['-100%', '200%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut"
          }}
          style={{ transform: 'rotate(45deg) translateY(200px)' }}
        />
      </div>

      <motion.div 
        style={{ 
          scale, 
          opacity,
          rotateY,
          transformPerspective: 2000,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="container mx-auto px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Image and content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Sparkles className="w-4 h-4 text-[#FF2800]" />
                  <span className="text-white text-sm uppercase tracking-widest">Exclusive Experience</span>
                </motion.div>

                <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Book Your
                  <br />
                  <span 
                    className="text-[#FF2800]"
                    style={{
                      textShadow: '0 0 40px rgba(255, 40, 0, 0.6)',
                    }}
                  >
                    Test Drive
                  </span>
                </h2>

                <p className="text-xl text-white/70 mb-8 leading-relaxed">
                  Experience the thrill of Ferrari performance firsthand. Feel the power, hear the engine, and understand why this is more than just a car.
                </p>

                {/* Image with 3D effect */}
                <motion.div
                  className="relative rounded-3xl overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.img
                    src="https://images.unsplash.com/photo-1762857362190-b2e70210b4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJyYXJpJTIwaW50ZXJpb3IlMjBjb2NrcGl0JTIwc3RlZXJpbmclMjB3aGVlbCUyMGx1eHVyeXxlbnwxfHx8fDE3NzUyODIxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Ferrari Interior"
                    className="w-full h-[400px] object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(255, 40, 0, 0.2) 0%, transparent 70%)',
                    }}
                  />

                  {/* Border glow */}
                  <div 
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      boxShadow: '0 0 40px rgba(255, 40, 0, 0.5), inset 0 0 40px rgba(255, 40, 0, 0.1)',
                    }}
                  />
                </motion.div>

                {/* Features */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[
                    { label: "Professional Guide", value: "Expert" },
                    { label: "Duration", value: "60 min" },
                    { label: "Availability", value: "Daily" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="text-center p-4 rounded-xl"
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                      whileHover={{
                        borderColor: 'rgba(255, 40, 0, 0.5)',
                        boxShadow: '0 0 20px rgba(255, 40, 0, 0.2)',
                      }}
                    >
                      <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
                      <div className="text-white/60 text-xs uppercase tracking-wider">{item.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right side - Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.form
                  onSubmit={handleSubmit}
                  className="relative rounded-3xl p-8 lg:p-12"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(30px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  {/* Animated border glow */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    style={{
                      background: 'linear-gradient(45deg, rgba(255, 40, 0, 0.1), transparent, rgba(255, 40, 0, 0.1))',
                    }}
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  <div className="relative z-10 space-y-6">
                    {/* Form fields */}
                    {[
                      { icon: <User className="w-5 h-5" />, placeholder: "Full Name", type: "text", name: "name" },
                      { icon: <Mail className="w-5 h-5" />, placeholder: "Email Address", type: "email", name: "email" },
                      { icon: <Phone className="w-5 h-5" />, placeholder: "Phone Number", type: "tel", name: "phone" },
                      { icon: <MapPin className="w-5 h-5" />, placeholder: "Preferred Location", type: "text", name: "location" },
                      { icon: <Calendar className="w-5 h-5" />, placeholder: "Preferred Date", type: "date", name: "date" },
                    ].map((field, index) => (
                      <motion.div
                        key={index}
                        className="relative group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-[#FF2800] transition-colors">
                          {field.icon}
                        </div>
                        <input
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                          className="w-full pl-14 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 outline-none transition-all duration-300 focus:border-[#FF2800]/50 focus:bg-white/10"
                          style={{
                            backdropFilter: 'blur(10px)',
                          }}
                        />
                      </motion.div>
                    ))}

                    {/* Submit button */}
                    <motion.button
                      type="submit"
                      className="group relative w-full py-5 rounded-xl overflow-hidden font-medium text-lg text-white"
                      style={{
                        background: 'linear-gradient(135deg, #FF2800 0%, #cc2000 100%)',
                        boxShadow: '0 10px 40px rgba(255, 40, 0, 0.4)',
                      }}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: '0 15px 60px rgba(255, 40, 0, 0.6)',
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Reserve Your Experience
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      </span>

                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.button>

                    {/* Privacy note */}
                    <p className="text-white/40 text-xs text-center mt-4">
                      By submitting, you agree to our privacy policy. We'll contact you within 24 hours.
                    </p>
                  </div>
                </motion.form>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 right-10 w-4 h-4 rounded-full bg-[#FF2800]"
        style={{ boxShadow: '0 0 30px #FF2800' }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 left-20 w-3 h-3 rounded-full bg-[#FFD700]"
        style={{ boxShadow: '0 0 20px #FFD700' }}
        animate={{
          y: [0, 15, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />
    </div>
  );
};
