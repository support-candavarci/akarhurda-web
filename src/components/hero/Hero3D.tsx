"use client";

/**
 * Hero3D wrapper — Lazy 3D mount with Intersection Observer + Suspense
 *
 * Strategy (Lighthouse 95 koruma):
 * 1. Default: SSR/initial render = Hero3DFallback (zero JS)
 * 2. Client mount: useEffect detects visibility + viewport width
 * 3. Mobile (<768px): Stay on fallback (no 3D mount)
 * 4. Desktop visible: Dynamic import 3D Canvas
 * 5. Suspense boundary: Fallback shown during chunk load
 *
 * Bundle impact: 0KB initial (3D module split via next/dynamic)
 */

import dynamic from "next/dynamic";
import { Suspense, useEffect, useRef, useState } from "react";
import Hero3DFallback from "./Hero3DFallback";

// Dynamic import — split chunk, no SSR
const Hero3DScene = dynamic(() => import("./Hero3DScene"), {
  ssr: false,
  loading: () => <Hero3DFallback />,
});

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldMount3D, setShouldMount3D] = useState(false);

  useEffect(() => {
    // Mobile: skip 3D entirely
    if (window.innerWidth < 768) return;

    // Reduced motion: skip 3D, fallback only
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Intersection Observer — mount when 50% visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // requestIdleCallback if available, fallback to setTimeout
          const rIC =
            (window as unknown as { requestIdleCallback?: (cb: () => void) => void })
              .requestIdleCallback || ((cb: () => void) => setTimeout(cb, 0));
          rIC(() => setShouldMount3D(true));
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative h-full w-full">
      {shouldMount3D ? (
        <Suspense fallback={<Hero3DFallback />}>
          <Hero3DScene />
        </Suspense>
      ) : (
        <Hero3DFallback />
      )}
    </div>
  );
}
