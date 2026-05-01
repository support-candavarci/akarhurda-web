"use client";

import { useEffect } from "react";
import Link from "next/link";
import { contact } from "@/data/contact";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App error:", error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <div className="max-w-md">
        <div className="text-6xl font-extrabold text-accent">⚠️</div>
        <h1 className="mt-4 text-3xl font-bold text-foreground">
          Bir hata oluştu
        </h1>
        <p className="mt-3 text-muted">
          Üzgünüz, beklenmeyen bir hata oluştu. Sorun devam ederse bizimle
          iletişime geçebilirsiniz.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={reset}
            className="rounded-lg bg-accent px-6 py-3 font-bold text-primary transition hover:bg-accent-light"
          >
            Tekrar Dene
          </button>
          <Link
            href="/"
            className="rounded-lg border-2 border-primary px-6 py-3 font-bold text-primary transition hover:bg-primary hover:text-white"
          >
            Ana Sayfa
          </Link>
        </div>
        <p className="mt-6 text-sm text-muted">
          Acil durum:{" "}
          <a href={contact.phoneHref} className="font-bold text-accent">
            {contact.phone}
          </a>
        </p>
      </div>
    </main>
  );
}
