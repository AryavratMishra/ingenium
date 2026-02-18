"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Music,
  Users,
  AlertTriangle,
  Trophy,
  Star,
  Activity,
  Layers,
  ChevronLeft,
  ExternalLink,
  Wallet,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function GroupDancePS() {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();

  const competitionData = {
    title: "Group Dance Competition",
    org: "Dance Club, IIT Indore",
    teamSize: "5-35 members",
    mode: "Offline",
    baseFee: "1500",
    prizes: {
      first: "20,000",
      second: "12,000",
      third: "8,000",
      total: "40,000",
    },
    phases: [
      {
        id: "R1",
        title: "Round 01: Screening",
        detail:
          "Track submission and online screening. Submissions will be evaluated for choreography potential and synchronization. Deadline: 7th March.",
      },
      {
        id: "R2",
        title: "Round 02: Finals",
        detail:
          "Live final performances on stage. Teams must bring their high-energy routines for the ultimate showdown at the venue.",
      },
    ],
  };

  return (
    <div className="relative min-h-screen text-slate-100 font-mono p-4 md:p-8 overflow-hidden bg-black/30">
      {/* Motion-Trail Background Decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg viewBox="0 0 1000 1000" className="w-full h-full">
          <motion.path
            d="M 100 500 Q 250 200 500 500 T 900 500"
            stroke="#ec4899"
            strokeWidth="20"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- KINETIC HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 border-b border-pink-500/20 pb-8">
          <div className="space-y-1">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-pink-400 mb-4 hover:text-pink-300 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-[12px] tracking-[0.5em] uppercase font-bold">
                Return to Competitions
              </span>
            </button>
            <h1 className="text-5xl font-black tracking-tighter text-white uppercase italic">
              KINETIC <span className="text-pink-500">SYNCHRONY</span>
            </h1>
            <p className="text-[12px] text-pink-400/60 mt-2 tracking-[0.3em] uppercase">
              Organized by {competitionData.org}
            </p>
          </div>
          <div className="mt-6 lg:mt-0 flex flex-col items-end gap-6">
            <div className="mt-6 lg:mt-0 flex gap-4">
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
              onClick={() =>
                router.push(`/present/registration?competition=dance`)
              }
              className="group relative px-8 py-3 bg-pink-600 hover:bg-pink-500 transition-all rounded-sm overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-white/10 -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <div className="relative flex items-center gap-3">
                <span className="text-xs font-black tracking-[0.2em] text-white uppercase">
                  Register Now
                </span>
                <ExternalLink className="w-4 h-4 text-white" />
              </div>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- PERFORMANCE PROTOCOLS --- */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-[14px] text-pink-500 uppercase tracking-widest mb-4 font-bold">
              Operational_Context
            </h3>
            <div className="p-6 bg-pink-900/10 border border-pink-500/20 rounded-2xl backdrop-blur-md">
              <p className="text-md leading-relaxed text-pink-100/80 mb-6 italic border-l-2 border-pink-500 pl-4">
                "Where collaborative artistry meets technical precision across
                two high-stakes rounds."
              </p>
              <div className="space-y-4">
                <ObjectiveItem text="Online Screening Qualifier" />
                <ObjectiveItem text="Offline Main-Stage Finals" />
                <ObjectiveItem text="Multi-genre Synchrony" />
              </div>
            </div>

            {/* Penalty Logic */}
            <div className="p-6 bg-red-950/20 border border-red-500/20 rounded-2xl">
              <h4 className="text-[12px] text-red-400 uppercase tracking-widest mb-4 flex items-center gap-2 font-bold">
                <AlertTriangle className="w-3 h-3" /> Technical_Deductions
              </h4>
              <div className="space-y-2 text-[13px] text-red-200/50 uppercase font-bold italic mb-4">
                <p>▪ Late Submission: -10 Pts</p>
                <p>▪ Unethical Content: Immediate DQ</p>
                <p>▪ Prop Mismanagement: -20 Pts</p>
              </div>
              <Link
                href={"/PS/Dance Proposal.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-red-400 underline hover:text-red-300 transition-colors"
              >
                Download Rulebook.pdf
              </Link>
            </div>
          </div>

          {/* --- ROUND MATRIX --- */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Layers className="w-48 h-48" />
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-black text-white uppercase tracking-widest mb-10 flex items-center gap-3">
                  <Star className="text-pink-500" /> Competition_Rounds
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {competitionData.phases.map((phase, idx) => (
                    <button
                      key={phase.id}
                      onClick={() => setActiveTab(idx)}
                      className={`p-6 text-left border rounded-xl transition-all ${activeTab === idx ? "bg-pink-500/10 border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.3)]" : "bg-black/20 border-white/5 hover:border-white/20"}`}
                    >
                      <div className="text-[13px] text-pink-500 mb-1 font-bold">
                        PHASE_0{idx + 1}
                      </div>
                      <div className="text-sm font-bold text-white uppercase">
                        {phase.title}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="p-6 bg-pink-500/5 border-l-2 border-pink-500 rounded-r-xl min-h-25">
                  <p className="text-md text-pink-100/80 leading-relaxed italic">
                    {competitionData.phases[activeTab].detail}
                  </p>
                </div>
              </div>

              {/* Scorecard Weights */}
              <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-6">
                <MetricBox label="Execution" weight="30%" />
                <MetricBox label="Choreography" weight="30%" />
                <MetricBox label="Costume/Props" weight="20%" />
                <MetricBox label="Crowd Appeal" weight="20%" />
              </div>
            </div>

            {/* --- BOUNTY REGISTRY --- */}
            <div className="bg-pink-500/5 border border-pink-500/20 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Trophy className="w-32 h-32" />
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-black text-white uppercase tracking-[0.2em]">
                    Bounty_Registry
                  </h3>
                  <p className="text-[12px] text-pink-500 uppercase tracking-widest italic font-bold">
                    Prize Breakdown
                  </p>
                </div>

                <div className="flex gap-8">
                  <BountyNode
                    rank="ALPHA"
                    amount={competitionData.prizes.first}
                    label="1st Place"
                  />
                  <BountyNode
                    rank="BETA"
                    amount={competitionData.prizes.second}
                    label="2nd Place"
                  />
                  <BountyNode
                    rank="GAMMA"
                    amount={competitionData.prizes.third}
                    label="3rd Place"
                  />
                </div>

                <div className="px-6 py-4 bg-pink-500/10 border border-pink-500/30 rounded-xl text-center min-w-35">
                  <span className="text-[11px] text-pink-500 uppercase block font-bold mb-1">
                    Total Pool
                  </span>
                  <span className="text-2xl font-black text-pink-400 italic">
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
      <div className="text-pink-500 w-5 h-5">{icon}</div>
      <div>
        <span className="text-[12px] text-gray-500 uppercase block leading-none mb-1 font-bold">
          {label}
        </span>
        <span className="text-xs font-bold text-white tracking-tighter uppercase">
          {value}
        </span>
      </div>
    </div>
  );
}

function ObjectiveItem({ text }) {
  return (
    <div className="flex gap-3 items-center text-[13px] uppercase font-bold text-gray-400 group">
      <div className="w-1.5 h-1.5 rounded-full bg-pink-500 group-hover:scale-150 transition-transform" />
      <span className="group-hover:text-white transition-colors">{text}</span>
    </div>
  );
}

function MetricBox({ label, weight }) {
  return (
    <div className="text-center p-4 bg-white/5 border border-white/5 rounded-xl group hover:border-pink-500/30 transition-all">
      <div className="text-lg font-black text-pink-500 mb-1 group-hover:scale-110 transition-transform">
        {weight}
      </div>
      <div className="text-[12px] text-white/60 uppercase font-bold tracking-widest leading-tight">
        {label}
      </div>
    </div>
  );
}

function BountyNode({ rank, amount, label }) {
  return (
    <div className="text-center group">
      <div className="text-[12px] text-pink-500 uppercase mb-1 font-bold tracking-tighter">
        {rank}
      </div>
      <div className="text-xl font-black text-white italic group-hover:scale-110 transition-transform">
        ₹{amount}
      </div>
      <div className="text-[11px] text-pink-400/40 uppercase mt-1 font-bold">
        {label}
      </div>
    </div>
  );
}
