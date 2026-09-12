"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

const LAYERS = [
  { color: "#000000", y: -1.1, size: 3.2 },
  { color: "#4d4d4d", y: 0, size: 2.6 },
  { color: "#ffffff", y: 1.1, size: 2.0 },
];

function Layer({
  color,
  y,
  size,
  speed,
  hovered,
}: {
  color: string;
  y: number;
  size: number;
  speed: number;
  hovered: boolean;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * speed * (hovered ? 2.2 : 1);
    ref.current.rotation.x = Math.sin(t * 0.3) * 0.15;
    ref.current.position.y = y + Math.sin(t * 0.6 + y) * 0.12;
  });

  return (
    <mesh ref={ref} position={[0, y, 0]}>
      <boxGeometry args={[size, 0.5, size]} />
      <meshStandardMaterial
        color={color}
        metalness={0.6}
        roughness={0.25}
        emissive={color}
        emissiveIntensity={0.25}
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}

export default function HeroLayers() {
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.15) * 0.3;
  });

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {LAYERS.map((layer, i) => (
        <Layer key={i} {...layer} speed={0.25 + i * 0.1} hovered={hovered} />
      ))}
    </group>
  );
}
