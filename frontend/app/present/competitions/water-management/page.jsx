"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import {
  Droplets,
  Trophy,
  ChevronLeft,
  Users,
  Zap,
  Hexagon,
  FileText,
  AlertTriangle,
  Scale,
  Monitor,
  Calendar,
  CreditCard,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";

export default function WaterManagementPage() {
  const router = useRouter();
  const { isLoggedIn } = useContext(AuthContext);

  const problemStatement = {
    id: 1,
    title: "Monsoon Water Management",
    subtitle: "Hydrological Mobility Planning",
    icon: <Droplets className="w-5 h-5" />,
    href: "/PS/Water_Management_Concastle.pdf",
    baseFee: "350",
    context:
      "During the monsoon season, certain locations within the IIT Indore campus experience temporary surface water accumulation due to heavy rainfall. This event challenges participants to apply civil engineering principles related to stormwater management and drainage planning to optimize mobility.",
    tasks: [
      "Identify and map locations on campus where surface water accumulation occurs.",
      "Analyze contributing factors such as topography, drainage alignment, and runoff patterns.",
      "Evaluate the impact on pedestrian movement, vehicular traffic, and accessibility.",
      "Propose practical, sustainable, and economically feasible engineering interventions.",
    ],
    rounds: [
      {
        id: 1,
        title: "Abstract Submission",
        date: "6 March",
        detail:
          "Screening round - 1-2 page summary of problem understanding and methodology.",
      },
      {
        id: 2,
        title: "Report Submission",
        date: "13 March",
        detail:
          "Final solution report (Max 15 pages) including figures and technical justifications.",
      },
      {
        id: 3,
        title: "Online Presentation",
        date: "15 March",
        detail:
          "10-minute online presentation followed by a rigorous Q&A session with the jury.",
      },
    ],
    rules: [
      "Teams of 2 to 4 members; individual entries are not eligible for team prizes.",
      "Interdisciplinary teams are encouraged to provide diverse perspectives.",
      "Non-IIT Indore participants will be assigned an IIT Indore PoC for campus data.",
      "Software tools such as Excel, GIS, AutoCAD, and Python are optional but recommended.",
    ],
    prizes: { first: "5000", second: "3000", third: "2000", total: "10,000" },
    scoring: [
      { label: "Abstract", val: "20 Marks" },
      { label: "Report", val: "30 Marks" },
      { label: "Presentation", val: "50 Marks" },
      { label: "Technical Depth", val: "20%" },
      { label: "Innovation", val: "15%" },
      { label: "Implementability", val: "10%" },
    ],
  };

  return (
    <div className="relative min-h-screen bg-black/30 text-emerald-100 font-mono p-4 md:p-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 border-b border-emerald-500/20 pb-8">
          <div>
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-emerald-500 mb-4 hover:opacity-70 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-[12px] font-bold tracking-[0.4em] uppercase">
                Return to Competitions
              </span>
            </button>
            <h1 className="text-5xl font-black tracking-tighter text-white uppercase">
              WATER <span className="text-emerald-500">MANAGEMENT</span>
            </h1>
            <p className="text-[12px] text-emerald-500/60 mt-4 tracking-[0.2em] uppercase italic">
              Concreate Club | Ingenium 3.0 | IIT Indore
            </p>
          </div>
          <div className="mt-8 md:mt-0 flex flex-wrap gap-4">
            <StatBox
              label="Format"
              value="Online"
              icon={<Monitor className="w-3 h-3" />}
            />
            <StatBox
              label="Team"
              value="2-4 People"
              icon={<Users className="w-3 h-3" />}
            />
            <StatBox
              label="Fee"
              value={`₹${problemStatement.baseFee}`}
              icon={<CreditCard className="w-3 h-3" />}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- SIDEBAR --- */}
          <div className="lg:col-span-4 space-y-6">
            {/* MISSION ROADMAP */}
            <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
              <h4 className="text-[14px] text-emerald-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Submission_Timeline
              </h4>
              <div className="space-y-6">
                {problemStatement.rounds.map((round, i) => (
                  <div
                    key={i}
                    className="relative pl-6 border-l border-emerald-500/30"
                  >
                    <div className="absolute w-2 h-2 bg-emerald-500 rounded-full -left-[4.5px] top-1 shadow-[0_0_8px_#10b981]" />
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-[12px] font-bold text-emerald-500 uppercase">
                        Round 0{round.id}
                      </span>
                      <span className="text-[12px] bg-emerald-500/20 px-2 py-0.5 rounded text-white font-bold">
                        {round.date}
                      </span>
                    </div>
                    <h5 className="text-[13px] font-bold text-white uppercase">
                      {round.title}
                    </h5>
                    <p className="text-[13px] text-gray-500 mt-1 leading-tight">
                      {round.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Evaluation Matrix */}
            <div className="p-6 bg-black/60 border border-white/5 rounded-xl">
              <h4 className="text-[14px] text-emerald-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Scale className="w-3 h-3" /> Scoring_Architecture
              </h4>
              <div className="space-y-2">
                {problemStatement.scoring.map((s, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center text-[13px] border-b border-white/5 pb-1"
                  >
                    <span className="text-gray-400 uppercase">{s.label}</span>
                    <span className="text-emerald-500 font-bold">{s.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance */}
            <div className="p-5 bg-red-500/5 border border-red-500/20 rounded-xl">
              <h4 className="text-[12px] text-red-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                <AlertTriangle className="w-3 h-3" /> System_Guardrails
              </h4>
              <p className="text-[13px] text-gray-500 leading-relaxed italic mb-4">
                Plagiarism or uncustomized AI content leads to disqualification.
                All submissions must be PDF.
              </p>
              <Link
                href={problemStatement.href}
                target="_blank"
                className="text-[12px] text-emerald-500 underline uppercase font-black hover:text-white transition-all"
              >
                Download Technical PS.PDF
              </Link>
            </div>
          </div>

          {/* --- MAIN CONTENT --- */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-black/60 border border-emerald-500/20 rounded-3xl overflow-hidden backdrop-blur-md">
              <div className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
                  <div>
                    <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-1 leading-none">
                      {problemStatement.title}
                    </h2>
                    <p className="text-sm text-emerald-500 font-bold tracking-[0.3em] uppercase opacity-70">
                      Water Management & Mobility Planning
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      if (isLoggedIn)
                        router.push(
                          `/present/registration?competition=water-management`,
                        );
                      else
                        alert(
                          "Please login to register. Login button at botton-right corner.",
                        );
                    }}
                    className="flex items-center gap-3 bg-emerald-500 text-black px-6 py-4 font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                  >
                    Register Now
                    <Zap className="w-4 h-4 fill-current" />
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-8 mt-4">
                  <section>
                    <label className="text-[12px] text-emerald-500 uppercase font-bold block mb-3 tracking-widest opacity-50">
                      Project_Scope
                    </label>
                    <p className="text-md leading-relaxed text-emerald-50/80 bg-emerald-500/5 p-5 border-l-4 border-emerald-500/50 rounded-r-xl italic">
                      "{problemStatement.context}"
                    </p>
                  </section>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <section>
                      <label className="text-[14px] text-emerald-500 uppercase font-bold block mb-4 tracking-widest opacity-50 items-center gap-2">
                        <Hexagon className="w-3 h-3" /> Core_Tasks
                      </label>
                      <ul className="space-y-3">
                        {problemStatement.tasks.map((task, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-[14px] text-white leading-snug"
                          >
                            <span className="text-emerald-500 font-black">
                              0{i + 1}
                            </span>
                            {task}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section>
                      <label className="text-[14px] text-emerald-500 uppercase font-bold block mb-4 tracking-widest opacity-50 items-center gap-2">
                        <FileText className="w-3 h-3" /> Submission_Rules
                      </label>
                      <ul className="space-y-3">
                        {problemStatement.rules.map((rule, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-[14px] text-white italic leading-snug border-b border-white/5 pb-2"
                          >
                            <ArrowRight className="w-3 h-3 text-emerald-500 shrink-0 mt-1" />
                            {rule}
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>
                </div>
              </div>
            </div>

            {/* REWARDS & COMMAND */}
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-emerald-500/10 border border-emerald-500/30 p-8 rounded-3xl relative overflow-hidden group">
                <Trophy className="absolute -right-6 -bottom-6 w-32 h-32 text-emerald-500/5 -rotate-12 group-hover:scale-110 transition-transform duration-700" />
                <h4 className="text-sm font-black text-white uppercase mb-6 tracking-[0.3em]">
                  Reward_Inventory
                </h4>
                <div className="grid grid-cols-3 gap-2 relative z-10">
                  <PrizeTier
                    rank="1ST"
                    amount={problemStatement.prizes.first}
                  />
                  <PrizeTier
                    rank="2ND"
                    amount={problemStatement.prizes.second}
                  />
                  <PrizeTier
                    rank="3RD"
                    amount={problemStatement.prizes.third}
                  />
                </div>
                <div className="mt-6 flex justify-between items-center border-t border-emerald-500/20 pt-4">
                  <span className="text-[12px] text-emerald-500/60 uppercase">
                    Total Prize Pool
                  </span>
                  <span className="text-2xl font-black text-emerald-400 tracking-tighter italic">
                    ₹{problemStatement.prizes.total}
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

function StatBox({ label, value, icon }) {
  return (
    <div className="px-6 py-3 bg-emerald-500/5 border border-emerald-500/20 rounded-xl flex items-center gap-3">
      <div className="text-emerald-500 opacity-50">{icon}</div>
      <div>
        <span className="block text-[12px] text-emerald-500/50 uppercase font-bold tracking-widest">
          {label}
        </span>
        <span className="text-[12px] text-white font-bold uppercase">
          {value}
        </span>
      </div>
    </div>
  );
}

function PrizeTier({ rank, amount }) {
  return (
    <div className="text-center p-2 bg-black/40 border border-emerald-500/10 rounded-lg">
      <div className="text-[14px] text-emerald-500/50 mb-1">{rank}</div>
      <div className="text-lg font-black text-white italic">₹{amount}</div>
    </div>
  );
}

function ContactInfo({ name, role }) {
  return (
    <div className="flex justify-between items-center border-b border-white/5 pb-2">
      <span className="text-[12px] text-gray-300 uppercase tracking-tighter">
        {name}
      </span>
      <span className="text-[13px] text-emerald-500/60 font-bold uppercase italic">
        {role}
      </span>
    </div>
  );
}
