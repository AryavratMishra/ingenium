"use client";

import React, { useContext } from "react";
import {
  PenTool,
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
  Users,
  AlertTriangle,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import RegistrationDeadlineDisclaimer from "@/components/RegistrationDeadlineDisclaimer";

export default function StoryWritingPage() {
  const router = useRouter();
  const { isLoggedIn } = useContext(AuthContext);

  const competitionData = {
    id: "SW",
    title: "English Story Writing",
    sub: "Ingenium 3.0 IIT Indore",
    icon: <PenTool className="w-5 h-5" />,
    fee: "₹350",
    duration: "4 Hours",
    wordLimit: "1000 - 2000 words",
    prizes: {
      first: "5,000",
      second: "3,000",
      third: "2,000",
      total: "10,000",
    },
    judging: [
      { criteria: "Prose Structure", weight: "15%" },
      { criteria: "Creativity and Content", weight: "30%" },
      { criteria: "Vocabulary and Language", weight: "20%" },
      { criteria: "Relevance to Prompt", weight: "25%" },
      { criteria: "Overall Impact", weight: "10%" },
    ],
  };

  return (
    <div className="relative min-h-screen text-amber-50 font-mono p-4 md:p-8 overflow-hidden bg-black/30">
      <RegistrationDeadlineDisclaimer
        competition={"Story Writing"}
        deadline={"12 March 2026, 11:59 PM"}
      />

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
              STORY <span className="text-amber-500">WRITING</span>
            </h1>
            <p className="text-[12px] text-amber-200/50 mt-2 tracking-[0.3em] uppercase">
              {competitionData.sub}
            </p>
          </div>
          <div className="mt-6 lg:mt-0 flex flex-col items-end gap-6">
            <div className="flex gap-4 flex-wrap">
              <StatusNode
                icon={<Clock />}
                label="Duration"
                value={competitionData.duration}
              />
              <StatusNode
                icon={<Users />}
                label="Team Size"
                value="Individual"
              />
              <StatusNode
                icon={<IndianRupee />}
                label="Base Fee"
                value={"₹350"}
              />
            </div>
            {/* Primary Registration Button */}
            <button
              onClick={() => {
                if (isLoggedIn)
                  router.push(`/registration?competition=story-writing`);
                else alert("Please login to register.");
              }}
              className="group relative px-8 py-3 bg-amber-600 hover:bg-amber-500 transition-all rounded-sm overflow-hidden border border-amber-400/30"
            >
              <div className="absolute inset-0 w-full h-full bg-white/10 -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <div className="relative flex items-center gap-3">
                <span className="text-sm font-black tracking-[0.2em] text-white uppercase">
                  Register
                </span>
                <ExternalLink className="w-4 h-4 text-white" />
              </div>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- SIDEBAR PROTOCOLS --- */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 bg-amber-950/20 border border-amber-500/10 rounded-2xl">
              <h4 className="text-[12px] text-amber-500 uppercase tracking-widest mb-4 flex items-center gap-2 font-bold">
                <Terminal className="w-3 h-3" /> Mandatory_Protocols
              </h4>
              <ul className="space-y-4">
                <ProtocolItem text="Prompt-based individual writing." />
                <ProtocolItem text="Word limit: 1000-2000 words (including title)." />
                <ProtocolItem text="Prompts provided on the spot (min. 2 options)." />
                <ProtocolItem text="Roman/Latin script only." />
                <ProtocolItem text="No electronic gadgets allowed." />
              </ul>
            </div>

            <div className="p-6 bg-red-950/10 border border-red-500/20 rounded-2xl">
              <h4 className="text-[12px] text-red-500 uppercase tracking-widest mb-4 flex items-center gap-2 font-bold">
                <AlertTriangle className="w-3 h-3" /> Penalty_Matrix
              </h4>
              <div className="space-y-2 text-[12px] text-red-200/70 uppercase">
                <p>• Missing Title: -5 Points</p>
                <p>• 2001-2050 words: -1 Point</p>
                <p>• 2051-2100 words: -2 Points</p>
                <p>• Non-Latin words: -1 to -2 Points</p>
                <p>• Illustrations/Graphs: -5 Points</p>
              </div>
            </div>
          </div>

          {/* --- MAIN CONTENT --- */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-black border border-amber-500/20 rounded-3xl p-5 sm:p-10 backdrop-blur-xl relative">
              <div className="absolute top-4 right-6 text-amber-500/10">
                <Quote className="w-24 h-24" />
              </div>

              <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">
                Module_{competitionData.id}: STORY WRITING
              </h2>

              <p className="text-md leading-relaxed text-amber-100/70 mb-12 p-3 sm:p-6 bg-amber-500/5 border-l-2 border-amber-500 italic max-w-2xl">
                "Participants will compose a short story of 1000-2000 words in
                English within the given time. Prompts will be provided on the
                spot."
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h4 className="text-[12px] text-amber-500 uppercase tracking-[0.2em] font-bold">
                    Judging_Criteria
                  </h4>
                  <div className="space-y-3">
                    {competitionData.judging.map((item) => (
                      <div
                        key={item.criteria}
                        className="flex justify-between items-center border-b border-white/5 pb-1"
                      >
                        <span className="text-[13px] text-white">
                          {item.criteria}
                        </span>
                        <span className="text-[13px] text-amber-500 font-bold">
                          {item.weight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6 bg-amber-500/5 rounded-2xl border border-amber-500/10 flex flex-col justify-center">
                  <ScrollText className="w-8 h-8 text-amber-500/30 mb-2" />
                  <span className="text-[12px] text-amber-500 uppercase font-bold">
                    Official Documentation
                  </span>
                  <span className="text-sm text-white uppercase font-black mb-4">
                    Ingenium_Protocol_v3.0
                  </span>
                  <Link
                    href={"/PS/story-writing.pdf"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-white underline text-sm transition-colors"
                  >
                    View Official Rulebook (PDF)
                  </Link>
                </div>
              </div>
            </div>

            {/* --- BOUNTY REGISTRY --- */}
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-3xl p-4 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-5">
                <Trophy className="w-32 h-32" />
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-black text-white uppercase tracking-[0.2em]">
                    Bounty_Registry
                  </h3>
                  <p className="text-[12px] text-amber-500 uppercase tracking-widest italic font-bold">
                    Creative_Lexicon_Rewards
                  </p>
                </div>

                <div className="flex gap-8">
                  <BountyNode
                    rank="ALPHA"
                    amount={competitionData.prizes.first}
                  />
                  <BountyNode
                    rank="BETA"
                    amount={competitionData.prizes.second}
                  />
                  <BountyNode
                    rank="GAMMA"
                    amount={competitionData.prizes.third}
                  />
                </div>

                <div className="px-6 py-4 bg-amber-500/10 border border-amber-500/30 rounded-xl text-center min-w-35">
                  <span className="text-[11px] text-amber-500 uppercase block font-bold mb-1">
                    Total Pool
                  </span>
                  <span className="text-2xl font-black text-amber-400 italic leading-none">
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

// --- Internal UI Components ---

function StatusNode({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-lg">
      <div className="text-amber-500 w-4 h-4">{icon}</div>
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

function ProtocolItem({ text }) {
  return (
    <li className="text-[13px] text-amber-100/80 flex items-start gap-3 leading-tight uppercase font-bold">
      <div className="w-1.5 h-1.5 bg-amber-500 mt-1 shrink-0" />
      {text}
    </li>
  );
}

function BountyNode({ rank, amount }) {
  return (
    <div className="text-center group">
      <div className={`text-[10px] font-bold uppercase mb-1 text-amber-500`}>
        {rank}_ACCESS
      </div>
      <div className="text-xl font-black text-white italic group-hover:scale-110 transition-transform">
        ₹{amount}
      </div>
    </div>
  );
}
