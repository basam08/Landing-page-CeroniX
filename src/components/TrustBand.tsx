"use client";

import { motion } from "framer-motion";
import SectionFade from "./SectionFade";

const ITEMS = [
  {
    title: "Sin permanencia",
    desc: "Te quedas por resultados, no por contrato. Cancelas cuando quieras.",
  },
  {
    title: "Respuesta en 24h",
    desc: "Cualquier duda o incidencia, contestada por una persona real en menos de un día.",
  },
  {
    title: "Implementación transparente",
    desc: "Ves exactamente qué se instala y cómo funciona, sin cajas negras.",
  },
];

export default function TrustBand() {
  return (
    <section className="relative bg-black py-20 md:py-24">
      <SectionFade from="white" />
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold tracking-tight text-balance text-white mb-14 max-w-xl"
        >
          Diseñado para generar confianza, no fricción.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="h-9 w-9 rounded-full border border-white/25 flex items-center justify-center mb-4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="font-semibold text-white mb-2">{item.title}</p>
              <p className="text-sm text-white/55 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
