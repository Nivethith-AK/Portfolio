import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";
import { profile } from "@/data/profile";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        {/* Subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            opacity: 0.5,
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#fafafa",
              color: "#0a0a0a",
              fontSize: 30,
              fontWeight: 700,
              borderRadius: 14,
            }}
          >
            {profile.firstName.charAt(0)}
          </div>
          <div style={{ color: "#a1a1aa", fontSize: 28, fontWeight: 500 }}>
            {profile.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              color: "#3b82f6",
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            {profile.role}
          </div>
          <div
            style={{
              color: "#fafafa",
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: 900,
              letterSpacing: -1.5,
            }}
          >
            {profile.headline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            color: "#a1a1aa",
            fontSize: 22,
          }}
        >
          <div>
            {siteConfig.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            <span>CVForge</span>
            <span>NovaStack</span>
            <span>NIVI</span>
            <span>Avntae</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
