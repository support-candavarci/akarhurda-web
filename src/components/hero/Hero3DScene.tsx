"use client";

/**
 * 3D Floating Metal Ingots — Hero showcase (Production-safe build)
 *
 * TRAP-12 uyumu: BoxGeometry kullanılıyor (geometrik/matematiksel şekil — ingot
 * formu organik değil). rules/3d-rendering-discipline.md §1 izinli.
 *
 * Production-safe optimizations (2026-05-02 fix):
 * - Environment preset KALDIRILDI (HDR external CDN fail riski)
 * - Lokal 3-point lighting + emissive material → HDR'siz parıltı
 * - Reduced motion check window.matchMedia (framer-motion bağımlılığı kaldırıldı)
 * - Antialias=true ama dpr=1.5 cap (mobile GPU korunma)
 *
 * Performance:
 * - 4 mesh (3 bakır + 1 altın)
 * - MeshStandardMaterial PBR (metalness 0.9, emissive ile parıltı)
 * - drei Float — subtle bobbing animation
 * - 60fps GPU acceleration
 */

import { Canvas } from "@react-three/fiber";
import { Float, ContactShadows } from "@react-three/drei";
import { useEffect, useState } from "react";
import type { ComponentProps } from "react";

// Bakır renk: #B87333 (gerçek bakır), accent variant: #c2410c (brand orange-700)
const COPPER_COLOR = "#B87333";
const COPPER_ACCENT = "#c2410c";
const GOLD_COLOR = "#DAA520";

interface IngotProps {
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  emissive?: string;
  scale?: number;
  /** Float bobbing intensity (0 = static for reduced motion) */
  floatIntensity?: number;
}

function MetalIngot({
  position,
  rotation,
  color,
  emissive,
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
        <meshStandardMaterial
          color={color}
          metalness={0.9}
          roughness={0.25}
          emissive={emissive ?? color}
          emissiveIntensity={0.08}
        />
      </mesh>
    </Float>
  );
}

type CanvasProps = ComponentProps<typeof Canvas>;

export default function Hero3DScene() {
  const [floatIntensity, setFloatIntensity] = useState(0.6);

  useEffect(() => {
    // Reduced motion check (framer-motion dependency kaldırıldı, native API)
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setFloatIntensity(mq.matches ? 0 : 0.6);

    const handler = (e: MediaQueryListEvent) => {
      setFloatIntensity(e.matches ? 0 : 0.6);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Variant B: Diagonal scatter — endüstriyel dynamic composition
  // 3 bakır külçe Z-axis depth + 1 altın accent
  const ingots: IngotProps[] = [
    // Foreground bakır — most visible
    {
      position: [-0.5, 0.3, 0.5],
      rotation: [-0.15, 0.4, -0.1],
      color: COPPER_COLOR,
      emissive: "#3a1a05",
      scale: 1,
      floatIntensity,
    },
    // Middle bakır (brand accent)
    {
      position: [0.8, -0.2, 0],
      rotation: [0.1, -0.3, 0.05],
      color: COPPER_ACCENT,
      emissive: "#3a1a05",
      scale: 0.9,
      floatIntensity,
    },
    // Background bakır
    {
      position: [-1.2, -0.6, -0.8],
      rotation: [0.05, 0.6, -0.2],
      color: COPPER_COLOR,
      emissive: "#2a0f02",
      scale: 0.85,
      floatIntensity,
    },
    // Gold accent — small, premium feel
    {
      position: [0.4, 0.9, -0.4],
      rotation: [-0.25, -0.15, 0.1],
      color: GOLD_COLOR,
      emissive: "#3a2a05",
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
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ width: "100%", height: "100%" }}
    >
      {/* 3-point lighting (HDR Environment yerine — production-safe) */}
      <ambientLight intensity={0.5} />

      {/* Key light — top-right warm */}
      <directionalLight
        position={[4, 5, 3]}
        intensity={2}
        color="#ffe8d0"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-far={15}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
      />

      {/* Rim light — back-right cool (metal kontur) */}
      <directionalLight
        position={[-4, 3, -3]}
        intensity={1.2}
        color="#a8c5e0"
      />

      {/* Fill light — front-left soft */}
      <directionalLight position={[-3, 1, 2]} intensity={0.6} color="#fff5e6" />

      {/* Spot accent — kırmızımsı bakır parıltı */}
      <pointLight position={[0, 0, 4]} intensity={0.8} color="#ff8c42" distance={8} />

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
