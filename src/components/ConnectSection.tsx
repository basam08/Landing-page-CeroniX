"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import SectionFade from "./SectionFade";

const NODES = [
  {
    label: "WhatsApp",
    pos: "top-0 left-1/2 -translate-x-1/2",
    icon: "M12 2a10 10 0 00-8.6 15L2 22l5.1-1.3A10 10 0 1012 2zm5 13.4c-.2.6-1.2 1.1-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.3-3.8-4.5-4-.1-.2-1.1-1.4-1.1-2.7s.7-1.9 1-2.1c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.5.7 1.7.8 1.9.1.1.1.3 0 .5-.1.2-.2.3-.3.5l-.5.5c-.2.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.7-.1l.7-.8c.2-.3.4-.2.7-.1l1.7.8c.2.1.4.2.5.3.1.2.1.7-.1 1.3z",
  },
  {
    label: "Calendario",
    pos: "top-1/2 right-0 -translate-y-1/2",
    icon: "M7 2v2M17 2v2M3 8h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z",
  },
  {
    label: "Email",
    pos: "bottom-0 left-1/2 -translate-x-1/2",
    icon: "M3 5h18v14H3V5zm0 0l9 7 9-7",
  },
  {
    label: "CRM",
    pos: "top-1/2 left-0 -translate-y-1/2",
    icon: "M4 19V5a2 2 0 012-2h8l6 6v10a2 2 0 01-2 2H6a2 2 0 01-2-2zM14 3v6h6",
  },
];

export default function ConnectSection() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden">
      <SectionFade from="white" />
      <div className="mx-auto max-w-6xl px-6 lg:px-10 flex flex-col items-center text-center">
        <div className="relative h-[300px] w-[300px] md:h-[360px] md:w-[360px] mb-10">
          <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full">
            <line x1="150" y1="150" x2="150" y2="40" stroke="#ffffff1f" strokeWidth="1.5" />
            <line x1="150" y1="150" x2="260" y2="150" stroke="#ffffff1f" strokeWidth="1.5" />
            <line x1="150" y1="150" x2="150" y2="260" stroke="#ffffff1f" strokeWidth="1.5" />
            <line x1="150" y1="150" x2="40" y2="150" stroke="#ffffff1f" strokeWidth="1.5" />
          </svg>

          {!reduced && (
            <>
              <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25 animate-[ping-slow_3s_ease-out_infinite]" />
              <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 animate-[ping-slow_3s_ease-out_1.5s_infinite]" />
            </>
          )}

          <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_40px_rgba(255,255,255,0.5)] flex items-center justify-center">
            <span className="text-xs font-bold tracking-widest text-black">SVA</span>
          </div>

          {NODES.map((n, i) => (
            <motion.div
              key={n.label}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
              className={`absolute ${n.pos} flex flex-col items-center gap-1.5`}
            >
              <div className="h-11 w-11 rounded-full bg-white/[0.06] border border-white/15 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d={n.icon} stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-[11px] text-white/50">{n.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-balance text-white mb-6"
        >
          Un núcleo. Todo tu negocio conectado.
        </motion.h2>
        <p className="text-white/55 max-w-xl mb-8">
          Se conecta con tu WhatsApp, tu calendario, tu correo y tu CRM — sin
          migrar nada, sin tocar lo que ya funciona.
        </p>

        <a
          href="#contacto"
          className="inline-flex items-center justify-center rounded-full bg-white hover:bg-white/85 px-6 py-3 text-sm font-semibold text-black transition-colors"
        >
          Ver cómo se integra
        </a>
      </div>

      <style>{`
        @keyframes ping-slow {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
          100% { transform: translate(-50%, -50%) scale(2.6); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
