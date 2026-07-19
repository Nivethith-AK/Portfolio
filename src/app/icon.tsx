import { ImageResponse } from "next/og";

import { profile } from "@/data/profile";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 20,
          fontWeight: 700,
          borderRadius: 7,
        }}
      >
        {profile.firstName.charAt(0)}
      </div>
    ),
    { ...size },
  );
}
