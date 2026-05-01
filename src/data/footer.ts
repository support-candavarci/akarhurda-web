export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

export const footerGroups: FooterLinkGroup[] = [
  {
    title: "Hurda Türleri",
    links: [
      { label: "Bakır Hurda", href: "/hurda-turleri/bakir-hurda-alimi" },
      { label: "Alüminyum Hurda", href: "/hurda-turleri/aluminyum-hurda-alimi" },
      { label: "Demir Hurda", href: "/hurda-turleri/demir-hurda-alimi" },
      { label: "Kablo Hurda", href: "/hurda-turleri/kablo-hurda-alimi" },
      { label: "Elektronik Hurda", href: "/hurda-turleri/elektronik-hurda-alimi" },
      { label: "Akü Hurda", href: "/hurda-turleri/aku-hurda-alimi" },
      { label: "Paslanmaz Hurda", href: "/hurda-turleri/paslanmaz-krom-hurda-alimi" },
      { label: "Tüm Hurda Türleri", href: "/hurda-turleri" },
    ],
  },
  {
    title: "Bölgeler",
    links: [
      { label: "Gebze Hurdacı", href: "/hizmet-bolgesi/gebze" },
      { label: "Darıca Hurdacı", href: "/hizmet-bolgesi/darica" },
      { label: "Çayırova Hurdacı", href: "/hizmet-bolgesi/cayirova" },
      { label: "Dilovası Hurdacı", href: "/hizmet-bolgesi/dilovasi" },
      { label: "Pendik Hurdacı", href: "/hizmet-bolgesi/pendik" },
      { label: "Tuzla Hurdacı", href: "/hizmet-bolgesi/tuzla" },
      { label: "Kocaeli Hurdacı", href: "/hizmet-bolgesi/kocaeli" },
      { label: "Tüm Bölgeler", href: "/hizmet-bolgesi" },
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
