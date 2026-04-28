"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { ImageModal } from "@/components/ui/ImageModal";
import Image from "next/image";

const clientImages = [
  "/aipe-client-project/aipe_ss1.png",
  "/aipe-client-project/aipe_ss2.png",
  "/aipe-client-project/aipe_ss3.png",
];

export function FeaturedProject() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const stats = [
    "10+ Pages",
    "25+ API Integrations",
    "Payment Gateway (Razorpay)",
    "SEO Optimized",
    "AI Chat Integration",
  ];

  return (
    <>
      <section id="work" className="py-24 relative">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                Client Work
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">AIPE</h2>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                A comprehensive digital platform designed for scale. Built with
                modern architecture to handle complex business logic, seamless
                payments, and AI-driven interactions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground/80 font-medium">
                      {stat}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2 relative h-100 md:h-125"
            >
              {/* Poker style stacked cards */}
              <div className="absolute inset-0 flex items-center justify-center">
                {clientImages.map((src, i) => (
                  <motion.div
                    key={src}
                    whileHover={{
                      y: -20,
                      rotate: 0,
                      scale: 1.05,
                      zIndex: 40,
                    }}
                    initial={{
                      rotate: (i - 1) * 8,
                      y: i * 10,
                      x: (i - 1) * 20,
                    }}
                    onClick={() => setSelectedImage(src)}
                    className={`absolute w-full max-w-100 aspect-4/3 rounded-xl border-2 border-primary/20 shadow-2xl overflow-hidden cursor-pointer bg-card z-${30 - i * 10} transition-all duration-300`}
                  >
                    <Image
                      src={src}
                      alt={`AIPE screenshot ${i + 1}`}
                      fill
                      className="object-cover object-top"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage || ""}
        altText="AIPE Project Screenshot"
      />
    </>
  );
}
