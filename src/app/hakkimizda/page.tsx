import type { Metadata } from "next";
import Link from "next/link";
import { pages } from "@/data/pages";
import { founder } from "@/data/founder";
import { licenses } from "@/data/lisanslar";
import { contact } from "@/data/contact";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

const meta = pages.hakkimizda;

export const metadata: Metadata = createMetadata({
  title: meta.title,
  description: meta.description,
  path: "/hakkimizda",
});

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteConfig.url}/#founder`,
  name: founder.name,
  jobTitle: founder.jobTitle,
  worksFor: {
    "@id": `${siteConfig.url}/#organization`,
  },
  description: founder.bio,
};

/**
 * Schema.org JSON-LD: AboutPage
 *
 * mainEntity links to Organization (this is the "about" page for it)
 */
const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${siteConfig.url}/hakkimizda#aboutpage`,
  url: `${siteConfig.url}/hakkimizda`,
  name: meta.title,
  description: meta.description,
  isPartOf: { "@id": `${siteConfig.url}/#website` },
  inLanguage: "tr-TR",
  mainEntity: {
    "@id": `${siteConfig.url}/#organization`,
  },
  about: {
    "@id": `${siteConfig.url}/#organization`,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Hakkımızda", item: `${siteConfig.url}/hakkimizda` },
  ],
};

const milestones = [
  { year: 2005, label: "Akar Hurda kuruluşu — Gebze'de hurda metal alımı başlıyor" },
  { year: 2010, label: "Kocaeli Sanayi Odası (KOSANO) üyeliği" },
  { year: 2015, label: "Lisanslı taşıma + UATF dokümantasyon altyapısı" },
  { year: 2020, label: "Çevre İzni + Atık Taşıma Lisansı yenileme" },
  { year: 2022, label: "ISO 14001 Çevre Yönetim Sistemi sertifikası" },
  { year: 2025, label: "20 yıllık tecrübe — 7 ilçeye adresten alım hizmeti" },
];

export default function HakkimizdaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <main className="min-h-screen bg-background pt-24 pb-16 md:pt-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
            <Link href="/" className="hover:text-primary">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Hakkımızda</span>
          </nav>

          <header className="mb-12 max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">{meta.heroTitle}</h1>
            <p className="mt-4 text-lg text-muted md:text-xl">{meta.heroSubtitle}</p>
          </header>

          <section className="mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-foreground">Akar Hurda Hikayemiz</h2>
            <p className="mt-4 text-muted leading-relaxed">
              2005 yılında Gebze'de kurulan Akar Hurda, başlangıçta küçük ölçekli ev hurdası alımıyla
              başladı. 20 yıllık süreçte sanayi tesisleri, atölyeler ve inşaat şantiyelerine
              hizmet veren, lisanslı taşıma ve şeffaf fiyatlandırma ile tanınan bir bölgesel marka
              haline geldi. Bugün Gebze, Darıca, Çayırova, Dilovası, Pendik, Tuzla ve Kocaeli
              genelinde adresten alım hizmeti sunuyoruz.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              <strong>Misyonumuz:</strong> Hurda metalin gerçek değerini şeffaf şekilde sahibine
              ulaştırmak. Tartım göz önünde, sınıflandırma şeffaf, ödeme anında. 20 yıldır
              değişmeyen bu prensiplerle binlerce müşteriye güvenilir bir adres olduk.
            </p>
          </section>

          <section className="mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-foreground">{founder.yearsExperience} Yıllık Yolculuk</h2>
            <ol className="mt-6 space-y-4">
              {milestones.map((m) => (
                <li key={m.year} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-accent font-extrabold text-primary">
                    {m.year}
                  </div>
                  <div className="pt-2 text-muted">{m.label}</div>
                </li>
              ))}
            </ol>
          </section>

          <section className="mb-12 rounded-2xl border-2 border-accent/30 bg-accent/5 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-foreground">Yasal Belgeler ve Sertifikalar</h2>
            <p className="mt-3 text-muted">
              {licenses.length} resmi belge ile yasal, şeffaf ve denetlenebilir hizmet veriyoruz.
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {licenses.slice(0, 6).map((lic) => (
                <li key={lic.id} className="flex items-start gap-2 text-sm text-muted">
                  <span className="text-accent">✓</span>
                  <span>
                    <strong className="text-foreground">{lic.name}</strong> — {lic.issuer}
                  </span>
                </li>
              ))}
            </ul>
            <Link href="/sertifikalar" className="mt-6 inline-flex items-center font-semibold text-accent">
              Tüm sertifikaları gör →
            </Link>
          </section>

          <section className="rounded-2xl border border-border bg-primary p-8 text-white md:p-12">
            <h2 className="text-2xl font-extrabold md:text-3xl">Bizimle Çalışın</h2>
            <p className="mt-3 text-white/90 md:text-lg">
              20 yıllık tecrübenin getirdiği güvenle hurda alımınızı yapın.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={contact.phoneHref} className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 font-bold text-primary transition hover:bg-accent-light">
                {contact.phone}
              </a>
              <a href={contact.whatsappUrl} className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-bold text-white transition hover:bg-white hover:text-primary">
                WhatsApp Talep
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
