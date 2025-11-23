import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

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
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }} // Expo ease for premium feel
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? 'bg-carbon/80 backdrop-blur-md border-white/10 py-3'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <div className="text-2xl font-display font-bold tracking-tighter text-white flex items-center gap-1">
            <span className="text-neonPurple animate-glow">X</span>PLO
            <div className="w-2 h-2 bg-gradient-to-br from-neonPurple to-neonPink rounded-sm animate-pulse" />
          </div>
          {/* Tech Separator */}
          <div className="hidden md:block h-8 w-[1px] bg-white/10 mx-2" />
          <div className="hidden md:flex flex-col text-[10px] font-mono text-textDim leading-tight uppercase tracking-widest">
            <span>Status do Sistema:</span>
            <span className="text-green-400 flex items-center gap-1">
               Online <Activity size={10} />
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden md:block text-xs font-mono text-textDim uppercase tracking-widest">
            [ V. 3.0.1 ]
          </div>
          <button className="group relative px-6 py-2 bg-transparent overflow-hidden border border-white/20 hover:border-neonPurple transition-colors duration-300">
            <div className="absolute inset-0 w-0 bg-neonPurple transition-all duration-[250ms] ease-out group-hover:w-full opacity-10" />
            <span className="relative z-10 text-xs font-mono font-bold uppercase tracking-wider text-white group-hover:text-neonPurple transition-colors">
              Área do Cliente
            </span>
            {/* Industrial Corners */}
            <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-white group-hover:border-neonPurple transition-colors" />
            <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-white group-hover:border-neonPurple transition-colors" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;