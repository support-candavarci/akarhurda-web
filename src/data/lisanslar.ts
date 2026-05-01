/**
 * Lisans, sertifika ve resmi belgeler — E-E-A-T (Trust) sinyali.
 *
 * NOT: CEO scan/foto gönderince `image` alanları gerçek dosya yollarıyla
 * güncellenir. `verified: false` olanlar müşteri tarafında "Doğrulanma sürecinde"
 * etiketi ile gösterilir.
 */
export interface License {
  id: string;
  name: string;
  issuer: string;
  issuedYear: number;
  expiryYear?: number;
  description: string;
  image?: string;
  verified: boolean;
}

export const licenses: License[] = [
  {
    id: "atik-tasima-lisansi",
    name: "Atık Taşıma Lisansı",
    issuer: "Çevre, Şehircilik ve İklim Değişikliği Bakanlığı",
    issuedYear: 2020,
    expiryYear: 2025,
    description:
      "Tehlikesiz atık ve hurda metal taşıma yetkisi. Lisanslı araçlarımızla yasal sınırlar içinde toplama ve taşıma yapıyoruz.",
    image: "/images/lisans-atik-tasima-placeholder.jpg",
    verified: false,
  },
  {
    id: "cevre-izni",
    name: "Çevre İzni",
    issuer: "Kocaeli Çevre, Şehircilik ve İklim Değişikliği İl Müdürlüğü",
    issuedYear: 2020,
    description:
      "İşletmemizin çevre mevzuatına uygun faaliyet gösterdiğini belgeleyen resmi izin.",
    image: "/images/lisans-cevre-izni-placeholder.jpg",
    verified: false,
  },
  {
    id: "iso-14001",
    name: "ISO 14001 Çevre Yönetim Sistemi",
    issuer: "Akredite belgelendirme kuruluşu",
    issuedYear: 2022,
    description:
      "Sürdürülebilir geri dönüşüm süreçlerimizi belgeleyen uluslararası çevre yönetim sertifikası.",
    image: "/images/lisans-iso14001-placeholder.jpg",
    verified: false,
  },
  {
    id: "kosano",
    name: "KOSANO Üyeliği",
    issuer: "Kocaeli Sanayi Odası",
    issuedYear: 2010,
    description:
      "Kocaeli Sanayi Odası üyesi olarak bölgesel sanayi standartlarına uyumlu çalışıyoruz.",
    image: "/images/lisans-kosano-placeholder.jpg",
    verified: false,
  },
  {
    id: "vergi-levhasi",
    name: "Vergi Levhası",
    issuer: "Gelir İdaresi Başkanlığı",
    issuedYear: 2005,
    description:
      "20 yıldır vergi yükümlülüklerini düzenli yerine getiren tescilli işletme.",
    verified: false,
  },
  {
    id: "ticaret-sicil",
    name: "Ticaret Sicil Gazetesi",
    issuer: "Türkiye Ticaret Sicil Gazetesi",
    issuedYear: 2005,
    description:
      "Resmi olarak 2005 yılında tescil edilen, 20 yıllık köklü işletme.",
    verified: false,
  },
  {
    id: "is-guvenligi",
    name: "İş Sağlığı ve Güvenliği Sertifikası",
    issuer: "Akredite OSGB",
    issuedYear: 2023,
    description:
      "Çalışan ve müşteri güvenliği için iş güvenliği uzmanı tarafından denetlenen tesis.",
    verified: false,
  },
  {
    id: "tehlikeli-atik-egitimi",
    name: "Tehlikeli Atık Yönetimi Eğitimi",
    issuer: "Akredite eğitim kuruluşu",
    issuedYear: 2024,
    description:
      "Akü, elektronik gibi tehlikeli atık kategorilerinde personel eğitim sertifikası.",
    verified: false,
  },
];

export const licensesPageMeta = {
  title: "Sertifikalar ve Lisanslar | Akar Hurda — Yasal Belgeler",
  description:
    "Akar Hurda'nın atık taşıma lisansı, çevre izni, ISO 14001, KOSANO üyeliği ve diğer resmi belgeleri. Lisanslı, yasal, güvenilir hurdacı.",
  heroTitle: "Sertifikalar ve Lisanslar",
  heroSubtitle:
    "Yasal belgelerimizle 20 yıllık güvenin temelini şeffaf şekilde paylaşıyoruz.",
} as const;
