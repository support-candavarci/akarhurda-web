/**
 * Hizmet bölgesi (ilçe) verisi — Sprint 1A KEYWORD-MASTER'dan miras.
 *
 * KRİTİK SEO NOTU: Sprint 1A keşfi — Yerel keyword'lerde KELIME SIRASI 5-30x fark yaratır:
 *   - "gebze hurdacı" 1.900/ay (DOĞRU)
 *   - "hurdacı gebze" 320/ay (TERS)
 *
 * Title formülü: `[İlçe] Hurdacı | Akar Hurda — 20 Yıl Deneyim`
 */
export interface Bolge {
  /** URL slug — `/hizmet-bolgesi/[slug]` */
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
