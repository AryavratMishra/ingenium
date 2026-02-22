"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import {
  Lock,
  Fingerprint,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  FileExclamationPoint,
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import api from "@/lib/api";

export default function ResetPassword() {
  const terminalRef = useRef(null);
  const scanLineRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const searchParams = useSearchParams();
  const router = useRouter();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

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

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("ENCRYPTION MISMATCH: Keys do not align");
      return;
    }

    setLoading(true);
    try {
      const token = searchParams.get("token");
      console.log(token);
      const res = await api.post("/user/resetPassword", {
        token,
        newPassword: formData.password,
      });

      setSuccess(true);
      setTimeout(() => router.push("/auth"), 1000);
    } catch (error) {
      setError(error.response?.data?.message || "PROTOCOL_ERROR: Reset failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-black/30 flex items-center justify-center overflow-hidden font-mono">
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
        <div
          ref={scanLineRef}
          className="absolute left-0 right-0 h-0.5 bg-blue-400/50 shadow-[0_0_15px_#3b82f6] z-20 pointer-events-none"
          style={{ top: "0%" }}
        />

        <div className="p-4 sm:p-8 border border-white/5 bg-linear-to-b from-blue-500/5 to-transparent">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/40 mb-4 group">
              <Fingerprint className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h1 className="text-2xl font-bold text-white tracking-[0.2em] uppercase">
              Key Override
            </h1>
            <p className="text-[10px] text-blue-400/60 uppercase tracking-widest mt-2">
              Chrono-Secure Protocol v3.0.0 // Reset_Sequence
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!success ? (
              <motion.form
                key="reset-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-5"
                onSubmit={handleResetPassword}
              >
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500" />
                  <input
                    type="password"
                    required
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    placeholder="NEW ENCRYPTION KEY"
                    className="w-full bg-black/50 border border-blue-500/20 rounded-lg py-3 pl-10 pr-4 text-sm text-blue-100 placeholder:text-blue-900 focus:outline-none focus:border-blue-400 transition-colors"
                  />
                </div>

                <div className="relative">
                  <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500" />
                  <input
                    type="password"
                    required
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                    placeholder="CONFIRM NEW KEY"
                    className="w-full bg-black/50 border border-blue-500/20 rounded-lg py-3 pl-10 pr-4 text-sm text-blue-100 placeholder:text-blue-900 focus:outline-none focus:border-blue-400 transition-colors"
                  />
                </div>

                {error && (
                  <div className="relative w-full group overflow-hidden py-4 bg-red-600/20 border border-red-500/50 rounded-lg text-red-400 font-bold tracking-widest hover:bg-red-600/30 transition-all active:scale-95">
                    <span className="relative z-10 text-[12px] flex items-center justify-center gap-2">
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
                    {loading ? "RE-ENCRYPTING..." : "RE-ESTABLISH IDENTITY"}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform" />
                </button>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-4"
              >
                <div className="text-blue-400 animate-pulse">
                  <ShieldCheck className="w-12 h-12 mx-auto mb-2" />
                  <h2 className="text-xl font-bold tracking-tighter">
                    PROTOCOL RESTORED
                  </h2>
                  <p className="text-xs text-blue-500/60 uppercase">
                    Redirecting to login uplink...
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Decorative Corner Brackets */}
        <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-blue-500/50" />
        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-blue-500/50" />
      </motion.div>

      {/* System Status HUD (Right Side) */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="text-[9px] text-blue-500/40 text-right">
              KEY_NODE_{i}
              <br />
              {success ? "ENCRYPTED" : "RECOGNIZING"}
            </div>
            <div className="w-12 h-1 bg-blue-900/30 rounded-full overflow-hidden">
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.4 }}
                className="w-full h-full bg-blue-500/60"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
