"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PageTransitionWrapper } from "@/components/chronoverse";

gsap.registerPlugin(ScrollTrigger);

// --- Shared Components ---

const GlitchText = ({ text, className = "" }) => {
    return (
        <div className={`relative inline-block group ${className}`}>
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-amber-600/50 opacity-0 group-hover:opacity-100 group-hover:-translate-x-0.5 group-hover:translate-y-0.5 transition-all duration-100 animate-pulse">
                {text}
            </span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-amber-300/50 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-100 delay-75">
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

// --- Sections ---

const HeroSection = () => {
    const { scrollY } = useScroll();
    const yText = useTransform(scrollY, [0, 500], [0, 150]);
    const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-amber-900/20">
            {/* Background */}
            <div className="absolute inset-0 bg-[#050b14]">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
                {/* Floating Letters */}
                {/* Floating Letters - Centered & Denser */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Main Cluster - Center */}
                    {[...Array(40)].map((_, i) => (
                        <motion.div
                            key={`center-${i}`}
                            className="absolute text-amber-500/30 font-serif text-3xl md:text-5xl blur-[1px]"
                            initial={{
                                left: `${35 + Math.random() * 30}%`, // 35% to 65% (Centered)
                                top: -100,
                                opacity: Math.random() * 0.5 + 0.1,
                                rotate: Math.random() * 360
                            }}
                            animate={{
                                top: "120vh",
                                rotate: Math.random() * 360 + 180
                            }}
                            transition={{
                                duration: Math.random() * 15 + 10, // Slower, varying speed
                                repeat: Infinity,
                                ease: "linear",
                                delay: Math.random() * 20
                            }}
                        >
                            {["अ", "आ", "क", "ख", "ग", "घ", "ش", "ع", "ر", "ق", "ن", "م", "ل", "ی"][Math.floor(Math.random() * 14)]}
                        </motion.div>
                    ))}

                    {/* Occasional Drift - Slightly Wider */}
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={`drift-${i}`}
                            className="absolute text-amber-500/10 font-serif text-2xl md:text-4xl blur-[2px]"
                            initial={{
                                left: `${20 + Math.random() * 60}%`, // 20% to 80%
                                top: -100,
                                opacity: Math.random() * 0.3,
                                rotate: Math.random() * 360
                            }}
                            animate={{
                                top: "120vh",
                                rotate: Math.random() * 360 - 180
                            }}
                            transition={{
                                duration: Math.random() * 20 + 15,
                                repeat: Infinity,
                                ease: "linear",
                                delay: Math.random() * 15
                            }}
                        >
                            {["अ", "आ", "ش", "ع"][Math.floor(Math.random() * 4)]}
                        </motion.div>
                    ))}
                </div>
            </div>

            <motion.div style={{ y: yText, opacity: opacityText }} className="relative z-10 text-center w-full max-w-5xl px-4">
                <div className="mb-4 flex justify-center items-center gap-3">
                    <span className="px-2 py-1 border border-amber-500/30 text-[10px] text-amber-500 font-mono uppercase tracking-widest bg-amber-950/30">
                        Manuscript_Decrypted
                    </span>
                </div>

                <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-amber-100 to-amber-700 mb-6 drop-shadow-[0_0_25px_rgba(245,158,11,0.2)] font-serif">
                    <GlitchText text="KAVYANJALI" />
                </h1>

                <p className="text-amber-200/60 font-mono text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                    "Where the algorithms of logic pause, and the rhythm of the soul begins."
                    <br />
                    <span className="text-amber-500/80 mt-2 block text-xs tracking-widest">ARCHIVE_ID: POETRY_COLLECTIVE_2024</span>
                </p>
            </motion.div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="text-[10px] text-amber-500/50 font-mono uppercase tracking-widest">Read Manuscript</span>
                <div className="w-px h-12 bg-linear-to-b from-amber-500/50 to-transparent" />
            </div>
        </section>
    );
};

const FeaturedPoetsSection = () => {
    const poets = [
        { name: "Rahat Indori", role: "Legendary Archive", line: "Bulati hai magar jaane ka nahi..." },
        { name: "Student A", role: "Emerging Voice", line: "In the silence of code, I found a verse." },
        { name: "Student B", role: "Lyrical Engine", line: "Debugging life, one couplet at a time." },
    ];

    return (
        <section className="py-24 bg-[#080c14] relative border-b border-amber-900/20">
            <div className="max-w-7xl mx-auto px-4">
                <SectionHeader title="The Mushaira" subtitle="Module: Poets // Holographic_Projection" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {poets.map((poet, i) => (
                        <motion.div
                            key={i}
                            className="group relative p-4 sm:p-8 border border-amber-900/30 bg-amber-950/10 hover:bg-amber-950/20 transition-all duration-500"
                            whileHover={{ y: -5 }}
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-amber-500/20 group-hover:bg-amber-500 transition-colors" />

                            <h3 className="text-2xl font-serif text-amber-100 mb-2 group-hover:text-amber-400 transition-colors">
                                {poet.name}
                            </h3>
                            <div className="text-xs text-amber-500/50 font-mono uppercase tracking-widest mb-6">
                                {">>"} {poet.role}
                            </div>

                            <p className="text-amber-200/70 italic font-serif leading-relaxed pl-4 border-l-2 border-amber-500/20 group-hover:border-amber-500/60 transition-colors">
                                "{poet.line}"
                            </p>

                            {/* Audio Visualizer Effect on Hover */}
                            <div className="absolute bottom-4 right-4 flex gap-1 h-3 opacity-20 group-hover:opacity-100 transition-opacity">
                                {[...Array(5)].map((_, j) => (
                                    <div key={j} className="w-1 bg-amber-500 animate-pulse" style={{ height: `${Math.random() * 100}%`, animationDelay: `${j * 0.1}s` }} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const VerseItem = ({ verse }) => (
    <>
        {/* Base dim layer */}
        <div
            className="absolute font-serif text-amber-900/30 whitespace-nowrap text-lg md:text-2xl transition-all duration-700 pointer-events-none"
            style={{ left: `${verse.x}%`, top: `${verse.y}%` }}
        >
            {verse.text}
        </div>
        {/* Reveal layer happens via mask on container */}
        <div
            className="absolute font-serif text-amber-400 whitespace-nowrap text-lg md:text-2xl drop-shadow-[0_0_10px_rgba(245,158,11,0.8)] pointer-events-none"
            style={{ left: `${verse.x}%`, top: `${verse.y}%` }}
        >
            {verse.text}
        </div>
    </>
);

const FlashlightGrid = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }
    };

    const verses = [
        { text: "The ink never dries...", x: 20, y: 20 },
        { text: "Words float like particles", x: 70, y: 15 },
        { text: "Buffer clearing... Memory fading", x: 10, y: 60 },
        { text: "Rhyme scheme: Compiled", x: 80, y: 70 },
        { text: "Error: Emotion overflow", x: 40, y: 40 },
        { text: "Ruh ki Aawaz", x: 60, y: 80 },
        { text: "Shab-e-Ghazal", x: 15, y: 90 },
        { text: "Lafzon ke Moti", x: 85, y: 30 },
        { text: "Digital Ink", x: 50, y: 10 },
        { text: "404: Hurt Not Found", x: 30, y: 50 },
        { text: "Kuch ishq kiya...", x: 45, y: 75 },
        { text: "Awaraoon ki tarah...", x: 75, y: 55 },
        { text: "Benaam rishte", x: 55, y: 45 },
        { text: "Zindagi migrani...", x: 25, y: 35 },
    ];

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative h-[60vh] border border-amber-500/20 rounded-lg bg-[#020202] overflow-hidden group cursor-crosshair flex items-center justify-center w-full"
        >
            {/* Ambient Background Noise */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />

            {/* Base Layer: Extremely dim text */}
            {verses.map((v, i) => (
                <div
                    key={`base-${i}`}
                    className="absolute font-serif text-amber-900/30 whitespace-nowrap text-lg md:text-2xl transition-all duration-700 select-none"
                    style={{ left: `${v.x}%`, top: `${v.y}%` }}
                >
                    {v.text}
                </div>
            ))}

            {/* Reveal Layer: Masked by flashlight */}
            <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                    maskImage: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
                    WebkitMaskImage: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
                }}
            >
                {verses.map((v, i) => (
                    <div
                        key={`reveal-${i}`}
                        className="absolute font-serif text-amber-400 whitespace-nowrap text-lg md:text-2xl drop-shadow-[0_0_10px_rgba(245,158,11,0.8)]"
                        style={{ left: `${v.x}%`, top: `${v.y}%` }}
                    >
                        {v.text}
                    </div>
                ))}
            </div>

            {/* Flashlight Glow Visual */}
            <motion.div
                className="pointer-events-none absolute w-96 h-96 bg-amber-500/10 rounded-full blur-[60px] z-20 mix-blend-screen"
                animate={{
                    x: mousePosition.x - 192,
                    y: mousePosition.y - 192,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
            />

            <div className="absolute bottom-4 right-4 text-[10px] font-mono text-amber-500/30">
                INTERACTIVE_MODE: DATA_FLASHLIGHT
            </div>
        </div>
    );
};

const EchoesSection = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <SectionHeader title="Echoes of Verses" subtitle="Module: Whispering_Gallery // Data_Flashlight" />
                <FlashlightGrid />
            </div>
        </section>
    );
};

export default function KavyanjaliPage() {
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
                            <span>Return to Archives</span>
                        </button>
                    </Link>
                    <div className="hidden md:flex items-center gap-4 text-[10px] font-mono text-amber-500/40">
                        <span className="border border-amber-500/20 px-2 py-1">LITERARY_DB_ACCESS</span>
                        <span className="w-2 h-2 bg-amber-600 rounded-sm animate-pulse" />
                    </div>
                </nav>

                <HeroSection />
                <FeaturedPoetsSection />
                <EchoesSection />

                {/* Footer */}
                <footer className="py-12 border-t border-amber-900/30 bg-[#050b14] text-center">
                    <p className="text-amber-500/30 font-mono text-xs">
                        // END_OF_MANUSCRIPT // INGENIUM_ARCHIVES
                    </p>
                </footer>
            </main>
        </PageTransitionWrapper>
    );
}
