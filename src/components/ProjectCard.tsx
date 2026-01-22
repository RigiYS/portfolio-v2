/* eslint-disable react-hooks/purity */
import { motion } from 'framer-motion';
import { HiCode, HiServer, HiSparkles, HiShieldCheck } from 'react-icons/hi';
import { 
  SiReact, SiLaravel, SiTailwindcss, SiTypescript, SiJavascript, 
  SiFirebase, SiGithub 
} from 'react-icons/si';

interface ProjectProps {
  title: string;
  role: string;
  desc: string;
  tech: string[];
  rank: 'S' | 'A';
  stats: { label: string; value: string }[];
  image: string;
  link: string;
}

// --- HELPER: TECH CHIP ---
const TechChip = ({ name }: { name: string }) => {
  const n = name.toLowerCase();
  
  let icon = <HiCode />;
  let color = "text-slate-500";
  let bg = "bg-slate-50";
  let border = "border-slate-200";

  if (n.includes('react')) { icon = <SiReact />; color = "text-blue-400"; bg = "bg-blue-50"; border = "border-blue-100"; }
  else if (n.includes('laravel')) { icon = <SiLaravel />; color = "text-red-500"; bg = "bg-red-50"; border = "border-red-100"; }
  else if (n.includes('tailwind')) { icon = <SiTailwindcss />; color = "text-cyan-500"; bg = "bg-cyan-50"; border = "border-cyan-100"; }
  else if (n.includes('type')) { icon = <SiTypescript />; color = "text-blue-600"; bg = "bg-blue-50"; border = "border-blue-200"; }
  else if (n.includes('js')) { icon = <SiJavascript />; color = "text-yellow-500"; bg = "bg-yellow-50"; border = "border-yellow-200"; }
  else if (n.includes('firebase')) { icon = <SiFirebase />; color = "text-amber-500"; bg = "bg-amber-50"; border = "border-amber-200"; }
  
  return (
    <div className={`relative group/chip flex items-center justify-center w-9 h-9 rounded-lg border ${border} ${bg} shadow-sm transition-all hover:scale-110 hover:shadow-md cursor-help`}>
      <span className={`text-lg ${color}`}>{icon}</span>
      <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-[9px] font-bold rounded opacity-0 group-hover/chip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
        {name}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
      </div>
    </div>
  );
};

export const ProjectCard = ({ title, role, desc, tech, rank, stats, image, link }: ProjectProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative h-full flex flex-col"
    >
      {/* 1. GLOW EFFECT */}
      <div className="absolute -inset-0.5 bg-linear-to-r from-indigo-500 to-purple-500 rounded-4xl opacity-0 group-hover:opacity-30 blur-xl transition duration-500" />

      {/* 2. CARD CONTAINER */}
      <div className="relative flex flex-col h-full bg-white rounded-4xl overflow-hidden border border-slate-100 shadow-xl ring-1 ring-slate-50 transition-all duration-300 group-hover:shadow-2xl group-hover:border-indigo-100">
        
        {/* --- IMAGE HEADER --- */}
        <div className="relative w-full aspect-video overflow-hidden bg-slate-100 group/image">
          
          {/* RANK BADGE */}
          <div className="absolute top-4 right-4 z-30">
             <div className="relative w-12 h-12 flex items-center justify-center">
                <div className="absolute inset-0 bg-white/20 backdrop-blur-md border border-white/50 rounded-xl rotate-45 shadow-lg" />
                <div className={`absolute inset-1 rounded-lg rotate-45 opacity-80 ${rank === 'S' ? 'bg-linear-to-br from-amber-300 to-amber-500' : 'bg-linear-to-br from-indigo-400 to-indigo-600'}`} />
                <span className="relative z-10 font-heading font-black text-white text-xl drop-shadow-md">{rank}</span>
             </div>
          </div>

          {/* STATUS BAR */}
          <div className="absolute top-4 left-4 z-30">
            <div className="flex items-center gap-2 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full border border-white/50 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-[9px] font-bold text-slate-600 tracking-wider uppercase">
                Deploy: Localhost
              </span>
            </div>
          </div>

          {/* MAIN IMAGE */}
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/10 to-transparent" />
        </div>

        {/* --- CONTENT BODY --- */}
        <div className="relative z-10 flex flex-col grow p-6 bg-linear-to-b from-white to-slate-50/30">
          
          {/* Role Tag & ID */}
          <div className="mb-4 flex items-center justify-between">
             <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-extrabold tracking-widest uppercase border border-indigo-100">
               <HiShieldCheck className="text-sm" /> {role}
             </span>
             <span className="text-[10px] font-bold text-slate-300 font-mono tracking-wider">PROJECT_ID_0{Math.floor(Math.random() * 9)}</span>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-heading font-black text-slate-800 mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all">
            {title}
          </h3>

          {/* Description */}
          <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium line-clamp-3">
            {desc}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center justify-between px-3 py-2 bg-white border border-slate-100 rounded-lg shadow-sm group/stat hover:border-indigo-100 transition-colors">
                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
                  {idx === 0 ? <HiServer className="text-indigo-400"/> : <HiSparkles className="text-amber-400"/>}
                  {stat.label}
                </span>
                <span className="text-xs font-black font-heading text-slate-700">
                   {stat.value}
                </span>
              </div>
            ))}
          </div>

          {/* FOOTER: TECH & ACTION */}
          <div className="mt-auto pt-5 border-t border-slate-100">
            
            {/* Tech Stack */}
            <div className="mb-5">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                Equipment / Tech
              </span>
              <div className="flex flex-wrap gap-2">
                {tech.map((t, i) => (
                  <TechChip key={i} name={t} />
                ))}
              </div>
            </div>

            {/* --- FIXED ACTION BUTTON --- */}
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              // Tambahkan 'active:scale-95' pada wrapper, hilangkan h-12 di sini
              className="group/btn relative block w-full active:scale-[0.98] transition-transform duration-200"
            >
               {/* 1. SHADOW LAYER (Absolute di belakang) */}
               {/* Kita geser sedikit ke bawah (translate-y-1.5) agar terlihat 3D */}
               <div className="absolute inset-0 rounded-xl bg-indigo-900 translate-y-1.5" />
               
               {/* 2. BUTTON SURFACE (Relative di depan) */}
               {/* Gunakan 'relative' dan set tinggi 'h-12' agar browser menghormati ukurannya */}
               <div className="relative flex items-center justify-center w-full h-12 bg-linear-to-r from-indigo-500 to-blue-600 rounded-xl border-t border-white/20 shadow-lg overflow-hidden group-hover/btn:from-indigo-400 group-hover/btn:to-blue-500 transition-colors">
                  <SiGithub className="text-lg text-white" />
                  <span className="font-heading font-black text-xs uppercase tracking-[0.15em] text-white drop-shadow-sm ml-2">
                    Access Source Code
                  </span>
                  
                  {/* Shine Effect */}
                  <div className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12 transition-all duration-700 group-hover/btn:left-full" />
               </div>
            </a>

          </div>
        </div>
      </div>
    </motion.div>
  );
};