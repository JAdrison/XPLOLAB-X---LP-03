import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TransitionSection from './components/TransitionSection';
import Pillars from './components/Pillars';
import ChatSimulation from './components/ChatSimulation';
import Results from './components/Results';
import FooterCTA from './components/FooterCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-carbon text-textWhite font-sans relative">
      {/* Global Tech Grid Background */}
      <div className="fixed inset-0 bg-grid-tech pointer-events-none z-0" />
      
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <TransitionSection />
        <Pillars />
        <ChatSimulation />
        <Results />
        <FooterCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;