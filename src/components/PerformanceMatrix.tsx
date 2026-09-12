"use client";

import { motion } from "framer-motion";
import SectionFade from "./SectionFade";

const ROWS = [
  { component: "Web Hub", func: "Generación de autoridad", impact: "Media-Alta", roi: "Largo Plazo" },
  { component: "MVP Ignition", func: "Recuperación de caja", impact: "Muy Alta", roi: "Inmediato (7-15d)" },
  { component: "SVA Engine", func: "Escalabilidad y cierre", impact: "Alta", roi: "Medio Plazo" },
  { component: "Ecosistema Completo", func: "Dominio de mercado", impact: "Exponencial", roi: "Máximo" },
];

export default function PerformanceMatrix() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <SectionFade from="black" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold tracking-wide text-black/50 mb-3">
            MATRIZ DE RENDIMIENTO
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-black">
            Cada pieza, su impacto.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto rounded-2xl border border-black/10"
        >
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="bg-black/[0.03]">
                <th className="px-6 py-4 text-xs font-bold tracking-wide text-black/50">
                  COMPONENTE
                </th>
                <th className="px-6 py-4 text-xs font-bold tracking-wide text-black/50">
                  FUNCIÓN CLAVE
                </th>
                <th className="px-6 py-4 text-xs font-bold tracking-wide text-black/50">
                  IMPACTO DE VENTAS
                </th>
                <th className="px-6 py-4 text-xs font-bold tracking-wide text-black/50">
                  ROI ESPERADO
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr
                  key={row.component}
                  className={`border-t border-black/10 hover:bg-black/[0.03] transition-colors ${
                    i === ROWS.length - 1 ? "bg-black/[0.04]" : ""
                  }`}
                >
                  <td className="px-6 py-5 font-semibold text-black">{row.component}</td>
                  <td className="px-6 py-5 text-black/65">{row.func}</td>
                  <td className="px-6 py-5">
                    <span className="text-black font-medium">{row.impact}</span>
                  </td>
                  <td className="px-6 py-5 text-black/65">{row.roi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
