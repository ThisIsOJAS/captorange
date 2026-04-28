"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 flex justify-center items-center opacity-30 pointer-events-none">
        <div className="absolute w-150 h-150 bg-primary/20 blur-[120px] rounded-full mix-blend-screen translate-y-[-20%]" />
        <div className="absolute w-100 h-100 bg-blue-500/10 blur-[100px] rounded-full mix-blend-screen translate-x-[20%] translate-y-[20%]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/60 backdrop-blur-md border border-white/10 dark:border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)] text-sm font-medium mb-8 text-foreground/80"
        ></motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 max-w-4xl"
        >
          YOU <span className="text-primary">DREAM</span>.{" "}
          <br className="hidden md:block" />I{" "}
          <span className="text-foreground/80">BUILD</span>. I{" "}
          <span className="text-foreground/80">SCALE</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-xl text-foreground/60 max-w-2xl mb-10"
        >
          End-to-end websites, mobile apps, and digital solutions for modern
          businesses. Turning your vision into a scalable reality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,165,0,0.4)]"
          >
            Start Your Project
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="#work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-foreground bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 rounded-full transition-all hover:scale-105 active:scale-95"
          >
            View Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
