"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTiltHover } from "@/hooks/useTiltHover";
import SectionFade from "./SectionFade";

const CLIENTS = [
  {
    id: "ady",
    name: "ADY Hair Studio",
    logo: "/logo-ady-hair-studio.png",
    logoWidth: 160,
    logoHeight: 119,
    desc: "Desarrollamos toda su web, el sistema de reservas online y la base de datos con agenda propia para su salón.",
    url: "https://adyhairstudio.com",
  },
  {
    id: "mente-emprende",
    name: "Mente Emprende",
    logo: "/logo-mente-emprende-transparent.png",
    logoWidth: 92,
    logoHeight: 82,
    desc: "Construimos la app completa: cursos gamificados, rachas, XP y Basam IA como mentor integrado.",
    url: "https://mentemprende.app",
  },
];

function ClientCard({ c, index }: { c: (typeof CLIENTS)[number]; index: number }) {
  const tilt = useTiltHover();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      style={tilt.style}
      className="rounded-3xl border border-black/10 bg-black/[0.02] p-8 flex flex-col [transform-style:preserve-3d]"
    >
      <div className="h-16 flex items-center mb-6">
        <Image
          src={c.logo}
          alt={c.name}
          width={c.logoWidth}
          height={c.logoHeight}
          className="h-full w-auto object-contain object-left"
        />
      </div>
      <p className="text-black/65 leading-relaxed mb-6">{c.desc}</p>
      <a
        href={c.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-black hover:gap-3 transition-all"
      >
        Visitar sitio
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <SectionFade from="black" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold tracking-wide text-black/50 mb-3">
            CLIENTES
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-black">
            Con quién hemos trabajado.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
          {CLIENTS.map((c, i) => (
            <ClientCard key={c.id} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
