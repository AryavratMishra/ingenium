"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import {
  Mic2,
  Quote,
  Trophy,
  MapPin,
  Sparkles,
  Terminal,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ScrollText,
  IndianRupee,
  Clock,
  User,
  AlertTriangle,
  Scale,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";

export default function PoetrySlamPage() {
  const router = useRouter();
  const { isLoggedIn } = useContext(AuthContext);

  const item = {
    id: "PS",
    title: "English Poetry Slam",
    sub: "Individual Performance Competition",
    icon: <Mic2 className="w-5 h-5" />,
    fee: "₹350",
    registrationPath: "/registration?competition=ps",
    description:
      "A non-theme-based individual performance competition where participants present original poetic compositions through spoken-word recital. The competition emphasizes expression, linguistic creativity, stage presence, and emotional impact.",
    prizes: {
      first: "5,000",
      second: "3,000",
      third: "2,000",
      total: "10,000",
    },
  };

  return (
    <div className="relative min-h-screen text-amber-50 font-mono p-4 md:p-8 overflow-hidden bg-black/30">
      {/* Ink-Drip Decoration */}
      <div className="absolute top-0 left-1/4 w-px h-64 bg-linear-to-b from-amber-500/50 to-transparent opacity-20" />
      <div className="absolute top-20 right-1/3 w-px h-48 bg-linear-to-b from-amber-500/50 to-transparent opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- LEXICON HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 border-b border-amber-500/20 pb-8">
          <div className="space-y-1">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-amber-500 mb-4"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-[12px] tracking-[0.5em] uppercase font-bold">
                Return to Competitions
              </span>
            </button>
            <h1 className="text-5xl font-black tracking-tighter text-white uppercase italic">
              POETRY <span className="text-amber-500">SLAM</span>
            </h1>
            <p className="text-[12px] text-amber-200/50 mt-2 tracking-[0.3em] uppercase">
              IIT Indore • Spoken-Word Recital
            </p>
          </div>
          <div className="mt-6 lg:mt-0 flex flex-col items-end gap-6">
            <div className="flex gap-4 flex-wrap">
              <StatusNode
                icon={<User />}
                label="Team Composition"
                value="Individual (1)"
              />
              <StatusNode icon={<Clock />} label="Duration" value="5 Minutes" />
              <StatusNode
                icon={<IndianRupee />}
                label="Base Fee"
                value={item.fee}
              />
            </div>
            {/* Primary Registration Button */}
            <button
              onClick={() => {
                if (isLoggedIn)
                  router.push(`/registration?competition=poetry-slam`);
                else
                  alert(
                    "Please login to register. Login button at bottom-right corner.",
                  );
              }}
              className="group relative px-8 py-3 bg-amber-600 hover:bg-amber-500 transition-all rounded-sm overflow-hidden border border-amber-400/30"
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
          {/* --- COMPETITION SIDEBAR --- */}
          <div className="lg:col-span-4 space-y-4">
            {/* Judging Criteria Table */}
            <div className="p-6 bg-amber-950/20 border border-amber-500/10 rounded-2xl">
              <h4 className="text-[12px] text-amber-500 uppercase tracking-widest mb-4 flex items-center gap-2 font-bold">
                <Scale className="w-3 h-3" /> Judging_Criteria
              </h4>
              <div className="space-y-3">
                {[
                  { label: "Vocabulary & Language", val: "25%" },
                  { label: "Creativity & Content", val: "20%" },
                  { label: "Performing Style/Diction", val: "20%" },
                  { label: "Originality", val: "20%" },
                  { label: "Overall Impact", val: "15%" },
                ].map((crit) => (
                  <div
                    key={crit.label}
                    className="flex justify-between border-b border-amber-500/5 pb-1"
                  >
                    <span className="text-[12px] text-amber-100/70 uppercase">
                      {crit.label}
                    </span>
                    <span className="text-[12px] text-amber-500 font-bold">
                      {crit.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Penalties */}
            <div className="p-6 bg-red-950/10 border border-red-500/20 rounded-2xl">
              <h4 className="text-[12px] text-red-500 uppercase tracking-widest mb-4 flex items-center gap-2 font-bold">
                <AlertTriangle className="w-3 h-3" /> Protocol_Violations
              </h4>
              <ul className="space-y-2 text-[12px] text-amber-100/60 uppercase mb-2">
                <li>• Exceeding 5 mins: -10 Points</li>
                <li>• Exceeding 6 mins: Disqualification</li>
                <li>• Undeclared non-original work: Cancellation</li>
                <li>• Vulgarity: Disqualification</li>
              </ul>
              <Link
                href={"/PS/poetry-slam.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-[13px] underline text-amber-400 hover:text-white transition-colors"
              >
                Download Full Rulebook (PDF)
              </Link>
            </div>
          </div>

          {/* --- MANUSCRIPT VIEWPORT --- */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-black border border-amber-500/20 rounded-3xl p-5 sm:p-10 backdrop-blur-xl relative">
              <div className="absolute top-4 right-6 text-amber-500/10">
                <Quote className="w-24 h-24" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tighter mb-4">
                Competition_Overview
              </h2>

              <p className="text-md leading-relaxed text-amber-100/70 mb-12 p-3 sm:p-6 bg-amber-500/5 border-l-2 border-amber-500 italic max-w-2xl">
                "{item.description}"
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h4 className="text-[12px] text-amber-500 uppercase tracking-[0.2em] font-bold">
                    Performance_Rules
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "All poem forms allowed (English only)",
                      "Originality must be declared at start",
                      "Multiple poems allowed within 5 mins",
                      "Paper/Phone reference permitted",
                      "Judges' decision is final and binding",
                    ].map((rule) => (
                      <li
                        key={rule}
                        className="text-[14px] text-white flex items-start gap-3"
                      >
                        <div className="w-1 h-1 bg-amber-500 mt-2 shrink-0" />{" "}
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-3 sm:p-6 bg-amber-500/5 rounded-2xl border border-amber-500/10 flex flex-col justify-center">
                  <Terminal className="w-8 h-8 text-amber-500/30 mb-2" />
                  <span className="text-[12px] text-amber-500 uppercase font-bold">
                    Special Note
                  </span>
                  <p className="text-[13px] text-white uppercase font-bold leading-tight mt-1">
                    Jazz and Beat poetry are welcome but carry no additional
                    marks.
                  </p>
                </div>
              </div>

              {/* Secondary CTA */}
              <button
                onClick={() => {
                  if (isLoggedIn)
                    router.push(`/registration?competition=poetry-slam`);
                  else alert("Please login to register.");
                }}
                className="text-[12px] font-bold text-amber-400 uppercase tracking-[0.4em] hover:text-white transition-colors flex items-center gap-2 group"
              >
                Commit entry to the manuscript registry{" "}
                <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* --- BOUNTY REGISTRY --- */}
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-3xl p-4 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-5">
                <Trophy className="w-32 h-32" />
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-black text-white uppercase tracking-[0.2em]">
                    Prize_Pool
                  </h3>
                  <p className="text-[12px] text-amber-500 uppercase tracking-widest italic font-bold">
                    Performance_Recognition
                  </p>
                </div>

                <div className="flex gap-8">
                  <BountyNode rank="1ST" amount={item.prizes.first} />
                  <BountyNode rank="2ND" amount={item.prizes.second} />
                  <BountyNode rank="3RD" amount={item.prizes.third} />
                </div>

                <div className="px-6 py-4 bg-amber-500/10 border border-amber-500/30 rounded-xl text-center min-w-35">
                  <span className="text-[11px] text-amber-500 uppercase block font-bold mb-1">
                    Total Bounty
                  </span>
                  <span className="text-2xl font-black text-amber-400 italic leading-none">
                    ₹{item.prizes.total}
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

// --- Internal Scriptorium Components ---

function StatusNode({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-lg">
      <div className="text-amber-500">{icon}</div>
      <div>
        <span className="text-[10px] text-gray-500 uppercase block leading-none mb-1 font-bold">
          {label}
        </span>
        <span className="text-sm font-bold text-white tracking-tighter uppercase italic">
          {value}
        </span>
      </div>
    </div>
  );
}

function BountyNode({ rank, amount }) {
  return (
    <div className="text-center group">
      <div className={`text-[10px] font-bold uppercase mb-1 text-amber-500`}>
        {rank}
      </div>
      <div className="text-xl font-black text-white italic group-hover:scale-110 transition-transform">
        ₹{amount}
      </div>
    </div>
  );
}
