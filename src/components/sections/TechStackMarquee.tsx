"use client";

import { motion } from "framer-motion";

const technologies = [
  "React",
  "Next.js",
  "Vue",
  "Node.js",
  "Express",
  "MongoDB",
  "Firebase",
  "Tailwind CSS",
  "TypeScript",
  "Flutter",
  "React Native",
  "PostgreSQL",
  "AWS",
  "Vercel",
];

export function TechStackMarquee() {
  return (
    <section className="py-12 border-y border-border/40 bg-primary/5 overflow-hidden">
      <div className="container mx-auto px-4 mb-6 text-center">
        <p className="text-sm font-medium text-foreground/50 uppercase tracking-widest">
          Powered by modern technology
        </p>
      </div>

      <div className="relative flex max-w-[100vw] overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-background to-transparent z-10" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap"
        >
          {/* Duplicate the array to create seamless loop */}
          {[...technologies, ...technologies].map((tech, i) => (
            <div
              key={`${tech}-${i}`}
              className="flex items-center justify-center px-8 py-4 mx-4 rounded-xl bg-primary/10 backdrop-blur-md border border-primary/20 transition-all hover:bg-primary/20 hover:border-primary/40 cursor-default shadow-[0_4px_15px_rgba(255,165,0,0.05)]"
            >
              <span className="text-lg font-bold text-primary">{tech}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
