import { cn } from "@/lib/utils";

interface LogoWatermarkProps {
  className?: string;
  /** Opacity from 0 to 100. Defaults to 5 */
  opacity?: number;
  /** Color of strokes. Defaults to white */
  color?: "white" | "navy" | "red";
}

/**
 * Abstract BMW-inspired stroke pattern — angular car silhouette,
 * kidney grille shapes, and speed lines rendered as lightweight inline SVG.
 * Parent must have `relative overflow-hidden`.
 */
export function LogoWatermark({
  className,
  opacity = 5,
  color = "white",
}: LogoWatermarkProps) {
  const strokeColor =
    color === "white"
      ? "#ffffff"
      : color === "red"
        ? "#E7222E"
        : "#16588E";

  return (
    <div
      className={cn("pointer-events-none absolute select-none", className)}
      style={{ opacity: opacity / 100 }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 800 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
      >
        {/* Car silhouette — low-slung sport profile */}
        <path
          d="M100 280 L180 280 L210 230 L320 200 L480 190 L580 195 L650 220 L700 280 L720 280"
          stroke={strokeColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Roof line */}
        <path
          d="M250 230 L280 175 L420 160 L500 170 L540 195"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Front wheel arch */}
        <path
          d="M180 280 A45 45 0 0 1 270 280"
          stroke={strokeColor}
          strokeWidth="2"
        />
        {/* Rear wheel arch */}
        <path
          d="M580 280 A45 45 0 0 1 670 280"
          stroke={strokeColor}
          strokeWidth="2"
        />
        {/* Front wheel */}
        <circle cx="225" cy="280" r="28" stroke={strokeColor} strokeWidth="2" />
        <circle cx="225" cy="280" r="12" stroke={strokeColor} strokeWidth="1.5" />
        {/* Rear wheel */}
        <circle cx="625" cy="280" r="28" stroke={strokeColor} strokeWidth="2" />
        <circle cx="625" cy="280" r="12" stroke={strokeColor} strokeWidth="1.5" />

        {/* BMW Kidney grille — double rounded shapes */}
        <rect
          x="145" y="235" width="24" height="35" rx="8"
          stroke={strokeColor} strokeWidth="1.8"
        />
        <rect
          x="173" y="235" width="24" height="35" rx="8"
          stroke={strokeColor} strokeWidth="1.8"
        />

        {/* Speed lines — diagonal motion streaks */}
        <line x1="40" y1="200" x2="110" y2="200" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="220" x2="100" y2="220" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" />
        <line x1="50" y1="240" x2="120" y2="240" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" />
        <line x1="30" y1="260" x2="90" y2="260" stroke={strokeColor} strokeWidth="0.8" strokeLinecap="round" />

        {/* Angular accent — BMW roundel inspired circle */}
        <circle cx="680" cy="120" r="50" stroke={strokeColor} strokeWidth="1.5" />
        <circle cx="680" cy="120" r="35" stroke={strokeColor} strokeWidth="1" />
        <line x1="680" y1="70" x2="680" y2="170" stroke={strokeColor} strokeWidth="0.8" />
        <line x1="630" y1="120" x2="730" y2="120" stroke={strokeColor} strokeWidth="0.8" />

        {/* Geometric accent lines */}
        <line x1="720" y1="180" x2="780" y2="160" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" />
        <line x1="725" y1="200" x2="790" y2="175" stroke={strokeColor} strokeWidth="0.8" strokeLinecap="round" />
      </svg>
    </div>
  );
}
