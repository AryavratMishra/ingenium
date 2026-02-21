"use client";

import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Orbit,
  ChevronLeft,
  Users,
  Maximize,
  Trophy,
  Info,
  AlertTriangle,
  Target,
  ShieldCheck,
  Scale,
  CreditCard,
  Layers,
  FileText,
  Activity,
  Zap,
  Cpu,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";

export default function LineFollowerPage() {
  const router = useRouter();
  const { isLoggedIn } = useContext(AuthContext);

  const active = {
    id: "LF",
    title: "LINE FOLLOWER",
    sub: "Robotics Club // Precision Auto",
    icon: <Orbit className="w-8 h-8" />,
    color: "sky",
    href: "/PS/Line_Follower.pdf",
    teamSize: "1 to 3 people",
    regFee: "600",
    objective:
      "To design an autonomous robot that follows a predefined line track with high accuracy and stability.",
    philosophy:
      "Focuses on sensor integration and control algorithms like PID to achieve optimized autonomous navigation.",
    constraints: [
      { label: "Max Weight", val: "3 kg", detail: "Total robot mass" },
      {
        label: "Dimensions",
        val: "200x150x150 mm",
        detail: "Compact design",
      },
      {
        label: "Sensors",
        val: "IR / Optical",
        detail: "Only sensors allowed",
      },
      { label: "Control", val: "Autonomous", detail: "No manual overrides" },
    ],
    arena: {
      size: "Up to 3m x 3m",
      type: "High Contrast Path",
      floor: "20-25mm black line on white surface",
    },
    stages: [
      {
        title: "Phase 01: Logic Design",
        meta: "Online Submission // 8 March",
        details:
          "Submission of sensor configuration and PID/Logic control overviews.",
      },
      {
        title: "Phase 02: Track Trial",
        meta: "Offline // Inspection & Runs",
        details:
          "Calibration and inspection followed by timed track runs on a checkpoint-based course.",
      },
    ],
    prizes: [
      { name: "Precision (1st)", amount: "12,000" },
      { name: "Stability (2nd)", amount: "5,000" },
      { name: "Velocity (3rd)", amount: "3,000" },
    ],
    totalPool: "20,000",
  };

  return (
    <div className="relative min-h-screen text-white font-mono p-4 md:p-8 bg-black/30">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- HEADER --- */}
        <header className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 border-b border-white/10 pb-6">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-sky-500 mb-4 group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[12px] tracking-[0.5em] uppercase font-bold">
                Return to Competitions
              </span>
            </button>
            <h1 className="text-5xl font-black tracking-tighter uppercase italic leading-none">
              {active.title}
            </h1>
            <p className="text-gray-500 text-[12px] mt-2 tracking-[0.3em] font-bold uppercase">
              {active.sub}
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-3 sm:p-6 bg-white/5 border border-white/10 rounded-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                {active.icon}
              </div>
              <h3 className="text-sky-500 text-[14px] font-black tracking-[0.2em] mb-2 uppercase flex items-center gap-2">
                <Target className="w-3 h-3" /> Mission_Objective
              </h3>
              <p className="text-sm leading-relaxed text-gray-300 italic">
                "{active.objective}"
              </p>
              <div className="mt-4 pt-4 border-t border-white/5 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-[12px] text-gray-500 uppercase font-bold">
                    Participation
                  </span>
                  <span className="text-sm font-bold text-sky-500 uppercase flex items-center gap-2">
                    <Users className="w-3 h-3" /> {active.teamSize}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[12px] text-gray-500 uppercase font-bold">
                    Base Fee (Per Team)
                  </span>
                  <span className="text-sm font-bold text-sky-500 uppercase flex items-center gap-2">
                    <CreditCard className="w-3 h-3" /> ₹{active.regFee}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {active.constraints.map((c, i) => (
                <div
                  key={i}
                  className="p-4 bg-black/40 border border-white/5 rounded-lg group hover:border-sky-500/40 transition-all"
                >
                  <p className="text-[12px] text-gray-500 uppercase font-black mb-1">
                    {c.label}
                  </p>
                  <p className="text-[15px] font-black text-white">{c.val}</p>
                  <p className="text-[13px] text-sky-400/60 mt-1 italic">
                    {c.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-3 sm:p-6 bg-black/60 border-l-2 border-sky-500 rounded-r-xl">
              <h3 className="text-[14px] font-black tracking-[0.2em] mb-4 uppercase text-gray-400 flex items-center gap-2">
                <Maximize className="w-3 h-3" /> Arena_Specs
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-[12px] uppercase text-gray-500">
                    Dimensions
                  </span>
                  <span className="text-sm font-bold">{active.arena.size}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[12px] uppercase text-gray-500">
                    Surface
                  </span>
                  <span className="text-[13px] font-bold text-right ml-4 text-gray-300">
                    {active.arena.floor}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* MIDDLE COLUMN: EXPLICIT ROUNDS */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-3 sm:p-6 bg-white/5 border border-white/10 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Layers className="w-32 h-32" />
              </div>
              <h3 className="text-[14px] font-black tracking-[0.2em] mb-6 uppercase flex items-center gap-2">
                <Activity className="w-3 h-3 text-sky-500" /> Competition_Rounds
              </h3>
              <div className="space-y-8">
                {active.stages.map((stage, i) => (
                  <div key={i} className="flex gap-4 group relative">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-none border-2 border-sky-500 flex items-center justify-center text-[14px] font-black bg-black group-hover:bg-sky-500 group-hover:text-black transition-all">
                        0{i + 1}
                      </div>
                      {i !== active.stages.length - 1 && (
                        <div className="w-px h-full bg-sky-500/30 my-2" />
                      )}
                    </div>
                    <div className="pb-2">
                      <p className="text-sm font-black uppercase text-white mb-1">
                        {stage.title}
                      </p>
                      <div className="inline-block px-2 py-0.5 bg-sky-500/10 text-sky-500 text-[12px] font-bold uppercase mb-2 tracking-wider">
                        {stage.meta}
                      </div>
                      <p className="text-[13px] text-gray-400 leading-relaxed">
                        {stage.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 sm:p-6 bg-black/40 border border-white/10 rounded-xl">
              <h3 className="text-[14px] font-black tracking-[0.2em] mb-4 uppercase text-gray-400 flex items-center gap-2">
                <ShieldCheck className="w-3 h-3 text-sky-500" />{" "}
                Protocol_Compliance
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="text-[13px] text-gray-400 flex gap-2">
                  <div className="w-1 h-1 bg-sky-500 shrink-0 mt-2" />
                  Wireless control with mandatory fail-safe protocols
                </li>
                <li className="text-[13px] text-sky-500/80 italic flex items-center gap-2 mt-4">
                  <Scale className="w-4 h-4 shrink-0" /> Rules are subject to
                  change at organizers' discretion
                </li>
              </ul>
              <Link
                href={active.href}
                target="_blank"
                className="inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-widest text-white border-b-2 border-sky-500 hover:text-sky-500 transition-colors pb-1"
              >
                <FileText className="w-4 h-4" /> Download_Full_Rules_PDF
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-3 space-y-6">
            <div className="p-3 sm:p-6 bg-white/5 border border-white/10 rounded-xl relative group">
              <h3 className="text-[14px] font-black tracking-[0.2em] mb-4 uppercase text-sky-500 flex items-center gap-2">
                <Info className="w-3 h-3" /> Event_Context
              </h3>
              <p className="text-[13px] text-gray-400 leading-relaxed italic group-hover:text-gray-200 transition-colors">
                {active.philosophy}
              </p>
            </div>

            <div className="p-3 sm:p-6 bg-linear-to-br from-sky-500 to-sky-700 rounded-xl text-black shadow-lg shadow-sky-500/20">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  <h3 className="text-sm font-black uppercase italic">
                    Bounty_Pool
                  </h3>
                </div>
                <div className="text-right">
                  <p className="text-[8px] font-black uppercase leading-none opacity-70">
                    Pool Total
                  </p>
                  <p className="text-lg font-black italic">
                    ₹{active.totalPool}
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {active.prizes.map((p, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center border-b border-black/10 pb-1"
                  >
                    <span className="text-[11px] font-bold uppercase">
                      {p.name}
                    </span>
                    <span className="text-sm font-black italic">
                      ₹{p.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                if (isLoggedIn)
                  router.push(
                    `/present/registration?competition=line-follower`,
                  );
                else
                  alert(
                    "Please login to register. Login button at botton-right corner.",
                  );
              }}
              className="w-full py-4 bg-white text-black font-black uppercase italic text-sm tracking-tighter hover:bg-sky-500 hover:text-white transition-all transform hover:-translate-y-1 shadow-[0_4px_20px_rgba(244,63,94,0.3)] flex items-center justify-center gap-3 group"
            >
              Initiate_Registration
              <Zap className="w-4 h-4 fill-current group-hover:scale-125 transition-transform" />
            </button>

            <div className="p-4 bg-sky-500/10 border border-sky-500/20 rounded-xl">
              <div className="flex items-center gap-3 text-sky-500">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <span className="text-[12px] uppercase font-bold leading-tight">
                  Strict adherence to technical constraints is mandatory for
                  participation.
                </span>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6 opacity-30 border-t border-white/5 pt-8">
          <div className="flex gap-8">
            <Metric icon={<Cpu />} label="Mode" value="Offline" />
            <Metric icon={<Maximize />} label="Scale" value="1:1 Combat" />
            <Metric icon={<Activity />} label="Sync" value="Real-time" />
          </div>
          <span className="text-[9px] font-black uppercase tracking-[0.4em]">
            IIT INDORE // ROBOTICS DIVISION
          </span>
        </footer>
      </div>
    </div>
  );
}

function Metric({ icon, label, value }) {
  return (
    <div className="flex items-center gap-2">
      <div className="text-white">
        {React.cloneElement(icon, { className: "w-3 h-3" })}
      </div>
      <div className="flex flex-col">
        <span className="text-[7px] text-gray-500 uppercase font-black">
          {label}
        </span>
        <span className="text-[9px] font-black text-white uppercase italic">
          {value}
        </span>
      </div>
    </div>
  );
}
