"use client";

import { useMotionValue, useTransform, type MotionValue } from "framer-motion";
import type { MouseEvent } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const TILT_RANGE = 6;

export function useTiltHover() {
  const reduced = usePrefersReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [TILT_RANGE, -TILT_RANGE]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-TILT_RANGE, TILT_RANGE]);

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return {
    style: reduced
      ? undefined
      : { rotateX, rotateY, transformPerspective: 800 },
    onMouseMove,
    onMouseLeave,
  } as {
    style?: { rotateX: MotionValue<number>; rotateY: MotionValue<number>; transformPerspective: number };
    onMouseMove: (e: MouseEvent<HTMLDivElement>) => void;
    onMouseLeave: () => void;
  };
}
