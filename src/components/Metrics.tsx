"use client";

import { motion } from "framer-motion";

const METRICS = [
  { value: "70%", label: "Ahorro en tiempo operativo", note: "El SVA gestiona automáticamente" },
  { value: "30%", label: "Incremento en conversión web", note: "Hub profesional = confianza" },
  { value: "48h", label: "Tiempo a primer resultado", note: "MVP Ignition activación rápida" },
  { value: "∞", label: "Escalabilidad predecible", note: "Crece sin añadir complejidad" },
];

const PHASES = [
  { x: 40, y: 220, label: "Mes 0" },
  { x: 160, y: 190, label: "MVP" },
  { x: 300, y: 130, label: "Web Launch" },
  { x: 460, y: 90, label: "SVA Full" },
  { x: 620, y: 30, label: "Mes 6" },
];

const path = PHASES.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");

export default function Metrics() {
  return (
    <section id="numeros" className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold tracking-wide text-black/50 mb-3">
            IMPACTO EN NÚMEROS
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-black">
            Resultados que se miden.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-black/10 bg-black/[0.02] p-6"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-black">{m.value}</div>
              <p className="mt-3 font-semibold text-black/85 text-sm md:text-base">{m.label}</p>
              <p className="mt-1 text-xs text-black/45">{m.note}</p>
            </motion.div>
          ))}
        </div>

        <div className="rounded-3xl border border-black/10 bg-black/[0.02] p-6 md:p-10">
          <p className="text-sm text-black/50 mb-6">
            Crecimiento proyectado de facturación — ecosistema integrado
          </p>
          <div className="w-full overflow-x-auto">
            <svg viewBox="0 0 680 260" className="w-full min-w-[560px] h-64">
              {[60, 120, 180].map((y) => (
                <line key={y} x1="0" x2="680" y1={y} y2={y} stroke="#00000010" strokeWidth="1" />
              ))}
              <motion.path
                d={path}
                fill="none"
                stroke="#000000"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
              />
              {PHASES.map((p, i) => (
                <g key={p.label}>
                  <motion.circle
                    cx={p.x}
                    cy={p.y}
                    r="6"
                    fill="#fff"
                    stroke="#000000"
                    strokeWidth="2.5"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.25 }}
                  />
                  <text
                    x={p.x}
                    y={p.y - 16}
                    fill="#00000099"
                    fontSize="12"
                    textAnchor="middle"
                  >
                    {p.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>
          <p className="mt-4 text-xs text-black/40">
            Nota: crecimiento proyectado — ecosistema integrado vs sistemas fragmentados.
          </p>
        </div>
      </div>
    </section>
  );
}
