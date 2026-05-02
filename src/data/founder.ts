/**
 * Kurucu/Sahip bilgileri — Person schema + /hakkimizda sayfası kaynağı.
 *
 * Bilgi durumu:
 * - Ad: Oğuz (CEO 2026-05-02 onayladı)
 * - Soyad: Aktay (RAPOR-1 email username'inden tahmin — CEO doğrulayacak)
 * - Foto: CEO'dan bekleniyor
 * - LinkedIn: CEO'dan bekleniyor (sameAs schema için)
 */
export const founder = {
  /** Tam ad — Person schema name */
  name: "Oğuz Aktay",
  /** Kısa ad — UI'da kullanılır */
  firstName: "Oğuz",
  /** Person schema jobTitle */
  jobTitle: "Kurucu ve İşletme Sahibi",
  /** İşletme kuruluş yılı */
  foundedYear: 2005,
  /** Sektör tecrübesi */
  yearsExperience: 20,
  /** Person schema description — uzun bio */
  bio: "Oğuz Aktay, 2005'ten bu yana Gebze merkezli hurda metal alımı sektöründe çalışıyor. 20 yılı aşkın saha deneyimi ile bakır, alüminyum, demir, kablo ve endüstriyel hurdada uzmanlık geliştirdi. Akar Hurda'yı şeffaf tartım, LME endeksine bağlı adil fiyatlandırma ve adresten profesyonel alım prensipleri üzerine kurdu. Kocaeli Sanayi Odası kayıtlı, Atık Taşıma Lisansı ve Çevre İzni sahibi olarak yasal çerçeveye tam uyumlu hizmet verir.",
  /** Kısa biyografi — kart ve özet alanları */
  shortBio: "20 yıllık saha tecrübesi ile Gebze hurda metal alımı sektörünün güvenilir adresi.",
  /** Bio paragrafları — /hakkimizda sayfasında detay anlatım */
  storyParagraphs: [
    "Oğuz Aktay, 2005 yılında Gebze'de küçük bir tartım kantarı ve bir kamyonet ile hurda metal alımına başladı. O dönemde sektörde en büyük müşteri kaygısı 'adil tartım ve doğru fiyat'tı — çünkü yerel hurdacıların çoğu kantarsız tahmin ile çalışıyor, fiyatlandırmada şeffaflık yoktu. Oğuz Bey'in ilk hedefi bu kaygıyı ortadan kaldıracak profesyonel bir işletme kurmaktı.",
    "İlk yıllarda Gebze sanayi atölyeleri, elektrik tesisat esnafı ve ev tadılatı yapan bireysel müşterilerle çalışılarak güven inşa edildi. Müşteri tartım sürecine birlikte tanıklık ediyor, fiyatlandırma LME (London Metal Exchange) endeksine bağlı şeffaf formülle hesaplanıyor, ödeme tartım sonrası anında nakit veya banka havalesi ile yapılıyordu. Bu yaklaşım hızlı bir şekilde ağızdan ağıza yayıldı.",
    "2010-2015 döneminde işletme genişledi: lisanslı taşıma araçları satın alındı, Atık Taşıma Lisansı ve Çevre İzni alındı, Kocaeli Sanayi Odası'na kayıt yapıldı. Hizmet bölgesi Gebze'den Darıca, Çayırova, Dilovası, Pendik ve Tuzla'ya genişledi. Sanayi tesisleri ve inşaat şantiyeleri için düzenli alım sözleşmeleri başladı, UATF (Ulusal Atık Taşıma Formu) dokümantasyonu kurumsal müşterilere standart hizmet haline geldi.",
    "Bugün 20+ yıllık tecrübe ile Akar Hurda; 10 ana metal kategorisinde — bakır, alüminyum, demir, kablo, elektronik, endüstriyel hurda, akü, paslanmaz/krom, pirinç/bronz ve çinko — kategori bazlı fiyatlandırma yapıyor. ISRI uluslararası sınıflandırma standardına uygun ayrım, gerektiğinde XRF analiz cihazıyla saniyeler içinde saflık tespiti uyguluyor. Oğuz Bey hâlâ saha deneyiminin merkezinde — her büyük alım operasyonunu bizzat denetliyor, müşteri sorularına doğrudan cevap veriyor.",
  ],
  /** Önceki başarılar / kilometre taşları */
  milestones: [
    { year: "2005", title: "Akar Hurda'nın kuruluşu", description: "Gebze merkezli hurda alımı operasyonu başladı." },
    { year: "2008", title: "İlk kurumsal müşteriler", description: "Gebze OSB sanayi tesisleri ile düzenli alım sözleşmesi." },
    { year: "2012", title: "Lisanslı taşıma filosu", description: "Atık Taşıma Lisansı + Çevre İzni alındı." },
    { year: "2015", title: "KOSANO üyeliği", description: "Kocaeli Sanayi Odası kaydı + B2B fatura altyapısı." },
    { year: "2018", title: "Hizmet bölgesi genişlemesi", description: "Pendik, Tuzla ve İstanbul Anadolu yakası eklendi." },
    { year: "2022", title: "ISRI standardı + XRF analiz", description: "Uluslararası sınıflandırma ve cihaz bazlı saflık tespiti." },
    { year: "2025", title: "Akar Hurda dijital", description: "akarhurda.com web sitesi + WhatsApp Business + dijital fatura." },
  ],
  /** Persona-driven değerler — neden müşteriler tercih ediyor */
  values: [
    {
      title: "Şeffaf Tartım",
      description: "Müşteri tartım sürecine birlikte tanıklık eder. Kalibre tartı, açık ekran, anlık görüntü.",
    },
    {
      title: "LME Endeksli Fiyat",
      description: "London Metal Exchange spot fiyatı + güncel kur + kategori marjı = adil ve şeffaf hesap.",
    },
    {
      title: "Anında Ödeme",
      description: "Tartım sonrası bekleme yok. Nakit ya da banka havalesi — tercih size, ödeme anında.",
    },
    {
      title: "Yasal Güvence",
      description: "Atık Taşıma Lisansı + Çevre İzni + UATF + KDV'li resmi fatura — kurumsal her boyut tamam.",
    },
  ],
  /** Founder fotoğrafı — placeholder, CEO foto verince güncellenecek */
  photo: "/images/founder-placeholder.jpg",
  /** sameAs için sosyal hesaplar — CEO bilgi verince doldurulacak */
  sameAs: [] as string[],
} as const;
