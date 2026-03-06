"use client";

import React from "react";
import { Cpu, Brain } from "lucide-react";

// ==========================================
// TECH SECTOR EFFECTS
// ==========================================

const RacingEffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] border-[2px] border-dashed border-yellow-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
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

const RoboSoccerEffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:20px_20px] [transform:perspective(500px)_rotateX(60deg)] animate-[scrollMatrix_10s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-blue-500/30 rounded-full flex items-center justify-center animate-[spin_4s_linear_infinite_reverse]">
            <div className="w-24 h-24 border border-dashed border-blue-400/50 rounded-full animate-[spin_3s_linear_infinite]" />
            <div className={`absolute w-4 h-4 rounded-full bg-blue-500 drop-shadow-[0_0_10px_${hexColor}] animate-ping`} />
        </div>
        <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-400/80 drop-shadow-[0_0_8px_rgba(96,165,250,1)] animate-[scan-vertical_2s_ease-in-out_infinite_alternate]" />
        <style jsx>{`
      @keyframes scrollMatrix { to { background-position: 0 100%; } }
      @keyframes scan-vertical { 0% { transform: translateY(0); } 100% { transform: translateY(200px); } }
    `}</style>
    </div>
);

const LineFollowerEffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg viewBox="0 0 200 100" className="w-full h-full opacity-60">
            <path d="M 0 50 L 50 50 L 50 20 L 150 20 L 150 80 L 200 80" fill="none" stroke={hexColor} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="animate-[draw-maze_4s_linear_infinite]" strokeDasharray="300" strokeDashoffset="300" />
            <circle r="6" fill={hexColor} className="animate-[follow-maze_4s_linear_infinite] drop-shadow-[0_0_10px_currentColor]" />
        </svg>
        <style jsx>{`
      @keyframes draw-maze { 0% { stroke-dashoffset: 300; } 50%, 100% { stroke-dashoffset: 0; } }
      @keyframes follow-maze {
        0%, 100% { transform: translate(0px, 50px); opacity: 0; }
        5% { opacity: 1; transform: translate(0px, 50px); }
        15% { transform: translate(50px, 50px); }
        22% { transform: translate(50px, 20px); }
        35% { transform: translate(150px, 20px); }
        42% { transform: translate(150px, 80px); }
        50% { transform: translate(200px, 80px); opacity: 1; }
        55% { transform: translate(200px, 80px); opacity: 0; }
      }
    `}</style>
    </div>
);

const ThreeDEffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center perspective-[500px]">
        <div className="w-20 h-20 relative animate-[spin-3d_5s_linear_infinite] [transform-style:preserve-3d]">
            <div className={`absolute inset-0 border-2 border-${colorClass}-400/80 [transform:translateZ(40px)] drop-shadow-[0_0_10px_${hexColor}] bg-${colorClass}-500/10`} />
            <div className={`absolute inset-0 border-2 border-${colorClass}-400/80 [transform:translateZ(-40px)] bg-${colorClass}-500/10`} />
            <div className={`absolute inset-0 border-2 border-${colorClass}-400/80 [transform:translateX(40px)_rotateY(90deg)] bg-${colorClass}-500/10`} />
            <div className={`absolute inset-0 border-2 border-${colorClass}-400/80 [transform:translateX(-40px)_rotateY(-90deg)] bg-${colorClass}-500/10`} />
            <div className={`absolute inset-0 border-2 border-${colorClass}-400/80 [transform:translateY(40px)_rotateX(90deg)] bg-${colorClass}-500/10`} />
            <div className={`absolute inset-0 border-2 border-${colorClass}-400/80 [transform:translateY(-40px)_rotateX(-90deg)] bg-${colorClass}-500/10`} />
        </div>
        <style jsx>{`
      @keyframes spin-3d { 100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); } }
    `}</style>
    </div>
);

const VisionEffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className={`absolute w-32 h-32 border border-${colorClass}-500 transition-all duration-300 group-hover:w-40 group-hover:h-24`}>
            <div className={`absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-${colorClass}-400 animate-pulse`} />
            <div className={`absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-${colorClass}-400 animate-pulse`} />
            <div className={`absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-${colorClass}-400 animate-pulse`} />
            <div className={`absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-${colorClass}-400 animate-pulse`} />
            {/* Scanline interior */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-${colorClass}-400/80 drop-shadow-[0_0_8px_${hexColor}] animate-[scan-box_2s_ease-in-out_infinite_alternate]`} />
            {/* Geometry points inside */}
            <svg className="absolute inset-0 w-full h-full opacity-50">
                <polygon points="20,80 80,80 50,20" fill="none" stroke={hexColor} strokeWidth="1" strokeDasharray="10 5" className="animate-[dash_2s_linear_infinite]" />
            </svg>
        </div>
        <style jsx>{`
          @keyframes scan-box { 0% { transform: translateY(0); } 100% { transform: translateY(96px); } }
          @keyframes dash { to { stroke-dashoffset: -15; } }
        `}</style>
    </div>
);

const BioEffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30" />
        <div className="relative w-full h-32 flex items-center justify-center">
            <svg viewBox="0 0 500 100" className="w-[150%] h-full stroke-emerald-400 drop-shadow-[0_0_5px_rgba(52,211,153,0.8)] flex-none" fill="none" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
                <path d="M 0 50 L 100 50 L 120 20 L 140 80 L 160 50 L 300 50 L 320 10 L 340 90 L 360 50 L 500 50" className="animate-[slide-left_2s_linear_infinite]" />
            </svg>
            <div className="absolute left-1/2 top-0 bottom-0 w-32 bg-linear-to-r from-transparent via-emerald-400/20 to-transparent blur-md" />
        </div>
        <style jsx>{` @keyframes slide-left { 0% { transform: translateX(0); } 100% { transform: translateX(-200px); } } `}</style>
    </div>
);

const ScreenSenseEffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className={`w-36 h-24 border-4 border-${colorClass}-500/80 rounded-sm relative bg-black flex items-center justify-center overflow-hidden`}>
            <div className="w-10 h-1 bg-gray-600 absolute -bottom-1 left-1/2 -translate-x-1/2" />
            <div className={`w-full h-1 bg-${colorClass}-400 opacity-80 animate-[tv-glitch_0.5s_steps(2)_infinite]`} />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100%_4px]" />
        </div>
        <style jsx>{`
        @keyframes tv-glitch {
          0% { transform: translateY(-30px); opacity: 0.8; }
          50% { transform: translateY(10px) scaleY(2); opacity: 1; }
          100% { transform: translateY(40px); opacity: 0.2; }
        }
       `}</style>
    </div>
);

const CircuitEffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-black/50 border border-${colorClass}-500/50 flex items-center justify-center drop-shadow-[0_0_15px_${hexColor}]`}>
            <Cpu className={`w-10 h-10 text-${colorClass}-400 animate-pulse`} />
        </div>
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
        <style jsx>{` @keyframes dash { to { stroke-dashoffset: -30; } } `}</style>
    </div>
);

const AnalogEffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className={`w-[90%] h-24 border-2 border-${colorClass}-500/50 rounded-lg bg-${colorClass}-900/10 relative overflow-hidden backdrop-blur-sm`}>
            <div className={`absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.1)_1px,transparent_1px)] bg-[size:10px_10px]`} />
            <svg viewBox="0 0 200 50" className="w-[200%] h-full opacity-80" preserveAspectRatio="none">
                <path d="M 0 25 Q 25 0, 50 25 T 100 25 T 150 25 T 200 25" fill="none" stroke={hexColor} strokeWidth="2" className="animate-[analog-wave_1s_linear_infinite] drop-shadow-[0_0_8px_currentColor]" />
            </svg>
        </div>
        <style jsx>{`
        @keyframes analog-wave { 0% { transform: translateX(0); } 100% { transform: translateX(-100px); } }
       `}</style>
    </div>
);

const AeroEffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute w-[80px] h-[80px] drop-shadow-[0_0_20px_rgba(52,211,153,0.8)] animate-[drone-flight_4s_ease-in-out_infinite_alternate]">
            <svg viewBox="0 0 100 100" className="w-full h-full">
                <g fill="none" stroke={hexColor} strokeWidth="3" strokeLinecap="round">
                    <circle cx="50" cy="50" r="10" fill="#064e3b" />
                    <path d="M 30 30 L 50 50 L 70 30 M 30 70 L 50 50 L 70 70" />
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

const QMLEffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className={`absolute w-32 h-32 animate-[spin_8s_linear_infinite]`}>
            <svg viewBox="0 0 100 100" className="w-full h-full">
                <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke={hexColor} strokeWidth="1" transform="rotate(0 50 50)" className="opacity-70" />
                <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke={hexColor} strokeWidth="1" transform="rotate(60 50 50)" className="opacity-70" />
                <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke={hexColor} strokeWidth="1" transform="rotate(120 50 50)" className="opacity-70" />
                <circle cx="50" cy="50" r="6" fill={hexColor} className="animate-pulse drop-shadow-[0_0_10px_currentColor]" />

                <circle cx="90" cy="50" r="3" fill="#fff" className="animate-[qml-orbit_2s_linear_infinite] drop-shadow-[0_0_5px_currentColor]" style={{ transformOrigin: '50px 50px' }} />
                <circle cx="90" cy="50" r="3" fill="#fff" className="animate-[qml-orbit_2s_linear_infinite] drop-shadow-[0_0_5px_currentColor]" style={{ transformOrigin: '50px 50px', animationDelay: '0.6s' }} />
                <circle cx="90" cy="50" r="3" fill="#fff" className="animate-[qml-orbit_2s_linear_infinite] drop-shadow-[0_0_5px_currentColor]" style={{ transformOrigin: '50px 50px', animationDelay: '1.3s' }} />
            </svg>
        </div>
        <style jsx>{` @keyframes qml-orbit { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } } `}</style>
    </div>
);

const ScalaStreamEffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg viewBox="0 0 200 100" className="absolute w-full h-full">
            <path d="M 0 20 Q 50 20 100 50 T 200 80" fill="none" stroke={hexColor} strokeWidth="2" className="opacity-30" />
            <path d="M 0 80 Q 50 80 100 50 T 200 20" fill="none" stroke={hexColor} strokeWidth="2" className="opacity-30" />

            <circle className="animate-[scala-pkt-1_2s_ease-in-out_infinite] drop-shadow-[0_0_10px_currentColor]" r="4" fill="#fff" />
            <circle className="animate-[scala-pkt-2_2s_ease-in-out_infinite_0.5s] drop-shadow-[0_0_10px_currentColor]" r="4" fill="#fff" />
        </svg>
        <style jsx>{`
      @keyframes scala-pkt-1 {
        0% { transform: translate(0, 20px); opacity: 0; }
        20% { opacity: 1; }
        50% { transform: translate(100px, 50px); }
        80% { opacity: 1; }
        100% { transform: translate(200px, 80px); opacity: 0; }
      }
      @keyframes scala-pkt-2 {
        0% { transform: translate(0, 80px); opacity: 0; }
        20% { opacity: 1; }
        50% { transform: translate(100px, 50px); }
        80% { opacity: 1; }
        100% { transform: translate(200px, 20px); opacity: 0; }
      }
    `}</style>
    </div>
);

const NarrativaEffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
        <svg viewBox="0 0 100 50" className="w-24 h-12 drop-shadow-[0_0_15px_currentColor]" stroke={hexColor}>
            <path d="M 50 40 Q 25 20 5 30 L 5 10 Q 25 0 50 20 Q 75 0 95 10 L 95 30 Q 75 20 50 40 Z" fill="none" strokeWidth="2" />
            <path d="M 50 20 L 50 40" strokeWidth="2" />
            <path d="M 15 25 L 35 15 M 85 25 L 65 15" strokeWidth="1" className="opacity-50" />
        </svg>
        {[...Array(12)].map((_, i) => (
            <div key={i} className={`absolute w-1.5 h-1.5 bg-${colorClass}-400 rounded-full animate-[narr-rise_2s_ease-out_infinite]`}
                style={{
                    left: `${30 + Math.random() * 40}%`,
                    bottom: '30px',
                    animationDelay: `${Math.random() * 2}s`,
                    '--rx': `${(Math.random() - 0.5) * 60}px`
                }} />
        ))}
        <style jsx>{`
        @keyframes narr-rise {
          0% { transform: translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(var(--rx), -100px) scale(0); opacity: 0; }
        }
     `}</style>
    </div>
);

const ThemeForgeEffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute w-[60px] h-[60px] animate-[fly-space_3s_ease-out_infinite]">
            <svg viewBox="0 0 100 100" className="w-full h-full transform rotate-45" fill={hexColor}>
                <path d="M 50 10 L 90 90 L 50 70 L 10 90 Z" />
                <path d="M 35 80 L 50 100 L 65 80 Z" fill="#ef4444" className="animate-pulse" />
            </svg>
        </div>
        <div className={`absolute w-1 h-32 bg-${colorClass}-200 rotate-45 animate-[laser-shoot_3s_ease-out_infinite] drop-shadow-[0_0_10px_currentColor]`} />
        <style jsx>{`
         @keyframes fly-space {
           0% { left: -20%; bottom: -20%; }
           100% { left: 120%; bottom: 120%; }
         }
         @keyframes laser-shoot {
           0% { left: 10%; bottom: 10%; opacity: 1; }
           50% { left: 150%; bottom: 150%; opacity: 0; }
           100% { opacity: 0; }
         }
      `}</style>
    </div>
);

const WaterManagementEffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
        <div className={`w-3 h-4 bg-${colorClass}-400 rounded-b-full rounded-t-[50%] animate-[drop-fall_2s_ease-in_infinite] drop-shadow-[0_0_10px_currentColor]`} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square rounded-[50%] border-[3px] border-${colorClass}-400/80 animate-[ripple_2s_ease-out_infinite] [transform:scale(0)_scaleY(0.4)]`} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square rounded-[50%] border-[2px] border-${colorClass}-400/40 animate-[ripple_2s_ease-out_infinite_0.3s] [transform:scale(0)_scaleY(0.4)]`} />
        <style jsx>{`
        @keyframes drop-fall {
          0% { transform: translateY(-80px) scaleY(1.2); opacity: 1; }
          45% { transform: translateY(0px) scaleY(1); opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes ripple {
          0%, 45% { transform: translate(-50%, -50%) scale(0) scaleY(0.4); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(1) scaleY(0.4); opacity: 0; }
        }
      `}</style>
    </div>
);

const GroundUtilizationEffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8 perspective-1000">
        <div className="relative w-20 flex flex-col-reverse items-center justify-start">
            {[...Array(6)].map((_, i) => (
                <div key={i} className={`w-full h-5 border border-${colorClass}-400 bg-${colorClass}-500/10 [transform:skewX(-30deg)] animate-[build-up_3s_ease-out_infinite] drop-shadow-[0_0_5px_currentColor] outline outline-1 outline-black`} style={{ animationDelay: `${i * 0.15}s`, opacity: 0, marginTop: '-5px' }} />
            ))}
        </div>
        <style jsx>{`
         @keyframes build-up {
           0% { opacity: 0; transform: translateY(20px) skewX(-30deg); }
           20%, 80% { opacity: 1; transform: translateY(0) skewX(-30deg); }
           100% { opacity: 0; transform: translateY(0) skewX(-30deg); }
         }
       `}</style>
    </div>
);

const GlobalGourmetEffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className={`w-28 h-28 rounded-full border-2 border-${colorClass}-400/40 overflow-hidden relative animate-[spin_8s_linear_infinite] drop-shadow-[0_0_15px_currentColor]`}>
            <svg viewBox="0 0 100 100" className="w-full h-full opacity-60">
                <ellipse cx="50" cy="50" rx="20" ry="50" fill="none" stroke={hexColor} strokeWidth="2" />
                <ellipse cx="50" cy="50" rx="50" ry="20" fill="none" stroke={hexColor} strokeWidth="2" />
                <path d="M 50 0 L 50 100 M 0 50 L 100 50" stroke={hexColor} strokeWidth="2" />
            </svg>
            <div className={`absolute top-1/4 left-1/3 w-2.5 h-2.5 bg-${colorClass}-300 rounded-full animate-ping`} />
            <div className={`absolute bottom-1/4 right-1/3 w-2.5 h-2.5 bg-${colorClass}-300 rounded-full animate-ping`} style={{ animationDelay: '0.5s' }} />
            <div className={`absolute top-1/2 left-3/4 w-2.5 h-2.5 bg-${colorClass}-300 rounded-full animate-ping`} style={{ animationDelay: '1s' }} />
        </div>
    </div>
);

const MatiksEffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 flex items-center justify-center font-mono text-xl font-bold italic opacity-80">
            <div className={`absolute animate-[float-1_3s_ease-in-out_infinite] text-${colorClass}-400 drop-shadow-[0_0_8px_currentColor]`}>∫e^x dx</div>
            <div className={`absolute animate-[float-2_2.5s_ease-in-out_infinite] text-${colorClass}-300 drop-shadow-[0_0_8px_currentColor]`}>∑(n=1 to ∞)</div>
            <div className={`absolute animate-[float-3_3.5s_ease-in-out_infinite] text-${colorClass}-500 drop-shadow-[0_0_8px_currentColor]`}>∇×E = -∂B/∂t</div>
            <div className={`absolute animate-[float-4_4s_ease-in-out_infinite] text-${colorClass}-200 drop-shadow-[0_0_8px_currentColor]`}>E=mc²</div>
        </div>
        <style jsx>{`
        @keyframes float-1 { 0%, 100% { transform: translate(-40px, -30px) scale(0.8); } 50% { transform: translate(-20px, -50px) scale(1.1); } }
        @keyframes float-2 { 0%, 100% { transform: translate(40px, -40px) scale(1.1); } 50% { transform: translate(20px, -20px) scale(0.9); } }
        @keyframes float-3 { 0%, 100% { transform: translate(-30px, 40px) scale(0.9); } 50% { transform: translate(-50px, 20px) scale(1.2); } }
        @keyframes float-4 { 0%, 100% { transform: translate(30px, 30px) scale(1.2); } 50% { transform: translate(50px, 50px) scale(1); } }
      `}</style>
    </div>
);

// ==========================================
// CULTURAL SECTOR EFFECTS
// ==========================================

const DanceEffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className={`absolute w-32 h-32 border-[3px] border-${colorClass}-500/30 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]`} />
        <div className={`absolute w-16 h-16 border-[3px] border-${colorClass}-400/50 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite_0.5s]`} />
        <svg className="absolute w-full h-full opacity-80" preserveAspectRatio="none">
            <path d="M 0 100 Q 50 20 100 100 T 200 100" fill="none" stroke={hexColor} strokeWidth="3" strokeLinecap="round" className="animate-[dance-wave_3s_ease-in-out_infinite_alternate] drop-shadow-[0_0_8px_currentColor]" />
            <path d="M 0 150 Q 80 50 150 150 T 300 150" fill="none" stroke={hexColor} strokeWidth="1" strokeLinecap="round" opacity="0.5" className="animate-[dance-wave_2s_ease-in-out_infinite_alternate-reverse]" />
        </svg>
        <style jsx>{`
      @keyframes dance-wave { 0% { transform: translateY(0) scaleY(1); } 100% { transform: translateY(-40px) scaleY(1.8); } }
    `}</style>
    </div>
);

const MusicEffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-1.5">
        {[...Array(10)].map((_, i) => (
            <div
                key={i}
                className={`w-3 bg-${colorClass}-500 rounded-t-sm animate-[eq_0.5s_ease-in-out_infinite_alternate] shadow-[0_0_10px_currentColor]`}
                style={{
                    height: '10px',
                    animationDuration: `${0.2 + Math.random() * 0.4}s`,
                    animationDelay: `${Math.random() * 0.5}s`
                }}
            />
        ))}
        <style jsx>{` @keyframes eq { 0% { height: 10px; } 100% { height: 80px; } } `}</style>
    </div>
);

const ArtEffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 animate-[spin_10s_linear_infinite]">
            <g fill="none" strokeWidth="6" strokeLinecap="round">
                <path d="M 100 100 C 150 50, 200 150, 250 100" stroke={hexColor} className="animate-[dash_2s_ease-in-out_infinite_alternate] drop-shadow-[0_0_8px_currentColor]" strokeDasharray="100 200" />
                <path d="M 50 150 C 100 200, 200 50, 250 150" stroke={hexColor} opacity="0.6" strokeWidth="10" className="animate-[dash_3s_ease-in-out_infinite_alternate-reverse]" strokeDasharray="150 300" />
            </g>
        </svg>
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-${colorClass}-400 blur-[30px] opacity-40 animate-pulse`} />
    </div>
);

const DramaEffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="absolute top-0 left-1/4 w-32 h-[150%] bg-gradient-to-b from-white/30 to-transparent transform -skew-x-12 origin-top animate-[spotlight-left_4s_ease-in-out_infinite_alternate]" />
        <div className="absolute top-0 right-1/4 w-32 h-[150%] bg-gradient-to-b from-white/30 to-transparent transform skew-x-12 origin-top animate-[spotlight-right_4s_ease-in-out_infinite_alternate-reverse]" />

        <div className={`w-14 h-20 border-2 border-${colorClass}-400 rounded-full flex flex-col items-center justify-center gap-2 transform -rotate-12 translate-x-4 bg-black/60 backdrop-blur-md shadow-[0_0_15px_${hexColor}]`}>
            <div className="flex gap-2"><div className="w-2.5 h-2.5 rounded-full bg-white animate-bounce" /><div className="w-2.5 h-2.5 rounded-full bg-white animate-bounce" style={{ animationDelay: '0.2s' }} /></div>
            <div className={`w-6 h-1.5 rounded-full bg-${colorClass}-500 animate-pulse`} />
        </div>
        <div className={`w-14 h-20 border-2 border-white/50 rounded-full flex flex-col items-center justify-center gap-2 transform rotate-12 -translate-x-4 bg-black/60 backdrop-blur-md`}>
            <div className="flex gap-2"><div className="w-2.5 h-2.5 rounded-full bg-white animate-bounce" style={{ animationDelay: '0.5s' }} /><div className="w-2.5 h-2.5 rounded-full bg-white animate-bounce" style={{ animationDelay: '0.7s' }} /></div>
            <div className={`w-4 h-4 rounded-full border-2 border-white/50 animate-pulse`} />
        </div>
        <style jsx>{`
      @keyframes spotlight-left { 0% { transform: skewX(-10deg); } 100% { transform: skewX(-30deg); } }
      @keyframes spotlight-right { 0% { transform: skewX(10deg); } 100% { transform: skewX(30deg); } }
    `}</style>
    </div>
);

const MonoActEffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[150%] bg-gradient-to-b from-white/40 via-white/10 to-transparent origin-top animate-pulse" />
        <div className={`w-16 h-24 border-4 border-${colorClass}-400 rounded-full flex flex-col items-center justify-center gap-3 bg-black/80 backdrop-blur-md shadow-[0_0_20px_${hexColor}]`}>
            <div className="flex gap-3"><div className="w-3 h-3 rounded-full bg-white" /><div className="w-3 h-3 rounded-full bg-white" /></div>
            <div className={`w-8 h-2 rounded-full bg-${colorClass}-500`} />
        </div>
    </div>
);

const QuizEffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className={`text-8xl font-black font-serif text-${colorClass}-400 drop-shadow-[0_0_20px_currentColor] animate-[quiz-spin_3s_ease-in-out_infinite]`}>
            ?
        </div>
        {[...Array(8)].map((_, i) => (
            <div key={i} className={`absolute w-2 h-2 bg-${colorClass}-300 rounded-full animate-[quiz-particle_2s_ease-out_infinite]`} style={{ transform: `rotate(${i * 45}deg)`, animationDelay: `${i * 0.15}s` }} />
        ))}
        <style jsx>{`
        @keyframes quiz-spin {
          0%, 100% { transform: scale(1) rotateY(0deg); }
          50% { transform: scale(1.3) rotateY(180deg); }
        }
        @keyframes quiz-particle {
          0% { transform: rotate(var(--rotate, 0deg)) translateY(0) scale(1.5); opacity: 1; }
          100% { transform: rotate(var(--rotate, 0deg)) translateY(-80px) scale(0); opacity: 0; }
        }
      `}</style>
    </div>
);

const DebateEffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
        <div className="relative w-10 h-24 transform rotate-[25deg] animate-[mic-bounce_1s_ease-in-out_infinite_alternate] drop-shadow-[0_0_10px_currentColor]" style={{ color: hexColor }}>
            <div className={`w-10 h-14 border-[3px] border-${colorClass}-400 rounded-full bg-black/80`} />
            <div className={`w-1.5 h-10 bg-${colorClass}-500 mx-auto mt-1`} />
        </div>
        <div className="flex flex-col gap-1.5 items-center justify-center animate-pulse">
            <div className={`w-2.5 h-8 bg-${colorClass}-500 rounded-full shadow-[0_0_8px_currentColor]`} />
            <div className={`w-2.5 h-14 bg-${colorClass}-400 rounded-full shadow-[0_0_8px_currentColor]`} />
            <div className={`w-2.5 h-8 bg-${colorClass}-500 rounded-full shadow-[0_0_8px_currentColor]`} />
        </div>
        <div className="relative w-10 h-24 transform -rotate-[25deg] animate-[mic-bounce_1s_ease-in-out_infinite_alternate-reverse] drop-shadow-[0_0_10px_currentColor]" style={{ color: hexColor }}>
            <div className={`w-10 h-14 border-[3px] border-${colorClass}-400 rounded-full bg-black/80`} />
            <div className={`w-1.5 h-10 bg-${colorClass}-500 mx-auto mt-1`} />
        </div>
        <style jsx>{`
          @keyframes mic-bounce {
            0% { transform: rotate(var(--rot, 25deg)) translateY(0); }
            100% { transform: rotate(var(--rot, 25deg)) translateY(-15px); }
          }
       `}</style>
    </div>
);

const VLREffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="relative w-36 h-36 animate-[spin_1.5s_linear_infinite]">
            <div className={`absolute inset-0 border-[10px] border-black rounded-full drop-shadow-[0_0_20px_${hexColor}]`} />
            <div className={`absolute inset-3 border-[2px] border-${colorClass}-500/50 rounded-full`} />
            <div className={`absolute inset-6 border-[2px] border-${colorClass}-500/30 rounded-full`} />
            <div className={`absolute inset-9 border-[2px] border-${colorClass}-500/10 rounded-full`} />
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-${colorClass}-500 rounded-full flex items-center justify-center`}>
                <div className="w-3 h-3 bg-black rounded-full" />
            </div>
        </div>
        <div className="absolute top-4 right-8 w-2 h-20 bg-gray-400 origin-top animate-[tonearm_4s_ease-in-out_infinite_alternate] drop-shadow-xl z-30">
            <div className={`absolute bottom-0 right-0 w-6 h-8 bg-gray-300 border-b-4 border-${colorClass}-400 transform translate-y-full -translate-x-2`} />
        </div>
        <style jsx>{` @keyframes tonearm { 0% { transform: rotate(15deg); } 100% { transform: rotate(40deg); } } `}</style>
    </div>
);

const MysticEffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className={`absolute w-36 h-36 border-[6px] border-${colorClass}-500/60 rounded-full flex items-center justify-center bg-black/50 drop-shadow-[0_0_15px_${hexColor}]`}>
            <svg viewBox="0 0 100 100" className="w-[85%] h-[85%] opacity-90 animate-[shutter_2.5s_ease-in-out_infinite]">
                <polygon points="50,10 90,50 60,60 40,40" fill="none" stroke={hexColor} strokeWidth="3" />
                <polygon points="90,50 50,90 40,60 60,40" fill="none" stroke={hexColor} strokeWidth="3" />
                <polygon points="50,90 10,50 40,40 60,60" fill="none" stroke={hexColor} strokeWidth="3" />
                <polygon points="10,50 50,10 60,40 40,60" fill="none" stroke={hexColor} strokeWidth="3" />
            </svg>
        </div>
        <div className="absolute inset-0 bg-white opacity-0 animate-[flash_2.5s_ease-in-out_infinite] mix-blend-screen" />
        <style jsx>{`
        @keyframes shutter {
          0%, 100% { transform: rotate(0deg) scale(1); }
          45%, 55% { transform: rotate(60deg) scale(0.1); }
        }
        @keyframes flash {
          0%, 48%, 56%, 100% { opacity: 0; }
          50%, 52% { opacity: 1; }
        }
      `}</style>
    </div>
);

const PoetryEffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 200 100" className="w-[150%] h-[150%] drop-shadow-[0_0_8px_currentColor]" stroke={hexColor}>
                <path d="M 20 60 Q 40 10, 70 50 T 130 50 T 180 80" fill="none" strokeWidth="4" strokeLinecap="round" className="animate-[draw-path_3s_ease-out_infinite]" strokeDasharray="300" strokeDashoffset="300" />
            </svg>
        </div>
        <div className="absolute w-16 h-24 animate-[pen-move_3s_ease-out_infinite] drop-shadow-xl z-30">
            <svg viewBox="0 0 50 100" className="w-full h-full transform -rotate-45" fill="none" stroke={hexColor} strokeWidth="2">
                <path d="M 25 100 L 15 60 Q 25 20, 25 10 Q 25 20, 35 60 Z" fill={hexColor} fillOpacity="0.2" className="backdrop-blur-sm" />
                <line x1="25" y1="60" x2="25" y2="100" strokeWidth="3" />
                <circle cx="25" cy="80" r="2" fill="#fff" />
            </svg>
        </div>
        <style jsx>{`
         @keyframes draw-path { 0% { stroke-dashoffset: 300; } 70%, 100% { stroke-dashoffset: 0; } }
         @keyframes pen-move {
           0% { left: 0%; top: 50%; }
           20% { left: 20%; top: 30%; }
           50% { left: 60%; top: 50%; }
           70%, 100% { left: 100%; top: 70%; opacity: 0; }
         }
      `}</style>
    </div>
);

const StoryWritingEffect = ({ colorClass, hexColor }) => (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 flex flex-col justify-center gap-5 px-8 opacity-60 transform -skew-x-12 scale-110">
            <div className={`w-full h-1.5 bg-${colorClass}-400 rounded-full transform -translate-x-full animate-[typewriter_2s_ease-out_infinite_alternate] shadow-[0_0_10px_currentColor]`} />
            <div className={`w-3/4 h-1.5 bg-${colorClass}-400 rounded-full transform -translate-x-full animate-[typewriter_2.5s_ease-out_infinite_alternate-reverse] shadow-[0_0_10px_currentColor]`} />
            <div className={`w-5/6 h-1.5 bg-${colorClass}-400 rounded-full transform -translate-x-full animate-[typewriter_1.8s_ease-out_infinite_alternate] shadow-[0_0_10px_currentColor]`} />
        </div>
        {[...Array(6)].map((_, i) => (
            <div
                key={i}
                className="absolute text-white/80 text-3xl font-serif italic animate-ping drop-shadow-md"
                style={{
                    top: `${15 + Math.random() * 70}%`,
                    left: `${15 + Math.random() * 70}%`,
                    animationDuration: `${1 + Math.random()}s`,
                    animationDelay: `${Math.random() * 2}s`
                }}
            >
                "
            </div>
        ))}
        <style jsx>{` @keyframes typewriter { 0% { transform: translateX(-100%); } 100% { transform: translateX(0); } } `}</style>
    </div>
);

// ==========================================
// MAIN FACTORY COMPONENT
// ==========================================
export default function TileEffect({ id, tag, color }) {
    const hexMap = {
        red: "#ef4444", yellow: "#eab308", blue: "#3b82f6", cyan: "#06b6d4",
        emerald: "#10b981", orange: "#f97316", violet: "#8b5cf6", amber: "#f59e0b",
        purple: "#a855f7", green: "#22c55e", rose: "#f43f5e"
    };
    const hexColor = hexMap[color] || "#fff";

    const renderBackground = () => (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className={`absolute inset-0 bg-linear-to-br from-${color}-500/20 via-black/50 to-black/80`} />
            <div className={`absolute -right-10 -bottom-10 w-40 h-40 bg-${color}-500/10 rounded-full blur-[40px] animate-pulse`} />
            <div className={`absolute -left-10 -top-10 w-32 h-32 bg-${color}-400/10 rounded-full blur-[30px]`} />
        </div>
    );

    let SceneComponent = null;

    // Tech
    if (id === "rc") SceneComponent = RacingEffect;
    else if (id === "robosoccer") SceneComponent = RoboSoccerEffect;
    else if (id === "line-follower") SceneComponent = LineFollowerEffect;
    else if (id === "3d-reconstruction") SceneComponent = ThreeDEffect;
    else if (id === "cv-obstacourse") SceneComponent = VisionEffect;
    else if (id === "patient-monitor") SceneComponent = BioEffect;
    else if (id === "screen-addiction") SceneComponent = ScreenSenseEffect;
    else if (id === "silicon-architects" || id === "analog-verse") {
        SceneComponent = id === "silicon-architects" ? CircuitEffect : AnalogEffect;
    }
    else if (id === "aero-artistry") SceneComponent = AeroEffect;
    else if (id === "qml") SceneComponent = QMLEffect;
    else if (id === "matiks") SceneComponent = MatiksEffect;
    else if (id === "scalastream") SceneComponent = ScalaStreamEffect;
    else if (id === "narrativa") SceneComponent = NarrativaEffect;
    else if (id === "theme-forge") SceneComponent = ThemeForgeEffect;
    else if (id === "water-management") SceneComponent = WaterManagementEffect;
    else if (id === "ground-utilization") SceneComponent = GroundUtilizationEffect;
    else if (id === "global-gourmet") SceneComponent = GlobalGourmetEffect;

    // Cultural
    else if (id === "dance") SceneComponent = DanceEffect;
    else if (id === "music") SceneComponent = MusicEffect;
    else if (id === "nukkad-natak") SceneComponent = DramaEffect;
    else if (id === "mono-act") SceneComponent = MonoActEffect;
    else if (id === "canvas") SceneComponent = ArtEffect;
    else if (id === "debate") SceneComponent = DebateEffect;
    else if (id === "quiz") SceneComponent = QuizEffect;
    else if (id === "VLR") SceneComponent = VLREffect;
    else if (id === "mystic") SceneComponent = MysticEffect;
    else if (id === "poetry-slam" || id === "poetry") SceneComponent = PoetryEffect;
    else if (id === "story-writing") SceneComponent = StoryWritingEffect;

    // Fallback if I missed any (should not trigger!)
    else SceneComponent = MatiksEffect;

    return (
        <>
            {renderBackground()}
            {SceneComponent && <SceneComponent colorClass={color} hexColor={hexColor} />}
        </>
    );
}
