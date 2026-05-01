export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: "copper" | "aluminum" | "iron" | "cable" | "electronics" | "industrial" | "battery" | "stainless" | "brass" | "zinc";
  features: string[];
}

/**
 * 10 hizmet silosu — Akar Hurda v4 plan kapsamı
 * Her silo ayrı pSEO sayfası + landing page'e sahip olacak (Sprint 4'te detaylanır)
 */
export const services: Service[] = [
  {
    id: "bakir-hurda-alimi",
    title: "Bakır Hurda Alımı",
    shortDescription: "Bakır kablo, levha, boru — anında ödeme",
    description:
      "Bakır hurdanız için Gebze ve Kocaeli'nin en güncel kg fiyatlarını sunuyoruz. Saf bakır, kablo bakırı, motor bakırı kategorilerinde adresten alım yapıyoruz.",
    icon: "copper",
    features: [
      "Saf bakır, kablo bakırı, motor bakırı",
      "Kg üzeri tartım, anında ödeme",
      "Adresten ücretsiz alım",
    ],
  },
  {
    id: "aluminyum-hurda-alimi",
    title: "Alüminyum Hurda Alımı",
    shortDescription: "Profil, döküm, jant alüminyumu",
    description:
      "Alüminyum profil, döküm, jant ve kablo alüminyumu için kategorize fiyatlandırma. Tartım sonrası anında ödeme.",
    icon: "aluminum",
    features: ["Profil, döküm, jant", "Kategorize fiyat", "Adresten alım"],
  },
  {
    id: "demir-hurda-alimi",
    title: "Demir Hurda Alımı",
    shortDescription: "Sac, profil, çelik hurda",
    description:
      "Endüstriyel ve evsel demir hurda alımı. Sac, profil, çelik kategorilerinde kg üzeri tartım.",
    icon: "iron",
    features: ["Sac, profil, çelik", "Endüstriyel ve evsel", "Tonaj alımı"],
  },
  {
    id: "kablo-hurda-alimi",
    title: "Kablo Hurda Alımı",
    shortDescription: "Bakır kablosu, kablo soyma hizmeti",
    description:
      "Bakır kablo, alüminyum kablo, fiber kablo. Soyma hizmeti dahil net bakır fiyatı.",
    icon: "cable",
    features: ["Bakır + alüminyum kablo", "Soyma hizmeti", "Net bakır ödeme"],
  },
  {
    id: "elektronik-hurda-alimi",
    title: "Elektronik Hurda Alımı",
    shortDescription: "PCB, anakart, bilgisayar hurdası",
    description:
      "PCB, anakart, server, bilgisayar, telefon hurdası. İçerik analizine göre özel fiyatlandırma.",
    icon: "electronics",
    features: ["PCB ve anakart", "Server ve bilgisayar", "İçerik analizi"],
  },
  {
    id: "endustriyel-hurda-alimi",
    title: "Endüstriyel Hurda Alımı",
    shortDescription: "Fabrika ve atölye hurdası",
    description:
      "Fabrika, atölye, üretim tesislerinin endüstriyel hurda yönetimi. Düzenli alım sözleşmesi mümkün.",
    icon: "industrial",
    features: ["Fabrika ve atölye", "Düzenli alım sözleşmesi", "Tonaj kapasitesi"],
  },
  {
    id: "aku-hurda-alimi",
    title: "Akü Hurda Alımı",
    shortDescription: "Eski araç akülerinin geri dönüşümü",
    description:
      "Otomotiv ve endüstriyel akü hurdası. Çevreye duyarlı geri dönüşüm, lisanslı taşıma.",
    icon: "battery",
    features: ["Otomotiv + endüstriyel akü", "Lisanslı taşıma", "Çevre dostu"],
  },
  {
    id: "paslanmaz-krom-hurda-alimi",
    title: "Paslanmaz / Krom Hurda Alımı",
    shortDescription: "304, 316 paslanmaz çelik",
    description:
      "Paslanmaz çelik (304, 316) ve krom hurda alımı. Test cihazıyla doğrulama, kategori bazlı fiyat.",
    icon: "stainless",
    features: ["304, 316 paslanmaz", "Krom hurda", "Test cihazı doğrulaması"],
  },
  {
    id: "pirinc-bronz-hurda-alimi",
    title: "Pirinç / Bronz Hurda Alımı",
    shortDescription: "Sarı/kırmızı pirinç, bronz",
    description:
      "Sarı pirinç, kırmızı pirinç, bronz, sarı talaşı. Tornadan çıkan talaş dahil.",
    icon: "brass",
    features: ["Sarı/kırmızı pirinç", "Bronz", "Talaş alımı"],
  },
  {
    id: "cinko-hurda-alimi",
    title: "Çinko Hurda Alımı",
    shortDescription: "Çinko levha ve döküm",
    description:
      "Çinko levha, çinko döküm, galvaniz hurda alımı. Endüstriyel kapasitede toplama.",
    icon: "zinc",
    features: ["Çinko levha + döküm", "Galvaniz hurda", "Endüstriyel kapasite"],
  },
];

export const servicesSection = {
  sectionLabel: "Hurda Türleri",
  title: "10 Kategoride Hurda Alımı",
  subtitle: "Bakırdan çinkoya, kablodan elektroniğe — tüm metal hurdalarınız için tek adres.",
  cta: {
    title: "Hurda Fiyatınızı Hemen Öğrenin",
    subtitle: "20 yıllık tecrübemizle adresten alım, anında ödeme.",
    buttonLabel: "Hemen Ara",
    buttonHref: "tel:+905347767579",
  },
} as const;
