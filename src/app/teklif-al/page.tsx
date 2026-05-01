import type { Metadata } from "next";
import Link from "next/link";
import { contact } from "@/data/contact";
import { siteConfig } from "@/data/site";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Teklif Al | Akar Hurda — Hurda Metaliniz İçin Detaylı Fiyat",
  description:
    "Hurdanızı detaylı tanımlayıp WhatsApp veya telefon üzerinden anında teklif alın. Adresten alım, ücretsiz keşif, anında ödeme.",
  path: "/teklif-al",
});

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Teklif Al", item: `${siteConfig.url}/teklif-al` },
  ],
};

export default function TeklifAlPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <main className="min-h-screen bg-background pt-24 pb-16 md:pt-32">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
            <Link href="/" className="hover:text-primary">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Teklif Al</span>
          </nav>

          <header className="mb-10 max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              Hurdanız İçin Teklif Alın
            </h1>
            <p className="mt-4 text-lg text-muted md:text-xl">
              20 yıllık tecrübemizle adresten alım, ücretsiz keşif, anında ödeme.
              Aşağıdaki adımları izleyerek hızla teklifinizi alabilirsiniz.
            </p>
          </header>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-xl font-extrabold text-primary">1</div>
              <h2 className="mt-4 text-lg font-bold text-foreground">Hurdanızı Hazırlayın</h2>
              <p className="mt-2 text-sm text-muted">
                Yaklaşık miktar (kg/adet), metal türü ve fotoğraf hazırlayın. Mümkünse kategorilere
                ayrılmış halde tutun.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-xl font-extrabold text-primary">2</div>
              <h2 className="mt-4 text-lg font-bold text-foreground">Bizimle İletişime Geçin</h2>
              <p className="mt-2 text-sm text-muted">
                WhatsApp en hızlı seçenek (foto/video gönderin). Telefon da kullanılabilir. Mesai
                saatleri 08:00-19:00.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-xl font-extrabold text-primary">3</div>
              <h2 className="mt-4 text-lg font-bold text-foreground">Adresten Alım + Ödeme</h2>
              <p className="mt-2 text-sm text-muted">
                Onaylanmış teklif sonrası 1-3 saatte adresinizdeyiz. Tartım göz önünde, ödeme anında.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-2xl border-2 border-accent bg-accent/5 p-8 md:p-12">
            <h2 className="text-2xl font-extrabold text-foreground md:text-3xl">Hızlı İletişim</h2>
            <p className="mt-3 text-muted">
              Form yerine direkt arayın veya WhatsApp'tan yazın — anında cevap alın.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <a href={contact.phoneHref} className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 font-bold text-white transition hover:bg-primary-light">
                <span className="text-xl">📞</span>
                <span>{contact.phone}</span>
              </a>
              <a href={contact.whatsappUrl} className="flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-4 font-bold text-primary transition hover:bg-accent-light">
                <span className="text-xl">💬</span>
                <span>WhatsApp ile Yaz</span>
              </a>
            </div>
            <p className="mt-4 text-xs text-muted">
              Mesai saatleri içinde ortalama yanıt süresi: 5-15 dk.
            </p>
          </section>

          <section className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-foreground">Hangi Hurda Türü?</h2>
            <p className="mt-2 text-muted">Hurdanızın türünü bulup detaylarını inceleyebilirsiniz.</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {services.map((s) => (
                <Link
                  key={s.id}
                  href={`/hurda-turleri/${s.id}`}
                  className="rounded-lg border border-border p-3 text-sm text-muted transition hover:border-accent hover:text-accent"
                >
                  → {s.title}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
