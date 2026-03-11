"use client";

import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  Eye,
  Navigation,
  Trophy,
  ChevronLeft,
  ChevronRight,
  Target,
  FileText,
  Activity,
  ExternalLink,
  ShieldCheck,
  Search,
  AlertCircle,
  CreditCard,
  Flag,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import RegistrationDeadlineDisclaimer from "@/components/RegistrationDeadlineDisclaimer";

export default function CVObstacoursePage() {
  const router = useRouter();
  const { isLoggedIn } = useContext(AuthContext);

  const activeModule = 0;
  const challenges = [
    {
      id: 2,
      title: "CV Based Obstacourse",
      theme: "Autonomous Vision Navigation",
      mode: "Offline",
      rounds: "1 Round",
      regFee: "₹600",
      icon: <Eye className="w-6 h-6" />,
      href: "/PS/cv-obstacourse.pdf",
      motivation:
        "This competition integrates image processing and sensor-driven navigation, emphasizing precise path tracking and obstacle avoidance at high speeds.",
      problemStatement:
        "Design and build a camera-based robot that uses computer vision to detect obstacles and traverse a defined path autonomously in minimum time.",
      tasks: [
        {
          title: "CV Pipeline",
          desc: "Implement obstacle detection and path traversal using libraries like OpenCV.",
        },
        {
          title: "Control Logic",
          desc: "Use control algorithms to compute motion corrections and dynamically adjust motor speeds in real time.",
        },
      ],
      rules: [
        "Must use an Onboard Computer (NVIDIA Jetson/Raspberry Pi).",
        "Must use motor drivers (L298) to control standard DC motors.",
        "The robot must handle sharp turns, intersections, and varying widths.",
        "A live demonstration of autonomous completion is required.",
      ],
      deliverables: [
        "Functional autonomous robot with onboard processing ",
        "Hardware design and component selection report",
        "CV methodology and algorithm development process",
        "Control algorithm design and tuning approach",
      ],
      specs: {
        hardware: ["Jetson/Pi", "L298 Driver", "USB/Pi Camera", "DC Motors"],
        compute: "Onboard Image Processing",
      },
      evaluation: [
        "Completion Time: Total time taken to finish the course.",
        "Robot Design: Stability, compactness, and effective motor control.",
        "Algorithm Efficiency: Effectiveness of CV and control systems.",
        "Autonomy: Accuracy of detection and path traversal.",
      ],
      prizes: {
        first: "12,000",
        second: "5,000",
        third: "3,000",
        total: "20,000",
      },
    },
  ];

  return (
    <div className="relative min-h-screen bg-black/30 text-blue-100 font-mono p-4 md:p-8">
      <RegistrationDeadlineDisclaimer
        competition={"CV Obstacourse"}
        deadline={"12 March 2026, 11:59 PM"}
      />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 border-b border-blue-500/30 pb-6">
          <div className="space-y-1">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-blue-400 group mb-2"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[12px] font-bold tracking-[0.4em] uppercase">
                Return to Competitions
              </span>
            </button>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase italic">
              CV <span className="text-blue-500">Obstacourse</span>
            </h1>
          </div>
        </div>

        {/* --- MAIN INTERFACE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* COLUMN 1: MISSION INFO, STATS & PRIZES */}
          <div className="lg:col-span-4 space-y-6">
            {/* VITAL STATS */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-900/30 border border-blue-500/20 rounded-xl flex flex-col items-center justify-center text-center">
                <Navigation className="w-5 h-5 text-blue-400 mb-1" />
                <span className="text-[10px] uppercase text-blue-400/70">
                  Mode
                </span>
                <span className="text-sm font-bold text-white uppercase">
                  {challenges[activeModule].mode}
                </span>
              </div>
              <div className="p-4 bg-blue-900/30 border border-blue-500/20 rounded-xl flex flex-col items-center justify-center text-center">
                <Flag className="w-5 h-5 text-blue-400 mb-1" />
                <span className="text-[10px] uppercase text-blue-400/70">
                  Rounds
                </span>
                <span className="text-sm font-bold text-white uppercase">
                  {challenges[activeModule].rounds}
                </span>
              </div>
            </div>

            <div className="p-3 sm:p-6 bg-blue-950/20 border border-blue-500/20 rounded-2xl relative group">
              <div className="flex items-center gap-2 text-blue-400 text-[14px] uppercase tracking-widest mb-4">
                <Activity className="w-3 h-3 animate-pulse" /> Mission_Core
              </div>
              <p className="text-sm leading-relaxed text-blue-100/70 italic mb-6">
                {challenges[activeModule].motivation}
              </p>
              <div className="space-y-2 p-4 bg-blue-500/5 rounded-xl border border-blue-500/10">
                <h4 className="text-[14px] text-blue-400 uppercase font-bold flex items-center gap-2">
                  <Search className="w-3 h-3" /> Objective
                </h4>
                <p className="text-sm text-white leading-relaxed">
                  {challenges[activeModule].problemStatement}
                </p>
              </div>
            </div>

            {/* PRIZE POOL CARD */}
            <div className="p-3 sm:p-6 bg-linear-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-2xl">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-[14px] text-yellow-500 uppercase tracking-widest font-bold">
                  Bounty_Pool
                </h4>
                <Trophy className="w-5 h-5 text-yellow-500" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm font-mono">
                  <span className="text-blue-400/60">Rank_01</span>
                  <span className="text-white font-black">
                    ₹{challenges[activeModule].prizes.first}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-mono">
                  <span className="text-blue-400/60">Rank_02</span>
                  <span className="text-white font-black">
                    ₹{challenges[activeModule].prizes.second}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-mono pb-2 border-b border-white/5">
                  <span className="text-blue-400/60">Rank_03</span>
                  <span className="text-white font-black">
                    ₹{challenges[activeModule].prizes.third}
                  </span>
                </div>
                <div className="flex justify-between text-md font-black text-yellow-500 pt-1">
                  <span>TOTAL</span>
                  <span>₹{challenges[activeModule].prizes.total}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-blue-400" />
                  <span className="text-xs uppercase text-blue-200">
                    Base Fee (Per Team)
                  </span>
                </div>
                <span className="text-lg font-black text-white">
                  {challenges[activeModule].regFee}
                </span>
              </div>
              <button
                onClick={() => {
                  if (isLoggedIn)
                    router.push(`/registration?competition=cv-obstacourse`);
                  else
                    alert(
                      "Please login to register. Login button at botton-right corner.",
                    );
                }}
                className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all"
              >
                INITIATE_ENTRY <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* COLUMN 2: RULES, TASKS & SPECS */}
          <div className="lg:col-span-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* COMPLIANCE & RULES */}
              <div className="p-3 sm:p-6 bg-red-500/5 border border-red-500/20 rounded-2xl">
                <h4 className="text-[14px] text-red-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-3 h-3" /> Rules_&_Compliance
                </h4>
                <ul className="space-y-3 mb-4">
                  {challenges[activeModule].rules.map((rule, i) => (
                    <li
                      key={i}
                      className="text-[13px] text-blue-100/60 flex items-start gap-2"
                    >
                      <AlertCircle className="w-3 h-3 text-red-400 shrink-0 mt-0.5" />{" "}
                      {rule}
                    </li>
                  ))}
                </ul>
                <Link
                  href={challenges[activeModule].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase font-bold text-red-400 hover:text-red-300 transition-colors flex items-center gap-2 underline"
                >
                  <FileText className="w-4 h-4" /> View Full Documentation
                </Link>
              </div>

              {/* TASKS */}
              <div className="p-3 sm:p-6 bg-blue-950/20 border border-blue-500/20 rounded-2xl">
                <h4 className="text-[14px] text-blue-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Target className="w-3 h-3" /> Operation_Workflow
                </h4>
                <div className="space-y-4">
                  {challenges[activeModule].tasks.map((task, i) => (
                    <div key={i} className="pl-4 border-l-2 border-blue-500">
                      <div className="text-[13px] font-bold text-white uppercase">
                        {task.title}
                      </div>
                      <div className="text-[14px] text-blue-100/50 leading-tight">
                        {task.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* EVALUATION PARAMETERS */}
            <div className="p-3 sm:p-6 bg-black/40 border border-blue-500/10 rounded-2xl">
              <h4 className="text-[14px] text-blue-400 uppercase tracking-widest mb-4">
                Evaluation_Logic
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {challenges[activeModule].evaluation.map((ev, i) => (
                  <div
                    key={i}
                    className="p-3 bg-white/5 rounded-lg border border-white/5 text-[14px] text-blue-100/70"
                  >
                    {ev}
                  </div>
                ))}
              </div>
            </div>

            {/* HARDWARE & ASSETS */}
            <div className="p-4 sm:p-8 bg-linear-to-r from-blue-900/10 to-transparent border border-blue-500/10 rounded-3xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-lg font-black text-white uppercase mb-4">
                    Required Deliverables
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {challenges[activeModule].deliverables.map((del, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-[14px] text-blue-300"
                      >
                        <FileText className="w-3 h-3" /> {del}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-black/60 border border-blue-500/30 rounded-xl">
                  <div className="text-[14px] text-blue-400 uppercase mb-3">
                    Hardware_Inventory
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {challenges[activeModule].specs.hardware.map((hw, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-500/20 rounded text-[11px] text-white border border-blue-500/30"
                      >
                        {hw}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[9px] text-blue-500/50 uppercase">
                    <ExternalLink className="w-3 h-3" /> Ref: OpenCV / PID
                    MATLAB / LIDAR API
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
