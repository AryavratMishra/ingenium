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
  Clock,
  Scale,
  FileText,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import RegistrationDeadlineDisclaimer from "@/components/RegistrationDeadlineDisclaimer";
import RegistrationClosedDisclaimer from "@/components/RegistrationClosedDisclaimer";

export default function UdgaarPage() {
  const router = useRouter();
  const { isLoggedIn } = useContext(AuthContext);

  const activePS = 0;
  const competitionData = [
    {
      id: 4,
      type: "Literary Performance",
      title: "UDGAAR - Hindi Poetry Slam",
      sub: "SRIJAN - The Hindi Literature Club of IIT Indore",
      icon: <Mic2 className="w-6 h-6" />,
      href: "/PS/udgaar.pdf",
      context:
        "UDGAAR is a Hindi literary performance competition featuring Poetry Slam, where participants express ideas, emotions, and social realities through original poetic compositions. It provides a platform for spoken-word expression and linguistic depth.",
      objectives: [
        "Express ideas, emotions, and social realities through original compositions",
        "Connect directly with the audience through impactful delivery",
        "Highlight the role of language in shaping thought and empathy",
        "Utilize poetry as a tool for social commentary and personal articulation",
        "Explore themes like identity, technology, culture, and campus life",
      ],
      phases: [
        "Phase 1: Online Registration",
        "Phase 2: Live On-stage Poetry Recitation",
        "Final Evaluation and Prize Distribution",
      ],
      rules: [
        "Poems must be in Hindi; English and Urdu words are allowed, but not for the entire composition",
        "The script of the composition must be in Devanagari",
        "Originality must be announced before the performance",
        "Maximum performance time is 5 minutes (multiple poems allowed within this limit)",
        "Performances exceeding 5 minutes face a 10-point penalty; exceeding 6 minutes leads to disqualification",
        "Any form of vulgarity or obscenity in content is strictly prohibited",
        "Participants may refer to a piece of paper or a phone while reciting",
      ],
      judging: [
        { criteria: "Vocabulary and Poetry Language", weight: "25%" },
        { criteria: "Creativity and Content", weight: "20%" },
        { criteria: "Performing Style and Diction", weight: "20%" },
        { criteria: "Originality", weight: "20%" },
        { criteria: "Overall Impact", weight: "15%" },
      ],
      prizes: {
        first: "5,000",
        second: "3,000",
        third: "2,000",
        total: "10,000",
      },
      meta: {
        club: "SRIJAN",
        mode: "Offline / Live",
        format: "Individual Participation",
        fee: "350",
        rounds: "2",
      },
      color: "orange",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black/30 text-slate-200 font-mono p-4 md:p-8">
      <RegistrationClosedDisclaimer competition={"Udgaar"} />

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
              {competitionData[activePS].title}
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
            <div className="p-4 sm:p-8 bg-black/60 border-t-4 border-orange-500 rounded-b-xl backdrop-blur-md">
              <div className="flex items-center gap-2 mb-4 text-orange-400">
                <Cpu className="w-4 h-4 animate-pulse" />
                <span className="text-[14px] tracking-widest font-bold uppercase">
                  Event_Overview
                </span>
              </div>
              <h2 className="text-3xl font-black text-white leading-tight uppercase mb-4">
                UDGAAR
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed font-sans border-l-2 border-white/10 pl-4 mb-6 italic">
                "{competitionData[activePS].context}"
              </p>

              <div className="flex items-center justify-between mb-6 p-3 bg-white/5 rounded border border-white/10">
                <div className="flex items-center gap-2">
                  <CircleDollarSign className="w-5 h-5 text-emerald-400" />
                  <span className="text-xs uppercase text-slate-300 tracking-tighter">
                    Base Fee (Per Team)
                  </span>
                </div>
                <span className="text-xl font-black text-white">
                  ₹{competitionData[activePS].meta.fee}
                </span>
              </div>

              <button
                disabled
                className="w-full py-4 bg-orange-600 hover:bg-orange-500 text-white font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-[0_5px_15px_rgba(249,115,22,0.4)] cursor-not-allowed!"
              >
                Register for Phase 1 <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            {/* Judging Matrix */}
            <div className="p-3 sm:p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-[14px] font-bold text-blue-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Scale className="w-4 h-4" /> Judging_Criteria
              </h3>
              <div className="space-y-4">
                {competitionData[activePS].judging.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center border-b border-white/5 pb-2"
                  >
                    <span className="text-[12px] text-slate-400 uppercase">
                      {item.criteria}
                    </span>
                    <span className="text-sm font-black text-white">
                      {item.weight}
                    </span>
                  </div>
                ))}
                <p className="text-[12px] text-slate-500 italic mt-2">
                  *Non-original compositions receive zero points for
                  Originality, Creativity, and Vocabulary.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: TECHNICAL SPECS & PHASES */}
          <div className="lg:col-span-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Competition Objectives */}
              <div className="p-4 sm:p-8 bg-black/40 border border-white/10 rounded-xl backdrop-blur-md">
                <h3 className="text-[14px] font-bold text-orange-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> Key_Objectives
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
              <div className="p-4 sm:p-8 bg-white/5 border border-white/10 rounded-xl">
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
                <div className="mt-6 p-4 border border-dashed border-white/10 rounded-lg">
                  <h4 className="text-[11px] text-slate-500 uppercase mb-2 flex items-center gap-2">
                    <Clock className="w-3 h-3" /> Time_Limits
                  </h4>
                  <div className="text-[12px] text-slate-300">
                    Max 5 mins per recital. Over 5 mins: -10 pts. Over 6 mins:
                    DISQUALIFIED.
                  </div>
                </div>
              </div>
            </div>

            {/* Rules & Penalties */}
            <div className="p-3 sm:p-6 bg-red-500/5 border border-red-500/20 rounded-xl">
              <h3 className="text-[14px] font-bold text-red-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4" /> Rules_&_Penalties
              </h3>
              <div className="space-y-3 mb-6">
                {competitionData[activePS].rules.map((rule, i) => (
                  <div
                    key={i}
                    className="flex gap-2 text-[13px] text-slate-400 leading-tight"
                  >
                    <span className="text-red-500 font-bold">/</span> {rule}
                  </div>
                ))}
              </div>
              <div className="p-3 bg-red-950/20 border border-red-500/30 rounded text-[11px] text-red-300">
                <strong>CRITICAL:</strong> Incorrect originality claims or
                failure to announce non-original parts leads to cancellation of
                entry.
              </div>
            </div>

            {/* Status Bar */}
            <div className="p-3 sm:p-6 bg-black/40 border-2 border-dashed border-white/10 rounded-xl flex items-center justify-evenly gap-10 flex-col md:flex-row">
              <div className="flex flex-col items-center gap-8 flex-wrap">
                <div className="space-y-1">
                  <div className="text-[13px] text-slate-500 uppercase">
                    Performance_Mode
                  </div>
                  <div className="text-sm font-bold text-white uppercase flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />{" "}
                    Live On-Stage
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-[13px] text-slate-500 uppercase">
                    Organizing_Club
                  </div>
                  <div className="text-sm font-bold text-white uppercase flex items-center gap-2">
                    <RefreshCcw className="w-3 h-3 text-orange-500" />{" "}
                    SRIJAN_IIT_INDORE
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-[13px] text-slate-500 uppercase">
                    Thematic_Scope
                  </div>
                  <div className="text-sm font-bold text-white uppercase flex items-center gap-2">
                    <Target className="w-3 h-3 text-red-500" /> Contemporary &
                    Social
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-3 sm:p-6 relative overflow-hidden flex flex-1 flex-col w-full">
                <div className="absolute -right-4 -bottom-4 opacity-10">
                  <Trophy className="w-24 h-24 text-yellow-500" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-yellow-500" /> Bounty_Registry
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <PrizeTier rank="1st" amount="5,000" />
                    <PrizeTier rank="2nd" amount="3,000" />
                    <PrizeTier rank="3rd" amount="2,000" />
                  </div>
                  <div className="flex justify-between items-center py-2 border-t border-yellow-500/30">
                    <span className="text-[12px] text-gray-400 uppercase font-bold">
                      Total Prize Pool
                    </span>
                    <span className="text-xl font-black text-white italic">
                      ₹10,000
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Details */}
            <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Info className="w-4 h-4 text-orange-400 shrink-0" />
                <div className="text-[13px] text-slate-400 uppercase tracking-widest leading-relaxed">
                  Jazz/Beat poetry carries no extra marks • Judges' word is
                  final and binding
                </div>
              </div>
              <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                <FileText className="w-4 h-4 text-blue-400 shrink-0" />
                <div className="text-[13px] text-slate-400 uppercase tracking-widest leading-relaxed">
                  SRIJAN promotes preservation of Hindi and Indian languages
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PrizeTier({ rank, amount }) {
  return (
    <div className="bg-black/20 p-2 rounded border border-white/5">
      <p className="text-[12px] text-yellow-500 uppercase font-bold">{rank}</p>
      <p className="text-md font-black text-white italic">₹{amount}</p>
    </div>
  );
}
