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
    <div className="min-h-screen bg-deepSpace text-textWhite font-sans selection:bg-neonPurple selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
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