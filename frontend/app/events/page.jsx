"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Terminal } from "lucide-react";
import { useRouter } from "next/navigation";

const days = [
  {
    id: "day-0",
    title: "Day 0",
    date: "13 March 2026",
    theme: "from-amber-900/40 to-black",
    accent: "text-amber-500",
    border: "border-amber-500/30",
    bgAccent: "bg-amber-500",
    glow: "shadow-[0_0_30px_rgba(245,158,11,0.3)]",
    highlights: ["Opening ceremony", "Kavyanjali", "SPICMACAY"],
  },
  {
    id: "day-1",
    title: "Day 1",
    date: "14 March 2026",
    theme: "from-blue-900/40 to-black",
    accent: "text-blue-500",
    border: "border-blue-500/30",
    bgAccent: "bg-blue-500",
    glow: "shadow-[0_0_30px_rgba(59,130,246,0.3)]",
    highlights: [
      "Defence Expo",
      "Tech Expo",
      "Laser LED\nFt.Illuminati",
      "Standup comedy\nFt.Ashish Solanki",

    ],
  },
  {
    id: "day-2",
    title: "Day 2",
    date: "15 March 2026",
    theme: "from-purple-900/40 to-black",
    accent: "text-purple-500",
    border: "border-purple-500/30",
    bgAccent: "bg-purple-500",
    glow: "shadow-[0_0_30px_rgba(168,85,247,0.3)]",
    highlights: [
      "Words of wisdom\nft. Acharya Prashant",
      "Tech Zone",
      "DJ Night\nft.DJ Tejas",
      "Drone show",
    ],
  },
];

const EventsPage = () => {
  const router = useRouter();
  const [hoveredDay, setHoveredDay] = useState(0);

  // Stagger variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 40, damping: 15, mass: 1 },
    },
  };

  return (
    <div className="min-h-screen bg-black/30 text-white font-mono overflow-hidden flex flex-col md:flex-row w-full selection:bg-white/20 relative">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[30px_30px]" />
      </div>

      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        onClick={() => router.push("/?state=navigation")}
        className="absolute top-6 left-6 z-50 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors group"
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
        Return_Home
      </motion.button>

      <div className="absolute top-6 right-6 z-50 text-right mix-blend-difference pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-2xl md:text-5xl font-black italic uppercase tracking-tighter"
        >
          Events_Timeline
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-[10px] uppercase tracking-[0.4em] text-white/40 mt-1 flex justify-end items-center gap-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          System_Sync active
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row w-full h-full min-h-screen pt-24 md:pt-0 z-10"
      >
        {days.map((day, index) => {
          const isHovered = hoveredDay === index;
          const isOtherHovered = hoveredDay !== null && !isHovered;

          return (
            <motion.div
              key={day.id}
              variants={itemVariants}
              onClick={() => {
                if (hoveredDay === index) {
                  router.push(`/events/dayId?dayId=${day.id}`);
                } else {
                  setHoveredDay(index);
                }
              }}
              onMouseEnter={() => setHoveredDay(index)}
              className={`relative group flex-1 md:h-screen border-b md:border-b-0 md:border-r border-white/10 last:border-0 cursor-pointer overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-end p-6 md:p-12
                ${isHovered ? "md:flex-[1.8] bg-white/3" : "md:flex-1"}
                ${isOtherHovered ? "md:opacity-40" : "opacity-100"}
              `}
            >
              {/* Dynamic Animated Background elements for each slot */}
              <div
                className={`absolute inset-0 bg-linear-to-t ${day.theme} opacity-20 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
              />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_25%,rgba(255,255,255,0.2)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.2)_75%,rgba(255,255,255,0.2)_100%)] bg-size-[10px_10px] transition-opacity duration-700 pointer-events-none mix-blend-overlay" />

              {/* Edge glow line */}
              <div
                className={`absolute top-0 -right-px md:right-auto md:left-0 w-full h-1 md:w-1 md:h-full scale-x-0 group-hover:scale-x-100 md:scale-x-100 md:scale-y-0 md:group-hover:scale-y-100 md:origin-top origin-left transition-transform duration-700 ease-in-out ${day.bgAccent} ${day.glow}`}
              />

              <div className="absolute top-1/4 -right-10 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-1000 rotate-90 scale-[4] pointer-events-none select-none">
                <span className="font-black italic uppercase text-white whitespace-nowrap">
                  {day.title}
                </span>
              </div>

              {/* Content Container */}
              <div className="relative z-20 w-full h-full flex flex-col md:flex-row items-start md:items-end justify-between md:justify-start gap-8">
                {/* Vertical Title (Desktop) / Horizontal (Mobile) */}
                <div className="flex flex-col gap-2 md:-rotate-180 md:[writing-mode:vertical-rl] items-start md:items-center justify-end h-full w-full md:w-auto mt-auto">
                  <motion.h2
                    className={`text-6xl md:text-[8rem] font-black italic uppercase tracking-tighter transition-all duration-500 origin-bottom-left md:origin-center
                      ${isHovered ? `${day.accent} ${day.glow}` : "text-white text-opacity-30 mix-blend-overlay"}
                    `}
                  >
                    {day.title}
                  </motion.h2>
                  <div
                    className={`flex flex-row md:flex-col items-center gap-4 md:mt-8 w-full md:w-auto transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}
                  >
                    <div
                      className={`w-12 h-1 md:w-1 md:h-12 bg-current text-white/20 transition-colors duration-500 shrink-0`}
                    />
                    <span
                      className={`text-sm md:text-2xl font-bold tracking-[0.2em] uppercase [writing-mode:horizontal-tb] md:rotate-180 whitespace-nowrap transition-colors duration-500 text-white/40`}
                    >
                      {day.date}
                    </span>
                  </div>
                </div>

                {/* Hover Content Details */}
                <div
                  className={`flex flex-col justify-end pb-4 md:pb-8 gap-6 md:gap-8 md:absolute md:bottom-12 md:left-55 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                  ${isHovered ? "opacity-100 translate-y-0 md:w-80 md:translate-x-0 h-auto" : "opacity-0 translate-y-10 md:translate-y-0 md:-translate-x-20 w-0 h-0 md:h-auto"}`}
                >
                  <div className="space-y-6">
                    {/* 1. Date */}
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? 0 : 10,
                      }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="text-2xl md:text-3xl font-black uppercase tracking-widest text-white"
                    >
                      {day.date}
                    </motion.h3>

                    {/* 2. Highlights Active Heading */}
                    <div
                      className={`px-4 py-2 border ${day.border} backdrop-blur-md bg-black/40 rounded-sm w-fit shadow-lg`}
                    >
                      <span
                        className={`text-[10px] tracking-[0.3em] font-bold uppercase ${day.accent} flex items-center gap-2`}
                      >
                        <Terminal className="w-3 h-3 animate-pulse" />
                        Highlights_Active
                      </span>
                    </div>

                    {/* 3. Animation Line */}
                    <div className="h-px w-full bg-white/10 relative">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: isHovered ? "100%" : "0%" }}
                        transition={{
                          duration: 1,
                          delay: 0.2,
                          ease: "easeInOut",
                        }}
                        className={`absolute top-0 left-0 h-full bg-current ${day.bgAccent}`}
                      />
                    </div>

                    <div className="flex flex-col gap-3 mt-6">
                      {day.highlights.map((highlight, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{
                            opacity: isHovered ? 1 : 0,
                            x: isHovered ? 0 : -10,
                          }}
                          transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                          className={`flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity cursor-pointer group/item`}
                        >
                          <div
                            className={`w-8 h-8 rounded-sm border md:border-white/10 ${isHovered ? day.border : ""} flex items-center justify-center bg-white/5 group-hover/item:bg-white/10 transition-colors`}
                          >
                            <Sparkles
                              className={`w-3 h-3 ${day.accent} transition-transform group-hover/item:scale-110`}
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm md:text-base font-bold text-white tracking-widest uppercase transition-colors group-hover/item:text-white whitespace-pre-line">
                              {highlight}
                            </h3>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Click for more indicator */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className={`mt-4 pt-4 border-t border-white/10 text-xs font-mono tracking-[0.2em] uppercase ${day.accent} flex items-center gap-2 animate-pulse`}
                  >
                    <span>Click_For_More</span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="-rotate-45"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default EventsPage;
