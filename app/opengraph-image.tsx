import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px 80px",
          background:
            "linear-gradient(135deg, #1a1230 0%, #2d1f4e 50%, #1a1230 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 32,
          }}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#c4b5fd"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m12.83 2.18 2 1.06a2 2 0 0 0 1.94 0l2-1.06a2 2 0 0 1 2.18.45l1.06 2a2 2 0 0 0 1.06 1.06l2 1.06a2 2 0 0 1 .45 2.18l-1.06 2a2 2 0 0 0 0 1.94l1.06 2a2 2 0 0 1-.45 2.18l-2 1.06a2 2 0 0 0-1.06 1.06l-1.06 2a2 2 0 0 1-2.18.45l-2-1.06a2 2 0 0 0-1.94 0l-2 1.06a2 2 0 0 1-2.18-.45l-1.06-2a2 2 0 0 0-1.06-1.06l-2-1.06a2 2 0 0 1-.45-2.18l1.06-2a2 2 0 0 0 0-1.94l-1.06-2a2 2 0 0 1 .45-2.18l2-1.06a2 2 0 0 0 1.06-1.06l1.06-2a2 2 0 0 1 2.18-.45Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <span style={{ fontSize: 28, fontWeight: 600, color: "#e9e0ff" }}>
            {siteConfig.name}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 56,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            maxWidth: 900,
          }}
        >
          Annual, quarterly & ESG reports —{" "}
          <span style={{ color: "#c4b5fd" }}>without the marathon.</span>
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 24,
            color: "rgba(255,255,255,0.65)",
            maxWidth: 800,
            lineHeight: 1.5,
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
