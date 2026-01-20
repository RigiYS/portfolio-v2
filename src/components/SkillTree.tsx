import { motion } from 'framer-motion';
import type { JSX } from 'react';
// Pastikan install: npm install react-icons
import { SiTypescript, SiJavascript, SiPhp, SiPython, SiReact, SiTailwindcss, SiFramer, SiLaravel, SiGit, SiFigma, SiFirebase, SiAndroid, SiHtml5, SiCss3, SiBootstrap } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

// Tipe Data
interface Skill {
  name: string;
  icon: JSX.Element;
  color: string;
}

export const SkillTree = () => {
  // DATA SKILL
  const row1: Skill[] = [
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "React.js", icon: <SiReact />, color: "#61DAFB" },
    { name: "Next.js", icon: <SiReact />, color: "#000000" }, 
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#38B2AC" },
    { name: "Javascript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "HTML", icon: <SiHtml5 />, color: "#F16529" },
    { name: "React Native", icon: <TbBrandReactNative />, color: "#61DBFB" },
    { name: "CSS3", icon: <SiCss3 />, color: "#2965f1" },
  ];

  const row2: Skill[] = [
    { name: "Laravel", icon: <SiLaravel />, color: "#FF2D20" },
    { name: "PHP", icon: <SiPhp />, color: "#777BB4" },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
    { name: "Git", icon: <SiGit />, color: "#F05032" },
    { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
    { name: "Android", icon: <SiAndroid />, color: "#3DDC84" },
  ];

  // Komponen Kartu Rune (Crystal Item Style)
  const SkillRune = ({ skill }: { skill: Skill }) => (
    <div className="relative group mx-4 cursor-pointer py-4">
      {/* Container Rune: Glassmorphism Lebih Tebal & Premium */}
      <div className="w-24 h-24 md:w-32 md:h-32 bg-white/60 backdrop-blur-xl border-2 border-white/50 rounded-[1.5rem] flex flex-col items-center justify-center p-4 relative overflow-hidden transition-all duration-300 group-hover:border-gold-400 group-hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] group-hover:-translate-y-2 group-hover:bg-white/90">
        
        {/* Dekorasi Sudut Emas (Corner Accents - Dipertajam) */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-[3px] border-l-[3px] border-mana-200 rounded-tl-xl group-hover:border-gold-500 transition-colors duration-300" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-[3px] border-r-[3px] border-mana-200 rounded-tr-xl group-hover:border-gold-500 transition-colors duration-300" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-[3px] border-l-[3px] border-mana-200 rounded-bl-xl group-hover:border-gold-500 transition-colors duration-300" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-[3px] border-r-[3px] border-mana-200 rounded-br-xl group-hover:border-gold-500 transition-colors duration-300" />

        {/* Background Glow Halus (Aura Item) */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-transparent via-white to-transparent"
          style={{ backgroundColor: skill.color }} // Fallback color tint
        />

        {/* Shine Animation on Hover */}
        <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-all duration-700 group-hover:animate-shine" />

        {/* Icon (Floating Animation) */}
        <div className="relative z-10 mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 drop-shadow-sm">
           <div className="text-4xl md:text-5xl" style={{ color: skill.color }}>
             {skill.icon}
           </div>
        </div>

        {/* Nama Skill (Pill Style) */}
        <span className="relative z-10 text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest font-heading px-2 py-0.5 rounded-full bg-slate-100 group-hover:bg-white group-hover:text-gold-600 transition-colors shadow-sm">
          {skill.name}
        </span>
      </div>
      
      {/* Refleksi Bayangan di Bawah (Penting untuk efek melayang) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-black/20 blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );

  return (
    <section id="skill-tree" className="py-24 relative overflow-hidden bg-slate-50 scroll-mt-20">
      
      {/* Background Layer: Grid Pattern (Konsisten dengan section lain) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
      />
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-mana-100/30 via-transparent to-transparent -z-10" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="inline-block mb-2"
        >
          <span className="px-3 py-1 rounded border border-mana-200 bg-white/50 text-[10px] font-bold text-mana-500 tracking-[0.2em] uppercase">
            Arsenal & Tools
          </span>
        </motion.div>

        <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900 mb-4">
          Ancient <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">Runes</span>
        </h2>
        
        {/* Garis Dekorasi */}
        <div className="flex items-center justify-center gap-2 mb-6 opacity-50">
          <div className="w-12 h-[1px] bg-slate-700" />
          <div className="w-2 h-2 rotate-45 border border-slate-800" />
          <div className="w-12 h-[1px] bg-slate-700" />
        </div>

        <p className="text-slate-500 font-body max-w-2xl mx-auto text-lg">
          A collection of technology and digital weapons mastered for development battles.
        </p>
      </div>

      {/* MARQUEE CONTAINER */}
      <div className="flex flex-col gap-6 md:gap-10 mask-linear-gradient relative z-10">
        
        {/* ROW 1: Bergerak ke KIRI */}
        <div className="relative flex overflow-hidden group py-2">
          <motion.div
            className="flex min-w-full shrink-0"
            animate={{ x: ["0%", "-25%"] }} 
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {[...row1, ...row1, ...row1, ...row1].map((skill, idx) => (
              <SkillRune key={`r1-${idx}`} skill={skill} />
            ))}
          </motion.div>
        </div>

        {/* ROW 2: Bergerak ke KANAN */}
        <div className="relative flex overflow-hidden group py-2">
          <motion.div
            className="flex min-w-full shrink-0"
            animate={{ x: ["-25%", "0%"] }} 
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...row2, ...row2, ...row2, ...row2].map((skill, idx) => (
              <SkillRune key={`r2-${idx}`} skill={skill} />
            ))}
          </motion.div>
        </div>

      </div>

      {/* Gradient Mask untuk efek Fade di Kiri & Kanan */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none" />
    </section>
  );
};