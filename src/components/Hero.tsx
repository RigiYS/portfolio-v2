/* eslint-disable @typescript-eslint/no-explicit-any */
import { m } from "framer-motion";
import { HiLightningBolt, HiMail, HiUser } from "react-icons/hi";
import {
  SiReact,
  SiTypescript,
  SiLaravel,
  SiTailwindcss,
  SiFirebase,
  SiJavascript,
} from "react-icons/si";

const FloatingRune = ({
  icon,
  color,
  top,
  left,
  right,
  bottom,
  delay,
  size = "md",
}: any) => {
  const sizeClasses =
    size === "lg" ? "w-16 h-16 text-4xl" : "w-12 h-12 text-2xl";

  const style: any = {
    top,
    left,
    right,
    bottom,
    willChange: "transform, opacity",
  };

  return (
    <m.div
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: [0.2, 0.6, 0.2],
        y: [0, -30, 0],
        rotate: [0, 15, -15, 0],
      }}
      transition={{
        duration: 10,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={style}
      className={`absolute ${sizeClasses} flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] z-0 pointer-events-none`}
    >
      <div className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2 border-amber-400/50 rounded-tl-lg" />
      <div className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2 border-amber-400/50 rounded-br-lg" />

      <div style={{ color }} className="drop-shadow-lg filter">
        {icon}
      </div>
    </m.div>
  );
};

export const Hero = () => {
  const scrollToQuest = () => {
    const element = document.getElementById("quest-log");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-slate-50 selection:bg-indigo-200 selection:text-indigo-900">
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#6366f1 1.5px, transparent 1.5px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="absolute top-0 left-0 right-0 h-[80vh] bg-linear-to-b from-indigo-50/80 via-white/50 to-white -z-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-indigo-200/20 blur-[120px] rounded-full -z-10" />

      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <m.div
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[30%] -left-[10%] w-screen h-[100vw] md:w-225 md:h-225 border border-indigo-900/40 rounded-full border-dashed"
        />
        <m.div
          animate={{ rotate: -360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[20%] w-[70vw] h-[70vw] md:w-150 md:h-150 border border-amber-900/40 rounded-full"
        />

        <FloatingRune
          icon={<SiReact />}
          color="#61DAFB"
          top="15%"
          left="8%"
          delay={0}
          size="lg"
        />
        <FloatingRune
          icon={<SiTypescript />}
          color="#3178C6"
          top="12%"
          right="8%"
          delay={1.5}
          size="lg"
        />
        <FloatingRune
          icon={<SiLaravel />}
          color="#FF2D20"
          bottom="25%"
          left="10%"
          delay={0.8}
        />
        <FloatingRune
          icon={<SiTailwindcss />}
          color="#38B2AC"
          bottom="20%"
          right="12%"
          delay={2.2}
        />
        <FloatingRune
          icon={<SiFirebase />}
          color="#FFCA28"
          top="45%"
          left="3%"
          delay={1.2}
        />
        <FloatingRune
          icon={<SiJavascript />}
          color="#F7DF1E"
          top="55%"
          right="3%"
          delay={2.8}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-10 mt-10">
        <m.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="flex justify-center"
        >
          <div className="flex items-center gap-4 px-6 py-2.5 bg-white/70 backdrop-blur-xl border border-white/50 ring-1 ring-indigo-100 rounded-full shadow-lg shadow-indigo-500/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[50%] bg-linear-to-b from-white/60 to-transparent pointer-events-none" />

            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-heading">
                Online
              </span>
            </div>

            <div className="h-4 w-px bg-slate-300" />

            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-linear-to-br from-indigo-500 to-purple-600 rounded-md text-white shadow-sm">
                <HiUser size={12} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                  Class
                </span>
                <span className="text-xs font-black text-indigo-900 font-heading">
                  Front-End Engineer
                </span>
              </div>
            </div>

            <div className="h-4 w-px bg-slate-300" />

            <div className="flex flex-col leading-none text-right">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                Level
              </span>
              <span className="text-xs font-black text-amber-500 font-heading">
                Junior
              </span>
            </div>
          </div>
        </m.div>

        <div className="space-y-4">
          <m.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl font-bold text-slate-500 font-heading tracking-widest uppercase"
          >
            System Initialized. Welcome, User.
          </m.p>

          <m.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-slate-900 leading-[1.1] tracking-tight drop-shadow-sm"
          >
            Hi, I am <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-b from-amber-400 via-amber-500 to-amber-700 drop-shadow-sm z-10">
              Muhammad Rigi
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-blue-600">
              Yuda Syahrial
            </span>
          </m.h1>

          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto font-body px-4 leading-relaxed font-medium"
          >
            A 6th Semester{" "}
            <span className="font-bold text-blue-600 bg-indigo-50 px-1 rounded border border-indigo-100">
              Informatics Student
            </span>{" "}
            at Nusa Putra University
          </m.p>
        </div>

        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center pb-20 pt-4"
        >
          <button
            onClick={scrollToQuest}
            className="group relative w-72 h-16 rounded-xl transition-all duration-200 hover:-translate-y-1 active:translate-y-1 active:shadow-none"
          >
            <div className="absolute inset-0 translate-y-1.5 rounded-xl bg-amber-800 transition-transform group-active:translate-y-0.5" />

            <div className="absolute inset-0 bg-linear-to-b from-amber-300 via-amber-400 to-amber-500 rounded-xl border-t border-white/50 border-b flex items-center justify-center gap-3 shadow-xl overflow-hidden group-active:translate-y-1">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />

              <HiLightningBolt className="text-2xl text-white drop-shadow-[0_2px_0_rgba(146,64,14,0.6)] animate-pulse" />
              <span className="font-heading font-black tracking-widest text-sm uppercase text-white drop-shadow-[0_2px_0_rgba(146,64,14,0.8)]">
                Open Quest Log
              </span>

              <div className="absolute top-0 -left-[150%] w-[50%] h-full bg-linear-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-all duration-1000 group-hover:left-[150%]" />
            </div>
          </button>

          <button
            onClick={() =>
              window.open("mailto:rigiyuda123@gmail.com", "_blank")
            }
            className="group relative w-72 h-16 rounded-xl transition-all duration-200 hover:-translate-y-1 active:translate-y-1 active:shadow-none"
          >
            <div className="absolute inset-0 translate-y-1.5 rounded-xl bg-indigo-900 transition-transform group-active:translate-y-0.5" />

            <div className="absolute inset-0 bg-linear-to-b from-blue-400 via-blue-500 to-blue-600 rounded-xl border-t border-white/40 border-b flex items-center justify-center gap-3 shadow-xl overflow-hidden group-active:translate-y-1">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />

              <HiMail className="text-2xl text-white drop-shadow-[0_2px_0_rgba(49,46,129,0.6)]" />
              <span className="font-heading font-black tracking-widest text-sm uppercase text-white drop-shadow-[0_2px_0_rgba(49,46,129,0.8)]">
                Contact Me
              </span>

              <div className="absolute top-0 -left-[150%] w-[50%] h-full bg-linear-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-all duration-1000 group-hover:left-[150%]" />
            </div>
          </button>
        </m.div>
      </div>

      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <div className="px-3 py-1 bg-white/50 backdrop-blur-sm rounded-full border border-white/40 shadow-sm">
          <span className="text-[9px] tracking-[0.3em] uppercase font-bold text-slate-500">
            Initialize
          </span>
        </div>
        <div className="w-px h-12 bg-linear-to-b from-slate-400 to-transparent" />
      </m.div>
    </section>
  );
};
