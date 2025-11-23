import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowRight, MessageCircle, Zap, Sun, CheckCircle2 } from 'lucide-react';

// Fotos mais realistas, estilo "selfie/whatsapp" e menos "estúdio"
const notifications = [
  { 
    id: 1, 
    name: "Sandra Ferreira", 
    time: "há 2 min", 
    msg: "Gostaria de fazer um orçamento.", 
    // Foto mais natural, sorrindo, fundo desfocado
    imageUrl: "https://images.unsplash.com/photo-1554727242-741c14fa561c?q=80&w=200&auto=format&fit=crop" 
  },
  { 
    id: 2, 
    name: "Júlio Alencar", 
    time: "há 5 min", 
    msg: "Olá, tenho interesse em economizar!", 
    // Foto estilo selfie masculina
    imageUrl: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=200&auto=format&fit=crop" 
  },
  { 
    id: 3, 
    name: "Carlos Eduardo", 
    time: "há 10 min", 
    msg: "Quero saber sobre o kit promocional.", 
    // Foto homem meia idade, estilo perfil profissional simples
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" 
  },
  { 
    id: 4, 
    name: "Fernanda Soares", 
    time: "há 12 min", 
    msg: "Aonde fica a empresa de vocês?", 
    // Foto mulher jovem, casual
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" 
  },
  { 
    id: 5, 
    name: "Roberto Mendes", 
    time: "há 16 min", 
    msg: "Como funciona o financiamento?", 
    // Foto homem casual
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" 
  },
];

const Hero: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [visibleNotifications, setVisibleNotifications] = useState<number[]>([]);
  
  // Ref for intersection observer
  const ref = useRef(null);
  // Mobile Trigger adjustment: amount: 0.3 means 30% of the element must be visible before triggering
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Animation Logic for Progress Bar and Notifications
  useEffect(() => {
    if (isInView) {
      // Animate Progress Bar to 100%
      const timer = setTimeout(() => setProgress(100), 500);

      // Stagger notifications
      notifications.forEach((_, index) => {
        setTimeout(() => {
          setVisibleNotifications(prev => [...prev, index]);
        }, 1500 + (index * 1500)); // Slower pace for more realism
      });

      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-carbon">
      
      {/* Solar Background Image with Heavy Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2432&auto=format&fit=crop" 
          alt="Painéis Solares Background" 
          className="w-full h-full object-cover opacity-40"
        />
        {/* Gradient Overlay to ensure text readability and blend with theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-[#050505]/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      </div>

      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 bg-grid-tech opacity-30 z-0 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 pb-20 lg:pb-0">
        
        {/* Left Column: Typography & CTA */}
        <div className="text-left space-y-10">
          
          {/* Status Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 border-l-2 border-neonPurple pl-4 backdrop-blur-sm"
          >
            <span className="text-xs font-mono text-neonPurple uppercase tracking-[0.2em] font-bold shadow-black drop-shadow-md">
              /// Tecnologia de Vendas Solar
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tighter text-white drop-shadow-2xl"
          >
            MÁQUINA <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-neonPink">
              DE VENDAS
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg lg:text-xl text-gray-300 font-light max-w-xl leading-relaxed border-l border-white/20 pl-6 drop-shadow-md"
          >
            A primeira inteligência artificial que capta, qualifica e agenda clientes de energia solar para sua empresa. <span className="text-white font-medium">Venda 24h por dia.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col gap-8"
          >
            {/* CTA Button */}
            <div>
              <button className="group relative px-8 py-4 bg-neonPurple text-white font-bold font-display uppercase tracking-wide overflow-hidden hover:bg-neonPurple/90 transition-all shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_40px_rgba(139,92,246,0.7)]">
                <span className="relative z-10 flex items-center gap-3">
                  EU QUERO VENDER MAIS <ArrowRight className="w-5 h-5" />
                </span>
              </button>
            </div>

            {/* Company Logos Section - Compact Avatar Stack Style */}
            <div className="flex items-center gap-5 pt-4">
               {/* Stack of Logos */}
               <div className="flex items-center -space-x-4">
                  
                  {/* Logo 1: KAP */}
                  <div className="relative z-50 w-14 h-14 rounded-full bg-white border-[3px] border-[#050505] flex items-center justify-center overflow-hidden group">
                     <div className="w-6 h-6 border-2 border-orange-500 rounded-sm transform rotate-45 flex items-center justify-center">
                        <div className="w-3 h-3 border border-orange-500" />
                     </div>
                  </div>

                  {/* Logo 2: ENATEC */}
                  <div className="relative z-40 w-14 h-14 rounded-full bg-white border-[3px] border-[#050505] flex items-center justify-center overflow-hidden group">
                     <span className="font-sans font-black text-[8px] text-blue-800 tracking-tighter scale-110">ENATEC</span>
                  </div>

                  {/* Logo 3: M Estrutura */}
                  <div className="relative z-30 w-14 h-14 rounded-full bg-white border-[3px] border-[#050505] flex items-center justify-center overflow-hidden group">
                     <span className="font-serif italic text-xl font-bold text-indigo-900">M</span>
                  </div>

                  {/* Logo 4: LITMUS */}
                  <div className="relative z-20 w-14 h-14 rounded-full bg-white border-[3px] border-[#050505] flex items-center justify-center overflow-hidden group">
                     <Zap className="w-6 h-6 text-blue-600 fill-blue-600 -rotate-12" />
                  </div>

                  {/* Logo 5: DONE */}
                  <div className="relative z-10 w-14 h-14 rounded-full bg-white border-[3px] border-[#050505] flex items-center justify-center overflow-hidden group">
                      <div className="relative">
                        <div className="w-5 h-4 bg-blue-500 rounded-sm transform -skew-x-12" />
                        <Zap className="w-3 h-3 text-yellow-400 fill-yellow-400 absolute top-0.5 left-1 z-10" />
                      </div>
                  </div>

               </div>

               {/* Text Label */}
               <p className="text-sm text-gray-300 leading-tight max-w-[200px]">
                 <span className="text-white font-bold">+100 Empresas</span> <br/>
                 transformaram o seu comercial
               </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Lead Generation Visualization */}
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 80 }} // Starts lower and hidden
          animate={isInView ? { opacity: 1, y: 0 } : {}} // Triggers only when in view
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full lg:w-auto mt-20 lg:mt-0 block"
        >
           {/* Main Card Container */}
           <div className="relative w-full max-w-md mx-auto lg:ml-auto bg-gunmetal/60 backdrop-blur-xl border border-white/10 p-1 shadow-2xl rounded-xl overflow-hidden">
              
              {/* Header Section */}
              <div className="bg-white/5 border-b border-white/5 p-6 relative overflow-hidden">
                <div className="flex justify-between items-end mb-4 relative z-10">
                  <div>
                    <div className="flex items-center gap-2 text-neonPurple mb-1">
                      <div className="w-2 h-2 bg-neonPurple rounded-full animate-pulse" />
                      <span className="text-xs font-mono tracking-widest font-bold">SISTEMA ATIVO</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white">Captação de Leads</h3>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                         <span className="relative flex h-2 w-2">
                           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                           <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                         </span>
                         <span className="text-xs font-mono font-bold text-white tracking-wider uppercase">Tempo Real</span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-neonPurple to-neonPink"
                    initial={{ width: "0%" }}
                    animate={isInView ? { width: `${progress}%` } : {}}
                    transition={{ duration: 4, ease: "easeInOut" }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-[10px] font-mono text-gray-400">
                   <span>INICIANDO CAMPANHA</span>
                   <span>ALTA DEMANDA</span>
                </div>
              </div>

              {/* Notifications Feed */}
              <div className="p-6 min-h-[400px] relative">
                {/* Background Grid inside card */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  <AnimatePresence>
                    {notifications.map((notif, index) => (
                      visibleNotifications.includes(index) && (
                        <motion.div
                          key={notif.id}
                          initial={{ opacity: 0, x: 50, scale: 0.9 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          transition={{ type: "spring", stiffness: 300, damping: 24 }}
                          className="bg-[#1A1A23]/80 border border-white/10 p-3 rounded-lg backdrop-blur-md hover:border-neonPurple/40 transition-colors group"
                        >
                          <div className="flex items-center gap-4">
                            {/* Avatar Realista Estilo WhatsApp (Circle + Border) */}
                            <div className="relative shrink-0">
                              <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-br from-white/20 to-white/5">
                                <img 
                                  src={notif.imageUrl} 
                                  alt={notif.name} 
                                  className="w-full h-full object-cover rounded-full border-2 border-[#1A1A23]"
                                />
                              </div>
                              {/* WhatsApp Icon Badge */}
                              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#25D366] rounded-full border-2 border-[#1A1A23] flex items-center justify-center">
                                <MessageCircle size={10} className="text-white fill-white" />
                              </div>
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-center mb-0.5">
                                <span className="font-bold text-sm text-white truncate">{notif.name}</span>
                                <span className="text-[10px] font-mono text-green-400">{notif.time}</span>
                              </div>
                              <p className="text-xs text-gray-300 leading-snug truncate group-hover:text-white transition-colors">
                                {notif.msg}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )
                    ))}
                  </AnimatePresence>
                </div>
                
                {/* Bottom Fade */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gunmetal via-gunmetal/90 to-transparent pointer-events-none" />
              </div>
           </div>
           
           {/* Decorative Elements behind card */}
           <div className="absolute -top-10 -right-10 w-64 h-64 bg-neonPurple/20 rounded-full blur-[100px] -z-10" />
           <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-neonPink/10 rounded-full blur-[100px] -z-10" />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;