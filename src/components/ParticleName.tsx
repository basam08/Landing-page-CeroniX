"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const WIDTH = 900;
const HEIGHT = 180;
const SAMPLE_STEP = 5;

type Particle = {
  x: number;
  y: number;
  tx: number;
  ty: number;
};

export default function ParticleName({
  text = "CERONIX",
  className = "",
}: {
  text?: string;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number | undefined>(undefined);
  const startedRef = useRef(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = WIDTH * dpr;
    canvas.height = HEIGHT * dpr;
    ctx.scale(dpr, dpr);

    const sampleCanvas = document.createElement("canvas");
    sampleCanvas.width = WIDTH;
    sampleCanvas.height = HEIGHT;
    const sampleCtx = sampleCanvas.getContext("2d");
    if (!sampleCtx) return;

    sampleCtx.fillStyle = "#fff";
    sampleCtx.font = "800 130px Inter, Arial, sans-serif";
    sampleCtx.textAlign = "center";
    sampleCtx.textBaseline = "middle";
    sampleCtx.fillText(text, WIDTH / 2, HEIGHT / 2);

    const imageData = sampleCtx.getImageData(0, 0, WIDTH, HEIGHT).data;
    const targets: { x: number; y: number }[] = [];
    for (let y = 0; y < HEIGHT; y += SAMPLE_STEP) {
      for (let x = 0; x < WIDTH; x += SAMPLE_STEP) {
        const alpha = imageData[(y * WIDTH + x) * 4 + 3];
        if (alpha > 128) targets.push({ x, y });
      }
    }

    particlesRef.current = targets.map((t) => ({
      x: reduced ? t.x : Math.random() * WIDTH,
      y: reduced ? t.y : Math.random() * HEIGHT,
      tx: t.x,
      ty: t.y,
    }));

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      ctx.fillStyle = "#ffffff";
      for (const p of particlesRef.current) {
        ctx.fillRect(p.x, p.y, 2.4, 2.4);
      }
    }

    function settle() {
      let stillMoving = false;
      for (const p of particlesRef.current) {
        p.x += (p.tx - p.x) * 0.08;
        p.y += (p.ty - p.y) * 0.08;
        if (Math.abs(p.tx - p.x) > 0.5 || Math.abs(p.ty - p.y) > 0.5) stillMoving = true;
      }
      draw();
      if (stillMoving) {
        rafRef.current = requestAnimationFrame(settle);
      }
    }

    if (reduced) {
      draw();
    } else {
      draw();
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !startedRef.current) {
            startedRef.current = true;
            settle();
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(canvas);

      return () => {
        observer.disconnect();
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [text, reduced]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: WIDTH, height: HEIGHT, maxWidth: "100%" }}
      className={className}
      aria-label={text}
      role="img"
    />
  );
}
