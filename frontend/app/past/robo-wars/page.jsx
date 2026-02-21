"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PageTransitionWrapper } from "@/components/chronoverse";

gsap.registerPlugin(ScrollTrigger);

// --- Shared Components ---

const Spark = ({ delay = 0, style }) => (
    <motion.div
        className="absolute w-1 h-1 bg-orange-500 rounded-full z-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            y: [0, -50 - Math.random() * 50],
            x: [0, (Math.random() - 0.5) * 50],
        }}
        transition={{
            duration: 0.5 + Math.random() * 0.5,
            delay: delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 2
        }}
        style={style}
    />
);

const SectionHeader = ({ title, subtitle }) => (
    <div className="relative mb-16 px-4 md:px-0">
        <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
        <div className="pl-6">
            <h2 className="text-4xl md:text-6xl font-black font-sans text-cyan-50 uppercase tracking-tighter mb-2 drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                {title}
            </h2>
            <div className="flex items-center gap-2 text-cyan-400/60 font-mono text-sm tracking-widest">
                <span className="w-2 h-2 bg-orange-500 rounded-sm animate-pulse shadow-[0_0_10px_#f97316]" />
                {subtitle}
            </div>
        </div>
    </div>
);

// --- Debris Background (Falling & Rotating form Center) ---
const DebrisField = () => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute text-slate-700/40 blur-[1px]"
                    initial={{
                        y: -100,
                        x: "50vw", // Start relative to center (adjusting with random offset below)
                        rotate: 0,
                        scale: Math.random() * 0.5 + 0.5
                    }}
                    animate={{
                        y: "120vh",
                        x: `${(Math.random() - 0.5) * 100 + 50}vw`, // Spread out as they fall
                        rotate: 360 * (Math.random() > 0.5 ? 2 : -2)
                    }}
                    transition={{
                        duration: Math.random() * 5 + 5, // Faster fall
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 5
                    }}
                    style={{
                        fontSize: Math.random() * 40 + 20,
                        left: 0 // Reset left to use x transform fully
                    }}
                >
                    {Math.random() > 0.5 ? '⚙️' : '🔩'}
                </motion.div>
            ))}
        </div>
    );
};

// --- Intense Spark Effect (Increased Density & Speed) ---
const IntenseSparks = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-screen">
        {[...Array(60)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-orange-400 rounded-full shadow-[0_0_15px_#f97316]"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                    opacity: [0, 1, 0],
                    scale: [0, Math.random() * 3 + 1, 0],
                    x: [0, (Math.random() - 0.5) * 300], // Wider spread
                    y: [0, (Math.random() - 0.5) * 300],
                }}
                transition={{
                    duration: 0.1 + Math.random() * 0.4, // Faster lifecycle
                    delay: Math.random() * 2,
                    repeat: Infinity,
                    repeatDelay: Math.random() * 2 // More frequent repeats
                }}
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                }}
            />
        ))}
    </div>
);

// --- Hero Section ---
const HeroSection = () => {
    const { scrollY } = useScroll();
    const yText = useTransform(scrollY, [0, 500], [0, 150]);
    const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-cyan-900/20 bg-slate-950">
            {/* Dark Tech Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay pointer-events-none" />

            <DebrisField />

            {/* Welding Sparks Effect */}
            <IntenseSparks />

            <motion.div style={{ y: yText, opacity: opacityText }} className="relative z-10 text-center w-full max-w-6xl px-4">
                <div className="mb-6 flex justify-center items-center gap-3">
                    <span className="px-3 py-1 border border-orange-500/50 text-[10px] text-orange-500 font-mono uppercase tracking-widest bg-orange-950/20 animate-pulse shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                        ⚠️ CRITICAL FAILURE DETECTED ⚠️
                    </span>
                </div>

                <div className="relative inline-block">
                    <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-cyan-100 to-slate-800 mb-6 drop-shadow-[0_0_35px_rgba(6,182,212,0.4)] font-sans uppercase relative z-10">
                        ROBO WARS
                    </h1>
                    {/* Fire Effect behind text */}
                    <div className="absolute -inset-10 bg-orange-600/10 blur-[50px] mix-blend-screen rounded-full animate-pulse z-0" />
                </div>

                <p className="text-cyan-200/60 font-mono text-sm md:text-lg max-w-3xl mx-auto leading-relaxed mt-4">
                    <span className="text-orange-500">&gt;&gt;</span> PROTOCOL: COMBAT_ENGAGED <br />
                    <span className="text-slate-400">Metal screams. Circuits fry. The arena demands wreckage.</span>
                </p>

                {/* Scroll Indicator */}
                <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                    <span className="text-[10px] text-cyan-500/50 font-mono uppercase tracking-widest">Descend to Arena</span>
                    <div className="w-px h-16 bg-gradient-to-b from-cyan-500/50 to-transparent" />
                </div>
            </motion.div>
        </section>
    );
};

// --- Arena Section ---
const ArenaSection = () => {
    const bots = [
        {
            name: "Thanatos",
            class: "Heavyweight",
            stats: { armor: 98, speed: 35, damage: 92 },
            status: "ONLINE",
            desc: "A walking tank designed to crush spines."
        },
        {
            name: "Viper X",
            class: "Striker",
            stats: { armor: 55, speed: 98, damage: 80 },
            status: "PRE-IGNITION",
            desc: "Speed is its armor. Kinetic energy weapon."
        },
        {
            name: "Buzzkill",
            class: "Spinner",
            stats: { armor: 45, speed: 85, damage: 95 },
            status: "CRITICAL",
            desc: "3000 RPM titanium disk. Unstable core."
        }
    ];

    return (
        <section className="py-24 bg-slate-950 relative border-b border-cyan-900/20">
            {/* Dynamic Background */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-900/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <SectionHeader title="Battle Logs" subtitle="Target: Hostiles // Status: Engaging" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {bots.map((bot, i) => (
                        <motion.div
                            key={i}
                            className="group relative p-1 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 overflow-hidden"
                            whileHover={{ y: -5 }}
                        >
                            {/* Card Border Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-orange-500/20 opacity-50 group-hover:opacity-100 transition-opacity" />

                            <div className="relative p-3 sm:p-6 bg-slate-950/90 h-full border border-slate-800 group-hover:border-cyan-500/50 transition-colors">
                                {/* Hover Spark Effect */}
                                <div className="absolute -top-10 -right-10 w-20 h-20 bg-cyan-400/20 blur-[30px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-100 font-sans uppercase tracking-tighter leading-none">{bot.name}</h3>
                                        <div className="text-xs text-cyan-500 font-mono mt-1">{bot.class}</div>
                                    </div>
                                    <div className={`px-2 py-0.5 text-[10px] font-mono border ${bot.status.includes('CRITICAL') ? 'border-red-500 text-red-500 animate-pulse' : 'border-cyan-500/50 text-cyan-500'}`}>
                                        {bot.status}
                                    </div>
                                </div>

                                <p className="text-slate-400 text-sm mb-6 border-l-2 border-orange-500/30 pl-3 italic">
                                    "{bot.desc}"
                                </p>

                                {/* Stats Bars */}
                                <div className="space-y-4 font-mono text-xs text-slate-500">
                                    {Object.entries(bot.stats).map(([key, val]) => (
                                        <div key={key}>
                                            <div className="flex justify-between mb-1 uppercase">
                                                <span className="text-cyan-200/70">{key}</span>
                                                <span className="text-orange-400">{val}%</span>
                                            </div>
                                            <div className="w-full h-1.5 bg-slate-800 skew-x-[-10deg] overflow-hidden">
                                                <motion.div
                                                    className={`h-full ${key === 'damage' ? 'bg-orange-500' : 'bg-cyan-500'}`}
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${val}%` }}
                                                    transition={{ duration: 1, delay: 0.2 }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Battle Simulation (Replacing Blueprints) ---
const BattleSimulation = () => {
    const containerRef = useRef(null);
    const [bots, setBots] = useState([
        { id: 1, x: 20, y: 20, vx: 0.8, vy: 0.5, type: 'TANK', color: 'bg-cyan-600', hp: 100 },
        { id: 2, x: 80, y: 50, vx: -0.6, vy: 0.7, type: 'SPEED', color: 'bg-orange-600', hp: 100 },
        { id: 3, x: 50, y: 80, vx: 0.4, vy: -0.8, type: 'ASSAULT', color: 'bg-red-600', hp: 100 },
        { id: 4, x: 10, y: 90, vx: 0.9, vy: -0.3, type: 'STEALTH', color: 'bg-purple-600', hp: 100 },
    ]);
    const [sparks, setSparks] = useState([]);
    const requestRef = useRef();

    // Physics Loop
    const updatePhysics = () => {
        setBots(prevBots => {
            const nextBots = prevBots.map(bot => {
                let { x, y, vx, vy } = bot;

                // Update position
                x += vx;
                y += vy;

                // Wall collisions
                if (x <= 5 || x >= 95) vx *= -1;
                if (y <= 5 || y >= 95) vy *= -1;

                // Clamp to bounds
                x = Math.max(5, Math.min(95, x));
                y = Math.max(5, Math.min(95, y));

                return { ...bot, x, y, vx, vy };
            });

            // Check Bot vs Bot collisions
            for (let i = 0; i < nextBots.length; i++) {
                for (let j = i + 1; j < nextBots.length; j++) {
                    const b1 = nextBots[i];
                    const b2 = nextBots[j];
                    const dx = b1.x - b2.x;
                    const dy = b1.y - b2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 8) { // Collision threshold (approx % of width)
                        // Simple elastic bounce
                        nextBots[i].vx *= -1;
                        nextBots[i].vy *= -1;
                        nextBots[j].vx *= -1;
                        nextBots[j].vy *= -1;

                        // Spawn Sparks at collision point
                        spawnSparks((b1.x + b2.x) / 2, (b1.y + b2.y) / 2);
                    }
                }
            }

            return nextBots;
        });

        requestRef.current = requestAnimationFrame(updatePhysics);
    };

    const spawnSparks = (x, y) => {
        const newSparks = Array.from({ length: 10 }).map(() => ({
            id: Math.random(),
            x,
            y,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            life: 1.0
        }));

        setSparks(prev => [...prev, ...newSparks]);
    };

    // Spark cleaning loop separate from physics to reduce state thrashing? 
    // Actually merging them is fine for this scale, but let's just use effect for sparks decay
    useEffect(() => {
        const interval = setInterval(() => {
            setSparks(prev => prev
                .map(s => ({ ...s, x: s.x + s.vx, y: s.y + s.vy, life: s.life - 0.1 }))
                .filter(s => s.life > 0)
            );
        }, 50);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        requestRef.current = requestAnimationFrame(updatePhysics);
        return () => cancelAnimationFrame(requestRef.current);
    }, []);

    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <SectionHeader title="Live Simulation" subtitle="Mode: Battle Royale // No Limits" />

                <div ref={containerRef} className="relative h-[60vh] border border-cyan-500/20 bg-[#020617] rounded-sm overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    {/* Grid Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-size-[40px_40px]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_90%)]" />

                    {/* Bots */}
                    {bots.map(bot => (
                        <div
                            key={bot.id}
                            className={`absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-transform duration-75`}
                            style={{
                                left: `${bot.x}%`,
                                top: `${bot.y}%`,
                                transform: `translate(-50%, -50%) rotate(${Math.atan2(bot.vy, bot.vx) * (180 / Math.PI) + 90}deg)`
                            }}
                        >
                            {/* Bot Chassis */}
                            <div className={`relative w-8 h-10 ${bot.color} shadow-[0_0_15px_currentColor] mask-image-bevel`}>
                                {/* Inner Detail */}
                                <div className="absolute inset-1 bg-slate-900/50" />
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/80 rounded-full blur-[2px] animate-pulse" />
                            </div>
                            {/* Force Field Ripple */}
                            <div className={`absolute inset-0 border border-white/20 rounded-full scale-110 animate-ping opacity-20`} />
                        </div>
                    ))}

                    {/* Sparks */}
                    {sparks.map(spark => (
                        <div
                            key={spark.id}
                            className="absolute w-1 h-1 bg-yellow-300 rounded-full pointer-events-none"
                            style={{
                                left: `${spark.x}%`,
                                top: `${spark.y}%`,
                                opacity: spark.life,
                                boxShadow: `0 0 ${spark.life * 10}px #facc15`
                            }}
                        />
                    ))}

                    {/* HUD Overlay */}
                    <div className="absolute top-4 right-4 text-xs font-mono text-cyan-500/50 flex flex-col items-end gap-1 pointer-events-none">
                        <span>SIMULATION_SPEED: 1.0x</span>
                        <span>ENTITIES: {bots.length}</span>
                        <span>COLLISIONS_DETECTED: {sparks.length > 0 ? 'TRUE' : 'FALSE'}</span>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent animate-pulse" />
                </div>
            </div>
        </section>
    );
};

export default function RoboWarsPage() {
    return (
        <PageTransitionWrapper>
            <main className="min-h-screen bg-slate-950 text-cyan-500 selection:bg-orange-500/30 selection:text-white">
                {/* Navigation Bar */}
                <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center mix-blend-plus-lighter pointer-events-none">
                    <Link href="/past" className="pointer-events-auto">
                        <button className="group flex items-center gap-3 text-cyan-500/70 hover:text-cyan-300 transition-colors uppercase text-xs tracking-[0.2em]">
                            <div className="w-8 h-8 flex items-center justify-center border border-cyan-500/30 rounded-sm group-hover:bg-cyan-500/10 transition-all">
                                <span className="group-hover:-translate-x-0.5 transition-transform">&lt;</span>
                            </div>
                            <span>Return to Archives</span>
                        </button>
                    </Link>
                    <div className="hidden md:flex items-center gap-4 text-[10px] font-mono text-cyan-500/40">
                        <span className="border border-cyan-500/20 px-2 py-1">SECTOR: COMBAT_LOGS</span>
                        <span className="w-2 h-2 bg-orange-600 rounded-sm animate-ping" />
                    </div>
                </nav>

                <HeroSection />
                <ArenaSection />
                <BattleSimulation />

                {/* Footer */}
                <footer className="py-12 border-t border-cyan-900/30 bg-[#020617] text-center">
                    <p className="text-cyan-800/50 font-mono text-xs">
                        // END_OF_TRANSMISSION // SYS_EXIT
                    </p>
                </footer>
            </main>
        </PageTransitionWrapper>
    );
}
