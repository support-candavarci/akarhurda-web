/**
 * Hero3D static fallback — zero JS cost
 *
 * Kullanım:
 * - Mobile (<768px): Three.js mount edilmeden direkt bu render edilir
 * - 3D Canvas Suspense fallback (mount sırasında ~200ms)
 * - Reduced motion: opsiyonel olarak 3D yerine bunu render edebiliriz
 *
 * Pure CSS + SVG, ~3KB, instant paint.
 */

export default function Hero3DFallback() {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      aria-hidden="true"
    >
      {/* Soft glow background */}
      <div className="absolute inset-0 bg-gradient-radial from-orange-500/10 via-amber-700/5 to-transparent blur-2xl" />

      {/* SVG static metal ingots illustration */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="copperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d97706" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#B87333" stopOpacity="1" />
            <stop offset="100%" stopColor="#7c2d12" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="copperGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#c2410c" stopOpacity="1" />
            <stop offset="100%" stopColor="#7c2d12" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#DAA520" stopOpacity="1" />
            <stop offset="100%" stopColor="#92400e" stopOpacity="0.95" />
          </linearGradient>
          <filter id="ingotShadow">
            <feGaussianBlur stdDeviation="3" />
            <feOffset dx="0" dy="4" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.4" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background ingot (bakır, smaller) */}
        <g transform="translate(60 230) rotate(-12)" filter="url(#ingotShadow)">
          <rect
            x="0"
            y="0"
            width="140"
            height="42"
            rx="6"
            fill="url(#copperGrad)"
          />
          {/* Highlight strip */}
          <rect x="6" y="3" width="128" height="6" rx="3" fill="white" opacity="0.35" />
        </g>

        {/* Middle ingot (bakır accent — larger) */}
        <g transform="translate(180 160) rotate(8)" filter="url(#ingotShadow)">
          <rect
            x="0"
            y="0"
            width="180"
            height="54"
            rx="7"
            fill="url(#copperGrad2)"
          />
          <rect x="8" y="4" width="164" height="8" rx="4" fill="white" opacity="0.4" />
        </g>

        {/* Foreground ingot (bakır, primary) */}
        <g transform="translate(80 90) rotate(-6)" filter="url(#ingotShadow)">
          <rect
            x="0"
            y="0"
            width="200"
            height="60"
            rx="8"
            fill="url(#copperGrad)"
          />
          <rect x="10" y="5" width="180" height="10" rx="5" fill="white" opacity="0.45" />
        </g>

        {/* Gold accent (smaller, top-right) */}
        <g transform="translate(265 50) rotate(15)" filter="url(#ingotShadow)">
          <rect
            x="0"
            y="0"
            width="100"
            height="32"
            rx="5"
            fill="url(#goldGrad)"
          />
          <rect x="4" y="2" width="92" height="5" rx="2.5" fill="white" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
}
