"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Cpu, Layers, Zap, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { items } from "@/data/gallery";

// --- HOVER CARD COMPONENT ---
const ArchiveCard = ({ item, setSelectedItem }) => (
  <motion.div
    whileHover={{ scale: 1.05, zIndex: 50 }}
    onClick={() => setSelectedItem(item)}
    className="relative shrink-0 w-87.5 aspect-4/5 bg-black/40 border border-blue-500/30 rounded-lg overflow-hidden cursor-pointer group backdrop-blur-sm"
  >
    {/* Glitch Overlay Effect */}
    <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/20 transition-colors z-10" />
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none z-20" />

    <img
      src={item.thumbnail || item.url}
      className="absolute inset-0 w-full h-full object-cover grayscale-50 group-hover:grayscale-0 transition-all duration-700"
      alt={item.title}
    />

    {/* Metadata Tab */}
    <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black via-black/80 to-transparent z-30">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-blue-500 font-bold text-[10px] tracking-widest uppercase mb-1 flex items-center gap-2">
            <Zap className="w-3 h-3" /> {item.tag}
          </p>
          <h3 className="text-white font-black text-xl leading-tight uppercase italic tracking-tighter">
            {item.title.replace(/_/g, " ")}
          </h3>
        </div>
        {item.type === "video" && (
          <div className="bg-blue-600 p-2 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.6)]">
            <Play className="w-4 h-4 text-white fill-current" />
          </div>
        )}
      </div>
    </div>

    {/* Decorative Scanline */}
    <motion.div
      animate={{ y: ["0%", "100%", "0%"] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      className="absolute inset-x-0 h-px bg-blue-400/30 z-40 shadow-[0_0_10px_rgba(96,165,250,0.5)]"
    />
  </motion.div>
);

export default function KineticGallery() {
  const [selectedItem, setSelectedItem] = useState(null);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black/30 text-blue-100 font-mono overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,40,80,0.2),transparent)]" />

      {/* --- HEADER --- */}
      <header className="relative z-50 p-8 flex justify-between items-center border-b border-blue-500/10 backdrop-blur-xl">
        <div className="space-y-1">
          <button
            onClick={() => router.push("/?state=navigation")}
            className="flex items-center gap-4 text-blue-500"
          >
            <ChevronLeft className="text-blue-500" />
            <span className="text-[10px] tracking-[0.5em] font-black uppercase">
              Return To Navigation
            </span>
          </button>
          <h1 className="text-4xl font-black italic tracking-tighter text-white">
            MEMORY_STREAM
          </h1>
        </div>
        <button
          onClick={() => router.push("/?state=navigation")}
          className="px-6 py-2 border border-blue-500/20 rounded-full hover:bg-blue-500/10 transition-all text-xs tracking-widest"
        >
          DISCONNECT
        </button>
      </header>

      {/* --- THE KINETIC STREAM --- */}
      <div className="relative h-[70vh] flex items-center overflow-hidden">
        {/* Infinite Moving Track */}
        <motion.div
          className="flex gap-8 px-4"
          animate={{ x: [0, -1800] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...items, ...items, ...items].map((item, idx) => (
            <ArchiveCard
              key={`${item.id}-${idx}`}
              item={item}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </motion.div>

        {/* Cinematic Vignettes */}
        <div className="absolute inset-y-0 left-0 w-64 bg-linear-to-r from-[#050505] to-transparent z-40 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-64 bg-linear-to-l from-[#050505] to-transparent z-40 pointer-events-none" />
      </div>

      {/* --- STATUS FOOTER --- */}
      <footer className="absolute bottom-0 w-full p-8 border-t border-blue-500/10 flex justify-between items-end opacity-60">
        <div className="text-[10px] space-y-2">
          <p className="flex items-center gap-2">
            <Cpu className="w-3 h-3" /> SYNC_STATUS: ACTIVE
          </p>
          <p className="flex items-center gap-2">
            <Layers className="w-3 h-3" /> BUFFER_STREAM: PERSISTENT
          </p>
        </div>
        <div className="text-right">
          <p className="text-[8px] tracking-[0.3em] text-blue-400">
            ENCRYPTION: AES-256-GCM
          </p>
          <p className="text-[10px] font-bold text-white uppercase italic">
            IIT_INDORE_HISTORICAL_LOGS
          </p>
        </div>
      </footer>

      {/* Modal logic remains similar but styled as a 'system takeover' */}
      <AnimatePresence>
        {selectedItem && (
          <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

function Modal({ item, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/30 backdrop-blur-2xl p-4"
    >
      <div className="absolute inset-0" onClick={onClose} />
      <motion.div
        initial={{ scale: 0.8, rotateX: 20 }}
        animate={{ scale: 1, rotateX: 0 }}
        className="relative max-w-5xl w-full aspect-video border border-blue-500/40 rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(37,99,235,0.2)] bg-black"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-2 bg-white/5 rounded-full hover:bg-red-500/20 transition-all"
        >
          <X className="w-6 h-6" />
        </button>
        {item.type === "photo" ? (
          <img src={item.url} className="w-full h-full object-contain" />
        ) : (
          <video src={item.url} controls autoPlay className="w-full h-full" />
        )}
      </motion.div>
    </motion.div>
  );
}
