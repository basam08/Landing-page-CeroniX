"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "¿Quién es Basam El Sbeiai?",
    a: "Basam El Sbeiai es el fundador y CEO de Ceronix. Con 17 años, está construyendo Ceronix desde cero mientras continúa sus estudios, combinando desarrollo de software, aplicaciones e inteligencia artificial. También ha creado Mente Emprende, una aplicación educativa centrada en emprendimiento.",
  },
  {
    q: "¿Qué es el Sistema SVA de Ceronix?",
    a: "Es el ecosistema integrado de Ceronix, compuesto por tres capas: Web Hub (tu web como vendedor que trabaja 24/7), Motor SVA (automatización de citas, cualificación y seguimiento) y MVP Ignition (activación rápida de resultados en 48 horas). Las tres capas trabajan juntas para automatizar ventas y operaciones B2B.",
  },
  {
    q: "¿Qué servicios ofrece Ceronix además del Sistema SVA?",
    a: "También desarrollamos chatbots con IA para automatizar consultas y atención al cliente, y aplicaciones móviles personalizadas para empresas que necesitan gestionar clientes, ofrecer servicios o crear nuevas experiencias digitales.",
  },
  {
    q: "¿Cuánto tiempo tarda en implementarse el sistema?",
    a: "MVP Ignition activa tu primer resultado visible en 48 horas. El resto del sistema, Web Hub y Motor SVA, queda completamente desplegado en menos de 2 semanas.",
  },
  {
    q: "¿Hay permanencia o contrato a largo plazo?",
    a: "No. Trabajamos sin permanencia: si el sistema no funciona para tu negocio, te vas cuando quieras, sin letra pequeña ni contratos que te aten.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

function FaqItem({ f, index }: { f: (typeof FAQS)[number]; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-2xl border border-black/10 overflow-hidden"
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-semibold text-black">{f.q}</span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          className={`shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
        >
          <path
            d="M12 5v14M5 12h14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-black/60 leading-relaxed">{f.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="relative bg-white py-24 md:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold tracking-wide text-black/50 mb-3">
            PREGUNTAS FRECUENTES
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-black">
            Lo que más nos preguntan.
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((f, i) => (
            <FaqItem key={f.q} f={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
