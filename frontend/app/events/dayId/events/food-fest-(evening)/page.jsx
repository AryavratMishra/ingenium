"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Play, Calendar, MapPin, Clock } from "lucide-react";

export default function FoodFestEveningPage() {
    const router = useRouter();

    const eventData = {
        title: "Food Fest (Evening)",
        date: "14-15 March 2026",
        time: "19:00 - 21:00",
        venue: "NCC Ground",
        video: "/events_videos/ff2.mp4",
        theme: {
            bg: "from-emerald-900/40 to-black",
            accent: "text-emerald-500",
            border: "border-emerald-500/30",
            buttonBg: "bg-emerald-600",
            glow: "shadow-[0_0_40px_rgba(16,185,129,0.3)]",
        },
        description: `The night-time culinary protocol. As the daytime expositions power down, the Food Fest transitions to the NCC Ground, offering a vibrant atmosphere complete with ambient lighting and music.

Gather with fellow participants, share stories from the day's competitions, and enjoy an expanded menu of evening specials under the stars. Proper nutrition is critical for optimal next-day performance.`,
        tags: ["FESTIVAL", "CATERING", "EVENING"],
        backgroundElements: (
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-end">
                {/* Steam Bubbles - Slower for evening mood */}
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full border border-emerald-500/10 flex items-center justify-center animate-[float-up_6s_ease-in_infinite]"
                        style={{
                            width: Math.random() * 50 + 20 + "px",
                            height: Math.random() * 50 + 20 + "px",
                            bottom: "-15%",
                            left: Math.random() * 100 + "%",
                            animationDuration: `${Math.random() * 5 + 5}s`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    >
                        <div
                            className="rounded-full bg-emerald-500/10"
                            style={{ width: "30%", height: "30%" }}
                        />
                    </div>
                ))}
                {/* Flickering ambient lights */}
                <div className="absolute top-[20%] right-[20%] w-64 h-64 bg-emerald-500/10 blur-[80px] animate-pulse" />
                <div className="absolute top-[50%] left-[10%] w-48 h-48 bg-emerald-700/10 blur-[60px] animate-[pulse_4s_infinite]" />
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
                    <div className={`relative w-full max-w-sm mx-auto aspect-[9/16] bg-[#050505] rounded-lg border ${theme.border} ${theme.glow} overflow-hidden group/video cursor-pointer`}>

                        {eventData.video ? (
                            <video
                                src={eventData.video}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover/video:opacity-100 transition-opacity duration-500"
                            />
                        ) : (
                            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_25%,rgba(255,255,255,0.03)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.03)_75%,rgba(255,255,255,0.03)_100%)] bg-[length:20px_20px] pointer-events-none" />
                        )}

                        <div className="absolute top-4 left-4 flex gap-2 items-center z-10">
                            <div className={`w-2 h-2 rounded-full ${eventData.video ? "bg-green-500 animate-pulse" : "bg-red-500 animate-pulse"}`} />
                            <span className={`text-[10px] uppercase font-bold tracking-[0.2em] ${eventData.video ? "text-green-500/80" : "text-red-500/80"}`}>REC</span>
                        </div>

                        <div className="absolute top-4 right-4 text-[10px] uppercase font-bold tracking-[0.3em] text-white/50 z-10 backdrop-blur-sm bg-black/20 px-2 py-1 rounded">
                            {eventData.video ? "SYS.REC_ACTIVE" : "SYS.REC_STANDBY"}
                        </div>

                        {!eventData.video && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover/video:bg-black/20 transition-all duration-500 z-10">
                                <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md group-hover/video:scale-110 group-hover/video:border-white/50 transition-all duration-500 ${theme.buttonBg} bg-opacity-20`}>
                                    <Play className={`w-8 h-8 md:w-10 md:h-10 text-white ml-2 ${theme.glow}`} />
                                </div>
                            </div>
                        )}

                        <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 ${theme.border} pointer-events-none z-20`}></div>
                        <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 ${theme.border} pointer-events-none z-20`}></div>

                    </div>

                    <div className="mt-4 flex justify-between items-center text-[10px] text-white/30 uppercase tracking-[0.2em] px-2 font-bold">
                        <span>{eventData.video ? "Video_Proxy_Active" : "Video_Proxy_Loaded"}</span>
                        <span>ID:FOD_E_006</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
