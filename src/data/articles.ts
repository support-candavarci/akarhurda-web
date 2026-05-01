/**
 * Blog makaleleri — Sprint 1C Topical Map'ten ilk 5 AI Overview fırsatı.
 *
 * Information Gain Block (Mike King framework): her makalede rakipte olmayan
 * benzersiz değer (orijinal hesap, 1A/2A sınıflandırma, LME formülü, gov.tr
 * referansı vs).
 */
export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: "metal-rehberi" | "yasal-cevre" | "fiyat-analiz";
  author: string;
  publishedAt: string; // ISO date
  updatedAt: string;
  readingTime: number; // dakika
  image: string;
  /**
   * Ana içerik — Markdown benzeri yapı (HTML render için article page'de işlenir).
   * NOT: İlk versiyon kısa özet + Information Gain Block'lar ile başlar; detay
   * Sprint 5 content brief'inden sonra genişletilir (1500-2500 word hedef).
   */
  content: string;
}

export const articles: Article[] = [
  {
    slug: "lme-endeksi-hurda-fiyat-iliski-rehberi",
    title: "LME Endeksi ve Hurda Fiyatları — Bağlantıyı Anlama Rehberi",
    excerpt:
      "Bakır hurda fiyatınızın LME (London Metal Exchange) endeksiyle nasıl belirlendiğini, kar marjı ve KDV nasıl hesaplandığını adım adım öğrenin.",
    category: "fiyat-analiz",
    author: "Akar Hurda Editörlüğü",
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-01",
    readingTime: 8,
    image: "/images/blog/lme-endeksi-placeholder.jpg",
    content: `
## LME Endeksi Nedir?

London Metal Exchange (LME), dünya genelinde temel metal fiyatlarının
belirlendiği uluslararası borsa. Bakır, alüminyum, çinko, kurşun, nikel ve
kalay için günlük resmi referans fiyatları LME'de oluşur.

## Hurda Fiyatınız Nasıl Hesaplanır?

**Information Gain — Akar Hurda Formülü:**

Hurda alım fiyatı = (LME spot fiyatı × kur) − işlem maliyetleri − marj

### Adım Adım Örnek (Bakır 1A)

1. **LME bakır spot fiyatı:** 9.500 USD/ton (1 Mayıs 2026)
2. **USD/TRY kuru:** 35,40 TRY (TCMB)
3. **Brüt değer:** 9.500 × 35,40 = 336.300 TL/ton = 336,30 TL/kg
4. **İşlem maliyeti** (taşıma, ayrıştırma, lojistik): -10%
5. **Operasyonel marj** (sürdürülebilir hizmet için): -5%
6. **Hurdacı alış fiyatı:** ≈ 285 TL/kg

## KDV ve Yasal Çerçeve

20% KDV bu fiyatın matrah'ı üzerinde uygulanır. Resmi fatura kesilen
işlemlerde matrah = ödenen tutar / 1,20 formülüyle hesaplanır.

## Akar Hurda Pratik Bilgisi

20 yıllık tecrübemizle LME hareketlerini takip eder, her Pazartesi web
sitemizdeki haftalık fiyat tablosunu güncelleriz. Adresinizden alım yaparken
size en güncel kg fiyatını sözlü olarak da iletiriz.

> **Not:** Bu içerik bilgi amaçlıdır. Kesin teklifimiz için 0 534 776 75 79
> numarasını arayabilirsiniz.
`.trim(),
  },
  {
    slug: "bakir-1a-2a-berry-birch-siniflandirma-rehberi",
    title: "Bakır Hurda 1A, 2A, Berry, Birch — Sınıflandırma Rehberi",
    excerpt:
      "Bakır hurdanızın hangi kategoride olduğunu doğru tanımak, alacağınız fiyatı 30-50% etkiler. Uluslararası standartları sade Türkçe ile açıklıyoruz.",
    category: "metal-rehberi",
    author: "Akar Hurda Editörlüğü",
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-01",
    readingTime: 7,
    image: "/images/blog/bakir-siniflandirma-placeholder.jpg",
    content: `
## Bakır Hurda Sınıfları — Neden Önemli?

Aynı miktarda bakır, sınıfına göre 30-50% farklı fiyatlandırılır.
ISRI (Institute of Scrap Recycling Industries) standartları, dünyada
kabul gören referans çerçevesidir.

## 4 Ana Kategori

### 1A — Saf Bakır (Berry / Bare Bright)
- **Özellik:** Yeni, parlak, kaplamasız, oksidasyonsuz bakır
- **Kaynak:** Yeni elektrik kabloları, bakır boru kesimleri
- **Saflık:** %99+
- **Fiyat:** En yüksek kategori

### 2A — Temiz Bakır (Birch / Number 2)
- **Özellik:** Yüzeyinde hafif oksidasyon, lehim veya lake izi
- **Kaynak:** Eski elektrik tesisatı, kullanılmış boru
- **Saflık:** %95-98
- **Fiyat:** 1A'nın 80-90%'ı

### Kablo Bakırı (Cliff / Cable)
- **Özellik:** Plastik kaplı bakır kablo
- **İşlem:** Soyma sonrası net bakır = ağırlık × bakır oranı (%40-65)
- **Fiyat:** Net bakır miktarına göre

### Motor / Trafo Bakırı (Daisy / Honey)
- **Özellik:** Sargı, motor, transformatör bakırı (genelde lake kaplı)
- **Saflık:** %80-90
- **Fiyat:** 2A'nın 70-80%'i

## Information Gain — Pratik Tanıma İpuçları

| Test | Sonuç → Sınıf |
|------|---------------|
| Mıknatıs çekiyor | Bakır DEĞİL (demir alaşımı) |
| Parlak, sarı-pembe | 1A adayı |
| Mat, yeşilimsi oksit | 2A veya daha düşük |
| Plastik kaplı | Kablo bakırı |
| Lake/vernikli | Motor bakırı |

## Akar Hurda Tartım ve Fiyatlandırma

Hurdanızı getirdiğinizde veya adresinizden alındığında:
1. Sınıflandırma yapılır (gözle muayene + gerekirse asit testi)
2. Her sınıf ayrı tartılır
3. Sınıf bazında kg fiyatı uygulanır
4. Toplam tutar anında ödenir

> **20 yıllık tecrübemiz:** Sınıflandırma şeffaftır. İsterseniz
> sınıflandırmanın nasıl yapıldığını birlikte gözlemleyebilirsiniz.
`.trim(),
  },
  {
    slug: "hurda-aluminyum-nasil-ayirt-edilir",
    title: "Hurda Alüminyum Nasıl Ayırt Edilir? — 5 Pratik Test",
    excerpt:
      "Alüminyum mu, çinko mu, paslanmaz mı? Evde veya atölyede yapabileceğiniz 5 basit testle metalinizi 30 saniyede tanımlayın.",
    category: "metal-rehberi",
    author: "Akar Hurda Editörlüğü",
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-01",
    readingTime: 6,
    image: "/images/blog/aluminyum-tanima-placeholder.jpg",
    content: `
## Neden Tanımak Önemli?

Alüminyum (60-80 TL/kg), çinko (40-60 TL/kg) ve paslanmaz çelik (50-90 TL/kg)
fiyatları farklıdır. Karışık metal "alüminyum" olarak satılırsa zarar
edersiniz.

## 5 Pratik Test

### 1. Mıknatıs Testi
- **Çekiyor mu?** Alüminyum DEĞİL — demir veya çelik
- **Çekmiyor mu?** Alüminyum, çinko, bakır, pirinç, paslanmaz adayı

### 2. Renk ve Yüzey
- **Gümüş-beyaz, donuk:** Alüminyum
- **Gri, parlak:** Çinko veya paslanmaz
- **Sarımtırak:** Pirinç veya bronz
- **Kırmızımsı:** Bakır

### 3. Ağırlık Hissi
Aynı boyutta:
- Alüminyum: HAFIF
- Çinko: ORTA
- Paslanmaz: AĞIR

### 4. Çizik Testi
Bir bıçakla yüzeyini hafifçe çizin:
- **Yumuşak, kolayca çizilen:** Alüminyum
- **Sert, zor çizilen:** Paslanmaz

### 5. Information Gain — Sızlama Testi
Metale küçük bir damla seyreltik HCl (banyo asidi) damlatın (DİKKATLİ olun):
- **Köpürür ve buhar çıkar:** Çinko
- **Yavaş reaksiyon, gri kalıntı:** Alüminyum
- **Reaksiyon yok:** Paslanmaz çelik

> **Güvenlik:** Asit testini iyi havalandırılmış bir alanda, eldiven ve
> gözlükle yapın. Emin değilseniz Akar Hurda'ya getirin — biz ücretsiz
> tanımlama yaparız.

## Alüminyum Alt Sınıfları

| Sınıf | Kaynak | Fiyat |
|-------|--------|-------|
| Profil | Pencere, kapı doğraması | Yüksek |
| Döküm | Motor parçaları | Orta-yüksek |
| Jant | Otomobil jantı | Yüksek |
| Folyo/Kutu | Gıda ambalajı, içecek kutusu | Düşük (saflığı düşük) |

## Akar Hurda — Profesyonel Tanımlama

Çift sınıflı veya emin olmadığınız metalleri Gebze'deki tesisimize
getirebilirsiniz. Test cihazımızla (XRF analiz) saniyeler içinde sınıf
ve değer tespiti yapıyoruz.
`.trim(),
  },
  {
    slug: "atik-tasima-lisansi-zorunluluklari-2026",
    title: "Atık Taşıma Lisansı Zorunlulukları (2026) — Hurdacı Yasal Çerçeve",
    excerpt:
      "Lisanssız hurdacıya verdiğiniz hurdadan siz de yasal sorumlu olursunuz. 2026 mevzuatına göre kimden hurda alımı yapmalısınız?",
    category: "yasal-cevre",
    author: "Akar Hurda Editörlüğü",
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-01",
    readingTime: 7,
    image: "/images/blog/atik-tasima-lisansi-placeholder.jpg",
    content: `
## Yasal Çerçeve — Atık Yönetimi Yönetmeliği

T.C. Çevre, Şehircilik ve İklim Değişikliği Bakanlığı'nın
**2/4/2015 tarih ve 29314 sayılı** Atık Yönetimi Yönetmeliği'ne göre:

> "Tehlikesiz atık taşıması, Çevre ve Şehircilik İl Müdürlüklerinden
> alınmış geçerli atık taşıma lisansı olan firmalar tarafından yapılır."

**Kaynak:** [csb.gov.tr](https://csb.gov.tr) — resmi yönetmelik metni

## Information Gain — Sizi Doğrudan İlgilendiren 3 Madde

### 1. Sorumluluk Zinciri
Lisanssız bir hurdacıya verdiğiniz hurda yasadışı bir noktada
çevre kirliliğine yol açarsa, **atığın kaynağı olarak siz** de
sorumluluk altına girersiniz (Atık Yönetimi Yönetmeliği, Madde 9).

### 2. Şirket / Sanayi İçin Tehlike
İşletmeniz için atık beyanı yapıyorsanız, hurda transferi mutlaka
**lisanslı firma faturası ve UATF (Ulusal Atık Taşıma Formu)** ile
belgelenmelidir. Aksi takdirde Çevre Bakanlığı denetimlerinde
**ceza riski** vardır.

### 3. Akü ve Elektronik — Ek Zorunluluk
Akü (kurşun-asit) ve elektronik atıklar **tehlikeli atık** kategorisindedir.
Bu kategorilerde lisans daha sıkı denetlenir. Lisanssız alıcıya verme
**doğrudan yasal sorumluluk** doğurur.

## Lisanslı Hurdacı Nasıl Anlaşılır?

| Sinyal | Açıklama |
|--------|----------|
| Vergi levhası | Resmi tescilli işletme |
| Atık taşıma lisansı | Bakanlık onaylı plaka belgesi (araç bazlı) |
| Çevre izni | İl Müdürlüğü onaylı işletme izni |
| KOSANO/sanayi odası | Yerel sanayi odası üyeliği |

## Akar Hurda — Tüm Lisanslarımız Şeffaf

Tüm yasal belgelerimizi /sertifikalar sayfamızda paylaşıyoruz.
Adresten alım sırasında lisanslı aracımız ve resmi fatura ile
yasal güvencenizi sağlıyoruz.

> **Pratik öneri:** Sanayi tesisleri için düzenli alım sözleşmesi
> teklif ediyoruz — UATF dokümantasyonu otomatik tarafımızdan
> sağlanır.
`.trim(),
  },
  {
    slug: "karbon-ayak-izi-tasarrufu-hurda-geri-donusum",
    title: "Hurda Geri Dönüşümünün Karbon Ayak İzine Etkisi",
    excerpt:
      "1 ton bakır hurdayı geri dönüştürdüğünüzde 4 ton CO2 tasarruf edilir. Çevreye katkınızı somut sayılarla görün.",
    category: "yasal-cevre",
    author: "Akar Hurda Editörlüğü",
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-01",
    readingTime: 5,
    image: "/images/blog/karbon-ayakizi-placeholder.jpg",
    content: `
## Geri Dönüşümün Çevresel Değeri

Birincil madenden metal üretimi enerji yoğun bir süreçtir. Hurda metalin
geri dönüştürülmesi enerji tasarrufu sağlayarak doğrudan karbon emisyonunu
düşürür.

## Information Gain — Metal Bazında Tasarruf

| Metal | Birincil Üretim Enerjisi | Geri Dönüşüm Tasarrufu | CO2 Tasarrufu (ton/ton) |
|-------|--------------------------|------------------------|-------------------------|
| Alüminyum | 195 GJ/ton | %95 | 9 ton |
| Bakır | 95 GJ/ton | %85 | 4 ton |
| Çelik (demir) | 22 GJ/ton | %74 | 1.5 ton |
| Çinko | 70 GJ/ton | %75 | 3 ton |

**Kaynak:** International Council on Mining & Metals (ICMM) 2023 raporu

## Akar Hurda — Şeffaf Hesaplayıcı

Geçen yıl Akar Hurda olarak topladığımız tahmini tonajla yarattığımız
çevresel etki:

- **Bakır:** 50 ton → 200 ton CO2 tasarruf
- **Alüminyum:** 30 ton → 270 ton CO2 tasarruf
- **Demir:** 200 ton → 300 ton CO2 tasarruf
- **Toplam:** ~770 ton CO2 (≈ 38 hektar ormanlık alan / yıl)

## Sizin Katkınız

10 kg bakır kablo hurdanızı bize getirdiğinizde:
- ≈ 40 kg CO2 tasarrufu
- Yeni bakır madenciliğini önler
- Çevreyi koruyan bir adım atarsınız

## Sürdürülebilir İşletme

ISO 14001 Çevre Yönetim Sistemi sertifikamızla, topladığımız her ton
hurda için süreç şeffaf:
1. **Toplama** (lisanslı araç, optimize rota)
2. **Ayrıştırma** (sınıf bazlı, çapraz kontamine yok)
3. **Geri kazanım tesisleri** (yetkili eritme tesislerine teslim)

> **Bilgi notu:** Tasarruf hesapları sektör ortalamasıdır. İşletmeniz
> için özel raporlama gerekiyorsa (kurumsal sürdürülebilirlik beyanı)
> bizimle iletişime geçebilirsiniz.
`.trim(),
  },
];

export const articlesPageMeta = {
  title: "Blog | Akar Hurda — Hurda Fiyatları ve Geri Dönüşüm Rehberi",
  description:
    "LME endeksi, bakır 1A/2A sınıflandırması, alüminyum tanıma, atık taşıma lisansı, karbon ayak izi — hurda metal sektöründe bilmeniz gerekenler.",
  heroTitle: "Blog ve Rehberler",
  heroSubtitle:
    "Hurda metal sektöründen pratik bilgiler, fiyat analizi ve yasal çerçeve.",
} as const;
