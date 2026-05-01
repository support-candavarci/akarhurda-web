export interface NavItem {
  label: string;
  href: string;
}

export const navigation: NavItem[] = [
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hurda Türleri", href: "/hurda-turleri" },
  { label: "Hurda Fiyatları", href: "/hurda-fiyatlari" },
  { label: "Hizmet Bölgesi", href: "/hizmet-bolgesi" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

export const ctaButton = {
  label: "Fiyat Al",
  href: "tel:+905347767579",
} as const;
