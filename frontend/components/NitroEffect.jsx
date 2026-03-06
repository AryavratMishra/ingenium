"use client";

import { Flame, Zap } from "lucide-react";

const BuggySVG = ({ color = "#22d3ee" }) => (
  <div className="relative w-full h-full">
    {/* Trailing Exhaust */}
    <div className="absolute top-1/2 -translate-y-1/2 -left-full w-full h-2 bg-gradient-to-r from-transparent via-cyan-400 to-white blur-[2px] transform -skew-x-12 opacity-80" />
    <svg width="100%" height="auto" viewBox="0 0 200 80" className="opacity-100">
      <g fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Chassis */}
        <path d="M 20 60 L 40 30 L 70 20 L 120 20 L 150 35 L 180 40 L 190 60 Z" fill="#0f172a" />
        {/* Roll Cage */}
        <path d="M 60 20 L 80 5 L 110 5 L 130 20" stroke="#fff" strokeWidth="3" />
        <path d="M 95 5 L 95 20" stroke="#fff" strokeWidth="2" />
        {/* Windows/Visor */}
        <path d="M 120 20 L 145 35 L 125 45 L 100 45 Z" fill={color} className="animate-pulse" />
        {/* Rear Spoiler */}
        <path d="M 30 30 L 10 15 L 40 15 Z" fill="#0f172a" />
        {/* Rear Wheel Context */}
        <circle cx="45" cy="55" r="15" fill="#020617" stroke={color} strokeWidth="4" />
        <circle cx="45" cy="55" r="5" fill="#fff" />
        {/* Front Wheel Context */}
        <circle cx="155" cy="55" r="15" fill="#020617" stroke={color} strokeWidth="4" />
        <circle cx="155" cy="55" r="5" fill="#fff" />
        {/* Exhaust Pipe Glow */}
        <path d="M 20 45 L 5 45" stroke="#fff" strokeWidth="3" />
      </g>
    </svg>
  </div>
);

export default function NitroEffect() {
  return (
    <>
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
      </div>

      {/* High Speed Hover Buggies (Z-20 escapes mix-blend-screen and overlaps page.jsx text which is Z-10) */}
      <div className="absolute inset-0 overflow-x-hidden pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

        {/* Buggy 1 (Farthest back, smallest, slowest) */}
        <div className="absolute bottom-6 -left-[50%] w-[80px] group-hover:animate-fly-by-1 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)] opacity-60">
          <BuggySVG color="#38bdf8" />
        </div>

        {/* Buggy 2 (Middle distance) */}
        <div className="absolute bottom-1 -left-[50%] w-[100px] group-hover:animate-fly-by-2 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] opacity-90">
          <BuggySVG color="#22d3ee" />
        </div>

        {/* Buggy 3 (Closest, largest, fastest) */}
        <div className="absolute -bottom-2 -left-[50%] w-[120px] group-hover:animate-fly-by-3 drop-shadow-[0_0_20px_rgba(6,182,212,1)] z-30">
          <BuggySVG color="#06b6d4" />
        </div>
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
        @keyframes fly-by-1 {
          0% {
            left: -50%;
            transform: rotate(0deg);
          }
          100% {
            left: 150%;
            transform: rotate(0deg);
          }
        }
        @keyframes fly-by-2 {
          0% {
            left: -60%;
            transform: rotate(0deg);
          }
          100% {
            left: 150%;
            transform: rotate(0deg);
          }
        }
        @keyframes fly-by-3 {
          0% {
            left: -70%;
            transform: rotate(0deg);
          }
          100% {
            left: 150%;
            transform: rotate(0deg);
          }
        }
        .animate-fly-by-1 {
          animation: fly-by-1 1.5s linear infinite 0.2s;
        }
        .animate-fly-by-2 {
          animation: fly-by-2 1.2s linear infinite 0.8s;
        }
        .animate-fly-by-3 {
          animation: fly-by-3 0.8s linear infinite 0.1s;
        }
      `}</style>
    </>
  );
}
