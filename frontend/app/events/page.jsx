"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Activity, Zap, Cpu } from "lucide-react";
import { useRouter } from "next/navigation";

const ComingSoon = () => {
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-black/30 text-amber-100 font-mono overflow-hidden flex flex-col items-center justify-center p-6">
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Scanning Line */}
        <motion.div
          initial={{ top: "-10%" }}
          animate={{ top: "110%" }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 w-full h-0.5 bg-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.5)] z-0"
        />

        {/* Subtle Grid / Radar circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 border border-amber-500/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 border border-amber-500/10 rounded-full animate-pulse" />
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Top Status Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex gap-4 mb-8 items-center"
        >
          <div className="flex items-center gap-2 px-3 py-1 border border-amber-500/30 bg-amber-500/5 rounded-full">
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold">
              System_Syncing
            </span>
          </div>
          <div className="text-amber-500/40 text-[10px] tracking-widest uppercase italic">
            v3.0_dev_build
          </div>
        </motion.div>

        {/* LARGE CENTRAL TEXT */}
        <div className="relative group">
          {/* Glitch Shadow Effect (Red/Blue shift style but in Amber) */}
          <motion.h2
            animate={{
              x: [-1, 1, -1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 0.2, repeat: Infinity }}
            className="absolute inset-0 text-7xl md:text-9xl font-black italic uppercase tracking-tighter text-amber-900/40 blur-sm select-none"
          >
            Coming Soon
          </motion.h2>

          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter text-white leading-none relative z-10"
          >
            Coming <span className="text-amber-500">Soon</span>
          </motion.h1>

          <div className="absolute -bottom-4 left-0 w-full h-1 bg-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.8)]" />
        </div>

        {/* LOADING SUBTEXT */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-center space-y-4"
        >
          <p className="text-amber-500/70 text-xs tracking-[0.5em] uppercase font-bold animate-pulse">
            Compiling_Resources... 87%
          </p>

          <div className="flex justify-center gap-6 mt-6">
            <Cpu className="w-5 h-5 text-amber-500/30" />
            <Activity className="w-5 h-5 text-amber-500/30" />
            <Zap className="w-5 h-5 text-amber-500/30" />
          </div>
        </motion.div>

        {/* RETURN BUTTON */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/?state=navigation")}
          className="mt-16 px-8 py-3 border border-amber-500/50 hover:bg-amber-500 hover:text-black transition-all duration-300 flex items-center gap-3 group"
        >
          <Terminal className="w-4 h-4" />
          <span className="text-[11px] font-black uppercase tracking-[0.3em]">
            Abort_And_Return
          </span>
        </motion.button>
      </div>

      {/* FOOTER DECORATION */}
      <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center opacity-30 text-[9px] uppercase tracking-[0.4em]">
        <div className="flex gap-4">
          <span>Ingenium_2026</span>
          <span>//</span>
          <span>Core_Interface</span>
        </div>
        <div className="hidden md:block">Accessing_Encrypted_Data_Nodes...</div>
      </div>
    </div>
  );
};

export default ComingSoon;
