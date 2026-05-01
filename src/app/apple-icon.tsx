import { ImageResponse } from "next/og";

export const runtime = "edge";
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
          background: "#0f172a",
          borderRadius: "32px",
        }}
      >
        <span
          style={{
            fontSize: 110,
            fontWeight: 800,
            color: "#ea580c",
            letterSpacing: "-2px",
          }}
        >
          A
        </span>
      </div>
    ),
    { ...size }
  );
}
