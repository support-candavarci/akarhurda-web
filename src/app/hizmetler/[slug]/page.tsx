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
    description: `${service.description} 20 yıllık tecrübe, adresten alım, anında ödeme. Gebze ve çevre ilçelerde hizmet.`,
    path: `/hizmetler/${slug}`,
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
            <div className="lg:col-span-2">
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

              {relatedPricing.length > 0 && (
                <section className="mt-8 rounded-2xl border border-border bg-card p-6 md:p-8">
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
              <section className="mt-8 rounded-2xl border-2 border-accent/30 bg-accent/5 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground">
                  Bilmeniz Gerekenler
                </h2>
                <p className="mt-3 text-muted leading-relaxed">
                  {service.title.toLowerCase()} sürecinde hak ettiğiniz fiyatı almak
                  için: (1) Mümkünse hurdanızı kategorilere ayrı tartılması için
                  hazır tutun, (2) Kablo ise plastik kaplı veya soyulmuş olarak
                  ayrımını bilin, (3) Nakliye sırasında metalleri çapraz kirletmeyin
                  (örn. demir parçalarla bakırı bir arada tutmayın). 20 yıllık saha
                  tecrübemizle bu detayların değer farkı yaratabildiğini biliyoruz.
                </p>
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
