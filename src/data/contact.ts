export const contact = {
  phone: "0 534 776 75 79",
  phoneRaw: "905347767579",
  phoneHref: "tel:+905347767579",
  email: "info@akarhurda.com",
  whatsappUrl: "https://wa.me/905347767579",
  address: {
    street: "Balçık Mahallesi 3228. Sokak no 16/1",
    district: "Gebze",
    city: "Kocaeli",
    postalCode: "41400",
    country: "Türkiye",
    full: "Balçık Mahallesi 3228. Sokak no 16/1, Gebze/Kocaeli 41400",
  },
  geo: {
    lat: 40.79,
    lng: 29.43,
  },
  social: {
    instagram: "",
    facebook: "",
  },
  workingHours:
    "Pazartesi - Cumartesi: 08:00 - 19:00 | Pazar: Kapalı",
  labels: {
    phone: "Telefon",
    email: "E-posta",
    address: "Adres",
    contact: "İletişim",
    callNow: "Hemen Ara",
    whatsapp: "WhatsApp",
  },
} as const;

export function getWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${contact.phoneRaw}?text=${encoded}`;
}

export function getQuoteWhatsAppUrl(params: {
  name: string;
  product: string;
  estimatedKg?: string;
  phone?: string;
}): string {
  let message = `Merhaba, ${params.product} hurdası için fiyat almak istiyorum.\n\nAd Soyad: ${params.name}`;
  if (params.estimatedKg) message += `\nTahmini Miktar: ${params.estimatedKg} kg`;
  if (params.phone) message += `\nTelefon: ${params.phone}`;
  return getWhatsAppUrl(message);
}
