"use client";

import React, { useState } from "react";
import { PageTransitionWrapper } from "@/components/chronoverse";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Simple corner accent component
const TechCorner = ({ className, color = "text-violet-500" }) => (
  <svg
    className={`absolute w-4 h-4 ${className} ${color}`}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 2H10M2 2V10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    />
  </svg>
);

const ScannerLine = () => (
  <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-violet-500 to-transparent opacity-50 animate-scan-fast pointer-events-none" />
);

export default function PartnerPage() {
  const [copied, setCopied] = useState(false);
  const email = "pr.ingenium@iiti.ac.in";
  const router = useRouter();

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <PageTransitionWrapper>
      <main className="min-h-screen bg-black/30 text-violet-100 relative overflow-hidden selection:bg-violet-500/30 selection:text-white">
        {/* Background Gradients */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-violet-900/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-150 h-150 bg-blue-900/10 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">
          {/* Header */}
          <div className="text-center mb-16 relative">
            <div className="max-w-7xl mx-auto mb-8 md:mb-12 flex justify-between items-center border-b border-violet-500/20 pb-4">
              <button onClick={() => router.back()}>
                <button className="group flex items-center gap-2 md:gap-3 text-violet-400/80 hover:text-violet-300 transition-colors uppercase text-[12px] md:text-sm tracking-[0.2em]">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-violet-500/30 flex items-center justify-center group-hover:bg-violet-500/10 transition-all">
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </div>
                  <span>RETURN TO SPONSORS</span>
                </button>
              </button>
            </div>

            <span className="inline-block py-1 px-3 border border-violet-500/30 rounded-full text-[10px] font-mono text-violet-400 mb-6 bg-violet-500/5 backdrop-blur-sm">
              ALLIANCE PROTOCOL // OPEN
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Join the{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-blue-400">
                Chronoverse
              </span>
            </h1>
            <p className="text-lg text-violet-200/60 max-w-2xl mx-auto leading-relaxed">
              Partner with Ingenium to shape the timeline. Connect with us via
              our secure terminal to initiate a formal proposal.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Benefits */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Premium Brand Visibility",
                    desc: "Feature your brand across event banners, social media campaigns, website placements, and on-campus promotions reaching thousands of students.",
                    icon: "📢",
                  },
                  {
                    title: "Direct Student Engagement",
                    desc: "Interact with highly skilled students from IIT Indore through workshops, booths, competitions, and live sessions.",
                    icon: "🎓",
                  },
                  {
                    title: "Elite Talent Access",
                    desc: "Connect with top-performing engineers, developers, and innovators for internships, hiring, and collaborations.",
                    icon: "🚀",
                  },
                  {
                    title: "Long-Term Association",
                    desc: "Build a lasting partnership with IIT Indore's flagship technical event and strengthen your presence in the academic ecosystem.",
                    icon: "🤝",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group relative p-3 sm:p-6 bg-white/5 border border-white/10 hover:border-violet-500/50 transition-all backdrop-blur-sm"
                  >
                    <div className="text-2xl mb-4">{item.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-violet-200/50">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="relative p-4 sm:p-8 border-l-2 border-violet-500/50 bg-linear-to-r from-violet-500/10 to-transparent">
                <p className="text-xl font-light italic text-violet-100/80 mb-4">
                  "The future isn't written; it's built through strategic
                  collaboration."
                </p>
                <span className="font-mono text-sm text-violet-400 uppercase tracking-widest">
                  — IIT INDORE
                </span>
              </div>
            </div>

            {/* Right Column: Copy-to-Clipboard Terminal */}
            <div className="relative">
              <div className="relative bg-black/60 border border-violet-500/30 backdrop-blur-xl p-1">
                <TechCorner className="top-0 left-0 -translate-x-1 -translate-y-1" />
                <TechCorner className="top-0 right-0 translate-x-1 -translate-y-1 rotate-90" />
                <TechCorner className="bottom-0 left-0 -translate-x-1 translate-y-1 -rotate-90" />
                <TechCorner className="bottom-0 right-0 translate-x-1 translate-y-1 rotate-180" />

                <div className="p-5 sm:p-10 text-center">
                  <ScannerLine />
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2 tracking-widest uppercase">
                      Direct Uplink
                    </h3>
                    <p className="text-xs font-mono text-violet-400/60 uppercase tracking-tighter">
                      Manual data transfer required for current clearance level
                    </p>
                  </div>

                  <div
                    className="relative group cursor-pointer mb-8"
                    onClick={handleCopy}
                  >
                    <div className="absolute inset-0 bg-violet-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative bg-violet-950/30 border border-violet-500/40 p-3 sm:p-6 rounded-sm transition-all group-hover:border-violet-400">
                      <p className="text-sm font-mono text-violet-400 mb-2 uppercase tracking-widest">
                        Target Address
                      </p>
                      <p className="text-xl md:text-2xl font-bold text-white font-mono break-all group-hover:text-violet-200">
                        {email}
                      </p>

                      {/* Floating Tooltip inside the box */}
                      <div
                        className={`mt-4 text-xs font-mono transition-all duration-300 ${copied ? "text-green-400 opacity-100" : "text-violet-400/40 opacity-100"}`}
                      >
                        {copied
                          ? "[ SYSTEM: ADDRESS COPIED TO CLIPBOARD ]"
                          : "[ CLICK TO COPY TO CLIPBOARD ]"}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <button
                      onClick={handleCopy}
                      className="w-full py-4 bg-violet-600 text-white font-bold tracking-[0.2em] uppercase text-sm hover:bg-violet-500 transition-all relative overflow-hidden group active:scale-[0.98]"
                    >
                      <span className="relative z-10">
                        {copied ? "Copied!" : "Copy Email ID"}
                      </span>
                    </button>

                    <a
                      href={`mailto:${email}`}
                      className="w-full py-4 border border-violet-500/30 text-violet-300 font-bold tracking-[0.2em] uppercase text-sm hover:bg-violet-500/10 transition-all"
                    >
                      Open Mail Client
                    </a>
                  </div>

                  <p className="mt-8 text-[10px] font-mono text-violet-500/40 leading-tight uppercase">
                    Encryption: AES-256 // Protocol: SMTP.DIRECT <br />
                    Status: Awaiting Partnership Signal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx global>{`
          @keyframes scan-fast {
            0% {
              top: 0%;
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              top: 100%;
              opacity: 0;
            }
          }
          .animate-scan-fast {
            animation: scan-fast 3s linear infinite;
          }
        `}</style>
      </main>
    </PageTransitionWrapper>
  );
}
