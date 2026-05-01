import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { pages } from "@/data/pages";
import { contact } from "@/data/contact";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

const meta = pages["hurda-turleri"];

export const metadata: Metadata = createMetadata({
  title: meta.title,
  description: meta.description,
  path: "/hurda-turleri",
});

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Ana Sayfa",
      item: siteConfig.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Hurda Türleri",
      item: `${siteConfig.url}/hurda-turleri`,
    },
  ],
};

export default function HurdaTurleriPage() {
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
            <span className="text-foreground">Hurda Türleri</span>
          </nav>

          <header className="mb-12 max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              {meta.heroTitle}
            </h1>
            <p className="mt-4 text-lg text-muted md:text-xl">
              {meta.heroSubtitle}
            </p>
          </header>

          <section className="mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-xl font-bold text-foreground md:text-2xl">
              10 Kategoride Profesyonel Hurda Alımı
            </h2>
            <p className="mt-3 text-muted leading-relaxed">
              Akar Hurda olarak 20 yıllık tecrübemizle bakırdan çinkoya, kablodan
              elektroniğe kadar 10 ana kategoride hurda metal alımı yapıyoruz.
              Her kategori kendi alt sınıflarına ayrılarak (örn. bakırda 1A/2A,
              alüminyumda profil/döküm/jant) değerinde fiyatlandırılır. Adresten
              alım, lisanslı taşıma ve anında ödeme ile süreç şeffaftır.
            </p>
          </section>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/hurda-turleri/${service.id}`}
                className="group rounded-xl border border-border bg-card p-6 transition hover:border-accent hover:shadow-lg"
              >
                <h2 className="text-xl font-bold text-foreground group-hover:text-accent">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm text-muted">
                  {service.shortDescription}
                </p>
                <ul className="mt-4 space-y-1 text-sm text-muted">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 inline-flex items-center text-sm font-semibold text-accent">
                  Detayları gör →
                </div>
              </Link>
            ))}
          </div>

          <section className="mt-16 rounded-2xl border border-border bg-primary p-8 text-white md:p-12">
            <h2 className="text-2xl font-extrabold md:text-3xl">
              Hurdanız İçin Anında Fiyat Alın
            </h2>
            <p className="mt-3 text-white/90 md:text-lg">
              20 yıllık tecrübemizle adresten ücretsiz alım, dürüst tartım ve
              anında ödeme.
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
