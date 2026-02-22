"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Megaphone,
  Sparkles,
  Trophy,
  Volume2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";

export default function NukkadNatakPage() {
  const router = useRouter();
  const { isLoggedIn } = useContext(AuthContext);

  const item = {
    id: "NN",
    title: "Nukkad Natak",
    sub: "Street Theatre Syndicate",
    icon: <Users className="w-6 h-6" />,
    fee: "₹1500",
    participation: "Team Participation",
    format: "Open-air street theatre format",
    objective:
      "Addressing real societal concerns through live interaction and social commentary.",
    prizes: {
      first: "20,000",
      second: "12,000",
      third: "8,000",
      total: "40,000",
    },
  };

  return (
    <div className="relative min-h-screen text-orange-100 font-mono p-4 md:p-8 overflow-hidden bg-black/30">
      {/* Spotlight Effect Overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-100 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- THEATRICAL HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 border-b border-orange-500/20 pb-8">
          <div className="space-y-1">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-orange-400 mb-4"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-[12px] tracking-[0.5em] uppercase font-bold">
                Return to Competitions
              </span>
            </button>
            <h1 className="text-5xl font-black tracking-tighter text-white uppercase italic">
              NUKKAD <span className="text-orange-500">NATAK</span>
            </h1>
            <p className="text-[12px] text-orange-500/60 mt-2 tracking-[0.3em] uppercase">
              Celebrating Social Reflection & Creativity
            </p>
          </div>
          <div className="mt-6 lg:mt-0 flex flex-col items-end gap-6">
            {/* Primary Registration Button */}
            <button
              onClick={() => {
                if (isLoggedIn)
                  router.push(`/registration?competition=nukkad-natak`);
                else
                  alert(
                    "Please login to register. Login button at botton-right corner.",
                  );
              }}
              className="group relative px-8 py-3 bg-orange-600 hover:bg-orange-500 transition-all rounded-sm overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-white/10 -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <div className="relative flex items-center gap-3">
                <span className="text-xs font-black tracking-[0.2em] text-white uppercase">
                  Register
                </span>
                <ExternalLink className="w-4 h-4 text-white" />
              </div>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- MODULE INTEL --- */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-4 sm:p-8 bg-black/60 border-l-4 border-orange-500 rounded-r-2xl backdrop-blur-xl relative group">
              <div className="absolute top-4 right-4 text-orange-500/10 group-hover:text-orange-500/20 transition-colors">
                <Volume2 className="w-16 h-16" />
              </div>
              <h3 className="text-[12px] text-orange-500 uppercase tracking-widest mb-4 font-bold flex items-center gap-2">
                <Megaphone className="w-3 h-3" /> Module_Briefing
              </h3>
              <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-1">
                {item.title}
              </h2>
              <p className="text-[12px] text-orange-400 uppercase font-bold tracking-widest mb-6">
                {item.sub}
              </p>
              <div className="space-y-4 border-t border-white/5 pt-6">
                <IntelRow label="Participation" value={item.participation} />
                <IntelRow label="Base Fee (Per Team)" value={item.fee} />
                <IntelRow label="Core Format" value={item.format} />
                <p className="text-md leading-relaxed text-gray-400 italic">
                  "{item.objective}"
                </p>
              </div>
            </div>

            {/* --- REWARD ALLOCATION --- */}
            <div className="p-4 sm:p-8 bg-orange-500/5 border border-orange-500/20 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-5">
                <Trophy className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
                  <div className="self-start">
                    <h3 className="text-lg font-black text-white uppercase tracking-[0.2em]">
                      Bounty_Registry
                    </h3>
                    <p className="text-[12px] text-orange-500 uppercase tracking-widest italic font-bold">
                      Performative_Excellence_Rewards
                    </p>
                  </div>
                  <div className="text-right self-end">
                    <span className="text-2xl font-black text-orange-500 italic leading-none">
                      ₹{item.prizes.total}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <PrizeBox
                    rank="ALPHA"
                    amount={item.prizes.first}
                    label="Winner"
                  />
                  <PrizeBox
                    rank="BETA"
                    amount={item.prizes.second}
                    label="Runner Up"
                  />
                  <PrizeBox
                    rank="GAMMA"
                    amount={item.prizes.third}
                    label="Finalist"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* --- CONTENT MATRIX --- */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-4 sm:p-8 backdrop-blur-md">
              <h3 className="text-xl font-black text-white uppercase tracking-widest mb-10 flex items-center gap-4">
                <Sparkles className="text-orange-500" /> Operational_Parameters
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="text-[12px] text-orange-500 uppercase tracking-widest mb-4 font-bold">
                    Thematic_Spectrum
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Social Issues",
                      "Campus Life",
                      "Tech Ethics",
                      "Human Emotions",
                      "Identity",
                    ].map((theme) => (
                      <span
                        key={theme}
                        className="text-[12px] bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded text-orange-200 uppercase font-bold"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[12px] text-orange-500 uppercase tracking-widest mb-4 font-bold">
                    Unique_Features
                  </h4>
                  <ul className="space-y-2">
                    <li className="text-[13px] text-gray-400 flex gap-2">
                      <span className="text-orange-500 font-bold">▪</span>{" "}
                      Audience Interaction
                    </li>
                    <li className="text-[13px] text-gray-400 flex gap-2">
                      <span className="text-orange-500 font-bold">▪</span>{" "}
                      Minimal Props Policy
                    </li>
                    <li className="text-[13px] text-gray-400 flex gap-2">
                      <span className="text-orange-500 font-bold">▪</span>{" "}
                      Impact Focus
                    </li>
                  </ul>
                </div>
              </div>

              {/* Scorecard Matrix */}
              <div className="pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-3 gap-6">
                <MetricItem label="Creativity/Originality" />
                <MetricItem label="Storytelling Innovation" />
                <MetricItem label="Stage Presence" />
                <MetricItem label="Social Impact" />
                <MetricItem label="Audience Engagement" />
                <div className="p-4 bg-orange-500/5 border border-orange-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-[12px] text-orange-400 uppercase font-bold text-center">
                    Evaluated by expert panel
                  </span>
                </div>
              </div>
              <Link
                href={"/PS/Monoact_and_Nukkad.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                View Rules
              </Link>
            </div>

            {/* Deployment Phase */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PhaseCard
                idx="01"
                label="Registration & Screening"
                detail="Online registration & basic screening of entries."
              />
              <PhaseCard
                idx="02"
                label="Final Showcase"
                detail="Final performances in front of live audience."
              />
            </div>

            {/* Secondary CTA */}
            <div className="flex justify-center pt-4">
              <button
                onClick={() => {
                  if (isLoggedIn)
                    router.push(
                      `/registration?competition=nukkad-natak`,
                    );
                  else
                    alert(
                      "Please login to register. Login button at botton-right corner.",
                    );
                }}
                className="text-[12px] font-bold text-orange-400 uppercase tracking-[0.4em] hover:text-white transition-colors flex items-center gap-2 group"
              >
                Secure your position in the performative core{" "}
                <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Internal Synthesis Components ---

function IntelRow({ label, value }) {
  return (
    <div className="flex justify-between items-center text-[12px] border-b border-white/5 pb-2">
      <span className="text-gray-500 uppercase font-bold">{label}</span>
      <span className="text-orange-400 font-bold uppercase">{value}</span>
    </div>
  );
}

function MetricItem({ label }) {
  return (
    <div className="space-y-2">
      <div className="text-[12px] text-white/60 uppercase font-bold tracking-tighter leading-tight">
        {label} <span className="text-[10px] text-orange-500/40 italic"></span>
      </div>
      <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "65%" }}
          className="h-full bg-orange-500/40"
        />
      </div>
    </div>
  );
}

function PrizeBox({ rank, amount, label }) {
  return (
    <div className="text-center p-3 bg-black/40 border border-white/5 rounded-xl group hover:border-orange-500/30 transition-all">
      <div className="text-[10px] text-orange-500 uppercase mb-1 font-bold">
        {rank}
      </div>
      <div className="text-lg font-black text-white italic group-hover:scale-110 transition-transform">
        ₹{amount}
      </div>
      <div className="text-[9px] text-gray-500 uppercase mt-1 font-bold">
        {label}
      </div>
    </div>
  );
}

function PhaseCard({ idx, label, detail }) {
  return (
    <div className="p-3 sm:p-6 bg-white/5 border border-white/5 rounded-2xl group hover:bg-orange-500/5 transition-all">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-[12px] font-black text-orange-500">
          PHASE_{idx}
        </span>
        <div className="h-px grow bg-orange-500/20" />
      </div>
      <h4 className="text-sm font-bold text-white uppercase mb-2">{label}</h4>
      <p className="text-[12px] text-gray-500 leading-relaxed uppercase">
        {detail}
      </p>
    </div>
  );
}
