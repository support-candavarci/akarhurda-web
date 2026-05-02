export interface PageContent {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
}

export const pages: Record<string, PageContent> = {
  home: {
    title: "Akar Hurda | Gebze Kocaeli Hurda Metal Alımı",
    description:
      "Akar Hurda — Gebze ve Kocaeli'nin güvenilir hurda metal alım adresi. Bakır, alüminyum, demir, kablo, elektronik, akü hurdası alımı. 20 yıl tecrübe, adresten alım, anında ödeme.",
    heroTitle: "Gebze ve Kocaeli'nin Güvenilir Hurda Adresi",
    heroSubtitle: "20 yıllık tecrübe, adresten alım, anında ödeme. Bakırdan çinkoya 10 kategoride hurda alımı.",
  },
  hakkimizda: {
    title: "Hakkımızda | Akar Hurda — 20 Yıllık Tecrübe",
    description:
      "Akar Hurda 2005'ten bu yana Gebze ve Kocaeli'de hurda metal alım hizmeti veriyor. Adresten alım, anında ödeme, dürüst tartım.",
    heroTitle: "Hakkımızda",
    heroSubtitle: "2005'ten bu yana Gebze ve Kocaeli'nin hurda adresi.",
  },
  "hizmetler": {
    title: "Hurda Türleri | Akar Hurda — 10 Kategoride Metal Alımı",
    description:
      "Bakır, alüminyum, demir, kablo, elektronik, endüstriyel, akü, paslanmaz, pirinç, çinko hurda alımı. Kategorize fiyatlandırma.",
    heroTitle: "Hurda Türlerimiz",
    heroSubtitle: "10 kategoride profesyonel hurda metal alımı.",
  },
  "hizmet-bolgeleri": {
    title: "Hizmet Bölgeleri | Akar Hurda — Gebze ve Kocaeli",
    description:
      "Gebze, Darıca, Çayırova, Dilovası, Tuzla ve çevre ilçelerde adresten hurda alım hizmeti.",
    heroTitle: "Hizmet Bölgemiz",
    heroSubtitle: "Gebze ve çevre ilçelerde adresten alım.",
  },
  blog: {
    title: "Blog | Akar Hurda — Hurda Rehberi",
    description:
      "Hurda metal fiyatları, geri dönüşüm rehberleri, sektör güncellemeleri.",
    heroTitle: "Blog",
    heroSubtitle: "Hurda metal sektörü ve geri dönüşüm rehberleri.",
  },
  iletisim: {
    title: "İletişim | Akar Hurda Gebze",
    description:
      "Akar Hurda iletişim — Balçık Mah. Gebze/Kocaeli. 0534 776 75 79. Adresten alım için arayın.",
    heroTitle: "İletişim",
    heroSubtitle: "Adresten alım için bize ulaşın.",
  },
};
