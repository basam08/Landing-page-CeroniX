"use client";

import { motion, useMotionValue, animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, start: boolean, duration = 1.4) {
  const [value, setValue] = useState(0);
  const mv = useMotionValue(0);

  useEffect(() => {
    if (!start) return;
    const controls = animate(mv, target, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [start, target, duration, mv]);

  return value;
}

const ACTIVITY = [
  { label: "Lead cualificado — B2B Consultoría", tag: "Auto" },
  { label: "Cita agendada — Clínica Vitalis", tag: "Auto" },
  { label: "Seguimiento enviado — 14 contactos", tag: "Auto" },
  { label: "Demo reservada — Real Estate Group", tag: "Auto" },
];

const BARS = [38, 55, 47, 68, 60, 82, 74, 91];

export default function SystemDashboard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const leads = useCountUp(248, inView);
  const citas = useCountUp(64, inView);
  const auto = useCountUp(97, inView, 1.6);

  return (
    <div ref={ref} className="h-full w-full flex text-white select-none">
      {/* sidebar */}
      <div className="hidden sm:flex w-16 shrink-0 flex-col items-center gap-5 border-r border-white/10 py-6">
        <div className="h-8 w-8 rounded-lg bg-white/90" />
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${i === 1 ? "bg-white" : "bg-white/25"}`}
          />
        ))}
      </div>

      <div className="flex-1 flex flex-col p-6 md:p-8 min-w-0">
        {/* top bar */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs text-white/40 tracking-wide">SISTEMA SVA</p>
            <p className="text-sm font-semibold">Panel en tiempo real</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/50">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse-soft" />
            En vivo
          </div>
        </div>

        {/* stat tiles */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { label: "Leads hoy", value: leads },
            { label: "Citas agendadas", value: citas },
            { label: "% automatizado", value: auto, suffix: "%" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl bg-white/[0.06] px-4 py-3">
              <p className="text-xl md:text-2xl font-extrabold tabular-nums">
                {s.value}
                {s.suffix ?? ""}
              </p>
              <p className="text-[11px] text-white/45 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* chart */}
        <div className="rounded-xl bg-white/[0.04] p-4 mb-6 flex-1 flex items-end gap-2 min-h-[90px]">
          {BARS.map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-white/25 to-white/80"
              initial={{ height: 0 }}
              animate={inView ? { height: `${h}%` } : { height: 0 }}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.06, ease: "easeOut" }}
            />
          ))}
        </div>

        {/* activity list */}
        <div className="space-y-2">
          {ACTIVITY.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.12 }}
              className="flex items-center justify-between rounded-lg bg-white/[0.03] px-3 py-2 text-xs"
            >
              <span className="text-white/70 truncate pr-3">{a.label}</span>
              <span className="shrink-0 rounded-full border border-white/20 px-2 py-0.5 text-[10px] text-white/50">
                {a.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
