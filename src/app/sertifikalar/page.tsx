import type { Metadata } from "next";
import Link from "next/link";
import { licenses, licensesPageMeta } from "@/data/lisanslar";
import { contact } from "@/data/contact";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: licensesPageMeta.title,
  description: licensesPageMeta.description,
  path: "/sertifikalar",
});

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Sertifikalar", item: `${siteConfig.url}/sertifikalar` },
  ],
};

export default function SertifikalarPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <main className="min-h-screen bg-background pt-24 pb-16 md:pt-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
            <Link href="/" className="hover:text-primary">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Sertifikalar</span>
          </nav>

          <header className="mb-12 max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">{licensesPageMeta.heroTitle}</h1>
            <p className="mt-4 text-lg text-muted md:text-xl">{licensesPageMeta.heroSubtitle}</p>
          </header>

          <section className="mb-8 rounded-2xl border-2 border-accent/30 bg-accent/5 p-6 md:p-8">
            <h2 className="text-xl font-bold text-foreground">Lisanslı Hurdacının Önemi</h2>
            <p className="mt-3 text-muted leading-relaxed">
              Atık Yönetimi Yönetmeliği (29314 sayılı, 2/4/2015) gereği hurda alımı yapan
              firmaların lisanslı olması zorunludur. Lisanssız bir hurdacıya verdiğiniz hurdadan
              kaynak olarak siz de yasal sorumluluk altına girersiniz. Tüm yasal belgelerimizi
              aşağıda şeffaf şekilde paylaşıyoruz.
            </p>
            <Link href="/blog/atik-tasima-lisansi-zorunluluklari-2026" className="mt-3 inline-flex items-center text-sm font-semibold text-accent">
              Detaylı blog yazısı →
            </Link>
          </section>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {licenses.map((lic) => (
              <article key={lic.id} className="rounded-xl border border-border bg-card p-6">
                <div className="mb-3 flex items-start justify-between gap-2">
                  <h2 className="text-lg font-bold text-foreground">{lic.name}</h2>
                  {!lic.verified && (
                    <span className="rounded-full bg-muted/20 px-2 py-1 text-[10px] font-bold uppercase text-muted">
                      Doğrulama Sürecinde
                    </span>
                  )}
                </div>
                <div className="text-xs uppercase tracking-wide text-accent">{lic.issuer}</div>
                <div className="mt-1 text-xs text-muted">
                  {lic.issuedYear}
                  {lic.expiryYear ? ` — ${lic.expiryYear}` : ""}
                </div>
                <p className="mt-3 text-sm text-muted leading-relaxed">{lic.description}</p>
              </article>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-muted">
            * Sertifika görselleri yasal süreç tamamlandığında orijinal taramalarla güncellenecektir.
          </p>

          <section className="mt-12 rounded-2xl border border-border bg-primary p-8 text-white md:p-12">
            <h2 className="text-2xl font-extrabold md:text-3xl">Şeffaf, Güvenilir, Yasal</h2>
            <p className="mt-3 text-white/90 md:text-lg">
              20 yıllık tecrübenin getirdiği yasal güvenle çalışın.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={contact.phoneHref} className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 font-bold text-primary transition hover:bg-accent-light">{contact.phone}</a>
              <a href={contact.whatsappUrl} className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-bold text-white transition hover:bg-white hover:text-primary">WhatsApp Talep</a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
