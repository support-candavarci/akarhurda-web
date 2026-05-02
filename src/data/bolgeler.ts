/**
 * Hizmet bölgesi (ilçe) verisi — Sprint 1A KEYWORD-MASTER + Sprint 1C TOPICAL-MAP miras.
 *
 * KRİTİK SEO NOTU: Sprint 1A keşfi — Yerel keyword'lerde KELIME SIRASI 5-30x fark yaratır:
 *   - "gebze hurdacı" 1.900/ay (DOĞRU)
 *   - "hurdacı gebze" 320/ay (TERS)
 *
 * Title formülü: `[İlçe] Hurdacı | Akar Hurda — 20 Yıl Deneyim`
 *
 * Her bölge: longDescription (~600 kelime native TR + Information Gain) + standart alanlar.
 */
export interface Bolge {
  /** URL slug — `/hizmet-bolgeleri/[slug]` */
  slug: string;
  /** İlçe adı */
  name: string;
  /** Üst düzey (ilçe/şehir) */
  district: string;
  city: string;
  /** Yaklaşık koordinat (LocalBusiness areaServed schema için) */
  lat: number;
  lng: number;
  /** Nüfus (yaklaşık, TÜİK 2023) */
  population: string;
  /** Sprint 1A primary keyword (DOĞRU sırayla) */
  primaryKeyword: string;
  /** Aylık arama hacmi (Google Keyword Planner 2026-05-01) */
  primaryVolume: number;
  /** İkincil keyword'ler */
  secondaryKeywords: string[];
  /** Bölge tanım metni (areaServed schema description) */
  description: string;
  /** Akar Hurda merkezine yaklaşık mesafe (km) */
  distanceKm: number;
  /** Detaylı uzun açıklama (~600 kelime). Bölgeye özgü Information Gain içerir. */
  longDescription?: string;
  /** Bölgede öne çıkan müşteri profili — pSEO için */
  customerProfile?: string;
}

export const bolgeler: Bolge[] = [
  {
    slug: "gebze",
    name: "Gebze",
    district: "Gebze",
    city: "Kocaeli",
    lat: 40.79,
    lng: 29.43,
    population: "390.000+",
    primaryKeyword: "Gebze Hurdacı",
    primaryVolume: 1900,
    secondaryKeywords: [
      "gebze hurda alımı",
      "gebze hurdaci",
      "gebze hurda fiyatları",
      "şekerpınar hurdacı",
      "gebze hurdacı telefon numarası",
    ],
    description:
      "Gebze ve Şekerpınar bölgelerinde 20 yıllık tecrübemizle hurda metal alım hizmeti veriyoruz. Akar Hurda merkez tesisimiz Balçık Mahallesi'nde yer alır — Gebze'nin tüm noktalarına 30 dakika içinde adresten alıma çıkıyoruz.",
    distanceKm: 0,
    customerProfile: "Sanayi atölyeleri, organize sanayi bölgesi tesisleri, ev tadilatı sahipleri, elektrik tesisatçıları",
    longDescription: `Gebze, Akar Hurda'nın 20 yıldır faaliyet gösterdiği ana merkezdir. Balçık Mahallesi'ndeki tesisimiz Gebze'nin sanayi yoğunluğunun kalbinde yer alır — Gebze Organize Sanayi Bölgesi (GOSB), İMES OSB ve Plastikçiler OSB tesislerine 5-15 dakika mesafededir. Şekerpınar, Sultan Orhan, Mevlana, Cumaova ve Yenikent mahalleleri dahil Gebze'nin tüm bölgelerine adresten ücretsiz alım hizmeti sağlıyoruz.

**Gebze Müşteri Profili:**

Gebze'de hurda hizmeti talep eden müşterilerimiz dört ana grupta toplanır:

1. **Sanayi Atölyeleri ve Fabrikalar:** GOSB, Plastikçiler OSB ve çevredeki bağımsız sanayi sitelerinde yer alan CNC torna atölyeleri, sac kesim tesisleri, otomotiv yan sanayi üreticileri haftalık veya aylık düzenli talaş ve sac demir hurdası üretirler. Akar Hurda olarak bu tesislere düzenli alım sözleşmeleri sunuyoruz.

2. **Elektrik Tesisatçıları:** Gebze ve Şekerpınar'da yoğun konut yapılaşması ve sanayi tesisi tadilatları nedeniyle elektrik tesisatçılarından sürekli kablo hurdası çıkıyor. NYM, NYAF ve NYY kabloları için soyma hizmeti dahil olarak alım yapıyoruz.

3. **Ev Tadilatı Sahipleri:** Gebze'nin eski mahallelerinde (özellikle Mevlana, Sultan Orhan) banyo-mutfak tadilatı, eski tesisat sökümü, beyaz eşya yenileme yaygındır. 50 kg üzeri ev hurdası taleplerine 1-3 saat içinde randevu veriyoruz.

4. **İnşaat Şefleri:** Gebze yeni konut projelerinin yoğun bölgesidir. Proje bitimi inşaat demiri hurdası, kalıp demir, sökülen tesisat malzemeleri tonajlı alım yapıyoruz. UATF dokümantasyonu otomatik düzenlenir.

**Gebze Sanayi Bölgeleri ile Çalışma:**

GOSB ve diğer organize sanayi bölgelerine 100+ tesisle düzenli sözleşmemiz var. Bu sözleşmeler ortalama 5-50 ton/ay tonaj kapasitesinde, haftalık veya iki haftalık periyotlarda toplama, UATF, KDV faturası ve yıllık atık beyanı raporu kapsamlı paketini içerir. Yeni başlayacak tesisler için saha keşif hizmetimiz ücretsizdir.

**Gebze'ye Özgü Bilgi:**

Gebze'de bakır kablo hurdası talebi diğer ilçelere göre %30-40 daha yüksektir — bu hem yerleşim yoğunluğu hem sanayi tesislerinin elektrik altyapı yenilemelerinden kaynaklanır. Akar Hurda olarak Gebze'de aylık ortalama 8-12 ton kablo hurdası topluyoruz, bu da bakır eritme tesislerine teslim edilen yıllık tonajın önemli bir bölümünü oluşturur.

Mesai saatleri Pazartesi-Cumartesi 08:00-19:00 arasıdır. Acil durumlar için (proje bitimi, ani temizlik talebi) Pazar günleri de telefon ile randevu alınabilir.`,
  },
  {
    slug: "darica",
    name: "Darıca",
    district: "Darıca",
    city: "Kocaeli",
    lat: 40.7676,
    lng: 29.3796,
    population: "240.000+",
    primaryKeyword: "Darıca Hurdacı",
    primaryVolume: 590,
    secondaryKeywords: [
      "darıca hurda alımı",
      "darıca hurda fiyatları",
      "hurdacı darıca",
    ],
    description:
      "Darıca ilçesindeki ev, atölye ve sanayi tesislerinden hurda metal alımı yapıyoruz. Akar Hurda Gebze tesisine 5 km mesafede — adresten alım hızlı ve ücretsizdir.",
    distanceKm: 5,
    customerProfile: "Ev sahipleri, küçük işletmeler, deniz kıyısı dekorasyon-restorasyon sektörü, beyaz eşya servisleri",
    longDescription: `Darıca, Marmara kıyısında konumlanmış canlı bir ilçe olarak Akar Hurda'nın yoğun hizmet bölgelerinden biridir. Gebze tesisimize sadece 5 km mesafede olduğu için adresten alım hizmeti son derece hızlıdır — talep aldığımız çoğu Darıca müşterimize 1-2 saat içinde ulaşıyoruz.

**Darıca Müşteri Profili:**

Darıca'nın yapı yoğunluğu konut ağırlıklı olduğundan müşteri profilimiz Gebze'den farklı bir karakter taşır:

1. **Ev Sahipleri:** Darıca'nın yoğun konut alanlarında (özellikle Cami Mahallesi, Bayramoğlu, Osmangazi) ev tadilatı, eski tesisat sökümü ve beyaz eşya yenileme talepleri yaygındır. Akar Hurda olarak Darıca ev hurdalarına özel önem veriyoruz.

2. **Küçük İşletmeler:** Darıca merkezde restoran, kafe, kuaför gibi küçük işletmelerin yenileme süreçlerinde mutfak ekipmanı (paslanmaz çelik), klima, beyaz eşya hurdası çıkar. Bu küçük işletmeler için minimum miktar bizim için sorun değildir.

3. **Sahil Şeridi Restorasyon:** Bayramoğlu sahil mahallesinde eski binaların restorasyonu süreçlerinde paslanmaz çelik korkuluk, alüminyum doğrama ve bakır iletkenli su tesisatı yenilenir. Akar Hurda olarak bu projelere kategori bazlı şeffaf alım yapıyoruz.

4. **Beyaz Eşya Servisleri:** Darıca'da yerleşik beyaz eşya tamir servislerinden hurda kompresör, motor ve dahili parçalar alımı yapıyoruz. Bu parçalar hem demir hem bakır içerikli olduğundan ayrı sınıflandırma uygulanır.

**Darıca'ya Özgü Bilgi:**

Darıca'nın deniz kıyısı konumu nedeniyle bazı binalarda paslanmaz çelik (özellikle 316 marin sınıf paslanmaz) kullanımı görülür. Bu malzeme deniz tuzunun korozif etkisine dayanıklı olduğundan dış cephe, balkon korkuluk ve dış ekipmanda tercih edilir. Hurda olarak çıktığında 304 paslanmaza göre %15-25 daha yüksek değerlidir — Akar Hurda XRF analiziyle bu ayrımı yapıyor.

**Adresten Alım Süreci:**

Darıca müşterilerimize 50 kg üzeri taleplerde ücretsiz adresten alım sunuyoruz. Daha küçük miktarlarda Gebze tesisimize teslim edebilirsiniz (5 km mesafe — kısa sürede ulaşılır). Mesai saatleri Pazartesi-Cumartesi 08:00-19:00 arasıdır.

**Bölgesel Tonaj Verileri:**

Akar Hurda'nın 2024 yılı Darıca'dan toplam topladığı hurda yaklaşık dağılımı: %45 demir (ev tesisat + beyaz eşya iç sacı), %20 bakır (kablo + tesisat), %15 alüminyum (doğrama + kapı), %10 paslanmaz (mutfak + sahil), %5 akü, %5 diğer. Bu kompozisyon Darıca'nın konut ağırlıklı karakterini yansıtır.

**Acil Durum Hizmetleri:**

Darıca'da apartman yenileme veya şantiye proje bitimi gibi acil durumlar için Pazar günleri telefon ile randevu alınabilir. Bu durumlarda hafta içi mesai saatleri dışında özel ekip görevlendirmesi yapılır.`,
  },
  {
    slug: "cayirova",
    name: "Çayırova",
    district: "Çayırova",
    city: "Kocaeli",
    lat: 40.8167,
    lng: 29.3833,
    population: "150.000+",
    primaryKeyword: "Çayırova Hurdacı",
    primaryVolume: 480,
    secondaryKeywords: [
      "çayırova hurda alımı",
      "çayırova hurda fiyatları",
      "hurdacı çayırova",
    ],
    description:
      "Çayırova ilçesi sanayi bölgesi ve konut alanlarında hurda metal alımı. Atölye, fabrika ve ev hurdası tüm kategorilerde Akar Hurda kapasitemize uygun. Gebze tesisimize 7 km uzaklıkta.",
    distanceKm: 7,
    customerProfile: "İMES OSB ve Çayırova Sanayi tesisleri, otomotiv yan sanayi, plastik üreticileri, lojistik atölyeleri",
    longDescription: `Çayırova, Kocaeli'nin sanayi profilinin en yoğun olduğu bölgelerden biridir. İMES Organize Sanayi Bölgesi başta olmak üzere çok sayıda sanayi sitesi ve büyük ölçekli üretim tesisi barındırır. Akar Hurda Gebze tesisine 7 km mesafede olduğumuz için Çayırova sanayi tesislerine düzenli ve hızlı hizmet veriyoruz.

**Çayırova Sanayi Profili:**

Çayırova'da hizmet verdiğimiz tesis kategorileri:

1. **Otomotiv Yan Sanayi:** Çayırova ve İMES OSB'de Türk otomotiv sektörünün önemli yan sanayi tedarikçileri yer alır. CNC torna atölyeleri, sac kesim tesisleri, döküm fabrikaları haftalık ortalama 2-8 ton metal hurda üretirler. Akar Hurda olarak bu tesislere düzenli alım sözleşmeleri sunuyoruz.

2. **Plastik ve Ambalaj Üreticileri:** Çayırova'nın plastik sektörü tesisleri kalıp metal hurdası, makine yenileme atıkları ve ambalaj makinesi çelik hurdası üretirler. Plastik kalıp sanayisinde kullanılan paslanmaz çelik (316L) hurda olarak yüksek değerlidir.

3. **Makine Atölyeleri:** Sanayiye servis veren makine bakım atölyeleri eski makine parçaları, motor blok, dişli kutu ve sanayi tezgah parçaları üretirler. Bu atıklar genellikle karışık metal kategorisinde değerlendirilir, XRF analiziyle ayrıştırma yapılır.

4. **Lojistik ve Depo İşletmeleri:** Çayırova'nın D-100 ve TEM bağlantısı nedeniyle yoğun lojistik altyapısı vardır. Forklift akü değişimi, depo raf demir hurdası, yükleme ekipmanı parçaları için tonajlı alım yapıyoruz.

**Çayırova'ya Özgü Bilgi:**

İMES OSB tesislerinin %60'ı otomotiv yan sanayi olduğundan Çayırova'dan toplanan hurdada talaş oranı diğer ilçelere göre yüksektir. Akar Hurda saha tecrübesi göstermektedir ki Çayırova ortalama bir CNC atölyesi haftalık 1-3 ton demir talaşı + 200-500 kg alüminyum talaşı + 50-150 kg paslanmaz talaş üretmektedir. Bu talaş yağ içerdiğinden 48 saat süzme uygulaması fiyat üzerinde olumlu etki yaratır.

**Çayırova Konut Bölgesi:**

İlçenin Cumhuriyet, Mevlana ve Atatürk mahalleleri konut ağırlıklıdır. Bu bölgelerden gelen müşteri talepleri ev tadilatı, beyaz eşya yenileme ve elektrik tesisatçı kabloları yoğunluktadır. Bu küçük talepler için minimum 50 kg miktar koşulu uygulanır.

**Düzenli Alım Sözleşmesi Avantajları:**

Çayırova'da çalıştığımız sanayi tesisleri düzenli alım sözleşmesinin avantajlarını değerlendirir: aylık fatura, sabit fiyat formülü, UATF dokümantasyonu otomatik, atık beyanı raporu yıllık dahil, saha denetim hazırlığı sertifikalı. Bu paket olmadan tesisler her seferinde ayrı hurdacı arayıp pazarlık yapmak zorunda kalır — sözleşmemiz bu yükü kaldırır.

**Adresten Alım Süreci:**

Çayırova müşterilerimize 50 kg üzeri taleplerde ücretsiz adresten alım, sanayi tesislerinde tonajlı taşıma için lisanslı kamyon (5-25 ton kapasitesi) hizmeti sunuyoruz. Mesai saatleri Pazartesi-Cumartesi 08:00-19:00 arasıdır.`,
  },
  {
    slug: "dilovasi",
    name: "Dilovası",
    district: "Dilovası",
    city: "Kocaeli",
    lat: 40.7732,
    lng: 29.5311,
    population: "55.000+",
    primaryKeyword: "Dilovası Hurdacı",
    primaryVolume: 50,
    secondaryKeywords: [
      "dilovası endüstriyel hurda",
      "dilovası fabrika hurda",
      "dilovası hurda alımı",
    ],
    description:
      "Dilovası organize sanayi bölgesindeki fabrika ve atölyelere yönelik endüstriyel hurda alımı. Tonaj kapasitemiz, lisanslı taşımamız ve UATF dokümantasyonumuzla sanayi tesisleri için ideal partner.",
    distanceKm: 10,
    customerProfile: "Dilovası OSB tesisleri, ağır sanayi, kimyasal sanayi, demir-çelik üreticileri, lojistik ve depo işletmeleri",
    longDescription: `Dilovası, Türkiye'nin en yoğun ağır sanayi bölgelerinden biridir. Dilovası Organize Sanayi Bölgesi (DOSB) ve çevresindeki bağımsız sanayi siteleri demir-çelik, kimyasal sanayi, gemi yan sanayi ve büyük ölçekli üretim tesislerini barındırır. Akar Hurda olarak Dilovası'na 10 km mesafede konumlanmış olarak bu sanayi yoğun bölgeye düzenli endüstriyel hurda hizmeti sunuyoruz.

**Dilovası Sanayi Profili:**

Dilovası'nda hizmet verdiğimiz tesis kategorileri büyük ölçekli üretim odaklıdır:

1. **Demir-Çelik Yan Sanayi:** Dilovası'nda demir profili işleme, sac kesim, tel çekme, soğuk şekillendirme tesisleri yaygındır. Bu tesisler aylık 50-200 ton metal hurda üretirler. Akar Hurda olarak bu tesislere özel tonajlı sözleşmeler sunuyoruz, kantar köprüsü ve ağır vasıta ile alım yaparız.

2. **Kimyasal Sanayi:** Dilovası kimyasal sanayi tesisleri özel atık kategorilerine sahiptir — paslanmaz çelik tank, korozyon yıpranmış reaktör parçaları, özel alaşımlı boru sistemleri. Bu atıklar XRF analiziyle özel sınıflandırılır.

3. **Gemi Yan Sanayi:** Dilovası limanı ve çevresindeki gemi inşa/onarım atölyelerinde paslanmaz çelik (316 marin sınıf), bronz propeller parçaları, çinko anot atıkları çıkar. Bu özel kategoriler yüksek değerlidir.

4. **Büyük Ölçekli Üretim Tesisleri:** Beyaz eşya, otomotiv komple parça üreticileri, ağır makine üreticileri sanayi atıklarını düzenli sözleşmeyle yönetirler.

**Endüstriyel Tonaj Kapasitesi:**

Dilovası tesislerinde 10 ton üzeri tek seferlik alımlar standart hale gelmiştir. Akar Hurda olarak bu kapasitede çalışmaya alışkınız:

- Lisanslı kamyon parkımız 5 ton, 10 ton, 25 ton kapasiteli araçlar içerir
- Tesisinize kantar köprülü kamyon gönderebiliriz (kantar belgesi veya kantarlı tartım için)
- 100 ton üzeri proje bitimi alımları için aşamalı taşıma planı hazırlanır
- Kapasitemiz dışındaki ulusal-uluslararası ölçekli alımlarda partner ağımızla koordineli hizmet veririz

**Yasal ve Çevre Uyum:**

Dilovası kimyasal sanayi yoğunluğu nedeniyle çevre denetimi sıkıdır. Akar Hurda'nın atık taşıma lisansı, çevre izni ve ISO 14001 sertifikası bu denetimlerde tesisinizin yasal güvencesini sağlar. UATF formu, KDV faturası, Çevre İl Müdürlüğü bildirim formu otomatik düzenlenir.

**Tehlikeli Atık Karışımı:**

Dilovası tesislerinden gelen hurdalarda zaman zaman kimyasal kontamine, motor yağı kalıntısı, kesme sıvısı kalıntısı bulunur. Bu durumlar Akar Hurda saha ekibimiz tarafından önceden değerlendirilir ve gerekirse ön temizleme süreci planlanır.

**Saha Keşif Hizmeti:**

Yeni başlayacak Dilovası tesisleri için saha keşif ekibimiz tesisinize giderek atık türü, depolama alanı ve nakliye lojistiği analizi yapar. Bu hizmet ücretsizdir ve bağlayıcı değildir — sadece teklifimizi hazırlamamıza yardımcı olur.`,
  },
  {
    slug: "pendik",
    name: "Pendik",
    district: "Pendik",
    city: "İstanbul",
    lat: 40.8775,
    lng: 29.2588,
    population: "750.000+",
    primaryKeyword: "Pendik Hurdacı",
    primaryVolume: 1300,
    secondaryKeywords: [
      "pendik hurda alımı",
      "pendik hurda fiyatları",
      "hurdacı pendik",
    ],
    description:
      "Pendik bölgesinde ev hurdası, inşaat hurdası ve elektrik tesisat hurdası alımı yapıyoruz. Akar Hurda Gebze tesisine 15 km mesafede — randevulu adresten alım hızlı ve ücretsiz.",
    distanceKm: 15,
    customerProfile: "Ev sahipleri, inşaat şefleri, elektrik tesisatçıları, beyaz eşya servisleri, küçük sanayi atölyeleri",
    longDescription: `Pendik, İstanbul'un Anadolu yakası'nın en yoğun nüfuslu ilçelerinden biridir. 750.000+ nüfusu, yoğun konut yapılaşması, büyük inşaat projeleri ve sanayi siteleriyle Akar Hurda'nın önemli hizmet bölgelerinden birini oluşturur. Gebze tesisimize 15 km mesafede konumlanmış olarak Pendik bölgesine 30-45 dakika içinde adresten alıma çıkıyoruz.

**Pendik Müşteri Profili:**

Pendik'te dört ana müşteri grubuna hizmet veriyoruz:

1. **Ev Sahipleri:** Pendik'in yoğun konut bölgelerinde (özellikle Çamçeşme, Kavakpınar, Yenişehir, Yayalar) ev tadilatı, eski tesisat sökümü, beyaz eşya yenileme talepleri sürekli gelir. Akar Hurda olarak Pendik ev müşterilerine 50 kg üzeri taleplerde ücretsiz adresten alım sağlarız.

2. **İnşaat Şefleri:** Pendik son 10 yıldır İstanbul'un en yoğun konut yapılaşma bölgelerinden biridir. Yeni proje şantiyelerinden inşaat demiri hurdası, kalıp demir, eski yapı sökümü atıkları çıkar. Tonajlı alım için lisanslı kamyon ve UATF dokümantasyonu sunuyoruz.

3. **Elektrik Tesisatçıları:** Pendik'in geniş konut ve ticari yapı stoku yenileme süreçlerinde elektrik altyapısı yenilenir. Bakır kablo hurdası, panolar, sigorta ekipmanları haftalık olarak çıkar. Bu tesisatçılar için soyma hizmeti dahil olarak alım yaparız.

4. **Küçük Sanayi Atölyeleri:** Pendik sanayi sitelerinde yer alan küçük üretim atölyeleri, oto tamir merkezleri, mobilya atölyeleri farklı kategorilerde hurda üretirler. Bu işletmeler için aylık periyotta alım sözleşmesi mümkündür.

**Pendik'e Özgü Bilgi:**

Pendik'in coğrafi konumu (sahil + deniz kıyısı) ve yoğun konut yapılaşması nedeniyle bazı özel atık kategorileri yaygındır:

- **Klima ve Soğutma Sistemleri:** Pendik'in yaz aylarında yoğun klima yenilemesi nedeniyle bakır iletkenli soğutma sistemleri ortalama yılda 200-300 ton bakır içerikli atık üretir. Bu sistemlerden çıkan bakır boru ve kompresör motorları Akar Hurda'da özel kategori olarak değerlendirilir.

- **Beyaz Eşya Hurdası:** Pendik konut yoğunluğu beyaz eşya yenileme oranını artırır. Eski buzdolabı, çamaşır makinesi, klima dış ünitesi gibi eşyalar demir + bakır içerikli karma hurda olarak değerlendirilir.

- **İnşaat Sökümü:** Pendik'te yenileme yapılan eski binalardan demir profil, su tesisat bakır boruları, kalorifer sistem demir radyatörleri çıkar. Bu atıklar şantiye temizliği kapsamında düzenli toplama yapılır.

**Adresten Alım Süreci:**

Pendik müşterilerimize randevu sistemi ile çalışıyoruz. Telefon görüşmesinde miktar ve kategori bilgisi alınır, aynı gün veya ertesi gün için saat aralığı belirlenir. Pendik'e yolculuk Gebze'den 30-45 dakika sürdüğünden randevu disiplini önemlidir — biz vaktinde geliriz, sizden de hazır olmanızı rica ederiz.

**Mesafe Avantajı:**

15 km mesafe Pendik müşterileri için pratiktir — adresten ücretsiz alım eşiği 50 kg olarak belirlenmiştir, bunun altındaki taleplerde Gebze tesisimize teslim seçeneği vardır. Tesise teslim durumunda kg fiyatı %3-5 daha yüksek uygulanır (lojistik avantajı yansıtılır).`,
  },
  {
    slug: "tuzla",
    name: "Tuzla",
    district: "Tuzla",
    city: "İstanbul",
    lat: 40.815,
    lng: 29.305,
    population: "270.000+",
    primaryKeyword: "Tuzla Hurdacı",
    primaryVolume: 70,
    secondaryKeywords: [
      "tuzla sanayi hurda",
      "tuzla hurda alımı",
      "hurdacı tuzla",
    ],
    description:
      "Tuzla sanayi bölgesi ve marina çevresindeki tesislerden hurda metal alımı. Tersane ve metal işleme atölyeleri için endüstriyel kapasiteli hizmet. Gebze tesisimize 12 km uzaklıkta.",
    distanceKm: 12,
    customerProfile: "Tuzla Tersane bölgesi, denizcilik sanayi, metal işleme atölyeleri, marina işletmeleri, sanayi siteleri",
    longDescription: `Tuzla, Türkiye'nin gemi inşa ve denizcilik sanayisinin merkezidir. Tuzla Tersanesi ve çevresindeki metal işleme atölyeleri, marina işletmeleri ve sanayi siteleri Akar Hurda'nın özel hizmet sunduğu özel bir bölgedir. Gebze tesisimize 12 km mesafede konumlanmış olarak Tuzla'ya endüstriyel kapasiteli hurda alım hizmeti veriyoruz.

**Tuzla Sanayi Profili:**

Tuzla'da hizmet verdiğimiz tesis kategorileri denizcilik odaklıdır:

1. **Gemi İnşa Tesisleri:** Tuzla Tersanesi'nde aktif gemi inşa, onarım ve söküm faaliyetleri sürekli metal hurda üretir. Sökümden çıkan demir-çelik plakalar, paslanmaz çelik (316 marin sınıfı) tank ve boru sistemleri, bakır kablo, çinko anot atıkları, alüminyum üst yapı parçaları farklı kategorilerde değerlendirilir.

2. **Metal İşleme Atölyeleri:** Tuzla'nın tersane çevresinde gelişmiş metal işleme atölyeleri sac kesim, plazma kesim, kaynak ve montaj hizmetleri verir. Bu atölyelerden günlük talaş ve sac demir hurdası çıkar.

3. **Marina İşletmeleri:** Tuzla Marinaları'nda yat ve tekne bakım işleri sürekli metal yenileme gerektirir — paslanmaz çelik korkuluk, bronz propeller, çinko anot, alüminyum dış ekipman. Bu denizcilik özel atıkları nadir bulunur ama yüksek değerlidir.

4. **Sanayi Siteleri:** Tuzla'nın iç bölgelerinde küçük-orta ölçekli sanayi siteleri otomotiv yan sanayi, plastik enjeksiyon, makine bakım hizmetleri verir.

**Marin Sınıf Paslanmaz (316) Özel Önem:**

Tuzla'nın denizcilik karakteri nedeniyle 316 marin sınıf paslanmaz çelik en yaygın paslanmaz türüdür. 304 paslanmaza göre %15-25 daha yüksek değerlidir çünkü %2-3 molibden içeriği LME'de pahalıdır. Akar Hurda XRF analiz cihazımızla bu sınıf farkını saniyeler içinde tespit ediyoruz — gözle ayrım yapılamaz, bu yüzden gerekli teknolojik altyapıya yatırım yaptık.

**Bronz Propeller ve Denizcilik Bronzları:**

Tuzla'dan zaman zaman gemi pervanesi, deniz vana parçaları gibi büyük bronz parçalar gelir. Bu bronzlar genellikle %88-92 bakır + %8-12 kalay içerir, kalay LME'de bakırın 3-4 katı fiyatlıdır. Bronz hurda fiyatı bu yüzden pirinçten %50 daha yüksektir.

**Çinko Anot Toplama:**

Tuzla marinalarında ve tersanesinde gemi/yat korozyon korumasında kullanılan çinko anotlar yıllık tonajlarda hurda olarak çıkar. Bu anotlar saf çinko olduğundan kg fiyatı yüksektir, sadece çözülme nedeniyle ağırlıkları azalmış olabilir. Akar Hurda olarak bu özel kategoride yıllık 20-50 ton anot topluyoruz.

**Endüstriyel Sözleşme:**

Tuzla'nın büyük tersaneleri ve metal işleme atölyeleri ile düzenli alım sözleşmemiz var. Bu sözleşmeler aylık 50-200 ton tonaj kapasitesinde, kategori bazlı toplama, UATF + KDV faturası + atık beyanı raporu kapsamlı paketini içerir.

**Mesafe ve Lojistik:**

12 km mesafe Tuzla'ya hızlı erişim sağlar. Sanayi tesisleri için lisanslı kamyon (5-25 ton kapasitesi) ile saha alımı yapılır. Tersane gibi büyük tesislerde tartım kantar köprüsünde yapılabilir. Bireysel müşteriler için 50 kg üzeri ücretsiz adresten alım, daha küçük miktarlar Gebze tesisine teslim seçeneği bulunur.`,
  },
  {
    slug: "kocaeli",
    name: "Kocaeli",
    district: "Kocaeli (Genel)",
    city: "Kocaeli",
    lat: 40.85,
    lng: 29.88,
    population: "2.100.000+",
    primaryKeyword: "Kocaeli Hurdacı",
    primaryVolume: 390,
    secondaryKeywords: [
      "kocaeli hurda alımı",
      "kocaeli hurda fiyatları",
      "izmit hurdacı",
      "körfez hurdacı",
    ],
    description:
      "Kocaeli ili genelinde — İzmit, Körfez, Derince ve diğer ilçelerde — sanayi ve ev hurdası alım hizmeti. Tonaj alımları için lisanslı araç parkımız ve UATF dokümantasyonumuzla tüm Kocaeli'ye hizmet veriyoruz.",
    distanceKm: 35,
    customerProfile: "Kocaeli geneli sanayi tesisleri, İzmit Petrokimya, Körfez sanayi bölgesi, Derince liman tesisleri, Kandıra tarımsal işletmeler",
    longDescription: `Kocaeli, Türkiye'nin sanayi başkenti olarak bilinen, 2.100.000+ nüfuslu, 12 ilçeli büyük bir ilidir. Akar Hurda Gebze merkezli olarak Kocaeli ilinin tamamında hurda alım hizmeti sunuyoruz — Gebze, Darıca, Çayırova, Dilovası dışındaki bölgelere (İzmit, Körfez, Derince, Kandıra, Karamürsel, Başiskele, Gölcük, Kartepe) tonajlı alım için saha ekibimiz görev yapar.

**Kocaeli Sanayi Karakteri:**

Kocaeli'nin sanayi yoğunluğu Türkiye ortalamasının çok üzerindedir. İl genelinde:

1. **İzmit ve Çevresi:** İl merkezinin yoğun sanayi bölgesi. Petrokimya tesisleri, otomotiv ana sanayi ve yan sanayi, plastik üretim tesisleri yer alır. Akar Hurda olarak İzmit'in büyük petrokimya tesislerinden özel paslanmaz çelik (316L), nikel alaşımlı boru sistemleri, korozyon yıpranmış reaktör parçaları gibi özel kategoriler topluyoruz.

2. **Körfez Sanayi Bölgesi:** Tüpraş ve diğer rafineri tesisleri, petrokimya devleri Körfez'de yer alır. Sanayi tesisi bakım yenileme süreçlerinde büyük tonajlı paslanmaz çelik ve özel alaşım hurdaları çıkar. Akar Hurda lisanslı kamyon ve özel araç parkımızla bu projelere yetiyoruz.

3. **Derince Limanı:** Türkiye'nin en aktif limanlarından biri. Liman ekipmanı bakım, vinç değişimi, depo yapı yenileme süreçlerinde yüksek tonajlı demir-çelik hurdası çıkar. Konteyner ekipmanı ve liman makineleri özel kategori değerlendirilir.

4. **Kandıra ve Tarımsal Bölgeler:** Kocaeli'nin kuzey kesimi tarım ağırlıklıdır. Eski tarım makineleri, hayvancılık tesisi yenilemeleri, traktör atıkları gibi karma metal hurdaları düzenli olmasa da gelmektedir.

**Kocaeli'ye Özgü Bilgi:**

Kocaeli'nin Türkiye GSYH'sının yaklaşık %4-5'ini ürettiği sanayi yoğunluğu, hurda metal sektörü için son derece önemlidir. Ülkenin demir-çelik üretimi, otomotiv yan sanayi, petrokimya ürünleri büyük ölçüde Kocaeli'den çıkar. Akar Hurda olarak bu sanayi yoğunluğuna paralel olarak yıllık tonajımızın %30-40'ı Kocaeli ili kaynaklıdır.

**Petrokimya Tesisleri Özel Hizmet:**

İzmit ve Körfez'deki petrokimya tesislerinden gelen hurdalarda kimyasal kontamine olasılığı vardır. Akar Hurda olarak özel ön temizleme protokolümüz mevcuttur — kontamine hurda ayrı taşınır, özel dekontaminasyon işleminden geçirilir, ardından eritme tesisine gönderilir. Bu süreç UATF formunda kontaminasyon kategorisi belirtilerek dokümante edilir.

**Mesafe ve Lojistik:**

35 km Gebze merkezimize ortalama mesafedir — İzmit'e 50 km, Derince'ye 65 km, Kandıra'ya 80 km vardır. Bu mesafeler nedeniyle Kocaeli geneli için minimum tonaj koşulu 5 ton (sanayi tesisleri) veya 200 kg (bireysel müşteri) olarak uygulanır. Daha küçük miktarlarda yerel hurdacı yönlendirmesi yapabiliriz.

**Düzenli Alım Sözleşmesi:**

Kocaeli geneli sanayi tesisleri için aylık veya iki haftalık periyotta düzenli alım sözleşmemiz mevcuttur. Bu sözleşmeler tonajlı taşıma, UATF dokümantasyonu, KDV faturası, çevre denetim hazırlık raporu gibi tüm yasal süreçleri kapsar. Yeni tesisler için ücretsiz saha keşif hizmeti planlanır.`,
  },
];

export const bolgelerPageMeta = {
  title: "Hizmet Bölgemiz | Akar Hurda — Gebze, Kocaeli, Çevre İlçeler",
  description:
    "Gebze, Darıca, Çayırova, Dilovası, Pendik, Tuzla ve Kocaeli genelinde adresten hurda metal alım hizmeti. Lisanslı araç, ücretsiz alım, anında ödeme.",
  heroTitle: "Hizmet Bölgemiz",
  heroSubtitle:
    "Gebze merkezimizden 7 ilçeye adresten alım — lisanslı, ücretsiz, hızlı.",
} as const;
