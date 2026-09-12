"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useTiltHover } from "@/hooks/useTiltHover";
import SectionFade from "./SectionFade";

function ProjectCard({
  index,
  media,
  badge,
  logo,
  logoBg = "white",
  title,
  desc,
  features,
  ctaText,
  ctaHref,
  ctaVariant,
}: {
  index: number;
  media: ReactNode;
  badge: ReactNode;
  logo: string;
  logoBg?: "white" | "black";
  title: string;
  desc: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  ctaVariant: "solid" | "outline";
}) {
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
      className="rounded-3xl border border-black/10 bg-black overflow-hidden flex flex-col [transform-style:preserve-3d]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.15 }}
        className="h-56 relative"
      >
        {badge}
        {media}
      </motion.div>
      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <div
            className={
              logoBg === "black"
                ? "h-10 w-10 shrink-0 rounded-xl bg-black border border-white/15 p-1.5 shadow-lg shadow-black/40"
                : "h-10 w-10 shrink-0 rounded-xl bg-white p-1.5 shadow-lg shadow-black/40"
            }
          >
            <Image
              src={logo}
              alt={`${title} logo`}
              width={36}
              height={36}
              className="h-full w-full object-contain"
            />
          </div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-white/65 text-sm leading-relaxed mb-6">{desc}</p>
        <ul className="space-y-2 mb-8 text-sm text-white/50">
          {features.map((f) => (
            <li key={f}>• {f}</li>
          ))}
        </ul>
        <a
          href={ctaHref}
          className={
            ctaVariant === "solid"
              ? "mt-auto inline-flex items-center justify-center rounded-full bg-white hover:bg-white/85 px-5 py-3 text-sm font-semibold text-black transition-colors"
              : "mt-auto inline-flex items-center justify-center rounded-full border border-white/25 hover:border-white/60 px-5 py-3 text-sm font-semibold text-white transition-colors"
          }
        >
          {ctaText}
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
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

        <div className="grid lg:grid-cols-3 gap-6">
          <ProjectCard
            index={0}
            logo="/logo-mente-emprende.png"
            badge={
              <span className="absolute top-4 left-4 z-10 inline-flex items-center rounded-full bg-white/15 border border-white/40 px-3 py-1 text-xs font-semibold text-white">
                PRÓXIMAMENTE — SEPTIEMBRE 2026
              </span>
            }
            media={
              <div className="h-full flex items-center justify-center bg-gradient-to-br from-white/10 via-black to-black">
                <div className="h-24 w-24 rounded-3xl bg-white p-4 shadow-xl shadow-black/40">
                  <Image
                    src="/logo-mente-emprende.png"
                    alt="Mente Emprende"
                    width={96}
                    height={96}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            }
            title="Mente Emprende"
            desc="Nuestra aplicación de productividad para emprendedores. Aprende a automatizar tu negocio desde tu teléfono. Próximamente en Google Play Store."
            features={[
              "Lecciones sobre automatización B2B",
              "Audios cortos y prácticos",
              "Comunidad de emprendedores",
            ]}
            ctaText="Unirse a lista de espera"
            ctaHref="#contacto"
            ctaVariant="outline"
          />

          <ProjectCard
            index={1}
            logo="/logo-grob-ai-transparent.png"
            logoBg="black"
            badge={
              <span className="absolute top-4 left-4 z-10 inline-flex items-center rounded-full bg-white/15 border border-white/40 px-3 py-1 text-xs font-semibold text-white">
                EN DESARROLLO — 2027
              </span>
            }
            media={
              <div className="h-full flex items-center justify-center bg-gradient-to-br from-white/[0.06] via-black to-black">
                <div className="h-24 w-24 rounded-3xl bg-black border border-white/15 p-4 shadow-xl shadow-black/40">
                  <Image
                    src="/logo-grob-ai-transparent.png"
                    alt="Grob AI"
                    width={96}
                    height={96}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            }
            title="Grob AI"
            desc="Tu coach de ventas con IA. Mantén conversaciones con inteligencia artificial para entrenar tu pitch, el manejo de objeciones y el cierre — como si ensayaras con un cliente real, cuando quieras."
            features={[
              "Conversaciones en tiempo real con IA",
              "Análisis de tu técnica de venta",
              "Retroalimentación inmediata y simulaciones de casos reales",
            ]}
            ctaText="Unirse a waitlist"
            ctaHref="#contacto"
            ctaVariant="outline"
          />

          <ProjectCard
            index={2}
            logo="/logo-hubexpert-transparent.png"
            badge={
              <span className="absolute top-4 left-4 z-10 inline-flex items-center rounded-full bg-white/15 border border-white/40 px-3 py-1 text-xs font-semibold text-white">
                EN DESARROLLO — 2028
              </span>
            }
            media={
              <div className="h-full flex items-center justify-center bg-gradient-to-br from-white/[0.06] via-black to-black">
                <div className="h-24 w-24 rounded-3xl bg-white p-5 shadow-xl shadow-black/40">
                  <Image
                    src="/logo-hubexpert-transparent.png"
                    alt="HubExpert"
                    width={96}
                    height={96}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            }
            title="HubExpert"
            desc="La plataforma SaaS de gestión integral para el Sistema SVA. Un único dashboard para controlar Web Hub, SVA y MVP. Reporting avanzado, APIs abiertas para integraciones, y análisis predictivo."
            features={[
              "Dashboard unificado del ecosistema completo",
              "Reporting y análisis avanzado",
              "APIs abiertas e integraciones custom",
            ]}
            ctaText="Solicitar acceso beta"
            ctaHref="#contacto"
            ctaVariant="outline"
          />
        </div>
      </div>
    </section>
  );
}
