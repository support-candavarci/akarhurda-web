"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <html lang="tr">
      <body>
        <main
          style={{
            display: "flex",
            minHeight: "100vh",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            fontFamily: "system-ui, sans-serif",
            background: "#f9fafb",
            color: "#111827",
          }}
        >
          <div style={{ textAlign: "center", maxWidth: "32rem" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>⚠️</div>
            <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1rem" }}>
              Beklenmeyen bir hata oluştu
            </h1>
            <p style={{ marginBottom: "1.5rem", color: "#6b7280" }}>
              Sayfa yüklenemedi. Lütfen tekrar deneyin.
            </p>
            <button
              onClick={reset}
              style={{
                background: "#f59e0b",
                color: "#111",
                fontWeight: 700,
                padding: "0.75rem 1.5rem",
                borderRadius: "0.5rem",
                border: "none",
                cursor: "pointer",
              }}
            >
              Tekrar Dene
            </button>
            <p style={{ marginTop: "1.5rem", fontSize: "0.875rem", color: "#6b7280" }}>
              Acil durum: <strong>0 534 776 75 79</strong>
            </p>
          </div>
        </main>
      </body>
    </html>
  );
}
