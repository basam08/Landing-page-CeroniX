"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import SectionFade from "./SectionFade";

export default function ContrastRings({
  eyebrow,
  heading,
  text,
  reverse = false,
}: {
  eyebrow: string;
  heading: string;
  text: string;
  reverse?: boolean;
}) {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden">
      <SectionFade from="white" />
      <div
        className={`mx-auto max-w-7xl px-6 lg:px-10 flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-16`}
      >
        <div className="shrink-0">
          <div className="relative h-[280px] w-[280px] md:h-[340px] md:w-[340px]">
            <div
              className="absolute inset-0 rounded-full border-2 border-white/20 bg-black"
              style={{
                animation: reduced ? undefined : "spin-slow 16s linear infinite",
              }}
            />
            <div
              className="absolute inset-[16%] rounded-full"
              style={{
                background: "linear-gradient(135deg, #3a3a3a 0%, #000000 100%)",
                animation: reduced ? undefined : "spin-slow-reverse 12s linear infinite",
              }}
            />
            <div
              className="absolute inset-[34%] rounded-full"
              style={{
                background: "radial-gradient(circle at 35% 30%, #ffffff 0%, #6b6b6b 70%)",
                boxShadow: "0 0 60px rgba(255,255,255,0.35)",
                animation: reduced ? undefined : "spin-slow 8s linear infinite",
              }}
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-xl text-center md:text-left"
        >
          <p className="text-sm font-semibold tracking-wide text-white/50 mb-3">{eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance mb-5 text-white">
            {heading}
          </h2>
          <p className="text-lg text-white/65 leading-relaxed">{text}</p>
        </motion.div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
      `}</style>
    </section>
  );
}
