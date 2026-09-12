"use client";

import { motion } from "framer-motion";

function WebHubMockup() {
  return (
    <div className="h-full w-full rounded-2xl bg-white/[0.06] p-5 flex flex-col gap-3">
      <div className="flex gap-1.5 mb-1">
        <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
      </div>
      <div className="h-4 w-2/3 rounded bg-white/70" />
      <div className="h-2.5 w-full rounded bg-white/25" />
      <div className="h-2.5 w-5/6 rounded bg-white/25" />
      <div className="h-2.5 w-3/4 rounded bg-white/25" />
      <div className="mt-3 h-8 w-32 rounded-full bg-white" />
    </div>
  );
}

function MotorSvaMockup() {
  const rows = [70, 55, 82];
  return (
    <div className="h-full w-full rounded-2xl bg-white/[0.06] p-5 flex flex-col justify-center gap-4">
      {rows.map((w, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="h-8 w-8 rounded-full bg-white/40 shrink-0" />
          <div className="flex-1 flex flex-col gap-1.5">
            <div className="h-2.5 rounded bg-white/60" style={{ width: `${w}%` }} />
            <div className="h-2 rounded bg-white/20" style={{ width: `${w * 0.6}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function MvpIgnitionMockup() {
  return (
    <div className="h-full w-full rounded-2xl bg-white/[0.06] p-5 flex items-end justify-center gap-3">
      {[40, 70, 55, 90, 65].map((h, i) => (
        <div
          key={i}
          className="w-8 rounded-t-md bg-white/70"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

const CARDS = [
  {
    id: "web-hub",
    eyebrow: "Web Hub",
    title: "El Cuartel General",
    desc: "Tu web no es un folleto digital. Es tu vendedor que trabaja mientras duermes. Generación instantánea de autoridad, captura de leads cualificados, centralización de datos para optimizar cada euro invertido.",
    points: [
      "Formularios y CTAs que alimentan directo al SVA",
      "Google Analytics + Meta Pixel integrados",
      "Autoridad instantánea con diseño premium",
      "Atribución de ventas: sabemos qué botón convierte",
    ],
    stat: "30%",
    statLabel: "Incremento típico en cierres",
    cta: "Ver ejemplos de Web Hub",
    Mockup: WebHubMockup,
  },
  {
    id: "motor-sva",
    eyebrow: "Motor SVA",
    title: "24/7 Sin Intervención",
    desc: "El SVA es tu equipo de ventas automatizado. Gestiona citas, cualifica clientes, hace seguimiento y cierra. El filtro cotizador asegura que solo hables con gente con presupuesto. El autoservicio de agendas permite que clientes se reserven sin tu intervención.",
    points: [
      "Inyección directa de leads desde web → WhatsApp/Email",
      "Cualificación automática (Filtro Cotizador)",
      "Autoservicio de agendas 24/7 sincronizado",
      "Seguimiento sin intervención humana",
    ],
    stat: "70%",
    statLabel: "Automatización de tareas manuales",
    cta: "Demostración en vivo",
    Mockup: MotorSvaMockup,
  },
  {
    id: "mvp-ignition",
    eyebrow: "MVP Ignition",
    title: "Resultados en 48h",
    desc: "No esperes 6 meses para ver ROI. El MVP reactiva tu base de datos antigua con el web + SVA. Es tu ‘Caballo de Troya’: inyecta caja inmediata sin gastar en publicidad externa. Financia toda la infraestructura con ganancias propias.",
    points: [
      "Reactivación de bases de datos en 48 horas",
      "ROI inmediato (7-15 días)",
      "Caja inicial para financiar el ecosistema completo",
      "Sin depender de publicidad externa",
    ],
    stat: "48h",
    statLabel: "Primer impacto visible en caja",
    cta: "Hablar sobre activación",
    Mockup: MvpIgnitionMockup,
  },
];

export default function SvaBreakdown() {
  return (
    <section id="desglose" className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold tracking-wide text-black/50 mb-3">
            DESGLOSE DEL SISTEMA
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-black">
            Cada capa, a fondo.
          </h2>
        </div>

        <div className="space-y-20 md:space-y-28">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="h-72 md:h-80 rounded-3xl bg-black p-1">
                <card.Mockup />
              </div>

              <div>
                <p className="text-sm font-bold tracking-widest mb-2 text-black/45">
                  {card.eyebrow.toUpperCase()}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">{card.title}</h3>
                <p className="text-black/60 leading-relaxed mb-6">{card.desc}</p>

                <ul className="space-y-2 mb-6">
                  {card.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-black/55">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black/30" />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-4xl font-extrabold text-black">{card.stat}</span>
                  <span className="text-sm text-black/45">{card.statLabel}</span>
                </div>

                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:gap-3 transition-all"
                >
                  {card.cta}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
