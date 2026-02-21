"use client";

import { useState, useEffect, useRef, Suspense, useContext } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import api from "@/lib/api";
import { AuthContext } from "@/context/AuthContext";
import { COMPETITION_CONFIG } from "@/data/competition_config";
import {
  ChevronLeft,
  Users,
  ShieldCheck,
  MapPin,
  Fingerprint,
} from "lucide-react";

function RegistrationContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const containerRef = useRef(null);

  const competitionKey = searchParams.get("competition") || "General Entry";
  const config =
    COMPETITION_CONFIG[competitionKey] || COMPETITION_CONFIG["General Entry"];

  const minSize = Array.isArray(config.teamSize)
    ? config.teamSize[0]
    : config.teamSize;
  const maxSize = Array.isArray(config.teamSize)
    ? config.teamSize[1]
    : config.teamSize;

  const [step, setStep] = useState(1);
  const [selectedSize, setSelectedSize] = useState(minSize);
  const [formData, setFormData] = useState({
    teamName: "",
    members: [],
  });

  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const themeColor = status === "error" ? "#ff4747" : config.color;

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      members: Array.from({ length: selectedSize }, () => ({
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        gender: "",
        city: "",
        state: "",
        college: "",
        aadhaar: "",
      })),
    }));
  }, [selectedSize]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cyber-node", {
        opacity: 0,
        y: 20,
        stagger: 0.05,
        ease: "power3.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, [step]);

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...formData.members];
    // Numeric validation for Aadhaar
    if (field === "aadhaar" && value !== "" && !/^\d+$/.test(value)) return;
    if (field === "mobile" && value !== "" && !/^\d+$/.test(value)) return;

    updatedMembers[index][field] = value;
    setFormData({ ...formData, members: updatedMembers });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Final Aadhaar check
    const invalidAadhaar = formData.members.some(
      (m) => m.aadhaar.length !== 12,
    );
    if (invalidAadhaar) {
      setErrorMsg(
        "VALIDATION_ERROR: One or more Aadhaar IDs are not exactly 12 digits.",
      );
      setStatus("error");
      return;
    }

    const invalidMobile = formData.members.some((m) => m.mobile.length !== 10);
    if (invalidMobile) {
      setErrorMsg(
        "VALIDATION_ERROR: One or more Mobile Numbers are not exactly 10 digits.",
      );
      setStatus("error");
      return;
    }

    setStatus("processing");
    try {
      await api.post("http://localhost:5000/api/registration/register", {
        teamName: formData.teamName,
        psName: competitionKey,
        participants: formData.members,
      });
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMsg(
        error.response?.data?.message ||
          "TRANSMISSION_FAILED: Uplink unstable.",
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative z-10 w-full max-w-6xl mx-auto p-4 md:p-8"
      style={{ "--accent": themeColor }}
    >
      {/* HEADER HUD */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
        <div>
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-accent mb-6 hover:opacity-70 transition-all uppercase font-bold text-[14px] tracking-widest"
          >
            <ChevronLeft size={20} /> Return
          </button>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-0.5 w-8 bg-accent" />
            <span className="text-accent font-mono text-[12px] tracking-[0.4em] uppercase">
              Protocol: {config.sector}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none italic">
            {config.name}
          </h1>
        </div>

        <div className="flex flex-col items-end border-r-2 border-accent pr-6 py-2">
          <span className="text-[11px] text-white/40 uppercase tracking-[0.3em]">
            Unit Multiplier
          </span>
          <span className="text-3xl font-mono font-bold text-white">
            {selectedSize} of {maxSize}
          </span>
        </div>
      </div>

      <div className="bg-black/60 backdrop-blur-xl border border-accent/20 rounded-sm relative shadow-[0_0_100px_rgba(0,0,0,1)]">
        <div className="p-3 sm:p-6 md:p-10 border border-white/5">
          <AnimatePresence mode="wait">
            {status === "idle" && (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
              >
                {step === 1 ? (
                  <div className="space-y-12">
                    <div className="cyber-node">
                      <label className="text-[12px] font-mono text-accent/60 mb-4 block tracking-widest uppercase italic">
                        // Entry 01: Team Designation
                      </label>
                      <input
                        required
                        className="w-full bg-transparent border-b-2 border-accent/20 p-4 text-3xl text-white font-mono focus:border-accent outline-none transition-all placeholder:opacity-20"
                        placeholder="INPUT_ALIAS..."
                        value={formData.teamName}
                        onChange={(e) =>
                          setFormData({ ...formData, teamName: e.target.value })
                        }
                      />
                    </div>

                    <div className="cyber-node">
                      <label className="text-[12px] font-mono text-accent/60 mb-6 block tracking-widest uppercase italic">
                        // Entry 02: Scale Roster
                      </label>
                      <div className="flex flex-wrap gap-3">
                        {Array.from(
                          { length: maxSize - minSize + 1 },
                          (_, i) => minSize + i,
                        ).map((size) => (
                          <button
                            key={size}
                            type="button"
                            onClick={() => setSelectedSize(size)}
                            className={`px-8 py-4 border font-mono transition-all ${
                              selectedSize === size
                                ? "bg-accent text-black border-accent font-bold"
                                : "border-white/10 text-white/40 hover:border-accent/50"
                            }`}
                          >
                            {size < 10 ? `0${size}` : size}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      disabled={!formData.teamName}
                      className="w-full py-6 bg-accent text-black font-black uppercase tracking-[0.8em] text-xs hover:tracking-[1em] disabled:opacity-20 transition-all duration-500 shadow-[0_0_20px_var(--accent)]"
                    >
                      Initialize Personnel Entry
                    </button>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 gap-12 max-h-[60vh] overflow-y-auto custom-scrollbar pr-6">
                      {formData.members.map((member, idx) => (
                        <div key={idx} className="cyber-node relative">
                          <div className="flex items-center gap-4 mb-8">
                            <span className="text-[12px] font-mono bg-accent/10 text-accent border border-accent/20 px-4 py-1 italic">
                              UNIT_ID: 0{idx + 1}
                            </span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
                            {/* Identity Column */}
                            <div className="space-y-5">
                              <p className="section-label">
                                <Users size={12} /> Biometrics
                              </p>
                              <input
                                required
                                placeholder="FIRST NAME"
                                className="cyber-input"
                                value={member.first_name}
                                onChange={(e) =>
                                  handleMemberChange(
                                    idx,
                                    "first_name",
                                    e.target.value,
                                  )
                                }
                              />
                              <input
                                required
                                placeholder="LAST NAME"
                                className="cyber-input"
                                value={member.last_name}
                                onChange={(e) =>
                                  handleMemberChange(
                                    idx,
                                    "last_name",
                                    e.target.value,
                                  )
                                }
                              />

                              <select
                                required
                                className="cyber-input appearance-none cursor-pointer"
                                value={member.gender}
                                onChange={(e) =>
                                  handleMemberChange(
                                    idx,
                                    "gender",
                                    e.target.value,
                                  )
                                }
                              >
                                <option
                                  value=""
                                  className="bg-black text-white/20"
                                >
                                  SELECT GENDER
                                </option>
                                <option
                                  value="Male"
                                  className="bg-black text-white uppercase"
                                >
                                  Male
                                </option>
                                <option
                                  value="Female"
                                  className="bg-black text-white uppercase"
                                >
                                  Female
                                </option>
                                <option
                                  value="Other"
                                  className="bg-black text-white uppercase"
                                >
                                  Other / Non-Binary
                                </option>
                              </select>
                            </div>

                            {/* Contact Column */}
                            <div className="space-y-5">
                              <p className="section-label">
                                <ShieldCheck size={12} /> Comms & ID
                              </p>
                              <input
                                required
                                type="email"
                                placeholder="EMAIL ADDRESS"
                                className="cyber-input"
                                value={member.email}
                                onChange={(e) =>
                                  handleMemberChange(
                                    idx,
                                    "email",
                                    e.target.value,
                                  )
                                }
                              />
                              <input
                                required
                                type="tel"
                                maxLength={10}
                                placeholder="MOBILE (10 DIGITS)"
                                className="cyber-input"
                                value={member.mobile}
                                onChange={(e) =>
                                  handleMemberChange(
                                    idx,
                                    "mobile",
                                    e.target.value,
                                  )
                                }
                              />
                              <div className="relative">
                                <input
                                  required
                                  maxLength={12}
                                  placeholder="AADHAAR (12 DIGITS)"
                                  className={`cyber-input ${member.aadhaar.length === 12 ? "border-green-500/50" : ""}`}
                                  value={member.aadhaar}
                                  onChange={(e) =>
                                    handleMemberChange(
                                      idx,
                                      "aadhaar",
                                      e.target.value,
                                    )
                                  }
                                />
                                <Fingerprint
                                  className={`absolute right-3 top-3 transition-colors ${member.aadhaar.length === 12 ? "text-green-500" : "text-white/10"}`}
                                  size={16}
                                />
                              </div>
                            </div>

                            {/* Geo Column */}
                            <div className="space-y-5">
                              <p className="section-label">
                                <MapPin size={12} /> Origin Sector
                              </p>
                              <input
                                required
                                placeholder="CITY"
                                className="cyber-input"
                                value={member.city}
                                onChange={(e) =>
                                  handleMemberChange(
                                    idx,
                                    "city",
                                    e.target.value,
                                  )
                                }
                              />
                              <input
                                required
                                placeholder="STATE"
                                className="cyber-input"
                                value={member.state}
                                onChange={(e) =>
                                  handleMemberChange(
                                    idx,
                                    "state",
                                    e.target.value,
                                  )
                                }
                              />
                              <input
                                placeholder="COLLEGE NAME"
                                className="cyber-input border-dashed opacity-70"
                                value={member.college}
                                onChange={(e) =>
                                  handleMemberChange(
                                    idx,
                                    "college",
                                    e.target.value,
                                  )
                                }
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 pt-10 border-t border-white/5">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-12 py-5 border border-white/10 text-white/40 font-mono text-[12px] uppercase hover:text-white hover:border-white transition-all"
                      >
                        Re-scale Roster
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-5 bg-accent text-black font-black uppercase tracking-[0.5em] text-sm shadow-[0_0_40px_rgba(var(--accent-rgb),0.3)] hover:brightness-110 active:scale-[0.98] transition-all italic"
                      >
                        Confirm Transmissions
                      </button>
                    </div>
                  </div>
                )}
              </motion.form>
            )}

            {status === "processing" && (
              <div className="py-32 flex flex-col items-center">
                <div className="relative w-20 h-20 mb-10">
                  <div className="absolute inset-0 border-4 border-accent/20 rounded-full" />
                  <div className="absolute inset-0 border-t-4 border-accent rounded-full animate-spin" />
                </div>
                <span className="font-mono text-accent animate-pulse tracking-[0.5em] text-xs">
                  UPLOADING_PERSONNEL_MANIFEST...
                </span>
              </div>
            )}

            {status === "error" && (
              <div className="py-20 text-center">
                <div className="text-red-500 text-6xl mb-6">⚠</div>
                <h2 className="text-3xl font-black text-white mb-4 italic uppercase">
                  Encryption Denied
                </h2>
                <div className="max-w-md mx-auto bg-red-500/10 border border-red-500/20 p-4 mb-10">
                  <p className="font-mono text-xs text-red-400 uppercase leading-relaxed">
                    {errorMsg}
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-12 py-4 bg-white text-black font-black uppercase text-[12px] tracking-widest hover:bg-red-500 hover:text-white transition-all"
                >
                  Reset Console
                </button>
              </div>
            )}

            {status === "success" && (
              <div className="py-20 text-center">
                <div className="w-20 h-20 border-4 border-accent rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                  <span className="text-accent text-4xl font-bold">✓</span>
                </div>
                <h2 className="text-5xl font-black text-white mb-4 italic uppercase tracking-tighter">
                  Manifest Locked
                </h2>
                <p className="text-white/40 mb-10 max-w-sm mx-auto font-mono text-xs uppercase tracking-widest">
                  Team {formData.teamName} has been successfully updated in the{" "}
                  {config.name} archives.
                </p>
                <button
                  onClick={() => router.push("/present")}
                  className="px-12 py-4 bg-accent text-black font-bold uppercase text-[12px] tracking-[0.5em] hover:bg-white transition-all"
                >
                  Terminate Link
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style jsx global>{`
        .section-label {
          font-family: monospace;
          font-size: 12px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.4);
          letter-spacing: 0.2em;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .cyber-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.02);
          border-bottom: 2px solid rgba(255, 255, 255, 0.05);
          padding: 14px;
          color: white;
          font-family: monospace;
          font-size: 12px;
          outline: none;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .cyber-input:focus {
          border-bottom-color: var(--accent);
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 4px 20px -10px var(--accent);
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--accent);
        }
      `}</style>
    </div>
  );
}

export default function RegistrationPageContent() {
  const { isLoggedIn } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) router.back();
  }, [isLoggedIn]);

  return (
    <main className="min-h-screen bg-black/30 text-white flex items-center justify-center relative overflow-hidden p-4">
      <Suspense
        fallback={
          <div className="font-mono text-accent animate-pulse">Syncing...</div>
        }
      >
        <RegistrationContent />
      </Suspense>
    </main>
  );
}
