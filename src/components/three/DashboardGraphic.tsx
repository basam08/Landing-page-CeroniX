"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Bar({ x, baseHeight, color, delay }: { x: number; baseHeight: number; color: string; delay: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    const h = baseHeight + Math.sin(t * 1.2 + delay) * 0.4;
    ref.current.scale.y = Math.max(0.2, h);
    ref.current.position.y = ref.current.scale.y / 2 - 1.4;
  });
  return (
    <mesh ref={ref} position={[x, 0, 0]}>
      <boxGeometry args={[0.4, 1, 0.4]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.35} />
    </mesh>
  );
}

function FlowingLine() {
  const ref = useRef<THREE.Line>(null);
  const geometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= 40; i++) {
      const x = -3 + (i / 40) * 6;
      points.push(new THREE.Vector3(x, 0, 0));
    }
    return new THREE.BufferGeometry().setFromPoints(points);
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const pos = ref.current.geometry.attributes.position as THREE.BufferAttribute;
    const t = state.clock.getElapsedTime();
    for (let i = 0; i < pos.count; i++) {
      const x = -3 + (i / (pos.count - 1)) * 6;
      pos.setY(i, Math.sin(x * 1.3 + t * 1.5) * 0.5 + 1.2);
    }
    pos.needsUpdate = true;
  });

  return (
    <primitive object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: "#ffffff" }))} ref={ref} />
  );
}

export default function DashboardGraphic() {
  const bars = [
    { x: -2.4, h: 0.8, color: "#ffffff" },
    { x: -1.6, h: 1.3, color: "#bfbfbf" },
    { x: -0.8, h: 0.9, color: "#ffffff" },
    { x: 0, h: 1.6, color: "#bfbfbf" },
    { x: 0.8, h: 1.1, color: "#ffffff" },
    { x: 1.6, h: 1.8, color: "#bfbfbf" },
    { x: 2.4, h: 1.4, color: "#ffffff" },
  ];

  return (
    <group>
      {bars.map((b, i) => (
        <Bar key={i} x={b.x} baseHeight={b.h} color={b.color} delay={i} />
      ))}
      <FlowingLine />
    </group>
  );
}
