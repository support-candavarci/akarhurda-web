import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Akar Hurda — Gebze/Kocaeli Hurda Metal Alımı";
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
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          position: "relative",
        }}
      >
        {/* Top accent bar — copper orange */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#ea580c",
          }}
        />

        {/* Logo + brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "16px",
              background: "rgba(234, 88, 12, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "48px",
              fontWeight: 800,
              color: "#ea580c",
            }}
          >
            A
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: "42px",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "2px",
              }}
            >
              AKAR HURDA
            </span>
            <span
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#ea580c",
                letterSpacing: "6px",
                textTransform: "uppercase",
              }}
            >
              Gebze / Kocaeli
            </span>
          </div>
        </div>

        {/* Slogan */}
        <p
          style={{
            fontSize: "24px",
            color: "rgba(255, 255, 255, 0.7)",
            maxWidth: "700px",
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          20 Yıllık Güven, Adresten Alım, Anında Ödeme
        </p>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: "48px",
            marginTop: "40px",
            padding: "20px 40px",
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              style={{ fontSize: "28px", fontWeight: 800, color: "#ea580c" }}
            >
              20+
            </span>
            <span
              style={{
                fontSize: "12px",
                color: "rgba(255, 255, 255, 0.5)",
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              Yıl Tecrübe
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              style={{ fontSize: "28px", fontWeight: 800, color: "#ea580c" }}
            >
              10
            </span>
            <span
              style={{
                fontSize: "12px",
                color: "rgba(255, 255, 255, 0.5)",
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              Hurda Türü
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              style={{ fontSize: "28px", fontWeight: 800, color: "#ea580c" }}
            >
              7+
            </span>
            <span
              style={{
                fontSize: "12px",
                color: "rgba(255, 255, 255, 0.5)",
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              İlçe Hizmet
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
