"use client";

import { motion } from "framer-motion";
import SectionFade from "./SectionFade";

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl space-y-5 text-white/65 text-lg leading-relaxed"
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
        </motion.div>
      </div>
    </section>
  );
}
