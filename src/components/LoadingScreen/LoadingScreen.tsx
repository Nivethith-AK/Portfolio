import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete?: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Smooth progress counter over ~1.6 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            onComplete?.();
          }, 250);
          return 100;
        }
        // Accelerate near the end
        const increment = prev < 50 ? 3 : prev < 85 ? 5 : 8;
        return Math.min(prev + increment, 100);
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  const getStatusText = () => {
    if (progress < 30) return "INITIALIZING SYSTEM CORE";
    if (progress < 60) return "SYNCHRONIZING AI ARCHITECTURE";
    if (progress < 90) return "CALIBRATING PRODUCTION INTERFACES";
    return "SYSTEM READY";
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="loading-screen"
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%",
            transition: { 
              duration: 0.85, 
              ease: [0.76, 0, 0.24, 1] // Animate UI & Apple-grade curtain lift
            } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#09090b] text-white select-none overflow-hidden"
        >
          {/* Ambient Radial Glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-violet-600/20 via-primary/20 to-sky-500/10 blur-[120px] pointer-events-none animate-pulse" />

          {/* Center Stage: Vector Monogram + Brand */}
          <div className="relative z-10 flex flex-col items-center gap-8 px-6">
            
            {/* Animated SVG Monogram (NA) */}
            <div className="relative w-28 h-28 flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-primary drop-shadow-[0_0_25px_rgba(139,92,246,0.6)]"
              >
                {/* Background ambient stroke guide */}
                <path
                  d="M18 80V20L52 80V20M52 80L84 20V80"
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Animated Outline Path: exact match to animate-ui stroke-dash drawing */}
                <motion.path
                  d="M18 80V20L52 80V20M52 80L84 20V80"
                  stroke="url(#gradient-accent)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    pathLength: { duration: 1.3, ease: [0.22, 1, 0.36, 1] },
                    opacity: { duration: 0.3 }
                  }}
                />

                {/* Linear gradient for stroke */}
                <defs>
                  <linearGradient id="gradient-accent" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c084fc" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#38bdf8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Typography */}
            <div className="flex flex-col items-center text-center gap-1.5">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-lg md:text-xl font-bold tracking-tight text-white/95"
              >
                Nivethith Arasakumar
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-semibold"
              >
                AI Solutions Architect
              </motion.p>
            </div>

            {/* Technical Progress Bar & Rolling Counter */}
            <div className="w-56 sm:w-64 flex flex-col gap-2.5 items-center mt-2">
              <div className="w-full h-1 bg-neutral-800/80 rounded-full overflow-hidden p-[1px] border border-neutral-700/40">
                <motion.div
                  className="h-full bg-gradient-to-r from-violet-500 via-primary to-sky-400 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>

              {/* Status & Numeric Value */}
              <div className="w-full flex items-center justify-between text-[11px] font-mono">
                <span className="text-neutral-400 tracking-wider font-medium uppercase text-[10px]">
                  {getStatusText()}
                </span>
                <span className="text-violet-400 font-bold tabular-nums">
                  {progress}%
                </span>
              </div>
            </div>

          </div>

          {/* Bottom subtle brand tag */}
          <div className="absolute bottom-8 text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
            System Initialized // v2026.04
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
