"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, X, ShieldCheck } from "lucide-react";

export default function CancelledDisclaimer({ competition }) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-100 w-[90%] max-w-4xl"
        >
          <div className="relative overflow-hidden bg-black backdrop-blur-2xl border border-red-500/30 rounded-xl p-4 md:p-6 shadow-[0_0_30px_rgba(249,115,22,0.15)]">
            {/* Scannable Background Element */}
            <div className="absolute top-0 left-0 w-1 h-full bg-red-600" />

            <div className="flex items-start gap-4">
              <div className="p-2 bg-red-500/10 rounded-lg hidden sm:block">
                <ShieldCheck className="w-6 h-6 text-red-500" />
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black tracking-[0.3em] text-red-500 uppercase">
                    Official Announcement
                  </span>
                  <div className="h-px w-12 bg-red-500/30" />
                </div>

                <p className="text-[11px] md:text-[12px] leading-relaxed text-red-100/80 font-mono">
                  <span className="font-bold">{competition}</span> has been
                  cancelled due to a very low number of registrations. If you
                  have already registered and paid the registration fee, the
                  amount will be refunded within a few working days. We regret
                  the inconvenience caused.
                </p>
              </div>

              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-white/10 rounded-full transition-colors self-start"
                aria-label="Close disclaimer"
              >
                <X className="w-4 h-4 text-red-500/60" />
              </button>
            </div>

            {/* Subtle scanning animation line */}
            <motion.div
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 h-px w-20 bg-linear-to-r from-transparent via-red-500 to-transparent opacity-20"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
