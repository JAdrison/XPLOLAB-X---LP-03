import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const FooterCTA: React.FC = () => {
  return (
    <section className="py-40 relative overflow-hidden flex flex-col items-center justify-center text-center px-6 bg-carbon border-t border-white/5">
      
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-grid-tech opacity-50" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-8xl font-display font-bold text-white mb-12 tracking-tighter leading-none"
        >
          CRESÇA <br/>
          AGORA.
        </motion.h2>
        
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block"
        >
          <button 
            className="group relative px-12 py-8 bg-neonPurple hover:bg-[#7c3aed] text-white transition-colors duration-300"
            onClick={() => window.alert('Iniciando Agendamento...')}
          >
            <div className="flex items-center gap-4">
               <span className="text-xl font-bold font-mono tracking-wider uppercase">Fazer Diagnóstico</span>
               <ArrowUpRight className="w-8 h-8 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
            
            {/* Tech Borders */}
            <div className="absolute top-1 left-1 right-1 bottom-1 border border-white/20 pointer-events-none" />
          </button>
        </motion.div>

        <div className="mt-12 flex justify-center gap-8 text-xs font-mono text-gray-500">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-sm animate-pulse" /> VAGAS ABERTAS
          </span>
          <span>LOTE: 2025-02</span>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;