"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [phase, setPhase] = useState<"loading" | "done">("loading");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2200;
    const steps = 60;
    const interval = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      const eased = Math.min(
        100,
        Math.round((1 - Math.pow(1 - current / steps, 3)) * 100),
      );
      setProgress(eased);
      if (current >= steps) {
        clearInterval(timer);
        setTimeout(() => setPhase("done"), 300);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {phase === "loading" && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-obsidian"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Noise overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Center content */}
          <div className="relative flex flex-col items-center gap-10">
            {/* Brand mark */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col items-center gap-3"
            >
              {/* Decorative horizontal rule above */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "2.5rem" }}
                transition={{
                  delay: 0.4,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="h-px bg-maroon"
              />

              <span
                className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-ivory"
                style={{ letterSpacing: "-0.02em" }}
              >
                AksaraNada
              </span>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <span className="eyebrow text-warm-gray text-[0.65rem]">
                  Kursus Musik Jakarta · Bekasi
                </span>
              </motion.div>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col items-center gap-3 w-48"
            >
              <div className="w-full h-px bg-white/10 relative overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-maroon"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.05 }}
                />
              </div>
              <span className="font-mono text-[0.65rem] text-warm-gray tabular-nums">
                {String(progress).padStart(3, "0")}%
              </span>
            </motion.div>
          </div>

          {/* Bottom tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="absolute bottom-10 left-0 right-0 flex justify-center"
          >
            <span className="eyebrow text-white/20 text-[0.6rem]">
              Di Mana Nada Bertemu Jiwa
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
