"use client";

import { motion } from "framer-motion";
import { useTiltHover } from "@/hooks/useTiltHover";

const SERVICES = [
  {
    id: "chatbots",
    icon: (
      <path
        d="M12 3C7.03 3 3 6.58 3 11c0 2.39 1.19 4.53 3.08 6.01-.1.94-.42 2.13-1.23 3.24a.5.5 0 00.52.78c1.9-.5 3.36-1.4 4.24-2.06A11.4 11.4 0 0012 19c4.97 0 9-3.58 9-8s-4.03-8-9-8z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    title: "Chatbots",
    desc: "Desarrollamos chatbots y soluciones basadas en IA para automatizar consultas, atender clientes y facilitar procesos que actualmente requieren trabajo manual.",
  },
  {
    id: "apps",
    icon: (
      <>
        <rect x="6" y="2.5" width="12" height="19" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M11 18.5h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
    title: "Desarrollo de aplicaciones",
    desc: "Diseñamos y desarrollamos aplicaciones móviles personalizadas para empresas que necesitan ofrecer servicios, gestionar clientes, mejorar la comunicación o crear nuevas experiencias digitales.",
  },
  {
    id: "call-bots",
    icon: (
      <path
        d="M4 4.5c0-.83.67-1.5 1.5-1.5H8l1.6 4.4-1.8 1.4a12.2 12.2 0 005.5 5.5l1.4-1.8L19.1 14v2.5c0 .83-.67 1.5-1.5 1.5C10.3 18 4 11.7 4 4.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    title: "Bots de llamada con IA",
    desc: "Creamos agentes de voz con IA que responden y hacen llamadas automáticamente: atienden consultas, cualifican leads y dan seguimiento dentro de tu embudo de ventas.",
  },
  {
    id: "video",
    icon: (
      <>
        <rect x="2.5" y="5.5" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M18.5 9.3l3-1.9v9.2l-3-1.9"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
    title: "Edición de vídeo",
    desc: "Edición de vídeo profesional y efectiva para contenido de marca, redes sociales y material de ventas, pensada para convertir audiencia en clientes.",
  },
];

function ServiceCard({ s, index }: { s: (typeof SERVICES)[number]; index: number }) {
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
      className="rounded-3xl border border-black/10 bg-black p-8 [transform-style:preserve-3d]"
    >
      <div className="h-12 w-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-6 text-white">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          {s.icon}
        </svg>
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
      <p className="text-white/60 text-sm leading-relaxed mb-6">{s.desc}</p>
      <a
        href="#contacto"
        className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:gap-3 transition-all"
      >
        Hablar sobre esto
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

export default function AdditionalServices() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold tracking-wide text-black/50 mb-3">
            TAMBIÉN CONSTRUIMOS
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-black">
            Más allá del núcleo SVA.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
