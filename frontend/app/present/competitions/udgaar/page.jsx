"use client";

import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic2,
  Trophy,
  ChevronLeft,
  Cpu,
  Layers,
  Zap,
  CheckCircle2,
  BookOpen,
  ExternalLink,
  Target,
  ShieldAlert,
  Info,
  Users,
  CircleDollarSign,
  RefreshCcw,
  Languages,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";

export default function UdgaarPage() {
  const router = useRouter();
  const { isLoggedIn } = useContext(AuthContext);

  const activePS = 0;
  const competitionData = [
    {
      id: 4,
      type: "Literary Performance",
      title: "Udgaar - Poetry Slam",
      sub: "SRIJAN - Hindi Poetry Recitation & Performance",
      icon: <Mic2 className="w-6 h-6" />,
      href: "/PS/Srijan_Club.pdf",
      context:
        "Express ideas, emotions, and social realities through original poetic compositions. Connect directly with the audience through impactful delivery and linguistic depth in this spoken-word performance arena.",
      objectives: [
        "Perform original poetic compositions on stage",
        "Express social commentary and personal articulation",
        "Demonstrate linguistic depth and impactful delivery",
        "Explore themes like identity, technology, and contemporary challenges",
        "Contribute to the preservation and creative expression of Hindi ",
      ],
      phases: [
        "Phase 1: Online Registration",
        "Phase 2: Live On-stage Performances at IIT Indore",
        "Final Evaluation and Prize Distribution",
      ],
      rules: [
        "Individual participation format only",
        "Must be original and creative work",
        "Focus on language quality and literary expression",
        "Strong emphasis on stage presence and performance",
      ],
      prizes: {
        first: "5,000",
        second: "3,000",
        third: "2,000",
        total: "10,000",
      },
      meta: {
        club: "SRIJAN",
        mode: "Offline",
        format: "Individual",
        fee: "350",
        rounds: "2",
      },
      color: "orange",
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
              className="flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[12px] tracking-[0.4em] uppercase font-bold">
                Return to Competitions
              </span>
            </button>
            <h1 className="text-5xl font-black tracking-tighter text-white uppercase">
              UDGAAR
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-[12px] text-orange-400 uppercase tracking-widest">
              <span className="flex items-center gap-1">
                <Users className="w-3 h-3" />{" "}
                {competitionData[activePS].meta.format}
              </span>
              <span className="text-slate-600">|</span>
              <span className="flex items-center gap-1">
                <RefreshCcw className="w-3 h-3" />{" "}
                {competitionData[activePS].meta.rounds} Phases
              </span>
              <span className="text-slate-600">|</span>
              <span className="flex items-center gap-1">
                <Languages className="w-3 h-3" /> Hindi Literary Performance
              </span>
            </div>
          </div>
        </div>

        {/* --- MAIN INTERFACE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT COLUMN: INTEL, REWARDS & RULES */}
          <div className="lg:col-span-4 space-y-6">
            {/* Mission Brief */}
            <div className="p-8 bg-black/60 border-t-4 border-orange-500 rounded-b-xl backdrop-blur-md">
              <div className="flex items-center gap-2 mb-4 text-orange-400">
                <Cpu className="w-4 h-4 animate-pulse" />
                <span className="text-[14px] tracking-widest font-bold uppercase">
                  Performance_Brief
                </span>
              </div>
              <h2 className="text-3xl font-black text-white leading-tight uppercase mb-4">
                {competitionData[activePS].title}
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed font-sans border-l-2 border-white/10 pl-4 mb-6 italic">
                "{competitionData[activePS].context}"
              </p>

              <div className="flex items-center justify-between mb-6 p-3 bg-white/5 rounded border border-white/10">
                <div className="flex items-center gap-2">
                  <CircleDollarSign className="w-5 h-5 text-emerald-400" />
                  <span className="text-xs uppercase text-slate-300 tracking-tighter">
                    Base Fee
                  </span>
                </div>
                <span className="text-xl font-black text-white">
                  ₹{competitionData[activePS].meta.fee}
                </span>
              </div>

              <button
                onClick={() => {
                  if (isLoggedIn)
                    router.push(`/present/registration?competition=udgaar`);
                  else
                    alert(
                      "Please login to register. Login button at botton-right corner.",
                    );
                }}
                className="w-full py-4 bg-orange-600 hover:bg-orange-500 text-white font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-[0_5px_15px_rgba(249,115,22,0.4)]"
              >
                Register Now <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            {/* Bounty Protocol */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:rotate-12 transition-transform">
                <Trophy size={100} />
              </div>
              <h3 className="text-[14px] font-bold text-yellow-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                Prize_Pool_Allocation
              </h3>
              <div className="space-y-4">
                {[
                  {
                    label: "Alpha_Rank",
                    val: competitionData[activePS].prizes.first,
                    color: "text-yellow-500",
                  },
                  {
                    label: "Beta_Rank",
                    val: competitionData[activePS].prizes.second,
                    color: "text-slate-300",
                  },
                  {
                    label: "Gamma_Rank",
                    val: competitionData[activePS].prizes.third,
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
                <ShieldAlert className="w-4 h-4" /> Participation_Rules
              </h3>
              <div className="space-y-3 mb-6">
                {competitionData[activePS].rules.map((rule, i) => (
                  <div
                    key={i}
                    className="flex gap-2 text-[13px] text-slate-400 leading-tight"
                  >
                    <span className="text-red-500">»</span> {rule}
                  </div>
                ))}
              </div>
              <Link
                href={competitionData[activePS].href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-orange-400 underline decoration-orange-500/50 hover:text-orange-300 transition-colors uppercase font-bold"
              >
                [OPEN_FULL_GUIDELINES.PDF]
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: TECHNICAL SPECS & PHASES */}
          <div className="lg:col-span-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Performance Objectives */}
              <div className="p-8 bg-black/40 border border-white/10 rounded-xl backdrop-blur-md">
                <h3 className="text-[14px] font-bold text-orange-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> Competition_Objectives
                </h3>
                <div className="space-y-4">
                  {competitionData[activePS].objectives.map((obj, i) => (
                    <div key={i} className="flex gap-3 group">
                      <Zap className="w-4 h-4 text-orange-500 shrink-0 mt-1 group-hover:animate-bounce" />
                      <p className="text-[13px] leading-relaxed text-slate-300 group-hover:text-white transition-colors uppercase">
                        {obj}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Execution Phases */}
              <div className="p-8 bg-white/5 border border-white/10 rounded-xl">
                <h3 className="text-[14px] font-bold text-yellow-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Layers className="w-4 h-4" /> Competition_Flow
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {competitionData[activePS].phases.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                      <span className="text-[12px] font-bold text-slate-300 uppercase leading-tight">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Status Bar */}
            <div className="p-6 bg-black/40 border-2 border-dashed border-white/10 rounded-xl flex flex-wrap items-center justify-between gap-6">
              <div className="flex gap-8">
                <div className="space-y-1">
                  <div className="text-[13px] text-slate-500 uppercase">
                    Submission_Mode
                  </div>
                  <div className="text-sm font-bold text-white uppercase flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />{" "}
                    {competitionData[activePS].meta.mode}
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-[13px] text-slate-500 uppercase">
                    Organizing_Entity
                  </div>
                  <div className="text-sm font-bold text-white uppercase flex items-center gap-2">
                    <RefreshCcw className="w-3 h-3 text-orange-500" />{" "}
                    SRIJAN_CLUB
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-[13px] text-slate-500 uppercase">
                    Venue
                  </div>
                  <div className="text-sm font-bold text-white uppercase flex items-center gap-2">
                    <Target className="w-3 h-3 text-red-500" />{" "}
                    Stage_Performances
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-1">
                <span className="text-[13px] text-slate-500 uppercase">
                  Total_Bounty_Pool
                </span>
                <span className="text-2xl font-black text-white tracking-tighter italic">
                  ₹{competitionData[activePS].prizes.total}
                </span>
              </div>
            </div>

            <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center gap-4">
              <Info className="w-4 h-4 text-orange-400 shrink-0" />
              <div className="text-[13px] text-slate-500 uppercase tracking-widest leading-relaxed">
                <span className="text-orange-300">
                  Originality (Creativity)
                </span>{" "}
                •
                <span className="text-orange-300">
                  {" "}
                  Content Depth (Thematic)
                </span>{" "}
                •
                <span className="text-orange-300">
                  {" "}
                  Literary Quality (Expression)
                </span>{" "}
                •
                <span className="text-orange-300">
                  {" "}
                  Stage Presence (Performance)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
