import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
        <div>
          Copyright © 2025 XPLO. Todos os direitos reservados.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-400 transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;