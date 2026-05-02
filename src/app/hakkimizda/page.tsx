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
  givenName: founder.firstName,
  jobTitle: founder.jobTitle,
  worksFor: {
    "@id": `${siteConfig.url}/#organization`,
  },
  description: founder.bio,
  knowsAbout: [
    "Hurda metal alımı",
    "Bakır hurda sınıflandırma",
    "ISRI standardı",
    "LME endeksi fiyatlandırma",
    "Atık taşıma lisansı",
    "Geri dönüşüm yönetimi",
  ],
  ...(founder.sameAs.length > 0 && { sameAs: founder.sameAs }),
};

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
  about: [
    { "@id": `${siteConfig.url}/#organization` },
    { "@id": `${siteConfig.url}/#founder` },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Hakkımızda", item: `${siteConfig.url}/hakkimizda` },
  ],
};

export default function HakkimizdaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <main className="min-h-screen bg-light pt-24 pb-16 md:pt-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-secondary">
            <Link href="/" className="hover:text-accent">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <span className="text-primary-dark font-medium">Hakkımızda</span>
          </nav>

          {/* Hero */}
          <header className="mb-16 max-w-4xl">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-accent">
              Hakkımızda
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-primary-dark md:text-6xl">
              Akar Hurda — Gebze&apos;nin 20 Yıllık Hurda Adresi
            </h1>
            <p className="mt-6 text-lg text-secondary md:text-xl leading-relaxed">
              Oğuz Aktay&apos;ın 2005&apos;te Gebze&apos;de küçük bir kantar ile başlattığı yolculuk,
              bugün Kocaeli ve İstanbul Anadolu yakasının en güvenilir hurda metal alım adreslerinden
              biri. Şeffaf tartım, LME endeksli adil fiyatlandırma ve adresten profesyonel alım —
              değişmeyen üç prensibimiz.
            </p>
          </header>

          {/* Founder Bio Card */}
          <section
            className="mb-16 grid gap-8 rounded-2xl border border-gray-200 bg-white p-6 md:grid-cols-3 md:p-10"
            aria-labelledby="founder-heading"
          >
            <div className="md:col-span-1">
              {/* Founder photo placeholder — CEO foto verince güncellenecek */}
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gradient-to-br from-orange-100 via-amber-200 to-orange-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-black text-accent/40">OA</div>
                    <div className="mt-2 text-xs font-bold uppercase tracking-widest text-accent">
                      Kurucu
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-1">
                <div className="text-xl font-bold text-primary-dark">{founder.name}</div>
                <div className="text-sm text-secondary">{founder.jobTitle}</div>
                <div className="mt-2 text-xs font-bold uppercase tracking-widest text-accent">
                  {founder.yearsExperience}+ Yıl Saha Tecrübesi
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <h2 id="founder-heading" className="text-3xl font-bold text-primary-dark">
                Oğuz Aktay&apos;dan
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-secondary md:text-lg">
                {founder.storyParagraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <blockquote className="mt-8 rounded-lg border-l-4 border-accent bg-accent/5 px-6 py-4 italic text-primary-dark">
                &ldquo;Tartım göz önünde, sınıflandırma şeffaf, ödeme anında. 20 yıldır değişmeyen
                bu prensiplerle binlerce müşteriye güvenilir bir adres olduk.&rdquo;
                <footer className="mt-2 text-sm font-bold not-italic text-accent">
                  — Oğuz Aktay, Akar Hurda Kurucusu
                </footer>
              </blockquote>
            </div>
          </section>

          {/* Values — Why Akar */}
          <section className="mb-16" aria-labelledby="values-heading">
            <div className="mb-10 max-w-3xl">
              <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-accent">
                Değerlerimiz
              </span>
              <h2 id="values-heading" className="text-3xl font-bold text-primary-dark md:text-4xl">
                Neden Akar Hurda? — 4 Temel Prensip
              </h2>
              <p className="mt-4 text-base text-secondary md:text-lg">
                Hurda alımı sektöründe rekabet avantajımız &quot;şeffaflık disiplini&quot;.
                Müşterimiz tartım, sınıflandırma ve fiyatlandırma süreçlerinin tamamına tanıklık
                eder — kara kutu yok.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {founder.values.map((value, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-accent hover:shadow-md"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-xl font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-primary-dark">{value.title}</h3>
                  <p className="text-base leading-relaxed text-secondary">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Milestones Timeline */}
          <section
            className="mb-16 rounded-2xl border border-gray-200 bg-white p-6 md:p-10"
            aria-labelledby="milestones-heading"
          >
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-accent">
              Kilometre Taşları
            </span>
            <h2 id="milestones-heading" className="text-3xl font-bold text-primary-dark md:text-4xl">
              {founder.yearsExperience} Yıllık Yolculuk
            </h2>
            <p className="mt-4 max-w-2xl text-base text-secondary md:text-lg">
              2005&apos;te küçük bir Gebze işletmesi olarak başlayan Akar Hurda&apos;nın bugün
              ulaştığı kurumsal yapıya giden adımlar.
            </p>
            <ol className="mt-8 space-y-6">
              {founder.milestones.map((m) => (
                <li key={m.year} className="flex items-start gap-5">
                  <div className="flex h-16 w-16 flex-none items-center justify-center rounded-xl bg-accent text-lg font-extrabold text-white shadow-md">
                    {m.year}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-bold text-primary-dark">{m.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-secondary md:text-base">
                      {m.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Yasal Çerçeve */}
          <section
            className="mb-16 rounded-2xl border-2 border-accent/30 bg-accent/5 p-6 md:p-10"
            aria-labelledby="legal-heading"
          >
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-accent">
              Yasal Belgeler
            </span>
            <h2 id="legal-heading" className="text-3xl font-bold text-primary-dark md:text-4xl">
              Yasal Çerçeve ve Sertifikalar
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-secondary md:text-lg">
              Atık taşıma lisansı olmayan firmalardan hurda alımı yapmak yasal sorumluluk doğurur.
              Akar Hurda olarak T.C. Çevre, Şehircilik ve İklim Değişikliği Bakanlığı&apos;nın
              2/4/2015 tarih ve 29314 sayılı Atık Yönetimi Yönetmeliği&apos;ne tam uyumlu çalışıyor,
              tehlikesiz atık taşıması için UATF (Ulusal Atık Taşıma Formu) düzenliyoruz.
              Kurumsal müşterilerimize KDV&apos;li resmi fatura ve resmi makamların talep
              edebileceği tüm dokümantasyonu sağlıyoruz.
            </p>
            <p className="mt-3 text-sm text-secondary">
              <strong className="text-primary-dark">{licenses.length} resmi belge</strong> ile
              yasal, şeffaf ve denetlenebilir hizmet veriyoruz.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {licenses.slice(0, 8).map((lic) => (
                <li
                  key={lic.id}
                  className="flex items-start gap-3 rounded-lg bg-white p-4 text-sm"
                >
                  <span className="mt-0.5 text-accent text-lg">✓</span>
                  <div>
                    <strong className="text-primary-dark block">{lic.name}</strong>
                    <span className="text-secondary">{lic.issuer}</span>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              href="/sertifikalar"
              className="mt-8 inline-flex items-center gap-2 font-bold text-accent transition-colors hover:text-accent-hover"
            >
              Tüm sertifikaları gör →
            </Link>
          </section>

          {/* Information Gain — Sektörel Bilgi (E-E-A-T Expertise) */}
          <section
            className="mb-16 rounded-2xl bg-primary-dark p-8 text-white md:p-12"
            aria-labelledby="expertise-heading"
          >
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-accent">
              Sektörel Uzmanlık
            </span>
            <h2 id="expertise-heading" className="text-3xl font-bold md:text-4xl">
              Oğuz Aktay&apos;ın Saha Tecrübesi — Bilgi Birikimi
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg">
              20 yıllık aktif saha çalışması, Oğuz Bey&apos;e hurda metal alımının teknik ve
              ekonomik tüm boyutlarında derin bir uzmanlık kazandırdı. Bu birikim Akar Hurda&apos;yı
              sıradan bir hurdacıdan farklı kılan üç temel uzmanlık alanına dönüştü.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <article className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <div className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">
                  Uzmanlık 1
                </div>
                <h3 className="mb-3 text-lg font-bold">ISRI Sınıflandırma</h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  Bakır 1A/2A/Berry/Birch, alüminyum profil/döküm/jant — uluslararası ISRI
                  standardına göre kategori ayrımı. Doğru sınıflandırma %80-95 fiyat farkını
                  belirler.
                </p>
              </article>
              <article className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <div className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">
                  Uzmanlık 2
                </div>
                <h3 className="mb-3 text-lg font-bold">LME Endeks Okuma</h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  London Metal Exchange spot fiyatı + güncel kur + işlem maliyeti formülü ile
                  şeffaf hesap. &quot;Hava&quot;dan fiyat değil, dünya borsasından referans.
                </p>
              </article>
              <article className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <div className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">
                  Uzmanlık 3
                </div>
                <h3 className="mb-3 text-lg font-bold">Yasal Çerçeve</h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  Atık Yönetimi Yönetmeliği, UATF dokümantasyonu, KDV&apos;li fatura, çevre izni
                  kapsamı — kurumsal müşterilerin tüm yasal sorularına cevap.
                </p>
              </article>
            </div>
          </section>

          {/* Müşteri Profili — Kimler Tercih Ediyor */}
          <section className="mb-16" aria-labelledby="audience-heading">
            <div className="mb-10 max-w-3xl">
              <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-accent">
                Müşteri Profilleri
              </span>
              <h2 id="audience-heading" className="text-3xl font-bold text-primary-dark md:text-4xl">
                Akar Hurda&apos;yı Kimler Tercih Ediyor?
              </h2>
              <p className="mt-4 text-base text-secondary md:text-lg">
                20 yıllık süreçte Gebze&apos;den Pendik&apos;e uzanan müşteri portföyümüz beş ana
                profilden oluşuyor. Her profile özel hizmet protokolü uyguluyoruz.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🏠</div>
                  <div>
                    <h3 className="text-lg font-bold text-primary-dark">
                      Bireysel — Ev Tadılatı / Eşya Yenilemesi
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-secondary md:text-base">
                      Eski boyler, klima, beyaz eşya söküntüsü, bakır kablo artığı, alüminyum
                      doğrama. Adresten alım, kantar üstü tartım, tartım sonrası nakit ödeme.
                      Minimum 50 kg toplam ağırlık önerilir.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🏭</div>
                  <div>
                    <h3 className="text-lg font-bold text-primary-dark">
                      Sanayi Atölyesi / Üretim Tesisi
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-secondary md:text-base">
                      Aylık biriken talaş, sac fire, kablo artığı, elektronik döküntü.
                      Düzenli alım sözleşmesi, UATF dokümantasyonu, KDV&apos;li fatura. Gebze
                      OSB, GEPOSB ve TOSB tesisleri ile uzun vadeli müşteri ilişkilerimiz var.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🏗️</div>
                  <div>
                    <h3 className="text-lg font-bold text-primary-dark">
                      İnşaat Şantiyesi / Söküm İşi
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-secondary md:text-base">
                      Proje sonu enkaz tasfiyesi, demir hurda, paslı sac, alüminyum profil.
                      Toplu alım, lisanslı taşıma, çevre dostu bertaraf. Şantiye lojistiğine
                      uygun esnek randevu.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">⚡</div>
                  <div>
                    <h3 className="text-lg font-bold text-primary-dark">
                      Elektrik / Tesisat Esnafı
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-secondary md:text-base">
                      Haftalık birikinti — bakır kablo, motor sargısı, panel demonte. Hızlı
                      alım, kg üzeri ödeme, sürekli müşteri kontuğu. WhatsApp grubu üzerinden
                      anlık iletişim.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">♻️</div>
                  <div>
                    <h3 className="text-lg font-bold text-primary-dark">
                      Çevre Bilinçli Müşteri
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-secondary md:text-base">
                      Profesyonel firma + lisans + KVKK uyumu + UATF dokümantasyonu. Geri dönüşüm
                      sertifikası talep edenler için ideal. Karbon ayak izi raporu mevcuttur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section
            className="rounded-2xl bg-primary p-8 text-white md:p-12"
            aria-labelledby="cta-heading"
          >
            <h2 id="cta-heading" className="text-3xl font-extrabold md:text-4xl">
              Oğuz Aktay ve Ekibi ile Çalışın
            </h2>
            <p className="mt-4 max-w-2xl text-white/90 md:text-lg">
              20 yıllık tecrübenin getirdiği şeffaflık, adalet ve güvenle hurda alımınızı yapın.
              Telefon, WhatsApp veya online formdan ulaşın — aynı gün veya ertesi gün adresten
              alım için randevu netleşir.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={contact.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 font-bold text-white shadow-lg transition hover:bg-accent-hover"
              >
                {contact.labels.callNow}: {contact.phone}
              </a>
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-8 py-4 font-bold text-white transition hover:bg-whatsapp-hover"
              >
                WhatsApp ile Yaz
              </a>
              <Link
                href="/teklif-al"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-md transition hover:bg-white/10"
              >
                Teklif Formu
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
