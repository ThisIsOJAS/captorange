"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-background/60 backdrop-blur-md border border-white/10 dark:border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
        >
          {/* Animated decorative lines */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute w-full h-full"
            >
              <motion.path
                d="M0,100 C20,0 50,100 100,0"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.path
                d="M0,50 C30,100 70,0 100,50"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
              />
            </svg>
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Have an idea? <br />
              <span className="text-primary">Let&apos;s build it.</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto">
              Ready to take your business to the next level? Get in touch to
              discuss your project, and let&apos;s turn your vision into
              reality.
            </p>
            <a
              href="mailto:hello@captorange.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-lg font-bold rounded-full hover:bg-primary/90 hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,165,0,0.3)]"
            >
              <Mail className="w-5 h-5" />
              Contact Me
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
