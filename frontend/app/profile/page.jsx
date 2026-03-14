"use client";

import api from "@/lib/api";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  LogOut,
  Terminal,
  ChevronLeft,
  CreditCard,
  AlertCircle,
  CheckCircle2,
  X,
  User,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { COMPETITION_CONFIG } from "@/data/competition_config";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";

export default function ProfilePage() {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedReg, setSelectedReg] = useState(null);
  const router = useRouter();
  const { logout, user } = useContext(AuthContext);

  useEffect(() => {
    const fetchRegistrations = async () => {
      if (!user?.email) return;
      try {
        const response = await api.get(`/registration`);
        setRegistrations(response.data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    fetchRegistrations();
  }, [user]);

  const handlePayment = (e, teamName) => {
    e.stopPropagation();
    alert(`Initiating payment uplink for ${teamName}...`);
  };

  const stats = [
    { label: "Identity Status", value: "Verified", color: "text-cyan-400" },
    {
      label: "Active Nodes",
      value: registrations.length,
      color: "text-blue-400",
    },
    {
      label: "Joined",
      value: user ? new Date(user.created_at).toLocaleDateString() : "---",
      color: "text-violet-400",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black/30 text-white font-mono overflow-x-hidden">
      {/* HUD Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0)_0%,rgba(2,4,10,1)_100%)] z-10" />

      <main className="relative z-20 max-w-6xl mx-auto px-6 py-12">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-blue-500 mb-6 group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-[13px] tracking-[0.5em] uppercase">Return</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* 1. Biometric Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 p-3 sm:p-6 bg-black/40 border border-blue-500/20 rounded-2xl backdrop-blur-md relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
              <Shield className="w-12 h-12 text-blue-500" />
            </div>

            <div className="w-32 h-32 mx-auto rounded-full border-2 border-dashed border-blue-500/50 p-2 mb-6">
              <div
                className="w-full h-full rounded-full bg-cover border border-blue-500"
                style={{
                  backgroundImage: `url('https://api.dicebear.com/7.x/pixel-art/svg?seed=${user?.name || "Felix"}')`,
                }}
              />
            </div>

            <h2 className="text-xl font-bold text-center tracking-widest uppercase">
              {user?.name || "Unauthorized_User"}
            </h2>
            <p className="text-[12px] text-blue-400/60 text-center mb-6 break-all">
              {user?.email || "NO_UPLINK_FOUND"}
            </p>

            <div className="space-y-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/5 p-3 rounded-lg border border-white/5"
                >
                  <div className="text-[12px] text-gray-500 uppercase">
                    {stat.label}
                  </div>
                  <div className={`text-lg font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 2. Registration Logs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-3 sm:p-6 bg-black/40 border border-blue-500/20 rounded-2xl backdrop-blur-md">
              <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <h3 className="text-sm font-bold tracking-widest uppercase">
                  Mission_Logs
                </h3>
              </div>

              {user?.email.split("@")[1] != "iiti.ac.in" ? (
                <p className="text-xs text-gray-500 italic">
                  If you have already completed the payment and the portal is
                  still displaying the payment option, please note that the
                  status will be updated by the end of the day.
                </p>
              ) : null}

              <div className="space-y-4">
                {registrations.map((reg, i) => {
                  const comp = COMPETITION_CONFIG[reg.ps_name] || {
                    name: reg.ps_name,
                    sector: "SEC-X",
                  };
                  return (
                    <motion.div
                      key={i}
                      onClick={() => setSelectedReg(reg)}
                      className="cursor-pointer group relative p-5 border border-white/5 bg-white/5 rounded-xl hover:border-blue-500/40 hover:bg-blue-500/5 transition-all"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[9px] px-1.5 py-0.5 bg-blue-500/20 text-blue-400 rounded">
                              {comp.sector}
                            </span>
                            <h4 className="font-bold uppercase text-blue-100">
                              {comp.name}
                            </h4>
                          </div>
                          <p className="text-xs text-gray-500 italic">
                            Team: {reg.team_name}
                          </p>
                        </div>

                        <div className="flex items-center gap-4">
                          {!reg.fees_paid && (
                            <Link
                              href={
                                "https://registration.iiti.ac.in/ingenium26/"
                              }
                              className="flex items-center gap-2 px-3 py-1.5 bg-amber-500/20 border border-amber-500/50 text-amber-500 rounded text-[12px] font-bold uppercase hover:bg-amber-500 hover:text-black transition-colors"
                            >
                              <CreditCard className="w-3 h-3" /> Pay Fees
                            </Link>
                          )}
                          {reg.fees_paid && (
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                          )}
                          <div className="text-[12px] text-gray-500">
                            {reg.participants.length} Ops
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-1 gap-4">
              <button
                onClick={logout}
                className={`p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-blue-500/10 transition-all group flex flex-col items-center gap-2 hover:border-red-500/50 hover:text-red-400`}
              >
                <LogOut className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                <span className="text-[12px] uppercase tracking-tighter">
                  Logout
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </main>

      {/* --- PARTICIPANT MODAL --- */}
      <AnimatePresence>
        {selectedReg && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedReg(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0a0a0c] border border-blue-500/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            >
              {/* Modal Header */}
              <div className="p-3 sm:p-6 border-b border-white/10 flex justify-between items-center bg-blue-500/5">
                <div>
                  <h3 className="text-xl font-bold tracking-tighter text-blue-400 uppercase">
                    {selectedReg.team_name} //{" "}
                    <span className="text-white">{selectedReg.ps_name}</span>
                  </h3>
                  <p className="text-[12px] text-gray-500 uppercase tracking-widest mt-1">
                    Manifest_Access_Granted
                  </p>
                </div>
                <button
                  onClick={() => setSelectedReg(null)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-3 sm:p-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedReg.participants.map((p, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-3 relative group overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 -rotate-45 translate-x-8 -translate-y-8" />

                      <div className="flex items-center gap-3 border-b border-white/5 pb-2">
                        <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                          {idx + 1}
                        </div>
                        <span className="font-bold text-md uppercase tracking-tight">
                          {p.first_name} {p.last_name}
                        </span>
                      </div>

                      <div className="space-y-2 text-[13px]">
                        <div className="flex items-center gap-2 text-gray-400">
                          <Mail className="w-3 h-3 text-cyan-500" /> {p.email}
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Phone className="w-3 h-3 text-cyan-500" /> {p.mobile}
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <MapPin className="w-3 h-3 text-cyan-500" /> {p.city},{" "}
                          {p.state}
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <User className="w-3 h-3 text-cyan-500" /> Aadhaar:{" "}
                          {p.aadhaar}
                        </div>
                        {p.college && (
                          <div className="mt-2 text-[12px] bg-blue-500/10 text-blue-300 px-2 py-1 rounded inline-block">
                            {p.college}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-white/5 border-t border-white/10 text-center">
                <p className="text-[9px] text-gray-600 uppercase tracking-[0.5em]">
                  End of Transmission
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
