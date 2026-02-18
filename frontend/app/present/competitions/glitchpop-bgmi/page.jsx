"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Crosshair,
    MapPin,
    Skull,
    Shield,
    Trophy,
    ChevronLeft,
    Swords,
    Timer,
    Users,
    Target
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function GlitchPopBGMI() {
    const router = useRouter();

    return (
        <div className="relative min-h-screen bg-black/30 text-orange-50 font-mono overflow-hidden selection:bg-orange-500/30">
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1)_0%,transparent_70%)]" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay" />
                {/* Animated Radar Line */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="w-[200%] h-0.5 bg-linear-to-r from-transparent via-orange-500/50 to-transparent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite]" />
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto p-6 md:p-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div className="space-y-4">
                        <button
                            onClick={() => router.back()}
                            className="flex items-center gap-2 text-orange-400/60 hover:text-orange-400 transition-colors group"
                        >
                            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-xs uppercase tracking-[0.3em] font-bold">
                                Abort Mission
                            </span>
                        </button>
                        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-yellow-200 to-orange-400 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                            BGMI
                        </h1>
                        <div className="flex items-center gap-4">
                            <span className="bg-orange-600/20 border border-orange-500/50 px-3 py-1 text-xs font-bold text-orange-400 uppercase tracking-widest rounded-sm">
                                Battle Royale
                            </span>
                            <span className="text-xs text-orange-500/50 uppercase tracking-[0.2em]">
                                GlitchPop x Ingenium
                            </span>
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => router.push("/present/registration?competition=bgmi")}
                        className="relative group bg-orange-600 hover:bg-orange-500 text-black px-12 py-4 font-black uppercase tracking-widest clip-path-polygon transition-all shadow-[0_0_30px_rgba(249,115,22,0.4)]"
                        style={{
                            clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)",
                        }}
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            Deploy Squad <Crosshair className="w-5 h-5" />
                        </span>
                    </motion.button>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Briefing */}
                    <div className="lg:col-span-2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-black/40 border border-orange-500/20 p-8 rounded-3xl backdrop-blur-sm relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <MapPin className="w-32 h-32 text-orange-500" />
                            </div>
                            <h2 className="text-3xl font-black uppercase italic mb-6 text-white">
                                Mission Briefing
                            </h2>
                            <p className="text-orange-100/80 leading-relaxed text-lg mb-6">
                                Point-based final standings for the top 8-16 teams following online qualification. Survive the shrinking zone, loot top-tier gear, and outgun your rivals to claim the <span className="text-orange-400 font-bold">Chicken Dinner</span>.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <InfoCard icon={<Trophy />} label="Prize Pool" value="Part of 100K" sub="Cumulative Pool" color="text-yellow-400" />
                                <InfoCard icon={<Users />} label="Team Size" value="4 Players" sub="+1 Substitute" />
                                <InfoCard icon={<Swords />} label="Mode" value="Online Prelims" sub="& Offline LAN" />
                                <InfoCard icon={<Shield />} label="Format" value="Online Knockout" sub="-> Point System Finals" />
                            </div>
                        </motion.div>

                        {/* Rules / Format */}
                        <div className="bg-orange-950/20 border border-orange-500/10 p-8 rounded-3xl">
                            <h3 className="text-xl font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
                                <Timer className="w-5 h-5 text-orange-500" /> Tournament Phases
                            </h3>
                            <div className="space-y-6">
                                <Phase step="01" title="Online Knockout" desc="Elimination rounds to filter the best squads." />
                                <Phase step="02" title="Semi-Finals" desc="Intense battles to qualify for the main event." />
                                <Phase step="03" title="Grand Finals" desc="Multi-Match Point System Finals at IIT Indore." highlighted />
                            </div>
                        </div>
                        <h3 className="text-4xl font-black text-white italic mb-1">KILL</h3>
                        <span className="text-xs text-orange-400 uppercase tracking-[0.3em]">Points Matter</span>
                        <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                            <div>
                                <span className="block text-2xl font-bold text-white">1 Pts</span>
                                <span className="text-[10px] uppercase text-gray-500">Per Kill</span>
                            </div>
                            <div>
                                <span className="block text-2xl font-bold text-white">15 Pts</span>
                                <span className="text-[10px] uppercase text-gray-500">Chicken Dinner</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-neutral-900 border border-white/10 p-6 rounded-3xl">
                    <h4 className="text-xs font-bold uppercase text-gray-500 tracking-widest mb-4">Loot Box</h4>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-sm text-gray-300">
                            <Target className="w-4 h-4 text-orange-500" />
                            <span>Certificates for Finalists</span>
                        </li>
                        <li className="flex items-center gap-3 text-sm text-gray-300">
                            <Target className="w-4 h-4 text-orange-500" />
                            <span>Exclusive Merch for Winners</span>
                        </li>
                        <li className="flex items-center gap-3 text-sm text-gray-300">
                            <Target className="w-4 h-4 text-orange-500" />
                            <span>mvp Awards</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

function InfoCard({ icon, label, value, sub, color = "text-white" }) {
    return (
        <div className="bg-white/5 p-4 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-colors">
            <div className="p-3 bg-black/40 rounded-lg text-orange-500">{icon}</div>
            <div>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider block">{label}</span>
                <span className={`text-lg font-bold ${color}`}>{value}</span>
                {sub && <span className="text-[10px] text-gray-500 block">{sub}</span>}
            </div>
        </div>
    );
}

function Phase({ step, title, desc, highlighted }) {
    return (
        <div className={`flex gap-4 ${highlighted ? "opacity-100" : "opacity-80"} hover:opacity-100 transition-opacity`}>
            <span className="text-4xl font-black text-orange-500/20">{step}</span>
            <div>
                <h4 className={`text-lg font-bold uppercase ${highlighted ? "text-orange-400" : "text-white"}`}>{title}</h4>
                <p className="text-sm text-gray-400">{desc}</p>
            </div>
        </div>
    );
}
