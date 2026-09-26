"use client";

import { motion } from "framer-motion";
import SectionFade from "./SectionFade";

const STEPS = [
  {
    tag: "HOY",
    title: "Software que automatiza procesos B2B",
    desc: "Sistema SVA en producción, resolviendo captación y operaciones reales.",
  },
  {
    tag: "PRÓXIMO",
    title: "Mente Emprende, la mejor app de emprendimiento",
    desc: "Escalar Mente Emprende a más usuarios y consolidarla como la referencia para aprender a emprender con IA.",
  },
  {
    tag: "2030",
    title: "Ciberseguridad avanzada",
    desc: "Tecnología propia para proteger empresas y usuarios frente a las amenazas digitales.",
    highlight: true,
  },
];

export default function Vision() {
  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden">
      <SectionFade from="white" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold tracking-wide text-white/50 mb-3">
            NUESTRA VISIÓN — RUMBO A 2030
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-white">
            No queremos limitarnos a desarrollar software para empresas.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-white/65 text-lg leading-relaxed"
          >
            <p>
              Nuestra visión es construir tecnología capaz de transformar la
              forma en la que los negocios trabajan, utilizando la
              inteligencia artificial para automatizar procesos, mejorar la
              relación con sus clientes y crear nuevas oportunidades de
              crecimiento.
            </p>
            <p>
              A largo plazo, queremos desarrollar nuestras propias
              tecnologías y productos, incluyendo soluciones avanzadas de
              ciberseguridad capaces de proteger empresas y usuarios frente
              a las amenazas digitales.
            </p>

            <div className="!mt-10 rounded-2xl border border-white/15 bg-white/[0.04] px-6 py-7">
              <p className="text-lg md:text-xl font-bold text-white leading-snug mb-3">
                Nuestro objetivo final: crear tecnología que no solo
                resuelva los problemas de hoy, sino que anticipe los
                problemas del mañana.
              </p>
              <p className="text-sm text-white/45">
                Algún día queremos intentar construir una de las soluciones
                de ciberseguridad más avanzadas del mundo.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10"
          >
            <div className="relative pl-9">
              <div className="absolute left-[13px] top-2 bottom-2 w-px bg-gradient-to-b from-white/10 via-white/25 to-white" />

              {STEPS.map((s, i) => (
                <motion.div
                  key={s.tag}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.15 }}
                  className={i < STEPS.length - 1 ? "relative pb-10" : "relative"}
                >
                  <span
                    className={
                      s.highlight
                        ? "absolute -left-9 top-0.5 h-[26px] w-[26px] rounded-full bg-white shadow-[0_0_24px_rgba(255,255,255,0.5)] flex items-center justify-center"
                        : "absolute -left-9 top-1 h-[18px] w-[18px] rounded-full border-2 border-white/40 bg-black"
                    }
                  >
                    {s.highlight && (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 2l7 3v6c0 5-3.4 8.4-7 11-3.6-2.6-7-6-7-11V5l7-3z"
                          stroke="#000"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>

                  <p className="text-xs font-bold tracking-widest text-white/40 mb-1.5">
                    {s.tag}
                  </p>
                  <p
                    className={
                      s.highlight
                        ? "text-lg font-bold text-white mb-1.5"
                        : "font-semibold text-white/90 mb-1.5"
                    }
                  >
                    {s.title}
                  </p>
                  <p className="text-sm text-white/45 leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
