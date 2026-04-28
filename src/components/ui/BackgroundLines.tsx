"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function BackgroundLines() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-[-1] opacity-[0.15] dark:opacity-[0.08]">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute w-full h-full"
      >
        {/* Line 1 - Primary Orange */}
        <motion.g
          animate={{ y: [0, -5, 0], x: [0, 2, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.path
            d="M0,100 C20,0 50,100 100,0"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.2"
            className="text-primary"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </motion.g>

        {/* Line 2 - Primary Orange Thick */}
        <motion.g
          animate={{ y: [0, 8, 0], x: [0, -3, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.path
            d="M0,0 C50,100 80,0 100,100"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.3"
            className="text-primary"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4, ease: "easeInOut", delay: 0.5 }}
          />
        </motion.g>

        {/* Line 3 - Foreground Thin */}
        <motion.g
          animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.path
            d="M-20,50 C40,-20 60,120 120,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.1"
            className="text-foreground"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 5, ease: "easeInOut", delay: 1 }}
          />
        </motion.g>

        {/* Line 4 - Foreground Wave */}
        <motion.g
          animate={{ y: [0, 5, 0], x: [0, -5, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.path
            d="M0,20 C30,80 70,-10 100,80"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.15"
            className="text-foreground"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3.5, ease: "easeInOut", delay: 1.5 }}
          />
        </motion.g>
      </svg>
    </div>
  );
}
