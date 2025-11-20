import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const messages = [
  { id: 1, sender: 'ai', text: "Olá! Vi que tem interesse em energia solar. Qual o valor médio da sua conta?" },
  { id: 2, sender: 'user', text: "R$ 800,00" },
  { id: 3, sender: 'ai', text: "Perfeito! Com esse valor, o retorno é muito rápido. Temos uma vaga na agenda amanhã às 14h para te apresentar o projeto. Posso confirmar?" },
  { id: 4, sender: 'user', text: "Pode sim!" },
  { id: 5, sender: 'ai', text: "Agendado! 🚀 Enviarei o link da reunião por aqui." }
];

const ChatSimulation: React.FC = () => {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      messages.forEach((_, index) => {
        setTimeout(() => {
          setVisibleMessages(prev => [...prev, messages[index].id]);
        }, index * 1500 + 500);
      });
    }
  }, [isInView]);

  return (
    <section className="py-24 bg-bgBlue relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Phone / Chat UI */}
        <div className="relative flex justify-center" ref={ref}>
           {/* Glow Effect behind phone */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 bg-neonCyan/20 blur-[80px] rounded-full" />

           <div className="w-[350px] h-[600px] bg-deepSpace border-4 border-gray-800 rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col">
              {/* Dynamic Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20" />
              
              {/* Chat Header */}
              <div className="bg-gray-900 p-4 pt-10 border-b border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neonPurple flex items-center justify-center font-bold text-white text-xs">
                  XPLO
                </div>
                <div>
                  <div className="text-sm font-bold text-white">SDR Virtual</div>
                  <div className="text-xs text-neonCyan flex items-center gap-1">
                    <span className="w-2 h-2 bg-neonCyan rounded-full animate-pulse" />
                    Online
                  </div>
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex-1 p-4 space-y-4 overflow-y-auto custom-scrollbar bg-[#050505]">
                {messages.map((msg) => (
                  visibleMessages.includes(msg.id) && (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                        msg.sender === 'user' 
                          ? 'bg-neonCyan/20 text-neonCyan border border-neonCyan/20 rounded-tr-none' 
                          : 'bg-white/10 text-white border border-white/5 rounded-tl-none'
                      }`}>
                        {msg.text}
                      </div>
                    </motion.div>
                  )
                ))}
                {visibleMessages.length < messages.length && visibleMessages.length > 0 && (
                   <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                   >
                      <div className="bg-white/5 px-4 py-2 rounded-full rounded-tl-none flex gap-1 items-center">
                        <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms'}} />
                        <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms'}} />
                        <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms'}} />
                      </div>
                   </motion.div>
                )}
              </div>
           </div>
        </div>

        {/* Text Content */}
        <div className="space-y-8">
          <motion.h2 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-display font-bold text-white"
          >
            Seu Vendedor dorme. <br/>
            <span className="text-neonPurple">A XPLO não.</span>
          </motion.h2>

          <ul className="space-y-6">
            {[
              "Resposta instantânea (Zero tempo de espera)",
              "Coleta automática de conta de energia e localização",
              "Agendamento direto no Google Agenda do seu time"
            ].map((item, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="flex items-center gap-4 text-lg text-gray-300"
              >
                <div className="w-6 h-6 rounded-full bg-neonCyan/20 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-neonCyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default ChatSimulation;