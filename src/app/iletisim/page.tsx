import type { Metadata } from "next";
import Link from "next/link";
import { pages } from "@/data/pages";
import { contact } from "@/data/contact";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

const meta = pages.iletisim;

export const metadata: Metadata = createMetadata({
  title: meta.title,
  description: meta.description,
  path: "/iletisim",
});

const contactPointJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPoint",
  "@id": `${siteConfig.url}/iletisim#contactpoint`,
  telephone: contact.phoneHref.replace("tel:", ""),
  email: contact.email,
  contactType: "customer service",
  areaServed: "TR",
  availableLanguage: ["Turkish"],
};

/**
 * Schema.org JSON-LD: ContactPage
 */
const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${siteConfig.url}/iletisim#contactpage`,
  url: `${siteConfig.url}/iletisim`,
  name: meta.title,
  description: meta.description,
  isPartOf: { "@id": `${siteConfig.url}/#website` },
  about: { "@id": `${siteConfig.url}/#organization` },
  inLanguage: "tr-TR",
  mainEntity: {
    "@id": `${siteConfig.url}/#organization`,
  },
};

/**
 * Schema.org JSON-LD: Place (Akar Hurda physical location)
 */
const placeJsonLd = {
  "@context": "https://schema.org",
  "@type": "Place",
  "@id": `${siteConfig.url}/iletisim#place`,
  name: `${siteConfig.name} — ${contact.address.district}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.address.street,
    addressLocality: contact.address.district,
    addressRegion: contact.address.city,
    postalCode: contact.address.postalCode,
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: contact.geo.lat,
    longitude: contact.geo.lng,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "İletişim", item: `${siteConfig.url}/iletisim` },
  ],
};

export default function IletisimPage() {
  const mapsQuery = encodeURIComponent(contact.address.full);
  const mapsEmbed = `https://maps.google.com/maps?q=${mapsQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPointJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(placeJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <main className="min-h-screen bg-background pt-24 pb-16 md:pt-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
            <Link href="/" className="hover:text-primary">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">İletişim</span>
          </nav>

          <header className="mb-12 max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">{meta.heroTitle}</h1>
            <p className="mt-4 text-lg text-muted md:text-xl">{meta.heroSubtitle}</p>
          </header>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-1">
              <a href={contact.phoneHref} className="block rounded-xl border border-border bg-card p-6 transition hover:border-accent">
                <div className="text-xs font-bold uppercase text-accent">Telefon</div>
                <div className="mt-1 text-2xl font-extrabold text-foreground">{contact.phone}</div>
                <div className="mt-1 text-sm text-muted">7/24 ulaşılabilir</div>
              </a>

              <a href={contact.whatsappUrl} className="block rounded-xl border border-border bg-card p-6 transition hover:border-accent">
                <div className="text-xs font-bold uppercase text-accent">WhatsApp</div>
                <div className="mt-1 text-2xl font-extrabold text-foreground">{contact.phone}</div>
                <div className="mt-1 text-sm text-muted">Hızlı yanıt için</div>
              </a>

              <a href={`mailto:${contact.email}`} className="block rounded-xl border border-border bg-card p-6 transition hover:border-accent">
                <div className="text-xs font-bold uppercase text-accent">E-posta</div>
                <div className="mt-1 text-lg font-bold text-foreground break-all">{contact.email}</div>
              </a>

              <div className="rounded-xl border border-border bg-card p-6">
                <div className="text-xs font-bold uppercase text-accent">Adres</div>
                <p className="mt-2 text-sm text-foreground leading-relaxed">{contact.address.full}</p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <div className="text-xs font-bold uppercase text-accent">Çalışma Saatleri</div>
                <p className="mt-2 text-sm text-foreground">{contact.workingHours}</p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                <iframe
                  src={mapsEmbed}
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Akar Hurda — Konum"
                  allowFullScreen
                />
              </div>
              <p className="mt-4 text-sm text-muted">
                Gebze Balçık Mahallesi'nde merkez tesisimize gelmek için yukarıdaki haritayı kullanabilir
                veya doğrudan{" "}
                <a href={contact.phoneHref} className="font-bold text-accent">{contact.phone}</a>{" "}
                numarasını arayarak adresten alım randevusu alabilirsiniz.
              </p>
            </div>
          </div>

          <section className="mt-16 rounded-2xl border-2 border-accent/30 bg-accent/5 p-8 md:p-12">
            <h2 className="text-2xl font-extrabold text-foreground md:text-3xl">Detaylı Teklif İçin</h2>
            <p className="mt-3 text-muted md:text-lg">
              Hurdanızı detaylı tanımlayıp fotoğraflarla birlikte teklif almak için teklif formumuzu kullanın.
            </p>
            <Link href="/teklif-al" className="mt-6 inline-flex items-center rounded-lg bg-accent px-6 py-3 font-bold text-primary transition hover:bg-accent-light">
              Teklif Al →
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
