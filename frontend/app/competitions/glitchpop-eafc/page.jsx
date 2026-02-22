"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Trophy,
    Users,
    Timer,
    ChevronLeft,
    Gamepad2,
    Flag,
    Activity,
    Award,
    Target
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function GlitchPopEAFC() {
    const router = useRouter();

    return (
        <div className="relative min-h-screen bg-black/30 text-white font-sans overflow-hidden selection:bg-green-500/30">
            {/* Pitch Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,rgba(255,255,255,0.05)_50%,transparent_51%)] bg-size-[10%_100%]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15)_0%,transparent_80%)]" />
                {/* Animated Ball/Spotlight */}
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-green-500/20 blur-[120px] rounded-full animate-pulse" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto p-3 sm:p-6 md:p-12">
                {/* Header - Scoreboard Style */}
                <div className="flex flex-col items-center text-center mb-16">
                    <button
                        onClick={() => router.back()}
                        className="absolute left-6 top-6 md:left-12 md:top-12 flex items-center gap-2 text-green-400/60 hover:text-green-400 transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5" />
                        <span className="text-xs uppercase tracking-widest font-bold">Back</span>
                    </button>

                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="inline-block"
                    >
                        <div className="flex items-center gap-6 mb-4">
                            <span className="text-4xl md:text-6xl font-black text-white/20">IIT</span>
                            <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white to-gray-400 drop-shadow-2xl">
                                EAFC
                            </h1>
                            <span className="text-4xl md:text-6xl font-black text-white/20">IND</span>
                        </div>
                        <div className="bg-green-600 text-black font-black uppercase text-sm tracking-[0.5em] py-1 px-8 rounded-full transform -skew-x-12">
                            Official Kickoff
                        </div>
                    </motion.div>
                </div>

                {/* Player Card Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Wing - Details */}
                    <div className="space-y-6">
                        <StatCard title="Pace" value="99" label="Fast Gameplay" icon={<Activity />} />
                        <StatCard title="Shooting" value="95" label="Precision Goals" icon={<Target />} />
                        <StatCard title="Passing" value="92" label="Team Play" icon={<Users />} />
                    </div>

                    {/* Center - Main Card */}
                    <div className="bg-linear-to-b from-yellow-500/10 to-transparent p-1 rounded-[30px] shadow-[0_0_50px_rgba(34,197,94,0.1)]">
                        <div className="bg-black/40 backdrop-blur-md rounded-[28px] p-4 sm:p-8 h-full flex flex-col items-center text-center border border-yellow-500/20 relative overflow-hidden">
                            <div className="absolute top-0 w-full h-1 bg-linear-to-r from-transparent via-yellow-500 to-transparent" />

                            <Gamepad2 className="w-24 h-24 text-green-400 mb-6 drop-shadow-[0_0_15px_rgba(34,197,94,0.6)]" />

                            <h2 className="text-3xl font-black uppercase italic mb-2">Tournament Mode</h2>
                            <p className="text-sm text-gray-400 mb-8 max-w-xs">
                                Intense offline brackets starting with a 2-day group stage followed by a Bo5 finale. Prove your dominance on the virtual pitch.
                            </p>

                            <div className="w-full bg-white/5 rounded-xl p-4 mb-8">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs uppercase text-gray-500 font-bold">Team Size</span>
                                    <span className="text-green-400 font-bold">1 (Solo)</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs uppercase text-gray-500 font-bold">Prize Pool</span>
                                    <span className="text-yellow-400 font-bold">Part of 100K</span>
                                </div>
                            </div>

                            <button
                                onClick={() => router.push("/registration?competition=eafc")}
                                className="w-full py-4 bg-green-500 hover:bg-green-400 text-black font-black uppercase tracking-widest rounded-xl transition-all shadow-[0_5px_0_rgb(20,83,45)] hover:shadow-[0_2px_0_rgb(20,83,45)] hover:translate-y-0.75"
                            >
                                Start Match
                            </button>
                        </div>
                    </div>

                    {/* Right Wing - Rules */}
                    <div className="space-y-6">
                        <div className="bg-white/5 border border-white/5 rounded-2xl p-3 sm:p-6 hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-3 mb-3">
                                <Timer className="w-6 h-6 text-green-400" />
                                <h3 className="text-lg font-bold uppercase">Format</h3>
                            </div>
                            <p className="text-sm text-gray-400">Group Stage (Bo1) &rarr; Double Elimination Finale (Bo3/Bo5).</p>
                        </div>

                        <div className="bg-white/5 border border-white/5 rounded-2xl p-3 sm:p-6 hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-3 mb-3">
                                <Flag className="w-6 h-6 text-green-400" />
                                <h3 className="text-lg font-bold uppercase">Mode</h3>
                            </div>
                            <p className="text-sm text-gray-400">Offline Matches at IIT Indore.</p>
                        </div>

                        <div className="bg-white/5 border border-white/5 rounded-2xl p-3 sm:p-6 hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-3 mb-3">
                                <Award className="w-6 h-6 text-green-400" />
                                <h3 className="text-lg font-bold uppercase">Console</h3>
                            </div>
                            <p className="text-sm text-gray-400">Played on PS5/Xbox Series X at IIT Indore Campus.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Target Icon */}
            <div className="fixed bottom-12 right-12 opacity-20 animate-spin-slow pointer-events-none">
                <Target className="w-32 h-32 text-white" />
            </div>
        </div>
    );
}

function StatCard({ title, value, label, icon }) {
    return (
        <div className="flex items-center justify-between bg-black/20 border border-white/5 p-4 rounded-xl">
            <div>
                <div className="text-3xl font-black italic text-green-500">{value}</div>
                <div className="text-xs uppercase font-bold text-gray-400">{title}</div>
            </div>
            <div className="text-right">
                <div className="text-white/20 mb-1">{icon}</div>
                <div className="text-[10px] text-gray-500 uppercase">{label}</div>
            </div>
        </div>
    )
}

function TargetIcon() {
    return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    )
}
