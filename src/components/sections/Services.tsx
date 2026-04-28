"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Code2, LineChart, Globe, Cpu, Zap } from "lucide-react";

const services = [
  {
    title: "Website Development",
    description: "High-performance, modern websites that convert visitors into clients.",
    icon: Globe,
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile apps for iOS and Android using modern frameworks.",
    icon: MonitorSmartphone,
  },
  {
    title: "SEO Optimization",
    description: "Rank higher on search engines and get organic traffic for your business.",
    icon: LineChart,
  },
  {
    title: "Deployment & Domain Setup",
    description: "Hassle-free deployment, CI/CD pipelines, and domain configurations.",
    icon: Code2,
  },
  {
    title: "AI Integration",
    description: "Integrate intelligent AI solutions like chatbots and document analyzers.",
    icon: Cpu,
  },
  {
    title: "Performance Optimization",
    description: "Speed up load times and optimize your application for seamless user experiences.",
    icon: Zap,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Digital Solutions for <span className="text-primary">Modern Business</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground/60 max-w-2xl"
          >
            I provide end-to-end services to take your idea from a concept to a scalable product.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-foreground/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
