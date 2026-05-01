import type { Metadata } from "next";
import Link from "next/link";
import { pricing, pricingMeta, pricingPageMeta } from "@/data/pricing";
import { contact } from "@/data/contact";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: pricingPageMeta.title,
  description: pricingPageMeta.description,
  path: "/hurda-fiyatlari",
});

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Hurda Fiyatları",
      item: `${siteConfig.url}/hurda-fiyatlari`,
    },
  ],
};

/**
 * Schema.org JSON-LD: Article (weekly updated price guide)
 *
 * dateModified is CRITICAL — AI Overview prefers fresh content.
 * Sprint 1B insight: 0/8 competitors have transparent dated price tables.
 */
const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${siteConfig.url}/hurda-fiyatlari#article`,
  headline: pricingPageMeta.heroTitle,
  description: pricingPageMeta.description,
  url: `${siteConfig.url}/hurda-fiyatlari`,
  datePublished: pricingMeta.lastUpdated,
  dateModified: pricingMeta.lastUpdated,
  author: {
    "@id": `${siteConfig.url}/#organization`,
  },
  publisher: {
    "@id": `${siteConfig.url}/#organization`,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteConfig.url}/hurda-fiyatlari`,
  },
  inLanguage: "tr-TR",
  articleSection: "Fiyat Analizi",
  about: {
    "@type": "Thing",
    name: "Hurda Metal Fiyatları",
    description: pricingMeta.source,
  },
};

export default function HurdaFiyatlariPage() {
  // Group by metal
  const grouped = pricing.reduce<Record<string, typeof pricing>>((acc, row) => {
    if (!acc[row.metal]) acc[row.metal] = [];
    acc[row.metal].push(row);
    return acc;
  }, {});

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="min-h-screen bg-background pt-24 pb-16 md:pt-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
            <Link href="/" className="hover:text-primary">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Hurda Fiyatları</span>
          </nav>

          <header className="mb-10 max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              {pricingPageMeta.heroTitle}
            </h1>
            <p className="mt-4 text-lg text-muted md:text-xl">
              {pricingPageMeta.heroSubtitle}
            </p>
          </header>

          <div className="mb-8 flex flex-wrap items-center gap-4 rounded-xl border-2 border-accent/30 bg-accent/5 p-4 text-sm">
            <div>
              <span className="font-bold text-foreground">Son Güncelleme:</span>{" "}
              <span className="text-accent">{pricingMeta.lastUpdated}</span>
            </div>
            <div className="text-muted">|</div>
            <div>
              <span className="font-bold text-foreground">Geçerlilik:</span>{" "}
              <span className="text-muted">{pricingMeta.validUntil}</span>
            </div>
            <div className="text-muted">|</div>
            <div className="text-muted">Her Pazartesi güncellenir</div>
          </div>

          {Object.entries(grouped).map(([metal, rows]) => (
            <section
              key={metal}
              className="mb-8 rounded-2xl border border-border bg-card p-6 md:p-8"
            >
              <h2 className="text-2xl font-bold text-foreground">{metal}</h2>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-3 font-bold text-foreground">Kategori</th>
                      <th className="py-3 text-right font-bold text-foreground">Fiyat Aralığı</th>
                      <th className="py-3 text-right font-bold text-foreground">Detay</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, i) => (
                      <tr key={i} className="border-b border-border last:border-0">
                        <td className="py-3 text-muted">{row.category}</td>
                        <td className="py-3 text-right font-bold text-accent">
                          {row.priceMin}–{row.priceMax} {row.unit}
                        </td>
                        <td className="py-3 text-right text-sm">
                          {row.serviceSlug ? (
                            <Link href={`/hizmetler/${row.serviceSlug}`} className="text-accent hover:underline">
                              Hizmet detayı →
                            </Link>
                          ) : null}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}

          <section className="mt-8 rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-xl font-bold text-foreground">Fiyatlandırma Hakkında</h2>
            <p className="mt-3 text-muted leading-relaxed">
              <strong>Kaynak:</strong> {pricingMeta.source}
            </p>
            <p className="mt-3 text-muted leading-relaxed text-sm">
              <strong>Önemli:</strong> {pricingMeta.disclaimer}
            </p>
            <p className="mt-3 text-muted leading-relaxed text-sm">
              LME endeksi ve hurda fiyat ilişkisini detaylı incelemek için{" "}
              <Link href="/blog/lme-endeksi-hurda-fiyat-iliski-rehberi" className="text-accent hover:underline">
                blog yazımıza
              </Link>{" "}
              bakabilirsiniz.
            </p>
          </section>

          <section className="mt-12 rounded-2xl border border-border bg-primary p-8 text-white md:p-12">
            <h2 className="text-2xl font-extrabold md:text-3xl">Hurdanız İçin Kesin Fiyat</h2>
            <p className="mt-3 text-white/90 md:text-lg">
              Tablodaki fiyatlar bilgi amaçlıdır. Kesin teklif için arayın veya WhatsApp'tan ulaşın.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={contact.phoneHref} className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 font-bold text-primary transition hover:bg-accent-light">
                {contact.labels.callNow}: {contact.phone}
              </a>
              <a href={contact.whatsappUrl} className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-bold text-white transition hover:bg-white hover:text-primary">
                WhatsApp ile Yaz
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
