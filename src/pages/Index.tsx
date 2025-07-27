import RetroHeader from '@/components/RetroHeader';
import RetroSection from '@/components/RetroSection';
import RetroButton from '@/components/RetroButton';
import underConstructionImg from '@/assets/under-construction.jpg';
import visitorCounterImg from '@/assets/visitor-counter.jpg';
import netscapeBadgeImg from '@/assets/netscape-badge.jpg';

const Index = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="min-h-screen">
      <RetroHeader />
      
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <RetroSection id="home" title="WELCOME TO MY DIGITAL DOMAIN!" variant="glow">
          <div className="text-center space-y-4">
            <p className="text-lg retro-glow">
              Hey! I'm Stefan Twerdochlib (twer•dock•lib) - Welcome to my totally rad corner 
              of cyberspace! Currently Design Lead at Wolt, scaling design teams! 🚀✨
            </p>
            <div className="retro-blink text-hot-pink font-bold text-xl">
              ★ TOTALLY RAD SITE UNDER CONSTRUCTION! ★
            </div>
            <img 
              src={underConstructionImg} 
              alt="Under Construction" 
              className="mx-auto max-w-full h-auto animate-float border-4 border-cyber-blue"
            />
            <p className="font-pixel text-sm">
              Last updated: {currentDate} (probably)
            </p>
          </div>
        </RetroSection>

        {/* About Section */}
        <RetroSection id="about" title="ABOUT THE WEBMASTER">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              <p className="text-lg">
                Hey there! I'm Stefan Twerdochlib, a totally radical Design Lead cruising through 
                cyberspace, creating the most EPIC user experiences this side of the digital divide! 🌐
              </p>
              <ul className="space-y-2 list-none">
                <li className="flex items-center gap-2">
                  <span className="retro-rainbow">★</span> 
                  Design Lead at Wolt since the future
                </li>
                <li className="flex items-center gap-2">
                  <span className="retro-rainbow">★</span> 
                  Design System Wizard & UX Sorcerer
                </li>
                <li className="flex items-center gap-2">
                  <span className="retro-rainbow">★</span> 
                  Scaling design teams across the galaxy
                </li>
                <li className="flex items-center gap-2">
                  <span className="retro-rainbow">★</span> 
                  Making healthcare more human at Werlabs
                </li>
              </ul>
              <div className="retro-blink text-cyber-blue font-bold">
                🎵 Currently working on: Revolutionizing design at Wolt 🎵
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-cyber p-4 border-4 border-electric-lime">
                <div className="text-6xl mb-2">👤</div>
                <div className="font-bold text-background">DESIGN LEADER SUPREME</div>
                <div className="font-pixel text-xs text-background mt-2">
                  "Humanizing digital experiences, one pixel at a time!"
                </div>
              </div>
            </div>
          </div>
        </RetroSection>

        {/* Cool Links Section */}
        <RetroSection id="links" title="TOTALLY COOL LINKS">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Patient Journal", url: "https://twerdochlib.com/patient-journal/", desc: "Humanizing Healthcare at Werlabs!" },
              { name: "Fabric Design System", url: "https://twerdochlib.com/fabric-design-system/", desc: "Multi-brand system for H&M Group!" },
              { name: "TELUS Product Pages", url: "https://twerdochlib.com/telus-product-pages/", desc: "My greatest failure & learning!" },
              { name: "Shoppers Medical Cannabis", url: "https://twerdochlib.com/medical-cannabis-by-shoppers/", desc: "First of its kind marketplace!" },
              { name: "Wolt", url: "https://wolt.com", desc: "Where I scale design teams!" },
              { name: "My Portfolio", url: "https://twerdochlib.com", desc: "Check out all my work!" }
            ].map((link, index) => (
              <div key={index} className="bg-background border-2 border-neon-purple p-4 hover:animate-float">
                <h3 className="font-bold text-cyber-blue retro-glow mb-2">🔗 {link.name}</h3>
                <p className="text-sm mb-3">{link.desc}</p>
                <RetroButton 
                  variant="neon" 
                  size="sm" 
                  href={link.url}
                  className="w-full"
                >
                  VISIT SITE
                </RetroButton>
              </div>
            ))}
          </div>
        </RetroSection>

        {/* Guestbook Section */}
        <RetroSection id="guestbook" title="SIGN MY GUESTBOOK!">
          <div className="space-y-6">
            <div className="bg-background border-2 border-electric-lime p-4">
              <h3 className="font-bold text-hot-pink mb-4">📝 Leave Your Mark on My Homepage!</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold mb-1">Your Name:</label>
                    <input 
                      type="text" 
                      className="w-full bg-input border-2 border-cyber-blue p-2 font-comic"
                      placeholder="Enter your radical name!"
                    />
                  </div>
                  <div>
                    <label className="block font-bold mb-1">Your Email:</label>
                    <input 
                      type="email" 
                      className="w-full bg-input border-2 border-cyber-blue p-2 font-comic"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-bold mb-1">Your Message:</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-input border-2 border-cyber-blue p-2 font-comic"
                    placeholder="Tell the world how awesome this site is!"
                  ></textarea>
                </div>
                <RetroButton variant="rainbow" className="w-full">
                  🚀 SUBMIT TO CYBERSPACE! 🚀
                </RetroButton>
              </form>
            </div>

            {/* Sample guestbook entries */}
            <div className="space-y-4">
              <h3 className="font-bold text-center retro-rainbow">Recent Visitors:</h3>
              {[
                { name: "DesignGeek99", date: "12/25/2024", message: "Stefan's design work at Wolt is AMAZING! The patient journal project blew my mind! 🌟" },
                { name: "UXWizard2000", date: "11/15/2024", message: "That Fabric Design System case study is pure gold! Multi-brand systems FTW!" },
                { name: "PixelPusher95", date: "10/31/2024", message: "Love how Stefan humanizes healthcare UX. That Werlabs work is revolutionary! 💾" }
              ].map((entry, index) => (
                <div key={index} className="bg-gradient-cyber p-4 border-2 border-hot-pink">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold text-background">{entry.name}</span>
                    <span className="text-xs text-background">{entry.date}</span>
                  </div>
                  <p className="text-background">{entry.message}</p>
                </div>
              ))}
            </div>
          </div>
        </RetroSection>

        {/* Contact Section */}
        <RetroSection id="contact" title="GET IN TOUCH">
          <div className="text-center space-y-6">
            <p className="text-lg">
              Want to chat about design systems, user experience, or scaling design teams? Drop me a line! 📧
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-neon p-6 border-4 border-cyber-blue">
                <h3 className="font-bold text-background mb-4">📧 EMAIL ME!</h3>
                  <RetroButton 
                    variant="glow" 
                    href="mailto:stefan@twerdochlib.com"
                    className="w-full"
                  >
                    stefan@twerdochlib.com
                  </RetroButton>
              </div>
              
              <div className="bg-background border-4 border-hot-pink p-6">
                <h3 className="font-bold text-hot-pink mb-4">🌐 FIND ME ON THE WEB!</h3>
                <div className="space-y-2">
                  <RetroButton variant="cyber" href="https://www.linkedin.com/in/stefantwerdochlib/" className="w-full mb-2">
                    My LinkedIn Profile
                  </RetroButton>
                  <RetroButton variant="neon" href="https://twerdochlib.com" className="w-full">
                    Portfolio Site
                  </RetroButton>
                </div>
              </div>
            </div>
          </div>
        </RetroSection>

        {/* Under Construction Areas */}
        <RetroSection title="COMING SOON" variant="construction">
          <div className="text-center space-y-4">
            <p className="font-bold text-background">
              🚧 These sections are under heavy construction! 🚧
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-background p-4 border-2 border-acid-yellow">
                <h4 className="font-bold text-foreground">Design Talks</h4>
                <p className="text-sm">Speaking at conferences!</p>
              </div>
              <div className="bg-background p-4 border-2 border-acid-yellow">
                <h4 className="font-bold text-foreground">Design Mentorship</h4>
                <p className="text-sm">Teaching the next gen!</p>
              </div>
              <div className="bg-background p-4 border-2 border-acid-yellow">
                <h4 className="font-bold text-foreground">Design Community</h4>
                <p className="text-sm">Building design networks!</p>
              </div>
            </div>
          </div>
        </RetroSection>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t-4 border-hot-pink p-6 mt-12">
        <div className="container mx-auto text-center space-y-4">
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <img 
              src={netscapeBadgeImg} 
              alt="Best viewed in Netscape Navigator" 
              className="h-12"
            />
            <img 
              src={visitorCounterImg} 
              alt="Visitor counter" 
              className="h-12"
            />
            <div className="font-pixel text-xs bg-cyber-blue text-background px-2 py-1">
              HTML 3.2 COMPLIANT
            </div>
          </div>
          
          <div className="retro-marquee text-hot-pink font-bold">
            © 2024 Stefan Twerdochlib • Design Lead @ Wolt • This site is optimized for 800x600 resolution • 
            Best viewed with Figma open • Portfolio: twerdochlib.com • 
            Last updated: When design inspiration strikes!
          </div>
          
          <div className="font-pixel text-xs retro-rainbow">
            ✨ Made with HTML, CSS, and pure 90s nostalgia ✨
          </div>
          
          <div className="retro-blink text-cyber-blue">
            Remember: This site is totally rad!
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;