import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ value, label, suffix = "" }: { value: string, label: string, suffix?: string }) => (
  <div className="text-center p-8 border-r border-white/5 last:border-none">
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="text-5xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-2"
    >
      {value}{suffix}
    </motion.div>
    <div className="text-neonCyan font-medium tracking-wider text-sm uppercase">{label}</div>
  </div>
);

const Results: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-deepSpace via-[#1a1a3a] to-deepSpace border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <StatCard value="3x" label="Retorno Médio em 90 Dias" suffix=" ROI" />
          <StatCard value="-70" label="Redução na folha de pré-vendas" suffix="%" />
          <StatCard value="100" label="Previsibilidade de Receita" suffix="%" />
        </div>
      </div>
    </section>
  );
};

export default Results;