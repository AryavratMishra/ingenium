"use client";

import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Orbit,
  Cpu,
  Dna,
  Binary,
  Trophy,
  Layers,
  Activity,
  ChevronLeft,
  Terminal,
  Target,
  Zap,
  Globe,
  Award,
  AlertCircle,
  Clock,
  ExternalLink,
  Users,
  CreditCard,
  Layers3,
  Club,
  Network,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import RegistrationDeadlineDisclaimer from "@/components/RegistrationDeadlineDisclaimer";

export default function QuantumHackathonPS() {
  const [activeLayer, setActiveLayer] = useState(0);
  const router = useRouter();
  const { isLoggedIn } = useContext(AuthContext);

  const pipelineStages = [
    {
      id: 1,
      title: "Circuit Architecture",
      sub: "Superposition Encoding",
      icon: <Cpu className="w-5 h-5" />,
      context:
        "Design quantum circuits where qubit connectivity and state preparation encode 'territorial' or spatial information into the quantum system.",
      technical: [
        "Define input-output pipelines for map data.",
        "Implement state preparation logic for territorial info.",
        "Innovate on encoding strategies beyond original research.",
        "Synthesize hardware-ready circuits using Qiskit.",
      ],
    },
    {
      id: 2,
      title: "Statistical Measurement",
      sub: "Probabilistic Outcomes",
      icon: <Activity className="w-5 h-5" />,
      context:
        "Execute the designed circuits to obtain probabilistic measurement outcomes that represent the generative landscape.",
      technical: [
        "Obtain measurement statistics from quantum systems.",
        "Analyze probabilistic distributions as spatial data.",
        "Iterate on circuit structure for non-repetitive terrains.",
        "Minimize noise/decoherence during state measurement.",
      ],
    },
    {
      id: 3,
      title: "Classical Mapping",
      sub: "Procedural Synthesis",
      icon: <Layers className="w-5 h-5" />,
      context:
        "Map the quantum measurement statistics onto a classical 2D grid to visualize coherent map structures.",
      technical: [
        "Apply classical post-processing algorithms.",
        "Translate statistics to 2D territorial data.",
        "Ensure visual clarity and structure of generated maps.",
        "Develop end-to-end procedural pipelines.",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-black/30 text-cyan-100 font-mono p-4 md:p-8 backdrop-blur-sm">
      <RegistrationDeadlineDisclaimer
        competition={"QML Track"}
        deadline={"12 March 2026, 11:59 PM"}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- DYNAMIC HEADER SYSTEM --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 border-b border-cyan-500/30 pb-8 gap-6">
          <div className="space-y-2">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-cyan-400 hover:text-white transition-colors group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[12px] tracking-[0.6em] uppercase font-bold">
                Return to Competitions
              </span>
            </button>
            <div className="flex items-center gap-4">
              <h1 className="text-5xl font-black tracking-tighter text-white">
                Q-<span className="text-cyan-500">MAP</span> GEN
              </h1>
              <div className="px-3 py-1 bg-cyan-500 text-black text-[13px] font-bold -skew-x-12">
                QML TRACK
              </div>
            </div>
            <p className="text-[13px] text-cyan-500/80 tracking-[0.3em] uppercase flex items-center gap-2">
              <Terminal className="w-3 h-3" /> Quantum Procedural Content
              Generation (Q-PCG)
            </p>
            <p className="text-[13px] text-white tracking-[0.3em] uppercase flex items-center gap-2">
              <Network className="w-3 h-3" /> Organized by Quantum Computing
              Club
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <HeaderNode icon={<Clock />} label="Duration" value="24-48 Hours" />
            <HeaderNode
              icon={<Binary />}
              label="Stack"
              value="Python / Qiskit"
            />
            <HeaderNode icon={<Globe />} label="Mode" value="Online" />
            <button
              onClick={() => {
                if (isLoggedIn)
                  router.push(`/registration?competition=qml-track`);
                else
                  alert(
                    "Please login to register. Login button at botton-right corner.",
                  );
              }}
              className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-4 rounded-lg font-black text-xs uppercase tracking-widest transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] active:scale-95 border-b-4 border-cyan-700"
            >
              Register_Now
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- LEFT COLUMN: INTEL & REQS --- */}
          <div className="lg:col-span-4 space-y-6">
            {/* Background & Objective Module */}
            <div className="p-3 sm:p-6 bg-black/40 border border-cyan-500/20 rounded-2xl backdrop-blur-md">
              <h3 className="text-[14px] text-cyan-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Target className="w-4 h-4" /> Operational_Brief
              </h3>
              <div className="space-y-4">
                <p className="text-sm leading-relaxed text-gray-300">
                  Bridge the gap between theoretical knowledge and practical
                  implementation. Targeting{" "}
                  <span className="text-cyan-400 font-bold">
                    UG/PG Students{" "}
                  </span>
                  to explore probabilistic outcomes over traditional classical
                  methods. <br /> The total duration of the competition will be
                  48 hours. <br />
                  <span className="font-bold">
                    Duration : 13th March 6:00 PM - 15th March 6:00 PM
                  </span>
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <Users className="w-4 h-4 text-cyan-500 mb-1" />
                    <p className="text-[12px] text-gray-500 uppercase">
                      Format
                    </p>
                    <p className="text-[13px] text-white font-bold">
                      Team (2-4)
                    </p>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <CreditCard className="w-4 h-4 text-cyan-500 mb-1" />
                    <p className="text-[12px] text-gray-500 uppercase">
                      Base Fee (Per Team)
                    </p>
                    <p className="text-[13px] text-white font-bold">₹350</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Structure & Rounds */}
            <div className="p-3 sm:p-6 bg-white/5 border border-white/10 rounded-2xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-[14px] text-cyan-500 uppercase tracking-widest">
                  Phase_Cycle
                </h3>
                <div className="flex items-center gap-1 bg-cyan-500/20 px-2 py-0.5 rounded border border-cyan-500/30">
                  <Layers3 className="w-3 h-3 text-cyan-400" />
                  <span className="text-[12px] text-cyan-300 font-bold">
                    1 ROUND
                  </span>
                </div>
              </div>
              <div className="space-y-4 mb-4">
                {[
                  {
                    p: "Phase 1",
                    d: "Registration & PS Release",
                  },
                  {
                    p: "Phase 2",
                    d: "Development & Implementation",
                  },
                  {
                    p: "Phase 3",
                    d: "Final Submission & Evaluation",
                  },
                ].map((phase, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <div className="w-2 h-2 rounded-full bg-cyan-500" />
                    <div>
                      <p className="text-[12px] font-bold text-white uppercase">
                        {phase.p}
                      </p>
                      <p className="text-[13px] text-gray-500 uppercase">
                        {phase.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href={"/PS/qml-track.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-cyan-400 hover:text-white transition-colors flex items-center gap-1 underline"
              >
                View Rules & Compliances <ExternalLink className="w-3 h-3" />
              </Link>
            </div>

            {/* Research Anchor */}
            <div className="p-3 sm:p-6 bg-cyan-950/30 border-l-4 border-cyan-500 rounded-r-2xl relative group">
              <h4 className="text-[14px] text-cyan-400 uppercase font-bold mb-2 flex items-center gap-2">
                <Dna className="w-3 h-3" /> Research_Anchor
              </h4>
              <p className="text-[14px] leading-relaxed text-gray-400 italic mb-2">
                "A Quantum Procedure for Map Generation"
              </p>
              <a
                href="https://arxiv.org/abs/2005.10327"
                target="_blank"
                className="text-[13px] text-cyan-600 flex items-center gap-1 hover:text-cyan-400 transition-colors font-bold"
              >
                ARXIV SOURCE [2005.10327] <ExternalLink className="w-2 h-2" />
              </a>
            </div>
          </div>

          {/* --- RIGHT COLUMN: EXECUTION & REWARDS --- */}
          <div className="lg:col-span-8 space-y-8">
            {/* Main Stage Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayer}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-black/60 border border-cyan-500/20 rounded-3xl p-4 sm:p-8 backdrop-blur-2xl relative min-h-110"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-black text-white uppercase tracking-tighter">
                      {pipelineStages[activeLayer].title}
                    </h2>
                    <p className="text-cyan-500 text-[12px] tracking-widest uppercase">
                      Core_Module_0{activeLayer + 1}
                    </p>
                  </div>
                  <Zap className="text-cyan-500 w-6 h-6 animate-pulse" />
                </div>

                <div className="bg-cyan-500/10 border-l-2 border-cyan-500 p-4 mb-8">
                  <p className="text-md leading-relaxed text-cyan-50 font-medium">
                    {pipelineStages[activeLayer].context}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pipelineStages[activeLayer].technical.map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-cyan-500/10 transition-all group"
                    >
                      <div className="text-cyan-500 text-[12px] font-bold mt-0.5">
                        [0{i + 1}]
                      </div>
                      <span className="text-[14px] leading-relaxed text-gray-300 group-hover:text-white transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Pipeline Tabs */}
                <div className="absolute bottom-6 left-8 right-8 flex gap-2">
                  {pipelineStages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveLayer(idx)}
                      className={`h-1 flex-1 rounded-full transition-all ${activeLayer === idx ? "bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]" : "bg-white/10 hover:bg-white/20"}`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Judging & Rewards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Evaluation Metrics */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4 text-cyan-500" />{" "}
                  Evaluation_Criteria
                </h3>
                <ul className="space-y-3">
                  {[
                    {
                      l: "Technical Depth",
                      d: "Encoding & circuit design",
                    },
                    {
                      l: "Visualization",
                      d: "Map clarity & coherence",
                    },
                    {
                      l: "Innovation",
                      d: "Creativity beyond baseline",
                    },
                    {
                      l: "Explanation",
                      d: "Clarity of design choices",
                    },
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex flex-col border-b border-white/5 pb-2"
                    >
                      <span className="text-[12px] font-bold text-cyan-400 uppercase">
                        {item.l}
                      </span>
                      <span className="text-[13px] text-gray-500 uppercase">
                        {item.d}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prize Pool & Compliances */}
              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-3 sm:p-6 relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 opacity-10">
                  <Trophy className="w-24 h-24 text-cyan-500" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-cyan-500" /> Bounty_Registry
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <PrizeTier rank="1st" amount="5,000" />
                    <PrizeTier rank="2nd" amount="3,000" />
                    <PrizeTier rank="3rd" amount="2,000" />
                  </div>
                  <div className="flex justify-between items-center py-2 border-t border-cyan-500/30">
                    <span className="text-[12px] text-gray-400 uppercase font-bold">
                      Total Prize Pool
                    </span>
                    <span className="text-xl font-black text-white italic">
                      ₹10,000
                    </span>
                  </div>
                  <div className="flex items-start gap-2 bg-black/40 p-3 rounded-lg border border-red-500/20">
                    <AlertCircle className="w-3 h-3 text-red-400 shrink-0 mt-0.5" />
                    <p className="text-[12px] text-red-200 tracking-wider uppercase leading-tight">
                      Rules subject to change at organizer's discretion. Stable
                      internet connectivity required.
                    </p>
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

// --- Internal Components ---

function HeaderNode({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-black/40 border border-white/10 p-3 rounded-xl backdrop-blur-sm">
      <div className="text-cyan-500 p-1.5 bg-cyan-500/10 rounded-lg">
        {icon}
      </div>
      <div>
        <span className="text-[12px] text-gray-500 uppercase block mb-0.5 tracking-widest font-bold">
          {label}
        </span>
        <span className="text-[12px] font-bold text-white tracking-wide uppercase">
          {value}
        </span>
      </div>
    </div>
  );
}

function PrizeTier({ rank, amount }) {
  return (
    <div className="bg-black/20 p-2 rounded border border-white/5">
      <p className="text-[12px] text-cyan-500 uppercase font-bold">{rank}</p>
      <p className="text-md font-black text-white italic">₹{amount}</p>
    </div>
  );
}
