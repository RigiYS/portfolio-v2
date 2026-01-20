import { motion } from 'framer-motion';
import { HiUser, HiAcademicCap, HiLightningBolt, HiSparkles, HiDownload } from 'react-icons/hi';

export const About = () => {
  
  // STATISTIK RPG (Soft Skills)
  const stats = [
    { label: "Logic (INT)", value: 90, color: "bg-blue-500" }, 
    { label: "Creativity (DEX)", value: 85, color: "bg-purple-500" }, 
    { label: "Stamina (VIT)", value: 95, color: "bg-green-500" }, 
    { label: "Teamwork (CHA)", value: 88, color: "bg-amber-500" }, 
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50 scroll-mt-20">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-150 h-150 bg-blue-100/40 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-amber-100/30 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-block px-3 py-1 rounded border border-blue-200 bg-white/50 text-[10px] font-bold text-blue-500 tracking-[0.2em] uppercase mb-2"
           >
             Player Status
           </motion.div>
           <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900">
             The <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-300 to-blue-600">Ace</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* --- LEFT: AVATAR FRAME --- */}
          <div className="md:col-span-5 relative group">
            <div className="absolute inset-0 border-2 border-dashed border-blue-200 rounded-full animate-spin-slow opacity-30 scale-110" />
            <div className="absolute inset-0 border border-amber-300 rounded-full animate-reverse-spin opacity-30 scale-125" />

            <div className="relative aspect-square rounded-4xl overflow-hidden border-4 border-white shadow-2xl ring-1 ring-slate-200 transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1">
               <img 
                 src="/foto-profil.jpeg" 
                 alt="Profile" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay" />
               <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-md text-white px-4 py-2 rounded-xl border border-white/20 shadow-lg flex items-center gap-3">
                 <div className="w-10 h-10 rounded-lg bg-linear-to-br from-amber-400 to-amber-600 flex items-center justify-center font-black text-lg border border-white/30">
                   21
                 </div>
                 <div className="flex flex-col">
                   <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Level</span>
                   <span className="text-xs font-bold font-heading">Mahasiswa</span>
                 </div>
               </div>
            </div>
          </div>

          {/* --- RIGHT: STATUS & LORE --- */}
          <div className="md:col-span-7 space-y-8">
            
            {/* Introduction Card */}
            <div className="bg-white/60 backdrop-blur-md border border-white/60 p-6 rounded-2xl shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 p-3 opacity-10">
                 <HiUser size={100} />
               </div>
               <h3 className="text-2xl font-heading font-black text-slate-800 mb-4 flex items-center gap-2">
                 <HiSparkles className="text-amber-500" />
                 Bio & Lore
               </h3>
               <p className="text-slate-600 leading-relaxed font-medium mb-4">
                 Halo! Saya adalah seorang <span className="font-bold text-blue-600">Mahasiswa Teknik Informatika Semester 5</span> yang memiliki ambisi besar untuk menjadi <span className="font-bold text-amber-600">Senior Frontend Developer</span>. 
               </p>
               <p className="text-slate-600 leading-relaxed font-medium">
                 Selain berkutat dengan kode (React, Laravel), saya juga seorang atlet voli. Disiplin di lapangan mengajarkan saya ketahanan mental saat <i>debugging</i> error yang sulit. Saya percaya bahwa keseimbangan antara logika (coding) dan fisik (olahraga) adalah kunci performa tinggi.
               </p>
            </div>

            {/* Attributes Grid */}
            <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
               <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                 <HiLightningBolt /> Base Attributes
               </h4>
               <div className="space-y-4">
                 {stats.map((stat, idx) => (
                   <div key={idx}>
                     <div className="flex justify-between mb-1">
                       <span className="text-xs font-bold text-slate-700 font-heading">{stat.label}</span>
                       <span className="text-xs font-bold text-slate-500">{stat.value}/100</span>
                     </div>
                     <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }}
                         whileInView={{ width: `${stat.value}%` }}
                         transition={{ duration: 1, delay: 0.2 + (idx * 0.1) }}
                         className={`h-full rounded-full ${stat.color} shadow-[0_0_10px_currentColor]`}
                       />
                     </div>
                   </div>
                 ))}
               </div>
            </div>

            {/* --- ACTION BUTTONS (UPDATED) --- */}
            <div className="flex gap-4 pt-2">
              
              {/* TOMBOL 1: DOWNLOAD CV */}
              {/* Menggunakan tag <a> dengan atribut 'download' */}
              <a 
                href="/cv.pdf" // Pastikan file cv.pdf ada di folder public
                download="CV_Muhammad_Rigi.pdf" // Nama file saat diunduh user
                className="flex-1 group relative h-12 rounded-xl transition-all duration-200 active:scale-95 hover:-translate-y-1 block"
              >
                 <div className="absolute inset-0 translate-y-1 rounded-xl bg-slate-800" />
                 <div className="absolute inset-0 bg-slate-900 rounded-xl border-t border-white/20 flex items-center justify-center gap-2 text-white font-bold tracking-wider text-xs uppercase shadow-lg group-hover:bg-slate-800">
                    <HiDownload className="text-lg" />
                    Download CV
                 </div>
              </a>
              
              {/* TOMBOL 2: LIHAT TRANSKRIP */}
              {/* Menggunakan tag <a> dengan target='_blank' (tab baru) */}
              <a 
                href="/transkrip.pdf" 
                target="_blank" // Membuka di tab baru
                rel="noopener noreferrer" // Security best practice
                className="flex-1 group relative h-12 rounded-xl transition-all duration-200 active:scale-95 hover:-translate-y-1 block"
              >
                 <div className="absolute inset-0 translate-y-1 rounded-xl bg-amber-600" />
                 <div className="absolute inset-0 bg-amber-400 rounded-xl border-t border-white/40 flex items-center justify-center gap-2 text-white font-bold tracking-wider text-xs uppercase shadow-lg group-hover:bg-amber-500">
                    <HiAcademicCap className="text-lg" />
                    View Transcript
                 </div>
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};