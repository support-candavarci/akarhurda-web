"use client";

/**
 * 3D Floating Metal Ingots — Hero showcase
 *
 * TRAP-12 uyumu: BoxGeometry kullanılıyor (geometrik/matematiksel şekil — ingot
 * formu organik değil). rules/3d-rendering-discipline.md §1 izinli.
 *
 * Performance:
 * - 4 mesh (3 bakır + 1 altın)
 * - MeshPhysicalMaterial PBR (metalness 0.95, clearcoat 0.5)
 * - drei Environment preset="city" — HDR ambient
 * - drei Float — subtle bobbing animation
 * - 60fps GPU acceleration
 *
 * Accessibility:
 * - prefers-reduced-motion: Float speed 0
 * - aria-hidden="true" on canvas (decorative)
 */

import { Canvas } from "@react-three/fiber";
import { Float, Environment, ContactShadows } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import type { ComponentProps } from "react";

// Bakır renk: #B87333 (gerçek bakır), accent variant: #c2410c (brand orange-700)
const COPPER_COLOR = "#B87333";
const COPPER_ACCENT = "#c2410c";
const GOLD_COLOR = "#DAA520";

interface IngotProps {
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  scale?: number;
  /** Float bobbing intensity (0 = static for reduced motion) */
  floatIntensity?: number;
}

function MetalIngot({
  position,
  rotation,
  color,
  scale = 1,
  floatIntensity = 0.6,
}: IngotProps) {
  return (
    <Float
      speed={floatIntensity > 0 ? 1.5 : 0}
      rotationIntensity={floatIntensity > 0 ? 0.4 : 0}
      floatIntensity={floatIntensity}
    >
      <mesh
        position={position}
        rotation={rotation}
        scale={scale}
        castShadow
        receiveShadow
      >
        {/* Ingot proportions: 1.4 × 0.4 × 0.6 — gerçekçi külçe oranları */}
        <boxGeometry args={[1.4, 0.4, 0.6]} />
        <meshPhysicalMaterial
          color={color}
          metalness={0.95}
          roughness={0.18}
          clearcoat={0.5}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </Float>
  );
}

type CanvasProps = ComponentProps<typeof Canvas>;

export default function Hero3DScene() {
  const prefersReducedMotion = useReducedMotion();
  const floatIntensity = prefersReducedMotion ? 0 : 0.6;

  // Variant B: Diagonal scatter — endüstriyel dynamic composition
  // 3 bakır külçe Z-axis depth + 1 altın accent
  const ingots: IngotProps[] = [
    // Foreground bakır — most visible
    {
      position: [-0.5, 0.3, 0.5],
      rotation: [-0.15, 0.4, -0.1],
      color: COPPER_COLOR,
      scale: 1,
      floatIntensity,
    },
    // Middle bakır
    {
      position: [0.8, -0.2, 0],
      rotation: [0.1, -0.3, 0.05],
      color: COPPER_ACCENT,
      scale: 0.9,
      floatIntensity,
    },
    // Background bakır
    {
      position: [-1.2, -0.6, -0.8],
      rotation: [0.05, 0.6, -0.2],
      color: COPPER_COLOR,
      scale: 0.85,
      floatIntensity,
    },
    // Gold accent — small, premium feel
    {
      position: [0.4, 0.9, -0.4],
      rotation: [-0.25, -0.15, 0.1],
      color: GOLD_COLOR,
      scale: 0.55,
      floatIntensity: floatIntensity * 1.2,
    },
  ];

  const cameraConfig: CanvasProps["camera"] = {
    position: [0, 0.2, 5.2],
    fov: 35,
  };

  return (
    <Canvas
      aria-hidden="true"
      camera={cameraConfig}
      shadows
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%" }}
    >
      {/* HDR Environment for realistic metal reflection */}
      <Environment preset="city" />

      {/* 3-point lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[3, 5, 2]}
        intensity={1.2}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight position={[-3, 2, -2]} intensity={0.6} color="#fff5e6" />

      {/* Floating ingots */}
      {ingots.map((ingot, idx) => (
        <MetalIngot key={idx} {...ingot} />
      ))}

      {/* Soft contact shadow under ingots */}
      <ContactShadows
        position={[0, -1.5, 0]}
        opacity={0.35}
        scale={8}
        blur={2.5}
        far={3}
      />
    </Canvas>
  );
}
