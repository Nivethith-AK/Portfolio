import { ImageResponse } from "next/og";

import { profile } from "@/data/profile";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#fafafa",
          fontSize: 104,
          fontWeight: 700,
        }}
      >
        {profile.firstName.charAt(0)}
      </div>
    ),
    { ...size },
  );
}
