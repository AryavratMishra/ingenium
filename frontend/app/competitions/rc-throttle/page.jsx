"use client";

import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  BatteryCharging,
  Cpu,
  Radio,
  Settings2,
  Trophy,
  Activity,
  ShieldAlert,
  Users,
  Navigation2,
  Lock,
  ChevronLeft,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";
import RegistrationDeadlineDisclaimer from "@/components/RegistrationDeadlineDisclaimer";

export default function RCThrottlePS() {
  const router = useRouter();
  const { isLoggedIn } = useContext(AuthContext);

  const competitionData = {
    title: "1:8 Electric Buggy Racing",
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
    { label: "Voltage Limit", value: "Max 15.2V (4S LiPo)" },
    { label: "Motor Stator", value: "Max 44mm OD" },
    { label: "Transmission", value: "Single-speed 4WD" },
    { label: "Tires", value: "Black Rubber Only" },
    { label: "Weight", value: "Minimum 3.2 kg" },
  ];

  return (
    <div className="relative min-h-screen text-blue-100 font-mono p-4 md:p-8 overflow-hidden bg-black/30">
      <RegistrationDeadlineDisclaimer
        competition={"RC Throttle"}
        deadline={"12 March 2026, 11:59 PM"}
      />

      {/* High-Voltage Circuit Background Decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg viewBox="0 0 1000 1000" className="w-full h-full">
          <motion.path
            d="M 100 100 L 900 100 L 900 900 L 100 900 Z"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="1"
            strokeDasharray="10,10"
            animate={{ strokeDashoffset: [0, -100] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 500 0 L 500 1000 M 0 500 L 1000 500"
            stroke="#3b82f6"
            strokeWidth="0.5"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- ELECTRIC PERFORMANCE HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 border-b border-blue-500/20 pb-8">
          <div className="space-y-1">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-blue-400"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-[12px] tracking-[0.5em] uppercase font-bold">
                Return to Competitions
              </span>
            </button>
            <h1 className="text-5xl font-black tracking-tighter text-white uppercase italic">
              RC <span className="text-blue-500 italic">THROTTLE</span>
            </h1>
            <p className="text-[12px] text-blue-500/60 mt-2 tracking-[0.3em] uppercase">
              1:8 Precision Electric Off-Road Circuit
            </p>
          </div>
          <div className="mt-6 lg:mt-0 flex gap-4 flex-wrap">
            <StatNode
              icon={<Users />}
              label="Squad"
              value={competitionData.format}
            />
            <StatNode
              icon={<BatteryCharging />}
              label="Power"
              value="4S Lithium"
            />
            <StatNode
              icon={<Lock />}
              label="Base Fee (Per Team)"
              value={competitionData.baseFee}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- CORE HARDWARE TELEMETRY --- */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-[12px] text-blue-500 uppercase tracking-widest mb-4 font-bold italic">
              Module_Diagnostics
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {techSpecs.map((spec, i) => (
                <div
                  key={i}
                  className="p-4 bg-blue-950/20 border border-blue-500/10 rounded-xl flex justify-between items-center group hover:border-blue-500/40 transition-all"
                >
                  <div>
                    <span className="text-[12px] text-blue-500/50 block font-bold uppercase">
                      Surge_{i + 1}
                    </span>
                    <span className="text-[13px] text-white font-black uppercase tracking-tighter">
                      {spec.label}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-blue-400 font-bold italic">
                      {spec.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Driver Aid Restrictions */}
            <div className="p-3 sm:p-6 bg-black/40 border border-white/10 rounded-2xl">
              <h4 className="text-[12px] text-blue-500/60 uppercase tracking-widest mb-4 flex items-center gap-2 font-bold">
                <Cpu className="w-3 h-3" /> Binary_Restrictions
              </h4>
              <div className="space-y-2">
                <ComplianceRow label="Traction Control" value="FORBIDDEN" />
                <ComplianceRow label="Gyro Steering" value="PROHIBITED" />
                <ComplianceRow label="Sensor Adjustment" value="PASSIVE ONLY" />
              </div>
            </div>
          </div>

          {/* --- OPERATIONAL PROTOCOLS --- */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-4 sm:p-8 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-4 right-4 text-blue-500/10">
                <Navigation2 className="w-32 h-32" />
              </div>

              <h3 className="text-xl font-black text-white uppercase tracking-widest mb-8 flex items-center gap-3">
                <Settings2 className="w-5 h-5 text-blue-500" /> Circuit_Logic
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-4">
                  <h4 className="text-[12px] text-blue-500 uppercase tracking-widest font-bold">
                    Battery_Safety_Logs
                  </h4>
                  <ul className="space-y-3">
                    <li className="text-[13px] text-gray-400 flex gap-3 italic">
                      <ShieldAlert className="w-4 h-4 text-yellow-500 shrink-0" />
                      Mandatory LiPo sack usage for charge/discharge cycles.
                    </li>
                    <li className="text-[13px] text-gray-400 flex gap-3 italic">
                      <ShieldAlert className="w-4 h-4 text-yellow-500 shrink-0" />
                      Max cut-off voltage strictly 4.20V per cell.
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-[12px] text-red-400 uppercase tracking-widest font-bold">
                    Terminal_Deductions
                  </h4>
                  <div className="grid grid-cols-1 gap-1 text-[12px] text-red-200/50 uppercase font-bold">
                    <p>▪ Manual Additives within perimeter [DQ]</p>
                    <p>▪ "Cut and Glue" Tire Modification [DQ]</p>
                    <p>▪ Failure to Return Throttle to Idle [DQ]</p>
                  </div>
                </div>
              </div>

              {/* ACTION: UPLINK ENTRY */}
              <div className="pt-8 border-t border-white/5">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    if (isLoggedIn)
                      router.push(`/registration?competition=rc-throttle`);
                    else
                      alert(
                        "Please login to register. Login button at botton-right corner.",
                      );
                  }}
                  className="w-full py-4 bg-blue-600 border-b-4 border-blue-800 rounded-xl text-black font-black uppercase tracking-wider shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:bg-blue-500 transition-all flex items-center justify-center gap-3"
                >
                  Initialize_Throttle_Uplink{" "}
                  <Zap className="w-4 h-4 fill-current" />
                </motion.button>
              </div>
            </div>

            {/* --- BOUNTY REGISTRY --- */}
            <div className="bg-blue-500/5 border border-blue-500/20 rounded-3xl p-4 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-5">
                <Trophy className="w-32 h-32" />
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-black text-white uppercase tracking-[0.2em]">
                    Bounty_Registry
                  </h3>
                  <p className="text-[12px] text-blue-500 uppercase tracking-widest italic font-bold">
                    Surge_Excellence_Rewards
                  </p>
                </div>

                <div className="flex gap-8">
                  <BountyNode
                    rank="ALPHA"
                    amount={competitionData.prizes.first}
                    label="Grand Winner"
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

                <div className="px-6 py-4 bg-blue-500/10 border border-blue-500/30 rounded-xl text-center min-w-35">
                  <span className="text-[11px] text-blue-500 uppercase block font-bold mb-1">
                    Total Pool
                  </span>
                  <span className="text-2xl font-black text-blue-400 italic">
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

// --- Internal Logistics Components ---

function StatNode({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-lg backdrop-blur-md">
      <div className="text-blue-500">{icon}</div>
      <div>
        <span className="text-[12px] text-gray-500 uppercase block leading-none mb-1 font-bold">
          {label}
        </span>
        <span className="text-sm font-bold text-white tracking-tighter uppercase italic">
          {value}
        </span>
      </div>
    </div>
  );
}

function ComplianceRow({ label, value }) {
  return (
    <div className="flex justify-between items-center text-[11px] border-b border-white/5 pb-1">
      <span className="text-gray-500 uppercase font-bold">{label}</span>
      <span className="text-white font-black italic">
        {value} <span className="text-[12px] text-blue-500/30"></span>
      </span>
    </div>
  );
}

function BountyNode({ rank, amount, label }) {
  return (
    <div className="text-center group">
      <div
        className={`text-[12px] text-blue-500 uppercase mb-1 font-bold tracking-tighter`}
      >
        {rank}_TIER
      </div>
      <div className="text-xl font-black text-white italic group-hover:scale-110 transition-transform">
        ₹{amount}
      </div>
      <div className="text-[12px] text-blue-400/40 uppercase mt-1 font-bold">
        {label}
      </div>
    </div>
  );
}
