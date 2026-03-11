"use client";

import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gauge,
  Settings2,
  Fuel,
  Radio,
  Maximize,
  Trophy,
  Activity,
  ShieldCheck,
  Zap,
  Users,
  Navigation2,
  ChevronLeft,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";
import RegistrationDeadlineDisclaimer from "@/components/RegistrationDeadlineDisclaimer";

export default function RCRacingPS() {
  const router = useRouter();
  const { isLoggedIn } = useContext(AuthContext);

  const competitionData = {
    title: "1:8 Nitro Buggy Racing",
    org: "Robotics Club",
    format: "Team (4-6 people)",
    mode: "Offline",
    baseFee: "₹1,500",
    prizes: {
      first: "23,000",
      second: "13,000",
      third: "9,000",
      total: "45,000",
    },
  };

  const techSpecs = [
    {
      label: "Engine",
      value: "Single-cyl, 2-stroke, Air-cooled",
    },
    { label: "Max Capacity", value: "125cc Fuel / 3.5cc Engine" },
    { label: "Transmission", value: "Single-speed 4WD" },
    {
      label: "Tires",
      value: "Rubber Only (109-120mm dia)",
    },
    { label: "Weight", value: "Minimum 3.2 kg" },
  ];

  return (
    <div className="relative min-h-screen text-orange-100 font-mono p-4 md:p-8 overflow-hidden bg-black/30">
      <RegistrationDeadlineDisclaimer
        competition={"Nitro Throttle"}
        deadline={"12 March 2026, 11:59 PM"}
      />

      {/* Dynamic Racing Line Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
        <svg viewBox="0 0 1000 1000" className="w-full h-full">
          <motion.path
            d="M 0 800 Q 250 750 500 800 T 1000 700"
            stroke="#f97316"
            strokeWidth="4"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- HIGH-OCTANE HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 border-b border-orange-500/20 pb-8">
          <div className="space-y-1">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-orange-500"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-[12px] tracking-[0.5em] uppercase font-bold">
                Return to Competitions
              </span>
            </button>
            <h1 className="text-5xl font-black tracking-tighter text-white uppercase italic">
              <span className="text-orange-500">NITRO</span> THROTTLE
            </h1>
            <p className="text-[12px] text-orange-500/60 mt-2 tracking-[0.3em] uppercase">
              1:8 Off-Road Buggy Championship
            </p>
          </div>
          <div className="mt-6 lg:mt-0 flex flex-wrap gap-4">
            <StatNode
              icon={<Users />}
              label="Squad"
              value={competitionData.format}
            />
            <StatNode
              icon={<Activity />}
              label="Class"
              value="1:8 / 1:10 Nitro"
            />
            <StatNode
              icon={<Zap />}
              label="Base Fee (Per Team)"
              value={competitionData.baseFee}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- ENGINE & TRANSMISSION SPECS --- */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-[12px] text-orange-500 uppercase tracking-widest mb-4 font-bold italic">
              Machine_Telemetry
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {techSpecs.map((spec, i) => (
                <div
                  key={i}
                  className="p-4 bg-orange-950/20 border border-orange-500/10 rounded-xl flex justify-between items-center group hover:border-orange-500/40 transition-all"
                >
                  <div>
                    <span className="text-[10px] text-orange-500/50 block font-bold uppercase">
                      Spec_{i + 1}
                    </span>
                    <span className="text-[13px] text-white font-black uppercase tracking-tighter">
                      {spec.label}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-orange-400 font-bold italic">
                      {spec.value}
                    </span>
                    <span className="text-[10px] text-orange-500/30 block"></span>
                  </div>
                </div>
              ))}
            </div>

            {/* Fuel & Safety Module */}
            <div className="p-3 sm:p-6 bg-black/40 border border-white/10 rounded-2xl">
              <h4 className="text-[12px] text-orange-500/60 uppercase tracking-widest mb-4 flex items-center gap-2 font-bold">
                <Fuel className="w-3 h-3" /> Chemical_Constraints
              </h4>
              <div className="space-y-2">
                <ComplianceRow label="Max Nitro Methane" value="25%" />
                <ComplianceRow label="Exhaust" value="Muffler/Tuned Pipe" />
                <ComplianceRow label="Radio" value="2.4GHz DSM/DSS" />
              </div>
            </div>
          </div>

          {/* --- CIRCUIT PROTOCOLS --- */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-4 sm:p-8 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-4 right-4 text-orange-500/10">
                <Gauge className="w-32 h-32" />
              </div>

              <h3 className="text-xl font-black text-white uppercase tracking-widest mb-8 flex items-center gap-3">
                <Settings2 className="w-5 h-5 text-orange-500" />{" "}
                Operational_Logic
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-4">
                  <h4 className="text-[12px] text-orange-500 uppercase tracking-widest font-bold">
                    System_Failsafes
                  </h4>
                  <ul className="space-y-3">
                    <li className="text-[13px] text-gray-400 flex gap-3 italic">
                      <ShieldCheck className="w-4 h-4 text-green-500 shrink-0" />
                      Mandatory fail-safe for throttle idle upon signal loss.
                    </li>
                    <li className="text-[13px] text-gray-400 flex gap-3 italic">
                      <ShieldCheck className="w-4 h-4 text-green-500 shrink-0" />
                      Working brake/de-clutching system required.
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-[12px] text-red-400 uppercase tracking-widest font-bold">
                    DQ_Parameters
                  </h4>
                  <div className="grid grid-cols-1 gap-1 text-[12px] text-red-200/50 uppercase font-bold">
                    <p>▪ Reversed Frequencies Forbidden</p>
                    <p>▪ No Traction Control Systems</p>
                    <p>▪ Max Chassis Length: 310mm</p>
                  </div>
                </div>
              </div>

              {/* REGISTRATION ACTION */}
              <div className="pt-8 border-t border-white/5">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    if (isLoggedIn)
                      router.push(`/registration?competition=nitro-throttle`);
                    else
                      alert(
                        "Please login to register. Login button at botton-right corner.",
                      );
                  }}
                  className="w-full py-4 bg-orange-600 border-b-4 border-orange-800 rounded-xl text-black font-black uppercase tracking-wider shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:bg-orange-500 transition-all flex items-center justify-center gap-3"
                >
                  Initialize_Race_Entry <Zap className="w-4 h-4 fill-current" />
                </motion.button>
              </div>
            </div>

            {/* --- BOUNTY REGISTRY --- */}
            <div className="bg-orange-500/5 border border-orange-500/20 rounded-3xl p-4 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-5">
                <Trophy className="w-32 h-32" />
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-black text-white uppercase tracking-[0.2em]">
                    Bounty_Registry
                  </h3>
                  <p className="text-[12px] text-orange-500 uppercase tracking-widest italic font-bold">
                    Nitro_Excellence_Rewards
                  </p>
                </div>

                <div className="flex gap-8">
                  <BountyNode
                    rank="ALPHA"
                    amount={competitionData.prizes.first}
                    label="Grand Champion"
                  />
                  <BountyNode
                    rank="BETA"
                    amount={competitionData.prizes.second}
                    label="Runner Up"
                  />
                  <BountyNode
                    rank="GAMMA"
                    amount={competitionData.prizes.third}
                    label="Second Runner"
                  />
                </div>

                <div className="px-6 py-4 bg-orange-500/10 border border-orange-500/30 rounded-xl text-center min-w-35">
                  <span className="text-[11px] text-orange-500 uppercase block font-bold mb-1">
                    Total Pool
                  </span>
                  <span className="text-2xl font-black text-orange-400 italic">
                    ₹45,000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Internal Components ---

function StatNode({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-lg backdrop-blur-md">
      <div className="text-orange-500">{icon}</div>
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

function ObjectiveItem({ text }) {
  return (
    <div className="flex gap-3 items-center text-[12px] uppercase font-bold text-gray-400 group">
      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 group-hover:scale-150 transition-transform" />
      <span className="group-hover:text-white transition-colors">{text}</span>
      <span className="text-[10px] text-orange-500/30 font-mono"></span>
    </div>
  );
}

function ComplianceRow({ label, value }) {
  return (
    <div className="flex justify-between items-center text-[11px] border-b border-white/5 pb-1">
      <span className="text-gray-500 uppercase font-bold">{label}</span>
      <span className="text-white font-black italic">
        {value} <span className="text-[10px] text-orange-500/30"></span>
      </span>
    </div>
  );
}

function BountyNode({ rank, amount, label }) {
  return (
    <div className="text-center group">
      <div
        className={`text-[10px] text-orange-500 uppercase mb-1 font-bold tracking-tighter`}
      >
        {rank}_TIER
      </div>
      <div className="text-xl font-black text-white italic group-hover:scale-110 transition-transform">
        ₹{amount}
      </div>
      <div className="text-[10px] text-orange-400/40 uppercase mt-1 font-bold">
        {label}
      </div>
    </div>
  );
}
