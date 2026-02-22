"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import {
  Radio,
  ChevronLeft,
  ShieldCheck,
  Trophy,
  FileText,
  Users,
  CreditCard,
  Calendar,
  Zap,
  Settings,
  Terminal,
  ExternalLink,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";

export default function AnalogVersePage() {
  const router = useRouter();
  const { isLoggedIn } = useContext(AuthContext);

  const competition = {
    id: "AV",
    name: "Analog Verse",
    theme: "The Circuit Design Challenge",
    sub: "Analog Signal Processing, Simulation, and PCB Design",
    icon: <Radio className="w-6 h-6" />,
    href: "/PS/analog-verse.pdf",
    fee: "600",
    teamSize: "2-4 People",
    objective:
      "Simulate real-world R&D environments where noise performance, signal integrity, and PCB layout critically impact systems.",
    audience:
      "Students interested in Analog Electronics, RF, Instrumentation, and PCB Design.",
    software: [
      "LTspice",
      "Multisim",
      "Cadence PSpice",
      "KiCad",
      "Eagle",
      "Altium Designer",
    ],
    rounds: [
      {
        name: "Design & Simulation",
        type: "Online Qualifier",
        deadline: "March 7th, 2026",
        task: "Perform literature review for topologies and conduct SPICE simulations for specified applications.",
        details:
          "Deliverables: Simulation logs for Transient, AC Analysis, and Noise Analysis.",
      },
      {
        name: "The PCB Layout",
        type: "Offline Finals",
        deadline: "March 15th, 2026",
        task: "Convert validated schematics into manufacture-ready PCB layouts, independently fabricating your own PCB, with a live demonstration at IIT Indore (software simulation acceptable if hardware is unavailable).",
        details:
          "Proper grounding (ground planes/star grounding) and DRC clearance mandatory.",
      },
    ],
    judging: [
      {
        label: "Simulation Accuracy",
        weight: "30%",
        desc: "Compliance with problem specifications.",
      },
      {
        label: "Circuit Justification",
        weight: "20%",
        desc: "Quality of literature review and reasoning.",
      },
      {
        label: "PCB Layout Quality",
        weight: "30%",
        desc: "EMI/EMC, trace width, and grounding.",
      },
      {
        label: "Manufacturability",
        weight: "20%",
        desc: "Correct footprint usage and BOM generation.",
      },
    ],
    prizes: [
      { rank: "Winner", amount: "12,000" },
      { rank: "Runner Up", amount: "5,000" },
      { rank: "Second Runner Up", amount: "3,000" },
    ],
    totalPool: "20,000",
    rules: [
      "Max board dimensions: 100mm x 100mm.",
      "Use standard component footprints (SMD 0805 or Through-Hole).",
      "Proper grounding techniques are mandatory.",
      "PS release is T-7 days before submission.",
    ],
  };

  return (
    <div className="relative min-h-screen bg-black/30 text-amber-100 font-mono p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* --- HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 border-b border-amber-500/30 pb-10">
          <div className="space-y-4">
            <button
              onClick={() => router.back()}
              className="group flex items-center gap-2 text-amber-500/60 hover:text-amber-500 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[12px] tracking-[0.4em] uppercase font-bold">
                Return to Competitions
              </span>
            </button>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase italic leading-none">
              ANALOG <span className="text-amber-500">VERSE</span>
            </h1>
            <div className="flex items-center gap-4">
              <span className="bg-amber-500 text-black px-2 py-0.5 text-[12px] font-black uppercase">
                Ingenium 2026
              </span>
              <p className="text-amber-500/80 tracking-[0.2em] text-xs font-bold uppercase italic">
                Organized by Electronics Club
              </p>
            </div>
          </div>
        </div>

        {/* --- MAIN GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT: SPECS & PRIZES */}
          <div className="lg:col-span-4 space-y-8">
            <section className="p-3 sm:p-6 bg-white/5 border border-white/10 rounded-2xl space-y-4">
              <div className="flex items-center justify-between text-[12px] uppercase font-bold">
                <span className="text-amber-500/60 flex items-center gap-2">
                  <Users className="w-4 h-4" /> Team Format
                </span>
                <span className="text-white">{competition.teamSize}</span>
              </div>
              <div className="flex items-center justify-between text-[12px] uppercase font-bold">
                <span className="text-amber-500/60 flex items-center gap-2">
                  <CreditCard className="w-4 h-4" /> Base Fee (Per Team)
                </span>
                <span className="text-white">₹{competition.fee}</span>
              </div>
            </section>

            <section className="p-3 sm:p-6 bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Trophy className="w-20 h-20 text-amber-500" />
              </div>
              <h3 className="text-[14px] font-black text-amber-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Zap className="w-3 h-3" /> Bounty_Protocol
              </h3>
              <div className="space-y-4">
                {competition.prizes.map((p, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-end border-b border-white/5 pb-2"
                  >
                    <span className="text-[13px] text-gray-500 uppercase italic font-bold">
                      {p.rank}
                    </span>
                    <span className="text-xl font-black text-white italic">
                      ₹{p.amount}
                    </span>
                  </div>
                ))}
                <div className="pt-2 flex justify-between items-center text-amber-500">
                  <span className="text-[11px] font-bold uppercase">
                    Combined Allocation
                  </span>
                  <span className="text-md font-black">
                    ₹{competition.totalPool} Pool
                  </span>
                </div>
              </div>
            </section>

            <button
              onClick={() => {
                if (isLoggedIn)
                  router.push(`/present/registration?competition=analog-verse`);
                else
                  alert(
                    "Please login to register. Login button at botton-right corner.",
                  );
              }}
              className="w-full group relative overflow-hidden bg-amber-500 py-6 rounded-sm transition-transform active:scale-95 shadow-[0_0_30px_rgba(245,158,11,0.2)]"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <div className="relative flex items-center justify-center gap-3 text-black font-black uppercase tracking-[0.4em] text-sm">
                Initiate_Registration <ExternalLink className="w-5 h-5" />
              </div>
            </button>
          </div>

          {/* MIDDLE: ROUNDS & COMPLIANCE */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative">
              <h3 className="text-sm font-bold text-amber-500 uppercase mb-8 flex items-center gap-2">
                <Settings className="w-4 h-4" /> 02_Execution_Roadmap
              </h3>

              <div className="space-y-12 relative">
                <div className="absolute left-2.75 top-2 bottom-2 w-px bg-amber-500/20 border-dashed border-l" />

                {competition.rounds.map((round, i) => (
                  <div key={i} className="relative pl-12">
                    <div className="absolute left-0 top-0 w-5.5 h-5.5 bg-black border-2 border-amber-500 rotate-45 flex items-center justify-center z-10 shadow-[0_0_10px_rgba(245,158,11,0.3)]">
                      <span className="text-[12px] text-amber-500 -rotate-45 font-black">
                        0{i + 1}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-[12px] font-bold bg-amber-500/20 text-amber-500 px-2 py-0.5 uppercase">
                          {round.type}
                        </span>
                        <h4 className="text-white font-black uppercase text-base">
                          {round.name}
                        </h4>
                      </div>
                      <span className="text-[12px] text-amber-500/60 flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> Deadline:{" "}
                        {round.deadline}
                      </span>
                    </div>
                    <div className="bg-white/5 border border-white/5 p-3 sm:p-6 rounded-br-3xl rounded-tl-xl backdrop-blur-sm hover:border-amber-500/30 transition-colors">
                      <div className="flex gap-3 mb-4 text-amber-200/90 italic">
                        <FileText className="w-4 h-4 shrink-0" />
                        <p className="text-[11px] uppercase font-bold leading-tight">
                          Task: {round.task}
                        </p>
                      </div>
                      <p className="text-[12px] text-gray-500 leading-relaxed uppercase tracking-wide border-t border-white/5 pt-4">
                        {round.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <section className="bg-black/60 border border-amber-500/20 rounded-2xl p-6">
              <h3 className="text-[12px] font-black text-amber-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Compliance_Protocol
              </h3>
              <ul className="grid grid-cols-1 gap-3 mb-6">
                {competition.rules.map((rule, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-[11px] text-gray-400 leading-tight uppercase"
                  >
                    <span className="text-amber-500">▶</span> {rule}
                  </li>
                ))}
              </ul>
              <Link
                href={competition.href}
                target="_blank"
                className="text-[11px] text-amber-500 underline uppercase font-bold flex items-center gap-2"
              >
                <FileText className="w-4 h-4" /> Full Problem Statement PDF
              </Link>
            </section>
          </div>

          {/* RIGHT: TECH & SCORING */}
          <div className="lg:col-span-3 space-y-6">
            <div className="p-4 sm:p-8 bg-black/40 border border-white/10 rounded-3xl h-full flex flex-col relative overflow-hidden">
              <div className="flex items-center gap-2 mb-8 relative">
                <Terminal className="w-5 h-5 text-amber-500" />
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">
                  Compiler_Stack
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-3 relative mb-12">
                {competition.software.map((tech, i) => (
                  <div
                    key={i}
                    className="group flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5 hover:bg-amber-500/10 transition-all"
                  >
                    <span className="text-[12px] text-gray-300 font-black uppercase">
                      {tech}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  </div>
                ))}
              </div>

              <div className="space-y-4 relative">
                <div className="text-[12px] text-amber-500/60 uppercase font-black border-b border-amber-500/20 pb-2">
                  Scoring_Matrix
                </div>
                <div className="space-y-4">
                  {competition.judging.map((j, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-[12px] font-bold uppercase tracking-tighter">
                        <span className="text-gray-400">{j.label}</span>
                        <span className="text-amber-500">{j.weight}</span>
                      </div>
                      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: j.weight }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className="h-full bg-amber-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
