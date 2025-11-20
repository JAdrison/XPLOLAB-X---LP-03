import React from 'react';
import { motion } from 'framer-motion';

const TransitionSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-deepSpace overflow-hidden">
      {/* Vertical Neon Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-neonCyan/50 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
            A era do "Lead Frio" e da equipe ociosa acabou.
          </h3>
          <p className="text-lg text-gray-400 leading-relaxed">
            Se você sofre com faturamento <span className="text-red-400">"montanha-russa"</span> e custos fixos altos, seu modelo está obsoleto.
            A XPLO não vende milagres. Nós implementamos uma estrutura de <span className="text-neonCyan font-medium">Aceleração Comercial</span> baseada em dados e I.A.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TransitionSection;