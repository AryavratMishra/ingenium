"use client";

import { Flame, Zap } from "lucide-react";

export default function NitroEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      {/* Dynamic Background Glow - Increased Opacity */}
      <div className="absolute inset-0 bg-linear-to-br from-cyan-500/30 via-blue-600/50 to-indigo-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Speed Lines Container - Increased Visibility */}
      <div className="absolute inset-0 w-full h-full transform -skew-x-12 opacity-80">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[1px] bg-linear-to-r from-transparent via-cyan-400 to-transparent w-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: "-100%",
              animation: `speed-line ${0.5 + Math.random() * 1.5}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Subtle Racing Stripes - Brighter */}
      <div className="absolute right-0 top-0 bottom-0 w-12 flex gap-1 -skew-x-12 opacity-40 transform translate-x-4 group-hover:translate-x-0 transition-transform duration-500 delay-100">
        <div className="w-2 h-full bg-red-500/80" />
        <div className="w-1 h-full bg-white/80" />
      </div>

      {/* Nitrous Flame Base Center Glow - Brighter */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-40 h-40 bg-cyan-400/40 rounded-full blur-[30px] animate-pulse" />

      {/* Stylized Icons Background */}
      <div className="absolute py-4 right-4 bottom-4 opacity-10 group-hover:opacity-30 transition-all duration-300 transform group-hover:scale-125 group-hover:rotate-12 group-hover:-translate-y-2 flex gap-2">
        <Zap className="w-16 h-16 text-cyan-400" strokeWidth={1.5} />
        <Flame className="w-16 h-16 text-blue-400 hidden sm:block" strokeWidth={1.5} />
      </div>

      {/* High Speed Hover Buggy */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-[50%] group-hover:animate-fly-by z-10 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">
        {/* Trailing Exhaust */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-24 w-32 h-4 bg-linear-to-r from-transparent via-cyan-400 to-white blur-sm transform -skew-x-12" />
        <div className="absolute top-1/2 -translate-y-1/2 -left-16 w-16 h-12 bg-cyan-500/30 blur-xl rounded-full" />

        {/* SVG Buggy Body */}
        <svg width="120" height="auto" viewBox="0 0 200 80" className="opacity-90">
          <g fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Chassis */}
            <path d="M 20 60 L 40 30 L 70 20 L 120 20 L 150 35 L 180 40 L 190 60 Z" fill="#0f172a" />
            {/* Roll Cage */}
            <path d="M 60 20 L 80 5 L 110 5 L 130 20" stroke="#fff" strokeWidth="3" />
            <path d="M 95 5 L 95 20" stroke="#fff" strokeWidth="2" />
            {/* Windows/Visor */}
            <path d="M 120 20 L 145 35 L 125 45 L 100 45 Z" fill="#22d3ee" className="animate-pulse" />
            {/* Rear Spoiler */}
            <path d="M 30 30 L 10 15 L 40 15 Z" fill="#0f172a" />
            {/* Rear Wheel Context */}
            <circle cx="45" cy="55" r="15" fill="#020617" stroke="#38bdf8" strokeWidth="4" />
            <circle cx="45" cy="55" r="5" fill="#fff" />
            {/* Front Wheel Context */}
            <circle cx="155" cy="55" r="15" fill="#020617" stroke="#38bdf8" strokeWidth="4" />
            <circle cx="155" cy="55" r="5" fill="#fff" />
            {/* Exhaust Pipe Glow */}
            <path d="M 20 45 L 5 45" stroke="#fff" strokeWidth="3" />
          </g>
        </svg>
      </div>

      <style jsx>{`
        @keyframes speed-line {
          0% {
            transform: translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(200%);
            opacity: 0;
          }
        }
        @keyframes fly-by {
          0% {
            left: -50%;
            transform: translateY(-50%) rotate(2deg) scale(0.9);
          }
          40% {
            transform: translateY(-50%) rotate(-1deg) scale(1);
          }
          100% {
            left: 150%;
            transform: translateY(-50%) rotate(0deg) scale(1.1);
          }
        }
        .animate-fly-by {
          animation: fly-by 1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
      `}</style>
    </div >
  );
}
