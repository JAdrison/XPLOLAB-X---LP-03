import React from 'react';
import { motion } from 'framer-motion';
import { Target, Bot, Network, BarChart3 } from 'lucide-react';

const pillars = [
  {
    id: "01",
    title: "Captação Inteligente",
    subtitle: "Anúncios Precisos",
    description: "Encontramos pessoas que realmente querem comprar energia solar, filtrando curiosos que não têm perfil.",
    icon: Target,
  },
  {
    id: "02",
    title: "Atendimento com IA",
    subtitle: "Atendente Virtual 24h",
    description: "Responde na hora pelo WhatsApp. Pede a conta de luz e agenda a visita técnica sozinho, sem humano.",
    icon: Bot,
  },
  {
    id: "03",
    title: "Recuperação Automática",
    subtitle: "Não perca vendas",
    description: "O sistema não deixa ninguém para trás. Manda mensagens automáticas para quem parou de responder.",
    icon: Network,
  },
  {
    id: "04",
    title: "Controle Total",
    subtitle: "Painel de Gestão",
    description: "Veja tudo em um só lugar: seus anúncios, suas conversas e seus agendamentos em uma tela simples.",
    icon: BarChart3,
  }
];

const Pillars: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-carbon relative">
      <div className="max-w-[1440px] mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 border-b border-white/10 pb-6 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">COMO FUNCIONA</h2>
            <p className="text-textDim font-mono text-sm mt-2">// 4 PILARES DE PERFORMANCE</p>
          </div>
          <div className="hidden md:block text-neonPurple text-xs font-mono">
            SISTEMA_ONLINE
          </div>
        </div>

        {/* Grid Otimizado: 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-gunmetal border border-white/5 p-6 md:p-8 hover:border-white/20 transition-all duration-300 overflow-hidden h-full flex flex-col"
            >
              {/* Hover Gradient - Purple */}
              <div className="absolute inset-0 bg-gradient-to-b from-neonPurple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Top Tech Marker */}
              <div className="flex justify-between items-start mb-8 relative z-10">
                 <span className="font-mono text-2xl font-bold text-white/10 group-hover:text-neonPurple transition-colors">{pillar.id}</span>
                 <div className="w-10 h-10 bg-carbon border border-white/10 flex items-center justify-center text-white group-hover:text-neonPurple group-hover:border-neonPurple transition-all shrink-0">
                    <pillar.icon size={18} strokeWidth={1.5} />
                 </div>
              </div>

              <div className="relative z-10 flex-grow">
                <h4 className="text-lg font-display font-bold text-white mb-1 uppercase">
                  {pillar.title}
                </h4>
                <div className="text-xs font-mono text-neonPurple mb-4 uppercase tracking-wider">
                  {pillar.subtitle}
                </div>
                <p className="text-textDim text-sm leading-relaxed border-t border-white/5 pt-4">
                  {pillar.description}
                </p>
              </div>

              {/* Decorative Corners */}
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/20 group-hover:border-neonPurple transition-colors" />
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/20 group-hover:border-neonPurple transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;