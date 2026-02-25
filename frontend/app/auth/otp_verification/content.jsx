"use client";

import React, { useState, useEffect, useRef, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import {
  Lock,
  Cpu,
  ArrowRight,
  ShieldCheck,
  RefreshCcw,
  FileWarning,
  FileExclamationPoint,
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import api from "@/lib/api";
import { AuthContext } from "@/context/AuthContext";

export default function OTPVerification() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [timer, setTimer] = useState(60);

  const terminalRef = useRef(null);
  const scanLineRef = useRef(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "USER@NODE.SYS";
  const { refreshUser } = useContext(AuthContext);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  useEffect(() => {
    if (scanLineRef.current) {
      gsap.to(scanLineRef.current, {
        top: "100%",
        duration: 3,
        repeat: -1,
        ease: "none",
      });
    }
  }, []);

  const handleVerify = async (e) => {
    e.preventDefault();
    if (otp.length < 6) {
      setError("INCOMPLETE SECURE KEY");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await api.post("/user/verifyOtp", { email, otp });
      const formData = JSON.parse(localStorage.getItem("formData") || null);
      const res = await api.post("/user/signup", formData);
      localStorage.removeItem("formData");
      localStorage.setItem("access_token", res.data.access_token);
      refreshUser();
      router.push(searchParams.get("path") || "/");
    } catch (err) {
      setError(err.response?.data?.message || "DECRYPTION FAILED: INVALID OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (timer > 0) return;
    setTimer(60);
    try {
      await api.post("/user/sendOtp", { email });
    } catch (err) {
      setError("RESEND PROTOCOL FAILED");
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-black/30 flex items-center justify-center overflow-hidden font-mono">
      {/* Background Decorative HUD */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 border border-blue-500/20 rounded-full animate-[spin_60s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 border border-cyan-500/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
      </div>

      <motion.div
        ref={terminalRef}
        initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        className="relative z-10 w-full max-w-md p-1 bg-black/40 backdrop-blur-xl border border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.15)]"
      >
        {/* Scanning Line Effect */}
        <div
          ref={scanLineRef}
          className="absolute left-0 right-0 h-0.5 bg-blue-400/50 shadow-[0_0_15px_#3b82f6] z-20 pointer-events-none"
          style={{ top: "0%" }}
        />

        <div className="p-4 sm:p-8 border border-white/5 bg-linear-to-b from-blue-500/5 to-transparent">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/40 mb-4 group">
              <ShieldCheck className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h1 className="text-2xl font-bold text-white tracking-[0.2em] uppercase">
              2FA Verification
            </h1>
            <p className="text-[10px] text-blue-400/60 uppercase tracking-widest mt-2">
              Sent to: <span className="text-blue-300">{email}</span>
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleVerify}>
            <div className="relative group">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500" />
              <input
                type="text"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                placeholder="0 0 0 0 0 0"
                className="w-full bg-black/50 border border-blue-500/20 rounded-lg py-4 pl-10 pr-4 text-2xl text-center tracking-[0.5em] text-blue-100 placeholder:text-blue-900 focus:outline-none focus:border-blue-400 transition-colors"
              />
            </div>

            {error && (
              <div className="relative w-full group overflow-hidden py-4 bg-red-600/20 border border-red-500/50 rounded-lg text-red-400 font-bold tracking-widest hover:bg-red-600/30 transition-all active:scale-95">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <FileExclamationPoint className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  {error}
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform" />
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="relative w-full group overflow-hidden py-4 bg-blue-600/20 border border-blue-500/50 rounded-lg text-blue-400 font-bold tracking-widest hover:bg-blue-600/30 transition-all active:scale-95 disabled:opacity-50"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? "DECRYPTING..." : "AUTHORIZE UPLINK"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform" />
            </button>
          </form>

          {/* Footer Toggle */}
          <div className="mt-8 text-center">
            <button
              onClick={handleResend}
              disabled={timer > 0}
              className={`text-[13px] flex items-center justify-center gap-2 mx-auto uppercase tracking-tighter transition-colors ${
                timer > 0
                  ? "text-blue-500/60 cursor-not-allowed"
                  : "text-blue-500/60 hover:text-blue-400 cursor-pointer"
              }`}
            >
              <RefreshCcw
                className={`w-3 h-3 ${timer > 0 ? "" : "animate-spin-slow"}`}
              />
              {timer > 0
                ? `Signal Cooldown: ${timer}s`
                : "Resend Verification Pulse"}
            </button>
          </div>
        </div>

        {/* Decorative Corner Brackets */}
        <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-blue-500/50" />
        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-blue-500/50" />
      </motion.div>

      {/* System Status HUD (Right Side) */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="text-[9px] text-blue-500/40 text-right uppercase">
              Node_Sync_{i}
              <br />
              {loading ? "Processing" : "Idle"}
            </div>
            <div className="w-12 h-1 bg-blue-900/30 rounded-full overflow-hidden">
              <motion.div
                animate={loading ? { x: ["-100%", "100%"] } : { x: "0%" }}
                transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                className="w-full h-full bg-blue-500/60"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
