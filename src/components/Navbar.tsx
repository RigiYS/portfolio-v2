import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  HiHome,
  HiLightningBolt,
  HiChip,
  HiMail,
  HiUser,
} from "react-icons/hi";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "hero", label: "Base", icon: <HiHome /> },
    { id: "about", label: "Profile", icon: <HiUser /> },
    { id: "quest-log", label: "Quests", icon: <HiLightningBolt /> },
    { id: "skill-tree", label: "Skills", icon: <HiChip /> },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none"
    >
      <div
        className={`pointer-events-auto flex items-center gap-2 md:gap-4 px-2 py-2 md:px-4 md:py-2 rounded-2xl border transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-amber-400/50 shadow-[0_10px_30px_rgba(234,179,8,0.15)] translate-y-0 scale-100"
            : "bg-white/60 backdrop-blur-md border-white/60 shadow-lg translate-y-2"
        }`}
      >
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group relative w-10 h-10 flex items-center justify-center cursor-pointer ml-1 mr-1"
        >
          <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-blue-700 rotate-45 rounded-lg border border-blue-300 shadow-md group-hover:rotate-225 transition-transform duration-700 ease-in-out" />
          <div className="absolute inset-1 border border-white/30 rotate-45 rounded-md group-hover:rotate-225 transition-transform duration-700 ease-in-out" />
          <span className="relative z-10 text-white font-heading font-black text-lg drop-shadow-md select-none">
            R
          </span>
        </div>

        <div
          className="flex items-center bg-slate-100/50 rounded-xl p-1 border border-white/50 relative"
          onMouseLeave={() => setHoveredTab(null)}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              onMouseEnter={() => setHoveredTab(item.id)}
              className={`relative px-3 py-1.5 md:px-5 md:py-2 rounded-lg text-sm font-bold transition-colors duration-200 group flex items-center gap-2 z-10 ${
                hoveredTab === item.id ? "text-blue-600" : "text-slate-500"
              }`}
            >
              {hoveredTab === item.id && (
                <motion.div
                  layoutId="nav-bg"
                  className="absolute inset-0 bg-white rounded-lg shadow-sm border border-slate-200/50 -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}

              <span
                className={`text-lg md:text-lg transition-transform duration-300 relative z-10 ${hoveredTab === item.id ? "scale-110 text-amber-500" : ""}`}
              >
                {item.icon}
              </span>

              <span className="hidden md:block font-heading uppercase tracking-wider text-[10px] font-extrabold relative z-10">
                {item.label}
              </span>
            </button>
          ))}
        </div>

        <div className="h-6 w-px bg-slate-300/50 mx-1" />

        <button
          onClick={() => window.open("mailto:rigiyuda123@gmail.com", "_blank")}
          className="group/btn relative px-4 py-2 md:px-5 md:py-2 rounded-xl transition-all active:scale-95"
        >
          <div className="absolute inset-0 translate-y-0.75 rounded-xl bg-[#0369a1] transition-transform group-hover/btn:translate-y-1" />

          <div className="absolute inset-0 bg-linear-to-b from-blue-400 to-blue-600 rounded-xl border-t border-white/40 flex items-center justify-center gap-2 shadow-md overflow-hidden group-hover/btn:from-blue-300 group-hover/btn:to-blue-500 group-hover/btn:-translate-y-0.5 transition-all">
            <HiMail className="text-white text-lg drop-shadow-sm group-hover/btn:animate-pulse" />
            <span className="hidden md:inline font-heading font-black text-[10px] uppercase tracking-widest text-white drop-shadow-md">
              Hire Me
            </span>
            <div className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-all duration-700 group-hover/btn:left-full" />
          </div>

          <div className="opacity-0 flex items-center gap-2 font-heading font-black text-[10px] uppercase tracking-widest px-1">
            <HiMail className="text-lg" />
            <span className="hidden md:inline">Hire Me</span>
          </div>
        </button>
      </div>
    </motion.nav>
  );
};
