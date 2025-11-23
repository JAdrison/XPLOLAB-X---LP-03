import React from 'react';
import { motion } from 'framer-motion';

const TransitionSection: React.FC = () => {
  return (
    <section className="py-0 bg-white overflow-hidden">
      
      {/* Industrial Marquee - Purple */}
      <div className="bg-neonPurple py-3 rotate-1 scale-105 shadow-xl z-20 relative border-y-4 border-black">
        <div className="flex overflow-hidden whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
             <span key={i} className="text-black font-mono font-bold text-sm mx-4 uppercase tracking-widest flex items-center gap-4">
               ⚠ Alta Performance em Vendas <span className="w-2 h-2 bg-black rotate-45"></span>
             </span>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-32 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-4xl md:text-5xl font-display font-bold text-black mb-8 tracking-tight">
            Depender apenas de vendedores humanos <br/>
            é uma <span className="bg-black text-white px-2">falha no sistema.</span>
          </h3>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
            Custos altos. Falta de padrão no atendimento. Esquecimento de clientes.
            <br/>
            A XPLO troca a incerteza humana pela <span className="font-bold text-neonPurple">precisão da Inteligência Artificial.</span>
          </p>
        </motion.div>
      </div>
      
      {/* Bottom Transition Gradient */}
      <div className="h-24 bg-gradient-to-b from-white to-carbon w-full" />
    </section>
  );
};

export default TransitionSection;