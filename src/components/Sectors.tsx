"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTiltHover } from "@/hooks/useTiltHover";

const SECTORS = [
  {
    id: "b2b",
    title: "B2B / Consultoría",
    subtitle: "Filtro corporativo + demostración automática",
    desc: "El Filtro Cotizador asegura que solo califiques leads corporativos. El autoservicio de agendas permite que CFOs se reserven demostraciones sin email. Cada demanda está cualificada antes de tocarla.",
    metric: "+85% tasa de cierre cualificada",
    cta: "Ver casos de consultoría",
    image:
      "https://images.unsplash.com/photo-1758448756084-c44d73014c07?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "local",
    title: "Servicios Locales",
    subtitle: "Citas automáticas 24/7",
    desc: "Clínicas, gimnasios, peluquerías: sin recepcionista. Tus clientes se reservan en tu calendario real desde la web. El SVA gestiona todo. Tú solo atiende. Crecimiento sin contratar.",
    metric: "+200% ocupación de horarios",
    cta: "Implementación para locales",
    image:
      "https://images.unsplash.com/photo-1758957646695-ec8bce3df462?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "realestate",
    title: "Real Estate",
    subtitle: "Calificación de inversores automática",
    desc: "El Filtro Cotizador cualifica inversores por presupuesto real. Los interesados se reservan visitas automáticamente. Gestión de múltiples propiedades desde un solo panel. Cierres más rápidos, menos ruido.",
    metric: "+40% tiempo ahorrado en cualificación",
    cta: "Solución para real estate",
    image:
      "https://images.unsplash.com/photo-1758448756207-54505680d130?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  },
];

function SectorCard({ s, index }: { s: (typeof SECTORS)[number]; index: number }) {
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
      className="group relative h-[440px] rounded-3xl overflow-hidden border border-black/10 [transform-style:preserve-3d]"
    >
      <Image
        src={s.image}
        alt={s.title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover grayscale transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 group-hover:from-black group-hover:via-black/80 transition-colors duration-300" />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.4)" }}
      />

      <div className="relative h-full flex flex-col justify-end p-8">
        <p className="text-xs font-bold tracking-widest text-white/70 mb-2">
          {s.title.toUpperCase()}
        </p>
        <h3 className="text-2xl font-bold mb-3 leading-snug text-white">{s.subtitle}</h3>
        <p className="text-sm text-white/65 leading-relaxed mb-5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {s.desc}
        </p>
        <p className="text-lg font-bold text-white mb-4">{s.metric}</p>
        <a
          href="#contacto"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-white/70 transition-colors w-fit"
        >
          {s.cta}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}

export default function Sectors() {
  return (
    <section id="sectores" className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold tracking-wide text-black/50 mb-3">
            ADAPTACIÓN POR SECTOR
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-black">
            El mismo sistema. Distinta cualificación.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {SECTORS.map((s, i) => (
            <SectorCard key={s.id} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
