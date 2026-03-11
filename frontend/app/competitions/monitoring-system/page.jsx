"use client";

import React, { useContext } from "react";
import {
  HeartPulse,
  ChevronLeft,
  Target,
  Cpu,
  Boxes,
  ArrowRight,
  AlertTriangle,
  FileText,
  Clock,
  Presentation,
  MessagesSquare,
  Wallet,
  ShieldAlert,
  ClipboardCheck,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import CancelledDisclaimer from "@/components/CancelledDisclaimer";

export default function PatientMonitorPage() {
  const router = useRouter();
  const { isLoggedIn } = useContext(AuthContext);

  const medicalBrief = {
    id: 1,
    title: "Low-Cost Patient Monitor",
    club: "Biocrats Club, IIT Indore",
    icon: <HeartPulse className="w-6 h-6" />,
    href: "/PS/monitoring-system.pdf",
    fee: "600",
    teamSize: "2-4 members",
    background:
      "In resource-limited environments like rural clinics and ambulances, access to advanced monitoring is restricted by cost and portability constraints.",
    challenge:
      "Design a frugal, portable, and accurate multi-parameter solution capable of measuring at least three physiological parameters simultaneously.",
    requirements: [
      {
        label: "Affordability",
        desc: "Use cost-effective sensors and materials.",
      },
      {
        label: "Portability",
        desc: "Low-power or battery operation for field use.",
      },
      {
        label: "Interface",
        desc: "Simple display via LCD, App, or LEDs.",
      },
      {
        label: "Feasibility",
        desc: "Theoretically and practically sound circuitry.",
      },
    ],
    deliverables: [
      "Block diagram or schematic ",
      "Component list with cost estimation ",
      "Design justification (Accuracy vs. Cost) ",
    ],
  };

  const competitionRounds = [
    {
      name: "Preparation Phase",
      icon: <Clock size={16} />,
      desc: "Fixed time to analyse the problem and develop a theoretically sound solution.",
    },
    {
      name: "Presentation Phase",
      icon: <Presentation size={16} />,
      desc: "Teams present their proposed design and tech-stack to the expert jury.",
    },
    {
      name: "Q&A Phase",
      icon: <MessagesSquare size={16} />,
      desc: "Short defense session to test conceptual clarity and design feasibility.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black/30 text-emerald-100 font-mono p-4 md:p-8">
      <CancelledDisclaimer competition={'Monitoring System'} />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 border-b border-emerald-500/30 pb-8 gap-6">
          <div className="space-y-2">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-emerald-400 hover:text-white transition-colors group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[12px] tracking-[0.4em] uppercase font-bold text-emerald-500/80">
                Return to Competitions
              </span>
            </button>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase italic">
              Monitoring <span className="text-emerald-500">System</span>
            </h1>
            <p className="text-[14px] text-emerald-500/60 tracking-[0.3em] uppercase">
              {medicalBrief.club}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full lg:w-auto">
            <HeaderTag
              icon={<Boxes size={14} />}
              label="Participation"
              value={medicalBrief.teamSize}
            />
            <HeaderTag
              icon={<Wallet size={14} />}
              label="Base Fee (Per Team)"
              value={`₹${medicalBrief.fee}`}
            />
            <HeaderTag
              icon={<Target size={14} />}
              label="Format"
              value="Competitive"
            />
            <HeaderTag
              icon={<ShieldAlert size={14} />}
              label="Integrity"
              value="No Plagiarism"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- SIDEBAR: NAVIGATION & SCORING --- */}
          <div className="lg:col-span-4 space-y-6">
            {/* Round Tracker */}
            <div className="p-3 sm:p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
              <h4 className="text-[14px] font-bold text-emerald-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Target className="w-3 h-3" /> Competition_Rounds
              </h4>
              <div className="space-y-4">
                {competitionRounds.map((round, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="p-1.5 bg-emerald-500 text-black rounded-md">
                        {round.icon}
                      </div>
                      {i !== 2 && (
                        <div className="w-px h-full bg-emerald-500/20 my-1" />
                      )}
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-white uppercase">
                        {round.name}
                      </p>
                      <p className="text-[12px] text-gray-500 leading-tight mt-1">
                        {round.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Judging Criteria Table */}
            <div className="p-3 sm:p-6 bg-black/40 border border-emerald-500/20 rounded-2xl">
              <h4 className="text-[14px] font-bold text-emerald-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <ClipboardCheck className="w-3 h-3" /> Evaluation_Matrix (100
                Marks)
              </h4>
              <div className="space-y-3">
                <RubricRow
                  label="Problem Understanding"
                  marks="20"
                  desc="Clarity of core issue and constraints"
                />
                <RubricRow
                  label="Innovation"
                  marks="25"
                  desc="Novelty and creativity of solution"
                />
                <RubricRow
                  label="Feasibility"
                  marks="25"
                  desc="Practical implementability"
                />
                <RubricRow
                  label="Presentation"
                  marks="15"
                  desc="Communication style and slides"
                />
                <RubricRow
                  label="Teamwork & Q&A"
                  marks="15"
                  desc="Collaboration and defense of ideas"
                />
              </div>
            </div>
          </div>

          {/* --- MAIN CONTENT --- */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-black/40 border border-emerald-500/20 rounded-3xl p-4 sm:p-8 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h5 className="text-[14px] text-emerald-500 uppercase tracking-widest border-b border-emerald-500/20 pb-2">
                    Background_Report
                  </h5>
                  <p className="text-sm leading-relaxed text-gray-400 italic">
                    "{medicalBrief.background}"
                  </p>
                </div>
                <div className="space-y-4">
                  <h5 className="text-[14px] text-emerald-500 uppercase tracking-widest border-b border-emerald-500/20 pb-2">
                    Core_Challenge
                  </h5>
                  <p className="text-sm leading-relaxed text-emerald-50">
                    {medicalBrief.challenge}
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h5 className="text-[14px] text-emerald-500 uppercase tracking-widest mb-4">
                  Functional_Requirements
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {medicalBrief.requirements.map((req, i) => (
                    <div
                      key={i}
                      className="flex flex-col p-4 bg-emerald-500/5 border border-white/5 rounded-xl"
                    >
                      <span className="text-[14px] font-bold text-emerald-400 uppercase mb-1">
                        {req.label}
                      </span>
                      <span className="text-[14px] text-gray-400">
                        {req.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-center border-t border-emerald-500/20 pt-8">
                <div className="flex-1 space-y-3 w-full">
                  <h5 className="text-[14px] text-emerald-500 uppercase tracking-widest flex items-center gap-2">
                    <FileText className="w-3 h-3" /> Project_Deliverables
                  </h5>
                  {medicalBrief.deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-[14px] text-gray-300"
                    >
                      <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="shrink-0 w-full md:w-auto">
                  <button
                    disabled
                    className="w-full md:w-auto px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-black font-black rounded-xl flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(16,185,129,0.3)] cursor-not-allowed!"
                  >
                    <Cpu size={18} />
                    START REGISTRATION (₹{medicalBrief.fee})
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Prize Pool & Rules Footer */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-3xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-sm font-black text-white uppercase tracking-wider">
                      SolveX_Rewards
                    </h3>
                    <p className="text-[12px] text-emerald-500/60 uppercase">
                      Per Problem Statement
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[12px] text-emerald-500 uppercase block font-bold">
                      Total Pool
                    </span>
                    <span className="text-xl font-black text-emerald-400 italic font-mono">
                      ₹20,000
                    </span>
                  </div>
                </div>
                <div className="flex gap-4 justify-between">
                  <BountyNode rank="ALPHA" amount="12,000" color="text-white" />
                  <BountyNode
                    rank="BETA"
                    amount="5,000"
                    color="text-gray-300"
                  />
                  <BountyNode
                    rank="GAMMA"
                    amount="3,000"
                    color="text-gray-400"
                  />
                </div>
              </div>

              <div className="p-3 sm:p-6 bg-red-950/10 border border-red-500/20 rounded-3xl space-y-3">
                <h4 className="text-[14px] text-red-400 uppercase tracking-widest flex items-center gap-2 font-bold">
                  <AlertTriangle className="w-3 h-3" /> Compliance_Protocols
                </h4>
                <ul className="space-y-2 text-[13px]">
                  <li className="text-gray-400">
                    <span className="text-emerald-400 font-bold underline">
                      INTERNET:
                    </span>{" "}
                    Allowed ONLY in Prep Phase. Prohibited in Q&A/Presentation.
                  </li>
                  <li className="text-gray-400">
                    <span className="text-red-500 font-bold underline">
                      INTEGRITY:
                    </span>{" "}
                    Plagiarism/unfair means lead to immediate disqualification.
                  </li>
                  <li className="text-gray-400">
                    <span className="text-emerald-400 font-bold underline">
                      DEADLINE:
                    </span>{" "}
                    Teams must finalize presentations within the allotted prep
                    time.
                  </li>
                </ul>
                <Link
                  href={medicalBrief.href}
                  target="_blank"
                  rel="noopener noreferrer"
                className="underline"
                >
                  View Rules
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderTag({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-xl min-w-35">
      <div className="text-emerald-500">{icon}</div>
      <div>
        <span className="text-[11px] text-gray-500 uppercase block leading-none mb-1 tracking-tighter">
          {label}
        </span>
        <span className="text-[12px] font-bold text-white uppercase whitespace-nowrap">
          {value}
        </span>
      </div>
    </div>
  );
}

function RubricRow({ label, marks, desc }) {
  return (
    <div className="group space-y-1">
      <div className="flex justify-between items-center text-[13px] border-b border-white/5 pb-1">
        <span className="text-gray-400 uppercase font-semibold">{label}</span>
        <span className="text-emerald-500 font-bold">{marks}</span>
      </div>
      <p className="text-[12px] text-gray-500 italic hidden group-hover:block leading-tight">
        {desc}
      </p>
    </div>
  );
}

function BountyNode({ rank, amount, color }) {
  return (
    <div className="flex-1 bg-white/5 p-3 rounded-xl border border-white/5 text-center">
      <div className="text-[11px] text-emerald-500/70 uppercase mb-1 font-bold">
        {rank}
      </div>
      <div className={`text-md font-black ${color} italic font-mono`}>
        ₹{amount}
      </div>
    </div>
  );
}
