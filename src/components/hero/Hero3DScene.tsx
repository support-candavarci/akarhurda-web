"use client";

/**
 * 3D Floating Metal Ingots — Premium Hero Background
 *
 * Premium upgrade (2026-05-02 v3):
 * - 5 ingot (3 bakır + 1 altın + 1 dramatic large)
 * - Mouse parallax (subtle camera movement)
 * - Auto-rotation slow (organic feel)
 * - Bigger composition (camera closer + larger ingots)
 * - Lokal lighting (HDR external CDN dependency YOK)
 * - Emissive glow + bigger pointLight
 *
 * TRAP-12: BoxGeometry geometric primitive — organic shape DEĞİL ✓
 */

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, ContactShadows } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import type { ComponentProps } from "react";
import * as THREE from "three";

const COPPER_PRIMARY = "#B87333";
const COPPER_ACCENT = "#c2410c";
const COPPER_DARK = "#7c2d12";
const GOLD_COLOR = "#DAA520";

interface IngotProps {
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  emissive?: string;
  scale?: number;
  floatIntensity?: number;
  rotationSpeed?: number;
}

function MetalIngot({
  position,
  rotation,
  color,
  emissive,
  scale = 1,
  floatIntensity = 0.6,
  rotationSpeed = 0.001,
}: IngotProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current && rotationSpeed > 0) {
      meshRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <Float
      speed={floatIntensity > 0 ? 1.2 : 0}
      rotationIntensity={floatIntensity > 0 ? 0.3 : 0}
      floatIntensity={floatIntensity}
    >
      <mesh
        ref={meshRef}
        position={position}
        rotation={rotation}
        scale={scale}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[1.6, 0.45, 0.7]} />
        <meshStandardMaterial
          color={color}
          metalness={0.92}
          roughness={0.22}
          emissive={emissive ?? color}
          emissiveIntensity={0.12}
        />
      </mesh>
    </Float>
  );
}

/**
 * Mouse parallax camera controller
 * Subtle camera movement based on mouse position (-0.5 to +0.5 range)
 */
function ParallaxCamera({ enabled }: { enabled: boolean }) {
  const targetX = useRef(0);
  const targetY = useRef(0);

  useEffect(() => {
    if (!enabled) return;

    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 0.6;
      const y = (e.clientY / window.innerHeight - 0.5) * 0.4;
      targetX.current = x;
      targetY.current = -y;
    };

    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [enabled]);

  useFrame(({ camera }) => {
    if (!enabled) return;
    camera.position.x += (targetX.current - camera.position.x) * 0.04;
    camera.position.y += (0.3 + targetY.current - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

type CanvasProps = ComponentProps<typeof Canvas>;

export default function Hero3DScene() {
  const [floatIntensity, setFloatIntensity] = useState(0.6);
  const [parallaxEnabled, setParallaxEnabled] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setFloatIntensity(mq.matches ? 0 : 0.6);
    setParallaxEnabled(!mq.matches);

    const handler = (e: MediaQueryListEvent) => {
      setFloatIntensity(e.matches ? 0 : 0.6);
      setParallaxEnabled(!e.matches);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // 5 ingot premium composition
  const ingots: IngotProps[] = [
    // Hero ingot — büyük, ön plan, brand accent
    {
      position: [0, 0.2, 0.8],
      rotation: [-0.1, 0.5, -0.05],
      color: COPPER_ACCENT,
      emissive: "#3a1a05",
      scale: 1.3,
      floatIntensity,
      rotationSpeed: 0.0015,
    },
    // Sol arka — dark copper
    {
      position: [-1.8, -0.3, -0.4],
      rotation: [0.1, 0.7, -0.15],
      color: COPPER_DARK,
      emissive: "#1a0a02",
      scale: 0.95,
      floatIntensity: floatIntensity * 0.9,
      rotationSpeed: 0.0008,
    },
    // Sağ üst — primary copper
    {
      position: [1.7, 0.7, -0.2],
      rotation: [-0.2, -0.4, 0.1],
      color: COPPER_PRIMARY,
      emissive: "#3a1a05",
      scale: 0.9,
      floatIntensity: floatIntensity * 1.1,
      rotationSpeed: 0.001,
    },
    // Sağ alt — primary copper
    {
      position: [1.4, -0.8, 0.3],
      rotation: [0.15, -0.3, -0.1],
      color: COPPER_PRIMARY,
      emissive: "#2a0f02",
      scale: 0.85,
      floatIntensity: floatIntensity * 0.8,
      rotationSpeed: 0.0012,
    },
    // Gold accent — sol üst köşe, premium feel
    {
      position: [-1.3, 1.0, 0.5],
      rotation: [-0.3, 0.2, 0.15],
      color: GOLD_COLOR,
      emissive: "#3a2a05",
      scale: 0.6,
      floatIntensity: floatIntensity * 1.4,
      rotationSpeed: 0.002,
    },
  ];

  const cameraConfig: CanvasProps["camera"] = {
    position: [0, 0.3, 5],
    fov: 38,
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
      {/* Mouse parallax controller */}
      <ParallaxCamera enabled={parallaxEnabled} />

      {/* Ambient base */}
      <ambientLight intensity={0.55} />

      {/* Key light — top-right warm */}
      <directionalLight
        position={[4, 6, 3]}
        intensity={2.2}
        color="#ffe8d0"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-far={15}
        shadow-camera-left={-6}
        shadow-camera-right={6}
        shadow-camera-top={6}
        shadow-camera-bottom={-6}
      />

      {/* Rim light — back-left cool (metallic edge) */}
      <directionalLight
        position={[-5, 3, -3]}
        intensity={1.4}
        color="#a8c5e0"
      />

      {/* Fill light — front-bottom soft */}
      <directionalLight position={[-2, -1, 3]} intensity={0.7} color="#fff5e6" />

      {/* Hero spot — bakır parıltı (dramatic glow) */}
      <pointLight
        position={[0, 0.5, 3]}
        intensity={1.4}
        color="#ff6b1a"
        distance={10}
        decay={1.5}
      />

      {/* Cool back accent */}
      <pointLight
        position={[2, 2, -3]}
        intensity={0.8}
        color="#3b82f6"
        distance={8}
        decay={2}
      />

      {/* Floating ingots */}
      {ingots.map((ingot, idx) => (
        <MetalIngot key={idx} {...ingot} />
      ))}

      {/* Soft contact shadow */}
      <ContactShadows
        position={[0, -1.8, 0]}
        opacity={0.4}
        scale={10}
        blur={3}
        far={4}
      />
    </Canvas>
  );
}
