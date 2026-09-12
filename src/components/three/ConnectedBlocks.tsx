"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const NODES: { pos: [number, number, number]; color: string }[] = [
  { pos: [-2.6, 0, 0], color: "#ffffff" },
  { pos: [0, 0.6, 0], color: "#9ca3af" },
  { pos: [2.6, -0.3, 0], color: "#ffffff" },
];

function Block({ pos, color, index }: { pos: [number, number, number]; color: string; index: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = t * 0.3 + index;
    ref.current.rotation.y = t * 0.4 + index;
    const scale = 1 + Math.sin(t * 1.5 + index * 2) * 0.08;
    ref.current.scale.setScalar(scale);
  });
  return (
    <mesh ref={ref} position={pos}>
      <icosahedronGeometry args={[0.7, 0]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.4}
        metalness={0.5}
        roughness={0.3}
      />
    </mesh>
  );
}

function ConnectingLines() {
  const lineRef = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => {
    const points: number[] = [];
    for (let i = 0; i < NODES.length - 1; i++) {
      points.push(...NODES[i].pos, ...NODES[i + 1].pos);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));
    return geo;
  }, []);

  useFrame((state) => {
    if (!lineRef.current) return;
    const mat = lineRef.current.material as THREE.LineBasicMaterial;
    mat.opacity = 0.4 + Math.sin(state.clock.getElapsedTime() * 2) * 0.3;
  });

  return (
    <lineSegments ref={lineRef} geometry={geometry}>
      <lineBasicMaterial color="#ffffff" transparent opacity={0.6} />
    </lineSegments>
  );
}

export default function ConnectedBlocks() {
  return (
    <group>
      {NODES.map((n, i) => (
        <Block key={i} {...n} index={i} />
      ))}
      <ConnectingLines />
    </group>
  );
}
