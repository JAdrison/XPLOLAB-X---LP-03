import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Cpu, Wifi, FileText, CheckCircle2, Loader2, Bot, Image as ImageIcon } from 'lucide-react';

type MessageType = 'text' | 'file' | 'image' | 'status';

interface Message {
  id: number;
  sender: 'ai' | 'user' | 'system';
  type: MessageType;
  content: string;
  delay: number; // Delay before showing this message after the previous one
}

const script: Message[] = [
  { id: 1, sender: 'ai', type: 'text', content: "Olá! Identifiquei seu interesse em energia solar.", delay: 500 },
  { id: 2, sender: 'ai', type: 'text', content: "Para calcular sua economia exata, preciso de uma informação.", delay: 1500 },
  { id: 3, sender: 'ai', type: 'text', content: "Qual o valor médio da sua conta de luz?", delay: 1000 },
  { id: 4, sender: 'user', type: 'text', content: "Fica em torno de R$ 950,00", delay: 2000 },
  { id: 5, sender: 'ai', type: 'text', content: "Entendido. É um valor com alto potencial de retorno.", delay: 1500 },
  { id: 6, sender: 'ai', type: 'text', content: "Consegue me enviar a foto ou PDF da conta? Assim analiso sua tarifa e impostos.", delay: 1500 },
  { id: 7, sender: 'user', type: 'file', content: "conta_luz_marco_2025.pdf", delay: 2500 },
  { id: 8, sender: 'system', type: 'status', content: "LENDO DADOS (OCR)...", delay: 500 },
  { id: 9, sender: 'ai', type: 'text', content: "Recebido. Analisei os dados aqui.", delay: 2500 }, 
  { id: 10, sender: 'ai', type: 'text', content: "Seu consumo médio é de aproximadamente 1.000 kWh/mês.", delay: 1500 },
  { id: 11, sender: 'ai', type: 'text', content: "Para finalizar o pré-dimensionamento: poderia me enviar uma foto do seu telhado?", delay: 2000 },
  { id: 12, sender: 'user', type: 'image', content: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80", delay: 3000 },
  { id: 13, sender: 'system', type: 'status', content: "ANALISANDO ESTRUTURA...", delay: 500 },
  { id: 14, sender: 'ai', type: 'text', content: "Perfeito! Obrigado pela foto.", delay: 2000 },
  { id: 15, sender: 'ai', type: 'text', content: "Já encaminhei tudo para nossa engenharia fazer seu orçamento.", delay: 1500 },
  { id: 16, sender: 'ai', type: 'text', content: "Em breve, um de nossos especialistas entrará em contato com o estudo completo.", delay: 1500 },
];

const ChatSimulation: React.FC = () => {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [statusText, setStatusText] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (isInView && !hasStartedRef.current) {
      hasStartedRef.current = true;
      let cumulativeTime = 0;

      script.forEach((msg, index) => {
        // Calculate when this message should START appearing
        cumulativeTime += msg.delay;
        const typingDuration = 1200; // How long the AI "types" before sending
        
        // Schedule Typing Indicator (Only for AI)
        if (msg.sender === 'ai') {
           // Start typing a bit before the message arrives
           const startTypingTime = Math.max(0, cumulativeTime - typingDuration);
           setTimeout(() => setIsTyping(true), startTypingTime);
        }

        // Schedule Message Appearance
        setTimeout(() => {
          setIsTyping(false); // Stop typing exactly when message appears
          
          if (msg.type === 'status') {
            setStatusText(msg.content);
            // Clear status after a while
            setTimeout(() => setStatusText(null), 2000);
          } else {
            setVisibleMessages(prev => [...prev, msg]);
          }
          
        }, cumulativeTime);
      });
    }
  }, [isInView]);

  // Auto scroll effect
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleMessages, isTyping, statusText]);

  return (
    <section className="py-32 bg-gunmetal relative overflow-hidden border-y border-white/5">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neonPurple/5 blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Device / Terminal UI */}
        <div className="relative" ref={ref}>
           <div className="relative bg-carbon border border-white/10 rounded-sm p-2 shadow-2xl max-w-md mx-auto z-20">
              {/* Outer Frame Detail */}
              <div className="absolute -left-2 top-10 bottom-10 w-1 bg-white/10" />
              <div className="absolute -right-2 top-10 bottom-10 w-1 bg-white/10" />

              {/* Screen */}
              <div className="bg-[#0B0B0F] border border-white/5 h-[650px] relative overflow-hidden flex flex-col font-sans">
                 
                 {/* Header */}
                 <div className="bg-[#15151A] p-4 border-b border-white/5 flex justify-between items-center shadow-md z-10">
                    <div className="flex items-center gap-3">
                       <div className="relative">
                         <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse absolute top-0 right-0" />
                         <div className="w-8 h-8 rounded bg-gradient-to-br from-neonPurple to-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                           XP
                         </div>
                       </div>
                       <div className="flex flex-col">
                         <span className="text-xs font-bold text-white tracking-wide">XPLO IA</span>
                         <span className="text-[10px] text-gray-500 font-mono">SISTEMA_ATIVO</span>
                       </div>
                    </div>
                    <Wifi size={14} className="text-gray-600" />
                 </div>

                 {/* Messages Area */}
                 <div ref={scrollRef} className="flex-1 p-4 space-y-4 overflow-y-auto scroll-smooth custom-scrollbar pb-8">
                    <AnimatePresence mode='popLayout'>
                      {visibleMessages.map((msg) => (
                        <motion.div
                          key={msg.id}
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          {/* USER MESSAGE (File, Image or Text) */}
                          {msg.sender === 'user' ? (
                             msg.type === 'file' ? (
                               <div className="bg-[#1A1A23] border border-white/10 rounded-lg p-3 max-w-[85%] flex items-center gap-3 group cursor-pointer hover:border-neonPurple/50 transition-colors">
                                  <div className="w-10 h-10 bg-neonPurple/20 rounded flex items-center justify-center text-neonPurple">
                                     <FileText size={20} />
                                  </div>
                                  <div className="flex flex-col text-right overflow-hidden">
                                     <span className="text-xs font-bold text-white truncate w-32">{msg.content}</span>
                                     <span className="text-[10px] text-gray-400 text-left">PDF • 1.2 MB</span>
                                  </div>
                                  <CheckCircle2 size={14} className="text-neonPurple" />
                               </div>
                             ) : msg.type === 'image' ? (
                                <div className="bg-[#1A1A23] border border-white/10 rounded-lg p-2 max-w-[70%] group cursor-pointer hover:border-neonPurple/50 transition-colors">
                                   <div className="aspect-video w-full bg-gray-800 rounded overflow-hidden mb-1 relative">
                                      <img src={msg.content} alt="Telhado" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                   </div>
                                   <div className="flex justify-between items-center px-1">
                                      <span className="text-[10px] text-gray-400 flex items-center gap-1"><ImageIcon size={10}/> IMG_TELHADO.JPG</span>
                                      <CheckCircle2 size={12} className="text-neonPurple" />
                                   </div>
                                </div>
                             ) : (
                               <div className="max-w-[85%] p-3 rounded-2xl rounded-tr-sm bg-white/10 border border-white/10 text-white text-sm shadow-sm">
                                 {msg.content}
                               </div>
                             )
                          ) : (
                            // AI MESSAGE
                            <div className="flex items-end gap-3 max-w-[90%]">
                               <div className="w-8 h-8 rounded-lg bg-gunmetal border border-neonPurple/30 flex items-center justify-center shrink-0 mb-1 relative overflow-hidden shadow-[0_0_10px_rgba(139,92,246,0.2)]">
                                  <div className="absolute inset-0 bg-neonPurple/10" />
                                  <Bot size={18} className="text-neonPurple relative z-10" />
                               </div>
                               <div className="p-3 rounded-2xl rounded-tl-sm bg-[#13111C] border border-neonPurple/40 text-gray-100 text-sm shadow-[0_2px_10px_rgba(139,92,246,0.05)]">
                                 {msg.content}
                               </div>
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </AnimatePresence>

                    {/* System Status (Processing/Analyzing) */}
                    <AnimatePresence>
                      {statusText && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="flex justify-center py-2"
                        >
                          <div className="bg-neonPurple/10 border border-neonPurple/20 px-4 py-1 rounded-full flex items-center gap-2">
                             <Loader2 size={12} className="text-neonPurple animate-spin" />
                             <span className="text-[10px] font-mono text-neonPurple font-bold tracking-widest">{statusText}</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Typing Indicator */}
                    <AnimatePresence>
                      {isTyping && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                          className="flex items-end gap-3"
                        >
                            <div className="w-8 h-8 rounded-lg bg-gunmetal border border-neonPurple/30 flex items-center justify-center shrink-0 mb-1 relative overflow-hidden shadow-[0_0_10px_rgba(139,92,246,0.2)]">
                               <div className="absolute inset-0 bg-neonPurple/10" />
                               <Bot size={18} className="text-neonPurple relative z-10" />
                            </div>
                            <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-[#13111C] border border-neonPurple/30 w-16 flex items-center justify-center gap-1">
                                <span className="w-1.5 h-1.5 bg-neonPurple rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                <span className="w-1.5 h-1.5 bg-neonPurple rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                <span className="w-1.5 h-1.5 bg-neonPurple rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                 </div>
                 
                 {/* Input Mock */}
                 <div className="p-4 border-t border-white/5 bg-[#0B0B0F] z-10">
                    <div className="h-10 rounded border border-white/10 bg-white/[0.02] flex items-center px-3 gap-3">
                       <div className="w-4 h-4 rounded-full border border-white/20" />
                       <div className="h-2 w-32 bg-white/10 rounded animate-pulse" />
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Text Content - Right Side */}
        <div className="space-y-8 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-display font-bold text-white leading-tight"
          >
            SUA EQUIPE DORME. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-neonPink">
              A MÁQUINA NÃO.
            </span>
          </motion.h2>

          <div className="space-y-8 pl-6 border-l border-white/10">
            {[
              { 
                title: "Interpretação de Documentos", 
                desc: "A IA analisa PDFs e fotos de contas de luz instantaneamente, extraindo consumo médio, tipo de conexão e taxas.",
                icon: FileText
              },
              { 
                title: "Visão Computacional", 
                desc: "Reconhece tipos de telhado através de fotos enviadas pelo cliente para pré-validar a instalação.",
                icon: ImageIcon
              },
              { 
                title: "Comunicação Humanizada", 
                desc: "Envia mensagens fracionadas e naturais, criando rapport real com o cliente, sem parecer um robô frio.",
                icon: Cpu
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="group"
              >
                <h3 className="text-white font-bold font-display text-xl flex items-center gap-3 group-hover:text-neonPurple transition-colors">
                   <div className="p-2 bg-white/5 rounded-md border border-white/10 group-hover:border-neonPurple/50 transition-colors">
                      <item.icon size={18} className="text-gray-300 group-hover:text-neonPurple" />
                   </div>
                   {item.title}
                </h3>
                <p className="text-textDim text-sm font-light mt-2 pl-[50px] leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ChatSimulation;