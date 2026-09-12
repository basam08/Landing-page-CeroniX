"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, type ReactNode } from "react";

export default function SceneCanvas({
  children,
  camera = { position: [0, 0, 8], fov: 45 },
  className = "",
}: {
  children: ReactNode;
  camera?: { position: [number, number, number]; fov: number };
  className?: string;
}) {
  return (
    <Canvas
      className={className}
      camera={camera}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.7} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-5, -3, -5]} intensity={0.6} color="#ffffff" />
        {children}
      </Suspense>
    </Canvas>
  );
}
