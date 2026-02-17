"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BrainCircuit,
  Trophy,
  ChevronLeft,
  Cpu,
  Layers,
  Zap,
  CheckCircle2,
  FileCode2,
  ExternalLink,
  Target,
  ShieldAlert,
  Info,
  Users,
  CircleDollarSign,
  RefreshCcw,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NarrativaPage() {
  const router = useRouter();

  const activePS = 0;
  const problemStatements = [
    {
      id: 2,
      type: "Machine Learning",
      title: "Intelligent Narrative Synthesis",
      sub: "Autonomous Agentic Presentation Engine",
      icon: <BrainCircuit className="w-6 h-6" />,
      href: "/PS/Narrativa.pdf",
      context:
        "True automation moves beyond simple execution to complex orchestration, turning raw data into compelling, structured narratives. Build an engine functioning as a research analyst, copywriter, and visual designer.",
      objectives: [
        "Infer search queries from vague intent for autonomous research",
        "Generate context-aware visuals based on slide content (charts, diagrams)",
        "Adaptive Layout Engine for timelines, comparisons, or hero sections",
        "Autonomous context retention across all slides",
        "Multi-agent orchestration, agent design, and error handling ",
      ],
      deliverables: [
        "Complete codebase on version-controlled repository",
        "Min 5-slide deck (PPTX, PDF, or interactive web)",
        "2-3 min demo video from prompt to render",
        "Technical Report on agentic workflow and AI interactions",
      ],
      rules: [
        "Information must be factual, grounded, and include citations",
        "Generic stock imagery alone is insufficient for visuals",
        "Visual consistency in style, palette, and typography is mandatory",
        "System must produce a usable draft without human hand-holding",
      ],
      prizes: {
        first: "5,000",
        second: "3,000",
        third: "2,000",
        total: "10,000",
      },
      meta: {
        club: "GDG",
        mode: "Online",
        format: "Team (2-5 people)",
        fee: "350",
        rounds: "1",
      },
      color: "purple",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black/30 text-slate-200 font-mono p-4 md:p-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- NAVIGATION & HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6">
          <div className="space-y-2">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-purple-500 hover:text-purple-400 transition-colors group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[12px] tracking-[0.4em] uppercase font-bold">
                Return to Competitions
              </span>
            </button>
            <h1 className="text-5xl font-black tracking-tighter text-white uppercase">
              Narrativa{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-400">
                CORE
              </span>
            </h1>
            <div className="flex items-center gap-4 text-[10px] text-purple-400 uppercase tracking-widest">
              <span className="flex items-center gap-1">
                <Users className="w-3 h-3" />{" "}
                {problemStatements[activePS].meta.format}
              </span>
              <span className="text-slate-600">|</span>
              <span className="flex items-center gap-1">
                <RefreshCcw className="w-3 h-3" />{" "}
                {problemStatements[activePS].meta.rounds} Round
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-cyan-400">
                Organized by {problemStatements[activePS].meta.club}
              </span>
            </div>
          </div>
        </div>

        {/* --- MAIN INTERFACE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT COLUMN: INTEL, REWARDS & RULES */}
          <div className="lg:col-span-4 space-y-6">
            {/* Mission Brief */}
            <div className="p-8 bg-black/60 border-t-4 border-purple-500 rounded-b-xl backdrop-blur-md">
              <div className="flex items-center gap-2 mb-4 text-purple-400">
                <Cpu className="w-4 h-4 animate-pulse" />
                <span className="text-[14px] tracking-widest font-bold uppercase">
                  Mission_Briefing
                </span>
              </div>
              <h2 className="text-3xl font-black text-white leading-tight uppercase mb-4">
                {problemStatements[activePS].title}
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed font-sans border-l-2 border-white/10 pl-4 mb-6 italic">
                {problemStatements[activePS].context}
              </p>

              <div className="flex items-center justify-between mb-6 p-3 bg-white/5 rounded border border-white/10">
                <div className="flex items-center gap-2">
                  <CircleDollarSign className="w-5 h-5 text-emerald-400" />
                  <span className="text-xs uppercase text-slate-300 tracking-tighter">
                    Base Fee
                  </span>
                </div>
                <span className="text-xl font-black text-white">
                  ₹{problemStatements[activePS].meta.fee}
                </span>
              </div>

              <button
                onClick={() =>
                  router.push(`/present/registration?competition=narrativa`)
                }
                className="w-full py-4 bg-purple-600 hover:bg-purple-500 text-white font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-[0_5px_15px_rgba(147,51,234,0.4)]"
              >
                Register Now <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            {/* Bounty Protocol */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:rotate-12 transition-transform">
                <Trophy size={100} />
              </div>
              <h3 className="text-[14px] font-bold text-cyan-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                Bounty_Distribution
              </h3>
              <div className="space-y-4">
                {[
                  {
                    label: "Alpha_Rank",
                    val: problemStatements[activePS].prizes.first,
                    color: "text-yellow-500",
                  },
                  {
                    label: "Beta_Rank",
                    val: problemStatements[activePS].prizes.second,
                    color: "text-slate-300",
                  },
                  {
                    label: "Gamma_Rank",
                    val: problemStatements[activePS].prizes.third,
                    color: "text-orange-400",
                  },
                ].map((p, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center border-b border-white/5 pb-2"
                  >
                    <span className="text-[12px] text-slate-500 uppercase">
                      {p.label}
                    </span>
                    <span className={`text-xl font-black ${p.color}`}>
                      ₹{p.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rules & Compliances */}
            <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-xl">
              <h3 className="text-[14px] font-bold text-red-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4" /> Compliance_Protocols
              </h3>
              <div className="space-y-3 mb-6">
                {problemStatements[activePS].rules.map((rule, i) => (
                  <div
                    key={i}
                    className="flex gap-2 text-[13px] text-slate-400 leading-tight"
                  >
                    <span className="text-red-500">»</span> {rule}
                  </div>
                ))}
              </div>
              <Link
                href={problemStatements[activePS].href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-purple-400 underline decoration-purple-500/50 hover:text-purple-300 transition-colors uppercase font-bold"
              >
                [OPEN_FULL_DIRECTIVE.PDF]
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: TECHNICAL SPECS & DELIVERABLES */}
          <div className="lg:col-span-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Functional Specs */}
              <div className="p-8 bg-black/40 border border-white/10 rounded-xl backdrop-blur-md">
                <h3 className="text-[14px] font-bold text-purple-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Layers className="w-4 h-4" /> System_Objectives
                </h3>
                <div className="space-y-4">
                  {problemStatements[activePS].objectives.map((obj, i) => (
                    <div key={i} className="flex gap-3 group">
                      <Zap className="w-4 h-4 text-purple-500 shrink-0 mt-1 group-hover:animate-bounce" />
                      <p className="text-[13px] leading-relaxed text-slate-300 group-hover:text-white transition-colors uppercase">
                        {obj}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="p-8 bg-white/5 border border-white/10 rounded-xl">
                <h3 className="text-[14px] font-bold text-cyan-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <FileCode2 className="w-4 h-4" /> Protocol_Deliverables
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {problemStatements[activePS].deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                      <span className="text-[12px] font-bold text-slate-300 uppercase leading-tight">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Status & Rounds Bar */}
            <div className="p-6 bg-black/40 border-2 border-dashed border-white/10 rounded-xl flex flex-wrap items-center justify-between gap-6">
              <div className="flex gap-8">
                <div className="space-y-1">
                  <div className="text-[11px] text-slate-500 uppercase">
                    Submission_Mode
                  </div>
                  <div className="text-sm font-bold text-white uppercase flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />{" "}
                    {problemStatements[activePS].meta.mode}
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-[11px] text-slate-500 uppercase">
                    Phase_Sequencing
                  </div>
                  <div className="text-sm font-bold text-white uppercase flex items-center gap-2">
                    <RefreshCcw className="w-3 h-3 text-purple-500" /> Single
                    Round Execution
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-[11px] text-slate-500 uppercase">
                    Evaluation
                  </div>
                  <div className="text-sm font-bold text-white uppercase flex items-center gap-2">
                    <Target className="w-3 h-3 text-emerald-500" />{" "}
                    Peer_Review_Ready
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-1">
                <span className="text-[11px] text-slate-500 uppercase">
                  Total_Bounty_Pool
                </span>
                <span className="text-2xl font-black text-white tracking-tighter italic">
                  ₹{problemStatements[activePS].prizes.total}
                </span>
              </div>
            </div>

            {/* Judging Weights (Document Logic)  */}
            <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center gap-4">
              <Info className="w-4 h-4 text-purple-400 shrink-0" />
              <div className="text-[11px] text-slate-500 uppercase tracking-widest leading-relaxed">
                <span className="text-purple-300">Architecture (30%)</span> •
                <span className="text-purple-300"> Coherence (30%)</span> •
                <span className="text-purple-300"> Innovation (20%)</span> •
                <span className="text-purple-300"> Automation (20%)</span>
                <p className="text-[9px] mt-1 opacity-60 italic">
                  Rules are subject to change at the discretion of organizers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
