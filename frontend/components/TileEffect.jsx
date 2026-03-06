"use client";

import { Flame, Zap, Cpu, Scan, HeartPulse, Activity, Brain } from "lucide-react";

// ==========================================
// SCENE 1: RACING / RC DEPT
// ==========================================
const RacingEffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] border-[2px] border-dashed border-yellow-500/20 rounded-full animate-[spin_10s_linear_infinite]" />

        {/* Racing Drone/Car Top Down */}
        <div className="absolute w-[40px] h-[40px] drop-shadow-[0_0_15px_rgba(234,179,8,0.8)] animate-[circle-track_3s_linear_infinite]">
            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                <path d="M20 20 L80 50 L20 80 Z" fill={hexColor} className="animate-pulse" />
                <circle cx="20" cy="20" r="10" fill="#0f172a" stroke={hexColor} strokeWidth="4" />
                <circle cx="20" cy="80" r="10" fill="#0f172a" stroke={hexColor} strokeWidth="4" />
                <path d="M10 50 L-30 50" stroke={hexColor} strokeWidth="4" className="opacity-50 blur-[2px]" />
            </svg>
        </div>

        <style jsx>{`
      @keyframes circle-track {
        0% { transform: translate(10%, 70%) rotate(0deg) translateX(100px) rotate(0deg); }
        100% { transform: translate(10%, 70%) rotate(360deg) translateX(100px) rotate(-360deg); }
      }
    `}</style>
    </div>
);

// ==========================================
// SCENE 2: ROBOTICS (Soccer, Line Follower)
// ==========================================
const RoboticsEffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        {/* Scanning grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:20px_20px] [transform:perspective(500px)_rotateX(60deg)] animate-[scrollMatrix_10s_linear_infinite]" />

        {/* Robot targeting eye */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-blue-500/30 rounded-full flex items-center justify-center animate-[spin_4s_linear_infinite_reverse]">
            <div className="w-24 h-24 border border-dashed border-blue-400/50 rounded-full animate-[spin_3s_linear_infinite]" />
            <div className={`absolute w-4 h-4 rounded-full bg-blue-500 drop-shadow-[0_0_10px_${hexColor}] animate-ping`} />
        </div>

        {/* Laser scanline */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-400/80 drop-shadow-[0_0_8px_rgba(96,165,250,1)] animate-[scan-vertical_2s_ease-in-out_infinite_alternate]" />

        <style jsx>{`
      @keyframes scrollMatrix {
        to { background-position: 0 100%; }
      }
      @keyframes scan-vertical {
        0% { transform: translateY(0); }
        100% { transform: translateY(200px); }
      }
    `}</style>
    </div>
);

// ==========================================
// SCENE 3: AI & VISION (CV, 3D Sim)
// ==========================================
const VisionEffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 animate-[spin_8s_linear_infinite]">
            <div className={`absolute inset-0 border border-${colorClass}-500/50 transform rotate-45 animate-pulse`} />
            <div className={`absolute inset-0 border border-${colorClass}-400/30 transform -rotate-45`} />
        </div>

        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 animate-[spin_12s_linear_infinite_reverse]">
            <svg viewBox="0 0 100 100" className="w-full h-full opacity-60">
                <polygon points="50,10 90,90 10,90" fill="none" stroke={hexColor} strokeWidth="1" className="animate-[dash_3s_linear_infinite]" strokeDasharray="200" strokeDashoffset="200" />
                <polygon points="50,90 10,10 90,10" fill="none" stroke={hexColor} strokeWidth="1" strokeDasharray="200" strokeDashoffset="200" className="opacity-50" />
            </svg>
        </div>

        {/* Recognition Boxes */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-${colorClass}-500 transition-all duration-300 group-hover:w-40 group-hover:h-32 group-hover:border-2`}>
            <div className={`absolute top-0 left-0 w-2 h-2 bg-${colorClass}-400 animate-ping`} />
            <div className={`absolute bottom-0 right-0 w-2 h-2 bg-${colorClass}-400 animate-ping`} />
        </div>

        <style jsx>{`
      @keyframes dash {
        to { stroke-dashoffset: 0; }
      }
    `}</style>
    </div>
);

// ==========================================
// SCENE 4: BIO TECH (Patient Monitor)
// ==========================================
const BioEffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
        {/* EKG Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30" />

        {/* Heartbeat Line */}
        <div className="relative w-full h-32 flex items-center justify-center">
            <svg viewBox="0 0 500 100" className="w-[150%] h-full stroke-emerald-400 drop-shadow-[0_0_5px_rgba(52,211,153,0.8)] flex-none" fill="none" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
                <path d="M 0 50 L 100 50 L 120 20 L 140 80 L 160 50 L 300 50 L 320 10 L 340 90 L 360 50 L 500 50" className="animate-[slide-left_2s_linear_infinite]" />
            </svg>
            {/* Moving scanner highlight */}
            <div className="absolute left-1/2 top-0 bottom-0 w-32 bg-linear-to-r from-transparent via-emerald-400/20 to-transparent blur-md" />
        </div>

        <style jsx>{`
      @keyframes slide-left {
        0% { transform: translateX(0); }
        100% { transform: translateX(-200px); }
      }
    `}</style>
    </div>
);

// ==========================================
// SCENE 5: HARDWARE (Silicon, Analog)
// ==========================================
const CircuitEffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Central Processor */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-black/50 border border-${colorClass}-500/50 flex items-center justify-center drop-shadow-[0_0_15px_${hexColor}]`}>
            <Cpu className={`w-10 h-10 text-${colorClass}-400 animate-pulse`} />
        </div>

        {/* Circuit Traces */}
        <div className="absolute inset-0 opacity-60">
            <svg width="100%" height="100%">
                <g stroke={hexColor} strokeWidth="2" fill="none" className="animate-[dash_2s_linear_infinite]" strokeDasharray="10 20">
                    <path d="M 50 200 L 150 200 L 200 150 L 200 50" />
                    <path d="M 350 20 L 250 20 L 200 70 L 200 150" />
                    <path d="M 20 50 L 80 50 L 120 90 L 120 150" />
                </g>
                <g fill={hexColor}>
                    <circle cx="50" cy="200" r="3" className="animate-ping" />
                    <circle cx="350" cy="20" r="3" className="animate-ping" />
                    <circle cx="20" cy="50" r="3" className="animate-ping" />
                </g>
            </svg>
        </div>

        <style jsx>{`
      @keyframes dash {
        to { stroke-dashoffset: -30; }
      }
    `}</style>
    </div>
);

// ==========================================
// SCENE 6: AERO (Aero Artistry)
// ==========================================
const AeroEffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute w-[80px] h-[80px] drop-shadow-[0_0_20px_rgba(52,211,153,0.8)] animate-[drone-flight_4s_ease-in-out_infinite_alternate]">
            <svg viewBox="0 0 100 100" className="w-full h-full">
                <g fill="none" stroke={hexColor} strokeWidth="3" strokeLinecap="round">
                    {/* Main body */}
                    <circle cx="50" cy="50" r="10" fill="#064e3b" />
                    <path d="M 30 30 L 50 50 L 70 30" />
                    <path d="M 30 70 L 50 50 L 70 70" />
                    {/* Rotors */}
                    <ellipse cx="30" cy="30" rx="15" ry="5" className="animate-[spin_0.1s_linear_infinite]" />
                    <ellipse cx="70" cy="30" rx="15" ry="5" className="animate-[spin_0.1s_linear_infinite_reverse]" />
                    <ellipse cx="30" cy="70" rx="15" ry="5" className="animate-[spin_0.1s_linear_infinite_reverse]" />
                    <ellipse cx="70" cy="70" rx="15" ry="5" className="animate-[spin_0.1s_linear_infinite]" />
                </g>
            </svg>
        </div>

        <style jsx>{`
      @keyframes drone-flight {
        0% { transform: translate(10%, 80%) scale(0.6) rotate(-15deg); }
        50% { transform: translate(250%, 20%) scale(1.2) rotate(20deg); }
        100% { transform: translate(80%, 10%) scale(0.8) rotate(-5deg); }
      }
    `}</style>
    </div>
);

// ==========================================
// SCENE 7: DATA / MATH (QML, Global Gourmet, Matiks)
// ==========================================
const DataEffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <Brain className={`absolute w-32 h-32 text-${colorClass}-500/20 animate-pulse`} />

        {/* Floating Data Nodes */}
        {[...Array(10)].map((_, i) => (
            <div
                key={i}
                className={`absolute w-1 h-1 bg-${colorClass}-400 rounded-full animate-ping`}
                style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${1 + Math.random() * 2}s`
                }}
            />
        ))}

        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
            <path d="M20,20 Q50,80 150,50 T300,100" fill="none" stroke={hexColor} strokeWidth="1" className="animate-[dash_4s_linear_infinite]" strokeDasharray="50 150" />
            <path d="M300,20 Q200,60 100,100 T0,50" fill="none" stroke={hexColor} strokeWidth="1" className="animate-[dash_3s_linear_infinite]" strokeDasharray="30 150" />
        </svg>
    </div>
);

// ==========================================
// MAIN FACTORY COMPONENT
// ==========================================
export default function TileEffect({ id, tag, color }) {
    // Map tailwind color names to rough hex values for SVG strokes
    const hexMap = {
        red: "#ef4444", yellow: "#eab308", blue: "#3b82f6", cyan: "#06b6d4",
        emerald: "#10b981", orange: "#f97316", violet: "#8b5cf6", amber: "#f59e0b",
        purple: "#a855f7", green: "#22c55e", rose: "#f43f5e"
    };
    const hexColor = hexMap[color] || "#fff";

    // Shared Background Base (applied to all)
    const renderBackground = () => (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {/* Background Gradient matching the theme color */}
            <div className={`absolute inset-0 bg-linear-to-br from-${color}-500/20 via-black/50 to-black/80`} />

            {/* Abstract geometric background elements */}
            <div className={`absolute -right-10 -bottom-10 w-40 h-40 bg-${color}-500/10 rounded-full blur-[40px] animate-pulse`} />
            <div className={`absolute -left-10 -top-10 w-32 h-32 bg-${color}-400/10 rounded-full blur-[30px]`} />
        </div>
    );

    // Selector logic
    let SceneComponent = null;

    if (["rc"].includes(id)) {
        SceneComponent = RacingEffect;
    } else if (["robosoccer", "line-follower"].includes(id)) {
        SceneComponent = RoboticsEffect;
    } else if (["cv-obstacourse", "3d-reconstruction", "screen-addiction"].includes(id)) {
        SceneComponent = VisionEffect;
    } else if (["patient-monitor"].includes(id)) {
        SceneComponent = BioEffect;
    } else if (["silicon-architects", "analog-verse"].includes(id)) {
        SceneComponent = CircuitEffect;
    } else if (["aero-artistry"].includes(id)) {
        SceneComponent = AeroEffect;
    } else {
        // Fallback for Data / Civil / Default tech cards
        SceneComponent = DataEffect;
    }

    return (
        <>
            {renderBackground()}
            {SceneComponent && <SceneComponent colorClass={color} hexColor={hexColor} />}
        </>
    );
}
