"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Rocket,
  Music,
  Mic2,
  ShieldCheck,
  Zap,
  ChevronRight,
  Target,
  Crosshair,
  Cpu,
  Share2,
} from "lucide-react";

// --- CUSTOM STYLES FOR THE CLIP PATHS ---
const clipPaths = {
  leftBevel: "polygon(0% 0%, 90% 0%, 100% 15%, 100% 100%, 10% 100%, 0% 85%)",
  rightBevel: "polygon(10% 0%, 100% 0%, 100% 85%, 90% 100%, 0% 100%, 0% 15%)",
  droneSpecial:
    "polygon(5% 0%, 95% 0%, 100% 20%, 100% 80%, 95% 100%, 5% 100%, 0% 80%, 0% 20%)",
};

const EventCard = ({ event, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full max-w-5xl mb-24 group px-4"
    >
      {/* BACKGROUND GLOW */}
      <div
        className={`absolute -inset-4 bg-linear-to-r ${event.priority ? "from-amber-500/20 to-orange-500/20" : "from-blue-500/10 to-purple-500/10"} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div
        style={{
          clipPath: event.priority
            ? clipPaths.droneSpecial
            : isEven
              ? clipPaths.leftBevel
              : clipPaths.rightBevel,
        }}
        className={`relative p-0.5 ${event.priority ? "bg-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.4)]" : "bg-white/20"}`}
      >
        <div
          style={{
            clipPath: event.priority
              ? clipPaths.droneSpecial
              : isEven
                ? clipPaths.leftBevel
                : clipPaths.rightBevel,
          }}
          className="bg-[#0a0a0a] p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center"
        >
          {/* ICON & NUMBERING */}
          <div className="flex flex-col items-center justify-center">
            <div
              className={`p-5 rounded-none border-2 ${event.priority ? "border-amber-500 text-amber-500" : "border-white/10 text-white/40"} relative`}
            >
              {event.icon}
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-white" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white" />
            </div>
            <span className="mt-4 text-[10px] tracking-[0.5em] text-white/20">
              0{index + 1}
            </span>
          </div>

          {/* MAIN CONTENT */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <span
                className={`text-[10px] px-2 py-0.5 font-black uppercase ${event.priority ? "bg-amber-500 text-black" : "bg-white/10 text-white/60"}`}
              >
                {event.tag}
              </span>
              <div className="h-px flex-1 bg-white/10 hidden md:block" />
            </div>

            <h2
              className={`text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-4 ${event.priority ? "text-amber-500" : "text-white"}`}
            >
              {event.title}
            </h2>

            <p className="text-amber-100/50 font-mono text-sm md:text-base max-w-2xl leading-relaxed">
              {event.desc}
            </p>

            {/* BUTTON INTERFACE */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="px-6 py-2 bg-amber-500/10 border border-amber-500 text-amber-500 text-xs font-black uppercase tracking-widest hover:bg-amber-500 hover:text-black transition-all">
                ACCESS_DATA
              </button>
              <button className="px-6 py-2 border border-white/20 text-white/40 text-xs font-black uppercase tracking-widest hover:border-white hover:text-white transition-all">
                NOTIFY_ME
              </button>
            </div>
          </div>

          {/* STATUS DISPLAY */}
          <div className="hidden lg:flex flex-col items-end gap-2 border-l border-white/10 pl-8">
            <span className="text-[10px] text-white/20 uppercase tracking-widest">
              Stability
            </span>
            <div className="w-32 h-1 bg-white/10 relative overflow-hidden">
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-amber-500/50 w-1/2"
              />
            </div>
            <span className="text-[10px] text-amber-500 font-bold mt-2 uppercase">
              {event.status}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const IngeniumEvents = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [time, setTime] = useState(new Date().toTimeString().split(" ")[0]);

  useEffect(() => {
    setTimeout(() => {
      const t = new Date().toTimeString().split(" ")[0];
      setTime(t);
    }, 1000);
  }, [time]);

  const events = [
    {
      id: "drone",
      title: "Celestial Swarm",
      tag: "PRIORITY_ALPHA",
      status: "Signal_Locked_100%",
      desc: "250+ Drones. One Sky. A revolutionary aerial spectacle using coordinated light paths to redefine the stars. The centerpiece of Ingenium 2026.",
      icon: <Rocket className="w-8 h-8" />,
      priority: true,
    },
    {
      id: "wow",
      title: "WoW: Speakers",
      tag: "INTEL_GATHERING",
      status: "Decrypting_Bios...",
      desc: "Accessing encrypted files of global visionaries, industry disruptors, and tech pioneers. The roster is currently 87% decrypted.",
      icon: <Mic2 className="w-8 h-8" />,
    },
    {
      id: "pro",
      title: "Pronites",
      tag: "AUDIO_STRIKE",
      status: "Volume_Max",
      desc: "The mainstage erupts. High-decibel performances featuring global icons. Warning: Energy levels expected to exceed safety parameters.",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      id: "bands",
      title: "Band Nights",
      tag: "SONIC_WARFARE",
      status: "Tuning_Frequencies",
      desc: "Raw talent meets distorted reality. A battlefield where the best bands fight for sonic supremacy under the neon lights.",
      icon: <Music className="w-8 h-8" />,
    },
    {
      id: "cultural",
      title: "Illuminati Hub",
      tag: "VISUAL_FUSION",
      status: "Loading_Pixels",
      desc: "From the classical grace of SpicMacay to the neon light shows of Illuminati. A cultural bridge built with fiber optics.",
      icon: <Target className="w-8 h-8" />,
    },
    {
      id: "expo",
      title: "Innovation Expo",
      tag: "TECH_NEXUS",
      status: "Deploying_Assets",
      desc: "Partnering with Mhow for Defence Expos and Indore Innovation Hub. See the hardware that will build the future.",
      icon: <ShieldCheck className="w-8 h-8" />,
    },
  ];

  return (
    <divs top
      ref={containerRef}
      className="bg-black/30 min-h-screen text-white font-mono selection:bg-amber-500 selection:text-black"
    >
      {/* FIXED HUD LAYER */}
      <motion.div
        style={{ scaleX }}
        className="sticky top-0 left-0 right-0 h-1 bg-amber-500 origin-left z-50 shadow-[0_0_15px_#f59e0b]"
      />

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-white/5" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-white/5" />

        {/* Floating Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [-20, 1000], opacity: [0, 0.3, 0] }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-1 h-20 bg-amber-500/20"
              style={{ left: `${Math.random() * 100}%`, top: -100 }}
            />
          ))}
        </div>
      </div>

      {/* HEADER AREA */}
      <section className="relative z-10 pt-32 pb-20 px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-0.5 w-12 bg-amber-500" />
          <span className="text-amber-500 tracking-[0.8em] font-black uppercase text-xs">
            Live_Transmission
          </span>
          <div className="h-0.5 w-12 bg-amber-500" />
        </motion.div>

        <h1 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter text-center leading-none">
          Mission{" "}
          <span className="text-transparent border-t border-b border-amber-500 stroke-text">
            Events
          </span>
        </h1>

        <div className="mt-8 flex gap-8 items-center text-[10px] tracking-[0.3em] text-white/40 uppercase">
          <div className="flex items-center gap-2">
            <Cpu className="w-3 h-3" /> Core_v3.0
          </div>
          <div className="flex items-center gap-2">
            <Crosshair className="w-3 h-3" /> Target: Ingenium_2026
          </div>
        </div>
      </section>

      {/* MAIN CONTENT FEED */}
      <main className="relative z-10 flex flex-col items-center pb-40">
        {events.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </main>

      {/* SYSTEM OVERLAY FOOTER */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:block">
        <div className="flex flex-col gap-1 border-l-2 border-amber-500 pl-4">
          <span className="text-[10px] text-white/40 font-bold uppercase">
            System_Clock
          </span>
          <span className="text-xl font-black text-white italic">
            {time}
          </span>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <button className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 hover:bg-amber-500 hover:text-black transition-all group">
          <Share2 className="w-4 h-4" />
          <span className="text-[10px] font-bold uppercase tracking-widest">
            Share_Intel
          </span>
        </button>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(245, 158, 11, 0.5);
          text-shadow: 0 0 20px rgba(245, 158, 11, 0.2);
        }
      `}</style>
    </divs>
  );
};

export default IngeniumEvents;
