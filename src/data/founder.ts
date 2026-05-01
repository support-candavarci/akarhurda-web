/**
 * Kurucu/Sahip bilgileri — Person schema kaynağı.
 *
 * NOT: Bu placeholder veri CEO'dan gerçek bilgi gelene kadar geçerlidir.
 * `/hakkimizda` sayfası ve JSON-LD Person schema bu veriyi kullanır.
 */
export const founder = {
  name: "Akar Ailesi",
  jobTitle: "Kurucu / Sahip",
  foundedYear: 2005,
  yearsExperience: 20,
  bio: "20 yılı aşkın hurda metal alımı tecrübesi ile Gebze ve Kocaeli bölgesinde hizmet veriyoruz. Adresten alım, dürüst tartım ve anında ödeme prensiplerimizle binlerce müşteriye güvenilir bir adres olduk.",
  shortBio: "20 yıllık hurda metal sektörü tecrübesi.",
  photo: "/images/founder-placeholder.jpg",
  /** sameAs için sosyal hesaplar — CEO bilgi verince doldurulacak */
  sameAs: [] as string[],
} as const;
