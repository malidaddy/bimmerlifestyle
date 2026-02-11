import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Bimmer Lifestyle Autocare — Kingston's Premier BMW Specialist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0d2d4a 0%, #16588E 50%, #0d2d4a 100%)",
          position: "relative",
        }}
      >
        {/* BMW tri-color stripe at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            display: "flex",
          }}
        >
          <div style={{ flex: 1, background: "#16588E" }} />
          <div style={{ flex: 1, background: "#81C4FF" }} />
          <div style={{ flex: 1, background: "#E7222E" }} />
        </div>

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 60px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              letterSpacing: "-1px",
            }}
          >
            Bimmer Lifestyle
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 600,
              color: "#81C4FF",
              marginTop: 8,
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            Autocare
          </div>
          <div
            style={{
              width: 80,
              height: 3,
              background: "#E7222E",
              marginTop: 28,
              borderRadius: 2,
            }}
          />
          <div
            style={{
              fontSize: 24,
              color: "rgba(255,255,255,0.8)",
              marginTop: 28,
              maxWidth: 700,
              lineHeight: 1.4,
            }}
          >
            Montego Bay&apos;s Premier BMW &amp; MINI Specialist
          </div>
        </div>

        {/* Bottom stripe */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            display: "flex",
          }}
        >
          <div style={{ flex: 1, background: "#16588E" }} />
          <div style={{ flex: 1, background: "#81C4FF" }} />
          <div style={{ flex: 1, background: "#E7222E" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
