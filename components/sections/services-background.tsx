import { cn } from "@/lib/utils";

interface ServicesBackgroundProps {
  className?: string;
}

/**
 * BMW M-stripe diagonals + wrench silhouettes background effect.
 * Uses brand colors: #512CAC, #017BEC, #81C4FF, #16588E.
 * Parent must have `relative overflow-hidden`.
 */
export function ServicesBackground({ className }: ServicesBackgroundProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 select-none overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      {/* ── M-Stripe diagonals (right side) ── */}
      <svg
        className="absolute -right-20 top-0 h-full w-[600px] opacity-[0.045]"
        viewBox="0 0 600 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Three diagonal stripes — brand M colors */}
        <rect
          x="340"
          y="-200"
          width="50"
          height="1500"
          rx="4"
          transform="rotate(25 340 -200)"
          fill="#81C4FF"
        />
        <rect
          x="410"
          y="-200"
          width="50"
          height="1500"
          rx="4"
          transform="rotate(25 410 -200)"
          fill="#017BEC"
        />
        <rect
          x="480"
          y="-200"
          width="50"
          height="1500"
          rx="4"
          transform="rotate(25 480 -200)"
          fill="#512CAC"
        />
      </svg>

      {/* ── M-Stripe diagonals (left side, mirrored) ── */}
      <svg
        className="absolute -left-32 bottom-0 h-full w-[500px] opacity-[0.035]"
        viewBox="0 0 500 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <rect
          x="60"
          y="-100"
          width="40"
          height="1400"
          rx="4"
          transform="rotate(-20 60 -100)"
          fill="#81C4FF"
        />
        <rect
          x="120"
          y="-100"
          width="40"
          height="1400"
          rx="4"
          transform="rotate(-20 120 -100)"
          fill="#017BEC"
        />
        <rect
          x="180"
          y="-100"
          width="40"
          height="1400"
          rx="4"
          transform="rotate(-20 180 -100)"
          fill="#512CAC"
        />
      </svg>

      {/* ── Wrench silhouettes ── */}
      {/* Top-right wrench */}
      <svg
        className="absolute right-12 top-16 h-36 w-36 rotate-[30deg] opacity-[0.04]"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M75 10c-5.5 0-10.5 2.2-14.1 5.9L38.3 38.3l-2.8-2.8c-1.5-1.5-4-1.5-5.5 0L15.4 50.1c-1.5 1.5-1.5 4 0 5.5l2.8 2.8L5.9 70.9C2.2 74.5 0 79.5 0 85c0 8.3 6.7 15 15 15 5.5 0 10.5-2.2 14.1-5.9l12.3-12.3 2.8 2.8c1.5 1.5 4 1.5 5.5 0l14.6-14.6c1.5-1.5 1.5-4 0-5.5l-2.8-2.8 22.6-22.6C87.8 35.5 90 30.5 90 25c0-8.3-6.7-15-15-15zM15 92c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm60-60c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"
          fill="#16588E"
        />
      </svg>

      {/* Bottom-left wrench */}
      <svg
        className="absolute -left-4 bottom-32 h-44 w-44 -rotate-[15deg] opacity-[0.04]"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M75 10c-5.5 0-10.5 2.2-14.1 5.9L38.3 38.3l-2.8-2.8c-1.5-1.5-4-1.5-5.5 0L15.4 50.1c-1.5 1.5-1.5 4 0 5.5l2.8 2.8L5.9 70.9C2.2 74.5 0 79.5 0 85c0 8.3 6.7 15 15 15 5.5 0 10.5-2.2 14.1-5.9l12.3-12.3 2.8 2.8c1.5 1.5 4 1.5 5.5 0l14.6-14.6c1.5-1.5 1.5-4 0-5.5l-2.8-2.8 22.6-22.6C87.8 35.5 90 30.5 90 25c0-8.3-6.7-15-15-15zM15 92c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm60-60c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"
          fill="#512CAC"
        />
      </svg>

      {/* Center-right crossed wrenches */}
      <svg
        className="absolute right-1/4 top-1/2 h-28 w-28 -translate-y-1/2 opacity-[0.03]"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Wrench 1 */}
        <g transform="rotate(45 60 60)">
          <path
            d="M75 10c-5.5 0-10.5 2.2-14.1 5.9L38.3 38.3l-2.8-2.8c-1.5-1.5-4-1.5-5.5 0L15.4 50.1c-1.5 1.5-1.5 4 0 5.5l2.8 2.8L5.9 70.9C2.2 74.5 0 79.5 0 85c0 8.3 6.7 15 15 15 5.5 0 10.5-2.2 14.1-5.9l12.3-12.3 2.8 2.8c1.5 1.5 4 1.5 5.5 0l14.6-14.6c1.5-1.5 1.5-4 0-5.5l-2.8-2.8 22.6-22.6C87.8 35.5 90 30.5 90 25c0-8.3-6.7-15-15-15zM15 92c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm60-60c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"
            fill="#017BEC"
          />
        </g>
        {/* Wrench 2 — mirrored */}
        <g transform="rotate(-45 60 60) translate(10 10)">
          <path
            d="M75 10c-5.5 0-10.5 2.2-14.1 5.9L38.3 38.3l-2.8-2.8c-1.5-1.5-4-1.5-5.5 0L15.4 50.1c-1.5 1.5-1.5 4 0 5.5l2.8 2.8L5.9 70.9C2.2 74.5 0 79.5 0 85c0 8.3 6.7 15 15 15 5.5 0 10.5-2.2 14.1-5.9l12.3-12.3 2.8 2.8c1.5 1.5 4 1.5 5.5 0l14.6-14.6c1.5-1.5 1.5-4 0-5.5l-2.8-2.8 22.6-22.6C87.8 35.5 90 30.5 90 25c0-8.3-6.7-15-15-15zM15 92c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm60-60c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"
            fill="#16588E"
          />
        </g>
      </svg>

      {/* Small accent wrench — bottom right */}
      <svg
        className="absolute bottom-16 right-8 h-20 w-20 rotate-[60deg] opacity-[0.035]"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M75 10c-5.5 0-10.5 2.2-14.1 5.9L38.3 38.3l-2.8-2.8c-1.5-1.5-4-1.5-5.5 0L15.4 50.1c-1.5 1.5-1.5 4 0 5.5l2.8 2.8L5.9 70.9C2.2 74.5 0 79.5 0 85c0 8.3 6.7 15 15 15 5.5 0 10.5-2.2 14.1-5.9l12.3-12.3 2.8 2.8c1.5 1.5 4 1.5 5.5 0l14.6-14.6c1.5-1.5 1.5-4 0-5.5l-2.8-2.8 22.6-22.6C87.8 35.5 90 30.5 90 25c0-8.3-6.7-15-15-15zM15 92c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm60-60c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"
          fill="#81C4FF"
        />
      </svg>
    </div>
  );
}
