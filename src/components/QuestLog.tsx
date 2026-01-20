import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

export const QuestLog = () => {
  // DATA PROJECT
  const projects = [
    {
      title: "TechGears",
      role: "E-Commerce",
      rank: "S" as const,
      // Ganti dengan screenshot asli Anda
      image: "https://picsum.photos/id/3/800/450", 
      desc: "Platform e-commerce modern dengan arsitektur Headless. Mengelola state keranjang belanja yang persisten dan integrasi API yang aman.",
      tech: ["React.js", "Zustand", "Tailwind", "Axios"],
      stats: [
        { label: "State", value: "Zustand" },
        { label: "Perf", value: "98/100" },
      ]
    },
    {
      title: "Larisin App",
      role: "Mobile POS",
      rank: "S" as const,
      image: "https://picsum.photos/id/119/800/450",
      desc: "Aplikasi POS (Point of Sales) real-time untuk UMKM. Berjalan offline-first dan sinkronisasi otomatis saat online.",
      tech: ["React Native", "Firebase", "TypeScript"],
      stats: [
        { label: "DB", value: "NoSQL" },
        { label: "Mode", value: "Offline" },
      ]
    }
  ];

  return (
    <section id="quest-log" className="py-24 px-4 bg-slate-50 relative scroll-mt-20 overflow-hidden">
      
      {/* Background Layer: Grid Pattern (Sama dengan Hero) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
      />
      
      {/* Ambient Glow (Emas Pudar di belakang judul) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-gold-400/10 blur-[120px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-block mb-2"
          >
            <span className="px-3 py-1 rounded border border-mana-200 bg-white/50 text-[10px] font-bold text-mana-500 tracking-[0.2em] uppercase">
              Portfolio Archive
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-black text-slate-900 mb-4"
          >
            Quest Log <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">Completed</span>
          </motion.h2>
          
          {/* Garis Dekorasi */}
          <div className="flex items-center justify-center gap-2 mb-6 opacity-50">
            <div className="w-12 h-[1px] bg-slate-700" />
            <div className="w-2 h-2 rotate-45 border border-slate-800" />
            <div className="w-12 h-[1px] bg-slate-700" />
          </div>

          <p className="text-slate-500 font-body max-w-2xl mx-auto text-lg">
            Documentation of development missions that have been completed.
          </p>
        </div>

        {/* Grid Kartu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 px-2 md:px-0">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};