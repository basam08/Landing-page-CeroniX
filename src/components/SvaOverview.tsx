"use client";

import { motion } from "framer-motion";
import SystemDashboard from "./SystemDashboard";
import SectionFade from "./SectionFade";

const CAPTIONS = [
  {
    title: "Web Hub",
    desc: "El cuartel general digital que captura autoridad",
  },
  {
    title: "Motor SVA",
    desc: "Automatización 24/7 de citas, filtros y seguimientos",
  },
  {
    title: "MVP Ignition",
    desc: "Activación rápida de bases de datos antiguas",
  },
];

export default function SvaOverview() {
  return (
    <section id="sistema" className="relative bg-white py-16 md:py-24">
      <SectionFade from="black" />
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative h-[420px] md:h-[520px] rounded-3xl bg-black overflow-hidden shadow-2xl"
        >
          <SystemDashboard />
        </motion.div>

        <div className="mt-10 grid md:grid-cols-3 gap-8 border-t border-black/10 pt-10">
          {CAPTIONS.map((c) => (
            <div key={c.title}>
              <p className="font-semibold text-black mb-1">{c.title}</p>
              <p className="text-sm text-black/55">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
