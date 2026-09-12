"use client";

import { motion } from "framer-motion";
import { useTiltHover } from "@/hooks/useTiltHover";
import SectionFade from "./SectionFade";

const REASONS = [
  {
    title: "Precio de fundador",
    desc: "Los primeros clientes fijan su tarifa antes de que el sistema escale de precio. No vuelve a estar tan barato.",
  },
  {
    title: "Acceso directo al equipo",
    desc: "Hablas con quien construye el sistema, no con un soporte de turno. Cambios y ajustes sin intermediarios.",
  },
  {
    title: "Implementación en 2 semanas",
    desc: "MVP Ignition activa tu primera caja en 48h; el resto del sistema queda desplegado en menos de 15 días.",
  },
  {
    title: "Sin permanencia",
    desc: "Si no funciona para tu negocio, te vas. No hay letra pequeña ni contrato que te ate.",
  },
];

function ReasonCard({ r, index }: { r: (typeof REASONS)[number]; index: number }) {
  const tilt = useTiltHover();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      style={tilt.style}
      className="rounded-2xl border border-black/10 bg-black/[0.02] p-7 [transform-style:preserve-3d]"
    >
      <span className="text-xs font-bold text-black/30 tracking-widest">
        0{index + 1}
      </span>
      <p className="mt-3 text-lg font-bold text-black mb-2">{r.title}</p>
      <p className="text-sm text-black/55 leading-relaxed">{r.desc}</p>
    </motion.div>
  );
}

export default function WhyNow() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <SectionFade from="black" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold tracking-wide text-black/50 mb-3">
            POR QUÉ AHORA
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-black">
            Somos un equipo nuevo. Esto es lo que sí te podemos prometer.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((r, i) => (
            <ReasonCard key={r.title} r={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
