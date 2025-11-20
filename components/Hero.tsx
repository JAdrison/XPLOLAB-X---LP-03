import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const fullText = "Atraia leads, automatize o agendamento e feche contratos todos os dias.";
  const [text, setText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden bg-bgBlue">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neonPurple/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-neonCyan/10 rounded-full blur-[100px]" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="text-left space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-3 py-1 rounded-full border border-neonCyan/30 bg-neonCyan/5 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-neonCyan mr-2 animate-pulse" />
            <span className="text-xs font-medium tracking-wide text-neonCyan uppercase">
              🚀 O Novo Padrão em Vendas Solares
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight"
          >
            Instale uma <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neonCyan to-white">
              Máquina de Vendas
            </span> <br/>
            Automática.
          </motion.h1>

          <div className="h-24 lg:h-20">
            <p className="text-lg lg:text-xl text-gray-400 font-light font-mono border-l-2 border-neonPurple pl-4">
              {text}
              <span className="animate-pulse text-neonPurple">|</span>
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-neonPurple to-blue-600 rounded-lg font-bold text-white shadow-[0_0_20px_rgba(138,43,226,0.4)] hover:shadow-[0_0_40px_rgba(138,43,226,0.6)] transition-all hover:-translate-y-1 flex items-center gap-3 overflow-hidden">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12" />
              <span className="relative z-10">QUERO MINHA MÁQUINA DE VENDAS</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Hero Image / Abstract Dashboard */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:block animate-float"
        >
          {/* Backlight */}
          <div className="absolute inset-0 bg-neonPurple/30 blur-3xl -z-10 transform translate-x-4 translate-y-4" />
          
          {/* Glass Dashboard Card */}
          <div className="relative bg-deepSpace/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden">
            {/* Decorative Header */}
            <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-xs text-gray-500 font-mono">XPLO LAB v3.0</div>
            </div>

            {/* Abstract Content */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white/5 rounded-lg p-4 border border-white/5">
                  <div className="h-2 w-12 bg-white/20 rounded mb-2" />
                  <div className="h-6 w-20 bg-gradient-to-r from-neonPurple/50 to-transparent rounded" />
                </div>
              ))}
            </div>

            <div className="flex gap-4">
               <div className="w-2/3 bg-white/5 rounded-lg h-48 border border-white/5 p-4 flex items-end justify-between gap-2">
                  {[40, 70, 50, 90, 60, 80, 95].map((h, i) => (
                    <div key={i} style={{ height: `${h}%` }} className="w-full bg-gradient-to-t from-neonPurple to-neonCyan rounded-sm opacity-80 hover:opacity-100 transition-opacity" />
                  ))}
               </div>
               <div className="w-1/3 space-y-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="h-10 bg-white/5 rounded flex items-center px-3 gap-2">
                      <div className="w-2 h-2 rounded-full bg-neonCyan" />
                      <div className="w-full h-2 bg-white/10 rounded" />
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;