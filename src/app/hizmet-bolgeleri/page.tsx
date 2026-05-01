import type { Metadata } from "next";
import Link from "next/link";
import { bolgeler, bolgelerPageMeta } from "@/data/bolgeler";
import { contact } from "@/data/contact";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: bolgelerPageMeta.title,
  description: bolgelerPageMeta.description,
  path: "/hizmet-bolgeleri",
});

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Hizmet Bölgesi",
      item: `${siteConfig.url}/hizmet-bolgeleri`,
    },
  ],
};

export default function HizmetBolgesiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="min-h-screen bg-background pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
            <Link href="/" className="hover:text-primary">
              Ana Sayfa
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Hizmet Bölgesi</span>
          </nav>

          <header className="mb-12 max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              {bolgelerPageMeta.heroTitle}
            </h1>
            <p className="mt-4 text-lg text-muted md:text-xl">
              {bolgelerPageMeta.heroSubtitle}
            </p>
          </header>

          <section className="mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-xl font-bold text-foreground md:text-2xl">
              Adresten Alım Bölgelerimiz
            </h2>
            <p className="mt-3 text-muted leading-relaxed">
              Akar Hurda Gebze merkezimizden çevre 7 ilçeye lisanslı araçlarımızla
              ücretsiz adresten alım yapıyoruz. 50 kg ve üzeri her hurda için
              randevu alarak hızlıca yanınıza geliyoruz. Sanayi tesisleri için
              tonaj kapasitemiz ve UATF dokümantasyonumuzla profesyonel hizmet
              sunuyoruz.
            </p>
          </section>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {bolgeler.map((bolge) => (
              <Link
                key={bolge.slug}
                href={`/hizmet-bolgeleri/${bolge.slug}`}
                className="group rounded-xl border border-border bg-card p-6 transition hover:border-accent hover:shadow-lg"
              >
                <h2 className="text-xl font-bold text-foreground group-hover:text-accent">
                  {bolge.primaryKeyword}
                </h2>
                <p className="mt-1 text-xs uppercase tracking-wide text-muted">
                  {bolge.city} · {bolge.distanceKm} km mesafe
                </p>
                <p className="mt-3 text-sm text-muted line-clamp-3">
                  {bolge.description}
                </p>
                <div className="mt-4 inline-flex items-center text-sm font-semibold text-accent">
                  Detaylar →
                </div>
              </Link>
            ))}
          </div>

          <section className="mt-16 rounded-2xl border border-border bg-primary p-8 text-white md:p-12">
            <h2 className="text-2xl font-extrabold md:text-3xl">
              Bölgenizde Akar Hurda
            </h2>
            <p className="mt-3 text-white/90 md:text-lg">
              Listede yok mu? Yine de arayın — Kocaeli ve İstanbul Anadolu yakası
              genelinde tonaj alımları yapıyoruz.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={contact.phoneHref}
                className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 font-bold text-primary transition hover:bg-accent-light"
              >
                {contact.labels.callNow}: {contact.phone}
              </a>
              <a
                href={contact.whatsappUrl}
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-bold text-white transition hover:bg-white hover:text-primary"
              >
                WhatsApp ile Yaz
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
