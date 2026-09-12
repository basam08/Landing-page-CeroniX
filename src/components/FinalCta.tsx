"use client";

import dynamic from "next/dynamic";
import { useState, type FormEvent } from "react";
import SceneCanvas from "./three/SceneCanvas";

const FloatingParticles = dynamic(() => import("./three/FloatingParticles"), { ssr: false });

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ID
  ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
  : null;

export default function FinalCta() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!FORMSPREE_ENDPOINT) {
      setStatus("sent");
      return;
    }

    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="relative bg-white py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #f5f5f5 0%, #ffffff 60%, #ffffff 100%)",
        }}
      />
      <div className="absolute inset-0 opacity-40">
        <SceneCanvas camera={{ position: [0, 0, 9], fov: 50 }}>
          <FloatingParticles />
        </SceneCanvas>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-balance text-black">
            Automatización sin límites.
            <br />
            Crecimiento garantizado.
          </h2>
          <p className="mt-5 text-xl text-black/60 font-medium">
            El futuro de tu negocio es hoy.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href="https://calendly.com/basambs0891/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-black hover:bg-black/80 px-6 py-3.5 text-sm font-semibold text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
                <path d="M3 9h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              Agenda una llamada (Calendly)
            </a>
            <a
              href="https://wa.me/34633772281"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/20 hover:border-black px-6 py-3.5 text-sm font-semibold text-black transition-colors"
            >
              Hablar por WhatsApp
            </a>
          </div>

          <div className="mt-8 flex flex-col gap-1 text-xs text-black/40">
            <p>Respuesta en menos de 24 horas.</p>
            <p>Sin compromiso. Solo hechos.</p>
          </div>
        </div>

        <div className="rounded-3xl border border-black/10 bg-white shadow-xl shadow-black/5 p-8 md:p-10">
          {status === "sent" ? (
            <div className="py-16 text-center">
              <p className="text-2xl font-bold text-black mb-2">Recibido.</p>
              <p className="text-black/60">Te contactamos en menos de 24 horas.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black/70 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="tu@empresa.com"
                  className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-black placeholder:text-black/30 focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label htmlFor="sector" className="block text-sm font-medium text-black/70 mb-2">
                  Sector
                </label>
                <select
                  id="sector"
                  name="sector"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-black focus:outline-none focus:border-black transition-colors"
                >
                  <option value="" disabled>
                    Selecciona tu sector
                  </option>
                  <option value="b2b">B2B / Consultoría</option>
                  <option value="local">Servicios Locales</option>
                  <option value="realestate">Real Estate</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black/70 mb-2">
                  Mensaje breve
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Cuéntanos qué necesitas automatizar"
                  className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-black placeholder:text-black/30 focus:outline-none focus:border-black transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-xl bg-black hover:bg-black/80 disabled:opacity-60 px-6 py-3.5 text-base font-semibold text-white transition-colors"
              >
                {status === "sending" ? "Enviando..." : "Comenzar diagnóstico"}
              </button>

              {status === "error" && (
                <p className="text-sm text-black/60">
                  Algo falló al enviar. Escríbenos directo a{" "}
                  <a href="mailto:info@ceronix.es" className="underline">
                    info@ceronix.es
                  </a>
                  .
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
