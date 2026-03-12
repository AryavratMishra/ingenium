"use client";

import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Timer,
  Target,
  Sigma,
  ChevronLeft,
  Users,
  Globe,
  Award,
  BookOpen,
  Terminal,
  ShieldAlert,
  Layout,
  Layers,
  Wallet,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import RegistrationDeadlineDisclaimer from "@/components/RegistrationDeadlineDisclaimer";
import RegistrationClosedDisclaimer from "@/components/RegistrationClosedDisclaimer";

export default function MatiksPS() {
  const [activePhase, setActivePhase] = useState(0);
  const router = useRouter();
  const { isLoggedIn } = useContext(AuthContext);

  const competitionStages = [
    {
      id: 1,
      title: "Phase 01: Registration",
      subtitle: "Entry Protocol",
      icon: <Users className="w-5 h-5" />,
      context:
        "Initial intake phase for individual competitors. Targeting school students (8th+) and undergraduates with a focus on quick thinking.",
      specs: [
        "Individual participation format.",
        "Target: School (8th+) & UG Students.",
        "Expected Footfall: 70-100 participants.",
        "Base Fee (Per Team): ₹350.",
      ],
    },
    {
      id: 2,
      title: "Phase 02: Prelims",
      subtitle: "Brain Blitz Phase",
      icon: <Timer className="w-5 h-5" />,
      context:
        "Rapid-fire knockout challenges conducted offline via the Matiks portal. High emphasis on reaction speed and numerical intuition.",
      specs: [
        "Speed-based accuracy testing.",
        "Multiple elimination tiers.",
        "Portal-based offline environment.",
        "Non-routine problem types.",
      ],
    },
    {
      id: 3,
      title: "Phase 03: Finals",
      subtitle: "Logic Manifold",
      icon: <Sigma className="w-5 h-5" />,
      context:
        "The championship round for top finalists. Challenges focus on advanced logical puzzles and visual pattern recognition.",
      specs: [
        "Advanced difficulty scaling.",
        "Complex visual-logic puzzles.",
        "Consistency-based evaluation.",
        "Determines final prize winners.",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen text-amber-100 font-mono p-4 md:p-8 bg-black/30">
      <RegistrationClosedDisclaimer
        competition={"Brain Blitz"}
      />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- TACTICAL HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 border-b border-amber-500/30 pb-8">
          <div className="space-y-1">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors mb-4"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-[12px] tracking-[0.5em] uppercase font-bold">
                Return to Competitions
              </span>
            </button>
            <div className="flex items-center gap-3">
              <div className="bg-amber-500 p-2 rounded-sm shadow-[0_0_15px_rgba(244,63,94,0.5)]">
                <Sigma className="w-8 h-8 text-black" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tighter text-white uppercase">
                BRAIN <span className="text-amber-500 italic">Blitz</span>
              </h1>
            </div>
            <p className="text-[12px] text-amber-500/80 mt-4 tracking-[0.4em] uppercase font-bold">
              Infinitrix - The Math Club // Ingenium 3.0
            </p>
          </div>

          <div className="mt-6 lg:mt-0 grid grid-cols-2 sm:grid-cols-3 gap-3">
            <HeaderStat icon={<Globe />} label="Mode" value="Offline" />
            <HeaderStat
              icon={<Wallet />}
              label="Base Fee (Per Team)"
              value="₹350"
            />
            <HeaderStat icon={<Layers />} label="Phases" value="3 Total" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- LEFT COLUMN: INTEL & REQS --- */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-3">
              <h3 className="text-[14px] text-amber-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Terminal className="w-3 h-3" /> Event_Sequence
              </h3>
              {competitionStages.map((stage, idx) => (
                <button
                  key={stage.id}
                  onClick={() => setActivePhase(idx)}
                  className={`w-full p-4 text-left rounded-xl border transition-all duration-300 group ${
                    activePhase === idx
                      ? "bg-amber-500/20 border-amber-500 shadow-[0_0_20px_rgba(244,63,94,0.15)]"
                      : "bg-black/40 border-white/10 hover:border-amber-500/40"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-md font-bold ${activePhase === idx ? "text-amber-500" : "text-white/20"}`}
                    >
                      0{stage.id}
                    </span>
                    <h4
                      className={`text-md font-bold uppercase tracking-wide ${activePhase === idx ? "text-white" : "text-white/60"}`}
                    >
                      {stage.title}
                    </h4>
                  </div>
                </button>
              ))}
            </div>

            {/* Judging Criteria */}
            <div className="p-3 sm:p-6 bg-black/60 border border-amber-500/20 rounded-2xl">
              <h4 className="text-[14px] text-amber-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Layout className="w-3 h-3" /> Evaluation_Vector
              </h4>
              <div className="space-y-3 mb-4">
                <EvaluationRow label="Solution Accuracy" value="Weight: High" />
                <EvaluationRow
                  label="Response Speed"
                  value="Weight: Critical"
                />
                <EvaluationRow label="Logical Reasoning" value="Weight: High" />
                <EvaluationRow label="Consistency" value="Required" />
              </div>
              <Link
                href={"/PS/brain-blitz.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] text-amber-500 underline hover:text-amber-400"
              >
                View Full PDF Rules
              </Link>
            </div>
          </div>

          {/* --- RIGHT COLUMN: DYNAMIC CONTENT --- */}
          <div className="lg:col-span-8 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-black/60 border border-amber-500/20 rounded-3xl p-4 sm:p-8 backdrop-blur-md relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-[12px] bg-amber-500 text-black px-2 py-0.5 font-bold uppercase mb-2 inline-block">
                        Active_Round: 0{competitionStages[activePhase].id}
                      </span>
                      <h2 className="text-3xl font-black text-white uppercase tracking-tighter">
                        {competitionStages[activePhase].subtitle}
                      </h2>
                    </div>
                    <div className="text-amber-500 opacity-20">
                      {React.cloneElement(competitionStages[activePhase].icon, {
                        size: 48,
                      })}
                    </div>
                  </div>

                  <p className="text-md leading-relaxed text-amber-100/70 mb-8 max-w-2xl border-l-2 border-amber-500 pl-6 italic">
                    {competitionStages[activePhase].context}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {competitionStages[activePhase].specs.map((spec, i) => (
                      <div
                        key={i}
                        className="flex gap-4 p-4 bg-white/5 border border-white/5 rounded-xl hover:border-amber-500/30 transition-colors"
                      >
                        <Zap className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                        <span className="text-[14px] text-gray-400">
                          {spec}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    disabled
                    className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all group overflow-hidden relative cursor-not-allowed!"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative z-10 uppercase tracking-[0.2em] text-sm">
                      Initialize Registration Protocol
                    </span>
                    <ChevronLeft className="w-4 h-4 rotate-180 relative z-10" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Prizes & Rules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Bounty Registry */}
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-3 sm:p-6 relative overflow-hidden">
                <div className="flex items-center gap-3 mb-4 text-amber-500">
                  <Award className="w-5 h-5" />
                  <h3 className="text-sm font-bold uppercase tracking-widest">
                    Bounty_Registry
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <PrizeStat label="1st Prize" value="₹5,000" />
                  <PrizeStat label="2nd Prize" value="₹3,000" />
                  <PrizeStat label="3rd Prize" value="₹2,000" />
                  <PrizeStat label="Aggregate Pool" value="₹10,000" highlight />
                </div>
              </div>

              {/* Rules & Compliance */}
              <div className="bg-black/60 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4 text-amber-500">
                  <ShieldAlert className="w-5 h-5" />
                  <h3 className="text-sm font-bold uppercase tracking-widest">
                    Rules_Compliance
                  </h3>
                </div>
                <ul className="text-[14px] space-y-2 text-white/60">
                  <li className="flex gap-2">
                    <span>•</span>{" "}
                    <span>Individual participation is mandatory.</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>{" "}
                    <span>Rules subject to organizer discretion.</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>{" "}
                    <span>Must use provided Matiks portal offline.</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>{" "}
                    <span>Focus on intuition over lengthy calculation.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Strategic Impact Block */}
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4 text-amber-500">
                <BookOpen className="w-5 h-5" />
                <h3 className="text-sm font-bold uppercase tracking-widest">
                  Strategic_Impact
                </h3>
              </div>
              <p className="text-[13px] text-white/60 leading-relaxed">
                MATIKS: Brain Blitz addresses the gap in interactive, fast-paced
                math competitions. By shifting the focus from monotonous
                calculations to real-time intuition, we aim to increase
                technical engagement across School and Undergraduate tiers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Components ---

function HeaderStat({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-xl backdrop-blur-sm">
      <div className="text-amber-500 w-4 h-4">{icon}</div>
      <div>
        <span className="text-[10px] text-gray-500 uppercase block leading-none mb-1">
          {label}
        </span>
        <span className="text-[12px] font-bold text-white uppercase tracking-wide">
          {value}
        </span>
      </div>
    </div>
  );
}

function EvaluationRow({ label, value }) {
  return (
    <div className="flex justify-between items-center text-[12px] border-b border-white/5 pb-2">
      <span className="text-gray-500 uppercase">{label}</span>
      <span className="text-amber-400 font-bold italic">{value}</span>
    </div>
  );
}

function PrizeStat({ label, value, highlight = false }) {
  return (
    <div
      className={`p-2 rounded-lg ${highlight ? "bg-amber-500/20 border border-amber-500/40" : "bg-white/5"}`}
    >
      <span className="text-[11px] text-gray-500 uppercase block">{label}</span>
      <span
        className={`text-md font-black ${highlight ? "text-amber-400" : "text-white"}`}
      >
        {value}
      </span>
    </div>
  );
}
