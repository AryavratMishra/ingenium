"use client";

import { useState, useEffect, useRef, Suspense, useContext } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import api from "@/lib/api";
import { AuthContext } from "@/context/AuthContext";
import { COMPETITION_CONFIG } from "@/data/competition_config";
import { ChevronLeft, Users, ShieldCheck, MapPin } from "lucide-react";

function RegistrationContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const containerRef = useRef(null);

  const competitionKey = searchParams.get("competition") || "General Entry";
  const config =
    COMPETITION_CONFIG[competitionKey] || COMPETITION_CONFIG["General Entry"];

  // Handle teamSize as [min, max] or single number
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

  // Initialize/Update members array based on selected size
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      members: Array.from({ length: selectedSize }, () => ({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
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
    updatedMembers[index][field] = value;
    setFormData({ ...formData, members: updatedMembers });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
          "Transmission failed. Check network link.",
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
            className="flex items-center gap-2 text-accent mb-6 hover:opacity-70 transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase">
              Return to Base
            </span>
          </button>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-0.5 w-12 bg-accent" />
            <span className="text-accent font-mono text-[10px] tracking-[0.4em] uppercase">
              Sector: {config.sector}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
            {config.name}
          </h1>
        </div>

        <div className="flex flex-col items-end border-l-2 border-accent pl-6 py-2">
          <span className="text-[10px] text-white/40 uppercase tracking-widest">
            Size Constraints
          </span>
          <span className="text-2xl font-mono font-bold text-white">
            {minSize} — {maxSize} Units
          </span>
        </div>
      </div>

      <div className="bg-black/40 backdrop-blur-md border border-accent/30 rounded-sm relative shadow-2xl">
        <div className="p-6 md:p-10 border border-accent/10">
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
                  /* STEP 1: TEAM CONFIG */
                  <div className="space-y-12">
                    <div className="cyber-node">
                      <label className="text-[10px] font-mono text-accent mb-4 block tracking-widest uppercase">
                        // 01. Team Designation
                      </label>
                      <input
                        required
                        className="w-full bg-white/5 border-b-2 border-accent/20 p-4 text-2xl text-white font-mono focus:border-accent outline-none"
                        placeholder="TEAM_NAME..."
                        value={formData.teamName}
                        onChange={(e) =>
                          setFormData({ ...formData, teamName: e.target.value })
                        }
                      />
                    </div>

                    <div className="cyber-node">
                      <label className="text-[10px] font-mono text-accent mb-4 block tracking-widest uppercase">
                        // 02. Roster Scaling (Team Size)
                      </label>
                      <div className="flex flex-wrap gap-4">
                        {Array.from(
                          { length: maxSize - minSize + 1 },
                          (_, i) => minSize + i,
                        ).map((size) => (
                          <button
                            key={size}
                            type="button"
                            onClick={() => setSelectedSize(size)}
                            className={`w-16 h-16 border-2 flex items-center justify-center font-mono text-xl transition-all ${
                              selectedSize === size
                                ? "bg-accent text-black border-accent"
                                : "border-white/10 text-white/40 hover:border-accent"
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      disabled={!formData.teamName}
                      className="w-full py-6 bg-accent text-black font-black uppercase tracking-[1em] text-xs hover:brightness-110 disabled:opacity-20 transition-all"
                    >
                      Initialize Personnel Entry
                    </button>
                  </div>
                ) : (
                  /* STEP 2: PERSONNEL DATA */
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 gap-8 max-h-[65vh] overflow-y-auto custom-scrollbar pr-4">
                      {formData.members.map((member, idx) => (
                        <div
                          key={idx}
                          className="cyber-node bg-white/5 border border-white/5 p-6 md:p-8"
                        >
                          <div className="flex items-center gap-4 mb-8">
                            <span className="text-xs font-mono bg-accent text-black px-3 py-1 font-bold">
                              UNIT_0{idx + 1}
                            </span>
                            <div className="h-px flex-1 bg-white/10" />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Personal Details */}
                            <div className="space-y-4">
                              <p className="text-[10px] text-white/30 uppercase font-mono tracking-widest flex items-center gap-2">
                                <Users size={12} /> Identity
                              </p>
                              <input
                                required
                                placeholder="FIRST NAME"
                                className="cyber-input"
                                onChange={(e) =>
                                  handleMemberChange(
                                    idx,
                                    "firstName",
                                    e.target.value,
                                  )
                                }
                              />
                              <input
                                required
                                placeholder="LAST NAME"
                                className="cyber-input"
                                onChange={(e) =>
                                  handleMemberChange(
                                    idx,
                                    "lastName",
                                    e.target.value,
                                  )
                                }
                              />
                            </div>

                            {/* Contact & Legal */}
                            <div className="space-y-4">
                              <p className="text-[10px] text-white/30 uppercase font-mono tracking-widest flex items-center gap-2">
                                <ShieldCheck size={12} /> Security
                              </p>
                              <input
                                required
                                type="email"
                                placeholder="EMAIL ADDRESS"
                                className="cyber-input"
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
                                placeholder="MOBILE NUMBER"
                                className="cyber-input"
                                onChange={(e) =>
                                  handleMemberChange(
                                    idx,
                                    "mobile",
                                    e.target.value,
                                  )
                                }
                              />
                              <input
                                required
                                maxLength={12}
                                placeholder="AADHAAR NUMBER"
                                className="cyber-input"
                                onChange={(e) =>
                                  handleMemberChange(
                                    idx,
                                    "aadhaar",
                                    e.target.value,
                                  )
                                }
                              />
                            </div>

                            {/* Geo & Affiliation */}
                            <div className="space-y-4">
                              <p className="text-[10px] text-white/30 uppercase font-mono tracking-widest flex items-center gap-2">
                                <MapPin size={12} /> Origin
                              </p>
                              <input
                                required
                                placeholder="CITY"
                                className="cyber-input"
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
                                onChange={(e) =>
                                  handleMemberChange(
                                    idx,
                                    "state",
                                    e.target.value,
                                  )
                                }
                              />
                              <input
                                placeholder="COLLEGE (OPTIONAL)"
                                className="cyber-input border-dashed"
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

                    <div className="flex flex-col md:flex-row gap-4 pt-6">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-12 py-5 border border-white/20 text-white font-mono text-xs uppercase hover:bg-white/5 transition-all"
                      >
                        Reconfigure Roster
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-5 bg-accent text-black font-black uppercase tracking-[0.5em] text-sm shadow-[0_0_30px_var(--accent)] hover:brightness-110"
                      >
                        Transmit credentials
                      </button>
                    </div>
                  </div>
                )}
              </motion.form>
            )}

            {status === "processing" && (
              <div className="py-32 flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mb-8" />
                <span className="font-mono text-accent animate-pulse tracking-widest">
                  UPLOADING_PERSONNEL_LOGS...
                </span>
              </div>
            )}

            {status === "success" && (
              <div className="py-20 text-center">
                <div className="text-accent text-6xl mb-6 font-mono">
                  ENROLLED
                </div>
                <p className="text-white/60 mb-10 max-w-sm mx-auto font-mono text-sm uppercase">
                  Personnel profiles verified and stored in Chronoverse. Data
                  packets sealed.
                </p>
                <button
                  onClick={() => router.push("/present")}
                  className="px-12 py-4 bg-accent text-black font-bold uppercase text-xs"
                >
                  Return to HQ
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style jsx global>{`
        .cyber-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 12px;
          color: white;
          font-family: monospace;
          font-size: 13px;
          outline: none;
          transition: all 0.3s;
        }
        .cyber-input:focus {
          border-bottom: 1px solid var(--accent);
          background: rgba(var(--accent-rgb), 0.05);
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
    <main className="min-h-screen bg-black/30 text-white flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[30px_30px]" />
      <Suspense
        fallback={
          <div className="font-mono text-accent animate-pulse uppercase">
            Waking_Nodes...
          </div>
        }
      >
        <RegistrationContent />
      </Suspense>
    </main>
  );
}
