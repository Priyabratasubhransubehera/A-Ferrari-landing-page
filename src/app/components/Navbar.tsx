import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Models', href: '#models' },
  { label: 'Heritage', href: '#heritage' },
  { label: 'Performance', href: '#performance' },
  { label: 'Experience', href: '#experience' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsScrolled(latest > 100);
    });

    return () => unsubscribe();
  }, [scrollY]);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-8 lg:px-16 py-6"
        initial={{ y: -100 }}
        animate={{ 
          y: isScrolled ? 0 : -100,
          backgroundColor: isScrolled ? 'rgba(10, 10, 10, 0.9)' : 'rgba(10, 10, 10, 0)'
        }}
        transition={{ duration: 0.3 }}
        style={{ backdropFilter: isScrolled ? 'blur(20px)' : 'none' }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isScrolled ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#" className="text-2xl font-bold text-[#FF2800]">
              FERRARI
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden lg:flex items-center gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: isScrolled ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-white text-sm uppercase tracking-widest relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF2800] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
            
            <motion.button
              className="px-6 py-2 border border-[#FF2800] text-[#FF2800] hover:bg-[#FF2800] hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: isScrolled ? 1 : 0 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className="fixed inset-0 bg-black z-40 lg:hidden"
        initial={{ opacity: 0, x: '100%' }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? 0 : '100%'
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="text-white text-2xl uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : 50 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  );
};