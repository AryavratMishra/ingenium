"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  Users,
  CreditCard,
  ShieldAlert,
  ExternalLink,
  Info,
  MapPin,
  Zap,
  CheckCircle2,
  Lock,
  ChevronLeft,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function AccommodationNexus() {
  const googleFormLink = "https://forms.gle/your-google-form-link";
  const router = useRouter();
  return (
    <div className="relative min-h-screen text-cyan-100 font-mono p-4 md:p-8 overflow-hidden bg-black/30">
      {/* Structural HUD Decoration */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-0 w-full h-px bg-cyan-500/10" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-cyan-500/10" />
        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 border border-cyan-500/5 rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* --- LOGISTICS HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 border-b border-cyan-500/20 pb-8">
          <div className="space-y-1">
            <button
              onClick={() => router.push("/?state=navigation")}
              className="flex items-center gap-2 text-cyan-400"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-[12px] tracking-[0.5em] uppercase font-bold">
                Return to Navigation
              </span>
            </button>
            <h1 className="text-5xl font-black tracking-tighter text-white uppercase italic">
              BASE <span className="text-cyan-500">CAMP</span> LOCATOR
            </h1>
            <p className="text-[12px] text-cyan-500/60 mt-2 tracking-[0.3em] uppercase">
              Secure Lodging & Habitation Protocols
            </p>
          </div>
          <div className="mt-6 lg:mt-0 flex gap-4">
            <HabitationStat
              icon={<MapPin />}
              label="Sector"
              value="IIT Indore Campus"
            />
            <HabitationStat
              icon={<Users />}
              label="Type"
              value="Double Occupancy"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- COST & ELIGIBILITY --- */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-4 sm:p-8 bg-cyan-950/20 border border-cyan-500/30 rounded-3xl backdrop-blur-xl relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 text-cyan-500/10 group-hover:text-cyan-500/20 transition-colors">
                <CreditCard className="w-24 h-24" />
              </div>
              <h3 className="text-[12px] text-cyan-400 uppercase tracking-widest mb-2 font-bold italic">
                Credits_Required
              </h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-black text-white italic">
                  ₹500
                </span>
                <span className="text-xs text-cyan-500/60 font-bold tracking-tighter">
                  / Night (inclusive all taxes)
                </span>
              </div>
              <div className="space-y-3 pt-6 border-t border-white/5">
                <EligibilityRow
                  icon={<CheckCircle2 />}
                  text="Register in ≥1 Competition"
                />
                <EligibilityRow
                  icon={<CheckCircle2 />}
                  text="Verify Biometric Identity"
                />
                <EligibilityRow
                  icon={<CheckCircle2 />}
                  text="Clear Terminal Scrutiny"
                />
              </div>
            </div>

            {/* System Integrity Warning */}
            <div className="p-3 sm:p-6 bg-red-950/20 border border-red-500/30 rounded-2xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <ShieldAlert className="w-5 h-5 text-red-500 animate-pulse" />
                <h4 className="text-xs font-black text-white uppercase tracking-widest">
                  Entry_Authorization_Disclaimer
                </h4>
              </div>
              <p className="text-[11px] text-red-200/70 leading-relaxed uppercase font-bold italic">
                Mere payment of registration and habitation fees does not
                guarantee terminal access. IIT Indore maintains absolute
                authority to revoke/cancel registration for any individual at
                its sole discretion.
              </p>
            </div>
          </div>

          {/* --- UPLINK PORTAL --- */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-5 sm:p-10 backdrop-blur-md relative">
              <h3 className="text-xl font-black text-white uppercase tracking-widest mb-6 flex items-center gap-3">
                <Lock className="w-5 h-5 text-cyan-500" /> Habitation_Uplink
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-10">
                Data entry for accommodation is handled via a secure external
                node. Use the button below to initialize your habitation request
                through the official Google Form terminal.
              </p>

              <motion.a
                href={googleFormLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full p-5 bg-cyan-600/20 border-2 border-cyan-500/50 rounded-2xl text-center group hover:bg-cyan-500/30 transition-all shadow-[0_0_30px_rgba(6,182,212,0.1)]"
              >
                <div className="flex items-center justify-center gap-3">
                  <span className="text-sm font-black text-white tracking-[0.3em] uppercase">
                    Initialize_Form_Uplink
                  </span>
                  <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </motion.a>

              <div className="mt-10 flex items-center gap-4 p-4 bg-cyan-500/5 border border-cyan-500/20 rounded-xl">
                <Zap className="w-8 h-8 text-cyan-500/40" />
                <span className="text-[11px] text-gray-500 uppercase font-bold leading-tight">
                  Processing Speed: Synchronized <br />
                  Data Sensitivity: Class-A Encrypted
                </span>
              </div>
            </div>

            {/* Protocol Summary */}
            <div className="flex justify-between items-center px-4 opacity-40">
              <div className="flex gap-6 text-[10px] uppercase tracking-widest font-black">
                <span>ID: Habitation-001</span>
                <span>Status: Online</span>
                <span>Node: IITI-Base-1</span>
              </div>
              <Info className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Nexus Internal Components ---

function HabitationStat({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-lg backdrop-blur-md">
      <div className="text-cyan-500">{icon}</div>
      <div>
        <span className="text-[10px] text-gray-500 uppercase block leading-none mb-1 font-bold">
          {label}
        </span>
        <span className="text-sm font-bold text-white tracking-tighter uppercase italic">
          {value}
        </span>
      </div>
    </div>
  );
}

function EligibilityRow({ icon, text }) {
  return (
    <div className="flex items-center gap-3 text-[12px] uppercase font-bold text-cyan-100/60 group">
      <div className="text-cyan-500 group-hover:scale-110 transition-transform">
        {React.cloneElement(icon, { className: "w-3 h-3" })}
      </div>
      <span>{text}</span>
    </div>
  );
}
