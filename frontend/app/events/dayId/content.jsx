"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Terminal,
  MapPin,
  Clock,
  Mic,
  Sparkles,
  Cpu,
  Trophy,
  Coffee,
  Info,
  Zap,
  Loader,
} from "lucide-react";

// Custom CSS Animations injected dynamically
const customAnimations = `
@keyframes float-up {
    0% { transform: translateY(20px) scale(0.8) rotate(0deg); opacity: 0; }
    20% { opacity: 0.8; }
    80% { opacity: 0.8; }
    100% { transform: translateY(-80px) scale(1.2) rotate(45deg); opacity: 0; }
}
@keyframes float-down {
    0% { transform: translateY(-20px) scale(0.8) rotate(0deg); opacity: 0; }
    20% { opacity: 0.8; }
    80% { opacity: 0.8; }
    100% { transform: translateY(80px) scale(1.2) rotate(-45deg); opacity: 0; }
}
@keyframes scanline {
    0% { transform: translateY(-10px); opacity: 0; }
    10% { opacity: 0.8; }
    90% { opacity: 0.8; }
    100% { transform: translateY(150px); opacity: 0; }
}
@keyframes equalizer-1 { 0%, 100% { height: 20%; } 50% { height: 80%; } }
@keyframes equalizer-2 { 0%, 100% { height: 40%; } 50% { height: 100%; } }
@keyframes equalizer-3 { 0%, 100% { height: 10%; } 50% { height: 60%; } }
@keyframes slash {
    0% { transform: translateX(-50%) skew(-45deg); opacity: 0; }
    50% { opacity: 0.8; }
    100% { transform: translateX(150%) skew(-45deg); opacity: 0; }
}
@keyframes ping-slow {
    0% { transform: scale(0.5); opacity: 0.8; }
    100% { transform: scale(2.5); opacity: 0; }
}
/* Bespoke Animations */
@keyframes spin-reverse { 100% { transform: rotate(-360deg); } }
@keyframes bounce-soft { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
@keyframes neon-pulse { 0%, 100% { box-shadow: 0 0 10px currentColor, 0 0 20px currentColor; } 50% { box-shadow: 0 0 20px currentColor, 0 0 40px currentColor; } }
@keyframes lightcycle { 0% { transform: translateX(-200%); } 100% { transform: translateX(200%); } }
@keyframes flicker { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.1); } }
@keyframes laser-sweep { 0% { transform: rotate(-30deg) translateY(-50px); opacity: 0; } 50% { opacity: 1; } 100% { transform: rotate(-30deg) translateY(300px); opacity: 0; } }
@keyframes laser-sweep-rev { 0% { transform: rotate(30deg) translateY(-50px); opacity: 0; } 50% { opacity: 1; } 100% { transform: rotate(30deg) translateY(300px); opacity: 0; } }
@keyframes spotlight-swing { 0%, 100% { transform: rotate(-20deg) scaleY(1); } 50% { transform: rotate(20deg) scaleY(1.5); } }
@keyframes spin-vinyl { 100% { transform: rotate(360deg); } }
@keyframes drone-formation { 0%, 100% { transform: translate(0, 0); } 33% { transform: translate(15px, -20px); } 66% { transform: translate(-15px, -20px); } }
@keyframes firework-explode { 0% { transform: scale(0); opacity: 1; } 100% { transform: scale(2.5); opacity: 0; } }
`;

// The timeline data
const timelines = {
  "day-0": {
    title: "Day 0",
    date: "13 March 2026",
    theme: "from-amber-900/40 to-black",
    accent: "text-amber-500",
    border: "border-amber-500/30",
    bgAccent: "bg-amber-500",
    glow: "shadow-[0_0_30px_rgba(245,158,11,0.3)]",
    events: [
      {
        id: 1,
        title: "Opening ceremony",
        time: "18:00 - 18:30",
        venue: "Nalanda Auditorium",
      },
      {
        id: 2,
        title: "SPIC MACAY performance",
        time: "18:30 - 19:30",
        venue: "Nalanda Auditorium",
      },
      {
        id: 3,
        title: "Kavyanjali",
        time: "19:30 - 22:00",
        venue: "Nalanda Auditorium",
      },
    ],
  },
  "day-1": {
    title: "Day 1",
    date: "14 March 2026",
    theme: "from-blue-900/40 to-black",
    accent: "text-blue-500",
    border: "border-blue-500/30",
    bgAccent: "bg-blue-500",
    glow: "shadow-[0_0_30px_rgba(59,130,246,0.3)]",
    events: [
      {
        id: 1,
        title: "Competitions",
        time: "10:00 - 18:00",
        venue: "Lecture Hall Complex",
      },
      {
        id: 2,
        title: "Defense Exposition",
        time: "11:00 - 17:00",
        venue: "Kshitij Mandapam",
      },
      {
        id: 3,
        title: "Technical Exposition",
        time: "11:00 - 17:00",
        venue: "HJB Ground",
      },
      {
        id: 4,
        title: "Technical Experience Zone",
        time: "11:00 - 17:00",
        venue: "HJB Ground",
      },
      {
        id: 5,
        title: "Food Fest Day",
        time: "11:00 - 18:00",
        venue: "HJB Ground",
      },
      {
        id: 6,
        title: "Food Fest Evening",
        time: "19:00 - 21:00",
        venue: "NCC Ground",
      },
      {
        id: 7,
        title: "Anchor Session",
        time: "19:30 - 20:00",
        venue: "NCC Ground",
      },
      { id: 8, title: "Tron Act", time: "20:00 - 20:10", venue: "NCC Ground" },
      {
        id: 9,
        title: "Laser LED\nFt.Illuminati",
        time: "20:10 - 20:40",
        venue: "NCC Ground",
      },
      //   {
      //     id: 11,
      //     title: "Anchor Session",
      //     time: "20:40 - 20:45",
      //     venue: "NCC Ground",
      //   },
      {
        id: 12,
        title: "Stand-up comedy\nFt.Ashish Solanki",
        time: "20:45 - 21:30",
        venue: "NCC Ground",
      },
      { id: 13, title: "DJ Night", time: "21:30 - 23:00", venue: "NCC Ground" },
    ].sort((a, b) => a.time.localeCompare(b.time)),
  },
  "day-2": {
    title: "Day 2",
    date: "15 March 2026",
    theme: "from-purple-900/40 to-black",
    accent: "text-purple-500",
    border: "border-purple-500/30",
    bgAccent: "bg-purple-500",
    glow: "shadow-[0_0_30px_rgba(168,85,247,0.3)]",
    events: [
      {
        id: 1,
        title: "Competitions Session 1",
        time: "10:00 - 12:30",
        venue: "Lecture Hall Complex",
      },
      {
        id: 2,
        title: "Technical Exposition",
        time: "11:00 - 17:00",
        venue: "HJB Ground",
      },
      {
        id: 3,
        title: "Technical Experience Zone",
        time: "11:00 - 17:00",
        venue: "HJB Ground",
      },
      {
        id: 4,
        title: "Food Fest Day",
        time: "11:00 - 18:00",
        venue: "HJB Ground",
      },
      {
        id: 5,
        title: "Food Fest Evening",
        time: "19:00 - 21:00",
        venue: "NCC Ground",
      },
      {
        id: 6,
        title: "Words of wisdom\nft. Acharya Prashant",
        time: "13:00 - 16:00",
        venue: "Nalanda Auditorium",
      },
      {
        id: 7,
        title: "Competitions Session 2",
        time: "16:00 - 19:00",
        venue: "Lecture Hall Complex",
      },
      {
        id: 8,
        title: "Opening DJ",
        time: "20:00 - 21:00",
        venue: "NCC Ground",
      },
      {
        id: 9,
        title: "Anchor Session",
        time: "21:00 - 21:15",
        venue: "NCC Ground",
      },
      { id: 10, title: "DJ Night\nft.DJ Tejas", time: "21:15 - 22:30", venue: "NCC Ground" },
      {
        id: 11,
        title: "Drone Show",
        time: "22:30 - 22:50",
        venue: "NCC Ground",
      },
      {
        id: 12,
        title: "Closing Ceremony",
        time: "22:50 - 23:00",
        venue: "NCC Ground",
      },
    ].sort((a, b) => a.time.localeCompare(b.time)),
  },
};

// Helper function to dynamically style events based on their title and keywords
function getEventCategory(title) {
  const lowerTitle = title.toLowerCase();

  // ----------------------------------------------------
  // BESPOKE EVENT OVERRIDES (Must run before generic categories)
  // ----------------------------------------------------

  if (lowerTitle.includes("opening ceremony")) {
    return {
      icon: Mic,
      label: "PROTOCOL",
      color: "text-amber-400",
      bg: "bg-amber-400/10",
      border: "border-amber-400/20",
      hoverEffect: (
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden z-0 flex justify-between px-6 md:px-12">
          <div className="w-4 md:w-8 h-[200%] bg-linear-to-t from-amber-500/30 to-transparent blur-md group-hover:animate-[float-up_3s_ease-in-out_infinite]" />
          <div className="w-6 md:w-12 h-[200%] bg-linear-to-t from-amber-400/20 to-transparent blur-lg group-hover:animate-[float-up_4s_ease-in-out_infinite_0.5s]" />
          <div className="w-2 md:w-6 h-[200%] bg-linear-to-t from-amber-300/30 to-transparent blur-sm group-hover:animate-[float-up_2s_ease-in-out_infinite_1s]" />
        </div>
      ),
    };
  }

  if (lowerTitle.includes("spic macay")) {
    return {
      icon: Sparkles,
      label: "CULTURE",
      color: "text-rose-400",
      bg: "bg-rose-400/10",
      border: "border-rose-400/20",
      hoverEffect: (
        <div className="absolute top-1/2 right-0 md:right-[10%] -translate-y-1/2 w-48 h-48 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-0 flex items-center justify-center">
          <div className="absolute inset-0 border border-rose-500/30 rounded-full group-hover:animate-[spin-vinyl_10s_linear_infinite]" />
          <div className="absolute inset-4 border border-rose-400/30 rounded-full group-hover:animate-[spin-reverse_7s_linear_infinite]" />
          <div className="absolute inset-8 border border-rose-300/20 rotate-45 group-hover:animate-[spin-vinyl_15s_linear_infinite]" />
          <div className="absolute inset-8 border border-rose-300/20 rotate-12 group-hover:animate-[spin-vinyl_15s_linear_infinite]" />
        </div>
      ),
    };
  }

  if (lowerTitle.includes("kavyanjali")) {
    return {
      icon: Mic,
      label: "POETRY",
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "border-purple-400/20",
      hoverEffect: (
        <div className="absolute top-[20%] right-[10%] w-[60%] md:w-[40%] flex flex-col gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0">
          <div className="h-0.5 bg-linear-to-r from-transparent via-purple-400/50 to-transparent group-hover:animate-[lightcycle_3s_ease-in-out_infinite]" />
          <div className="h-0.5 w-3/4 self-end bg-linear-to-r from-transparent via-purple-300/40 to-transparent group-hover:animate-[lightcycle_4s_ease-in-out_infinite_1s]" />
          <div className="h-0.5 w-5/6 bg-linear-to-r from-transparent via-purple-500/40 to-transparent group-hover:animate-[lightcycle_3.5s_ease-in-out_infinite_0.5s]" />
        </div>
      ),
    };
  }

  if (lowerTitle.includes("food fest")) {
    return {
      icon: Coffee,
      label: "FESTIVAL",
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
      border: "border-emerald-400/20",
      hoverEffect: (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-emerald-400 rounded-full blur-[1px] group-hover:animate-[bounce-soft_2s_ease-in-out_infinite]"
              style={{
                width: `${(i % 3) + 4}px`,
                height: `${(i % 3) + 4}px`,
                top: `${20 + Math.random() * 60}%`,
                right: `${10 + Math.random() * 40}%`,
                animationDelay: `${Math.random()}s`,
              }}
            />
          ))}
          {[...Array(4)].map((_, i) => (
            <div
              key={`s-${i}`}
              className="absolute w-8 h-8 border-b-2 border-emerald-400/50 rounded-full group-hover:animate-[spin-vinyl_4s_linear_infinite]"
              style={{
                bottom: `${10 + Math.random() * 30}%`,
                right: `${20 + Math.random() * 30}%`,
                animationDirection: i % 2 === 0 ? "normal" : "reverse",
                animationDelay: `${Math.random()}s`,
              }}
            />
          ))}
        </div>
      ),
    };
  }

  if (lowerTitle.includes("anchor session")) {
    return {
      icon: Mic,
      label: "BROADCAST",
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "border-blue-400/20",
      hoverEffect: (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[60%] right-[10%] md:right-[25%] w-2 h-2 rounded-full bg-blue-500">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-blue-400/60 group-hover:animate-[ping-slow_2s_ease-out_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-cyan-300/40 group-hover:animate-[ping-slow_2s_ease-out_infinite_0.6s]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-blue-300/20 group-hover:animate-[ping-slow_2s_ease-out_infinite_1.2s]" />
          </div>
        </div>
      ),
    };
  }

  if (lowerTitle.includes("technical experience zone")) {
    return {
      icon: Cpu,
      label: "EXPERIENCE",
      color: "text-cyan-400",
      bg: "bg-cyan-400/10",
      border: "border-cyan-400/20",
      hoverEffect: (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0">
          <div className="absolute top-[30%] right-[10%] md:right-[30%] w-25 h-1 bg-cyan-500/50 group-hover:animate-[lightcycle_2s_linear_infinite]" />
          <div className="absolute top-[30%] right-[10%] md:right-[30%] w-0.5 h-20 bg-cyan-400/50 group-hover:animate-[laser-sweep_2s_linear_infinite_1s]" />
          <div className="absolute top-[30%] right-[10%] md:right-[30%] w-3 h-3 bg-cyan-300/80 rounded-sm group-hover:animate-[ping-slow_1.5s_linear_infinite]" />
          <div className="absolute top-[50%] right-[5%] md:right-[15%] w-20 h-1 bg-cyan-500/50 group-hover:animate-[lightcycle_2.5s_linear_infinite_0.5s]" />
          <div className="absolute top-[50%] right-[5%] md:right-[15%] w-2 h-2 bg-cyan-400/80 rounded-sm group-hover:animate-[ping-slow_2s_linear_infinite_0.5s]" />
        </div>
      ),
    };
  }

  if (lowerTitle.includes("tron act")) {
    return {
      icon: Sparkles,
      label: "SPECTACLE",
      color: "text-cyan-400",
      bg: "bg-cyan-400/10",
      border: "border-cyan-400/20",
      hoverEffect: (
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden z-0">
          <div className="absolute top-[40%] left-[-10%] w-[120%] h-1 bg-cyan-400 group-hover:animate-[lightcycle_1.5s_linear_infinite]" />
          <div className="absolute top-[60%] left-[-10%] w-[120%] h-1 bg-cyan-400 group-hover:animate-[lightcycle_2s_linear_infinite_0.5s]" />
          <div className="absolute top-1/2 right-[20%] w-16 h-16 border-2 border-cyan-400 rounded-lg rotate-45 group-hover:animate-[neon-pulse_2s_ease-in-out_infinite] text-cyan-400" />
        </div>
      ),
    };
  }

  if (lowerTitle.includes("led & fire show")) {
    return {
      icon: Sparkles,
      label: "SPECTACLE",
      color: "text-orange-500",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20",
      hoverEffect: (
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden flex items-end justify-center z-0">
          <div className="absolute bottom-[-10%] w-24 h-24 bg-orange-500/40 blur-[20px] rounded-full group-hover:animate-[flicker_0.5s_linear_infinite]" />
          <div className="absolute bottom-0 right-[20%] w-3 h-3 bg-yellow-400 rounded-full group-hover:animate-[float-up_1.5s_ease-in_infinite]" />
          <div className="absolute bottom-0 right-[30%] w-2 h-2 bg-orange-400 rounded-full group-hover:animate-[float-up_2s_ease-in_infinite_0.5s]" />
          <div className="absolute bottom-0 right-[10%] w-4 h-4 bg-red-500 rounded-full group-hover:animate-[float-up_1.2s_ease-in_infinite_0.2s]" />
        </div>
      ),
    };
  }

  if (lowerTitle.includes("laser show") || lowerTitle.includes("laser led")) {
    return {
      icon: Sparkles,
      label: "SPECTACLE",
      color: "text-green-500",
      bg: "bg-green-500/10",
      border: "border-green-500/20",
      hoverEffect: (
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden z-0">
          <div className="absolute -top-12.5 right-[20%] w-0.5 h-75 bg-green-500 shadow-[0_0_15px_#22c55e] group-hover:animate-[laser-sweep_2s_ease-in-out_infinite]" />
          <div className="absolute -top-12.5 right-[40%] w-0.5 h-75 bg-green-400 shadow-[0_0_15px_#4ade80] group-hover:animate-[laser-sweep-rev_2.5s_ease-in-out_infinite_0.5s]" />
        </div>
      ),
    };
  }

  if (
    lowerTitle.includes("stand-up comedy") ||
    lowerTitle.includes("standup comedy")
  ) {
    return {
      icon: Mic,
      label: "COMEDY",
      color: "text-yellow-400",
      bg: "bg-yellow-400/10",
      border: "border-yellow-400/20",
      hoverEffect: (
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden z-0">
          <div className="absolute top-[-20%] right-[30%] w-25 h-75 bg-linear-to-b from-yellow-100/40 to-transparent blur-[10px] origin-top group-hover:animate-[spotlight-swing_4s_ease-in-out_infinite]" />
          <div className="absolute bottom-[20%] right-[20%] w-4 h-4 rounded-full bg-yellow-400 group-hover:animate-[float-up_2s_ease-in_infinite]" />
          <div className="absolute bottom-[30%] right-[35%] w-2 h-2 rounded-full bg-yellow-300 group-hover:animate-[float-up_2.5s_ease-in_infinite_0.5s]" />
        </div>
      ),
    };
  }

  if (lowerTitle.includes("opening dj") || lowerTitle.includes("dj night")) {
    return {
      icon: Mic,
      label: "ENTERTAINMENT",
      color: "text-indigo-400",
      bg: "bg-indigo-400/10",
      border: "border-indigo-400/20",
      hoverEffect: (
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden z-0">
          <div className="absolute bottom-[-20%] right-[5%] w-48 h-48 border-4 border-indigo-500/30 rounded-full border-dashed group-hover:animate-[spin-vinyl_4s_linear_infinite] flex items-center justify-center">
            <div className="w-12 h-12 bg-indigo-500/50 rounded-full" />
          </div>
          <div className="absolute bottom-0 left-[20%] w-25 h-10 flex items-end justify-center gap-1 opacity-60">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-3 bg-indigo-400 rounded-t-sm"
                style={{
                  animation: `equalizer-${(i % 3) + 1} ${0.3 + Math.random() * 0.4}s ease-in-out infinite alternate`,
                }}
              />
            ))}
          </div>
        </div>
      ),
    };
  }

  if (lowerTitle.includes("drone show")) {
    return {
      icon: Sparkles,
      label: "SPECTACLE",
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "border-blue-400/20",
      hoverEffect: (
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden z-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_8px_#60a5fa] group-hover:animate-[drone-formation_3s_ease-in-out_infinite]"
              style={{
                top: `${20 + Math.random() * 50}%`,
                right: `${10 + Math.random() * 40}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      ),
    };
  }

  if (lowerTitle.includes("closing ceremony")) {
    return {
      icon: Mic,
      label: "PROTOCOL",
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
      hoverEffect: (
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden z-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-amber-400 rounded-full group-hover:animate-[firework-explode_1.5s_ease-out_infinite]"
              style={{
                top: `${20 + Math.random() * 40}%`,
                right: `${10 + Math.random() * 50}%`,
                boxShadow:
                  "0 0 10px 5px rgba(251, 191, 36, 0.5), 0 0 20px 10px rgba(251, 191, 36, 0.2)",
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      ),
    };
  }

  // ----------------------------------------------------
  // GENERIC CATEGORY FALLBACKS
  // ----------------------------------------------------

  // Ceremony / Keynote
  if (
    lowerTitle.includes("ceremony") ||
    lowerTitle.includes("wisdom") ||
    lowerTitle.includes("anchor") ||
    lowerTitle.includes("opening dj")
  ) {
    return {
      icon: Mic,
      label: "PROTOCOL",
      color: "text-amber-400",
      bg: "bg-amber-400/10",
      border: "border-amber-400/20",
      hoverEffect: (
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-amber-400/40 rounded-full group-hover:animate-[ping-slow_3s_ease-out_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-amber-400/20 rounded-full group-hover:animate-[ping-slow_4s_ease-out_infinite_1s]" />
          <div className="absolute top-[20%] right-[20%] w-2 h-2 bg-amber-300 rounded-full blur-[1px] group-hover:animate-[float-up_3s_ease-in-out_infinite]" />
          <div className="absolute bottom-[20%] left-[30%] w-1.5 h-1.5 bg-amber-400 rounded-full blur-[1px] group-hover:animate-[float-up_4s_ease-in-out_infinite_1s]" />
        </div>
      ),
    };
  }
  // Refreshments / Food
  if (lowerTitle.includes("food") || lowerTitle.includes("dinner")) {
    return {
      icon: Coffee,
      label: "REFRESHMENT",
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
      border: "border-emerald-400/20",
      hoverEffect: (
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden z-0 flex items-end">
          {/* Rising Food/Steam Bubbles */}
          <div className="absolute bottom-0 right-[15%] w-8 h-8 rounded-full border border-emerald-400/30 flex items-center justify-center group-hover:animate-[float-up_3s_ease-in_infinite]">
            <div className="w-2 h-2 bg-emerald-400/50 rounded-full" />
          </div>
          <div className="absolute bottom-[-10%] right-[25%] w-12 h-12 rounded-full border border-emerald-400/20 flex items-center justify-center group-hover:animate-[float-up_4s_ease-in_infinite_1.5s]">
            <div className="w-4 h-4 bg-emerald-400/30 rounded-full" />
          </div>
          <div className="absolute bottom-[-5%] right-[5%] w-6 h-6 rounded-full border border-emerald-400/40 flex items-center justify-center group-hover:animate-[float-up_2.5s_ease-in_infinite_0.5s]" />
        </div>
      ),
    };
  }
  // Tech & Expositions
  if (
    lowerTitle.includes("tech") ||
    lowerTitle.includes("defense") ||
    lowerTitle.includes("exposition") ||
    lowerTitle.includes("zone")
  ) {
    return {
      icon: Cpu,
      label: "EXHIBITION",
      color: "text-cyan-400",
      bg: "bg-cyan-400/10",
      border: "border-cyan-400/20",
      hoverEffect: (
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden z-0">
          {/* Scanning laser line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400/60 shadow-[0_0_10px_rgba(34,211,238,0.8)] group-hover:animate-[scanline_2s_linear_infinite]" />
          {/* Crosshairs jumping */}
          <div className="absolute top-[30%] right-[30%] w-12 h-12 border border-cyan-400/40 group-hover:animate-[ping-slow_2s_ease-in-out_infinite]">
            <div className="absolute top-1/2 left-[-20%] w-[140%] h-0.5 bg-cyan-400/30" />
            <div className="absolute left-1/2 top-[-20%] h-[140%] w-0.5 bg-cyan-400/30" />
          </div>
          {/* Floating tech squares */}
          <div className="absolute bottom-[30%] left-[20%] w-3 h-3 border border-cyan-400/50 group-hover:animate-[float-down_3s_linear_infinite]" />
        </div>
      ),
    };
  }
  // Competitions
  if (lowerTitle.includes("competition")) {
    return {
      icon: Trophy,
      label: "COMPETITION",
      color: "text-rose-400",
      bg: "bg-rose-400/10",
      border: "border-rose-400/20",
      hoverEffect: (
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden z-0">
          {/* High speed slashes */}
          <div className="absolute top-0 left-[-20%] w-[150%] h-full flex flex-col justify-around py-8 group-hover:animate-[slash_1.5s_ease-in-out_infinite]">
            <div className="w-full h-4 bg-linear-to-r from-transparent via-rose-500/20 to-transparent skew-x-[-45deg]" />
            <div className="w-full h-8 bg-linear-to-r from-transparent via-rose-500/10 to-transparent skew-x-[-45deg] translate-x-12" />
          </div>
          {/* Floating triangles */}
          <svg
            viewBox="0 0 100 100"
            className="absolute top-[20%] right-[15%] w-10 h-10 fill-none stroke-rose-400/50 stroke-2 group-hover:animate-[float-up_2s_linear_infinite]"
          >
            <polygon points="50,10 90,90 10,90" />
          </svg>
          <svg
            viewBox="0 0 100 100"
            className="absolute top-[60%] right-[40%] w-6 h-6 fill-none stroke-rose-400/60 stroke-2 group-hover:animate-[float-up_3s_linear_infinite_0.5s] rotate-180"
          >
            <polygon points="50,10 90,90 10,90" />
          </svg>
        </div>
      ),
    };
  }
  // Entertainment & Shows
  if (
    lowerTitle.includes("dj ") ||
    lowerTitle.includes("show") ||
    lowerTitle.includes("comedy") ||
    lowerTitle.includes("macay") ||
    lowerTitle.includes("kavyanjali") ||
    lowerTitle.includes("tron") ||
    lowerTitle.includes("act") ||
    lowerTitle.includes("night")
  ) {
    return {
      icon: Sparkles,
      label: "ENTERTAINMENT",
      color: "text-fuchsia-400",
      bg: "bg-fuchsia-400/10",
      border: "border-fuchsia-400/20",
      hoverEffect: (
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden flex items-end justify-between px-12 z-0">
          {/* Bouncing Audio Equalizer */}
          <div className="relative w-full h-15 flex items-end justify-center gap-2 pb-4 opacity-40">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="w-3 bg-fuchsia-500/60 rounded-t-sm"
                style={{
                  animation: `equalizer-${(i % 3) + 1} ${0.5 + Math.random() * 0.5}s ease-in-out infinite alternate`,
                  animationDelay: `${Math.random() * 0.5}s`,
                }}
              />
            ))}
          </div>
          {/* Floating confetti/sparkles */}
          <div className="absolute top-[30%] left-[20%] w-2 h-2 bg-fuchsia-400 rotate-45 group-hover:animate-[float-down_2s_ease-in-out_infinite]" />
          <div className="absolute top-[20%] right-[30%] w-3 h-3 bg-fuchsia-500 rotate-12 group-hover:animate-[float-down_3s_ease-in-out_infinite]" />
          <div className="absolute top-[40%] right-[10%] w-1.5 h-1.5 bg-fuchsia-300 rotate-45 group-hover:animate-[float-down_2.5s_ease-in-out_infinite]" />
        </div>
      ),
    };
  }

  // Default
  return {
    icon: Info,
    label: "GENERAL",
    color: "text-gray-400",
    bg: "bg-gray-400/10",
    border: "border-gray-400/20",
    hoverEffect: (
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden z-0">
        <div className="absolute top-[20%] right-[20%] w-2 h-2 bg-gray-400/40 rounded-full group-hover:animate-[float-up_3s_ease-in-out_infinite]" />
        <div className="absolute bottom-[30%] right-[15%] w-3 h-3 bg-gray-400/30 rounded-full group-hover:animate-[float-down_4s_ease-in-out_infinite]" />
        <div className="absolute top-[40%] right-[40%] w-1 h-1 bg-gray-400/50 rounded-full group-hover:animate-[float-up_2s_ease-in-out_infinite]" />
      </div>
    ),
  };
}

// Function to generate a completely unique background graphic layout based on index
function getUniqueGraphic(index, colorClass) {
  const patterns = [
    // 0: Concentric dashed circles
    <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-current flex items-center justify-center opacity-30 group-hover:opacity-80 transition-opacity duration-700 border-dashed">
      <div className="w-32 h-32 rounded-full border border-current flex items-center justify-center border-dashed">
        <div className="w-16 h-16 rounded-full border border-current border-dashed"></div>
      </div>
    </div>,

    // 1: Diagonal speed lines
    <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-64 h-16 -rotate-45 flex flex-col gap-2 opacity-20 group-hover:opacity-60 transition-opacity duration-700">
      <div className="w-full h-1 bg-current" />
      <div className="w-full h-1.5 bg-current" />
      <div className="w-full h-3 bg-current" />
      <div className="w-full h-1 bg-current" />
    </div>,

    // 2: Radial starburst
    <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-48 h-48 opacity-20 group-hover:opacity-70 transition-all duration-1000 flex items-center justify-center group-hover:rotate-12">
      <div className="absolute w-full h-0.5 bg-current rotate-0" />
      <div className="absolute w-full h-0.5 bg-current rotate-45" />
      <div className="absolute w-full h-0.5 bg-current rotate-90" />
      <div className="absolute w-full h-0.5 bg-current rotate-135" />
      <div className="absolute w-12 h-12 border border-current rounded-full" />
    </div>,

    // 3: Tech Grid Matrix
    <div className="absolute right-0 top-0 bottom-0 w-48 opacity-20 group-hover:opacity-60 transition-opacity duration-700 bg-[linear-linear(currentColor_1px,transparent_1px),linear-linear(90deg,currentColor_1px,transparent_1px)] bg-size-[16px_16px] mask-[linear-linear(to_left,black,transparent)]" />,

    // 4: Rising bubbles
    <div className="absolute -right-4 bottom-0 w-32 h-full opacity-30 group-hover:opacity-70 transition-opacity duration-700 flex flex-wrap gap-2 p-4 justify-end items-end">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className={`w-${i % 3 === 0 ? 4 : i % 2 === 0 ? 2 : 3} h-${i % 3 === 0 ? 4 : i % 2 === 0 ? 2 : 3} rounded-full bg-current`}
        />
      ))}
    </div>,

    // 5: Abstract Corner Box
    <div className="absolute right-0 bottom-0 w-32 h-32 border-t border-l border-current opacity-30 group-hover:opacity-70 transition-opacity duration-700" />,

    // 6: Repeating Plus signs
    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-32 h-32 opacity-20 group-hover:opacity-60 transition-all duration-700 flex flex-wrap gap-4 items-center justify-center group-hover:scale-110">
      {[...Array(9)].map((_, i) => (
        <div
          key={i}
          className="relative w-4 h-4 flex items-center justify-center"
        >
          <div className="absolute w-full h-1 bg-current" />
          <div className="absolute h-full w-1 bg-current" />
        </div>
      ))}
    </div>,

    // 7: Vertical equalizer bars
    <div className="absolute right-8 bottom-0 flex items-end gap-2 opacity-20 group-hover:opacity-60 transition-all duration-700 h-24">
      <div className="w-2 h-1/3 bg-current group-hover:h-3/4 transition-all duration-500" />
      <div className="w-2 h-full bg-current group-hover:h-1/2 transition-all duration-500 delay-75" />
      <div className="w-2 h-2/3 bg-current group-hover:h-full transition-all duration-500 delay-150" />
      <div className="w-2 h-1/4 bg-current group-hover:h-2/3 transition-all duration-500 delay-200" />
      <div className="w-2 h-3/4 bg-current group-hover:h-1/3 transition-all duration-500 delay-300" />
    </div>,

    // 8: Floating outline squares
    <div className="absolute right-0 top-0 w-48 h-full opacity-20 group-hover:opacity-60 transition-all duration-700 overflow-hidden">
      <div className="absolute top-4 right-4 w-16 h-16 border-2 border-current rotate-12 group-hover:rotate-45 transition-transform duration-1000" />
      <div className="absolute bottom-8 right-12 w-10 h-10 border-2 border-current -rotate-12 group-hover:-rotate-45 transition-transform duration-1000" />
      <div className="absolute top-1/2 right-20 w-6 h-6 border border-current rotate-45 group-hover:rotate-90 transition-transform duration-1000" />
    </div>,

    // 9: Horizontal dashed tracks
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 flex flex-col gap-4 opacity-20 group-hover:opacity-60 transition-opacity duration-700 mask-[linear-linear(to_left,black,transparent)]">
      <div className="w-full h-1 border-b-2 border-current border-dashed" />
      <div className="w-full h-1 border-b-2 border-current border-dashed translate-x-4" />
      <div className="w-full h-1 border-b-2 border-current border-dashed translate-x-8" />
      <div className="w-full h-1 border-b-2 border-current border-dashed translate-x-2" />
    </div>,

    // 10: Slanted checkerboard snippet
    <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-32 h-32 grid grid-cols-4 grid-rows-4 rotate-12 opacity-20 group-hover:opacity-60 transition-all duration-700 group-hover:scale-110">
      {[...Array(16)].map((_, i) => (
        <div
          key={i}
          className={`w-full h-full ${(i + Math.floor(i / 4)) % 2 === 0 ? "bg-current" : "bg-transparent"}`}
        />
      ))}
    </div>,

    // 11: Polygon/Triangle abstract
    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-32 h-32 opacity-20 group-hover:opacity-60 transition-all duration-700 group-hover:-translate-x-4">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full fill-none stroke-current stroke-2"
      >
        <polygon points="50,10 90,90 10,90" />
        <polygon points="50,90 90,10 10,10" className="opacity-50" />
      </svg>
    </div>,

    // 12: Concentric half-ovals
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-48 overflow-hidden opacity-20 group-hover:opacity-60 transition-transform duration-700 group-hover:scale-105">
      <div className="absolute -right-12 top-0 w-48 h-48 rounded-full border-4 border-current border-dashed" />
      <div className="absolute -right-8 top-4 w-40 h-40 rounded-full border-2 border-current" />
      <div className="absolute -right-4 top-8 w-32 h-32 rounded-full border border-current" />
    </div>,

    // 13: Arrow chevrons
    <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 opacity-20 group-hover:opacity-60 transition-all duration-700 group-hover:translate-x-2">
      {[...Array(3)].map((_, i) => (
        <svg
          key={i}
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className="stroke-current stroke-3 group-hover:stroke-4"
        >
          <path d="M2 2L16 16L2 30" />
        </svg>
      ))}
    </div>,

    // 14: Target reticle
    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-32 h-32 opacity-20 group-hover:opacity-60 transition-transform duration-700 group-hover:rotate-90 flex items-center justify-center">
      <div className="absolute w-full h-1 bg-current" />
      <div className="absolute h-full w-1 bg-current" />
      <div className="absolute w-1/2 h-1/2 border-2 border-current rounded-full" />
      <div className="absolute w-full h-full border border-current rounded-full" />
      <div className="absolute right-0 w-4 h-4 bg-current rounded-full" />
      <div className="absolute top-0 w-4 h-4 bg-current rounded-full" />
    </div>,
  ];

  const patternIndex = index % patterns.length;

  return (
    <div className={`absolute inset-0 z-0 pointer-events-none ${colorClass}`}>
      {patterns[patternIndex]}
    </div>
  );
}

export default function EventTimelinePage({ params }) {
  const router = useRouter();

  const searchParams = useSearchParams();
  const dayId = searchParams.get("dayId");
  const [dayData, setDayData] = useState(null);

  useEffect(() => {
    if (dayId !== null) {
      const id = dayId;
      const data = timelines[id];

      if (data) setDayData(data);
    }
  }, [dayId, dayData]);

  return (
    <div>
      {dayData ? (
        <>
          <div className="min-h-screen bg-black/30 text-white font-mono overflow-x-hidden selection:bg-white/20 relative w-full pt-20 pb-20">
            <style dangerouslySetInnerHTML={{ __html: customAnimations }} />
            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none z-0">
              <div
                className={`absolute inset-0 bg-linear-to-b ${dayData.theme} opacity-30`}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-linear(circle_at_50%_0%,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px]" />
            </div>

            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={() => router.push("/events")}
              className="fixed top-6 left-6 z-50 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors group"
            >
              <div className="w-5 h-5 flex items-center justify-center border border-white/20 rounded-full group-hover:border-white transition-colors">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </div>
              Back_To_Events
            </motion.button>

            <div className="relative z-10 max-w-5xl mx-auto px-6 mt-12 md:mt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16 md:mb-24 flex flex-col pt-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-1 bg-current ${dayData.accent}`} />
                  <span
                    className={`text-sm md:text-xl font-bold tracking-[0.3em] uppercase ${dayData.accent}`}
                  >
                    {dayData.date}
                  </span>
                </div>
                <h1
                  className={`text-5xl md:text-[6rem] lg:text-[7rem] font-black italic uppercase tracking-tighter ${dayData.accent} ${dayData.glow} leading-none`}
                >
                  {dayData.title}
                </h1>
                <p className="text-white/40 uppercase tracking-widest mt-6 max-w-xl text-sm leading-relaxed">
                  Official timeline parameters. Schedule matrices locked and
                  injected. Follow all listed venues and times strictly.
                </p>
              </motion.div>

              {dayData.events.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className={`p-10 border border-white/10 bg-white/5 rounded-sm flex flex-col items-center justify-center gap-6 text-center shadow-2xl`}
                >
                  <Terminal
                    className={`w-10 h-10 ${dayData.accent} animate-pulse`}
                  />
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-widest">
                      Awaiting Payload
                    </h3>
                    <p className="text-white/40 mt-2 max-w-md mx-auto">
                      The event node for {dayData.title} is still compiling
                      schedule matrices. Timeline data will be injected shortly.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative ml-4 md:ml-12"
                >
                  {/* Vertical timeline line */}
                  <div
                    className={`absolute top-0 bottom-0 -left-0.5 md:-left-6 w-1 bg-white/10`}
                  />

                  {dayData.events.map((evt, idx) => {
                    const category = getEventCategory(evt.title);
                    const CategoryIcon = category.icon;

                    return (
                      <div
                        key={evt.id}
                        className="relative pl-8 md:pl-0 mb-12 lg:mb-16 last:mb-0 group"
                      >
                        {/* Timeline Node Point */}
                        <div
                          className={`absolute top-0 -left-2 md:-left-7.75 w-4 h-4 md:w-4 md:h-4 rounded-sm border-2 border-black bg-white/20 group-hover:${dayData.bgAccent} ${dayData.glow} transition-colors z-20`}
                        />

                        <div
                          className={`p-6 md:p-8 border border-white/5 bg-[#0a0a0a] hover:bg-[#111111] transition-all duration-300 rounded-sm hover:-translate-y-1 hover:shadow-2xl hover:border-white/20 relative overflow-hidden group/card`}
                        >
                          <Link href={`/events/dayId/events/${evt.title.toLowerCase().replace(/\s+/g, '-')}`} className="absolute inset-0 z-30" />

                          {/* Subtle glowing element in the corner based on category color */}
                          <div
                            className={`absolute -bottom-10 -right-10 w-48 h-48 rounded-full blur-[60px] ${category.bg} opacity-5 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0`}
                          />

                          {/* Dynamic Interactive Animations revealed on hover */}
                          {category.hoverEffect && category.hoverEffect}

                          {/* Thematic Background Graphic & Watermark */}
                          <div className="absolute right-0 top-0 bottom-0 w-3/4 overflow-hidden pointer-events-none rounded-r-sm z-0 mask-[linear-linear(to_left,black_20%,transparent_100%)]">
                            {/* Large watermark icon tied to category */}
                            <div
                              className={`absolute top-1/2 right-[-10%] -translate-y-1/2 opacity-[0.02] group-hover:opacity-[0.06] transition-all duration-700 transform group-hover:scale-110 group-hover:-rotate-12 ${category.color}`}
                            >
                              <CategoryIcon
                                size={180}
                                strokeWidth={1}
                                className="text-current"
                              />
                            </div>

                            {/* Totally unique geometric graphic based on index */}
                            {getUniqueGraphic(idx, category.color)}
                          </div>

                          <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 border-b border-white/5 pb-6">
                            <div className="flex flex-col gap-3">
                              {/* Category Tag */}
                              <div
                                className={`flex items-center gap-2 w-fit px-3 py-1 rounded-sm border ${category.border} ${category.bg} backdrop-blur-sm`}
                              >
                                <CategoryIcon
                                  className={`w-3 h-3 md:w-4 md:h-4 ${category.color}`}
                                />
                                <span
                                  className={`text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold ${category.color}`}
                                >
                                  {category.label}
                                </span>
                              </div>

                              <h2 className="text-xl md:text-3xl font-black uppercase tracking-wider text-white whitespace-pre-line">
                                {evt.title}
                              </h2>
                            </div>

                            <div
                              className={`flex items-center gap-2 px-4 py-2 bg-black/60 border ${dayData.border} rounded-sm w-fit shadow-md backdrop-blur-sm`}
                            >
                              <Clock className={`w-4 h-4 ${dayData.accent}`} />
                              <span
                                className={`text-sm md:text-base font-bold tracking-widest ${dayData.accent}`}
                              >
                                {evt.time}
                              </span>
                            </div>
                          </div>

                          <div className="relative z-10 flex items-center justify-between mt-4">
                            <div className="flex items-center gap-3 text-white/60 font-medium">
                              <MapPin className="w-5 h-5" />
                              <span className="text-sm md:text-base uppercase tracking-widest">
                                {evt.venue}
                              </span>
                            </div>

                            <div className={`flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] ${category.color} opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 translate-x-4 group-hover/card:translate-x-0`}>
                              View_Details
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}
