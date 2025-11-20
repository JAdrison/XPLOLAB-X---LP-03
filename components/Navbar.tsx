import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-deepSpace/70 backdrop-blur-md border-white/10 py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-display font-bold tracking-tighter text-white">
            XPLO<span className="text-neonPurple">.</span>
          </div>
        </div>

        <button className="group relative px-6 py-2 overflow-hidden rounded-full border border-neonPurple/50 bg-transparent text-sm font-medium text-white transition-all hover:border-neonPurple hover:bg-neonPurple/10">
          <span className="relative z-10 group-hover:text-white transition-colors">
            Área do Cliente
          </span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;