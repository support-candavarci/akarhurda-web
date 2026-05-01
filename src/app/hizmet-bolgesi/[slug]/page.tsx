import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { bolgeler } from "@/data/bolgeler";
import { services } from "@/data/services";
import { contact } from "@/data/contact";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

interface PageParams {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return bolgeler.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const bolge = bolgeler.find((b) => b.slug === slug);
  if (!bolge) return {};

  // KRİTİK: Sprint 1A keşfi — kelime sırası "[İlçe] Hurdacı"
  return createMetadata({
    title: `${bolge.primaryKeyword} | Akar Hurda — 20 Yıl Deneyim, Adresten Alım`,
    description: `${bolge.name} bölgesinde lisanslı hurda metal alımı. 20 yıllık tecrübe, ücretsiz adresten alım, anında ödeme. Bakır, alüminyum, demir, kablo, elektronik hurda.`,
    path: `/hizmet-bolgesi/${slug}`,
  });
}

export default async function BolgeDetailPage({ params }: PageParams) {
  const { slug } = await params;
  const bolge = bolgeler.find((b) => b.slug === slug);
  if (!bolge) notFound();

  // LocalBusiness areaServed schema
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Akar Hurda — ${bolge.name}`,
    description: bolge.description,
    url: `${siteConfig.url}/hizmet-bolgesi/${slug}`,
    telephone: contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: bolge.district,
      addressRegion: bolge.city,
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: bolge.lat,
      longitude: bolge.lng,
    },
    areaServed: {
      "@type": "City",
      name: bolge.name,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Hizmet Bölgesi",
        item: `${siteConfig.url}/hizmet-bolgesi`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: bolge.name,
        item: `${siteConfig.url}/hizmet-bolgesi/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="min-h-screen bg-background pt-24 pb-16 md:pt-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
            <Link href="/" className="hover:text-primary">
              Ana Sayfa
            </Link>
            <span className="mx-2">/</span>
            <Link href="/hizmet-bolgesi" className="hover:text-primary">
              Hizmet Bölgesi
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{bolge.name}</span>
          </nav>

          <header className="mb-10 max-w-3xl">
            {/* Sprint 1A keyword sırası: [İlçe] Hurdacı */}
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              {bolge.primaryKeyword} — Akar Hurda
            </h1>
            <p className="mt-4 text-lg text-muted md:text-xl">
              {bolge.description}
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <section className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground">
                  {bolge.name}'da Hurda Metal Alımı
                </h2>
                <p className="mt-4 text-muted leading-relaxed">
                  Akar Hurda olarak {bolge.name} bölgesinde 20 yıllık tecrübemizle
                  hurda metal alımı yapıyoruz. {bolge.name}'da bulunan ev, atölye
                  ve sanayi tesislerinden gelen tüm hurda taleplerine
                  {" "}
                  <strong>aynı gün içinde</strong> randevu veriyoruz. Lisanslı
                  araçlarımızla ücretsiz adresten alım, dürüst tartım ve anında
                  ödeme prensiplerimizle hizmet veriyoruz.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-border bg-background p-4">
                    <div className="text-xs font-bold uppercase text-accent">
                      Mesafe
                    </div>
                    <div className="mt-1 text-2xl font-extrabold text-foreground">
                      {bolge.distanceKm} km
                    </div>
                    <div className="mt-1 text-xs text-muted">
                      Akar Hurda Gebze tesisinden
                    </div>
                  </div>
                  <div className="rounded-lg border border-border bg-background p-4">
                    <div className="text-xs font-bold uppercase text-accent">
                      Nüfus
                    </div>
                    <div className="mt-1 text-2xl font-extrabold text-foreground">
                      {bolge.population}
                    </div>
                    <div className="mt-1 text-xs text-muted">
                      {bolge.city} bölgesi
                    </div>
                  </div>
                </div>
              </section>

              <section className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground">
                  {bolge.name}'da Aldığımız Hurda Türleri
                </h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {services.map((s) => (
                    <li key={s.id}>
                      <Link
                        href={`/hurda-turleri/${s.id}`}
                        className="flex items-start gap-2 rounded-lg p-2 text-sm text-muted hover:bg-background hover:text-accent"
                      >
                        <span className="text-accent">→</span>
                        <span>{s.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-2xl border-2 border-accent/30 bg-accent/5 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground">
                  Neden Akar Hurda?
                </h2>
                <ul className="mt-4 space-y-3 text-muted">
                  <li className="flex gap-3">
                    <span className="font-bold text-accent">✓</span>
                    <span>
                      <strong>20 yıllık tecrübe:</strong> 2005'ten beri Gebze
                      merkezli, {bolge.name} dahil 7 ilçeye hizmet.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-accent">✓</span>
                    <span>
                      <strong>Lisanslı araç + UATF:</strong> Çevre Bakanlığı
                      onaylı atık taşıma ve sanayi için resmi belgelendirme.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-accent">✓</span>
                    <span>
                      <strong>Şeffaf fiyatlandırma:</strong> Haftalık güncellenen
                      fiyat tablosu, tartım sonrası anında ödeme.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-accent">✓</span>
                    <span>
                      <strong>Sınıflandırma uzmanlığı:</strong> Bakırda 1A/2A,
                      alüminyumda profil/döküm/jant ayrımı ile her metale değerinde
                      fiyat.
                    </span>
                  </li>
                </ul>
              </section>
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-border bg-primary p-6 text-white">
                <h3 className="text-xl font-bold">{bolge.name} İçin Hemen Arayın</h3>
                <p className="mt-2 text-sm text-white/90">
                  20 yıllık tecrübe, adresten alım, anında ödeme.
                </p>
                <a
                  href={contact.phoneHref}
                  className="mt-4 block rounded-lg bg-accent px-4 py-3 text-center font-bold text-primary transition hover:bg-accent-light"
                >
                  {contact.phone}
                </a>
                <a
                  href={contact.whatsappUrl}
                  className="mt-2 block rounded-lg border-2 border-white px-4 py-3 text-center font-bold text-white transition hover:bg-white hover:text-primary"
                >
                  WhatsApp Talep
                </a>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-bold text-foreground">Diğer Bölgeler</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {bolgeler
                    .filter((b) => b.slug !== slug)
                    .slice(0, 5)
                    .map((b) => (
                      <li key={b.slug}>
                        <Link
                          href={`/hizmet-bolgesi/${b.slug}`}
                          className="text-muted hover:text-accent"
                        >
                          → {b.primaryKeyword}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
