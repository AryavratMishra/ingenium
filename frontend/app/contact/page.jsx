"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageTransitionWrapper } from "@/components/chronoverse";
import { coreTeam } from "@/data/contact";
import { ChevronLeft, Instagram, Linkedin, Mail, Users } from "lucide-react";

const HexFrame = ({ src, name }) => (
  <div className="relative w-64 h-64 group">
    <div className="absolute inset-0 bg-emerald-500/20 rotate-45 animate-pulse blur-xl group-hover:bg-emerald-500/40 transition-all" />
    <div
      className="relative w-full h-full bg-emerald-900/40 border-2 border-emerald-500/50 overflow-hidden"
      style={{
        clipPath:
          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
      }}
    >
      <img
        src={`/members/${name}.jpg`}
        alt={name}
        className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700"
        onError={(e) => {
          e.target.src = `https://ui-avatars.com/api/?name=${name}&background=064e3b&color=34d399`;
        }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-emerald-900/80 to-transparent opacity-40" />
    </div>
  </div>
);

const MemberCard = ({ member, index }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="relative p-8 bg-slate-950/50 border border-emerald-500/10 hover:border-emerald-500/40 transition-all rounded-2xl group overflow-hidden h-full"
  >
    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-100 transition-opacity">
      <span className="font-mono text-[40px] leading-none">
        0{index + 1}
      </span>
    </div>

    <div className="flex flex-col items-center">
      <HexFrame name={member.name} />
      <h3 className="mt-6 text-2xl font-bold text-white tracking-tight text-center">
        {member.name}
      </h3>
      <p className="text-emerald-500 font-mono text-[12px] tracking-widest uppercase mb-6 text-center">
        {member.role}
      </p>

      <div className="flex gap-4">
        {member.email && (
          <a
            href={"mailto:" + member.email}
            target="_blank"
            className="text-sm font-mono text-slate-500 hover:text-emerald-400 transition-colors uppercase border-b border-transparent hover:border-emerald-400"
          >
            <Mail />
          </a>
        )}
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            className="text-sm font-mono text-slate-500 hover:text-emerald-400 transition-colors uppercase border-b border-transparent hover:border-emerald-400"
          >
            <Linkedin />
          </a>
        )}
        {member.instagram && (
          <a
            href={member.instagram}
            target="_blank"
            className="text-sm font-mono text-slate-500 hover:text-emerald-400 transition-colors uppercase border-b border-transparent hover:border-emerald-400"
          >
            <Instagram />
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

// --- Main Page ---

export default function ContactPage() {
  return (
    <PageTransitionWrapper>
      <main className="relative min-h-screen bg-black/30 text-slate-200 selection:bg-emerald-500/40 overflow-x-hidden font-sans">
        {/* BACKGROUND ARCHITECTURE */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-size-[60px_60px] mask-[radial-gradient(ellipse_at_center,black,transparent_80%)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          {/* TOP NAV BAR */}
          <nav className="flex flex-col md:flex-row justify-between items-center mb-20 pb-6 border-b border-emerald-500/10">
            <Link href="/?state=navigation" className="group">
              <div className="flex items-center gap-4 text-emerald-500/60 group-hover:text-emerald-400 transition-all">
                <ChevronLeft />
                <span className="text-[12px] font-bold tracking-[0.3em] uppercase">
                  Return to Chronoverse
                </span>
              </div>
            </Link>
            <div className="hidden md:flex items-center gap-6 font-mono text-[12px]">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
                LINK_STABLE
              </span>
              <span className="text-emerald-500/30">|</span>
              <span className="text-emerald-500/40 uppercase">
                Lat: 40.7128° N, Lon: 74.0060° W
              </span>
            </div>
          </nav>

          {/* HERO HEADER */}
          <header className="mb-16 relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                CONTACT <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-600 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                  DIRECTORY
                </span>
              </h1>
              <div className="max-w-xl p-4 border-l-2 border-emerald-500/50 bg-emerald-500/5 backdrop-blur-sm">
                <p className="text-slate-400 font-mono text-sm leading-relaxed">
                  Accessing encrypted database... <br />
                  Authorized personnel listed below. Use high-frequency channels
                  for urgent deployment requests.
                </p>
              </div>
            </motion.div>
          </header>

          {/* SECTION: CORE COMMAND */}
          <section className="mb-20 space-y-12">
            <div className="flex items-center gap-6 mb-12">
              <h2 className="text-sm font-mono text-emerald-400 tracking-[0.5em] uppercase whitespace-nowrap">
                Core_Leadership
              </h2>
              <div className="h-px w-full bg-linear-to-r from-emerald-500/50 to-transparent" />
            </div>

            {/* Row 1: Overall Coordinator (Centered) */}
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <MemberCard member={coreTeam[0]} index={0} />
              </div>
            </div>

            {/* Row 2: Next 3 Members */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreTeam.slice(1, 4).map((member, i) => (
                <MemberCard key={i} member={member} index={i + 1} />
              ))}
            </div>

            {/* Row 3: Next 3 Members */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreTeam.slice(4, 7).map((member, i) => (
                <MemberCard key={i} member={member} index={i + 4} />
              ))}
            </div>
          </section>

          {/* SECTION: FIELD OPERATIVES ACCESS */}
          <section className="flex justify-center mb-20">
            <Link href="/contact/field-operatives">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-emerald-950/30 border border-emerald-500/30 rounded-full overflow-hidden"
              >
                <div className="absolute inset-0 bg-emerald-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <div className="relative flex items-center gap-3">
                  <span className="p-2 bg-emerald-500/20 rounded-full text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                    <Users size={20} />
                  </span>
                  <span className="font-mono text-emerald-400 font-bold tracking-widest uppercase">
                    Access Team Operatives Database
                  </span>
                </div>
              </motion.button>
            </Link>
          </section>
        </div>
      </main>
    </PageTransitionWrapper>
  );
}
