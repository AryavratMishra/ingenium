"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Play, Calendar, MapPin, Clock } from "lucide-react";

export default function AnchorSessionPage() {
    const router = useRouter();

    const eventData = {
        title: "Anchor Session",
        date: "14-15 March 2026",
        time: "19:30 - 20:00",
        venue: "NCC Ground",
        theme: {
            bg: "from-blue-900/60 to-black",
            accent: "text-blue-400",
            border: "border-blue-400/30",
            buttonBg: "bg-blue-500",
            glow: "shadow-[0_0_40px_rgba(96,165,250,0.4)]",
        },
        description: `The evening's master protocol. Our hosts take the stage to guide you through the night's high-energy performances, announce competition results, and keep the crowd surging with anticipation.

Expect engaging interactions, surprise announcements, and the seamless transition between the festival's biggest acts. The Anchor Session is the connective tissue of the Ingenium night.`,
        tags: ["HOSTING", "ANNOUNCEMENTS", "STAGE"],
        backgroundElements: (
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                {/* Spotlight arcs */}
                <div className="absolute bottom-[-20%] left-[20%] w-[40%] h-[150%] bg-gradient-to-t from-blue-500/20 to-transparent blur-2xl origin-bottom animate-[spotlight-swing_8s_ease-in-out_infinite]" />
                <div className="absolute bottom-[-20%] right-[20%] w-[40%] h-[150%] bg-gradient-to-t from-blue-400/20 to-transparent blur-2xl origin-bottom animate-[spotlight-swing_10s_ease-in-out_infinite_reverse]" />

                {/* Audio wave ping */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-blue-400/30 animate-[ping-slow_2s_infinite]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-blue-500/10 animate-[ping-slow_2.5s_infinite_0.5s]" />
            </div>
        ),
    };

    const { theme } = eventData;

    return (
        <div className={`min-h-screen bg-black text-white font-mono overflow-x-hidden selection:bg-white/20 relative w-full pt-24 pb-24`}>
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className={`absolute inset-0 bg-gradient-to-b ${theme.bg} opacity-50`} />
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:40px_40px]" />
            </div>

            {eventData.backgroundElements}

            <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => router.back()}
                className="fixed top-6 left-6 z-50 flex items-center gap-3 px-4 py-2 border border-white/20 bg-black/50 backdrop-blur-md rounded-sm text-xs font-bold uppercase tracking-widest text-white/70 hover:text-white hover:border-white/50 transition-all group"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Return
            </motion.button>

            <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mt-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="lg:col-span-5 flex flex-col justify-center"
                >
                    <div className="flex flex-wrap gap-2 mb-6">
                        {eventData.tags.map(tag => (
                            <span key={tag} className={`text-[10px] tracking-[0.2em] font-bold px-3 py-1 border ${theme.border} ${theme.accent} bg-black/40 rounded-sm`}>
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className={`text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-8 ${theme.accent} ${theme.glow}`}>
                        {eventData.title}
                    </h1>

                    <div className="flex flex-col gap-4 mb-8 text-white/80 border-l border-white/20 pl-6">
                        <div className="flex items-center gap-3">
                            <Calendar className={`w-5 h-5 ${theme.accent}`} />
                            <span className="tracking-widest uppercase font-semibold text-sm">{eventData.date}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Clock className={`w-5 h-5 ${theme.accent}`} />
                            <span className="tracking-widest uppercase font-semibold text-sm">{eventData.time}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin className={`w-5 h-5 ${theme.accent}`} />
                            <span className="tracking-widest uppercase font-semibold text-sm">{eventData.venue}</span>
                        </div>
                    </div>

                    <div className="prose prose-invert max-w-none">
                        <p className="text-white/60 leading-relax tracking-wide text-sm whitespace-pre-line md:text-base border-t border-white/10 pt-6">
                            {eventData.description}
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="lg:col-span-7 flex flex-col justify-center"
                >
                    <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden">
                        {/* Background aura */}
                        <div className={`absolute inset-10 rounded-full blur-[80px] ${theme.bg} opacity-50`} />

                        {/* Geometric wireframe lines */}
                        <div className={`absolute inset-4 md:inset-10 rounded-full border border-dashed ${theme.border} animate-[spin_40s_linear_infinite] opacity-30`} />
                        <div className={`absolute inset-12 md:inset-20 rounded-full border ${theme.border} animate-[spin_30s_linear_infinite_reverse] opacity-40`} />

                        <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        <div className="absolute inset-y-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                        {/* Central Core element */}
                        <div className={`z-10 w-40 h-40 md:w-56 md:h-56 rounded-full border border-white/10 ${theme.buttonBg} bg-opacity-5 backdrop-blur-md flex flex-col items-center justify-center ${theme.glow}`}>
                            <div className={`text-3xl md:text-5xl font-black italic tracking-widest text-center leading-none ${theme.accent}`}>
                                ING<br /><span className="text-white/80">2026</span>
                            </div>
                            <div className="text-[8px] md:text-[10px] mt-4 uppercase tracking-[0.3em] text-white/50 text-center px-4">
                                {eventData.title.split('\n')[0]}
                            </div>
                        </div>

                        {/* Floating data nodes */}
                        <div className={`absolute top-1/4 left-1/4 w-2 h-2 rounded-full ${theme.buttonBg} animate-ping`} />
                        <div className={`absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full ${theme.buttonBg} animate-ping`} style={{ animationDelay: '1s' }} />
                    </div>

                    <div className="mt-8 text-center max-w-sm mx-auto flex flex-col items-center border-t border-white/5 pt-6">
                        <h3 className={`text-sm md:text-base font-bold uppercase tracking-[0.2em] mb-3 ${theme.accent}`}>
                            Event Protocol Active
                        </h3>
                        <p className="text-xs text-white/40 leading-relaxed font-mono">
                            The central timeline routing is locked. Participant synchronization initiated. Prepare for mainstage execution sequence.
                        </p>
                    </div>

                    <div className="mt-4 flex justify-between items-center text-[10px] text-white/30 uppercase tracking-[0.2em] px-2 font-bold">
                        <span>{eventData.video ? "Video_Proxy_Active" : "Video_Proxy_Loaded"}</span>
                        <span>ID:ANC_SES_07</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
