"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Music,
  Users,
  Radio,
  Volume2,
  Speaker,
  Zap,
  Trophy,
  Activity,
  ChevronRight,
  ChevronLeft,
  ExternalLink,
  Wallet,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function BattleOfBandsPS() {
  const [activePhase, setActivePhase] = useState(0);
  const router = useRouter();

  const competitionData = {
    title: "Battle of Bands",
    org: "Music Club, IIT Indore",
    participation: "Team (Bands)",
    teamSize: "10-12 Members",
    duration: "15-20 Minutes",
    mode: "Offline",
    baseFee: "1500",
    registrationPath: "/present/registration?competition=bands",
    prizes: {
      first: "20,000",
      second: "12,000",
      third: "8,000",
      total: "40,000",
    },
    phases: [
      {
        id: "R1",
        title: "Round 01: Online Screening",
        detail:
          "Submission of high-quality audio or video samples for preliminary evaluation. Deadline for submission: 7th March.",
      },
      {
        id: "R2",
        title: "Round 02: Final Performances",
        detail:
          "Shortlisted bands will perform live on the main stage. Judgment based on technical skill, stage presence, and audience impact.",
      },
    ],
  };

  return (
    <div className="relative min-h-screen text-slate-100 font-mono p-4 md:p-8 overflow-hidden bg-black/30">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- AMPLIFIED HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 border-b border-purple-500/20 pb-8">
          <div className="space-y-1">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-purple-400 mb-4 hover:text-purple-300 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-[12px] tracking-[0.5em] uppercase font-bold">
                Return to Competitions
              </span>
            </button>
            <h1 className="text-5xl font-black tracking-tighter text-white uppercase italic">
              BATTLE <span className="text-purple-500">OF</span> BANDS
            </h1>
            <p className="text-[12px] text-purple-400/60 mt-2 tracking-[0.3em] uppercase">
              Host: {competitionData.org}
            </p>
          </div>

          <div className="mt-6 lg:mt-0 flex flex-col items-end gap-6">
            <div className="flex gap-4">
              <StatNode
                icon={<Users />}
                label="Team Size"
                value={competitionData.teamSize}
              />
              <StatNode
                icon={<Wallet />}
                label="Base Fee"
                value={`₹${competitionData.baseFee}`}
              />
              <StatNode
                icon={<Activity />}
                label="Mode"
                value={competitionData.mode}
              />
            </div>

            <button
              onClick={() => router.push(competitionData.registrationPath)}
              className="group relative px-8 py-3 bg-purple-600 hover:bg-purple-500 transition-all rounded-sm overflow-hidden border border-purple-400/30"
            >
              <div className="absolute inset-0 w-full h-full bg-white/10 -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <div className="relative flex items-center gap-3">
                <span className="text-sm font-black tracking-[0.2em] text-white uppercase">
                  Register Now
                </span>
                <ExternalLink className="w-4 h-4 text-white" />
              </div>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- MISSION BRIEFING --- */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-[12px] text-purple-500 uppercase tracking-widest mb-4 font-bold">
              Sonic_Context
            </h3>
            <div className="p-6 bg-purple-900/10 border border-purple-500/20 rounded-2xl backdrop-blur-xl">
              <p className="text-md leading-relaxed text-purple-100/80 mb-6 italic border-l-2 border-purple-500 pl-4">
                "Nurturing musical talent across genres, providing a platform
                for creative expression and live exploration."
              </p>
              <div className="space-y-4">
                <ObjectiveItem text="Technical Proficiency" />
                <ObjectiveItem text="Originality & Arrangement" />
                <ObjectiveItem text="Inter-college band culture" />
              </div>
            </div>

            <div className="p-6 bg-black/40 border border-white/5 rounded-2xl">
              <h4 className="text-[12px] text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2 font-bold">
                <Radio className="w-3 h-3" /> Technical_Deductions
              </h4>
              <div className="space-y-2 text-[13px] text-purple-300/60 uppercase font-bold italic mb-4">
                <p>▪ Exceeding 20 min slot: -20 Pts</p>
                <p>▪ Poor Equipment Handling: -15 Pts</p>
                <p>▪ Late Submission (R1): -10 Pts</p>
              </div>
              <Link
                href={"/PS/Battle_of_Bands.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-400 underline hover:text-purple-300 transition-colors"
              >
                Download Full Rulebook.pdf
              </Link>
            </div>
          </div>

          {/* --- PERFORMANCE MATRIX --- */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Speaker className="w-48 h-48" />
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-black text-white uppercase tracking-widest mb-10 flex items-center gap-3">
                  <Music className="text-purple-500" /> Operational_Phases
                </h3>

                {/* Explicit Round Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {competitionData.phases.map((phase, idx) => (
                    <button
                      key={phase.id}
                      onClick={() => setActivePhase(idx)}
                      className={`p-6 text-left border rounded-xl transition-all ${activePhase === idx ? "bg-purple-500/10 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.3)]" : "bg-black/20 border-white/5 hover:border-white/20"}`}
                    >
                      <div className="text-[12px] text-purple-500 mb-1 font-bold">
                        ROUND_0{idx + 1}
                      </div>
                      <div className="text-sm font-bold text-white uppercase">
                        {phase.title}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="p-6 bg-purple-500/5 border-l-2 border-purple-500 rounded-r-xl mb-8 min-h-25">
                  <p className="text-md text-purple-100/80 leading-relaxed italic">
                    {competitionData.phases[activePhase].detail}
                  </p>
                </div>

                <button
                  onClick={() => router.push(competitionData.registrationPath)}
                  className="text-[13px] font-bold text-purple-400 uppercase tracking-[0.4em] hover:text-white transition-colors flex items-center gap-2 group"
                >
                  R1 SUBMISSION DEADLINE: MARCH 7TH{" "}
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Judging Criteria Matrix */}
              <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-4">
                  <Zap className="w-8 h-8 text-purple-500/40 animate-pulse" />
                  <div>
                    <div className="text-[12px] text-purple-500 uppercase font-bold tracking-widest">
                      Evaluation_Logic
                    </div>
                    <div className="text-[13px] text-white uppercase italic">
                      Performance Metrics
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                  <EvaluationMetric label="Musicality (30%)" />
                  <EvaluationMetric label="Tightness (20%)" />
                  <EvaluationMetric label="Stage Energy (25%)" />
                  <EvaluationMetric label="Sound Balance (25%)" />
                </div>
              </div>
            </div>

            {/* --- BOUNTY REGISTRY --- */}
            <div className="bg-purple-500/5 border border-purple-500/20 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Trophy className="w-32 h-32" />
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-black text-white uppercase tracking-[0.2em]">
                    Bounty_Registry
                  </h3>
                  <p className="text-[12px] text-purple-500 uppercase tracking-widest italic font-bold">
                    Prize Allocation
                  </p>
                </div>

                <div className="flex gap-8">
                  <BountyNode
                    rank="ALPHA"
                    amount={competitionData.prizes.first}
                    label="1st Prize"
                  />
                  <BountyNode
                    rank="BETA"
                    amount={competitionData.prizes.second}
                    label="2nd Prize"
                  />
                  <BountyNode
                    rank="GAMMA"
                    amount={competitionData.prizes.third}
                    label="3rd Prize"
                  />
                </div>

                <div className="px-6 py-4 bg-purple-500/10 border border-purple-500/30 rounded-xl text-center min-w-35">
                  <span className="text-[11px] text-purple-500 uppercase block font-bold mb-1">
                    Total Pool
                  </span>
                  <span className="text-2xl font-black text-purple-400 italic">
                    ₹{competitionData.prizes.total}
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

// --- Helper Components ---

function StatNode({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-lg min-w-35">
      <div className="text-purple-500 w-5 h-5">{icon}</div>
      <div>
        <span className="text-[12px] text-gray-500 uppercase block leading-none mb-1 font-bold">
          {label}
        </span>
        <span className="text-sm font-bold text-white tracking-tighter uppercase">
          {value}
        </span>
      </div>
    </div>
  );
}

function ObjectiveItem({ text }) {
  return (
    <div className="flex gap-3 items-center text-[13px] uppercase font-bold text-gray-400 group">
      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:scale-150 transition-transform" />
      <span className="group-hover:text-white transition-colors">{text}</span>
    </div>
  );
}

function EvaluationMetric({ label }) {
  return (
    <div className="flex items-center gap-2 text-[13px] text-white/40 uppercase font-bold group">
      <ChevronRight className="w-2 h-2 text-purple-500 group-hover:translate-x-1 transition-transform" />
      <span className="group-hover:text-white transition-colors">{label}</span>
    </div>
  );
}

function BountyNode({ rank, amount, label }) {
  return (
    <div className="text-center group">
      <div className="text-[12px] text-purple-500 uppercase mb-1 font-bold tracking-tighter">
        {rank}
      </div>
      <div className="text-xl font-black text-white italic group-hover:scale-110 transition-transform">
        ₹{amount}
      </div>
      <div className="text-[11px] text-purple-400/40 uppercase mt-1 font-bold">
        {label}
      </div>
    </div>
  );
}
