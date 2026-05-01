/**
 * Yasal sayfa metinleri — Gizlilik, KVKK, Çerez, Kullanım Şartları.
 * KVKK uyumlu Türkçe metinler (TRAP-1 diakritik zorunlu).
 */

export interface PolicyPage {
  slug: string;
  title: string;
  description: string;
  heroTitle: string;
  lastUpdated: string;
  /** Bölüm bazlı içerik — page'de map ile render */
  sections: { heading: string; body: string }[];
}

export const policies: Record<string, PolicyPage> = {
  gizlilik: {
    slug: "gizlilik-politikasi",
    title: "Gizlilik Politikası | Akar Hurda",
    description:
      "Akar Hurda olarak kişisel verilerinizin korunması ve gizliliğine ilişkin politikalarımız.",
    heroTitle: "Gizlilik Politikası",
    lastUpdated: "2026-05-01",
    sections: [
      {
        heading: "1. Veri Sorumlusu",
        body: "Bu Gizlilik Politikası, Akar Hurda (\"Şirket\") tarafından sunulan akarhurda.com web sitesi ve hizmetler kapsamında toplanan kişisel verilerin işlenmesine ilişkin ilkeleri ortaya koymaktadır. Adres: Balçık Mahallesi 3228. Sokak no 16/1, Gebze/Kocaeli 41400.",
      },
      {
        heading: "2. Toplanan Veriler",
        body: "Web sitemizi ziyaret ettiğinizde veya hizmetlerimizden yararlandığınızda şu veriler işlenebilir: ad-soyad, telefon numarası, e-posta adresi, adres bilgisi (adresten alım için), IP adresi, çerez bilgileri ve ziyaret istatistikleri.",
      },
      {
        heading: "3. Verilerin İşlenme Amacı",
        body: "Kişisel verileriniz şu amaçlarla işlenmektedir: hurda alım hizmetinin sunulması, randevu organizasyonu, faturalama ve yasal yükümlülüklerin yerine getirilmesi, müşteri ilişkilerinin yönetimi, web sitesi performansının iyileştirilmesi ve istatistiki analizlerin yapılması.",
      },
      {
        heading: "4. Verilerin Aktarılması",
        body: "Kişisel verileriniz; yasal zorunluluk haricinde üçüncü taraflarla paylaşılmaz. İş süreci gereği hizmet aldığımız muhasebe ve lojistik iş ortaklarımızla, yalnızca o iş için gerekli olan veriler paylaşılır. Çevre Bakanlığı'nın atık yönetimi mevzuatı çerçevesinde UATF (Ulusal Atık Taşıma Formu) bilgileri yetkili makamlarla paylaşılır.",
      },
      {
        heading: "5. Verilerin Saklanma Süresi",
        body: "Kişisel verileriniz, ilgili mevzuatlarda öngörülen süreler boyunca saklanır. Ticari defter ve fatura kayıtları Vergi Usul Kanunu gereği 5 yıl, Atık Yönetimi Yönetmeliği kapsamındaki kayıtlar 5 yıl saklanır. Saklama süresi sonunda veriler silinir veya anonim hale getirilir.",
      },
      {
        heading: "6. Haklarınız (KVKK Madde 11)",
        body: "Kişisel verilerinize ilişkin: (a) işlenip işlenmediğini öğrenme, (b) işlenmişse buna ilişkin bilgi talep etme, (c) işlenme amacını öğrenme, (d) yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme, (e) eksik veya yanlış işlenmişse düzeltilmesini isteme, (f) silinmesini veya yok edilmesini isteme haklarına sahipsiniz.",
      },
      {
        heading: "7. İletişim",
        body: "Gizlilik politikamızla ilgili her türlü soru ve talep için info@akarhurda.com e-posta adresimize veya 0 534 776 75 79 telefon numaramıza ulaşabilirsiniz.",
      },
    ],
  },

  kvkk: {
    slug: "kvkk",
    title: "KVKK Aydınlatma Metni | Akar Hurda",
    description:
      "6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında Akar Hurda aydınlatma metni.",
    heroTitle: "KVKK Aydınlatma Metni",
    lastUpdated: "2026-05-01",
    sections: [
      {
        heading: "1. Veri Sorumlusunun Kimliği",
        body: "Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu'nun (\"KVKK\") 10. maddesi kapsamında, veri sorumlusu sıfatıyla Akar Hurda tarafından kişisel verilerinizin işlenmesine ilişkin sizleri bilgilendirmek amacıyla hazırlanmıştır.",
      },
      {
        heading: "2. Kişisel Verilerin İşleme Amacı",
        body: "Kişisel verileriniz; hurda alım hizmetinin sunulması, sözleşme süreçlerinin yürütülmesi, ödeme ve faturalama işlemlerinin gerçekleştirilmesi, yasal yükümlülüklerin yerine getirilmesi, müşteri memnuniyetinin sağlanması ve hizmet kalitesinin iyileştirilmesi amaçlarıyla işlenmektedir.",
      },
      {
        heading: "3. Hukuki Sebep",
        body: "Kişisel verileriniz KVKK'nın 5. ve 6. maddelerinde belirtilen ve özellikle: (a) sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması, (b) hukuki yükümlülüğün yerine getirilmesi, (c) meşru menfaatler için zorunlu olması hukuki sebeplerine dayanılarak işlenmektedir.",
      },
      {
        heading: "4. Toplama Yöntemi",
        body: "Kişisel verileriniz; web sitesi formları, telefon görüşmeleri, e-posta yazışmaları, fiziki ortamdaki anlaşmalar ve resmi belgeler (fatura, müstahsil makbuzu, UATF) aracılığıyla toplanmaktadır.",
      },
      {
        heading: "5. KVKK Madde 11 Hakları",
        body: "Veri sahibi olarak: kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, amacını ve uygun kullanılıp kullanılmadığını öğrenme, yurt içi-yurt dışı aktarımları bilme, düzeltilmesini ve silinmesini isteme, otomatik sistemlerle analiz sonucu aleyhinize çıkan sonuca itiraz etme, zarara uğramışsanız tazmini talep etme haklarına sahipsiniz.",
      },
      {
        heading: "6. Başvuru Yöntemi",
        body: "KVKK kapsamındaki haklarınızı kullanmak için info@akarhurda.com adresine yazılı başvuru yapabilirsiniz. Başvurunuzda kimliğinizi tespit edici belgeler ve talebinizin açık ifadesi yer almalıdır. Talebiniz en geç 30 gün içinde sonuçlandırılır.",
      },
    ],
  },

  cerez: {
    slug: "cerez-politikasi",
    title: "Çerez Politikası | Akar Hurda",
    description:
      "akarhurda.com sitesinde kullandığımız çerezler ve amacları hakkında bilgi.",
    heroTitle: "Çerez Politikası",
    lastUpdated: "2026-05-01",
    sections: [
      {
        heading: "1. Çerez Nedir?",
        body: "Çerezler (cookies), bir web sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınızda saklanan küçük metin dosyalarıdır. Site deneyiminizi kişiselleştirmek, performans ölçmek ve trafik analizi yapmak amacıyla kullanılırlar.",
      },
      {
        heading: "2. Kullandığımız Çerez Türleri",
        body: "Sitemizde şu çerez türleri kullanılmaktadır: (a) Zorunlu çerezler (sitenin çalışması için), (b) Analitik çerezler (Google Analytics — anonim kullanım istatistikleri), (c) Performans çerezleri (sayfa yüklenme süresi vb.). Reklam veya pazarlama amaçlı üçüncü taraf çerezi kullanmıyoruz.",
      },
      {
        heading: "3. Google Analytics",
        body: "Site trafiğini anlamak için Google Analytics 4 kullanıyoruz. IP anonimleştirme aktiftir; kişisel kimlik bilgisi toplanmaz. Verilen Google'ın gizlilik politikasına tabi olarak işlenir: policies.google.com/privacy",
      },
      {
        heading: "4. Çerezleri Yönetme",
        body: "Tarayıcı ayarlarınızdan çerezleri silebilir, engelleyebilir veya bilgilendirme almasını sağlayabilirsiniz. Zorunlu çerezleri devre dışı bırakırsanız sitenin bazı özellikleri çalışmayabilir.",
      },
      {
        heading: "5. Çerez Saklama Süresi",
        body: "Oturum çerezleri tarayıcıyı kapattığınızda silinir. Kalıcı çerezler maksimum 12 ay saklanır.",
      },
    ],
  },

  kullanim: {
    slug: "kullanim-sartlari",
    title: "Kullanım Şartları | Akar Hurda",
    description:
      "akarhurda.com sitesini kullanmaya ilişkin şartlar ve koşullar.",
    heroTitle: "Kullanım Şartları",
    lastUpdated: "2026-05-01",
    sections: [
      {
        heading: "1. Kabul",
        body: "akarhurda.com web sitesini kullanarak bu Kullanım Şartları'nı kabul etmiş sayılırsınız. Şartları kabul etmiyorsanız siteyi kullanmamalısınız.",
      },
      {
        heading: "2. Hizmet Tanımı",
        body: "Site, Akar Hurda'nın hurda metal alım hizmetleri hakkında bilgi sunan kurumsal bir tanıtım sitesidir. Site üzerinden yayınlanan fiyat tablosu bilgi amaçlıdır; gerçek alım fiyatı tartım ve kalite analizi sonrasında belirlenir.",
      },
      {
        heading: "3. Fikri Mülkiyet",
        body: "Site içeriği (metin, görsel, logo, fiyat tabloları) Akar Hurda'ya aittir veya kullanım hakkı edinilmiştir. İzinsiz kopyalanması, çoğaltılması veya ticari amaçla kullanılması yasaktır.",
      },
      {
        heading: "4. Doğruluk Garantisi",
        body: "Sitedeki bilgilerin doğruluğu için azami özen gösterilir. Ancak fiyat tabloları LME endeksi gibi değişken kaynaklara dayandığı için anlık değişiklikler söz konusu olabilir. Adresten alım randevusu sırasında tarafımızca iletilen kg fiyatı geçerlidir.",
      },
      {
        heading: "5. Sorumluluk Sınırları",
        body: "Site kullanımı sonucu doğabilecek dolaylı zararlardan Akar Hurda sorumlu tutulamaz. Üçüncü taraf web sitelerine yönlendiren bağlantılar bilgi amaçlıdır; bu sitelerin içeriğinden Akar Hurda sorumlu değildir.",
      },
      {
        heading: "6. Yetkili Mahkeme",
        body: "Bu Kullanım Şartları'ndan doğabilecek uyuşmazlıklarda Kocaeli Mahkemeleri ve İcra Müdürlükleri yetkilidir.",
      },
    ],
  },
};
