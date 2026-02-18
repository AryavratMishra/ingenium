"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Server,
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
  PlayCircle,
  Activity,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ScalaStreamPage() {
  const router = useRouter();

  const activePS = 0;
  const problemStatements = [
    {
      id: 1,
      type: "Web + ML",
      title: "Scalable Video Streaming Service",
      sub: "ScalaStream - Video Streaming Systems & Architecture",
      icon: <Server className="w-6 h-6" />,
      href: "/PS/Scalastream.pdf",
      context:
        "Modern video streaming platforms require engineered architectures spanning ingestion, processing, storage, and delivery. Focus on distributed systems, scalability trade-offs, and cost-efficient decisions.",
      objectives: [
        "Support concurrent video uploads from multiple users",
        "Convert uploaded videos into streamable formats (Transcoding)",
        "Deliver content with minimal latency and high traffic handling",
        "Integrate ML for recommendations based on user behavior/interests",
        "Maintain intuitive user experience and clean metadata handling",
      ],
      deliverables: [
        "Working Web Application (Upload, Playback, Metadata)",
        "System Architecture Diagram (Conceptual Horizontal Scalability)",
        "Detailed Scalability and Cost Optimization Strategy",
        "Explanation of AI/ML Recommendation Approach",
        "Source Code Repository with Comprehensive README",
      ],
      rules: [
        "Recommendation logic must be ML-based (Rule-based is not sufficient)",
        "Live streaming functionality is not required",
        "Deployment at real-world production scale is not mandatory",
        "Architecture must support graceful failure handling",
      ],
      optionalFeatures: [
        "Adaptive video quality selection",
        "Playback speed control",
        "Enhanced recommendation filters",
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
      color: "cyan",
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
              ScalaStream{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">
                CORE
              </span>
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-[10px] text-cyan-400 uppercase tracking-widest">
              <span className="flex items-center gap-1">
                <Users className="w-3 h-3" />{" "}
                {problemStatements[activePS].meta.format}
              </span>
              <span className="text-slate-600">|</span>
              <span className="flex items-center gap-1">
                <Activity className="w-3 h-3" />{" "}
                {problemStatements[activePS].meta.rounds} Round Phase
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-purple-400 font-bold tracking-normal italic">
                Organized by {problemStatements[activePS].meta.club} @ IIT
                Indore
              </span>
            </div>
          </div>
        </div>

        {/* --- MAIN INTERFACE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT COLUMN: INTEL, REWARDS & RULES */}
          <div className="lg:col-span-4 space-y-6">
            {/* Mission Brief */}
            <div className="p-8 bg-black/60 border-t-4 border-cyan-500 rounded-b-xl backdrop-blur-md">
              <div className="flex items-center gap-2 mb-4 text-cyan-400">
                <Cpu className="w-4 h-4 animate-pulse" />
                <span className="text-[14px] tracking-widest font-bold uppercase">
                  System_Directive
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
                <span className="text-xl font-black text-white tracking-widest">
                  ₹{problemStatements[activePS].meta.fee}
                </span>
              </div>

              <button
                onClick={() =>
                  router.push(`/present/registration?competition=scalastream`)
                }
                className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-black font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-[0_5px_15px_rgba(34,211,238,0.2)]"
              >
                Register Now <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            {/* Bounty Protocol */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:rotate-12 transition-transform">
                <Trophy size={100} />
              </div>
              <h3 className="text-[14px] font-bold text-purple-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                Prize_Pool_Allocation
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
                    <span className="text-[12px] text-slate-500 uppercase font-bold">
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
                <ShieldAlert className="w-4 h-4" /> Operational_Constraints
              </h3>
              <div className="space-y-3 mb-6">
                {problemStatements[activePS].rules.map((rule, i) => (
                  <div
                    key={i}
                    className="flex gap-2 text-[13px] text-slate-400 leading-tight"
                  >
                    <span className="text-red-500 font-bold">!</span> {rule}
                  </div>
                ))}
              </div>
              <Link
                href={problemStatements[activePS].href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-cyan-400 underline decoration-cyan-500/50 hover:text-cyan-300 transition-colors uppercase font-bold"
              >
                [ACCESS_TECHNICAL_PDF.DOC]
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: TECHNICAL SPECS & DELIVERABLES */}
          <div className="lg:col-span-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Functional Specs */}
              <div className="p-8 bg-black/40 border border-white/10 rounded-xl backdrop-blur-md">
                <h3 className="text-[14px] font-bold text-cyan-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Layers className="w-4 h-4" /> Functional_Requirements
                </h3>
                <div className="space-y-4">
                  {problemStatements[activePS].objectives.map((obj, i) => (
                    <div key={i} className="flex gap-3 group">
                      <Zap className="w-4 h-4 text-cyan-500 shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                      <p className="text-[13px] leading-relaxed text-slate-300 group-hover:text-white transition-colors uppercase">
                        {obj}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="p-8 bg-white/5 border border-white/10 rounded-xl">
                <h3 className="text-[14px] font-bold text-purple-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <FileCode2 className="w-4 h-4" /> Deployment_Assets
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {problemStatements[activePS].deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-purple-500" />
                      <span className="text-[12px] font-bold text-slate-300 uppercase leading-tight">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <h4 className="text-[10px] font-bold text-slate-500 uppercase mt-6 mb-2 tracking-widest">
                  Optional Enhancements
                </h4>
                <div className="flex flex-wrap gap-2">
                  {problemStatements[activePS].optionalFeatures.map(
                    (feat, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-[9px] text-cyan-400 uppercase font-bold"
                      >
                        {feat}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Status Bar */}
            <div className="p-6 bg-black/40 border-2 border-dashed border-white/10 rounded-xl flex flex-wrap items-center justify-between gap-6">
              <div className="flex gap-8">
                <div className="space-y-1">
                  <div className="text-[11px] text-slate-500 uppercase font-bold tracking-tighter">
                    Submission
                  </div>
                  <div className="text-sm font-black text-white uppercase flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />{" "}
                    {problemStatements[activePS].meta.mode} Portal
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-[11px] text-slate-500 uppercase font-bold tracking-tighter">
                    Timeline
                  </div>
                  <div className="text-sm font-black text-white uppercase flex items-center gap-2">
                    <PlayCircle className="w-3 h-3 text-cyan-500" />{" "}
                    Phase_01_Running
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-[11px] text-slate-500 uppercase font-bold tracking-tighter">
                    Verification
                  </div>
                  <div className="text-sm font-black text-white uppercase flex items-center gap-2">
                    <Target className="w-3 h-3 text-purple-500" />{" "}
                    Peer_Validation
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-1">
                <span className="text-[11px] text-slate-500 uppercase font-bold">
                  Total_Bounty
                </span>
                <span className="text-2xl font-black text-white tracking-tighter italic">
                  ₹{problemStatements[activePS].prizes.total}
                </span>
              </div>
            </div>

            {/* Judging Logic */}
            <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center gap-4">
              <Info className="w-4 h-4 text-cyan-400 shrink-0" />
              <div className="text-[11px] text-slate-500 uppercase tracking-widest leading-relaxed font-bold">
                <span className="text-cyan-300">
                  Architecture & Scalability (30%)
                </span>{" "}
                •<span className="text-cyan-300"> Content Flow & UX (20%)</span>{" "}
                •<span className="text-cyan-300"> Innovation/ML (30%)</span> •
                <span className="text-cyan-300"> Implementation (20%)</span>
                <p className="text-[9px] mt-1 opacity-60 italic font-normal">
                  Organizers reserve the right to modify rules as communicated
                  to registered participants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
