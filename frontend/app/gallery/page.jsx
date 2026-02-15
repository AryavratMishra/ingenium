"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Image as ImageIcon,
  Film,
  X,
  Cpu,
  Layers,
  Clock,
  ChevronLeft,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function GalleryArchive() {
  const [filter, setFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const router = useRouter();

  // Mock data representing your retrieved photos and videos
  const galleryItems = [
    {
      id: 1,
      type: "video",
      thumbnail: "/vids/dance-thumb.jpg",
      url: "/vids/dance.mp4",
      title: "Kaizen_Mainstage_2025",
      tag: "Cultural",
      duration: "03:45",
    },
    {
      id: 2,
      type: "photo",
      url: "/img/robowars-1.jpg",
      title: "RoboWars_Final_Clash",
      tag: "Technical",
    },
    {
      id: 3,
      type: "photo",
      url: "/img/shutter-1.jpg",
      title: "ShutterUp_Winning_Entry",
      tag: "VLR",
    },
    {
      id: 4,
      type: "video",
      thumbnail: "/vids/band-thumb.jpg",
      url: "/vids/band.mp4",
      title: "BattleOfBands_Live",
      tag: "Cultural",
      duration: "05:12",
    },
    {
      id: 5,
      type: "photo",
      url: "/img/drone-1.jpg",
      title: "AeroAirtistry_Launch",
      tag: "Technical",
    },
    {
      id: 6,
      type: "photo",
      url: "/img/painting-1.jpg",
      title: "Kalakriti_Final_Canvas",
      tag: "Fine Arts",
    },
  ];

  const filteredItems =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.type === filter);

  return (
    <div className="relative min-h-screen text-blue-100 font-mono p-4 md:p-8 overflow-hidden bg-black/30">
      {/* HUD Frame Decoration */}
      <div className="absolute inset-0 pointer-events-none z-0 border border-blue-500/10 m-4 rounded-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- ARCHIVE HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 border-b border-blue-500/20 pb-8">
          <div className="space-y-2">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-blue-400"
            >
              <ChevronLeft className="w-4 h-4 animate-pulse" />
              <span className="text-[12px] tracking-[0.5em] uppercase font-bold">
                Return to Navigation
              </span>
            </button>
            <h1 className="text-5xl font-black tracking-tighter text-white uppercase italic">
              MEMORY <span className="text-blue-500">FRAGMENTS</span>
            </h1>
            <p className="text-[12px] text-blue-400/60 mt-2 tracking-[0.3em] uppercase">
              Decrypted Media from Previous Timelines
            </p>
          </div>

          {/* Filter Interface */}
          <div className="mt-6 lg:mt-0 flex bg-white/5 p-1 rounded-xl border border-white/10 backdrop-blur-md">
            <FilterBtn
              active={filter === "all"}
              onClick={() => setFilter("all")}
              label="ALL_DATA"
            />
            <FilterBtn
              active={filter === "photo"}
              onClick={() => setFilter("photo")}
              label="IMAGES"
              icon={<ImageIcon className="w-3 h-3" />}
            />
            <FilterBtn
              active={filter === "video"}
              onClick={() => setFilter("video")}
              label="RECORDS"
              icon={<Film className="w-3 h-3" />}
            />
          </div>
        </div>

        {/* --- GRID VIEWPORT --- */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedItem(item)}
                className="group relative aspect-video bg-black/60 border border-blue-500/20 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-blue-500/10 transition-all"
              >
                {/* Image/Thumbnail Overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${item.thumbnail || item.url})`,
                  }}
                />

                {/* Holographic Scan Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors" />

                {/* Item Metadata */}
                <div className="absolute bottom-0 left-0 w-full p-5">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-[8px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full uppercase font-bold tracking-widest mb-2 inline-block">
                        {item.tag}
                      </span>
                      <h4 className="text-sm font-black text-white uppercase tracking-tighter group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    {item.type === "video" && (
                      <div className="flex items-center gap-1.5 text-blue-400/60 text-[9px]">
                        <Clock className="w-3 h-3" /> {item.duration}
                      </div>
                    )}
                  </div>
                </div>

                {/* Center Play Button for Videos */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-blue-500/20 backdrop-blur-sm border border-blue-500/40 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform">
                      <Play className="w-5 h-5 text-white fill-white ml-1" />
                    </div>
                  </div>
                )}

                {/* Decorative Tech Corners */}
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- SYSTEM LOGS (Subtle footer) --- */}
        <div className="mt-16 flex justify-between items-center px-4 border-t border-white/5 pt-8 opacity-40">
          <div className="flex gap-8 text-[9px] uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <Cpu className="w-3 h-3" /> Media_Processor: Stable
            </span>
            <span className="flex items-center gap-2">
              <Layers className="w-3 h-3" /> Buffer_Count: {galleryItems.length}
            </span>
          </div>
          <span className="text-[9px] italic">
            Accessing Ingenium_3.0_Historical_Storage
          </span>
        </div>
      </div>

      {/* --- RECONSTRUCTION MODAL (Full Viewer) --- */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-12 bg-black/90 backdrop-blur-xl"
          >
            <div
              className="absolute inset-0"
              onClick={() => setSelectedItem(null)}
            />

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl aspect-video bg-black border border-blue-500/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.2)]"
            >
              {/* Modal Header */}
              <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center bg-linear-to-b from-black to-transparent z-10">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    {selectedItem.type === "photo" ? (
                      <ImageIcon className="w-4 h-4" />
                    ) : (
                      <Film className="w-4 h-4" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white uppercase tracking-widest">
                      {selectedItem.title}
                    </h3>
                    <p className="text-[9px] text-blue-500/60 uppercase">
                      Temporal_Fragment_ID: {selectedItem.id}00X9
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="w-10 h-10 bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-500/50 rounded-full flex items-center justify-center transition-all group"
                >
                  <X className="w-5 h-5 text-gray-400 group-hover:text-red-500" />
                </button>
              </div>

              {/* Media Content */}
              <div className="w-full h-full flex items-center justify-center">
                {selectedItem.type === "photo" ? (
                  <img
                    src={selectedItem.url}
                    alt={selectedItem.title}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <video
                    src={selectedItem.url}
                    controls
                    autoPlay
                    className="w-full h-full"
                  />
                )}
              </div>

              {/* Tactical Overlays */}
              <div className="absolute bottom-6 left-6 pointer-events-none">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping" />
                  <span className="text-[12px] uppercase font-bold text-blue-400 tracking-[0.3em]">
                    Decoding_Stream...
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- Internal Support Components ---

function FilterBtn({ active, onClick, label, icon = null }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2.5 rounded-lg text-[12px] font-black tracking-widest uppercase transition-all flex items-center gap-2 ${
        active
          ? "bg-blue-500 text-black shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          : "text-blue-500/50 hover:text-blue-400 hover:bg-white/5"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}
