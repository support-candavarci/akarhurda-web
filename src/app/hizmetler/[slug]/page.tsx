import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/data/services";
import { faqs, faqCategoryLabels } from "@/data/faq";
import { pricing } from "@/data/pricing";
import { contact, getQuoteWhatsAppUrl } from "@/data/contact";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

interface PageParams {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) return {};
  return createMetadata({
    title: `${service.title} | Akar Hurda — Gebze/Kocaeli`,
    description: `${service.shortDescription}. Lisanslı alım, LME endeksli fiyat, anında ödeme. 20 yıl tecrübe — Gebze ve Kocaeli.`,
    path: `/hizmetler/${slug}`,
  });
}

/**
 * Native markdown-ish renderer for longDescription / informationGain content.
 * Supports: paragraphs, ## headings, ### subheadings, bullet lists,
 * numbered lists, **bold** emphasis, simple tables.
 */
function renderRichText(content: string) {
  return content.split("\n\n").map((block, i) => {
    const trimmed = block.trim();
    if (!trimmed) return null;

    if (trimmed.startsWith("## ")) {
      return (
        <h3 key={i} className="mt-6 mb-3 text-xl font-bold text-foreground">
          {trimmed.replace(/^##\s/, "")}
        </h3>
      );
    }
    if (trimmed.startsWith("### ")) {
      return (
        <h4 key={i} className="mt-4 mb-2 text-lg font-bold text-foreground">
          {trimmed.replace(/^###\s/, "")}
        </h4>
      );
    }
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      const items = trimmed.split("\n").map((l) => l.replace(/^[-*]\s/, ""));
      return (
        <ul key={i} className="my-3 list-disc space-y-1 pl-6 text-muted">
          {items.map((item, j) => (
            <li key={j}>{renderInline(item)}</li>
          ))}
        </ul>
      );
    }
    if (/^\d+\.\s/.test(trimmed)) {
      const items = trimmed.split("\n").map((l) => l.replace(/^\d+\.\s/, ""));
      return (
        <ol key={i} className="my-3 list-decimal space-y-1 pl-6 text-muted">
          {items.map((item, j) => (
            <li key={j}>{renderInline(item)}</li>
          ))}
        </ol>
      );
    }
    if (trimmed.startsWith("|")) {
      const lines = trimmed.split("\n").filter((l) => l.startsWith("|"));
      if (lines.length < 2) return null;
      const headers = lines[0]
        .split("|")
        .map((c) => c.trim())
        .filter(Boolean);
      const rows = lines.slice(2).map((line) =>
        line
          .split("|")
          .map((c) => c.trim())
          .filter(Boolean),
      );
      return (
        <div key={i} className="my-4 overflow-x-auto">
          <table className="w-full border border-border text-sm">
            <thead>
              <tr className="bg-card">
                {headers.map((h, j) => (
                  <th
                    key={j}
                    className="border border-border p-2 text-left font-bold text-foreground"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, j) => (
                <tr key={j}>
                  {row.map((cell, k) => (
                    <td
                      key={k}
                      className="border border-border p-2 text-muted"
                    >
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    return (
      <p key={i} className="my-3 text-muted leading-relaxed">
        {renderInline(trimmed)}
      </p>
    );
  });
}

function renderInline(text: string) {
  // Replace **bold** with <strong>
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default async function ServiceDetailPage({ params }: PageParams) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) notFound();

  const relatedPricing = pricing.filter((p) => p.serviceSlug === slug);
  const relatedFaqs = faqs.filter(
    (f) => f.category === "fiyat" || f.category === "surec",
  );
  const otherServices = services.filter((s) => s.id !== slug).slice(0, 4);

  // Service schema — extended with hasOfferCatalog (features as offers)
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/hizmetler/${slug}#service`,
    name: service.title,
    description: service.description,
    serviceType: "Hurda Metal Alımı",
    category: "Scrap Metal Recycling",
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: [
      { "@type": "City", name: "Gebze" },
      { "@type": "City", name: "Darıca" },
      { "@type": "City", name: "Çayırova" },
      { "@type": "City", name: "Dilovası" },
      { "@type": "City", name: "Pendik" },
      { "@type": "City", name: "Tuzla" },
      { "@type": "AdministrativeArea", name: "Kocaeli" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} — Özellikler`,
      itemListElement: service.features.map((feature) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: feature,
        },
      })),
    },
  };

  // HowTo schema for processSteps
  const howToJsonLd = service.processSteps
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "@id": `${siteConfig.url}/hizmetler/${slug}#howto`,
        name: `${service.title} — Süreç Akışı`,
        description: `${service.title} hizmetimiz nasıl işliyor — 4 adım`,
        step: service.processSteps.map((s) => ({
          "@type": "HowToStep",
          position: s.step,
          name: s.title,
          text: s.description,
        })),
      }
    : null;

  // FAQPage schema for related FAQs
  const faqPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/hizmetler/${slug}#faqpage`,
    mainEntity: relatedFaqs.slice(0, 4).map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Hurda Türleri",
        item: `${siteConfig.url}/hizmetler`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${siteConfig.url}/hizmetler/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {howToJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }}
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
            <Link href="/hizmetler" className="hover:text-primary">
              Hurda Türleri
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{service.title}</span>
          </nav>

          <header className="mb-10 max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              {service.title}
            </h1>
            <p className="mt-4 text-lg text-muted md:text-xl">
              {service.description}
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <section className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground">
                  Hizmet Özellikleri
                </h2>
                <ul className="mt-4 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-1 text-accent">✓</span>
                      <span className="text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {service.longDescription && (
                <section className="rounded-2xl border border-border bg-card p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground">
                    {service.title} — Detaylı Rehber
                  </h2>
                  <div className="mt-4">
                    {renderRichText(service.longDescription)}
                  </div>
                </section>
              )}

              {service.processSteps && service.processSteps.length > 0 && (
                <section className="rounded-2xl border border-border bg-card p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground">
                    Süreç Nasıl İşler — 4 Adım
                  </h2>
                  <ol className="mt-6 space-y-4">
                    {service.processSteps.map((step) => (
                      <li key={step.step} className="flex gap-4">
                        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-accent font-extrabold text-primary">
                          {step.step}
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground">
                            {step.title}
                          </h3>
                          <p className="mt-1 text-sm text-muted leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </section>
              )}

              {service.priceFactors && service.priceFactors.length > 0 && (
                <section className="rounded-2xl border border-border bg-card p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground">
                    Fiyatı Etkileyen Faktörler
                  </h2>
                  <p className="mt-2 text-sm text-muted">
                    LME endeksi, kalite sınıfı ve diğer faktörlerin fiyatınıza
                    etkisi.
                  </p>
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="py-3 font-bold text-foreground">
                            Faktör
                          </th>
                          <th className="py-3 font-bold text-foreground">
                            Etkisi
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {service.priceFactors.map((row, i) => (
                          <tr
                            key={i}
                            className="border-b border-border last:border-0"
                          >
                            <td className="py-3 font-bold text-foreground align-top">
                              {row.factor}
                            </td>
                            <td className="py-3 text-muted">{row.impact}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              )}

              {relatedPricing.length > 0 && (
                <section className="rounded-2xl border border-border bg-card p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground">
                    Güncel Fiyat Aralığı
                  </h2>
                  <p className="mt-2 text-sm text-muted">
                    Haftalık güncellenir. LME endeksine bağlı dalgalanma olabilir.
                  </p>
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="py-3 font-bold text-foreground">
                            Kategori
                          </th>
                          <th className="py-3 text-right font-bold text-foreground">
                            Fiyat
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {relatedPricing.map((row, i) => (
                          <tr key={i} className="border-b border-border last:border-0">
                            <td className="py-3 text-muted">{row.category}</td>
                            <td className="py-3 text-right font-bold text-accent">
                              {row.priceMin}–{row.priceMax} {row.unit}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <Link
                    href="/hurda-fiyatlari"
                    className="mt-4 inline-flex items-center text-sm font-semibold text-accent"
                  >
                    Tüm fiyatları gör →
                  </Link>
                </section>
              )}

              {/* Information Gain Block — rakipte yok bizde var */}
              <section className="rounded-2xl border-2 border-accent/30 bg-accent/5 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground">
                  Information Gain — Rakipte Yok, Bizde Var
                </h2>
                {service.informationGain ? (
                  <div className="mt-3">
                    {renderRichText(service.informationGain)}
                  </div>
                ) : (
                  <p className="mt-3 text-muted leading-relaxed">
                    {service.title.toLowerCase()} sürecinde hak ettiğiniz fiyatı
                    almak için: (1) Mümkünse hurdanızı kategorilere ayrı tartılması
                    için hazır tutun, (2) Kablo ise plastik kaplı veya soyulmuş
                    olarak ayrımını bilin, (3) Nakliye sırasında metalleri çapraz
                    kirletmeyin. 20 yıllık saha tecrübemizle bu detayların değer
                    farkı yaratabildiğini biliyoruz.
                  </p>
                )}
              </section>
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-border bg-primary p-6 text-white">
                <h3 className="text-xl font-bold">Hemen Fiyat Alın</h3>
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
                  href={getQuoteWhatsAppUrl({
                    name: "",
                    product: service.title.toLowerCase(),
                  })}
                  className="mt-2 block rounded-lg border-2 border-white px-4 py-3 text-center font-bold text-white transition hover:bg-white hover:text-primary"
                >
                  WhatsApp Talep
                </a>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-bold text-foreground">Diğer Hurda Türleri</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {otherServices.map((s) => (
                    <li key={s.id}>
                      <Link
                        href={`/hizmetler/${s.id}`}
                        className="text-muted hover:text-accent"
                      >
                        → {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          <section className="mt-16">
            <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
              Sık Sorulan Sorular
            </h2>
            <div className="space-y-4">
              {relatedFaqs.slice(0, 4).map((faq) => (
                <details
                  key={faq.id}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <summary className="cursor-pointer font-bold text-foreground">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-muted leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
            <Link
              href="/sss"
              className="mt-6 inline-flex items-center text-sm font-semibold text-accent"
            >
              Tüm soruları gör →
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
