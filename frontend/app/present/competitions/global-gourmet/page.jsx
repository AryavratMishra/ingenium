"use client";

import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Database,
  BarChart3,
  MessageSquareCode,
  Users,
  TrendingUp,
  Activity,
  Zap,
  ShieldCheck,
  ChevronLeft,
  Globe,
  Cpu,
  Link as LinkIcon,
  Target,
  Rocket,
  FileWarning,
  Users2,
  Trophy,
  CreditCard,
  Layers,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";

export default function AnalyticXPS() {
  const [activePhase, setActivePhase] = useState(0);
  const router = useRouter();
  const { isLoggedIn } = useContext(AuthContext);

  const phases = [
    {
      id: "I",
      title: "Data Synthesis",
      icon: <Database className="w-5 h-5" />,
      tagline: "ARCHITECTURAL INTEGRITY",
      task: "Construct a robust ETL pipeline to resolve entity resolution problems and handle the 'messy' reality of enterprise data.",
      details: [
        "Transactional Logs (SQL): Resolve duplicate entries and inconsistent time zones.",
        "Restaurant Metadata (JSON): Integrate coordinates, prep times, and cuisine categories.",
        "Courier Telemetry (CSV): Process high-frequency GPS pings to map to order cycles.",
        "Entity Resolution: Sync timestamps drifting by up to 180 seconds for a 'Golden Table'.",
      ],
    },
    {
      id: "II",
      title: "Spatio-Temporal ETA",
      icon: <BarChart3 className="w-5 h-5" />,
      tagline: "HIGH-FIDELITY REGRESSION",
      task: "Build a high-fidelity regression model to predict Total Delivery Duration beyond simple distance logic.",
      details: [
        "Kitchen Lag: Calculate difference between order placement and driver pickup time.",
        "Travel Decay: Engineer features to capture impact of peak-hour congestion.",
        "External Context: Integrate Weather and local environmental disruptions.",
        "Success Metric: Minimize Mean Absolute Error (MAE) and extreme lateness outliers.",
      ],
    },
    {
      id: "III",
      title: "Linguistic Intelligence",
      icon: <MessageSquareCode className="w-5 h-5" />,
      tagline: "TOPIC MINING & CAUSALITY",
      task: "Unlock insights from over 50,000 daily unstructured text reviews.",
      details: [
        "Sentiment Classification: Categorize reviews as Satisfied, Neutral, or Dissatisfied.",
        "Topic Modeling: Use LDA/BERTopic to identify grievances like Cold Food or Missing Items.",
        "Causal Linkage: Quantify relationship between ETA error and 1-star review probability.",
      ],
    },
    {
      id: "IV",
      title: "Churn Propensity",
      icon: <Users className="w-5 h-5" />,
      tagline: "PREDICTIVE RETENTION",
      task: "Build a binary classification model to identify users at risk of leaving the platform.",
      details: [
        "Feature Set: Analyze historical lateness and 90-day behavior shifts.",
        "Recall Priority: Ensure at-risk customers are not missed by the model.",
        "Explainability: Use SHAP or LIME to justify and explain specific churn predictions.",
      ],
    },
    {
      id: "V",
      title: "Economic Optimization",
      icon: <TrendingUp className="w-5 h-5" />,
      tagline: "DYNAMIC SURGE LOGIC",
      task: "Design a Prescriptive Dynamic Surge Pricing Algorithm to balance the network.",
      details: [
        "Dynamic Surge: Balance demand and supply during peak windows.",
        "Price Elasticity: Maximize platform revenue through demand-sensitive pricing.",
        "Retention Guardrail: Ensure churn propensity does not increase by >2% per segment.",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen text-cyan-100 font-mono p-4 md:p-8 bg-black/30">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- TOP HUD --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-cyan-500/30 pb-8">
          <div>
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-cyan-500 hover:text-cyan-300 transition-colors mb-2 group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[12px] font-bold tracking-[0.4em] uppercase">
                Return to Competitions
              </span>
            </button>
            <h1 className="text-5xl font-black tracking-tighter text-white">
              GLOBAL <span className="text-cyan-500">GOURMET</span>
            </h1>
            <p className="text-cyan-500/60 text-sm mt-2 tracking-widest uppercase flex items-center gap-2">
              <Globe className="w-3 h-3" /> Global Gourmet Case Study Challenge
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex flex-col items-end gap-3">
            <div className="text-right">
              <p className="text-[12px] text-cyan-500/50 uppercase tracking-widest">
                Organized By
              </p>
              <p className="text-xl font-black text-white">CFA</p>
            </div>
            <button
              onClick={() => {
                if (isLoggedIn)
                  router.push(
                    `/present/registration?competition=global-gourmet`,
                  );
                else
                  alert(
                    "Please login to register. Login button at botton-right corner.",
                  );
              }}
              className="px-8 py-4 bg-cyan-500 text-black font-black text-sm rounded-sm -skew-x-12 hover:bg-white transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center gap-2"
            >
              <Rocket className="w-4 h-4" /> REGISTER_TASKFORCE
            </button>
          </div>
        </div>

        {/* --- MISSION BRIEF & STATS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 p-6 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 backdrop-blur-md relative overflow-hidden">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 italic">
              <Cpu className="w-5 h-5 text-cyan-500" /> MISSION_OVERVIEW
            </h3>
            <p className="text-sm leading-relaxed text-cyan-100/70">
              Global Gourmet, a multi-billion-dollar food-tech aggregator,
              requires a multi-stage predictive system. Your mission: stabilize
              growth by solving last-mile delivery inefficiencies.
            </p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <StatCard
                icon={<Layers className="w-4 h-4" />}
                label="Rounds"
                value="1"
              />
              <StatCard
                icon={<Users2 className="w-4 h-4" />}
                label="Format"
                value="Team (1-2)"
              />
              <StatCard
                icon={<Globe className="w-4 h-4" />}
                label="Mode"
                value="Online"
              />
              <StatCard
                icon={<CreditCard className="w-4 h-4" />}
                label="Base Fee"
                value="₹350"
              />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20 flex flex-col">
            <h4 className="text-[12px] text-red-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <FileWarning className="w-3 h-3" /> RULES_&_COMPLIANCE
            </h4>
            <ul className="text-[12px] space-y-2 text-red-100/60 uppercase mb-4">
              <li>
                <Zap className="inline w-2 h-2 mr-2" /> Rules subject to
                organizer discretion.
              </li>
              <li>
                <Zap className="inline w-2 h-2 mr-2" /> 50,000+ daily reviews to
                be processed.
              </li>
              <li>
                <Zap className="inline w-2 h-2 mr-2" /> Adhere strictly to
                format.
              </li>
            </ul>
            <Link
              href={"/PS/AnalyticX.pdf"}
              target="_blank"
              className="mt-auto text-center py-2 border border-red-500/40 text-red-400 hover:bg-red-500/10 transition-all text-[13px] font-bold tracking-widest uppercase"
            >
              DOWNLOAD_FULL_BRIEF
            </Link>
          </div>
        </div>

        {/* --- PHASE SELECTOR & CONTENT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-[12px] text-cyan-500/50 uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
              <Activity className="w-3 h-3" /> TECHNICAL_PHASES
            </h3>
            {phases.map((phase, idx) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(idx)}
                className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
                  activePhase === idx
                    ? "bg-cyan-500/10 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                    : "bg-black/20 border-white/5 hover:border-cyan-500/30"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`text-xl font-black ${activePhase === idx ? "text-cyan-400" : "text-gray-700"}`}
                  >
                    {phase.id}
                  </span>
                  <div className="text-left">
                    <div
                      className={`text-sm font-bold uppercase tracking-widest ${activePhase === idx ? "text-white" : "text-gray-500"}`}
                    >
                      {phase.title}
                    </div>
                  </div>
                </div>
                {activePhase === idx && (
                  <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />
                )}
              </button>
            ))}
          </div>

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-black/60 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-xl h-full flex flex-col"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-cyan-500/20 rounded-full text-cyan-400 ring-1 ring-cyan-500/50">
                      {phases[activePhase].icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-black uppercase tracking-tighter text-white">
                        Phase_{phases[activePhase].id}
                      </h2>
                      <p className="text-[12px] text-cyan-500 tracking-[0.2em]">
                        {phases[activePhase].tagline}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[12px] text-gray-500 uppercase">
                      Success_Metric
                    </div>
                    <div className="text-xl font-black text-cyan-500 uppercase">
                      {activePhase === 1
                        ? "MAE"
                        : activePhase === 3
                          ? "Recall"
                          : "Rigor"}
                    </div>
                  </div>
                </div>

                <div className="mb-8 p-6 bg-cyan-950/30 border-r-4 border-cyan-500 rounded-lg">
                  <p className="text-md text-cyan-100/90 leading-relaxed italic">
                    {phases[activePhase].task}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 grow">
                  {phases[activePhase].details.map((detail, i) => (
                    <div
                      key={i}
                      className="group flex items-start gap-3 p-4 bg-white/5 border border-white/5 rounded-lg text-[14px] leading-relaxed text-gray-400 hover:border-cyan-500/30 transition-all"
                    >
                      <Zap className="w-3 h-3 text-cyan-500 shrink-0 mt-1" />
                      {detail}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* --- DATASETS & EVALUATION --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 bg-black/40 border border-white/10 rounded-2xl">
            <h4 className="text-[12px] text-cyan-500 uppercase tracking-widest mb-6 flex items-center gap-2">
              <Activity className="w-3 h-3" /> EVALUATION_WEIGHTS
            </h4>
            <div className="space-y-5">
              <ScoreBar
                label="ETL Resilience"
                percent={20}
                desc="Cleaning & Entity Resolution"
              />
              <ScoreBar
                label="Predictive Accuracy"
                percent={30}
                desc="ETA & Churn Performance"
              />
              <ScoreBar
                label="Explainability"
                percent={25}
                desc="SHAP/LIME Rigor"
              />
              <ScoreBar
                label="Business Logic"
                percent={25}
                desc="Surge Pricing Strategy"
              />
            </div>
          </div>

          <div className="p-6 bg-black/40 border border-white/10 rounded-2xl">
            <h4 className="text-[12px] text-cyan-500 uppercase tracking-widest mb-6 flex items-center gap-2">
              <LinkIcon className="w-3 h-3" /> REFERENCE_DATA
            </h4>
            <div className="space-y-4">
              <DatasetLink
                name="Yelp Core (Reviews)"
                url="https://yelp.com/dataset"
              />
              <DatasetLink
                name="NYC TLC (Logistics)"
                url="https://www.nyc.gov/site/tlc/about/tlc-trip-record-data.page"
              />
              <DatasetLink
                name="Open-Meteo (Weather)"
                url="https://open-meteo.com/"
              />
              <p className="text-[13px] text-cyan-500/40 leading-tight italic mt-2">
                Note: Creativity in data sourcing is highly rewarded.
              </p>
            </div>
          </div>

          <div className="p-6 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl relative overflow-hidden flex flex-col justify-between shadow-[0_0_30px_rgba(6,182,212,0.1)]">
            <h4 className="text-[12px] text-cyan-400 uppercase tracking-widest mb-6 flex items-center gap-2">
              <Trophy className="w-3 h-3" /> MISSION_BOUNTY
            </h4>
            <div className="grid grid-cols-3 gap-2 mb-8">
              <PrizeItem rank="1ST" amount="5,000" />
              <PrizeItem rank="2ND" amount="3,000" />
              <PrizeItem rank="3RD" amount="2,000" />
            </div>
            <div className="pt-6 border-t border-cyan-500/20">
              <div className="flex justify-between items-center">
                <span className="text-[12px] text-cyan-500/60 uppercase">
                  Total_Pool
                </span>
                <span className="text-3xl font-black text-white tracking-tighter">
                  ₹10,000
                </span>
              </div>
              <button
                onClick={() => {
                  if (isLoggedIn)
                    router.push(
                      `/present/registration?competition=global-gourmet`,
                    );
                  else
                    alert(
                      "Please login to register. Login button at botton-right corner.",
                    );
                }}
                className="mt-4 w-full py-3 bg-cyan-500 text-black font-black text-[12px] uppercase tracking-widest hover:bg-white transition-all"
              >
                INITIATE_DEPLOYMENT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- HELPER COMPONENTS ---

function StatCard({ icon, label, value }) {
  return (
    <div className="bg-black/40 p-3 border border-white/10 rounded-lg">
      <div className="flex items-center gap-2 text-cyan-500 mb-1">
        {icon}
        <span className="text-[9px] uppercase tracking-tighter">{label}</span>
      </div>
      <div className="text-sm text-white font-bold">{value}</div>
    </div>
  );
}

function ScoreBar({ label, percent, desc }) {
  return (
    <div>
      <div className="flex justify-between text-[12px] mb-1 font-bold">
        <span className="text-gray-300 uppercase">{label}</span>
        <span className="text-cyan-500">{percent}%</span>
      </div>
      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          className="h-full bg-cyan-500"
        />
      </div>
      <p className="text-[12px] text-gray-600 mt-1 uppercase">{desc}</p>
    </div>
  );
}

function DatasetLink({ name, url }) {
  return (
    <Link
      href={url}
      target="_blank"
      className="flex items-center justify-between p-2 bg-white/5 rounded hover:bg-cyan-500/10 transition-colors border border-transparent hover:border-cyan-500/20"
    >
      <div className="flex flex-col">
        <span className="text-[12px] text-white font-bold truncate w-40">
          {name}
        </span>
        <span className="text-[12px] text-cyan-500/60 truncate w-32">
          {url}
        </span>
      </div>
      <LinkIcon className="w-3 h-3 text-cyan-500" />
    </Link>
  );
}

function PrizeItem({ rank, amount }) {
  return (
    <div className="text-center p-2 bg-black/40 border border-white/5 rounded-lg">
      <div className="text-[12px] text-cyan-500/60 mb-1 font-bold">{rank}</div>
      <div className="text-md font-black text-white italic">₹{amount}</div>
    </div>
  );
}
