import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { pages } from "@/data/pages";
import { siteConfig } from "@/data/site";
import { contact } from "@/data/contact";
import { services, servicesSection } from "@/data/services";
import { bolgeler } from "@/data/bolgeler";
import { articles } from "@/data/articles";
import { pricing, pricingMeta } from "@/data/pricing";
import { faqs, type FaqItem } from "@/data/faq";
import { founder } from "@/data/founder";

export const metadata = createMetadata({
  title: pages.home.title,
  description: pages.home.description,
  path: "/",
});

/**
 * Schema.org JSON-LD: WebPage (home) + ItemList of services
 *
 * Note: Organization, WebSite, Person are root-level (in layout.tsx).
 * Home page adds page-specific WebPage + service ItemList for richer SERP.
 */
const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteConfig.url}/#webpage`,
  url: siteConfig.url,
  name: pages.home.title,
  description: pages.home.description,
  isPartOf: { "@id": `${siteConfig.url}/#website` },
  about: { "@id": `${siteConfig.url}/#organization` },
  inLanguage: "tr-TR",
};

const servicesItemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteConfig.url}/#service-list`,
  name: servicesSection.title,
  description: servicesSection.subtitle,
  numberOfItems: services.length,
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${siteConfig.url}/hizmetler/${service.id}`,
    name: service.title,
  })),
};

// Top 3 FAQ for home page (sitewide trust signal)
const homeFaqs: FaqItem[] = faqs.slice(0, 6);
const homeFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${siteConfig.url}/#home-faq`,
  mainEntity: homeFaqs.map((q: FaqItem) => ({
    "@type": "Question",
    name: q.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: q.answer,
    },
  })),
};

// Top 3 blog teasers
const featuredArticles = articles.slice(0, 3);

// Top 5 pricing rows for home preview
const featuredPricing = pricing.slice(0, 5);

// 5 personas — Sprint 1A research
const personas = [
  {
    title: "Ev Tadılatı / Eşya Yenilemesi",
    description:
      "Eski boyler, klima, beyaz eşya, bakır kablo söküntüsü, alüminyum doğrama. Adresten alım, kgıyla tartım, anında nakit.",
    icon: "🏠",
  },
  {
    title: "Sanayi Atölyesi / Üretim Tesisi",
    description:
      "Aylık biriken metal hurda — talaş, sac fire, kablo artığı, elektronik döküntü. Düzenli alım sözleşmesi + UATF + fatura.",
    icon: "🏭",
  },
  {
    title: "İnşaat Şantiyesi / Söküm İşi",
    description:
      "Proje sonu enkaz, demir hurda, paslı sac, alüminyum profil. Toplu alım, lisanslı taşıma, çevre dostu bertaraf.",
    icon: "🏗️",
  },
  {
    title: "Elektrik / Tesisat Esnafı",
    description:
      "Haftalık birikinti — bakır kablo, motor sargısı, panel demonte. Hızlı alım, kg üzeri ödeme, sürekli müşteri kontuğu.",
    icon: "⚡",
  },
  {
    title: "Çevre Bilinçli Bireyler",
    description:
      "Profesyonel firma + lisans + KVKK uyumu + UATF dokümantasyonu. Geri dönüşüm sertifikası talep edenler için ideal.",
    icon: "♻️",
  },
];

// Trust signals row
const trustSignals = [
  { label: "Yıllık Tecrübe", value: "20+", description: "2005'ten beri Gebze" },
  { label: "Hizmet Bölgesi", value: "11", description: "Gebze + ilçeler + İstanbul yakası" },
  { label: "Metal Kategori", value: "10", description: "Bakırdan çinkoya tam kapsam" },
  { label: "Anında Ödeme", value: "100%", description: "Tartım sonrası nakit / havale" },
];

// 4-step process
const processSteps = [
  {
    step: "1",
    title: "Telefon / WhatsApp",
    description: "Hurdanızın türü, miktarı ve adresi için kısa bilgi alıyoruz. Aynı gün veya ertesi gün için randevu netleşir.",
  },
  {
    step: "2",
    title: "Adresten Profesyonel Alım",
    description: "Lisanslı aracımızla geliyoruz. Hurda yüklenir, kalite ayrımı yapılır, gerekirse XRF analizi ile sınıf tespiti yapılır.",
  },
  {
    step: "3",
    title: "Şeffaf Tartım + LME Bazlı Fiyat",
    description: "Kalibre tartı önünüzde tartım yapar. LME endeks + güncel kur + kategori bazlı fiyat — saniyeler içinde net değer açıklanır.",
  },
  {
    step: "4",
    title: "Anında Ödeme + UATF Belgesi",
    description: "Nakit veya banka havalesi (tercih size). Tehlikesiz atık taşıma için UATF (Ulusal Atık Taşıma Formu) düzenleniyor.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesItemListJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }}
      />

      {/* 1. Hero Section */}
      <section className="relative flex min-h-[80vh] items-center bg-primary-dark md:min-h-screen">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-95" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 pb-24 md:px-8 md:pt-20">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent backdrop-blur-md md:mb-6 md:text-xs">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              {siteConfig.slogan}
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-white md:mb-6 md:text-7xl">
              {pages.home.heroTitle}
              <br />
              <span className="text-accent">Akar Hurda</span>
            </h1>
            <p className="mb-7 max-w-2xl text-base font-light leading-relaxed text-gray-300 md:mb-8 md:text-xl">
              {pages.home.heroSubtitle}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href={contact.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-accent-hover sm:px-8 sm:py-4 sm:text-base"
              >
                {contact.labels.callNow}: {contact.phone}
              </Link>
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 sm:px-8 sm:py-4 sm:text-base"
              >
                WhatsApp ile Yaz
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Signal Strip */}
      <section className="border-y border-gray-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {trustSignals.map((signal) => (
              <div key={signal.label} className="text-center">
                <div className="text-4xl font-bold text-accent md:text-5xl">{signal.value}</div>
                <div className="mt-2 text-sm font-bold text-primary-dark uppercase tracking-wider">
                  {signal.label}
                </div>
                <div className="mt-1 text-xs text-secondary">{signal.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Intro / Brand Story */}
      <section className="bg-light py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <div className="text-center">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-accent">
              Akar Hurda Hakkında
            </span>
            <h2 className="mb-6 text-3xl font-bold text-primary-dark md:text-4xl">
              Gebze ve Kocaeli&apos;nin 20 Yıllık Hurda Adresi
            </h2>
            <p className="mb-5 text-base leading-relaxed text-secondary md:text-lg">
              Akar Hurda, 2005&apos;ten bu yana Gebze merkezli, Kocaeli ve İstanbul yakası
              boyunca hurda metal alımı yapan lisanslı bir işletmedir. Atık Taşıma Lisansı,
              Çevre İzni ve KOSANO sanayi odası kaydı ile çalışıyoruz — adresten profesyonel
              alım, kalibre tartı ile şeffaf ölçüm, LME endeksine bağlı güncel fiyatlandırma
              ve tartım sonrası anında nakit veya banka havalesi ile ödeme yapıyoruz.
            </p>
            <p className="text-base leading-relaxed text-secondary md:text-lg">
              10 ana metal kategorisinde — bakır, alüminyum, demir, kablo, elektronik,
              endüstriyel hurda, akü, paslanmaz/krom, pirinç/bronz ve çinko — kategori bazlı
              fiyatlandırma yapıyoruz. Her hurda türü için ISRI uluslararası sınıflandırma
              standardına uygun ayrım ve gerektiğinde XRF analizi ile saflık tespiti
              uyguluyoruz. Kurumsal müşterilerimize UATF (Ulusal Atık Taşıma Formu) ve resmi
              fatura ile yasal dokümantasyon sağlıyoruz.
            </p>
            <div className="mt-8">
              <Link
                href="/hakkimizda"
                className="inline-flex items-center gap-2 text-sm font-bold text-accent transition-colors hover:text-accent-hover"
              >
                Hakkımızda detaylı bilgi →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Grid (10 silo) */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12 text-center md:mb-16">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-accent">
              {servicesSection.sectionLabel}
            </span>
            <h2 className="mb-4 text-3xl font-bold text-primary-dark md:text-5xl">
              {servicesSection.title}
            </h2>
            <p className="mx-auto max-w-2xl text-base text-secondary md:text-lg">
              {servicesSection.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/hizmetler/${service.id}`}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-accent hover:shadow-lg"
              >
                <h3 className="mb-2 text-lg font-bold text-primary-dark group-hover:text-accent">
                  {service.title}
                </h3>
                <p className="text-sm text-secondary">{service.shortDescription}</p>
                <div className="mt-4 text-xs font-bold uppercase tracking-wider text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  Detaylı Bilgi →
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/hizmetler"
              className="inline-flex items-center justify-center rounded-lg border-2 border-primary-dark bg-white px-8 py-4 text-base font-bold text-primary-dark transition-all hover:bg-primary-dark hover:text-white"
            >
              Tüm Hizmetleri Keşfet
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Information Gain — Akar Hurda Farkı */}
      <section className="bg-primary-dark py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12 text-center md:mb-16">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-accent">
              Profesyonel Yaklaşım
            </span>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
              Akar Hurda Farkı — Sektörde Şeffaflık
            </h2>
            <p className="mx-auto max-w-3xl text-base text-gray-300 md:text-lg">
              Hurda alımı sektöründe en büyük müşteri kaygısı &quot;adil tartım ve doğru
              fiyat&quot;. Biz dört profesyonel uygulamayla bu kaygıyı ortadan kaldırıyoruz.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <div className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">
                01 — LME Endeks Bazlı Fiyatlandırma
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">
                Dünya Borsası Referansı
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-300">
                Bakır, alüminyum, çinko ve kurşun için London Metal Exchange (LME) günlük
                spot fiyatını referans alıyoruz. USD/TL kuru + işlem maliyeti + operasyonel
                marj formülü ile şeffaf hesap. Hurda alış fiyatınız &quot;hava&quot;dan
                belirlenmiyor — uluslararası borsadan.
              </p>
              <Link
                href="/blog/lme-endeksi-hurda-fiyat-iliski-rehberi"
                className="text-sm font-bold text-accent hover:text-accent-light"
              >
                LME Endeksi Rehberi →
              </Link>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <div className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">
                02 — ISRI Sınıflandırma Standardı
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">
                1A / 2A / Berry / Birch Disiplini
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-300">
                Bakır hurdanız 1A (saf, parlak) mı yoksa 2A (oksitli, lehimli) mi? Berry
                (kalın kablo) mı Birch (ince kablo) mı? Uluslararası ISRI standardına göre
                ayırım yapıyor, %80-95 fiyat farkını şeffaf gösteriyoruz. İstediğinizde
                sınıflandırmaya birlikte tanık oluyorsunuz.
              </p>
              <Link
                href="/blog/bakir-1a-2a-berry-birch-siniflandirma-rehberi"
                className="text-sm font-bold text-accent hover:text-accent-light"
              >
                ISRI Sınıflandırma Rehberi →
              </Link>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <div className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">
                03 — XRF Analiz Cihazı
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">
                Saniyeler İçinde Saflık Tespiti
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-300">
                Şüpheli alaşım, kaplama altında kalmış metal, &quot;bu nikel mi paslanmaz
                mı?&quot; sorularına XRF (X-Ray Florescence) cihazı saniyeler içinde net
                cevap veriyor. Müşteri ile tartışma değil, bilim ile karar — kategoriye
                göre adil fiyat.
              </p>
              <Link
                href="/blog/hurda-aluminyum-nasil-ayirt-edilir"
                className="text-sm font-bold text-accent hover:text-accent-light"
              >
                Metal Tanımlama Rehberi →
              </Link>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <div className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">
                04 — Yasal Çerçeve + UATF
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">
                Lisanslı Taşıma + Resmi Belge
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-300">
                Atık Taşıma Lisansı + Çevre İzni + KOSANO kaydı ile çalışıyoruz. Tehlikesiz
                atık taşıması için UATF (Ulusal Atık Taşıma Formu) düzenliyor, B2B
                müşterilerimize KDV&apos;li resmi fatura ve resmi makamların talep
                edebileceği tüm dokümantasyonu sağlıyoruz.
              </p>
              <Link
                href="/blog/atik-tasima-lisansi-zorunluluklari-2026"
                className="text-sm font-bold text-accent hover:text-accent-light"
              >
                Yasal Çerçeve Rehberi →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Process — 4 Steps */}
      <section className="bg-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12 text-center md:mb-16">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-accent">
              4 Adımda Hurda Alımı
            </span>
            <h2 className="mb-4 text-3xl font-bold text-primary-dark md:text-5xl">
              Telefondan Ödemeye — Net Süreç
            </h2>
            <p className="mx-auto max-w-2xl text-base text-secondary md:text-lg">
              Hurdanızı paraya dönüştürmek için karmaşık prosedür yok. Telefon edin, biz
              gelelim, tartım yapalım, ödemeyi alın.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="relative rounded-xl border-2 border-gray-200 bg-white p-6 transition-all hover:border-accent"
              >
                <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-xl font-bold text-white shadow-lg">
                  {step.step}
                </div>
                <h3 className="mb-3 mt-4 text-lg font-bold text-primary-dark">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-secondary">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Personas — Kimler İçin? */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12 text-center md:mb-16">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-accent">
              Müşteri Profilleri
            </span>
            <h2 className="mb-4 text-3xl font-bold text-primary-dark md:text-5xl">
              Akar Hurda Kimler İçin?
            </h2>
            <p className="mx-auto max-w-2xl text-base text-secondary md:text-lg">
              Bireysel ev tadılatından sanayi tesisine, inşaat şantiyesinden elektrik
              esnafına — beş ana müşteri profilimiz var.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {personas.map((persona) => (
              <div
                key={persona.title}
                className="rounded-xl border border-gray-200 bg-light p-6 transition-all hover:border-accent hover:shadow-md"
              >
                <div className="mb-3 text-4xl">{persona.icon}</div>
                <h3 className="mb-3 text-lg font-bold text-primary-dark">{persona.title}</h3>
                <p className="text-sm leading-relaxed text-secondary">
                  {persona.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Hizmet Bölgeleri */}
      <section className="bg-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12 text-center md:mb-16">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-accent">
              Hizmet Bölgelerimiz
            </span>
            <h2 className="mb-4 text-3xl font-bold text-primary-dark md:text-5xl">
              Gebze + Kocaeli + İstanbul Anadolu Yakası
            </h2>
            <p className="mx-auto max-w-2xl text-base text-secondary md:text-lg">
              Gebze merkezimizden 7 ilçeye adresten alım. Mesafe ve trafik durumuna göre
              aynı gün veya ertesi gün randevu.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-7">
            {bolgeler.map((bolge) => (
              <Link
                key={bolge.slug}
                href={`/hizmet-bolgeleri/${bolge.slug}`}
                className="group rounded-lg border border-gray-200 bg-white px-4 py-5 text-center transition-all hover:border-accent hover:bg-accent hover:text-white"
              >
                <div className="text-base font-bold text-primary-dark group-hover:text-white">
                  {bolge.name}
                </div>
                <div className="mt-1 text-xs text-secondary group-hover:text-white/80">
                  Hurdacı
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Pricing Preview */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="mb-12 text-center md:mb-16">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-accent">
              Şeffaf Fiyat Tablosu
            </span>
            <h2 className="mb-4 text-3xl font-bold text-primary-dark md:text-5xl">
              Bu Haftanın Hurda Fiyatları
            </h2>
            <p className="mx-auto max-w-2xl text-base text-secondary md:text-lg">
              Her Pazartesi LME endeksine göre güncellenir. Son güncelleme:{" "}
              <strong>{pricingMeta.lastUpdated}</strong>. Detaylı kategori fiyatları için
              fiyat sayfamızı ziyaret edin.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full">
              <thead className="bg-primary-dark text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-bold uppercase tracking-wider">
                    Metal
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-bold uppercase tracking-wider">
                    Kategori
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-bold uppercase tracking-wider">
                    Fiyat (TL/kg)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {featuredPricing.map((row, i) => (
                  <tr key={i} className="hover:bg-light">
                    <td className="px-4 py-3 text-sm font-bold text-primary-dark">
                      {row.metal}
                    </td>
                    <td className="px-4 py-3 text-sm text-secondary">{row.category}</td>
                    <td className="px-4 py-3 text-right text-sm font-bold text-accent">
                      {row.priceMin} - {row.priceMax} TL
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/hurda-fiyatlari"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-bold text-white transition-all hover:bg-accent-hover"
            >
              Tam Fiyat Tablosunu Gör
            </Link>
          </div>
          <p className="mt-4 text-center text-xs text-secondary">
            Fiyatlar günlük dalgalanır. Net teklif için telefon veya WhatsApp ile iletişime geçin.
          </p>
        </div>
      </section>

      {/* 10. Blog Preview */}
      <section className="bg-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12 text-center md:mb-16">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-accent">
              Hurda Rehberi
            </span>
            <h2 className="mb-4 text-3xl font-bold text-primary-dark md:text-5xl">
              Sektör Bilgisi ve Rehberler
            </h2>
            <p className="mx-auto max-w-2xl text-base text-secondary md:text-lg">
              Hurda fiyatlarınızı doğru anlamak için sektör jargonu, yasal çerçeve ve
              değerlendirme rehberleri.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-accent hover:shadow-lg"
              >
                <div className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">
                  {article.category}
                </div>
                <h3 className="mb-3 text-lg font-bold text-primary-dark group-hover:text-accent">
                  {article.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-secondary">
                  {article.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between text-xs text-secondary">
                  <span>{article.readingTime} dk okuma</span>
                  <span className="font-bold text-accent group-hover:text-accent-hover">
                    Devamı →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-accent transition-colors hover:text-accent-hover"
            >
              Tüm Yazılar →
            </Link>
          </div>
        </div>
      </section>

      {/* 11. FAQ Preview */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <div className="mb-12 text-center md:mb-16">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-accent">
              Sık Sorulan Sorular
            </span>
            <h2 className="mb-4 text-3xl font-bold text-primary-dark md:text-5xl">
              Akar Hurda&apos;ya Sıkça Sorulanlar
            </h2>
            <p className="mx-auto max-w-2xl text-base text-secondary md:text-lg">
              İşleyişimiz, fiyatlandırmamız ve hizmet süreçlerimiz hakkında en çok merak
              edilenler.
            </p>
          </div>
          <div className="space-y-4">
            {homeFaqs.map((q: FaqItem, i: number) => (
              <details
                key={i}
                className="group rounded-xl border border-gray-200 bg-light p-6 transition-all hover:border-accent"
              >
                <summary className="cursor-pointer text-base font-bold text-primary-dark md:text-lg">
                  {q.question}
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-secondary md:text-base">
                  {q.answer}
                </p>
              </details>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/sss"
              className="inline-flex items-center gap-2 text-sm font-bold text-accent transition-colors hover:text-accent-hover"
            >
              Tüm Sorular →
            </Link>
          </div>
        </div>
      </section>

      {/* 12. Final CTA */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            {servicesSection.cta.title}
          </h2>
          <p className="mb-8 text-base text-gray-300 md:text-lg">
            {servicesSection.cta.subtitle}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href={contact.phoneHref}
              className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-bold text-white transition-all hover:bg-accent-hover"
            >
              {contact.phone}
            </Link>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-whatsapp px-8 py-4 text-base font-bold text-white transition-all hover:bg-whatsapp-hover"
            >
              WhatsApp
            </a>
            <Link
              href="/teklif-al"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition-all hover:bg-white/10"
            >
              Teklif Al
            </Link>
          </div>
          <p className="mt-6 text-xs text-gray-400">
            Pazartesi - Cumartesi 08:00 - 19:00 arası — Adresten alım için 1 saat öncesinden
            arayın.
          </p>
        </div>
      </section>
    </>
  );
}
