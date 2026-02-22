"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { PageTransitionWrapper } from "@/components/chronoverse";
import { visionTimeline, futureTechnologies, sponsors } from "@/data/future";

// Violet stylized corner bracket (Defaults to Violet, but customizable)
const TechCorner = ({ className, color = "text-violet-500/50" }) => (
  <svg
    className={`absolute w-4 h-4 ${color} ${className}`}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M2 2h20v20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    />
    <path d="M2 2h10M2 2v10" stroke="currentColor" strokeWidth="2" />
  </svg>
);

// Animated Scanning Line (Violet Variant)
const ScannerLine = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
    <div className="w-full h-0.5 bg-linear-to-r from-transparent via-violet-400/50 to-transparent absolute top-0 -translate-y-full animate-scan-fast" />
  </div>
);

export default function FuturePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <PageTransitionWrapper>
      <main className="relative min-h-screen bg-black/30 overflow-hidden selection:bg-violet-500/30">
        {/* Advanced Background Grid: Perspective Plane (Violet) */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_at_center,black_40%,transparent_100%)] opacity-50" />

        {/* Ambient Glow */}
        <div className="absolute bottom-0 right-0 w-80 h-80 md:w-150 md:h-150 bg-violet-600/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

        <div className="relative z-10 px-4 py-6 md:py-16">
          {/* Top Navigation Bar */}
          <div className="max-wa-7xl mx-auto mb-8 md:mb-12 flex justify-between items-center border-b border-violet-500/20 pb-4">
            <Link href="/?state=navigation">
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
                <span>
                  <span className="hidden sm:inline">Return to </span>
                  Chronoverse
                </span>
              </button>
            </Link>
            <div className="hidden md:flex items-center gap-2 text-sm font-mono text-violet-500/40">
              <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
              TEMPORAL SIMULATION: ACTIVE
            </div>
          </div>

          {/* Hero Section: Glitch & Terminal Style */}
          <header className="max-w-7xl mx-auto mb-16 md:mb-24 relative text-left">
            <div className="md:pl-10 relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-transparent via-violet-500/50 to-transparent hidden md:block" />

              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded border border-violet-500/30 bg-violet-500/5 backdrop-blur-sm">
                <span className="text-[12px] font-mono text-violet-300 tracking-widest uppercase">
                  Target: Vision_Horizon
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tighter mb-4 md:mb-6 text-transparent bg-clip-text bg-linear-to-r from-violet-100 via-violet-400 to-fuchsia-500 font-sans wrap-break-word">
                STRATEGIC <span className="text-violet-500/50">ALLIANCES</span>
              </h1>

              <p className="text-sm md:text-lg text-violet-100/60 max-w-2xl font-light tracking-wide md:border-l-2 md:border-transparent md:pl-0">
                Looking forward to connecting with you.
              </p>
            </div>
          </header>

          {/* <section className="max-w-7xl mx-auto mb-16 md:mb-20">
            <div className="mb-8 md:mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-8 md:w-12 bg-violet-500/30" />
                <span className="text-xl font-mono text-violet-300 tracking-[0.2em]">
                  TIER 1 : PLATINUM
                </span>
                <div className="h-px w-8 md:w-12 bg-violet-500/30" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
                {sponsors
                  .filter((s) => s.tier === "Platinum")
                  .map((sponsor, i) => (
                    <div
                      key={i}
                      className="group relative h-28 md:h-32 bg-violet-950/10 border border-violet-500/20 flex items-center justify-center overflow-hidden hover:bg-violet-500/5 transition-colors"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <TechCorner className="top-0 right-0 rotate-90" />
                      <TechCorner className="bottom-0 left-0 -rotate-90" />

                      <span className="text-xl md:text-2xl font-bold text-white tracking-widest group-hover:scale-110 transition-transform duration-300 font-sans z-10 text-center px-4">
                        {sponsor.name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            <div className="mb-8 md:mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-8 md:w-12 bg-amber-500/30" />
                <span className="text-xl font-mono text-amber-300 tracking-[0.2em]">
                  TIER 2 : GOLD
                </span>
                <div className="h-px w-8 md:w-12 bg-amber-500/30" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
                {sponsors
                  .filter((s) => s.tier === "Gold")
                  .map((sponsor, i) => (
                    <div
                      key={i}
                      className="group relative h-20 md:h-24 bg-amber-950/10 border border-amber-500/20 flex items-center justify-center overflow-hidden hover:bg-amber-500/5 transition-colors"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <TechCorner
                        className="top-0 right-0 rotate-90 border-amber-500/30!"
                        color="text-amber-500/50"
                      />
                      <TechCorner
                        className="bottom-0 left-0 -rotate-90 border-amber-500/30!"
                        color="text-amber-500/50"
                      />

                      <span className="text-lg md:text-xl font-bold text-amber-100 tracking-widest group-hover:scale-110 transition-transform duration-300 font-sans z-10 text-center px-2">
                        {sponsor.name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            <div className="mb-8 md:mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-8 md:w-12 bg-slate-500/30" />
                <span className="text-xl font-mono text-slate-300 tracking-[0.2em]">
                  TIER 3 : SILVER
                </span>
                <div className="h-px w-8 md:w-12 bg-slate-500/30" />
              </div>

              <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
                {sponsors
                  .filter((s) => s.tier === "Silver")
                  .map((sponsor, i) => (
                    <div
                      key={i}
                      className="group relative h-16 md:h-20 w-full md:w-64 bg-slate-950/10 border border-slate-500/20 flex items-center justify-center overflow-hidden hover:bg-slate-500/5 transition-colors"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(148,163,184,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <TechCorner
                        className="top-0 right-0 rotate-90 border-slate-500/30!"
                        color="text-slate-500/50"
                      />
                      <TechCorner
                        className="bottom-0 left-0 -rotate-90 border-slate-500/30!"
                        color="text-slate-500/50"
                      />

                      <span className="text-sm font-bold text-slate-300 tracking-widest group-hover:scale-110 transition-transform duration-300 font-mono z-10 text-center px-2">
                        {sponsor.name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </section> */}

          {/* CTA: Mission Uplink */}
          <section className="max-w-4xl mx-auto mt-16 md:mt-32">
            <div className="relative border border-violet-500/30 bg-black/60 overflow-hidden rounded-2xl p-3 sm:p-6 md:p-12 text-center">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-violet-500 to-transparent" />
              <div className="absolute -left-10 -top-10 w-40 h-40 bg-violet-500/20 blur-[50px] rounded-full" />

              <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6">
                Initialize Partnership Protocol
              </h2>
              <p className="text-violet-200/60 mb-6 md:mb-8 max-w-xl mx-auto text-sm md:text-lg">
                Join the trajectory. Contribute to the future of innovation and
                secure your coordinates in the next era.
              </p>

              <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
                <Link href="/sponsors/partner">
                  <button
                    className="w-full md:w-auto px-6 py-3 md:px-8 md:py-4 bg-violet-600 hover:bg-violet-500 text-white font-bold tracking-widest uppercase text-sm transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] clip-path-polygon"
                    style={{
                      clipPath:
                        "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
                    }}
                  >
                    Become a Partner
                  </button>
                </Link>
                <Link
                  href={"/brochure/marketing.pdf"}
                  target="_blank"
                  className="w-full md:w-auto px-6 py-3 md:px-8 md:py-4 bg-transparent border border-violet-500/50 text-violet-400 hover:text-white hover:border-violet-400 font-bold tracking-widest uppercase text-sm transition-all underline"
                >
                  View Prospectus
                </Link>
              </div>
            </div>
          </section>
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
          @keyframes matrix-rain {
            0% {
              transform: translateY(-100%);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateY(100%);
              opacity: 0;
            }
          }
          .animate-matrix-rain {
            animation: matrix-rain 5s linear infinite;
          }
          @keyframes firefly {
            0%,
            100% {
              transform: translate(0, 0);
              opacity: 0;
            }
            20% {
              opacity: 1;
            }
            50% {
              transform: translate(20px, -20px);
            }
            80% {
              opacity: 0.8;
            }
          }
          .animate-firefly {
            animation: firefly 10s ease-in-out infinite alternate;
          }
          .mask-gradient {
            mask-image: linear-gradient(
              to bottom,
              transparent,
              black 10%,
              black 90%,
              transparent
            );
          }
        `}</style>
      </main>
    </PageTransitionWrapper>
  );
}
