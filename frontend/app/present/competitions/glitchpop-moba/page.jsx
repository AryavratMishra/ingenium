"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Sword,
    Shield,
    Zap,
    Gem,
    ChevronLeft,
    Crown,
    Scroll,
    Map
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function GlitchPopMOBA() {
    const router = useRouter();

    return (
        <div className="relative min-h-screen bg-[#0f0518] text-purple-50 font-serif overflow-hidden selection:bg-purple-500/30">
            {/* Mystical Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(147,51,234,0.15),transparent_70%)]" />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-transparent to-transparent" />

                {/* Floating Particles (CSS Animation usually, static here for simplicity) */}
                <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full blur-[2px] animate-pulse" />
                <div className="absolute top-40 right-40 w-3 h-3 bg-yellow-400 rounded-full blur-[4px] animate-ping" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto p-8">
                {/* Navigation */}
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-purple-300/60 hover:text-purple-300 transition-colors mb-12"
                >
                    <ChevronLeft className="w-5 h-5" />
                    <span className="text-xs uppercase tracking-[0.2em] font-sans">Return to Realm</span>
                </button>

                {/* Hero Section */}
                <div className="text-center mb-16 relative">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block border border-purple-500/30 bg-purple-900/10 px-6 py-2 rounded-full mb-6 backdrop-blur-sm">
                            <span className="text-xs font-sans uppercase tracking-[0.3em] text-yellow-500 font-bold">
                                The Grand Arena
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-purple-200 via-purple-400 to-purple-800 drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]">
                            MOBA Legends
                        </h1>
                        <p className="mt-6 text-purple-200/60 max-w-2xl mx-auto text-lg leading-relaxed font-sans">
                            Assemble your champions. Dominate the lanes. Destroy the enemy nexus.
                            The battlefield awaits the strongest summoners.
                        </p>
                    </motion.div>

                    {/* Runes Decoration */}
                    <div className="hidden md:block absolute top-1/2 left-10 -translate-y-1/2 opacity-20">
                        <Gem className="w-24 h-24 text-purple-500 animate-spin-slow" />
                    </div>
                    <div className="hidden md:block absolute top-1/2 right-10 -translate-y-1/2 opacity-20">
                        <Crown className="w-24 h-24 text-yellow-500 animate-bounce-slow" />
                    </div>
                </div>

                {/* Main Content Areas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <FeatureCard
                        title="Format"
                        desc="Bo1 Knockout -> Group Stage -> Single Elimination Finals. Orchestrated group league format leading to a grand final on Day 3."
                        icon={<Map className="w-8 h-8 text-purple-400" />}
                    />
                    <FeatureCard
                        title="Team Composition"
                        desc="5 Players + 1 Substitute. Ban powerful heroes. Pick your counters. Build the ultimate composition."
                        icon={<Scroll className="w-8 h-8 text-yellow-400" />}
                        highlight
                    />
                    <FeatureCard
                        title="Mode"
                        desc="Online Prelims & Offline LAN. A share of the massive prize pool of Part of 100K Cumulative Pool awaits the victor."
                        icon={<Gem className="w-8 h-8 text-purple-400" />}
                    />
                </div>

                {/* Registration CTA - Magical Button */}
                <div className="flex justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05, textShadow: "0 0 8px rgb(255,255,255)" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => router.push("/present/registration?competition=moba")}
                        className="relative group px-12 py-5 bg-purple-900 overflow-hidden rounded-full border border-purple-500/50 shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="relative z-10 flex items-center gap-3 font-sans font-bold uppercase tracking-widest text-white">
                            Summon Team <Sword className="w-5 h-5 fill-current" />
                        </span>
                    </motion.button>
                </div>

                {/* Footer/Details */}
                <div className="mt-20 border-t border-purple-500/20 pt-10 text-center font-sans">
                    <div className="flex justify-center gap-8 text-sm text-purple-300/50 uppercase tracking-widest">
                        <span>Online Qualifiers</span>
                        <span>•</span>
                        <span>Offline Finals</span>
                        <span>•</span>
                        <span>₹100K Pool</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function FeatureCard({ title, desc, icon, highlight }) {
    return (
        <div className={`p-8 rounded-2xl border backdrop-blur-sm transition-transform hover:-translate-y-2 ${highlight ? "bg-purple-900/20 border-purple-500/40" : "bg-black/20 border-white/5"}`}>
            <div className="mb-6 p-4 rounded-full bg-black/30 inline-block">
                {icon}
            </div>
            <h3 className={`text-xl font-bold uppercase tracking-wide mb-3 ${highlight ? "text-yellow-400" : "text-white"}`}>
                {title}
            </h3>
            <p className="text-purple-200/60 leading-relaxed font-sans text-sm">
                {desc}
            </p>
        </div>
    )
}
