"use client";

import { motion } from "framer-motion";
import SectionFade from "./SectionFade";

export default function Vision() {
  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden">
      <SectionFade from="white" />
      <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold tracking-wide text-white/50 mb-4"
        >
          NUESTRA VISIÓN — RUMBO A 2030
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-balance text-white mb-8"
        >
          No queremos limitarnos a desarrollar software para empresas.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-5 text-white/65 text-lg leading-relaxed max-w-2xl mx-auto"
        >
          <p>
            Nuestra visión es construir tecnología capaz de transformar la
            forma en la que los negocios trabajan, utilizando la
            inteligencia artificial para automatizar procesos, mejorar la
            relación con sus clientes y crear nuevas oportunidades de
            crecimiento.
          </p>
          <p>
            A largo plazo, queremos desarrollar nuestras propias tecnologías
            y productos, incluyendo soluciones avanzadas de ciberseguridad
            capaces de proteger empresas y usuarios frente a las amenazas
            digitales.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 rounded-3xl border border-white/15 bg-white/[0.04] px-8 py-10 md:px-12 md:py-12"
        >
          <p className="text-xl md:text-2xl font-bold text-white leading-snug mb-4">
            Nuestro objetivo final: crear tecnología que no solo resuelva los
            problemas de hoy, sino que anticipe los problemas del mañana.
          </p>
          <p className="text-sm text-white/45">
            Algún día queremos intentar construir una de las soluciones de
            ciberseguridad más avanzadas del mundo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
