import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-carbon py-12 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-mono uppercase tracking-widest text-gray-600">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-white/10" />
          XPLO SISTEMAS © 2025
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">POLÍTICA DE PRIVACIDADE</a>
          <a href="#" className="hover:text-white transition-colors">TERMOS DE USO</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;