import { useState, useEffect } from 'react';

const RetroHeader = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Simulate visitor counter with localStorage
    const count = localStorage.getItem('retro-visitor-count');
    if (count) {
      const newCount = parseInt(count) + 1;
      setVisitorCount(newCount);
      localStorage.setItem('retro-visitor-count', newCount.toString());
    } else {
      setVisitorCount(1);
      localStorage.setItem('retro-visitor-count', '1');
    }
  }, []);

  return (
    <header className="w-full bg-gradient-cyber border-b-4 border-hot-pink p-4">
      {/* Marquee text */}
      <div className="overflow-hidden whitespace-nowrap bg-acid-yellow text-background py-2 mb-4">
        <div className="animate-marquee text-lg font-bold">
          🌟 Welcome to the most RADICAL homepage on the World Wide Web! 🌟 
          Last updated: Never! 🌟 This site is best viewed with your eyes! 🌟
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto text-center">
        <h1 className="font-pixel text-2xl md:text-4xl lg:text-6xl mb-4 retro-glow text-cyber-blue">
          ✨ MY AWESOME HOMEPAGE ✨
        </h1>
        
        <div className="retro-rainbow text-lg md:text-xl font-bold mb-4 font-comic">
          Welcome to my corner of cyberspace!
        </div>

        {/* Visitor counter */}
        <div className="flex justify-center items-center gap-4 mb-4">
          <div className="bg-background border-2 border-electric-lime p-2 font-pixel text-xs">
            You are visitor #{visitorCount.toString().padStart(6, '0')}
          </div>
          <div className="retro-blink text-hot-pink font-bold">NEW!</div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 mt-6">
          <a href="#home" className="retro-button px-4 py-2 text-background font-bold hover:animate-float">
            🏠 HOME
          </a>
          <a href="#about" className="retro-button px-4 py-2 text-background font-bold hover:animate-float">
            👤 ABOUT ME
          </a>
          <a href="#links" className="retro-button px-4 py-2 text-background font-bold hover:animate-float">
            🔗 COOL LINKS
          </a>
          <a href="#guestbook" className="retro-button px-4 py-2 text-background font-bold hover:animate-float">
            📝 GUESTBOOK
          </a>
          <a href="#contact" className="retro-button px-4 py-2 text-background font-bold hover:animate-float">
            📧 CONTACT
          </a>
        </nav>
      </div>
    </header>
  );
};

export default RetroHeader;