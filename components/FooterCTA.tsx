import React from 'react';
import { motion } from 'framer-motion';

const FooterCTA: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden flex flex-col items-center justify-center text-center px-6">
      {/* Warp Speed Effect Background */}
      <div className="absolute inset-0 bg-deepSpace">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neonPurple/20 via-deepSpace to-deepSpace" />
      </div>
      
      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
        >
          A Escala da sua empresa começa com um clique.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 mb-10"
        >
          Pare de gastar energia tentando vender. <br/>Deixe o Sistema X³ trabalhar por você.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button 
            className="px-10 py-5 bg-white text-deepSpace rounded-full font-bold text-lg md:text-xl shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all duration-300 animate-pulse-slow"
            onClick={() => window.alert('Flow de Agendamento Iniciado')}
          >
            AGENDAR DIAGNÓSTICO GRATUITO
          </button>
        </motion.div>

        <p className="mt-6 text-sm text-gray-500 flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Poucas vagas disponíveis para implementação este mês.
        </p>
      </div>
    </section>
  );
};

export default FooterCTA;