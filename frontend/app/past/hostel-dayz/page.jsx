"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PageTransitionWrapper } from "@/components/chronoverse";

gsap.registerPlugin(ScrollTrigger);

// --- Shared Components for Chronoverse Theme ---

const GlitchText = ({ text, className = "" }) => {
    return (
        <div className={`relative inline-block group ${className}`}>
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-amber-600/50 opacity-0 group-hover:opacity-100 group-hover:-translate-x-[2px] group-hover:translate-y-[2px] transition-all duration-100 animate-pulse">
                {text}
            </span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-amber-300/50 opacity-0 group-hover:opacity-100 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-all duration-100 delay-75">
                {text}
            </span>
        </div>
    );
};

const SectionHeader = ({ title, subtitle }) => (
    <div className="relative mb-16 px-4 md:px-0">
        <div className="absolute top-0 left-0 w-1 h-full bg-amber-500/50" />
        <div className="pl-6">
            <h2 className="text-4xl md:text-6xl font-bold font-sans text-amber-100 uppercase tracking-tighter mb-2">
                {title}
            </h2>
            <div className="flex items-center gap-2 text-amber-500/60 font-mono text-sm tracking-widest">
                <span className="w-2 h-2 bg-amber-500/60 rounded-sm animate-pulse" />
                {subtitle}
            </div>
        </div>
    </div>
);

const TechBorder = ({ children, className = "" }) => (
    <div className={`relative border border-amber-900/30 bg-amber-950/10 backdrop-blur-sm ${className}`}>
        {/* Corners */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-amber-500" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-amber-500" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-amber-500" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-amber-500" />
        {children}
    </div>
);

// --- Sections ---

const HeroSection = () => {
    const { scrollY } = useScroll();
    const yText = useTransform(scrollY, [0, 500], [0, 150]);
    const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-amber-900/20">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-[#050b14]">
                {/* Grid grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.03)_1px,transparent_1px)] bg-size-[40px_40px]" />

                {/* Glowing Orb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[100px] animate-pulse" />

                {/* Floating Particles */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-amber-500/40 rounded-full"
                            initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%", opacity: 0 }}
                            animate={{
                                y: [null, Math.random() * -100],
                                opacity: [0, 1, 0]
                            }}
                            transition={{ duration: Math.random() * 10 + 5, repeat: Infinity, ease: "linear" }}
                        />
                    ))}
                </div>
            </div>

            <motion.div style={{ y: yText, opacity: opacityText }} className="relative z-10 text-center w-full max-w-5xl px-4">
                <div className="mb-4 flex justify-center items-center gap-3">
                    <span className="px-2 py-1 border border-amber-500/30 text-[10px] text-amber-500 font-mono uppercase tracking-widest bg-amber-950/30">
                        Simulation_Active
                    </span>
                    <span className="px-2 py-1 border border-amber-500/30 text-[10px] text-amber-500 font-mono uppercase tracking-widest bg-amber-950/30">
                        v.20.26
                    </span>
                </div>

                <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-amber-100 to-amber-700 mb-6 drop-shadow-[0_0_25px_rgba(245,158,11,0.2)] font-sans">
                    <GlitchText text="HOSTEL" /> <GlitchText text="DAYZ" />
                </h1>

                <div className="h-px w-32 bg-amber-500/50 mx-auto mb-6" />

                <p className="text-amber-200/60 font-mono text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                    Retrieving archived memory files...
                    <br className="hidden md:block" />
                    Subject: <span className="text-amber-400">Collective Euphoria</span>. Status: <span className="text-amber-400">Preserved</span>.
                </p>
            </motion.div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="text-[10px] text-amber-500/50 font-mono uppercase tracking-widest">Scroll to Initialize</span>
                <div className="w-px h-12 bg-gradient-to-b from-amber-500/50 to-transparent" />
            </div>
        </section>
    );
};

const TugOfWarSection = () => {
    const ropeRef = useRef(null);
    const [balance, setBalance] = useState(50); // 0 to 100 representing equilibrium

    // Auto-reset balance slightly to simulate tension
    useEffect(() => {
        const interval = setInterval(() => {
            if (balance !== 50) {
                setBalance(prev => {
                    const diff = 50 - prev;
                    return Math.abs(diff) < 1 ? 50 : prev + diff * 0.05;
                });
            }
        }, 100);
        return () => clearInterval(interval);
    }, [balance]);

    return (
        <section className="py-24 bg-[#080c14] relative overflow-hidden border-b border-amber-900/20">
            <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                <SectionHeader title="Force Equilibrium" subtitle="Module: Tug_of_War // Physics_Engine" />

                <div className="relative mt-20 mb-12 select-none">
                    {/* Energy Beam Container */}
                    <div className="relative h-24 bg-black/60 border border-green-900/30 rounded-full overflow-hidden flex items-center px-4 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)]">

                        {/* Center Marker */}
                        <div className="absolute left-1/2 top-0 h-full w-px bg-white/20 z-10" />

                        {/* Left Energy (Red/Amber) */}
                        <motion.div
                            className="h-4 rounded-l-full bg-gradient-to-r from-red-900/50 to-amber-600 shadow-[0_0_15px_#d97706]"
                            animate={{ width: `${balance}%` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />

                        {/* Connection Node */}
                        <motion.div
                            className="w-12 h-12 bg-[#1a1500] border border-amber-500 rounded-full z-20 flex items-center justify-center relative shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                            style={{ left: "-24px" }} // Offset to center on the bar end
                        >
                            <div className="w-8 h-8 rounded-full bg-amber-500/20 animate-pulse flex items-center justify-center">
                                <div className="w-2 h-2 bg-amber-400 rounded-full" />
                            </div>
                        </motion.div>

                        {/* Right Energy (Blue/Cyan - representing the other side) */}
                        <motion.div
                            className="h-4 rounded-r-full bg-gradient-to-l from-cyan-900/50 to-cyan-600 shadow-[0_0_15px_#0891b2] flex-1"
                        />
                    </div>

                    {/* Data Readout */}
                    <div className="flex justify-between mt-4 font-mono text-xs uppercase tracking-widest">
                        <span className="text-amber-500">Force: {Math.round(balance)}%</span>
                        <span className="text-cyan-500">Resistance: {Math.round(100 - balance)}%</span>
                    </div>
                </div>

                {/* Controls */}
                <div className="flex justify-center gap-12">
                    <button
                        onClick={() => setBalance(prev => Math.min(prev + 10, 100))}
                        className="group relative px-8 py-4 bg-amber-950/20 border border-amber-500/30 hover:bg-amber-500/10 hover:border-amber-500 transition-all clip-path-polygon"
                    >
                        <div className="absolute inset-0 bg-amber-500/5 translate-y-1 translate-x-1 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform" />
                        <span className="font-mono text-amber-500 font-bold tracking-widest">APPLY_FORCE_LEFT</span>
                    </button>

                    <button
                        onClick={() => setBalance(prev => Math.max(prev - 10, 0))}
                        className="group relative px-8 py-4 bg-cyan-950/20 border border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-500 transition-all"
                    >
                        <div className="absolute inset-0 bg-cyan-500/5 translate-y-1 translate-x-1 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform" />
                        <span className="font-mono text-cyan-500 font-bold tracking-widest">APPLY_FORCE_RIGHT</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

const DJNightSection = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-black">
            <div className="max-w-7xl mx-auto px-4">
                <SectionHeader title="Sonic Resonance" subtitle="Module: DJ_Night // Audio_Spectrum" />

                <TechBorder className="p-8 md:p-16 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />

                    {/* Spectrum Visualizer */}
                    <div className="flex items-end justify-center gap-1 md:gap-2 h-64 mb-8 mask-image-gradient-b">
                        {[...Array(32)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="w-2 md:w-3 bg-amber-500/80 shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                                animate={{
                                    height: ["10%", `${Math.random() * 80 + 10}%`, "10%"],
                                    backgroundColor: ["rgba(245,158,11,0.4)", "rgba(245,158,11,1)", "rgba(245,158,11,0.4)"]
                                }}
                                transition={{
                                    duration: 0.8,
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                    delay: i * 0.05,
                                    ease: "easeInOut"
                                }}
                            />
                        ))}
                    </div>

                    <div className="text-center relative z-10">
                        <h3 className="text-2xl md:text-4xl font-sans font-bold text-white mb-2">
                            <GlitchText text="SYSTEM_OVERDRIVE" />
                        </h3>
                        <p className="text-amber-500/50 font-mono text-sm max-w-lg mx-auto">
                            "Decibels exceeded safety parameters. Memory integrity verified at 99.9%."
                        </p>
                    </div>

                    {/* Background Flash */}
                    <div className="absolute inset-0 bg-amber-500/5 mix-blend-overlay animate-pulse pointer-events-none" />
                </TechBorder>
            </div>
        </section>
    );
};

const GallerySection = () => {
    // Placeholder frames for now
    const frames = [
        { id: "IMG_001", data: "CROWD_DENSITY_HIGH", color: "bg-amber-900/20" },
        { id: "IMG_002", data: "LUMINOSITY_PEAK", color: "bg-amber-800/20" },
        { id: "IMG_003", data: "AUDIO_WAVEFORM", color: "bg-amber-950/20" },
        { id: "IMG_004", data: "TEMPORAL_JOY", color: "bg-orange-900/20" },
    ];

    return (
        <section className="py-24 relative bg-[#050b14] border-t border-amber-900/20">
            <div className="max-w-7xl mx-auto px-4">
                <SectionHeader title="Memory Fragments" subtitle="Module: Gallery // Holographic_projection" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {frames.map((frame, i) => (
                        <div key={i} className="group relative aspect-[4/5] perspective-1000">
                            <motion.div
                                className={`w-full h-full relative border border-amber-500/20 bg-black/50 overflow-hidden transition-all duration-300 group-hover:border-amber-500/60 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]`}
                                whileHover={{ scale: 1.02, rotateX: 5, rotateY: 5 }}
                            >
                                {/* Scanline */}
                                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(245,158,11,0.1)_50%)] bg-size-[100%_4px] pointer-events-none z-20" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-950/50 z-10" />

                                {/* Image Placeholder Content */}
                                <div className={`absolute inset-0 flex flex-col items-center justify-center p-4 ${frame.color}`}>
                                    <div className="w-16 h-16 border border-amber-500/30 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <div className="w-12 h-12 border border-amber-500/50 rounded-full flex items-center justify-center">
                                            <div className="w-1 h-1 bg-amber-500 rounded-full animate-ping" />
                                        </div>
                                    </div>
                                    <span className="text-amber-500/40 font-mono text-[10px] tracking-widest text-center">
                                        NO_SIGNAL_INPUT<br />PLACEHOLDER_ASSET
                                    </span>
                                </div>

                                {/* Metadata Overlay */}
                                <div className="absolute bottom-0 left-0 w-full p-4 border-t border-amber-500/20 bg-black/80 backdrop-blur-md z-30 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-amber-500 font-bold font-sans text-sm">{frame.id}</span>
                                        <span className="w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_5px_#f59e0b]" />
                                    </div>
                                    <div className="text-[10px] text-amber-500/60 font-mono uppercase truncate">
                                        {">>"} {frame.data}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default function HostelDayzPage() {
    return (
        <PageTransitionWrapper>
            <main className="min-h-screen bg-black text-amber-500 selection:bg-amber-500/30">

                {/* Navigation Bar */}
                <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center mix-blend-difference">
                    <Link href="/past">
                        <button className="group flex items-center gap-3 text-amber-500/70 hover:text-amber-300 transition-colors uppercase text-xs tracking-[0.2em]">
                            <div className="w-8 h-8 flex items-center justify-center border border-amber-500/30 rounded-sm group-hover:bg-amber-500/10 transition-all">
                                <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
                            </div>
                            <span>Abort Simulation</span>
                        </button>
                    </Link>
                    <div className="hidden md:flex items-center gap-4 text-[10px] font-mono text-amber-500/40">
                        <span className="border border-amber-500/20 px-2 py-1">SECURE_CONNECTION</span>
                        <span className="w-2 h-2 bg-amber-600 rounded-sm animate-pulse" />
                    </div>
                </nav>

                <HeroSection />
                <TugOfWarSection />
                <DJNightSection />
                <GallerySection />

                {/* Footer */}
                <footer className="py-12 border-t border-amber-900/30 bg-[#050b14] text-center">
                    <p className="text-amber-500/30 font-mono text-xs">
                // END_OF_ARCHIVE // INGENIUM_2026
                    </p>
                </footer>

            </main>
        </PageTransitionWrapper>
    );
}
