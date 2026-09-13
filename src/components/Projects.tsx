"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTiltHover } from "@/hooks/useTiltHover";
import SectionFade from "./SectionFade";

export default function Projects() {
  const tilt = useTiltHover();

  return (
    <section id="proyectos" className="relative bg-white py-24 md:py-32">
      <SectionFade from="black" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold tracking-wide text-black/50 mb-3">
            NUESTROS PROYECTOS
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-black">
            El ecosistema no para de crecer.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          onMouseMove={tilt.onMouseMove}
          onMouseLeave={tilt.onMouseLeave}
          style={tilt.style}
          className="mx-auto max-w-4xl rounded-3xl border border-black/10 bg-black overflow-hidden flex flex-col md:flex-row [transform-style:preserve-3d]"
        >
          <div className="relative md:w-72 shrink-0 flex items-center justify-center bg-gradient-to-br from-white/10 via-black to-black p-10">
            <span className="absolute top-4 left-4 z-10 inline-flex items-center rounded-full bg-white/15 border border-white/40 px-3 py-1 text-xs font-semibold text-white">
              PRÓXIMAMENTE — SEPTIEMBRE 2026
            </span>
            <div className="h-28 w-28 rounded-3xl bg-white p-5 shadow-xl shadow-black/40">
              <Image
                src="/logo-mente-emprende.png"
                alt="Mente Emprende"
                width={112}
                height={112}
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          <div className="p-8 md:p-10 flex flex-col flex-1 justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Mente Emprende
            </h3>
            <p className="text-white/65 text-sm md:text-base leading-relaxed mb-4">
              La app que enseña a emprender jugando: cursos prácticos sobre
              modelos de negocio reales, rachas diarias, XP y ligas semanales
              para no abandonar. Dentro vive{" "}
              <span className="text-white font-semibold">Basam IA</span>, un
              mentor con inteligencia artificial que te da feedback
              personalizado en cada ejercicio.
            </p>
            <p className="text-white/45 text-sm mb-8">
              Esto es solo el comienzo — Mente Emprende va a evolucionar hacia
              mucho más.
            </p>
            <a
              href="https://mentemprende.app"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start inline-flex items-center justify-center rounded-full bg-white hover:bg-white/85 px-6 py-3 text-sm font-semibold text-black transition-colors"
            >
              Descubre Mente Emprende →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
