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
import Hero3D from "@/components/hero/Hero3D";

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

      {/* 1. Hero Section — Premium Full-Bleed 3D Background (Linear/Anthropic style) */}
      <section className="relative isolate min-h-[100vh] overflow-hidden bg-[#08090d]">
        {/* Layer 1: Conic gradient mesh (premium ambient) */}
        <div
          className="absolute inset-0 z-0 opacity-70"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 75% 30%, rgba(194,65,12,0.25), transparent 65%),
              radial-gradient(ellipse 60% 50% at 20% 80%, rgba(59,130,246,0.10), transparent 60%),
              conic-gradient(from 220deg at 50% 50%, #0a0a0d 0deg, #1e293b 90deg, #0f172a 180deg, #0a0a0d 270deg, #0a0a0d 360deg)
            `,
          }}
          aria-hidden="true"
        />

        {/* Layer 2: Subtle grid pattern (Linear.app inspired) */}
        <div
          className="absolute inset-0 z-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 80%)",
          }}
          aria-hidden="true"
        />

        {/* Layer 3: 3D Canvas — full bleed background (md+ only) */}
        <div
          className="absolute inset-0 z-0 hidden md:block"
          style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)" }}
          aria-hidden="true"
        >
          <Hero3D />
        </div>

        {/* Layer 4: Dark vignette + content readability overlay */}
        <div
          className="absolute inset-0 z-0 bg-gradient-to-r from-[#08090d] via-[#08090d]/60 to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 z-0 bg-gradient-to-t from-[#08090d] via-transparent to-transparent"
          aria-hidden="true"
        />

        {/* Layer 5: Content */}
        <div className="relative z-10 mx-auto flex min-h-[100vh] w-full max-w-7xl flex-col justify-center px-5 pt-28 pb-32 md:px-8 md:pt-32 md:pb-20">
          <div className="max-w-4xl">
            {/* Eyebrow badge */}
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-orange-300 backdrop-blur-xl md:text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
              </span>
              <span>Gebze · Kocaeli · 20 Yıllık Güven</span>
            </div>

            {/* Massive H1 with gradient highlight */}
            <h1 className="mb-8 text-[42px] font-black leading-[1.02] tracking-tight text-white md:text-7xl lg:text-[88px]">
              <span className="block">Hurdanın</span>
              <span className="block">Gerçek Değeri</span>
              <span className="mt-2 block bg-gradient-to-r from-amber-400 via-orange-500 to-orange-700 bg-clip-text text-transparent">
                Akar Hurda&apos;da.
              </span>
            </h1>

            {/* Subtitle with enhanced typography */}
            <p className="mb-10 max-w-2xl text-lg font-light leading-relaxed text-gray-300 md:text-2xl md:leading-snug">
              <span className="text-white font-medium">LME endeksli şeffaf fiyat.</span>{" "}
              Adresten profesyonel alım. Tartım sonrası anında ödeme. 10 metal kategorisinde
              Gebze ve Kocaeli&apos;nin 20 yıllık güvenilir adresi.
            </p>

            {/* Premium CTA group */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              {/* Primary — solid orange with glow */}
              <Link
                href={contact.phoneHref}
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 px-7 py-4 text-base font-bold text-white shadow-[0_0_40px_rgba(234,88,12,0.3)] ring-1 ring-orange-400/30 transition-all hover:shadow-[0_0_60px_rgba(234,88,12,0.5)] hover:scale-[1.02] sm:px-9 sm:py-5"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="relative">Hemen Ara: {contact.phone}</span>
              </Link>

              {/* Secondary — glass morphism with WhatsApp green */}
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur-xl transition-all hover:border-white/30 hover:bg-white/10 sm:px-9 sm:py-5"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487 2.981 1.286 2.981.858 3.519.806.538-.052 1.758-.718 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884z" />
                </svg>
                <span>WhatsApp ile Yaz</span>
              </a>
            </div>

            {/* Inline trust micro-strip */}
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
              <div className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-orange-500" />
                <span>2005&apos;ten Beri</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-orange-500" />
                <span>Lisanslı &amp; Sigortalı</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-orange-500" />
                <span>UATF Belgeli</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-orange-500" />
                <span>KOSANO Üyesi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 6: Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block">
          <div className="flex flex-col items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-500">
            <span>Aşağı Kaydır</span>
            <div className="h-10 w-[1px] bg-gradient-to-b from-orange-500 to-transparent" />
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
