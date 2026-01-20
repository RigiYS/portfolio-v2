import { motion } from 'framer-motion';
import { HiLightningBolt, HiMail, HiUser } from 'react-icons/hi'; 
import { SiReact, SiTypescript, SiLaravel, SiTailwindcss, SiFirebase, SiFramer, SiJavascript } from 'react-icons/si';

// Komponen Floating Rune (Tetap sama)
const FloatingRune = ({ icon, color, top, left, right, bottom, delay, size = "md" }: any) => {
  const sizeClasses = size === "lg" ? "w-14 h-14 text-3xl" : "w-10 h-10 text-xl";
  const style: any = { top, left, right, bottom }; 
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: [0.3, 0.7, 0.3], y: [0, -25, 0], rotate: [0, 10, -10, 0] }}
      transition={{ duration: 8, delay: delay, repeat: Infinity, ease: "easeInOut" }}
      style={style}
      className={`absolute ${sizeClasses} flex items-center justify-center bg-white/30 backdrop-blur-md border border-white/50 rounded-xl shadow-lg z-0 pointer-events-none`}
    >
      <div className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-gold-400 rounded-tl opacity-80" />
      <div className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-gold-400 rounded-br opacity-80" />
      <div style={{ color }}>{icon}</div>
    </motion.div>
  );
};

export const Hero = () => {
  const scrollToQuest = () => {
    const element = document.getElementById('quest-log');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-slate-50 selection:bg-gold-200 selection:text-gold-900">
      
      {/* BACKGROUND LAYERS */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-mana-50/50 via-white/0 to-white pointer-events-none" />

      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[25%] -left-[10%] w-[90vw] h-[90vw] md:w-[800px] md:h-[800px] border-[1px] border-mana-300/20 rounded-full border-dashed"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] -right-[15%] w-[80vw] h-[80vw] md:w-[700px] md:h-[700px] border-[1px] border-gold-400/20 rounded-full"
        />

        {/* Floating Icons */}
        <FloatingRune icon={<SiReact />} color="#61DAFB" top="15%" left="5%" delay={0} size="lg" />
        <FloatingRune icon={<SiTypescript />} color="#3178C6" top="10%" right="5%" delay={1} size="lg" />
        <FloatingRune icon={<SiLaravel />} color="#FF2D20" bottom="20%" left="8%" delay={0.5} />
        <FloatingRune icon={<SiTailwindcss />} color="#38B2AC" bottom="15%" right="10%" delay={2} />
        <FloatingRune icon={<SiFirebase />} color="#FFCA28" top="45%" left="2%" delay={1.5} />
        <FloatingRune icon={<SiJavascript />} color="#F7DF1E" top="50%" right="2%" delay={2.5} />
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-8 mt-10">
        
        {/* --- 1. HUD STATUS BAR (PENGGANTI DYNAMIC ISLAND) --- */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="flex items-center gap-3 px-5 py-2 bg-slate-900/90 backdrop-blur-md border border-mana-500/50 rounded-lg shadow-[0_0_15px_rgba(56,189,248,0.4)] relative overflow-hidden group">
            {/* Animasi Scanline Halus di dalam HUD */}
            <div className="absolute top-0 left-0 w-[5px] h-full bg-white/20 skew-x-12 animate-shine opacity-0 group-hover:opacity-100" />
            
            {/* Icon User */}
            <div className="p-1.5 bg-mana-600 rounded text-white">
              <HiUser size={12} />
            </div>

            <div className="flex flex-col items-start leading-none">
              <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">Class</span>
              <span className="text-white text-xs font-bold text-mana-200 font-heading tracking-wide">Front-End Dev</span>
            </div>

            <div className="h-6 w-[1px] bg-white/10 mx-2" />

            <div className="flex flex-col items-start leading-none">
              <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">Level</span>
              <span className="text-white text-xs font-bold text-gold-400 font-heading">Junior</span>
            </div>
          </div>
        </motion.div>

        {/* MAIN TITLE */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-mana-900 leading-[1.1] tracking-tight drop-shadow-sm"
        >
          Hi, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">I am</span> <br />
          Muhammad Rigi <span className="relative inline-block text-gold-500 z-10">
            Yuda Syahrial
            <motion.div 
              initial={{ scaleX: 0 }} 
              animate={{ scaleX: 1 }} 
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -bottom-2 left-0 w-full h-2 bg-gold-200/60 rounded-full -z-10 origin-left" 
            />
          </span>
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto font-body px-4 leading-relaxed font-medium"
        >
          A 6th Semester <span className="font-bold text-mana-600 border-b-2 border-mana-200">Student</span> at Nusa Putra University
        </motion.p>

        {/* --- 2. TOMBOL UNIFORM STYLE (DUA-DUANYA 3D) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-10 pb-20"
        >
          
          {/* A. TOMBOL EMAS (PRIMARY QUEST) */}
          <button 
            onClick={scrollToQuest}
            className="group relative w-72 h-16 rounded-xl transition-all duration-200 hover:-translate-y-1 active:translate-y-1"
          >
            {/* 3D Shadow Layer (Dark Gold) */}
            <div className="absolute inset-0 translate-y-[6px] rounded-xl bg-[#92400e]" />
            
            {/* Main Surface (Gold Gradient) */}
            <div className="absolute inset-0 bg-gradient-to-b from-gold-300 via-gold-400 to-gold-500 rounded-xl border-t border-white/40 flex items-center justify-center gap-3 shadow-lg overflow-hidden">
               {/* Shine Animation */}
               <div className="absolute top-0 -left-[150%] w-[100%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-all duration-1000 group-hover:left-[150%]" />
               
               <HiLightningBolt className="text-2xl text-white drop-shadow-[0_2px_0_rgba(146,64,14,0.8)] animate-pulse" />
               <span className="font-heading font-black tracking-widest text-base uppercase text-white drop-shadow-[0_2px_0_rgba(146,64,14,1)]">
                 Open Quest Log
               </span>
            </div>
          </button>

          {/* B. TOMBOL BIRU (SECONDARY CRYSTAL) - STYLE DISAMAKAN */}
          <button 
            onClick={() => window.open('mailto:rigiyuda123@gmail.com', '_blank')}
            className="group relative w-72 h-16 rounded-xl transition-all duration-200 hover:-translate-y-1 active:translate-y-1"
          >
             {/* 3D Shadow Layer (Dark Blue) */}
             <div className="absolute inset-0 translate-y-[6px] rounded-xl bg-[#0369a1]" />

             {/* Main Surface (Mana Blue Gradient) */}
             <div className="absolute inset-0 bg-gradient-to-b from-mana-400 via-mana-500 to-mana-600 rounded-xl border-t border-white/40 flex items-center justify-center gap-3 shadow-lg overflow-hidden">
                {/* Shine Animation */}
                <div className="absolute top-0 -left-[150%] w-[100%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-all duration-1000 group-hover:left-[150%]" />

                <HiMail className="text-2xl text-white drop-shadow-[0_2px_0_rgba(3,105,161,0.8)]" />
                <span className="font-heading font-black tracking-widest text-base uppercase text-white drop-shadow-[0_2px_0_rgba(3,105,161,1)]">
                  Contact Me
                </span>
             </div>
          </button>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-mana-300 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-bold">Start Game</span>
        <div className="w-[2px] h-6 bg-gradient-to-b from-mana-300 to-transparent" />
      </motion.div>

    </section>
  );
};