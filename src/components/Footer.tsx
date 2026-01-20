import { motion } from 'framer-motion';
import { HiHeart, HiLightningBolt } from 'react-icons/hi';
import { SiGithub, SiLinkedin, SiInstagram, SiWhatsapp } from 'react-icons/si';

export const Footer = () => {
  
  // Data Social Media (Ganti href dengan link asli Anda)
  const socialLinks = [
    { icon: <SiGithub />, label: "GitHub", href: "https://github.com/RigiYS", color: "hover:text-white" },
    { icon: <SiLinkedin />, label: "LinkedIn", href: "https://linkedin.com/in/muhammad-rigi-yuda-syahrial", color: "hover:text-blue-400" },
    { icon: <SiInstagram />, label: "Instagram", href: "https://instagram.com/rigiyuda_", color: "hover:text-pink-400" },
    { icon: <SiWhatsapp />, label: "WhatsApp", href: "https://wa.me/6281385605396", color: "hover:text-green-400" },
  ];

  return (
    <footer className="relative bg-slate-900 text-slate-300 pt-20 pb-10 overflow-hidden border-t-4 border-gold-500">
      
      {/* 1. BACKGROUND DECORATION */}
      {/* Grid Pattern Halus di background gelap */}
      <div className="absolute inset-0 opacity-[0.05]" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
      />
      
      {/* Ambient Glow (Mana Blue di kiri, Gold di kanan) */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-mana-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
          
          {/* LEFT: Call to Action */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
               <HiLightningBolt className="text-green-400 animate-pulse" />
               <span className="text-xs font-bold tracking-[0.2em] text-green-400 uppercase font-heading">
                 System Status: Online
               </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-4">
              Ready to start a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-600">
                New Quest?
              </span>
            </h2>
            <p className="text-slate-400 max-w-md mx-auto md:mx-0 font-medium">
              I am always open to project collaborations, technology discussions, or just talking about favorite games.
            </p>
          </div>

          {/* RIGHT: Social Portals (Tombol Kristal) */}
          <div className="flex gap-4">
            {socialLinks.map((social, idx) => (
              <a 
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-mana-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]"
              >
                {/* Icon */}
                <span className={`text-xl md:text-2xl transition-colors duration-300 ${social.color}`}>
                  {social.icon}
                </span>
                
                {/* Tooltip (Label) */}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-wider text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {social.label}
                </span>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 rounded-tl group-hover:border-mana-400 transition-colors" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 rounded-br group-hover:border-mana-400 transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8" />

        {/* BOTTOM: Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-bold tracking-wider">
          
          <p className="flex items-center gap-1">
            © 2026 Designed & Built by 
            <span className="text-slate-300">Muhammad Rigi Yuda Syahrial</span>
          </p>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700">
               Built with <HiHeart className="text-red-500" /> & React
            </span>
            <span className="hover:text-mana-400 cursor-pointer transition-colors">
              v.2.0.26 (Stable)
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
};