import React from 'react';
import { motion } from 'framer-motion';
import { Target, Bot, Layers, LayoutDashboard } from 'lucide-react';

const pillars = [
  {
    title: "Tráfego de Alta Intenção",
    description: "Campanhas em Google e Meta Ads com segmentação proprietária. Trazemos o cliente que já decidiu comprar, filtrando curiosos.",
    icon: Target,
  },
  {
    title: "SDR Virtual (I.A. Generativa)",
    description: "Atendimento 24/7 no WhatsApp. Qualifica, pede a conta de luz e agenda reuniões sozinho. Custo 10x menor que CLT.",
    icon: Bot,
  },
  {
    title: "Funil Automatizado",
    description: "Jornada do cliente mapeada. Roteiros de nutrição e follow-up automáticos para garantir que nenhum lead seja esquecido.",
    icon: Layers,
  },
  {
    title: "CRM Xplo Lab",
    description: "Central de Comando. Conecte Marketing, Vendas e VOIP. Pipelines infinitos e gestão total da operação em tempo real.",
    icon: LayoutDashboard,
  }
];

const Pillars: React.FC = () => {
  return (
    <section className="py-24 bg-deepSpace relative">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl bg-neonPurple/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-neonCyan/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
              
              <div className="w-12 h-12 rounded-lg bg-deepSpace border border-white/10 flex items-center justify-center mb-6 group-hover:border-neonCyan/50 group-hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all duration-300">
                <pillar.icon className="w-6 h-6 text-gray-400 group-hover:text-neonCyan transition-colors" />
              </div>

              <h4 className="text-xl font-display font-bold text-white mb-3 group-hover:text-neonCyan transition-colors">
                {pillar.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;