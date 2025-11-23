import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ value, label, sub }: { value: string, label: string, sub: string }) => (
  <div className="relative group p-10 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
    {/* Corner accents */}
    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20" />
    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20" />
    
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-6xl md:text-7xl font-display font-bold text-white mb-2 tracking-tighter"
    >
      {value}
    </motion.div>
    <div className="text-neonPurple font-mono text-xs tracking-widest uppercase mb-1">{label}</div>
    <div className="text-gray-500 text-xs font-mono">{sub}</div>
  </div>
);

const Results: React.FC = () => {
  return (
    <section className="py-32 bg-carbon relative">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="mb-12 text-center">
          <span className="inline-block py-1 px-3 border border-white/10 text-xs font-mono text-gray-400 uppercase">
            Resultados de Nossos Clientes
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          <StatCard value="3.4x" label="Mais Retorno (ROI)" sub="Em ciclos de 90 dias" />
          <StatCard value="-72%" label="Menos Custos" sub="Com equipe de pré-vendas" />
          <StatCard value="100%" label="Controle Total" sub="Nenhum lead é perdido" />
        </div>
      </div>
    </section>
  );
};

export default Results;