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
    title: "Kurumsal",
    links: [
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "Hizmet Bölgesi", href: "/hizmet-bolgesi" },
      { label: "Blog", href: "/blog" },
      { label: "İletişim", href: "/iletisim" },
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
  { label: "Kullanım Şartları", href: "/kullanim-sartlari" },
];
