"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";

// Custom Github Icon since it was removed from lucide-react
const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export function DeveloperProfile() {
  return (
    <section className="py-24 relative overflow-hidden border-t border-border/40">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 relative"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-background shadow-xl relative z-10 mx-auto bg-foreground/5">
              <Image
                src="https://github.com/ThisIsOJAS.png"
                alt="Ojas Gupta"
                width={160}
                height={160}
                className="object-cover"
                unoptimized
              />
            </div>
            {/* Background glow for avatar */}
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-150 z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Hi, I&apos;m <span className="text-primary">Ojas Gupta</span>
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-4 text-foreground/70 font-medium mb-8">
              <div className="flex items-center gap-1.5 bg-foreground/5 px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4 text-primary" />
                India
              </div>
              <a
                href="https://github.com/ThisIsOJAS"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-foreground/5 hover:bg-foreground/10 transition-colors px-4 py-2 rounded-full text-foreground/80 hover:text-primary"
              >
                <GithubIcon className="w-4 h-4" />
                @ThisIsOJAS
              </a>
            </div>

            <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
              I&apos;m a full-stack developer and digital product creator. I
              specialize in building scalable web applications, mobile
              experiences, and AI-integrated solutions from scratch. Let&apos;s
              turn your next big idea into reality.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
