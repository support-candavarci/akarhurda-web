/**
 * Site geneli SSS — FAQPage schema kaynağı.
 *
 * 6 kategori × 3-5 soru = 22 Q. Information Gain odaklı (1A/2A bakır,
 * LME endeks, atık lisansı, KDV matrah vs).
 */
export type FaqCategory =
  | "genel"
  | "fiyat"
  | "surec"
  | "teslimat"
  | "odeme"
  | "yasal";

export interface FaqItem {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
}

export const faqCategoryLabels: Record<FaqCategory, string> = {
  genel: "Genel Sorular",
  fiyat: "Fiyatlandırma",
  surec: "Süreç ve Tartım",
  teslimat: "Adresten Alım",
  odeme: "Ödeme",
  yasal: "Yasal ve Çevre",
};

export const faqs: FaqItem[] = [
  // GENEL (4)
  {
    id: "akar-hurda-nedir",
    category: "genel",
    question: "Akar Hurda kimdir, ne kadar süredir hizmet veriyor?",
    answer:
      "Akar Hurda 2005'ten bu yana Gebze ve Kocaeli bölgesinde hurda metal alımı yapan, 20 yıllık tecrübeye sahip lisanslı bir işletmedir. Adresten alım, dürüst tartım ve anında ödeme prensiplerimizle çalışıyoruz.",
  },
  {
    id: "hangi-metalleri-aliyor",
    category: "genel",
    question: "Hangi metalleri alıyorsunuz?",
    answer:
      "10 ana kategoride hurda alıyoruz: bakır, alüminyum, demir, kablo, elektronik, endüstriyel hurda, akü, paslanmaz/krom, pirinç/bronz, çinko. Her kategori için detaylı sayfamızı `/hizmetler` altında inceleyebilirsiniz.",
  },
  {
    id: "minimum-miktar-var-mi",
    category: "genel",
    question: "Minimum hurda miktarı var mı?",
    answer:
      "Adresten alım için genellikle minimum 50 kg toplam ağırlık önerilir. Daha küçük miktarlarda Gebze'deki tesisimize getirebilirsiniz — minimum sınır yoktur.",
  },
  {
    id: "kac-kisilik-takim",
    category: "genel",
    question: "Sanayi tesisi için düzenli alım yapıyor musunuz?",
    answer:
      "Evet. Fabrika ve atölyeler için aylık veya haftalık düzenli alım sözleşmesi sunuyoruz. UATF (Ulusal Atık Taşıma Formu) dokümantasyonu, lisanslı taşıma ve fatura tarafımızdan sağlanır. Detay için 0 534 776 75 79.",
  },

  // FIYAT (4)
  {
    id: "fiyat-nasil-belirleniyor",
    category: "fiyat",
    question: "Hurda fiyatları nasıl belirleniyor?",
    answer:
      "Bakır, alüminyum, çinko gibi temel metallerin fiyatı LME (London Metal Exchange) endeksi + USD/TRY kuru üzerinden hesaplanır. Buna işlem maliyetleri (taşıma, ayrıştırma) ve operasyonel marj eklenir. Detaylı formülü blog yazımızda bulabilirsiniz: /blog/lme-endeksi-hurda-fiyat-iliski-rehberi",
  },
  {
    id: "haftalik-fiyat-tablosu",
    category: "fiyat",
    question: "Fiyat tablosu güncel mi?",
    answer:
      "Web sitemizdeki /hurda-fiyatlari sayfasındaki tablo HER PAZARTESİ güncellenir. LME endeksinin gün içi dalgalanması nedeniyle adresten alım sırasında size güncel kg fiyatı sözlü olarak da iletilir.",
  },
  {
    id: "1a-2a-bakir-fark",
    category: "fiyat",
    question: "1A bakır ile 2A bakır fiyatı arasında fark var mı?",
    answer:
      "Evet, ciddi fark var. 1A (saf, parlak, kaplamasız) bakır en yüksek kategoridir. 2A (hafif oksidasyon, lehim izi) yaklaşık %80-90 fiyatlandırılır. Sınıflandırma şeffaftır — istediğinizde birlikte gözlemleyebilirsiniz. Detay: /blog/bakir-1a-2a-berry-birch-siniflandirma-rehberi",
  },
  {
    id: "kdv-dahil-mi",
    category: "fiyat",
    question: "Verilen fiyatlar KDV dahil mi?",
    answer:
      "Bireysel müşterilerden alımda fiyat brüt olarak ödenir. Kurumsal alımlarda %20 KDV matrah ayrı hesaplanır ve resmi fatura kesilir. Matrah formülü: ödenen tutar / 1,20.",
  },

  // SUREC (4)
  {
    id: "tartim-nasil-yapiliyor",
    category: "surec",
    question: "Tartım nasıl yapılıyor? Güvenilir mi?",
    answer:
      "Kalibre edilmiş elektronik kantarlarla tartım yaparız. İsterseniz tartım sürecini gözlemleyebilir, kantar göstergesini fotoğraflayabilirsiniz. Şeffaflık 20 yıllık marka değerimizin temelidir.",
  },
  {
    id: "metal-karisik-ne-olur",
    category: "surec",
    question: "Hurdam karışık metal — ne yapacaksınız?",
    answer:
      "Karışık hurdayı önce sınıflandırırız (gözle muayene + gerekirse XRF analiz cihazı). Her sınıf ayrı tartılır ve kendi kg fiyatı uygulanır. 'Karışık tek fiyat' uygulamıyoruz — her metal hak ettiği değerden alınır.",
  },
  {
    id: "kablo-soyma",
    category: "surec",
    question: "Kabloyu siz mi soyacaksınız, ben mi?",
    answer:
      "İsteğinize göre iki seçenek sunuyoruz: (1) Soyulmuş net bakır olarak satarsanız direkt bakır fiyatı uygulanır. (2) Plastik kaplı satarsanız tahmini bakır oranına göre (%40-65 arası) net hesap yaparız. Soyma hizmeti dahildir.",
  },
  {
    id: "teklif-suresi",
    category: "surec",
    question: "Fiyat teklifim ne kadar geçerli?",
    answer:
      "Sözlü/yazılı teklifimiz aynı gün içinde geçerlidir (LME hareketleri günlük). Adresten alım randevusu aldığınızda teklif edilen fiyat üzerinden alım yapılır.",
  },

  // TESLIMAT (3)
  {
    id: "adresten-alim-ucret",
    category: "teslimat",
    question: "Adresten alım ücretli mi?",
    answer:
      "Hayır. Gebze ve çevre ilçeler (Darıca, Çayırova, Dilovası, Pendik, Tuzla, Kocaeli) için adresten alım ücretsizdir. Minimum miktar genellikle 50 kg toplam ağırlıktır.",
  },
  {
    id: "ne-kadar-surede-gelirsiniz",
    category: "teslimat",
    question: "Ne kadar sürede adresime gelirsiniz?",
    answer:
      "Mesai saatleri içinde (Pazartesi-Cumartesi 08:00-19:00) ortalama 1-3 saat içinde randevu veriyoruz. Acil durumlar için 0 534 776 75 79 telefonumuzdan ulaşabilirsiniz.",
  },
  {
    id: "lisansli-arac-mi",
    category: "teslimat",
    question: "Hurdayı taşıyan araç lisanslı mı?",
    answer:
      "Evet. Tüm araçlarımız Çevre Bakanlığı onaylı atık taşıma lisansına sahiptir. Sanayi müşterilerimiz için UATF (Ulusal Atık Taşıma Formu) belgesi otomatik düzenlenir.",
  },

  // ODEME (3)
  {
    id: "odeme-yontemi",
    category: "odeme",
    question: "Hangi ödeme yöntemleri mevcut?",
    answer:
      "Üç seçenek sunuyoruz: (1) Nakit anında ödeme (50 kg ve üstü), (2) Banka havalesi/EFT (10 dk içinde), (3) Kurumsal alımlarda 7 günlük vade. Tartım sonrası tutar netleşir, ödeme aynı işlem sırasında yapılır.",
  },
  {
    id: "fatura-kesiyor-musunuz",
    category: "odeme",
    question: "Fatura kesiyor musunuz?",
    answer:
      "Evet, kurumsal müşterilerimiz için resmi fatura keseriz (vergi levhalı işletme). Bireysel müşteriler için müstahsil makbuzu düzenleriz. Vergi tescili 2005 yılından itibarendir.",
  },
  {
    id: "fiyat-degisikligi",
    category: "odeme",
    question: "Tartım yapıldıktan sonra fiyat değişir mi?",
    answer:
      "Hayır. Adresten alım randevusu sırasında size iletilen kg fiyatı, tartım sonrası ödemede aynen uygulanır. Tartım esnasında 'fiyat indirelim' uygulamamız yoktur — yazılı/sözlü teklif kesindir.",
  },

  // YASAL (4)
  {
    id: "lisansli-hurdaci-onemi",
    category: "yasal",
    question: "Lisanssız hurdacıya satınca ne olur?",
    answer:
      "Atık Yönetimi Yönetmeliği (29314 sayılı, 2/4/2015) gereği lisanssız hurdacıya verdiğiniz hurda yasadışı bir noktaya bırakılırsa kaynak olarak siz de sorumluluk altına girersiniz. Özellikle akü ve elektronik atıkta cezai yaptırım söz konusudur. Detay: /blog/atik-tasima-lisansi-zorunluluklari-2026",
  },
  {
    id: "uatf-belgesi",
    category: "yasal",
    question: "UATF nedir, gerekli mi?",
    answer:
      "UATF (Ulusal Atık Taşıma Formu), tehlikeli ve tehlikesiz atık taşımalarında yasal belgedir. Sanayi tesisleri ve şirket bünyesi atıklarda Çevre Bakanlığı denetimlerinde göstermek üzere zorunludur. Akar Hurda kurumsal alımlarda otomatik düzenler.",
  },
  {
    id: "sertifikalar",
    category: "yasal",
    question: "Hangi yasal belgeleriniz var?",
    answer:
      "Atık taşıma lisansı, çevre izni, ISO 14001, KOSANO üyeliği, vergi levhası, ticaret sicil tescili, iş sağlığı ve güvenliği sertifikası, tehlikeli atık yönetimi eğitimi. Tümü /sertifikalar sayfasında şeffaf paylaşılmıştır.",
  },
  {
    id: "cevre-katkisi",
    category: "yasal",
    question: "Hurda geri dönüşümünün çevreye katkısı nedir?",
    answer:
      "1 ton bakır geri dönüştürüldüğünde ~4 ton CO2 tasarruf edilir. Alüminyumda bu rakam 9 tona çıkar. Akar Hurda'nın yıllık ~770 ton CO2 tasarrufuna katkı sağladığını tahmin ediyoruz (≈ 38 hektar ormanlık alan/yıl). Detay: /blog/karbon-ayak-izi-tasarrufu-hurda-geri-donusum",
  },
];

export const faqPageMeta = {
  title: "Sık Sorulan Sorular | Akar Hurda — Hurda Alımında Bilmeniz Gerekenler",
  description:
    "Fiyat nasıl belirlenir? Adresten alım ücretli mi? KDV nasıl hesaplanır? Lisansız hurdacı riskleri nedir? 22 sorunun cevabı.",
  heroTitle: "Sık Sorulan Sorular",
  heroSubtitle:
    "Hurda alımında merak ettiğiniz tüm konuların cevapları burada.",
} as const;
