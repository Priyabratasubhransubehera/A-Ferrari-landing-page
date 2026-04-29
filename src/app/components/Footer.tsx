import { motion } from 'motion/react';

const footerLinks = [
  { label: 'Models', href: '#' },
  { label: 'Heritage', href: '#' },
  { label: 'Innovation', href: '#' },
  { label: 'Contact', href: '#' },
];

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'YouTube', href: '#' },
];

export const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="container mx-auto px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl font-bold text-[#FF2800] mb-4">FERRARI</h3>
            <p className="text-white/60 text-sm">
              The Prancing Horse since 1947
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-medium mb-4 uppercase tracking-widest text-sm">
              Navigate
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[#FF2800] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-medium mb-4 uppercase tracking-widest text-sm">
              Follow Us
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[#FF2800] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-white/40 text-sm">
            © 2024 Ferrari. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">
              Terms
            </a>
            <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">
              Legal
            </a>
          </div>
        </motion.div>
      </div>

      {/* Red accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#FF2800] to-transparent" />
    </footer>
  );
};
