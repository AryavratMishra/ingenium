"use client";

import React, { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Layers,
  Trophy,
  ChevronLeft,
  Cpu,
  Zap,
  Navigation,
  ExternalLink,
  ShieldAlert,
  Ruler,
  Weight,
  AlertTriangle,
  Users,
  Calendar,
  Wallet,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";

export default function AeroArtistryPS() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const router = useRouter();
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: -30,
        filter: "blur(10px)",
        duration: 1,
        ease: "expo.out",
      });

      gsap.to(".scan-line", {
        top: "100%",
        duration: 4,
        repeat: -1,
        ease: "none",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen text-blue-100 font-mono p-4 md:p-8 bg-black/30"
    >
      {/* HUD Corner Accents */}
      <div className="fixed top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-blue-500/30 rounded-tl-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-blue-500/30 rounded-br-3xl pointer-events-none" />

      <main className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header ref={headerRef} className="mb-16 relative">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
            <div className="space-y-2">
              <button
                onClick={() => router.back()}
                className="flex items-center gap-2 text-blue-500 mb-6 hover:text-blue-400 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="text-[12px] font-bold tracking-[0.5em] uppercase">
                  Return to Competitions
                </span>
              </button>
              <div className="flex items-center gap-3 text-blue-500 mb-2">
                <Cpu className="w-5 h-5 animate-pulse" />
                <span className="text-xs tracking-[0.3em] uppercase font-bold">
                  Aeromodelling Club Presents
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase italic leading-none">
                AERO<span className="text-blue-500">_</span>AIRTISRY
              </h1>
              <p className="max-w-2xl text-xs md:text-sm text-blue-400/70 leading-relaxed uppercase tracking-widest mt-4">
                Aerial Design & Endurance: Fabricate a lightweight, electric RC
                aircraft optimized for maximum glide time and gentle landings.
              </p>
            </div>

            <div className="flex flex-col items-end gap-4">
              <div className="flex gap-4">
                <StatCard
                  icon={<Users className="w-4 h-4" />}
                  label="Team Size"
                  value="1-4 Members"
                />
                <StatCard
                  icon={<Wallet className="w-4 h-4" />}
                  label="Base Fee"
                  value="₹600"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar: Constraints & Rules */}
          <div className="lg:col-span-4 space-y-6">
            <SectionBox title="Technical_Constraints">
              <div className="space-y-4">
                <ConstraintRow
                  icon={<Ruler className="w-4 h-4" />}
                  label="Max Wingspan"
                  value="120 cm "
                />
                <ConstraintRow
                  icon={<Weight className="w-4 h-4" />}
                  label="Max Weight"
                  value="1000g "
                />
                <ConstraintRow
                  icon={<Zap className="w-4 h-4" />}
                  label="Propulsion"
                  value="Electric Only"
                />
                <ConstraintRow
                  icon={<ShieldAlert className="w-4 h-4" />}
                  label="Prohibited"
                  value="Metal Airframe"
                />
              </div>
            </SectionBox>

            <SectionBox title="Scoring_Algorithm">
              <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl mb-4">
                <code className="text-[12px] text-blue-300 leading-loose">
                  TOTAL = (Round_1_Pts) + [(Glide_Time_R3 * 2) - Penalties]
                </code>
              </div>
              <Link
                href="/PS/Glider_Soaring.pdf"
                className="flex items-center gap-2 text-xs text-blue-400 hover:text-white transition-colors uppercase tracking-widest"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Layers className="w-3 h-3" /> View Detailed Protocol
              </Link>
            </SectionBox>

            <div className="p-6 bg-red-900/10 border border-red-500/30 rounded-2xl">
              <h4 className="text-[12px] text-red-400 uppercase mb-3 flex items-center gap-2">
                <AlertTriangle className="w-3 h-3" /> System_Fault_Penalties
              </h4>
              <ul className="text-[12px] space-y-2 text-red-200/60 uppercase">
                <li>▪ Nose-first crash (-20 pts)</li>
                <li>▪ Structural failure on landing (-20 pts)</li>
                <li>▪ Battery/Motor thermal event (-20 pts)</li>
              </ul>
            </div>

            <button
              onClick={() => {
                if (isLoggedIn)
                  router.push(
                    `/present/registration?competition=aero_artistry`,
                  );
                else
                  alert(
                    "Please login to register. Login button at botton-right corner.",
                  );
              }}
              className="w-full py-6 bg-blue-600 text-white rounded-2xl font-black italic tracking-widest flex items-center justify-center gap-3 hover:bg-blue-500 transition-all group overflow-hidden relative shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
              <span className="relative z-10 uppercase">
                Initiate_Registration
              </span>
              <ExternalLink className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>

          {/* Right Main Column: Rounds & Prizes */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white/5 border border-blue-500/20 rounded-3xl p-4 md:p-8 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-8 right-8 text-blue-500/10">
                <Navigation className="w-32 h-32 rotate-45" />
              </div>

              <h3 className="text-xl font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase mb-12 flex items-center gap-4 text-white">
                <Calendar className="text-blue-500 w-5 h-5" /> Mission_Timeline
              </h3>

              <div className="space-y-12">
                {stages.map((stage, idx) => (
                  <div key={idx} className="relative pl-16 group">
                    <div className="absolute left-0 top-0 w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                      <span className="text-sm font-bold text-blue-400">
                        0{idx + 1}
                      </span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                      <h4 className="text-white font-bold uppercase tracking-widest text-base">
                        {stage.title}
                      </h4>
                      <span className="text-[12px] px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/20 self-start uppercase font-bold tracking-tighter">
                        {stage.meta}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                      {stage.details.map((detail, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 text-[13px] text-blue-200/60 uppercase"
                        >
                          <Zap className="w-2.5 h-2.5 text-blue-500" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prize Pool Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {prizes.map((p, i) => (
                <div
                  key={i}
                  className={`p-6 bg-linear-to-br ${p.color} to-transparent border border-white/10 rounded-2xl`}
                >
                  <Trophy className="w-4 h-4 text-blue-400 mb-4" />
                  <div className="text-[12px] text-blue-500 uppercase tracking-tighter mb-1">
                    {p.rank}_REWARD
                  </div>
                  <div className="text-3xl font-black text-white italic tracking-tighter">
                    ₹{p.prize}
                  </div>
                  <div className="text-[12px] text-gray-400 uppercase mt-2">
                    {p.label}{" "}
                  </div>
                </div>
              ))}
            </div>
            <div
              className={`p-6 bg-linear-to-br flex justify-between items-center to-transparent border border-white/10 rounded-2xl`}
            >
              <div className="text-[16px] text-blue-500 uppercase tracking-tighter">
                TOTAL_PRIZE_POOL
              </div>
              <div className="text-4xl font-black text-white italic tracking-tighter">
                ₹20,000
              </div>
              {/* <div className="text-[12px] text-gray-400 uppercase mt-2"></div> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// --- Helper Components ---

function StatCard({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
      <div className="text-blue-500">{icon}</div>
      <div>
        <p className="text-[11px] text-blue-300/50 uppercase tracking-widest">
          {label}
        </p>
        <p className="text-sm font-bold text-white uppercase">{value}</p>
      </div>
    </div>
  );
}

function SectionBox({ title, children }) {
  return (
    <div className="p-8 bg-white/5 border border-white/10 rounded-3xl relative overflow-hidden">
      <div className="text-[12px] text-blue-500 uppercase tracking-[0.4em] mb-4 flex items-center gap-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
        {title}
      </div>
      {children}
    </div>
  );
}

function ConstraintRow({ icon, label, value }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-white/5">
      <div className="flex items-center gap-3 text-blue-400">
        {icon}
        <span className="text-[12px] uppercase text-blue-200/50 tracking-wider">
          {label}
        </span>
      </div>
      <span className="text-[12px] text-white font-bold">{value}</span>
    </div>
  );
}

const stages = [
  {
    title: "Technical Abstract",
    meta: "Online | 8 March",
    details: [
      "Technical Report (Max 5 pages)",
      "Construction Logs & Photos",
      "Component Specification",
      "Creative Analysis",
    ],
  },
  {
    title: "Flight Ops & Finals",
    meta: "Offline | 14 March",
    details: [
      "Min 30s Qualification Flight",
      "60s Climb Window (Round 3)",
      "Pure Gliding (Propellers OFF)",
      "Gentle Zone Landing",
    ],
  },
];

const prizes = [
  {
    rank: "ALPHA",
    prize: "12,000",
    label: "First Place",
    color: "from-yellow-400/20",
  },
  {
    rank: "BETA",
    prize: "5,000",
    label: "Second Place",
    color: "from-gray-400/20",
  },
  {
    rank: "GAMMA",
    prize: "3,000",
    label: "Third Place",
    color: "from-orange-400/20",
  },
];
