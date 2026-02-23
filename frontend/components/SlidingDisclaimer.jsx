"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, X, ShieldCheck } from "lucide-react";

export default function SlidingDisclaimer() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-100 w-[90%] max-w-4xl"
        >
          <div className="relative overflow-hidden bg-black/80 backdrop-blur-2xl border border-orange-500/30 rounded-xl p-4 md:p-6 shadow-[0_0_30px_rgba(249,115,22,0.15)]">
            {/* Scannable Background Element */}
            <div className="absolute top-0 left-0 w-1 h-full bg-orange-600" />

            <div className="flex items-start gap-4">
              <div className="p-2 bg-orange-500/10 rounded-lg hidden sm:block">
                <ShieldCheck className="w-6 h-6 text-orange-500" />
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black tracking-[0.3em] text-orange-500 uppercase">
                    Official Protocol
                  </span>
                  <div className="h-px w-12 bg-orange-500/30" />
                </div>

                <p className="text-[11px] md:text-[12px] leading-relaxed text-orange-100/80 font-mono">
                  All events conducted under{" "}
                  <span className="text-white font-bold">Ingenium</span> are
                  <span className="text-orange-400"> non-ticketed</span>. Only
                  the officially prescribed registration fee for
                  participation is permitted. Participation is
                  restricted to authorized Institute members only; no external
                  guests or visitors are allowed. Any claim of ticket sales is{" "}
                  <span className="text-red-500 underline decoration-red-500/50">
                    unauthorized{" "}
                  </span>
                  and should be reported to Institute authorities.
                </p>
              </div>

              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-white/10 rounded-full transition-colors self-start"
                aria-label="Close disclaimer"
              >
                <X className="w-4 h-4 text-orange-500/60" />
              </button>
            </div>

            {/* Subtle scanning animation line */}
            <motion.div
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 h-px w-20 bg-linear-to-r from-transparent via-orange-500 to-transparent opacity-20"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
