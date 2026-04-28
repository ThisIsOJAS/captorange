"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ImageModal } from "@/components/ui/ImageModal";
import Image from "next/image";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Netflix GPT",
    description:
      "A comprehensive streaming platform clone featuring secure Firebase authentication and dynamic content delivery via the TMDB API. It uniquely integrates OpenAI's GPT-3.5 to provide intelligent, natural-language movie recommendations, all localized with seamless multi-language support.",
    tech: [
      "Parcel",
      "OpenAI API",
      "Firebase Auth",
      "TMDB API",
      "i18n Localization",
    ],
    images: [
      "/netflix-gpt/netflix-gpt-app-ss1.png",
      "/netflix-gpt/netflix-gpt-app-ss2.png",
      "/netflix-gpt/netflix-gpt-app-ss3.png",
    ],
  },
  {
    title: "EV Dashboard Analytics",
    description:
      "A high-performance analytics dashboard engineered to process and visualize a dataset of over 50,000 US electric vehicle sales records. It features interactive charts and a robust Material UI data grid, enabling advanced sorting, custom filtering, and selective data export.",
    tech: [
      "Vite",
      "TypeScript",
      "Material UI",
      "CSV Analysis",
      "Data Visualization",
    ],
    images: [
      "/ev-dashboard/ev-dash-ss1.png",
      "/ev-dashboard/ev-dash-ss2.png",
      "/ev-dashboard/ev-dash-ss3.png",
    ],
  },
  {
    title: "AI Document Analyzer",
    description:
      "An intelligent document processing tool that leverages OpenRouter and OpenAI models to vectorize and analyze uploaded files. Built on an Express backend, it processes large documents in chunks and delivers real-time, streamed insights directly to the frontend interface.",
    tech: [
      "Node.js",
      "Express",
      "OpenRouter",
      "OpenAI",
      "Vector Analysis",
      "Streaming",
    ],
    images: [
      "/ai-doc-analyzer/ai_chat_doc_ss1.png",
      "/ai-doc-analyzer/ai_chat_doc_ss2.png",
    ],
  },
  {
    title: "Real-Time Fleet Tracking App",
    description:
      "A mobile-first fleet management dashboard designed to aggregate complex telematics data from multiple vehicles simultaneously. It ingests raw data streams to track speed violations, battery levels, and engine statuses, organizing them into a unified, real-time chronological timeline.",
    tech: ["TypeScript", "Parcel", "Data Aggregation", "Mobile-First Design"],
    images: [
      "/fleet-tracking-dash/real-time-fleet-ss1.png",
      "/fleet-tracking-dash/real-time-fleet-ss2.png",
      "/fleet-tracking-dash/ai_chat_doc_ss1.png",
    ],
  },
  {
    title: "Namaste Food Ordering App",
    description:
      "A feature-rich food delivery application utilizing live external APIs to fetch real-time restaurant and menu data based on user geolocation. It implements a robust React Redux architecture to seamlessly manage a complex, multi-restaurant cart flow.",
    tech: [
      "JavaScript",
      "React Redux",
      "Parcel",
      "Geolocation",
      "Cart Management",
    ],
    images: [
      "/namaste-food-order/food-order-app-ss1.png",
      "/namaste-food-order/food-order-app-ss2.png",
      "/namaste-food-order/food-order-app-ss3.png",
    ],
  },
];

export function ProjectsGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section id="projects" className="py-24 relative">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            >
              Personal <span className="text-primary">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-foreground/60 max-w-2xl"
            >
              A collection of experiments, side-hustles, and technical
              deep-dives.
            </motion.p>
          </div>

          <div className="flex flex-col gap-32">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={cn(
                    "flex flex-col gap-12 items-center",
                    isEven ? "md:flex-row" : "md:flex-row-reverse",
                  )}
                >
                  {/* Text Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-1/2 flex flex-col items-start"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary mb-6">
                      {project.title.charAt(0)}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary border border-primary/20 backdrop-blur-md rounded-full shadow-[0_4px_10px_rgba(255,165,0,0.05)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Poker Hand Images */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-1/2 relative h-87.5 md:h-112.5"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      {project.images.map((src, i) => (
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
                          className={`absolute w-full max-w-90 aspect-4/3 rounded-xl border-2 border-primary/20 shadow-2xl overflow-hidden cursor-pointer bg-card z-${30 - i * 10} transition-all duration-300`}
                        >
                          <Image
                            src={src}
                            alt={`${project.title} screenshot ${i + 1}`}
                            fill
                            className="object-cover object-top"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage || ""}
        altText="Project Screenshot"
      />
    </>
  );
}
