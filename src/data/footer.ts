export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

export const footerGroups: FooterLinkGroup[] = [
  {
    title: "Hurda Türleri",
    links: [
      { label: "Bakır Hurda", href: "/hizmetler/bakir-hurda-alimi" },
      { label: "Alüminyum Hurda", href: "/hizmetler/aluminyum-hurda-alimi" },
      { label: "Demir Hurda", href: "/hizmetler/demir-hurda-alimi" },
      { label: "Kablo Hurda", href: "/hizmetler/kablo-hurda-alimi" },
      { label: "Elektronik Hurda", href: "/hizmetler/elektronik-hurda-alimi" },
      { label: "Akü Hurda", href: "/hizmetler/aku-hurda-alimi" },
      { label: "Paslanmaz Hurda", href: "/hizmetler/paslanmaz-krom-hurda-alimi" },
      { label: "Tüm Hurda Türleri", href: "/hizmetler" },
    ],
  },
  {
    title: "Bölgeler",
    links: [
      { label: "Gebze Hurdacı", href: "/hizmet-bolgeleri/gebze" },
      { label: "Darıca Hurdacı", href: "/hizmet-bolgeleri/darica" },
      { label: "Çayırova Hurdacı", href: "/hizmet-bolgeleri/cayirova" },
      { label: "Dilovası Hurdacı", href: "/hizmet-bolgeleri/dilovasi" },
      { label: "Pendik Hurdacı", href: "/hizmet-bolgeleri/pendik" },
      { label: "Tuzla Hurdacı", href: "/hizmet-bolgeleri/tuzla" },
      { label: "Kocaeli Hurdacı", href: "/hizmet-bolgeleri/kocaeli" },
      { label: "Tüm Bölgeler", href: "/hizmet-bolgeleri" },
    ],
  },
  {
    title: "Kurumsal",
    links: [
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "Sertifikalar", href: "/sertifikalar" },
      { label: "Hurda Fiyatları", href: "/hurda-fiyatlari" },
      { label: "Sık Sorulan Sorular", href: "/sss" },
      { label: "Blog", href: "/blog" },
      { label: "İletişim", href: "/iletisim" },
      { label: "Teklif Al", href: "/teklif-al" },
    ],
  },
];

export const footerAbout = {
  title: "Akar Hurda",
  description:
    "2005'ten bu yana Gebze ve Kocaeli'nin güvenilir hurda metal alım adresi. 20 yıllık tecrübe, adresten alım, anında ödeme.",
  tagline: "20 Yıllık Güven, Adresten Alım, Anında Ödeme",
} as const;

export const footerLegal: { label: string; href: string }[] = [
  { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
  { label: "KVKK", href: "/kvkk" },
  { label: "Çerez Politikası", href: "/cerez-politikasi" },
  { label: "Kullanım Şartları", href: "/kullanim-sartlari" },
];
