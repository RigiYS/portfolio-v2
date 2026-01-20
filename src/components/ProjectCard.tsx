import { motion } from 'framer-motion';
import { HiCode, HiChip, HiServer, HiSparkles, HiTerminal } from 'react-icons/hi'; 

interface ProjectProps {
  title: string;
  role: string;
  desc: string;
  tech: string[];
  rank: 'S' | 'A';
  stats: { label: string; value: string }[];
  image: string;
}

export const ProjectCard = ({ title, role, desc, tech, rank, stats, image }: ProjectProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative h-full flex flex-col"
    >
      {/* 1. LAYER BAYANGAN SOFT (Glow Effect) */}
      <div className="absolute inset-0 bg-slate-200/50 rounded-[2rem] transform translate-y-4 scale-95 blur-xl transition-all duration-500 group-hover:translate-y-6 group-hover:bg-amber-400/30" />

      {/* 2. CONTAINER UTAMA (Clean Glass Artifact) */}
      <div className="relative flex flex-col h-full bg-white rounded-[2rem] overflow-hidden border border-white/80 shadow-2xl ring-1 ring-slate-100 transition-all duration-300 group-hover:ring-amber-300">
        
        {/* --- IMAGE HEADER (Static Window) --- */}
        <div className="relative w-full aspect-video overflow-hidden bg-slate-100 group/image">
          
          {/* RANK MEDALLION (Pojok Kanan Atas) */}
          <div className="absolute top-4 right-4 z-30">
             <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-amber-300 to-amber-600 flex items-center justify-center shadow-lg border-2 border-white ring-1 ring-amber-200 group-hover:scale-110 transition-transform">
                <span className="font-heading font-black text-white text-lg md:text-xl drop-shadow-md">{rank}</span>
             </div>
             <div className="absolute -bottom-1 -left-1 text-white drop-shadow-md animate-pulse">
                <HiSparkles />
             </div>
          </div>

          {/* SYSTEM STATUS BAR (Updated for Code Only) */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-slate-900/90 to-transparent z-20 flex items-center justify-between px-4 pb-1">
             <div className="flex items-center gap-1.5">
               {/* Indikator Kuning/Abu (Local/Code Only) */}
               <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
               <span className="text-[9px] font-bold text-white/90 tracking-widest uppercase font-heading">
                 Deploy: Localhost
               </span>
             </div>
             <div className="flex items-center gap-1 text-white/60">
                <HiTerminal size={10} />
                <span className="text-[9px] font-bold tracking-widest font-heading">READ_ONLY</span>
             </div>
          </div>

          {/* Image Project */}
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-[20%]"
          />

          {/* Overlay Grid Pattern (Tanpa Tombol Preview) */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pixel-weave.png')] opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
          
          {/* Scanline Effect (Visual Only) */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent translate-y-[-100%] group-hover:animate-shine-down pointer-events-none" />
        </div>

        {/* --- CONTENT BODY --- */}
        <div className="relative z-10 flex flex-col flex-grow p-6 bg-gradient-to-b from-white via-white to-slate-50/50">
          
          {/* Header Section */}
          <div className="mb-5">
             <div className="flex items-center justify-between mb-2">
                <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[9px] font-extrabold tracking-[0.1em] text-blue-600 uppercase">
                  {role}
                </span>
                {/* Dekorasi titik */}
                <div className="flex gap-1">
                   <div className="w-1 h-1 rounded-full bg-slate-300" />
                   <div className="w-1 h-1 rounded-full bg-slate-300" />
                   <div className="w-1 h-1 rounded-full bg-slate-300" />
                </div>
             </div>
             
             <h3 className="text-2xl font-heading font-black text-slate-800 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-500 transition-all">
               {title}
             </h3>
          </div>

          {/* Description */}
          <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium line-clamp-3 border-l-2 border-slate-100 pl-3">
            {desc}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white border border-slate-100 p-2.5 rounded-xl flex items-center gap-3 shadow-sm group/stat hover:border-blue-200 transition-colors">
                <div className={`p-2 rounded-lg transition-colors ${idx === 0 ? 'bg-blue-50 text-blue-500 group-hover/stat:bg-blue-100' : 'bg-amber-50 text-amber-500 group-hover/stat:bg-amber-100'}`}>
                  {idx === 0 ? <HiServer size={14} /> : <HiChip size={14} />}
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">{stat.label}</span>
                  <span className="text-xs font-bold text-slate-700 font-heading">{stat.value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer: Tech & Button */}
          <div className="mt-auto pt-5 border-t border-slate-100">
            {/* Chips */}
            <div className="flex flex-wrap gap-2 mb-5">
              {tech.slice(0, 4).map((t) => (
                <span key={t} className="px-2.5 py-1 text-[10px] font-bold text-slate-500 bg-white border border-slate-200 rounded-full shadow-sm hover:border-amber-300 hover:text-amber-600 transition-colors cursor-default">
                  {t}
                </span>
              ))}
              {tech.length > 4 && <span className="text-[10px] font-bold text-slate-400 py-1 px-1">+{tech.length - 4}</span>}
            </div>

            {/* TOMBOL SOURCE CODE (Satu-satunya Aksi) */}
            {/* Kita gunakan tag <a> agar bisa link ke repo asli */}
            <a href="#" className="group/btn relative block w-full h-12 rounded-xl transition-all duration-200 active:scale-95 hover:-translate-y-1">
               {/* 3D Shadow Bottom */}
               <div className="absolute inset-0 translate-y-[4px] rounded-xl bg-[#0369a1]" />
               
               {/* Button Face */}
               <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-blue-600 rounded-xl border-t border-white/30 flex items-center justify-center gap-2 shadow-md overflow-hidden group-hover/btn:from-blue-300 group-hover/btn:to-blue-500">
                  <HiCode className="text-lg text-white drop-shadow-md" />
                  <span className="font-heading font-black text-xs uppercase tracking-widest text-white drop-shadow-[0_2px_0_rgba(3,105,161,1)]">
                    Access Source Code
                  </span>
                  
                  {/* Shine Sweep Effect */}
                  <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 transition-all duration-700 group-hover/btn:left-[100%]" />
               </div>
            </a>
          </div>

        </div>
      </div>
    </motion.div>
  );
};