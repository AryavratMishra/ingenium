"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Crosshair,
    Shield,
    Zap,
    Target,
    ChevronLeft,
    Users,
    Timer,
    Swords
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function GlitchPopValorant() {
    const router = useRouter();

    return (
        <div className="relative min-h-screen bg-black/30 text-white font-sans overflow-hidden selection:bg-red-500/30">
            {/* Background Ambience - Valorant Style */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-2/3 h-full bg-linear-to-l from-red-600/10 to-transparent skew-x-12" />
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-linear-to-t from-red-900/20 to-transparent" />

                {/* Animated Glitch Lines */}
                <div className="absolute top-1/4 left-0 w-full h-px bg-red-500/30 animate-pulse" />
                <div className="absolute bottom-1/4 right-0 w-full h-px bg-white/10" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto p-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-16 relative">
                    {/* Back Button */}
                    <button
                        onClick={() => router.back()}
                        className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors"
                    >
                        <div className="bg-white/10 p-2 rounded-sm group-hover:bg-red-500 transition-colors">
                            <ChevronLeft className="w-4 h-4" />
                        </div>
                        <span className="text-xs uppercase tracking-[0.2em] font-bold hidden md:block">
                            Back to Protocol
                        </span>
                    </button>

                    {/* Main Title - Vertically Aligned on Mobile, Horizontal on Desktop */}
                    <div className="text-right">
                        <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none text-white mix-blend-difference relative">
                            VALORANT
                            <span className="absolute -top-4 -right-8 text-sm md:text-xl text-red-500 font-bold bg-white px-2 py-1 transform -rotate-12">
                                5v5 TACTICAL
                            </span>
                        </h1>
                        <div className="flex justify-end gap-2 mt-2">
                            <span className="h-2 w-16 bg-red-500" />
                            <span className="h-2 w-4 bg-white/20" />
                            <span className="h-2 w-2 bg-white/20" />
                        </div>
                    </div>
                </div>

                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
                    <div className="lg:col-span-7 space-y-8">
                        <div className="inline-block border-l-4 border-red-500 pl-6">
                            <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wide text-white mb-2">
                                Defy the Limits
                            </h2>
                            <p className="text-gray-400 max-w-md">
                                Filter top 8/16 teams via online knockout for a 3-day LAN final at IIT Indore. Blend your style and experience on a global, competitive stage.
                            </p>
                        </div>

                        <div className="flex gap-6 flex-wrap">
                            <StatBox label="Prize Pool" value="Part of 100K" sub="Cumulative" />
                            <StatBox label="Team Size" value="5 Players" sub="+1 Substitute" />
                            <StatBox label="Mode" value="Online/LAN" sub="Hybrid" />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => router.push("/present/registration?competition=valorant")}
                            className="bg-red-500 hover:bg-white hover:text-red-600 text-white font-black uppercase px-12 py-5 tracking-widest text-lg transition-colors relative overflow-hidden group"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                Enter Protocol <Zap className="w-5 h-5" />
                            </span>
                            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                        </motion.button>
                    </div>

                    {/* Decorative/Visual Side */}
                    <div className="lg:col-span-5 relative">
                        <div className="aspect-video bg-red-500/10 border border-red-500/30 p-2 relative">
                            {/* Crosshair UI */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-30">
                                <div className="w-px h-full bg-red-500" />
                                <div className="h-px w-full bg-red-500 absolute" />
                                <div className="w-32 h-32 border border-red-500 rounded-full" />
                            </div>

                            <div className="absolute bottom-4 left-4 text-xs font-mono text-red-500">
                                <p>SYSTEM_READY</p>
                                <p>MATCH_MAKING: ENABLED</p>
                                <p>PING: 12ms</p>
                            </div>

                            <div className="h-full w-full bg-black/40 flex flex-col justify-center items-center text-center p-8 backdrop-blur-sm">
                                <Swords className="w-16 h-16 text-white mb-4" />
                                <h3 className="text-xl font-bold uppercase tracking-widest text-white">
                                    Format
                                </h3>
                                <p className="text-sm text-gray-400 mt-2">
                                    Bo1 Prelims &rarr; Group Stage (RR) &rarr; Bo3 Semi/Finals
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Agents / Roles Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <RoleCard icon={<Target />} role="Duelist" desc="Self-sufficient fraggers." />
                    <RoleCard icon={<Shield />} role="Sentinel" desc="Defensive experts." />
                    <RoleCard icon={<Users />} role="Controller" desc="Slice up dangerous territory." />
                    <RoleCard icon={<Zap />} role="Initiator" desc="Challenge angles & set up teams." />
                </div>

                {/* Footer */}
                <div className="mt-24 border-t border-white/10 pt-8 flex justify-between items-end">
                    <div>
                        <Link href="/PS/Glitchpop X Ingenium Proposal.pdf" className="text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-widest flex items-center gap-2">
                            <Timer className="w-4 h-4" /> View Full Rulebook
                        </Link>
                    </div>
                    <div className="text-right">
                        <p className="text-4xl font-black text-white/10 uppercase">GLITCHPOP // IITI</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatBox({ label, value, sub }) {
    return (
        <div className="bg-white/5 px-6 py-4 border-l-2 border-white/20">
            <span className="block text-xs uppercase text-gray-500 tracking-wider mb-1">{label}</span>
            <span className="block text-3xl font-black text-white">{value}</span>
            <span className="block text-xs text-red-500 font-bold uppercase">{sub}</span>
        </div>
    )
}

function RoleCard({ icon, role, desc }) {
    return (
        <div className="bg-white/5 p-6 hover:bg-white/10 transition-colors border border-white/5 group">
            <div className="text-red-500 mb-4 group-hover:scale-110 transition-transform">{icon}</div>
            <h4 className="text-lg font-bold uppercase text-white mb-2">{role}</h4>
            <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
        </div>
    )
}

function Link({ href, children, ...props }) {
    return (
        <a href={href} className={props.className} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    )
}
