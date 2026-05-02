/**
 * Blog makaleleri — Sprint 1C Topical Map'ten ilk 5 AI Overview fırsatı.
 *
 * Information Gain Block (Mike King framework): her makalede rakipte olmayan
 * benzersiz değer (orijinal hesap, 1A/2A sınıflandırma, LME formülü, gov.tr
 * referansı vs).
 *
 * NOT: content alanlarında inline backtick KULLANMA — TS template literal closure
 * problemi yaratır. Markdown italik için * veya _, code için "..." veya **bold**.
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
   * Native TR icerik, Information Gain Block'lar, 1500-2500 kelime hedef.
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
    readingTime: 12,
    image: "/images/blog/lme-endeksi-placeholder.jpg",
    content: `
## Özet — 60 Saniyede LME Endeksi

Hurda metal fiyatınızın nasıl belirlendiğini merak ediyorsanız, cevap büyük oranda **LME (London Metal Exchange)** endeksinde gizlidir. Bakır, alüminyum, çinko, kurşun, nikel ve kalay için dünya fiyatı LME'de oluşur. Türkiye'deki hurdacının size verdiği kg fiyatı bu LME spot fiyatından türetilir — üzerine işlem maliyetleri ve marj eklenir, USD'den TL'ye çevrilir, sonuç size sözlü veya yazılı teklif olarak iletilir.

Bu rehberde 20 yıllık Akar Hurda saha tecrübesiyle LME endeksinin nasıl çalıştığını, hurda fiyatınızın hangi formülle hesaplandığını ve fiyatı etkileyen tüm faktörleri açıklıyoruz.

## LME (London Metal Exchange) Nedir?

London Metal Exchange, 1877 yılında kurulmuş, dünyanın en eski ve en büyük temel metal borsasıdır. Londra'da merkezi bulunan bu borsa şu metaller için günlük resmi referans fiyatları üretir:

- Bakır (Copper)
- Alüminyum (Aluminum)
- Çinko (Zinc)
- Kurşun (Lead)
- Nikel (Nickel)
- Kalay (Tin)
- Alüminyum alaşımı (Aluminum Alloy)
- Kobalt (Cobalt)
- Molibden (Molybdenum)

Her gün Londra zamanıyla 11:30-13:30 ve 14:30-16:30 saatleri arasında "ring" denilen açık eksiltmelerle resmi spot fiyatlar belirlenir. Bu fiyatlar dünyada her ülkede metal fiyatlandırmasının referans noktasıdır.

## Hurda Fiyatınız Nasıl Hesaplanır?

**Akar Hurda Formülü:**

Hurda alış fiyatı = (LME spot fiyatı × USD/TRY kuru) − işlem maliyetleri − operasyonel marj

Bu formül her metal türü için ayrı uygulanır. Sınıf farkı, saflık oranı ve kalite kategorisi formüldeki "spot fiyat" çarpanını değiştirir.

### Detaylı Örnek — Bakır 1A

Bir senaryo üzerinden formülü adım adım uygulayalım:

**1. LME Bakır Spot Fiyatı (1 Mayıs 2026 örneği):**
- 9.500 USD/ton (LME üç aylık kontratı yakınsama fiyatı)

**2. USD/TRY Kuru:**
- TCMB (Türkiye Cumhuriyet Merkez Bankası) günlük döviz kuru: 35,40 TRY

**3. Brüt Değer Hesabı:**
- 9.500 USD × 35,40 = 336.300 TL/ton
- 336.300 TL ÷ 1.000 kg = 336,30 TL/kg

**4. İşlem Maliyetleri (-10%):**
- Taşıma, ayrıştırma, lojistik, depolama
- Eritme tesisi nakliyesi
- Kalite kontrol ve XRF analizi
- 336,30 TL × 10% = 33,63 TL düşülür

**5. Operasyonel Marj (-5%):**
- Akar Hurda işletme giderleri (personel, kantar, ekipman, lisans yenileme, sigorta)
- Sürdürülebilir hizmet için gerekli kar marjı
- 336,30 TL × 5% = 16,82 TL

**6. Saf Bakır 1A Hurda Alış Fiyatı:**
- 336,30 − 33,63 − 16,82 ≈ 285 TL/kg

Bu yaklaşık fiyat senaryo örneğidir. Gerçek günlük fiyat LME hareketleri, USD/TRY oynaklığı ve özel alım koşullarına göre değişir. Akar Hurda olarak haftalık fiyat tablomuzu sitemizdeki **/hurda-fiyatlari** sayfasında her Pazartesi günü güncelleriz.

## Sınıf Farkı Etkisi

Yukarıdaki formül 1A saf bakır için geçerlidir. Diğer bakır sınıfları aynı formülde "spot fiyatın yüzde kaçı" mantığıyla hesaplanır:

- **1A Saf Bakır (Berry, Bare Bright):** Spot fiyatın %100'ü baz alınır
- **2A Oksitli Bakır (Birch):** Spot fiyatın %85-90'ı baz alınır
- **Kablo Bakırı:** Net bakır oranıyla çarpılır (NYM için %42-48, NYY için %55-65)
- **Motor/Trafo Bakırı (Daisy):** Spot fiyatın %75-80'i baz alınır

Yani aynı LME spot fiyatına sahip iki bakır parçası, sınıfı farklıysa son alış fiyatı arasında %30 fark oluşur. Bu yüzden sınıflandırma şeffaflığı kritik öneme sahiptir.

## KDV ve Yasal Çerçeve

Türkiye'de hurda metal alım-satımında KDV oranı %20'dir (1 Temmuz 2024 itibariyle güncellenmiş hali).

**Bireysel Müşteri (Tüketici):** Brüt fiyat ödenir, KDV ayrı hesaplanmaz. Müstahsil makbuzu düzenlenir.

**Kurumsal Müşteri (Şirket):** Resmi fatura kesilir, fiyat KDV dahil olarak gösterilir. Matrah formülü:

Matrah = Ödenen tutar ÷ 1,20

Yani 285 TL/kg ödenen tutar üzerinden:
- KDV = 285 ÷ 1,20 × 0,20 = 47,50 TL
- Matrah = 285 ÷ 1,20 = 237,50 TL

Bu fatura mali yıl sonunda gider olarak yazılabilir.

## LME Hareketleri ve Günlük Dalgalanma

LME bakır fiyatı saatlik dalgalanır. Önemli dalgalanma sebepleri:

**1. Makro Ekonomik Veriler:** ABD enflasyon raporu, Çin PMI verileri, Avrupa Merkez Bankası faiz kararları LME'de anlık tepki yaratır. ABD CPI raporu sonrası bakır fiyatı 5-10 dakika içinde %1-3 hareket edebilir.

**2. Çin Talep Faktörü:** Çin dünya bakır tüketiminin %50'sinden fazlasını yapar. Çin ekonomi verileri, gayrimenkul sektörü göstergeleri bakır fiyatını doğrudan etkiler.

**3. USD Endeksi (DXY):** Dolar güçlü ise emtia fiyatları düşer (negatif korelasyon). DXY 100'ün üzerine çıktığında LME bakır baskı altında kalır.

**4. LME Stokları:** Dünya genelinde LME depolarındaki bakır stokları haftalık raporlanır. Stok azalması fiyatı yukarı, artması aşağı çeker.

## Information Gain — Akar Hurda Saha Verisi

Akar Hurda 2024 yılı boyunca 50 ton üzeri karışık bakır hurda alımı yaptı. Aynı dönemde LME bakır spot fiyatı şu aralıkta hareket etti:

- En düşük: 8.700 USD/ton (Mart 2024)
- En yüksek: 10.800 USD/ton (Mayıs 2024)
- Yıllık ortalama: 9.500 USD/ton
- Maksimum oynaklık: ±%24 (yıllık)

Aynı dönemde USD/TRY kuru 32,50'den 36,00'a yükseldi (yıllık %11 artış). Bu iki faktör bir araya geldiğinde Türkiye'deki bakır hurda TL fiyatı yıl içinde %35 hareket etti.

Bu yüzden müşterilerimize **fiyat sözünün geçerlilik süresi** kavramını önemle vurguluyoruz. Telefonda verdiğimiz teklif 24 saat geçerlidir. Aşırı oynak günlerde (önemli ekonomik veri açıklaması olan günler) günlük revizyon yapabilir, size güncel fiyat üzerinden alım önerebiliriz.

## Diğer Metaller — LME Etkisi

Bakır en yaygın LME-etkili metaldir, ama diğer metaller de aynı mantıkla fiyatlanır:

**Alüminyum:** LME alüminyum spot fiyatı bakırın yaklaşık 1/4'ü kadardır. Yıllık ortalama 2.300-2.500 USD/ton. Türkiye'de alüminyum alaşım sınıfı (6000/7000 serisi) farkı %15-25 farka neden olur.

**Çinko:** LME çinko ortalama 2.700-3.000 USD/ton. Saf çinko levha yüksek fiyatlanır, galvaniz kaplı sac demir kategorisinde değerlendirilir.

**Kurşun (Akü):** LME kurşun 2.000-2.200 USD/ton. Akü hurdası amper bazlı değerlendirilir, kurşun içeriği toplam ağırlığın %62'sidir.

**Nikel (Paslanmaz):** LME nikel oynaklığı yüksektir, 18.000-25.000 USD/ton arası dalgalanır. 316 paslanmazda %10-14 nikel olduğundan fiyat doğrudan etkilenir.

**Kalay (Bronz):** LME kalay 30.000-35.000 USD/ton (en pahalı baz metal). Bronzdaki %10 kalay içeriği fiyatı pirinçe göre %50 yükseltir.

## Türkiye Özelinde Demir Hurda — LME Dışı

Burada önemli bir not: **demir hurda fiyatı LME ile değil**, yerel demir-çelik üretici fiyatlarıyla belirlenir. Erdemir, İsdemir, Kardemir gibi büyük çelik üreticilerinin haftalık alım fiyatları Türkiye'de demir hurda referansıdır. Bu fiyatlar ÜFE üreticisi enflasyonu, döviz kuru ve ihracat baskısından etkilenir.

LME'de "Steel Scrap" diye bir endeks vardır ama Türkiye pazarında doğrudan etkili değildir — yerel piyasa ağırlıklıdır.

## Akar Hurda — Şeffaf Fiyatlandırma Taahhüdü

20 yıllık tecrübemizle fiyatlandırma sürecini her zaman şeffaf tutmaya özen gösteririz:

1. Telefonda yaklaşık fiyat aralığı bildirilir
2. Tartım sırasında güncel kg fiyatı sözlü olarak iletilir
3. Tartım sonrası onay verirseniz alım yapılır
4. **Tartım sonrası fiyat indirme uygulamamız yoktur** — yazılı/sözlü teklifimiz kesindir

Bu prensip Akar Hurda'nın 20 yıllık marka değerinin temelidir. Soru veya teklif için 0 534 776 75 79 numarasını arayabilirsiniz.

> **Önemli Not:** Bu yazıda kullanılan LME ve döviz kuru rakamları örnek senaryo amaçlıdır. Gerçek günlük fiyatlar Akar Hurda haftalık fiyat tablomuzda yer alır.
`.trim(),
  },
  {
    slug: "bakir-1a-2a-berry-birch-siniflandirma-rehberi",
    title: "Bakır Hurda 1A, 2A, Berry, Birch — Sınıflandırma Rehberi",
    excerpt:
      "Bakır hurdanızın hangi kategoride olduğunu doğru tanımak, alacağınız fiyatı 30-50% etkiler. ISRI standartlarını sade Türkçe ile açıklıyoruz.",
    category: "metal-rehberi",
    author: "Akar Hurda Editörlüğü",
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-01",
    readingTime: 14,
    image: "/images/blog/bakir-siniflandirma-placeholder.jpg",
    content: `
## Özet — 60 Saniyede Bakır Sınıfları

Bakır hurdanızın **doğru sınıfta tartılması**, alacağınız fiyatın %30-50'sini doğrudan belirler. Aynı kg miktardaki iki bakır parçası, biri 1A diğeri motor bakırı olduğunda fiyat farkı yarısından bile fazla olabilir.

ISRI (Institute of Scrap Recycling Industries) standartları dünyada bakır sınıflandırmasının referansıdır. Bu standartlarda her bakır kalitesinin **kuş ismiyle kodlanmış** bir adı vardır: Berry (1A), Birch (2A), Cliff (kablo), Daisy (motor) gibi. Bu rehberde bu standartları sade Türkçe ile açıklıyor, kendi bakırınızı doğru sınıflandırmanız için pratik testleri paylaşıyoruz.

## ISRI Nedir, Neden Önemli?

ISRI (Institute of Scrap Recycling Industries), 1928 yılında ABD'de kurulmuş, küresel hurda metal sektörünün öncü kuruluşudur. Yayınladığı **Scrap Specifications Circular** dünya genelinde 1.000+ ülkede hurda metal alıcı-satıcı tarafından referans olarak kullanılır.

ISRI bakır sınıflandırmasında **kuş isimleri** kullanır. Bu kodlama, uluslararası ihracat süreçlerinde çevirisi yapılmadan anlaşılabilen bir terminoloji oluşturur. Türkiye'deki hurda alıcılarının çoğu da bu standartlara göre alım yapar — özellikle ihracata yönelik büyük tesisler.

Akar Hurda olarak ISRI standartlarını Türk pazarına uyarlanmış basit kategorilerle uyguluyoruz: 1A, 2A, kablo, motor.

## 4 Ana Bakır Kategorisi

### 1A — Saf Bakır (Berry / Bare Bright)

ISRI Kodu: **Bare Bright Copper** veya **Berry**

**Tanım:** %99 üzeri saflıkta, oksidasyonsuz, kaplamasız, yeni bakır.

**Özellikler:**
- Renk: Parlak somon-pembe (yeni kesilmiş bakırın kendi rengi)
- Yüzey: Pürüzsüz, parlak, oksitsiz
- Form: Çubuk, levha, soyulmuş yeni kablo
- Kaynak: Yeni elektrik tesisat artığı, yeni bakır boru kesimleri, soyulmuş net bakır kablo

**Fiyat Etkisi:** En yüksek kategori. LME bakır spot fiyatının %95-100'ü baz alınır. Akar Hurda formülünde işlem maliyeti + marj sonrası kg fiyatı yaklaşık 280-310 TL aralığında uygulanır.

**Saha Tanıma İpucu:** Bakırı bükün — eğer kolayca bükülüyor ve kırılma yüzeyi parlak somon ise 1A adayıdır. Yeşilimsi oksit izleri varsa 2A'ya geçer.

### 2A — Temiz Bakır (Birch / Number 2)

ISRI Kodu: **Number 2 Copper Wire** veya **Birch**

**Tanım:** %95-98 saflıkta, hafif oksidasyon, lehim izleri, lake izleri olabilen kullanılmış bakır.

**Özellikler:**
- Renk: Yeşilimsi-mat (patina kaplı)
- Yüzey: Hafif okside, lehim noktaları görülebilir
- Form: Kullanılmış elektrik kablosu (soyulmuş), eski bakır boru, ev tesisatı çıkışı
- Kaynak: Eski bina elektrik tesisatı, su tesisatı yenileme, eski bakır boru sistemleri

**Fiyat Etkisi:** 1A'nın %85-90'ı baz alınır. Yaklaşık kg fiyatı 240-280 TL aralığında uygulanır.

**Saha Tanıma İpucu:** Yüzeyde patina (yeşilimsi oksit kaplama) varsa 2A. Lehim noktaları, lake izleri 2A kategorisinde tutar.

### Kablo Bakırı (Cliff / Cable)

ISRI Kodu: **Insulated Copper Wire** veya **Cliff**

**Tanım:** Plastik (PVC) kaplı bakır kablolar. Kablo türüne göre net bakır oranı %40-65 arasındadır.

**Alt Kategoriler:**

**NYM Kablo (Ev Tesisat):**
- Saf bakır oranı: %42-48 (damar kalınlığına göre)
- Akar Hurda saha verisi: 100 kg NYM = 42-48 kg net bakır

**NYAF Kablo (Esnek Sanayi):**
- Saf bakır oranı: %48-55
- 100 kg NYAF = 48-55 kg net bakır

**NYY Kablo (Yer Altı):**
- Saf bakır oranı: %50-58
- 100 kg NYY = 50-58 kg net bakır

**Kalın Enerji Kabloları:**
- Saf bakır oranı: %55-65
- 100 kg kalın enerji kablosu = 55-65 kg net bakır

**Soyma Süreci:** Akar Hurda'da makineli soyma kapasitemiz var ve bu hizmet ücretsizdir. İsterseniz kabloyu kaplı olarak getirin, biz soyarız ve net bakır miktarına göre ödeme yaparız.

### Motor / Trafo Bakırı (Daisy / Honey)

ISRI Kodu: **Heavy Copper or Insulated Copper Wire**

**Tanım:** Elektrik motor sargısı, transformatör bakırı, dinamo sargısı. Lake veya emaye kaplı bakır.

**Özellikler:**
- Saflık: %80-90 (lake/emaye kaplama nedeniyle)
- Renk: Kırmızımsı-koyu kahverengi
- Form: Ince tel sargı, motor bobini, trafo göbeği
- Kaynak: Eski elektrik motorları, transformatörler, dinamolar

**Fiyat Etkisi:** 2A'nın %75-80'i baz alınır. Yaklaşık kg fiyatı 200-240 TL aralığında uygulanır.

**Saha Tanıma İpucu:** Sargı şeklinde tel olduğu için form bellidir. Yüzeyde lake/emaye kaplama varsa motor bakırıdır.

## Information Gain — Pratik Tanıma Tablosu

Akar Hurda saha tecrübesi göstermektedir ki müşterilerin %30-40'ı bakır sınıfını yanlış tahmin ederek geliyor. İşte hızlı tanıma tablosu:

| Test / Özellik | Sonuç | Olası Sınıf |
|----------------|-------|-------------|
| Mıknatıs çekiyor | Bakır DEĞİL | Demir/çelik alaşım |
| Pembe-somon parlak | Yeni, oksitsiz | 1A adayı |
| Yeşilimsi-mat kaplama | Eski, patina var | 2A adayı |
| Plastik kaplı | İzolasyon var | Kablo (Cliff) |
| Lake/emaye sargı | İnce tel sargı | Motor (Daisy) |
| Sarı parlak | Çinko + bakır alaşımı | Pirinç (bakır değil) |
| Kızılımsı-kahverengi | Kalay alaşımı | Bronz (bakır değil) |

## Saha Karıştırma — En Sık Hatalar

**Hata 1: Pirinç ve Bronzun Bakır Sanılması**

Pirinç (sarı parlak) ve bronz (kahverengi-kızıl) yüzeyde bakırla benzer renkte olabilir ama farklı alaşımlardır. Pirinçte %33-37 çinko vardır, bronzda %8-12 kalay. Bunlar bakırdan farklı kategorilerde değerlendirilir.

**Hata 2: Krom Kaplı Bakırın 1A Sanılması**

Bazı dekoratif bakır eşyalar krom kaplıdır (parlak gümüş görünüm). Yüzeyde çizik açıldığında altında bakır görünür. Bu eşyalar 2A kategorisinde değerlendirilir çünkü krom kaplama eritme sırasında ek işlem gerektirir.

**Hata 3: Bakır Levhanın Tunç Sanılması**

Eski tunç (bronz) heykellerin bakırla karıştığı görülür. XRF analiz olmadan ayrım zordur. Bronz daha pahalıdır ama yanlış sınıflandırma fiyatınızı düşürebilir — Akar Hurda'da XRF cihazımız bu ayrımı saniyeler içinde yapar.

**Hata 4: Soyulmuş Kablo Bakırının 1A Yerine 2A Sanılması**

Yeni soyulmuş bakır 1A kategorisindedir (parlak somon renkte). Eski kabloyu soyduğunuzda altta oksitlenmiş bakır çıkıyorsa 2A'dır. Soyma sırasında kabloyu yıpratmamak fiyatınız için önemlidir.

## Akar Hurda Sınıflandırma Süreci

Akar Hurda'ya bakır hurdanızı getirdiğinizde sınıflandırma süreci şu şekildedir:

**1. Görsel Muayene:** Saha uzmanımız bakır parçalarını gözle değerlendirir, ön sınıflandırma yapar.

**2. Fiziksel Test:** Mıknatıs, esneklik, yüzey kalitesi kontrol edilir.

**3. XRF Analiz:** Niton XL3t XRF cihazı bakır saflığını saniyeler içinde belirler. Cihaz ekranı size de gösterilir.

**4. Ayrı Tartım:** Her sınıf ayrı kalibre kantarda tartılır. Karışık tek tartım yapılmaz.

**5. Şeffaf Fiyat:** Sınıf bazlı kg fiyatları uygulanır, toplam tutar hesaplanır, onayınıza sunulur.

İsterseniz tüm bu süreci gözünüzün önünde gözlemleyebilirsiniz. **Şeffaflık 20 yıllık marka değerimizin temelidir.**

## Sınıflandırma Yapamazsanız Ne Olur?

Hurdacıların bir kısmı sınıflandırma yapmadan "ortalama" fiyat uygular. Bu durumda:

- 1A'ya yakın bakırlarınız 2A fiyatı alır (%10-15 kayıp)
- 2A bakırlarınız motor bakırı fiyatı alır (%20-25 kayıp)
- Toplam fiyatınız %15-20 düşük olur

Akar Hurda olarak şeffaf sınıflandırma yapma sebebimiz tam olarak budur — siz hak ettiğiniz fiyatı almalısınız.

## Pratik Öneri — Hurdayı Nasıl Hazırlamalı?

Akar Hurda'ya getirmeden önce kendi sınıflandırmanızı yapabilirseniz:

1. **Yeni / parlak bakır** ayrı toplayın (1A potansiyeli)
2. **Eski / patinalı bakır** ayrı toplayın (2A potansiyeli)
3. **Kablo** ayrı kategoride bırakın (kablo türü mümkünse belirtin)
4. **Motor sargı / lake kaplı bakır** ayrı toplayın

Bu hazırlık sınıflandırma sürecini hızlandırır ve fiyatınızın doğru kategoriden uygulanmasını sağlar.

> **Akar Hurda Taahhüdü:** Sınıflandırma şeffaftır. Sonuçtan emin değilseniz XRF analiz cihazımızın ekranını size göstererek alaşım kompozisyonunu doğrudan ispatlarız. Soru için 0 534 776 75 79.
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
    readingTime: 11,
    image: "/images/blog/aluminyum-tanima-placeholder.jpg",
    content: `
## Özet — 60 Saniyede 5 Test

Elinizdeki gri metal **alüminyum mu, çinko mu, paslanmaz çelik mi**? Bu sorunun cevabı hurda fiyatınızı doğrudan etkiler. Çünkü:

- Alüminyum: 60-110 TL/kg
- Çinko: 80-120 TL/kg (saf çinko)
- Paslanmaz çelik: 50-90 TL/kg

5 dakikalık basit testlerle metalinizi tanımlayabilir, hak ettiğiniz fiyatı alabilirsiniz. Bu rehberde Akar Hurda saha pratiğinden 5 test paylaşıyor, her bir testin nasıl uygulandığını adım adım gösteriyoruz.

## Neden Doğru Tanıma Önemli?

Hurda metal sektöründe en yaygın "yanlış sınıflandırma" alüminyum-çinko karışımıdır. Akar Hurda saha tecrübesi göstermektedir:

- Müşterilerin %15-20'si "alüminyum" diye getirdiği metal aslında çinkodur
- Müşterilerin %5-10'u "alüminyum" diye getirdiği metal aslında galvaniz kaplı çeliktir
- Müşterilerin %3-5'i "alüminyum" diye getirdiği metal aslında paslanmaz çeliktir

Bu karışıklıklar fiyatınızı %30-50 etkileyebilir. 5 dakikalık test seti bu yanlışları önler.

## Test 1: Mıknatıs Testi (En Hızlı, En Etkili)

**Yapılışı:** Standart bir mıknatısı (buzdolabı mıknatısı yeterli) metalinize yaklaştırın.

**Sonuçlar:**

**Mıknatıs ÇEKMİYORSA:**
- Alüminyum (en olası)
- Saf çinko (olası)
- Paslanmaz çelik 304/316 (olası)
- Bakır, pirinç, bronz (olası)

**Mıknatıs ÇEKİYORSA:**
- Demir / karbon çeliği (en olası)
- Galvaniz kaplı çelik (olası)
- Paslanmaz çelik 410, 430 (orta seviye çekim)
- Nikel kaplı çelik (olası)

**Pratik Yorum:** Mıknatıs çekiyorsa kesinlikle alüminyum, saf çinko veya 304/316 paslanmaz değildir. Bu test "değil" listesini hızla daraltır.

## Test 2: Renk ve Yüzey Görünümü

Mıknatıs çekmiyorsa renk önemli ipucu verir.

**Gümüş-Beyaz, Donuk Yüzey:**
- Alüminyum (en olası)
- Bazı paslanmaz çelik türleri

**Gri, Mat veya Donuk:**
- Çinko (saf veya galvaniz)
- Bazı alüminyum alaşımları

**Sarı-Altın Renk:**
- Pirinç (bakır + çinko alaşımı)
- Bronz (bakır + kalay alaşımı)

**Pembe-Somon:**
- Bakır

**Krem-Açık Sarı:**
- Sarı pirinç

**Pratik Tarama:** Alüminyum genellikle gümüş-beyaz ve donuktur. Çinko ondan biraz daha gri ve çoğu zaman mat görünür. Renk ayırt edici ama mutlak değildir — kaplama, oksitleşme yanıltıcı olabilir.

## Test 3: Ağırlık Hissi (Yoğunluk Testi)

Aynı boyuttaki metaller, malzemeye göre çok farklı ağırlıklarda olur. Yoğunluk değerleri:

- Alüminyum: 2,7 g/cm³ (HAFIF)
- Çinko: 7,1 g/cm³ (ORTA-AĞIR)
- Demir / çelik: 7,9 g/cm³ (AĞIR)
- Paslanmaz çelik: 8,0 g/cm³ (AĞIR)
- Bakır: 8,9 g/cm³ (ÇOK AĞIR)
- Kurşun: 11,3 g/cm³ (ÇOK AĞIR)

**Pratik Karşılaştırma:** Aynı boyutta iki parça karşılaştırırsanız:

- Alüminyum elinizde "şaşırtıcı derecede hafif" hissedilir
- Çinko alüminyum'dan yaklaşık **2,5 kat ağırdır**
- Paslanmaz çelik çinko'dan az daha ağırdır

Tek başına ağırlık testi belirleyici değildir ama renk + ağırlık birlikte ipucu verir.

## Test 4: Çizik (Sertlik) Testi

Bir bıçak veya çelik tornavida ile metalin yüzeyini hafifçe çizin.

**Yumuşak, Kolayca Çizilen:**
- Alüminyum (Mohs sertliği 2,5-3)
- Saf çinko (Mohs sertliği 2,5)
- Bakır (Mohs sertliği 3)

**Sert, Zor Çizilen:**
- Paslanmaz çelik (Mohs sertliği 5,5-6,5)
- Karbon çeliği (Mohs sertliği 4-5)

**Pratik Yorum:** Bıçak yüzeyde rahatça iz bırakıyorsa alüminyum, çinko veya bakır olabilir. Sert şekilde direnç gösteriyorsa paslanmaz veya çelik adayıdır.

## Test 5: Information Gain — HCl Asit Damla Testi (En Kesin Kimyasal Test)

**UYARI:** Bu test seyreltik HCl (banyo asidi) ile yapılır. Eldiven ve gözlük takın, iyi havalandırılmış alanda çalışın. Çocukların erişiminden uzak tutun. Asla derişik asit kullanmayın.

**Yapılışı:** Metale küçük bir damla seyreltik HCl asit damlatın (banyo asidi yeterlidir).

**Sonuçlar:**

**Hızlı Köpürme + Beyaz Buhar:**
- ÇİNKO! Çinko HCl ile şiddetle reaksiyona girer, hidrojen gazı çıkar (gözle görünmez ama duyulabilir, hafif "fışırtı" sesi)
- Reaksiyon hızlı ve görseldir

**Yavaş Reaksiyon, Gri Kalıntı:**
- ALÜMİNYUM. Alüminyum HCl ile reaksiyona girer ama yavaştır
- Yüzeyde gri-siyah kalıntı oluşur (alüminyum klorür)

**Reaksiyon Yok, Yüzey Aynı:**
- PASLANMAZ ÇELİK. 304 ve 316 paslanmaz HCl'ye dirençlidir
- Karbon çeliği ile karıştırmayın — karbon çeliği yavaş yavaş paslanır

**Yavaş Mavi-Yeşil Kalıntı:**
- BAKIR. Bakır HCl ile reaksiyona girer, yeşil-mavi bakır klorür oluşur

Bu test 30 saniyede çinko-alüminyum-paslanmaz ayrımını kesinleştirir.

## Alüminyum Alt Sınıfları — Saha Bilgisi

Alüminyum tek tip değildir, alaşım sınıfına göre fiyat değişir.

### 6000 Serisi (6063 Alaşımı) — En Yaygın

**Kullanım:** Pencere doğraması, kapı kasası, balkon korkuluğu, sanayi profili
**Saflık:** %97-98
**Hurda Fiyat:** Standart alüminyum fiyatı

### 7000 Serisi (7075 Alaşımı) — Premium

**Kullanım:** Havacılık, uçak gövde paneli, savunma sanayi, yüksek mukavemet uygulamaları
**Saflık:** Mg-Zn-Cu alaşımlı
**Hurda Fiyat:** 6000 serisinin %15-20 üzerinde

### 1100 Serisi — Saf Alüminyum

**Kullanım:** Folyo, gıda ambalajı, izolasyon paneli
**Saflık:** %99+
**Hurda Fiyat:** Yüksek (saflık nedeniyle)

### 5000 Serisi (Magnezyum Alaşımı)

**Kullanım:** Otomotiv gövde paneli, denizcilik, basınç dayanımlı yapılar
**Saflık:** Mg alaşımlı
**Hurda Fiyat:** Orta-yüksek

### Döküm Alüminyum (380 Alaşımı)

**Kullanım:** Otomobil motor blokları, silindir kapakları, dişli kutusu
**Saflık:** Si-Al alaşımı (silisyum içeriği yüksek)
**Hurda Fiyat:** Profil alüminyumdan biraz düşük

### Talaş Alüminyum

**Kullanım:** CNC torna, freze, matkap atölyelerinden çıkan talaş
**Saflık:** Değişken (%80-95), yağ kalıntısı içerir
**Hurda Fiyat:** Profil alüminyumdan %15-25 düşük (yağ nedeniyle)

XRF analizi olmadan alaşım sınıfı tespiti zordur. Akar Hurda Niton XL3t cihazıyla saniyeler içinde alaşım tespiti yaparız.

## Alüminyum Folyo / Kutu — Özel Durum

Alüminyum gıda folyosu, içecek kutusu (kola, bira), aerosol kutusu hurda olarak getirildiğinde:

- Saflık: Düşük (%80-90, çünkü plastik/baskı kaplı)
- Hurda fiyat: Profil alüminyumdan %30-40 düşük
- Çevre faydası: Yüksek (her ton kutu eritimde 9 ton CO2 tasarruf)

Bireysel müşteriler için folyo/kutu alımı genellikle minimum miktar üstündür (50 kg+). Daha küçük miktarlarda evde geri dönüşüm kutusuna atmanızı öneririz.

## Akar Hurda Pratik Yaklaşımı

Hurdanızı bize getirdiğinizde tanıma süreci şu şekildedir:

1. **Hızlı Görsel Tarama:** Saha uzmanımız metaltürünü ön gözle değerlendirir
2. **Mıknatıs Testi:** Demir bazlı ayrım yapılır
3. **XRF Analiz:** Niton XL3t cihazıyla alaşım kompozisyonu (Al, Mg, Cu, Si, Mn yüzdeleri) belirlenir
4. **Sınıf Bazlı Tartım:** Her alaşım sınıfı ayrı kalibre kantarda tartılır
5. **Şeffaf Fiyat:** Sınıf bazlı kg fiyatları uygulanır, toplam onayınıza sunulur

XRF cihazı ekranını size göstererek alaşım kompozisyonunu görsel ispat ederiz. **Sınıflandırma şeffaflığı 20 yıllık marka değerimizin temelidir.**

## Saha Hatası — Galvaniz Kaplı Sac

**En Yaygın Yanılgı:** Galvaniz kaplı çelik sacı (üzerinde çinko kaplama olan demir) saf çinko sanmak. Saf çinko 80-120 TL/kg, galvaniz sac 12-18 TL/kg (demir hurda fiyatı). Fark son derece büyüktür.

**Tanıma:** Mıknatıs galvaniz sacı çeker (altta demir var). Saf çinko mıknatıs çekmez.

> **Akar Hurda Taahhüdü:** Emin değilseniz hurdanızı tesisimize getirin, **ücretsiz tanımlama** yaparız. Test sonucunu size gösterir, doğru kategoride alım yaparız. 0 534 776 75 79.
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
    readingTime: 13,
    image: "/images/blog/atik-tasima-lisansi-placeholder.jpg",
    content: `
## Özet — 60 Saniyede Yasal Çerçeve

Hurda metal alımı Türkiye'de yasal düzenlemelere tabidir. T.C. Çevre, Şehircilik ve İklim Değişikliği Bakanlığı'nın **2/4/2015 tarih ve 29314 sayılı** Atık Yönetimi Yönetmeliği bu sektörü düzenler. Bu yönetmeliğe göre:

1. Tehlikesiz atık (hurda metal) taşıması **lisanslı firmalar** tarafından yapılır
2. Tehlikeli atık (akü, elektronik, motor yağı kalıntısı) **özel lisanslı firma** zorunlu
3. **UATF (Ulusal Atık Taşıma Formu)** sanayi tesisleri ve şirket atıklarında zorunludur
4. Lisanssız hurdacıya verdiğiniz hurda yasadışı bir noktaya bırakılırsa **siz de sorumlusunuz**

Bu rehberde Akar Hurda olarak yasal çerçeveyi sade bir dilde açıklıyor, hangi belgelerin neden zorunlu olduğunu, sizi ne tür risklerden koruduğunu paylaşıyoruz.

## Atık Yönetimi Yönetmeliği — Temel Çerçeve

**Yönetmelik Tam Adı:** Atık Yönetimi Yönetmeliği (29314 sayılı, 2/4/2015 tarihli)
**Yayınlayan:** T.C. Çevre, Şehircilik ve İklim Değişikliği Bakanlığı
**Kaynak:** csb.gov.tr resmi yönetmelik metinleri

Bu yönetmelik 5 ana ilkeyi belirler:

1. **Atığın Önlenmesi:** Atık üretimini en aza indirmek
2. **Geri Kazanım:** Atığın yeniden kullanılabilir hammaddeye dönüştürülmesi
3. **Lisanslı Taşıma:** Atığın yetkili firmalarca taşınması
4. **Bertaraf:** Geri kazanılamayan atığın çevreyi koruyarak imha edilmesi
5. **Sorumluluk Zinciri:** Atığın kaynağından nihai bertarafa kadar kayıtlı süreç

Hurda metal "tehlikesiz atık" kategorisinde olmasına rağmen lisanslı taşıma zorunluluğuna tabidir.

## Atık Taşıma Lisansı Nedir?

Atık taşıma lisansı, Çevre ve Şehircilik İl Müdürlüğü tarafından belirli koşulları karşılayan firmalara verilen yasal yetkidir. Bu lisans:

- Araç bazında verilir (her plaka için ayrı belge)
- Belirli atık kategorileri için sınırlandırılmış olabilir
- Genellikle 5 yıl geçerlidir (yenileme zorunlu)
- Çevre denetimlerinde gösterilmek üzere araçta bulunmalıdır

**Lisansın Şartları:**
- Firma vergi tescili ve ticaret sicil kaydı
- Çevre danışmanlık personeli (uzman çevre mühendisi)
- Atık taşıma ekipmanı (lisans araç, depolama alanı)
- Çevre eğitimi sertifikalı sürücü
- Acil müdahale planı

Akar Hurda olarak tüm bu koşulları sağlıyoruz ve aktif lisansımız vardır. Sertifikalarımızı **/sertifikalar** sayfamızda şeffaf paylaşıyoruz.

## Information Gain — Sizi Doğrudan İlgilendiren 3 Kritik Madde

### 1. Sorumluluk Zinciri (Madde 9)

**Yönetmelik:** Atık Yönetimi Yönetmeliği Madde 9 atığın "kaynak" olan üretici, "taşıyıcı" olan firma ve "alıcı" olan bertaraf tesisi arasında sorumluluk zincirini kurar.

**Sizin İçin Anlamı:** Hurdanızı (atık) lisanssız bir hurdacıya verdiğinizde, o hurdacı yasadışı bir noktaya (vahşi döküm sahası, terk edilmiş arazi) bırakırsa **siz de sorumluluk altına girersiniz**. Çevre denetiminde geriye dönük araştırma yapıldığında atığın kaynağı (siz) belirlenebilir ve cezai yaptırımla karşılaşırsınız.

**Pratik Örnek:** Bir sanayi tesisi atık akümülatörlerini lisanssız hurdacıya verdi. Hurdacı asit kalıntılarını boş araziye boşalttı. Çevre kirliliği denetiminde araştırma sanayi tesisine kadar geldi — kayıtlarda UATF formu olmadığı için yasal sorumluluk paylaşıldı.

### 2. Şirket / Sanayi İçin UATF Zorunluluğu

**UATF (Ulusal Atık Taşıma Formu):** Atık üreticisi (siz), taşıyıcı (lisanslı firma) ve alıcı tesis arasında yasal taşıma belgesidir.

**Kimler İçin Zorunlu:**
- Tüm sanayi tesisleri (vergi numaralı işletmeler)
- Şirket bünyesindeki bakım/onarım faaliyetlerinden çıkan hurdalar
- 1 ton üzeri tek seferlik atık taşımaları (bireysel müşteri olsa bile)
- Tehlikeli atık taşımaları (akü, elektronik, motor yağı kalıntılı)

**Form İçeriği:**
- Atık üreticisi bilgileri (vergi no, adres)
- Atık türü ve kategorisi (Atık Kodu)
- Tahmini ve gerçek miktar
- Taşıyıcı firma bilgileri (lisans no, plaka)
- Alıcı tesis bilgileri (geri kazanım tesisi)
- Üç imza (üretici, taşıyıcı, alıcı)

UATF dijital ve fiziksel olarak Çevre İl Müdürlüğü sistemine bildirilir. Akar Hurda olarak bu formu otomatik düzenleriz.

### 3. Akü ve Elektronik — Tehlikeli Atık Statüsü

**Tehlikeli Atık Tanımı:** Atık Yönetimi Yönetmeliği Ek-3 listesinde yer alan, çevre ve insan sağlığı için risk oluşturan atıklar.

**Hurda Sektöründeki Tehlikeli Atıklar:**
- Kurşun-asit aküler (otomotiv, forklift, jeneratör)
- Lityum-iyon aküler (elektrikli araç, taşınabilir cihaz — Akar Hurda kategorisinde değil)
- Elektronik cihazlar (cıva, kurşun, kadmiyum içerebilir)
- Motor yağı kalıntılı talaş ve sac
- Kimyasal sanayi paslanmaz parçaları
- Yağlı kapasitör, transformatör

**Özel Şartlar:**
- Tehlikeli atık taşıma için ayrı lisans gereklidir
- UATF "tehlikeli atık" kategorisinde düzenlenir
- Acil müdahale planı zorunludur
- Personel özel eğitim sertifikalı olmalıdır

Akar Hurda olarak hem tehlikesiz hem tehlikeli atık taşıma yetkisine sahibiz.

## Lisanslı Hurdacıyı Nasıl Anlarsınız?

5 sinyal lisanslı hurdacıyı belirlemenize yardımcı olur:

**1. Vergi Levhası**

Resmi tescilli işletme. Hurdacının vergi levhası işyerinde görünür yerde olmalıdır. İşletme adı, vergi numarası, vergi dairesi yazılıdır.

**2. Atık Taşıma Lisansı (Plaka Bazlı)**

Her aracın kendi atık taşıma lisans belgesi olmalıdır. Bu belge araçta bulunur ve isteğinizde gösterilebilir. Lisans yenilenme tarihinin gelecekte olduğundan emin olun.

**3. Çevre İzni**

İl Müdürlüğü onaylı işletme izni. Hurdacının depo / işyeri için çevre izni vardır. İzin numarası faturada veya tabelada gösterilebilir.

**4. KOSANO / Sanayi Odası Üyeliği**

Kocaeli Sanayi Odası (KOSANO) veya benzer yerel sanayi odası üyeliği bölgesel meslek standartları sinyalidir.

**5. ISO 14001 Çevre Yönetim Sertifikası (Opsiyonel ama Güçlü Sinyal)**

Akredite belgelendirme kuruluşundan alınan ISO 14001 sertifikası, sürdürülebilir geri kazanım süreçlerini belgeler. Akar Hurda 2022 yılından bu yana ISO 14001 sertifikalıdır.

## Akar Hurda — Tüm Lisanslarımız Şeffaf

Tüm yasal belgelerimizi sitemizdeki **/sertifikalar** sayfasında müşteri görünür şekilde paylaşıyoruz:

1. **Atık Taşıma Lisansı** (Çevre, Şehircilik ve İklim Değişikliği Bakanlığı)
2. **Çevre İzni** (Kocaeli İl Müdürlüğü)
3. **ISO 14001 Çevre Yönetim Sertifikası**
4. **KOSANO Üyelik Belgesi**
5. **Vergi Levhası**
6. **Ticaret Sicil Tescili (2005)**
7. **İş Sağlığı ve Güvenliği Sertifikası**
8. **Tehlikeli Atık Yönetimi Eğitim Sertifikaları**

Adresten alım sırasında lisanslı aracımız ve resmi fatura ile **yasal güvencenizi sağlıyoruz**.

## Sanayi Tesisleri İçin Düzenli Alım Sözleşmesi

Sanayi tesisi sahibi iseniz Akar Hurda'nın düzenli alım sözleşmesi sizin için ideal çözümdür:

**Sözleşme Kapsamı:**
- Aylık veya iki haftalık periyotta kategorize toplama
- UATF formu otomatik düzenleme
- Lisanslı kamyon ile lisanslı taşıma
- Resmi KDV faturası (20%)
- Yıllık atık beyanı raporu (Çevre İl Müdürlüğü için)
- Çevre denetimlerinde tesisinize danışmanlık desteği

Bu paket olmadan sanayi tesisi her seferinde ayrı hurdacı arayıp dokümantasyon koordinasyonu yapmak zorunda kalır. Sözleşmemiz bu yükü kaldırır ve **çevre uyum riskinizi sıfırlar**.

## Pratik Tavsiye — Hangi Hurdacıdan Alım Yapmalı?

**Yapılmaması Gerekenler:**

❌ Sokak arası ilan yapan, vergi kaydı belirsiz hurdacı
❌ Sadece "nakit fiyat" söyleyen, fatura kesemeyen
❌ Lisans belgesi göstermeyi reddeden
❌ Aracında "atık taşıma" yazısı olmayan
❌ "Bana ne olur, sen ver" diyen

**Yapılması Gerekenler:**

✅ Vergi levhası, atık lisansı, çevre izni şeffaf paylaşan
✅ UATF formu kesen
✅ Resmi fatura kesebilen (kurumsal alımlarda)
✅ Tartım ve sınıflandırmayı şeffaf yapan
✅ Sertifikalarını web sitesinde gösteren

## Çevre Cezası Riski — Sayısal Örnek

Lisanssız hurdacıya verilen tehlikeli atık (örn. kurşun-asit akü) yasadışı bir noktaya bırakılırsa cezai yaptırım örnekleri:

- Bireysel atık üreticisi: 10.000-50.000 TL idari para cezası
- Sanayi tesisi: 100.000-500.000 TL idari para cezası
- Tehlikeli atık çevre kirliliği: 2-20 milyon TL ceza + cezai sorumluluk
- Tekrar eden ihlal: İşletme kapatma kararı

**Yasal güvenceniz için lisanslı hurdacı seçmek 50 TL'lik fiyat farkından çok daha değerlidir.**

> **Akar Hurda Taahhüdü:** 20 yıldır lisanslı, sertifikalı, şeffaf hizmet veriyoruz. Tüm belgelerimizi inceleyin: **/sertifikalar**. Sorularınız için 0 534 776 75 79.
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
    readingTime: 10,
    image: "/images/blog/karbon-ayakizi-placeholder.jpg",
    content: `
## Özet — 60 Saniyede Çevre Etkisi

Hurda metalin geri dönüştürülmesi sadece **ekonomik bir kazanç** değil, aynı zamanda **çevresel bir sorumluluk**tur. Birincil madenden metal üretimi son derece enerji yoğun bir süreçtir — geri dönüşüm bu enerjinin %75-95'ini tasarruf eder.

Bu rehberde Akar Hurda olarak metallerin geri dönüşüm CO2 tasarruflarını sayısal verilerle paylaşıyor, sizin getirdiğiniz hurdanın ne kadar çevre etkisi yarattığını somut olarak hesaplıyoruz. 1 ton bakır hurda geri dönüşümünün yaklaşık 4 ton CO2 tasarrufu sağladığını biliyor muydunuz?

## Geri Dönüşümün Çevresel Değeri

Birincil madenden metal üretimi şu süreçleri içerir:

1. **Maden Çıkarma:** Yer altından maden cevheri çıkarılması (yüksek enerji, çevre tahribatı)
2. **Konsantre Hazırlama:** Cevherden saf metalin ayrıştırılması (kimyasal işlem)
3. **Eritme:** Saf metalin yüksek sıcaklıkta eritilmesi (yüksek enerji)
4. **Rafinasyon:** Saflığın yükseltilmesi
5. **Şekillendirme:** Levha, profil veya külçeye dönüştürme

Hurda metalin geri dönüşümünde sadece son 2-3 adım gerekir. Eritme ve şekillendirme adımları birincil üretimden çok daha az enerji tüketir çünkü saflık zaten yüksektir.

## Information Gain — Metal Bazında CO2 Tasarrufu

International Council on Mining & Metals (ICMM) 2023 raporu ve Akar Hurda saha verilerine göre:

| Metal | Birincil Üretim Enerjisi | Geri Dönüşüm Tasarrufu | CO2 Tasarrufu (ton/ton hurda) |
|-------|--------------------------|------------------------|-------------------------------|
| Alüminyum | 195 GJ/ton | %95 | 9 ton |
| Bakır | 95 GJ/ton | %85 | 4 ton |
| Çelik (demir) | 22 GJ/ton | %74 | 1,5 ton |
| Çinko | 70 GJ/ton | %75 | 3 ton |
| Kurşun | 35 GJ/ton | %65 | 1 ton |
| Nikel | 130 GJ/ton | %75 | 5 ton |

**Yani:** 1 ton alüminyum hurdayı geri dönüştürdüğünüzde, atmosfer 9 ton CO2 daha az salımdan kurtulur. Bu yaklaşık 38 ağacın yıllık karbon tutma kapasitesine eşittir.

## Akar Hurda — Yıllık Çevre Etkimiz

2024 yılında Akar Hurda olarak topladığımız tahmini metal kategorileri ve CO2 tasarrufu:

| Metal | Yıllık Toplama | CO2 Tasarrufu |
|-------|----------------|---------------|
| Bakır (saf + kablo) | ~50 ton | ~200 ton CO2 |
| Alüminyum | ~30 ton | ~270 ton CO2 |
| Demir-çelik | ~200 ton | ~300 ton CO2 |
| Çinko | ~5 ton | ~15 ton CO2 |
| Akü (kurşun) | ~10 ton (kurşun) | ~10 ton CO2 |
| Paslanmaz çelik | ~3 ton | ~6 ton CO2 |
| **TOPLAM** | **~298 ton metal** | **~801 ton CO2** |

Bu yaklaşık **800 ton CO2 tasarruf**, yıllık 40 hektar ormanlık alanın karbon tutma kapasitesine eşdeğerdir. Ya da bireysel araç bazında düşünürseniz, ortalama bir benzinli otomobilin yıllık 4 ton CO2 saldığı kabul edildiğinde, **200 otomobilin yıllık emisyonunu** tasarruf etmiş oluyoruz.

## Sizin Katkınız — Pratik Hesap

Hurdanızı Akar Hurda'ya getirdiğinizde yaratacağınız çevresel etkiyi sayılarla ifade edelim:

**10 kg Bakır Kablo Hurdası:**
- Net bakır: ~5 kg (kablo türüne göre)
- CO2 tasarrufu: ~20 kg
- Yeni bakır madenciliği önler: ~5 kg
- Eşdeğeri: 1 ağacın yıllık karbon tutması

**100 kg Alüminyum Hurda:**
- CO2 tasarrufu: ~900 kg (yaklaşık 1 ton)
- Yeni alüminyum üretimini önler: 100 kg
- Eşdeğeri: 4 ağacın yıllık karbon tutması

**1 Ton Demir Hurdası (Tipik İnşaat Şantiyesi):**
- CO2 tasarrufu: ~1.500 kg
- Yeni demir üretimini önler: 1 ton
- Eşdeğeri: 6 ağacın yıllık karbon tutması

**5 Adet Otomotiv Akü:**
- Net kurşun: ~30 kg
- CO2 tasarrufu: ~30 kg
- Asit kontaminasyonu önleme: 30+ litre
- Eşdeğeri: Çevreye toksik yayılım tamamen önlenmiş

## Sürdürülebilir İşletme — Akar Hurda Süreci

ISO 14001 Çevre Yönetim Sistemi sertifikamızla, topladığımız her ton hurda için süreç şeffaftır:

### 1. Toplama (Lisanslı Araç + Optimize Rota)

Atık taşıma lisanslı kamyonlarımız belirlenmiş rotalarda hareket eder. Yakıt verimliliği için günlük toplama planı optimize edilir, gereksiz kilometre minimuma indirilir.

### 2. Ayrıştırma (Sınıf Bazlı, Çapraz Kontamine Yok)

Tesisimizde gelen hurda kategori bazında ayrıştırılır:
- Bakır: 1A, 2A, kablo, motor sınıfları
- Alüminyum: 6000, 7000, 1100 serisi
- Paslanmaz: 304, 316, 430 sınıfları
- Demir: sac, profil, talaş, inşaat demiri

Çapraz kontamine olmaması için her kategori ayrı bölmede depolanır. Bu titizlik geri kazanım veriminin yüksek olmasını sağlar.

### 3. Geri Kazanım Tesislerine Teslim

Ayrıştırılmış hurda yetkili eritme tesislerine teslim edilir:
- Demir-çelik: Yerel demir-çelik üreticileri (Erdemir, İsdemir)
- Bakır: Bakır rafineri tesisleri (genellikle yurtiçi)
- Alüminyum: Alüminyum eritme tesisleri
- Paslanmaz: Özel paslanmaz eritme (genellikle ihracat)

Her teslimat UATF formu ile dokümante edilir. Yıllık özet rapor hazırlanır.

### 4. Yeniden Üretim Döngüsü

Eritilen metal yeni ürünler için hammadde olur:
- Bakır: Yeni elektrik kabloları, su tesisat boruları
- Alüminyum: Pencere doğraması, içecek kutusu, otomotiv parça
- Demir: İnşaat demiri, sac, profil
- Paslanmaz: Mutfak ekipmanı, sanayi tesisat

Bu döngü **circular economy** (döngüsel ekonomi) prensibinin gerçek uygulamasıdır. Sizin hurdanız 30-90 gün içinde başka bir ürün olarak rafa çıkar.

## Kurumsal Sürdürülebilirlik Raporlama

Şirket bünyesinde sürdürülebilirlik raporu (CSR, ESG) hazırlıyorsanız Akar Hurda'nın yıllık hurda toplama raporu sizin için kullanışlı olabilir.

**Rapor İçeriği:**
- Yıllık toplam tonaj (kategori bazında)
- Tahmini CO2 tasarrufu (ton)
- UATF numaraları (denetim kanıtı)
- ISO 14001 ve diğer sertifika referansları
- Çevre denetimlerine hazır dosya yapısı

Bu raporu kurumsal müşterilerimize ücretsiz hazırlıyoruz. Aktif tesis sözleşmelerinde rapor yıl sonunda otomatik gönderilir.

## Pratik Bilgi — Toprak Kontaminasyonu Önleme

Hurda metalin doğru geri dönüştürülmesi sadece atmosfer CO2 tasarrufu değil, **toprak ve yer altı suyu kirliliğini de önler**.

**Yanlış İmha Edilmiş 1 Akünün Etkisi:**
- 100 m² toprak alanını kurşunla kontamine edebilir
- Yer altı suyuna 50 yıl boyunca sızıntı yapar
- Çevre temizleme maliyeti: 50.000-200.000 TL

**Yanlış İmha Edilmiş 1 Ton Elektronik Atığın Etkisi:**
- Cıva, kurşun, kadmiyum salımı
- Toprak ve yer altı suyu uzun vadeli kontaminasyon
- Çocuk gelişimine olumsuz etki (kronik düşük doz maruziyet)

Akar Hurda lisanslı taşıma + yetkili tesis teslimi süreciyle bu riskler tamamen önlenir.

## Bilgi Notu — Hesaplama Yöntemi

Bu yazıda paylaşılan CO2 tasarruf rakamları sektör ortalamalarıdır:
- Bakır 4 ton CO2/ton hurda: ICMM 2023 raporu
- Alüminyum 9 ton CO2/ton hurda: International Aluminium Institute
- Çelik 1,5 ton CO2/ton hurda: World Steel Association

Akar Hurda yıllık tonaj rakamları işletme tahmini olup, kesin sayılar yıllık atık beyanı raporunda Çevre İl Müdürlüğü'ne bildirilir.

İşletmeniz için özel sürdürülebilirlik raporlama ihtiyacınız varsa (ESG, CSR, ISO 14001 denetim) bizimle iletişime geçebilirsiniz. **0 534 776 75 79.**

> **Akar Hurda Vizyonu:** Hurdanızı yetkili bir adrese teslim ederek hem ekonomik kazanç sağlıyor, hem de çevreye somut katkı yapıyorsunuz. 20 yıllık taahhüdümüz bu döngüyü şeffaf ve sürdürülebilir tutmak.
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
