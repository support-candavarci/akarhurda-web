/**
 * Haftalık fiyat tablosu — RAPOR-1'in BİRİNCİ DERECE FARKLILAŞMA NOKTASI.
 *
 * Sprint 1B keşfi: 0/8 rakipte tarih şeffaf haftalık güncellenen fiyat tablosu YOK.
 * Bu sayfa Akar Hurda'nın AI Overview citation potansiyeli en yüksek varlığı.
 *
 * Güncelleme süreci:
 * - CEO Pazartesi WhatsApp'tan günlük LME + kar marjı verir
 * - `lastUpdated` her güncellemede değişir
 * - `validUntil` 7 gün sonrasına ayarlanır
 *
 * NOT: Fiyatlar TEMSILİDIR — gerçek alım fiyatı LME hareketleri ve kalite analizi
 * sonrasında belirlenir. Bu tablo bilgi amaçlıdır.
 */

export const pricingMeta = {
  lastUpdated: "2026-05-01",
  validUntil: "2026-05-08",
  updateFrequency: "weekly" as const,
  source:
    "London Metal Exchange (LME) endeksi + USD/TRY kuru + Akar Hurda saha verisi",
  disclaimer:
    "Fiyatlar günlük LME hareketlerine bağlı olarak değişir. Bu tablo bilgi amaçlıdır; kesin teklif tartım sonrasında belirlenir.",
};

export interface PriceRow {
  metal: string;
  category: string;
  priceMin: number;
  priceMax: number;
  unit: string;
  serviceSlug?: string;
}

export const pricing: PriceRow[] = [
  // BAKIR
  {
    metal: "Bakır",
    category: "1A — Saf, parlak (Berry/Bare Bright)",
    priceMin: 280,
    priceMax: 295,
    unit: "TL/kg",
    serviceSlug: "bakir-hurda-alimi",
  },
  {
    metal: "Bakır",
    category: "2A — Hafif oksidasyonlu (Birch)",
    priceMin: 250,
    priceMax: 270,
    unit: "TL/kg",
    serviceSlug: "bakir-hurda-alimi",
  },
  {
    metal: "Bakır",
    category: "Kablo bakırı (soyma sonrası net)",
    priceMin: 240,
    priceMax: 270,
    unit: "TL/kg",
    serviceSlug: "kablo-hurda-alimi",
  },
  {
    metal: "Bakır",
    category: "Motor / trafo bakırı (lake)",
    priceMin: 200,
    priceMax: 230,
    unit: "TL/kg",
    serviceSlug: "bakir-hurda-alimi",
  },

  // ALÜMİNYUM
  {
    metal: "Alüminyum",
    category: "Profil (pencere/kapı)",
    priceMin: 65,
    priceMax: 78,
    unit: "TL/kg",
    serviceSlug: "aluminyum-hurda-alimi",
  },
  {
    metal: "Alüminyum",
    category: "Döküm (motor/parça)",
    priceMin: 50,
    priceMax: 65,
    unit: "TL/kg",
    serviceSlug: "aluminyum-hurda-alimi",
  },
  {
    metal: "Alüminyum",
    category: "Jant (otomotiv)",
    priceMin: 75,
    priceMax: 88,
    unit: "TL/kg",
    serviceSlug: "aluminyum-hurda-alimi",
  },
  {
    metal: "Alüminyum",
    category: "Folyo / kutu (içecek ambalajı)",
    priceMin: 25,
    priceMax: 40,
    unit: "TL/kg",
    serviceSlug: "aluminyum-hurda-alimi",
  },

  // DEMİR / ÇELİK
  {
    metal: "Demir / Çelik",
    category: "Sac (kalın levha)",
    priceMin: 9,
    priceMax: 13,
    unit: "TL/kg",
    serviceSlug: "demir-hurda-alimi",
  },
  {
    metal: "Demir / Çelik",
    category: "Profil (köşebent, boru)",
    priceMin: 10,
    priceMax: 14,
    unit: "TL/kg",
    serviceSlug: "demir-hurda-alimi",
  },
  {
    metal: "Demir / Çelik",
    category: "İnşaat demiri (nervürlü)",
    priceMin: 11,
    priceMax: 15,
    unit: "TL/kg",
    serviceSlug: "demir-hurda-alimi",
  },

  // PASLANMAZ
  {
    metal: "Paslanmaz Çelik",
    category: "304 (mutfak/genel)",
    priceMin: 55,
    priceMax: 70,
    unit: "TL/kg",
    serviceSlug: "paslanmaz-krom-hurda-alimi",
  },
  {
    metal: "Paslanmaz Çelik",
    category: "316 (endüstriyel/manyetik değil)",
    priceMin: 75,
    priceMax: 95,
    unit: "TL/kg",
    serviceSlug: "paslanmaz-krom-hurda-alimi",
  },

  // PİRİNÇ / BRONZ
  {
    metal: "Pirinç / Bronz",
    category: "Sarı pirinç",
    priceMin: 175,
    priceMax: 200,
    unit: "TL/kg",
    serviceSlug: "pirinc-bronz-hurda-alimi",
  },
  {
    metal: "Pirinç / Bronz",
    category: "Kırmızı pirinç (yüksek bakırlı)",
    priceMin: 190,
    priceMax: 220,
    unit: "TL/kg",
    serviceSlug: "pirinc-bronz-hurda-alimi",
  },
  {
    metal: "Pirinç / Bronz",
    category: "Bronz / sarı talaşı",
    priceMin: 140,
    priceMax: 170,
    unit: "TL/kg",
    serviceSlug: "pirinc-bronz-hurda-alimi",
  },

  // ÇİNKO
  {
    metal: "Çinko",
    category: "Levha / döküm",
    priceMin: 50,
    priceMax: 70,
    unit: "TL/kg",
    serviceSlug: "cinko-hurda-alimi",
  },
  {
    metal: "Çinko",
    category: "Galvaniz hurda",
    priceMin: 30,
    priceMax: 45,
    unit: "TL/kg",
    serviceSlug: "cinko-hurda-alimi",
  },

  // AKÜ
  {
    metal: "Akü",
    category: "Otomotiv (kurşun-asit)",
    priceMin: 25,
    priceMax: 40,
    unit: "TL/kg",
    serviceSlug: "aku-hurda-alimi",
  },
  {
    metal: "Akü",
    category: "Endüstriyel (UPS, forklift)",
    priceMin: 30,
    priceMax: 50,
    unit: "TL/kg",
    serviceSlug: "aku-hurda-alimi",
  },

  // ELEKTRONIK
  {
    metal: "Elektronik",
    category: "PCB / anakart (yüksek değerli)",
    priceMin: 200,
    priceMax: 600,
    unit: "TL/kg",
    serviceSlug: "elektronik-hurda-alimi",
  },
  {
    metal: "Elektronik",
    category: "Server / bilgisayar (karışık)",
    priceMin: 80,
    priceMax: 200,
    unit: "TL/kg",
    serviceSlug: "elektronik-hurda-alimi",
  },
];

export const pricingPageMeta = {
  title: "Güncel Hurda Fiyatları | Akar Hurda — Haftalık Şeffaf Tablo",
  description:
    "Bakır, alüminyum, demir, paslanmaz, pirinç, çinko hurda fiyatları haftalık güncellenir. LME endeksine bağlı şeffaf fiyatlandırma. Gebze/Kocaeli.",
  heroTitle: "Güncel Hurda Fiyatları",
  heroSubtitle: `Her Pazartesi güncellenen şeffaf tablo. Son güncelleme: ${pricingMeta.lastUpdated}.`,
} as const;
