/**
 * Müşteri yorumları — Persona-driven (RAPOR-1).
 *
 * NOT: Bu placeholder veri CEO gerçek yorum verileri sağlayana kadar geçerlidir.
 * Persona dağılımı: A (ev hurdacı), B (sanayi atölye), C (inşaat şefi),
 * D (elektrik tesisatçı), E (çevre bilinçli).
 *
 * Schema: Review schema'da kullanılır — `verified: false` olduğu sürece
 * Review schema render EDİLMEZ (schema spam riski).
 */
export interface Testimonial {
  id: string;
  name: string;
  initial: string;
  sector: string;
  location: string;
  date: string; // ISO
  content: string;
  rating: 1 | 2 | 3 | 4 | 5;
  /** true olduğunda Review schema'da görünür ve müşteri onay kanıtı vardır */
  verified: boolean;
  /** RAPOR-1 persona haritası ile eşleşme */
  persona: "A" | "B" | "C" | "D" | "E";
}

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "M. Yıldız",
    initial: "MY",
    sector: "Ev — Tadilat sonrası eski tesisat",
    location: "Gebze",
    date: "2026-04-15",
    content:
      "Apartmandaki eski tesisatımı sökmüştüm, yaklaşık 80 kg karışık metal vardı. Aradım, 1.5 saatte geldiler, nazikçe sınıflandırdı (1A bakır, 2A bakır, alüminyum profil ayrı tartıldı). Kantarda fotoğraf çektim, hesap birebir tuttu. Tahminimden 30% fazla ödediler.",
    rating: 5,
    verified: false,
    persona: "A",
  },
  {
    id: "test-2",
    name: "K. Demir",
    initial: "KD",
    sector: "Metal işleme atölyesi — aylık alım",
    location: "Çayırova",
    date: "2026-04-08",
    content:
      "5 yıldır Akar Hurda ile çalışıyoruz. Aylık 2-3 ton talaş ve sac fire çıkarıyoruz. UATF ve fatura konularında titizler — Çevre Bakanlığı denetiminde sıkıntı yaşamadık. Vade ödemeleri zamanında geliyor.",
    rating: 5,
    verified: false,
    persona: "B",
  },
  {
    id: "test-3",
    name: "İ. Kaya",
    initial: "İK",
    sector: "İnşaat şefi — şantiye demir hurdası",
    location: "Pendik",
    date: "2026-03-22",
    content:
      "Pendik'te bir konut projesi tamamladık, yaklaşık 12 ton demir hurda çıkmıştı. Kendi araç parkları olduğu için aynı gün geldiler, kantarlama sorunsuzdu. İnşaat sahası gibi kaotik bir yerde profesyonel davranışları işimi kolaylaştırdı.",
    rating: 5,
    verified: false,
    persona: "C",
  },
  {
    id: "test-4",
    name: "S. Aktaş",
    initial: "SA",
    sector: "Elektrik tesisatçısı — sürekli kablo hurdası",
    location: "Darıca",
    date: "2026-04-20",
    content:
      "Tesisatçı olarak haftada 30-50 kg kablo hurdası çıkıyor. Soyma hizmeti dahil, net bakır oranını dürüst hesaplıyorlar (geçmişte iki firmadan kötü deneyim yaşadım). 'Soyduktan sonra fiyat düştü' bahanesi yok, baştan netler.",
    rating: 5,
    verified: false,
    persona: "D",
  },
  {
    id: "test-5",
    name: "B. Öztürk",
    initial: "BÖ",
    sector: "Çevre bilinçli — sürdürülebilirlik",
    location: "Gebze",
    date: "2026-03-10",
    content:
      "Hurda sattığım için para kazanıyorum ama benim için asıl önemli olan çevreye katkı. ISO 14001 sertifikalı olmaları + lisanslı taşıma + UATF belgeleri gönül rahatlığı veriyor. Hurdamı doğru yere verdiğimden emin oluyorum.",
    rating: 5,
    verified: false,
    persona: "E",
  },
];

export const testimonialsSection = {
  sectionLabel: "Müşteri Görüşleri",
  title: "20 Yıllık Güvenin Sesi",
  subtitle:
    "Ev sahibinden sanayi tesisine, inşaat şefinden elektrik tesisatçısına — Akar Hurda'yı tercih edenlerin deneyimleri.",
  noteIfPlaceholder:
    "* Müşteri yorumları temsili olup gerçek deneyim profillerine dayanmaktadır. Doğrulanmış yorumlar süreç içinde paylaşılır.",
} as const;
