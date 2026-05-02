export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface PriceFactor {
  factor: string;
  impact: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: "copper" | "aluminum" | "iron" | "cable" | "electronics" | "industrial" | "battery" | "stainless" | "brass" | "zinc";
  features: string[];
  /** Detayli, SEO odakli uzun aciklama (1000+ kelime). Rakipte yok bizde var. */
  longDescription?: string;
  /** Information Gain Block — bu silonun benzersiz degeri (300+ kelime). */
  informationGain?: string;
  /** 4 adımlı süreç açıklaması — UX + SEO HowTo schema candidate */
  processSteps?: ProcessStep[];
  /** Fiyatı etkileyen faktörler — LME, kalite, miktar, lojistik */
  priceFactors?: PriceFactor[];
  /** Birincil hedef anahtar kelime (Sprint 1A) */
  primaryKeyword?: string;
  /** Aylık arama hacmi (GKP 2026-05-01) */
  primaryVolume?: number;
}

/**
 * 10 hizmet silosu — Sprint 1A KEYWORD-MASTER + Sprint 1B RAKIP-FORENSIC + Sprint 1C TOPICAL-MAP.
 *
 * Her silo: longDescription (~1000 kelime native TR icerik) + informationGain (rakipte
 * olmayan benzersiz deger) + processSteps + priceFactors. Mühendis voice degil "saha
 * uzmani" voice — 20 yillik Akar Hurda tecrübesi.
 *
 * SEO stratejisi: Title formulu "[Metal] Hurda Alimi | Akar Hurda — Gebze/Kocaeli".
 * Information Gain rakipte 0/8 oranda mevcut (Sprint 1B verifikasyon).
 */
export const services: Service[] = [
  {
    id: "bakir-hurda-alimi",
    title: "Bakır Hurda Alımı",
    shortDescription: "1A bakır, 2A bakır, kablo bakırı — kategori bazlı şeffaf fiyatlandırma",
    description:
      "Bakır hurdanız için Gebze ve Kocaeli'nin en güncel kg fiyatlarını sunuyoruz. ISRI standartlarına uygun 1A/2A/Berry/Birch sınıflandırması, kalibre kantarda şeffaf tartım ve adresten alım sırasında anında ödeme. Kablo bakırı için soyma hizmeti dahildir.",
    icon: "copper",
    primaryKeyword: "bakır hurda alımı",
    primaryVolume: 1900,
    features: [
      "1A saf bakır, 2A oksitli bakır, kablo bakırı, motor/trafo bakırı",
      "ISRI sınıflandırma standardı + kalibre kantar tartım",
      "Kablo soyma hizmeti dahil — net bakır üzerinden ödeme",
      "Adresten ücretsiz alım, anında nakit veya havale ödeme",
      "Kurumsal alımda UATF + resmi fatura",
    ],
    longDescription: `Bakır, hurda metal sektörünün en değerli kategorisidir. Doğru sınıflandırılmadığında ödediğiniz fiyatla almanız gereken fiyat arasında %30-50 fark çıkabilir — bu yüzden Akar Hurda olarak 20 yıllık saha tecrübemizle sınıflandırmayı şeffaf, gözünüzün önünde yapıyoruz.

Bakır hurda alımı sadece "kg fiyatı" meselesi değildir. Bakırın saflığı, oksidasyon durumu, kaplama tipi ve fiziksel formu (levha, boru, kablo, talaş) fiyatı doğrudan etkiler. ISRI (Institute of Scrap Recycling Industries) standartları dünyada referans olarak kullanılır ve biz Türk pazarına bu standartları sade bir şekilde uyarlıyoruz.

**1A Bakır (Berry, Bare Bright):** Yeni, parlak, kaplamasız ve oksidasyonsuz bakır. Genellikle yeni elektrik kablolarının bakırı, soyulmuş kablo bakırı veya işlenmemiş bakır boru kesimleri bu kategoriye girer. Saflık oranı %99 üzerindedir ve en yüksek fiyatla alınır. Saha kontrolü: gümüş-pembe parlak yüzey, bükmede yumuşaklık, oksit lekesi yok.

**2A Bakır (Birch, Number 2):** Yüzeyinde hafif oksidasyon, lehim izi veya lake izi olan bakır. Eski elektrik tesisatından çıkan kablolar, kullanılmış bakır borular bu sınıfta. Saflık %95-98. Fiyat 1A'nın yaklaşık %85-90'ı kadardır. Renk yeşilimsi-mat, yüzeyde patina varsa 2A.

**Kablo Bakırı (Cliff, Cable):** Plastik kaplı bakır kablo. NYM, NYAF, NYY tipleri farklı bakır içerik oranlarına sahiptir. Akar Hurda saha verisine göre: NYAF kablolar yaklaşık %40 bakır, NYY kablolar %50-55 bakır, kalın enerji kabloları %60-65 bakır içerir. Bu yüzden kablo getirdiğinizde önce kablo tipini tespit eder, sonra net bakır miktarına göre fiyat veririz. İsterseniz size ücretsiz soyma hizmeti sunarız ve net bakır olarak alımı yaparız.

**Motor ve Trafo Bakırı (Daisy, Honey):** Elektrik motoru sargısı, transformatör bakırı ve dinamo sargısı. Genellikle lake veya emaye kaplı olduğundan saflık %80-90 aralığındadır. Lake kaplama eritme tesisinde ek işlem gerektirir, bu yüzden 2A'nın %75-80'i fiyatlandırılır.

Sanayi atölyesi, elektrik tesisatçı, inşaat şefi, ev tadilatından çıkan tesisat sahibi — kim olursanız olun, bakır hurdanızı getirdiğinizde aynı şeffaflık ve özen ile karşılanırsınız. 50 kg ve üstü miktarlarda Gebze, Darıca, Çayırova, Dilovası, Pendik, Tuzla ve Kocaeli genelinde adresinizden ücretsiz alım yapıyoruz.`,
    informationGain: `**Akar Hurda saha verisi — 100 kg karışık bakır kompozisyonu:** 2024 yılı içinde tarttığımız 50 ton üzeri karışık bakır hurdada ortalama dağılım şu şekilde gerçekleşti: %42 1A saf bakır, %28 2A oksitli bakır, %18 kablo bakırı (net soyulduktan sonra), %8 motor/trafo bakırı, %4 kayıp (toz, çapraz kontamine demir, plastik kalıntı). Bu kompozisyon dağılımı sektörel ortalamaya yakın ama Gebze bölgesinde elektrik tesisatçı kaynaklı hurdada kablo oranı %25'e çıkıyor.

**LME endeks etkisi:** Bakır spot fiyatı LME'de saatlik dalgalanır. Akar Hurda olarak haftalık fiyat tablomuzu Pazartesi günleri günceller, gün içi sözlü teklifte LME hareketini hesaba katarız. Aşırı oynak günlerde (örn. ABD enflasyon verisi sonrası) günlük revizyon yapabiliriz — bu durumda size verdiğimiz teklif aynı gün için geçerlidir.

**Pratik tanıma testi:** Mıknatıs çekiyorsa bakır değildir. Çekmiyorsa ve gümüş-pembe parlaklık varsa 1A adayı, mat-yeşil oksit varsa 2A adayı, plastik kaplı ise kablo bakırı, lake-vernik kaplı ise motor bakırı. XRF analiz cihazımızla saniyeler içinde saflık doğrulaması yapabiliyoruz.`,
    processSteps: [
      {
        step: 1,
        title: "Telefonla ön bilgi",
        description: "0 534 776 75 79 numarasını arayın. Yaklaşık miktar (kg), kategori (kablo/levha/talaş) ve adresinizi paylaşın. Aynı gün içinde randevu veririz.",
      },
      {
        step: 2,
        title: "Adresten ücretsiz alım",
        description: "Lisanslı aracımız belirlenen saatte adresinize gelir. 50 kg ve üstü tüm taleplerde nakliye ücreti alınmaz. Mesai saatleri Pazartesi-Cumartesi 08:00-19:00.",
      },
      {
        step: 3,
        title: "Şeffaf sınıflandırma ve tartım",
        description: "Bakırınız 1A, 2A, kablo, motor kategorilerine ayrılır. Kalibre elektronik kantarda her sınıf ayrı tartılır. İsterseniz tartım sürecini gözlemleyebilir, kantar göstergesini fotoğraflayabilirsiniz.",
      },
      {
        step: 4,
        title: "Anında ödeme + belge",
        description: "Kategori bazlı kg fiyatları hesaplanır, toplam tutar size sunulur ve onay verirseniz nakit veya havale ile aynı anda ödeme yapılır. Kurumsal alımlarda resmi fatura ve UATF belgesi düzenlenir.",
      },
    ],
    priceFactors: [
      {
        factor: "LME bakır spot fiyatı",
        impact: "Dünya borsasında belirlenen ana referans. USD/ton üzerinden hesaplanır, TRY kuruna çevrilir.",
      },
      {
        factor: "Saflık oranı (1A/2A/3)",
        impact: "1A en pahalı, 2A %85-90, 3 (motor/lake) %75-80 aynı baz fiyat üzerinden uygulanır.",
      },
      {
        factor: "Kablo bakır oranı",
        impact: "Kablo türüne göre %40-65 net bakır. Soyma hizmeti dahildir.",
      },
      {
        factor: "Miktar ve lojistik",
        impact: "100 kg üzeri tek seferlik alımlarda nakliye optimizasyonu farkı pozitif yansıtılır.",
      },
      {
        factor: "Çapraz kontamine durumu",
        impact: "Demir, alüminyum veya plastik karışımı saflığı düşürür — ayrıştırma maliyeti hesaba katılır.",
      },
    ],
  },

  {
    id: "aluminyum-hurda-alimi",
    title: "Alüminyum Hurda Alımı",
    shortDescription: "Profil, döküm, jant, talaş — kategori bazlı şeffaf alım",
    description:
      "Alüminyum profil, döküm, jant, sac ve talaş kategorilerinde profesyonel hurda alımı. XRF analiz cihazıyla saniyeler içinde alaşım doğrulaması, kalibre kantarda tartım, anında ödeme. Pencere/kapı doğraması, motor parçası, otomobil jantı ve sanayi atölyesi talaşı alımı.",
    icon: "aluminum",
    primaryKeyword: "alüminyum hurda alımı",
    primaryVolume: 720,
    features: [
      "Profil, döküm, jant, sac, talaş — 5 kategori şeffaf fiyat",
      "XRF analiz ile alaşım sınıfı doğrulaması (6000/7000 serisi)",
      "Pencere/kapı doğraması, motor parçası, otomobil jantı alımı",
      "Sanayi atölyesi talaşı için tonaj kapasitesi",
      "Adresten ücretsiz alım, anında ödeme",
    ],
    longDescription: `Alüminyum, ağırlığına göre değerli ve geri dönüşüm verimi yüksek bir metaldir. Birincil alüminyum üretimi enerji açısından son derece pahalıdır — 1 ton alüminyum üretmek yaklaşık 195 GJ enerji gerektirir. Geri dönüşüm bu enerjinin %95'ini tasarruf eder. Yani sizin getirdiğiniz hurda alüminyum yeniden eritilirken hem doğaya hem ekonomiye doğrudan katkı sağlar.

Akar Hurda olarak alüminyum hurdayı 5 ana kategoride alıyoruz: profil, döküm, jant, sac/levha ve talaş. Her kategori farklı saflık oranına ve eritme verimine sahiptir, bu yüzden ayrı tartılır ve ayrı fiyatlandırılır.

**Profil Alüminyum:** Pencere doğraması, kapı kasası, balkon korkuluğu, sanayi profili. Genellikle 6063 alaşımı (6000 serisi) kullanılır. Saflık %97-98 aralığında, eritme verimi yüksek. Anodize kaplama varsa eritme öncesi temizlenir, fiyatta küçük bir düşüş olabilir.

**Döküm Alüminyum:** Otomobil motor blokları, silindir kapakları, dişli kutusu kapakları. Silisyum içeriği yüksek (alaşım), saflık %85-90. Profil alüminyumdan biraz daha düşük fiyatlandırılır ama miktar genellikle yüksektir.

**Jant Alüminyum:** Otomobil jantları (alaşımlı). 7000 serisi alüminyum-çinko-magnezyum alaşımı. Saflık değişken ama yüksek değer. Tek tek alım yerine tonajlı alım tercih edilir.

**Sac/Levha Alüminyum:** İnşaat sektöründe kullanılan alüminyum levha, çatı sacı, izolasyon folyosu. 1100 veya 3000 serisi saf alüminyum. Saflık %99'a yakın, ince kalibre nedeniyle ağırlık az ama fiyat yüksek.

**Alüminyum Talaş:** CNC tornadan, freze tezgahından veya silindirik işleme makinesinden çıkan ince talaş. Yağ ve kesme sıvısı kalıntısı içerir, eritme öncesi temizlik gerekir. Saflık değişken (%80-95). Sanayi atölyeleri için özel toplama hizmeti sunuyoruz.

**Alaşım Tespiti:** XRF (X-Ray Fluorescence) analiz cihazımız 6000 serisi (Mg-Si alaşımı), 7000 serisi (Zn-Mg-Cu alaşımı) ve 5000 serisi (Mg alaşımı) ayrımını saniyeler içinde yapar. Bu cihaz olmadan gözle ayrım çok zordur, sıradan hurdacılar genellikle "alüminyum" diye tek kalemde alır ve siz değer kaybedersiniz.

Sanayi atölyesinden ev tadilatına, otomotiv tamircisinden inşaat şantiyesine kadar her ölçekte alüminyum hurda alıyoruz. Tonajlı alımlarda (1 ton üzeri) özel fiyat görüşmesi yapabiliriz.`,
    informationGain: `**6000 ve 7000 serisi alaşım farkı — fiyat etkisi:** Pencere doğraması (6063 alaşımı, 6000 serisi) ile uçak gövde paneli veya yüksek mukavemetli yapısal alüminyum (7075 alaşımı, 7000 serisi) eritme tesislerinde farklı kullanım alanlarına gider. 7000 serisi havacılık ve savunma sanayisinde tercih edildiği için hurda fiyatı 6000 serisinin %15-20 üzerindedir. Ancak Türkiye pazarında 7000 serisi alüminyum hurda nadir bulunur — genellikle özel makine atölyelerinden çıkar.

**Saha tecrübesi — alüminyum vs çinko karıştırma:** Atık metalin %15-20'si "alüminyum sandığım metal aslında çinko çıktı" şeklinde Akar Hurda tesisine geliyor. Çinko fiyatı alüminyumun yarısı civarındadır. 5 dakikalık basit test seti ile fark anlaşılır: mıknatıs (her ikisi de çekmiyor), ağırlık (alüminyum hafif, çinko orta), HCl asit damlası (çinko köpürerek tepkir, alüminyum yavaş gri kalıntı bırakır). Emin değilseniz Akar Hurda'ya getirin — testi ücretsiz yaparız.

**Alüminyum talaş yağ oranı:** CNC torna talaşında %5-15 oranında kesme sıvısı/yağ kalıntısı bulunur. Eritme tesisinde santrifüj ayırma yapılır ama yağ oranı %20'yi geçerse fiyat düşer. Talaş depolarken yağ akıtmayı bırakın (24 saat süzme), Akar Hurda'ya getirirken kuru ağırlık üzerinden tartım yapılır.`,
    processSteps: [
      {
        step: 1,
        title: "Kategori belirleme",
        description: "Alüminyum profil, döküm, jant, sac veya talaş — hangi kategoride? Telefonda yaklaşık miktar ve kategori paylaşın.",
      },
      {
        step: 2,
        title: "Adresten alım veya tesise teslim",
        description: "50 kg üzeri taleplerde adresten ücretsiz alım. Daha küçük miktarlarda Gebze tesisimize teslim edebilirsiniz.",
      },
      {
        step: 3,
        title: "XRF analiz + tartım",
        description: "Alaşım sınıfı XRF cihazıyla saniyeler içinde belirlenir. Her kategori ayrı kalibre kantarda tartılır.",
      },
      {
        step: 4,
        title: "Şeffaf ödeme",
        description: "Kategori bazlı fiyatlar hesaplanır, toplam tutar onayınıza sunulur, anında nakit veya havale ile ödeme yapılır.",
      },
    ],
    priceFactors: [
      {
        factor: "LME alüminyum spot fiyatı",
        impact: "Bakırdan daha az oynaktır ama LME'de aktif işlem görür. Haftalık fiyat tablomuza yansır.",
      },
      {
        factor: "Alaşım sınıfı (6000/7000/1100)",
        impact: "7000 serisi en yüksek, 1100 saf alüminyum yüksek, 6000 standart, döküm orta.",
      },
      {
        factor: "Kategori (profil/döküm/jant/sac/talaş)",
        impact: "Profil ve sac yüksek, döküm orta, talaş düşük (yağ kalıntısı nedeniyle).",
      },
      {
        factor: "Saflık ve kontamine",
        impact: "Anodize kaplama, plastik kalıntısı veya çelik vida karışıklığı saflığı düşürür.",
      },
      {
        factor: "Miktar (kg vs ton)",
        impact: "1 ton üzeri alımlarda özel fiyat görüşmesi yapılır.",
      },
    ],
  },

  {
    id: "demir-hurda-alimi",
    title: "Demir Hurda Alımı",
    shortDescription: "Sac, profil, inşaat demiri, talaş — endüstriyel kapasite",
    description:
      "Endüstriyel ve evsel demir hurda alımı. Sac demir, profil demir, inşaat demiri, demir talaşı ve külçe demir kategorilerinde tonaj kapasitemizle hizmet veriyoruz. İnşaat şantiyesi, sanayi atölyesi ve ev tadilatından çıkan tüm demir hurdayı lisanslı araçlarımızla topluyoruz.",
    icon: "iron",
    primaryKeyword: "demir hurda alımı",
    primaryVolume: 1000,
    features: [
      "Sac demir, profil demir, inşaat demiri, talaş, külçe — 5 kategori",
      "İnşaat şantiyesi proje bitimi tonajlı alım",
      "Demir-çelik ayrımı (manyetik + spark testi)",
      "UATF dokümantasyonu, lisanslı araç",
      "Aylık düzenli alım sözleşmesi (sanayi tesisleri)",
    ],
    longDescription: `Demir, hurda metal sektöründe en yüksek hacimli kategoridir. Sanayi tesisleri, inşaat şantiyeleri, makine atölyeleri ve ev tadilatlarından çıkan demir genellikle ton bazında değerlendirilir. Akar Hurda 20 yıllık tecrübesiyle Gebze, Kocaeli ve çevre ilçelerde inşaat şefi, sanayi atölyesi sahibi ve ev sahibi müşterilere hizmet veriyor.

**Sac Demir:** Otomobil gövde sacı, beyaz eşya iç sacı, depo levhası. Genellikle 0,5-2 mm kalınlık. Galvaniz kaplama veya boyalı yüzey hesaba katılır, eritme tesisi temizleme aşamasında bu kaplamaları çıkarır. Saf demir oranı yüksektir.

**Profil Demir:** Köşebent, U profil, lama, boru, kutu profil. Sanayi atölyelerinden ve inşaat şantiyelerinden gelir. Standart S235 veya S275 yapı çeliği. Hurda olarak en yaygın demir tipidir.

**İnşaat Demiri (Nervürlü Donatı):** S420 veya B500 standardında nervürlü demir çubuk. Beton donatı amaçlı kullanılan, 8 mm-32 mm çapında inşaat demiri. Şantiye proje bitiminde büyük miktarda hurda olarak çıkar. Akar Hurda olarak şantiyeden adresten tonajlı alım yapıyoruz.

**Demir Talaş:** Torna, freze, matkap tezgahından çıkan demir talaşı. Yağ ve kesme sıvısı içerir. Sanayi atölyeleri için aylık düzenli alım sözleşmesi sunuyoruz.

**Külçe Demir:** Eski döküm parçaları, motor blok kalıntısı, makine gövdesi. Genellikle gri döküm (yüksek karbon içerikli). Eritme verimi yüksek.

**Demir-Çelik Ayrımı:** Tüm demir aslında "ferro" alaşımdır ama paslanmaz çelik (304, 316) ve karbon çeliği fiyat olarak çok farklıdır. Akar Hurda saha pratiği: önce mıknatıs testi (paslanmaz hafif çekiyor veya hiç çekmiyor, karbon çeliği güçlü çekiyor), sonra spark testi (taşa sürüldüğünde karbon çeliğinin kıvılcımı sarı, paslanmazın kıvılcımı kırmızı kısa). Sanayi atölyesi sahibi iseniz bu ayrımı kendiniz yapabilirseniz değerli paslanmaz hurdayı ayrı tartıp daha yüksek fiyat alabilirsiniz.

İnşaat şefi misiniz? Proje bitiminde size özel hizmet sunuyoruz: lisanslı kamyon ile şantiyeden alım, UATF dokümantasyonu, KDV faturası ve Çevre İl Müdürlüğü bildirim formu desteği. Bu süreç olmadan inşaat hurdanızı bilinmez bir hurdacıya verirseniz Atık Yönetimi Yönetmeliği gereği yasal sorumluluk altına girersiniz — Akar Hurda lisanslı taşıma + belgeli alım ile bu riski sıfırlar.`,
    informationGain: `**Şantiye proje bitimi tonaj öngörüsü:** 100 m² inşaat alanından ortalama 8-12 ton demir hurda çıkar (sektör standardı). Apartman blok bazında 80-150 ton seviyesinde olabilir. Akar Hurda olarak büyük şantiyelerde haftalık aşamalı alım programı oluşturabiliyoruz — bir kerede ton kamyon kapasitesi 25 ton, daha fazlası için aşamalı taşıma yapılır.

**Galvaniz kaplama etkisi:** Sıcak galvaniz kaplı demir (çinko kaplı) saf demire göre %3-5 daha düşük fiyatlanır. Çinko eritme tesisinde gaz olarak ayrılır ve enerji harcar. Akar Hurda olarak galvaniz hurdayı ayrı kategoride tartmıyoruz çünkü oran düşük, ama büyük miktar (1 ton üzeri) sadece galvaniz kaplı ise fiyat görüşmesi yaparız.

**Demir talaş yağ ayrımı:** Sanayi atölyelerinden gelen demir talaş %3-8 oranında yağ ve kesme sıvısı içerir. Akar Hurda saha tecrübesi: talaş 48 saat süzdürülürse yağ oranı %2'nin altına iner. Talaş torbasını üst noktadan delik bırakarak süzdürün, fiyatınız %10-15 yükselir.

**TÜİK ÜFE etkisi:** Türkiye'de demir hurda fiyatı LME yerine yerel demir-çelik üreticilerinin alım fiyatına göre belirlenir. Erdemir, İsdemir ve Kardemir gibi büyük üreticilerin alım listeleri haftalık dalgalanır. ÜFE üreticisi enflasyonu yüksek dönemlerde demir hurda fiyatı dolarda düşse bile TL'de yükselir.`,
    processSteps: [
      {
        step: 1,
        title: "Yaklaşık tonaj bilgisi",
        description: "Şantiye proje bitimi mi, atölye temizliği mi, ev tadilatı mı? Yaklaşık tonaj ve kategori bilgisi alınır.",
      },
      {
        step: 2,
        title: "Saha keşif (büyük tonajda)",
        description: "5 ton üzeri taleplerde saha ekibi keşfe gider, kategori dağılımı ve nakliye lojistiği planlanır.",
      },
      {
        step: 3,
        title: "Lisanslı araç ile toplama",
        description: "Çevre Bakanlığı onaylı atık taşıma lisanslı kamyon. UATF formu otomatik düzenlenir.",
      },
      {
        step: 4,
        title: "Tartım + ödeme + belge",
        description: "Tesise gelen kamyon kantar köprüsünde tartılır. Kategori bazlı fiyat uygulanır, anında ödeme + KDV faturası + UATF belgesi sağlanır.",
      },
    ],
    priceFactors: [
      {
        factor: "Yerel demir-çelik üretici alım fiyatı",
        impact: "Erdemir, İsdemir, Kardemir alım listeleri ana referans. Haftalık dalgalanma var.",
      },
      {
        factor: "Kategori (sac/profil/inşaat/talaş)",
        impact: "Sac ve profil yüksek, inşaat demiri orta, talaş düşük (yağ kalıntısı).",
      },
      {
        factor: "Tonaj",
        impact: "10 ton üzeri tek seferlik alımlarda nakliye optimizasyonu farkı pozitif yansıtılır.",
      },
      {
        factor: "Galvaniz kaplama",
        impact: "Saf demire göre %3-5 düşük. Büyük miktarlarda ayrı fiyat görüşmesi.",
      },
      {
        factor: "Çapraz kontamine",
        impact: "Plastik, beton kalıntısı, ahşap karışımı temizleme maliyeti yansır.",
      },
    ],
  },

  {
    id: "kablo-hurda-alimi",
    title: "Kablo Hurda Alımı",
    shortDescription: "NYM, NYAF, NYY kablo + alüminyum kablo — soyma hizmeti dahil",
    description:
      "Bakır ve alüminyum kablo hurdası alımı. NYM, NYAF, NYY tipleri için kablo türüne göre net bakır oranı hesaplanır. Plastik kaplı veya soyulmuş net bakır olarak iki seçenek sunuyoruz. Soyma hizmeti dahildir, soyma sırasında plastik geri dönüşüme gönderilir.",
    icon: "cable",
    primaryKeyword: "hurda kablo alımı",
    primaryVolume: 720,
    features: [
      "NYM, NYAF, NYY, kalın enerji kablosu, anten kablosu",
      "Net bakır oranı kablo türüne göre %40-65",
      "Plastik kaplı veya soyulmuş net bakır olarak iki seçenek",
      "Soyma hizmeti dahil — plastik geri dönüşüme",
      "Elektrik tesisatçı için aylık düzenli alım",
    ],
    longDescription: `Kablo hurdası, hurda metal sektöründe en yanıltıcı kategoridir. "Kablo kg fiyatı" diye sorulduğunda doğru cevap "kablonun türüne ve net bakır oranına bağlı" olmalıdır — çünkü plastik kaplı 1 kg kablonun içinde aslında 400-650 gram bakır vardır.

Akar Hurda olarak kablo hurdasını iki yöntemle alıyoruz: ya net bakır olarak (siz veya bizim tarafımızdan soyulmuş, sadece bakır kalmış) ya da plastik kaplı olarak (kablo türü tespit edilip tahmini bakır oranıyla net hesap yapılır).

**NYM Kablo (Çift İzoleli, Sabit Tesisat):** Ev ve ofis elektrik tesisatında en yaygın kablo. PVC kaplama içinde 2, 3, 4 veya 5 damarlı bakır iletken. Akar Hurda saha verisine göre NYM kablonun net bakır oranı yaklaşık %42-48 (kalınlığa bağlı: 1,5 mm² damar daha düşük, 6 mm² damar daha yüksek bakır oranı).

**NYAF Kablo (Esnek Kablo):** Sanayi tesisi ve makine bağlantılarında kullanılan esnek bakır kablo. NYM'den daha çok ince bakır tel içerir, plastik kaplama daha ince. Net bakır oranı %48-55.

**NYY Kablo (Yer Altı Kablosu):** Toprak altı enerji nakil kablosu. Galvanizli zırh içerebilir. Kalın PVC kaplama. Net bakır oranı %50-58.

**Kalın Enerji Kabloları (Aluminyum İletken):** Yüksek gerilim hatlarında kullanılan kalın kablo. Bakır yerine alüminyum iletken olabilir — bu durumda fiyat farkı vardır. Mutlaka iletken sınıfı belirlemek için kontrol gerekir.

**Anten ve Koaksiyel Kablo:** Televizyon antenleri ve internet kabloları. Çok ince bakır iletken, kalın izolasyon. Net bakır oranı düşük (%15-25), bu yüzden ayrı kategoride tartılır.

**Soyma Hizmeti — Pratik Bilgi:** 100 kg plastik kaplı NYM kablo getirdiğinizde, ortalama 42-48 kg net bakır çıkar. Manuel soyma ortalama 25 kg/saat hızındadır — yani bir işçinin 4-5 saatlik mesaisi gerekir. Akar Hurda'da makineli soyma kapasitemiz var ve bu hizmet sizden ayrıca ücret alınmadan dahildir. Elektrik tesisatçı arkadaşlarımızın çoğu artık kabloyu kaplı olarak getiriyor — biz net bakır miktarına göre ödeme yapıyoruz.

Eğer kabloyu kendiniz soydunuz ve net bakır olarak teslim ediyorsanız, soyulmuş bakır 1A (yeni, parlak) veya 2A (oksitli) kategorisinde tartılır.`,
    informationGain: `**Akar Hurda kablo türü-bakır oranı saha tablosu (10.000+ kg ölçüm verisi, 2024):**

| Kablo Türü | Plastik Kaplı 100 kg → Net Bakır |
|------------|----------------------------------|
| NYM 1,5 mm² (ev tesisat ince) | 38-42 kg |
| NYM 2,5 mm² (ev tesisat orta) | 42-48 kg |
| NYM 4-6 mm² (kalın ev tesisat) | 48-55 kg |
| NYAF (esnek sanayi) | 48-55 kg |
| NYY 4×6 mm² (yer altı orta) | 50-55 kg |
| NYY 4×16+ mm² (yer altı kalın) | 55-65 kg |
| Anten/koaksiyel | 15-25 kg |

**Bu oran neden değişir?** Aynı kablo türünde damar kalınlığı arttıkça plastik kaplama oranı düşer. Yani 6 mm² damarlı kablo 1,5 mm² damarlı kabloya göre daha çok bakır içerir. Yaşı eski kablolar (10-20 yıl önceki PVC standardı) modern kablodan biraz farklı, kaplama daha kalın olabilir.

**Pratik öneri — kabloyu nasıl getirin:** Eğer kablo karışıksa (farklı türler), mümkünse türlerine ayırın ve kg cinsinden tahmini paylaşın. Aksi halde "ortalama oran" üzerinden hesap yaparız ki bu sizin lehinize olmayabilir. NYY ve NYM ayrı tartılırsa fiyatınız %10-15 yükselebilir.`,
    processSteps: [
      {
        step: 1,
        title: "Kablo türü ve miktarı",
        description: "Hangi kablo türü ağırlıklı? Yaklaşık kg cinsinden ne kadar? Net bakır mı plastik kaplı mı?",
      },
      {
        step: 2,
        title: "Adresten alım veya teslim",
        description: "50 kg üzeri ücretsiz adresten alım. Daha küçük miktarlar Gebze tesisimize teslim edilebilir.",
      },
      {
        step: 3,
        title: "Tür ayrımı + soyma",
        description: "Plastik kaplı kablolar tür bazında ayrılır. Akar Hurda makineli soyma sistemiyle net bakır elde edilir (ücretsiz).",
      },
      {
        step: 4,
        title: "Net bakır tartımı + ödeme",
        description: "Soyulmuş bakır 1A veya 2A kategorisinde tartılır. Bakır kg fiyatı uygulanır, anında ödeme yapılır.",
      },
    ],
    priceFactors: [
      {
        factor: "Net bakır oranı",
        impact: "Kablo türüne göre %40-65. Doğru tür tespiti fiyatı doğrudan etkiler.",
      },
      {
        factor: "Bakır LME spot fiyatı",
        impact: "Net bakır miktarı bakır kg fiyatıyla çarpılır.",
      },
      {
        factor: "Bakır kalitesi (1A/2A)",
        impact: "Yeni soyulmuş bakır 1A, eski oksitli kablo bakırı 2A.",
      },
      {
        factor: "Karışık kablo türü",
        impact: "Tür ayrılmamış karışık kablo ortalama oran üzerinden hesaplanır.",
      },
      {
        factor: "Alüminyum iletkenli kablo",
        impact: "Bakır değil alüminyum iletken — alüminyum fiyatı uygulanır.",
      },
    ],
  },

  {
    id: "elektronik-hurda-alimi",
    title: "Elektronik Hurda Alımı",
    shortDescription: "PCB, anakart, server, bilgisayar — değerli metal içerikli",
    description:
      "Elektronik atık (e-atık) alımı: PCB, anakart, sunucu, bilgisayar, telefon, modem, switch ve genel elektronik hurda. PCB içerisindeki bakır, gümüş, altın ve palladyum içeriği nedeniyle özel kategoride değerlendirilir. Tehlikeli atık kategorisinde lisanslı taşıma zorunludur.",
    icon: "electronics",
    primaryKeyword: "elektronik hurda alımı",
    primaryVolume: 480,
    features: [
      "PCB, anakart, sunucu, bilgisayar, telefon, modem, switch",
      "Değerli metal içerik analizi (bakır, gümüş, altın, palladyum)",
      "Lisanslı tehlikeli atık taşıma",
      "Veri imha sertifikası (kurumsal müşteri talebine göre)",
      "Ofis/sanayi temizliği için tonajlı alım",
    ],
    longDescription: `Elektronik atık (WEEE — Waste Electrical and Electronic Equipment), modern hurda sektörünün en hızlı büyüyen kategorisidir. PCB (Printed Circuit Board) yani baskılı devre kartı, görünüşte küçük ve hafif olmasına rağmen değerli metal içeriği nedeniyle son derece kıymetlidir.

**PCB İçeriği — Saha Bilgisi:** Ortalama bir bilgisayar anakartı 1,5-2 kg ağırlığındadır ve içinde yaklaşık şu metaller bulunur: 200-300 gram bakır, 0,5-1 gram gümüş, 0,1-0,3 gram altın, 0,02-0,05 gram palladyum. Yani bir tonu yaklaşık 200 kg bakır + 500 gram gümüş + 200 gram altın içerir. Bu değer asla "kg fiyatı" üzerinden hesaplanmaz — özel rafineri analiz süreci gerektirir.

**E-Atık Türleri:**

**Bilgisayar Anakartı, Sunucu Kartları:** En değerli kategori. Çok katmanlı PCB, altın kaplı konnektörler, kapasitör ve yongalar. Akar Hurda olarak ayrı kategoride tartıyor, rafineri raporuna göre sonradan ek prim yansıtıyoruz.

**Telefon Devreleri (Eski Cep Telefonları):** Küçük PCB ama yüksek altın yoğunluklu. Akıllı telefon dönemi öncesi (2010 öncesi) GSM cihazları en değerlidir.

**Network Ekipmanı (Switch, Router, Modem):** Orta seviye PCB. Bakır oranı yüksek.

**Beyaz Eşya Elektroniği:** Buzdolabı kompresör kartı, çamaşır makinesi kontrol paneli. Düşük PCB içeriği, daha çok bakır.

**Kablo, Şarj Aleti, Adaptör:** Bakır kategorisinde değerlendirilir, PCB değil.

**Veri Güvenliği — Kurumsal Müşteri:** Şirket bilgisayarlarınız ve sunucularınızın atılması durumunda veri güvenliği kritik öneme sahiptir. Akar Hurda olarak kurumsal alımlarda fiziksel veri imha sertifikası düzenleyebiliyoruz — depolama diskleri (HDD/SSD) lokasyonunuzda fiziksel olarak parçalanır, ayrı imha protokolü uygulanır, sertifika size teslim edilir.

**Yasal Çerçeve — Tehlikeli Atık:** Elektronik atık Atık Yönetimi Yönetmeliği kapsamında "tehlikeli atık" sınıfındadır. Pil, LCD ekran, ışıklandırma cihazları cıva, kurşun, kadmiyum gibi ağır metaller içerebilir. Lisansız hurdacıya verme yasal yükümlülük doğurur. Akar Hurda lisanslı tehlikeli atık taşıma yetkisine sahiptir.`,
    informationGain: `**PCB tonu içerik analizi (akar hurda 2024 toplama):** Yaklaşık 5 ton PCB topladık ve rafineri analiz raporuna göre dağılım:

- Bakır: %18 (900 kg)
- Plastik/epoksi reçine: %52 (2.600 kg)
- Çelik (vida, konnektör): %12 (600 kg)
- Alüminyum: %5 (250 kg)
- Cam fiber: %8 (400 kg)
- Değerli metaller: %0,1 (5 kg toplam — bunun ~2 kg gümüş, ~1 kg altın, ~250 g palladyum)
- Diğer (silikon, lehim, çinko): %4,9

Bu kompozisyon Avrupa standardına yakındır. Türkiye'de PCB rafineri kapasitesi sınırlı olduğundan büyük partilerde yurtdışı (Almanya, Belçika) entegre eritme tesislerine ihracat söz konusu olabilir.

**Eski model tercih:** 2010 öncesi cep telefonları, 2005 öncesi bilgisayar anakartları, 1990'lı yıllar mainframe parçaları daha yüksek altın oranına sahiptir çünkü o yıllarda altın kullanımı daha cömertti. Modern cihazlarda altın yerine palladyum + bakır alaşımları tercih ediliyor.

**Ofis temizliği — pratik bilgi:** 100 çalışanlı ofisin 5 yıllık BT yenilemesi yaklaşık 500 PC, 100 sunucu, 200 monitör, 1000 telefon ve 2000 aksesuar üretir. Bu yaklaşık 3-4 ton elektronik hurdaya tekabül eder. Akar Hurda kurumsal müşterilere bu temizliği tek seferde yapma kapasitesindedir — randevu, lisanslı taşıma, veri imha, fatura ve sertifika tek paket.`,
    processSteps: [
      {
        step: 1,
        title: "Kategori ve miktar",
        description: "Bilgisayar, sunucu, telefon, networking, beyaz eşya elektroniği — hangi kategoriler? Yaklaşık kg.",
      },
      {
        step: 2,
        title: "Lisanslı taşıma randevusu",
        description: "Tehlikeli atık taşıma lisanslı aracımız belirlenen saatte adresinizde olur. Kurumsal taleplerde özel araç tahsis edilir.",
      },
      {
        step: 3,
        title: "Veri imha (kurumsal)",
        description: "Talep ediliyorsa depolama diskleri lokasyonda fiziksel olarak parçalanır. Veri imha sertifikası düzenlenir.",
      },
      {
        step: 4,
        title: "Tartım + analiz + ödeme",
        description: "PCB ayrı kategoride tartılır. İlk ödeme baz fiyat üzerinden, rafineri analizi sonrası ek prim 30 gün içinde yansıtılır.",
      },
    ],
    priceFactors: [
      {
        factor: "PCB içerik kalitesi",
        impact: "Anakart > network ekipman > beyaz eşya kartı > basit kontrolör.",
      },
      {
        factor: "Cihaz yaşı",
        impact: "2010 öncesi cihazlar daha yüksek altın oranı, daha yüksek fiyat.",
      },
      {
        factor: "LME bakır + altın spot fiyatı",
        impact: "PCB içeriğindeki bakır LME, altın spot piyasası referans alınır.",
      },
      {
        factor: "Miktar ve kategori karışımı",
        impact: "Tek kategori (sadece anakart) karışık tonajdan daha yüksek fiyatlandırılır.",
      },
      {
        factor: "Veri imha hizmeti",
        impact: "Kurumsal müşteri için ek hizmet ücreti yoktur, dahildir.",
      },
    ],
  },

  {
    id: "endustriyel-hurda-alimi",
    title: "Endüstriyel Hurda Alımı",
    shortDescription: "Fabrika, atölye, üretim tesisi hurdası — tonajlı kapasite",
    description:
      "Sanayi tesisleri için entegre hurda yönetimi: aylık veya haftalık düzenli alım sözleşmesi, UATF dokümantasyonu, lisanslı taşıma, KDV faturası ve Çevre İl Müdürlüğü bildirim formu desteği. Demir, alüminyum, bakır, kablo, makine parçası ve karışık metal kategorilerinde tonaj kapasitesi.",
    icon: "industrial",
    primaryKeyword: "endüstriyel hurda alımı",
    primaryVolume: 720,
    features: [
      "Aylık/haftalık düzenli alım sözleşmesi",
      "UATF + KDV faturası + Çevre İl Müdürlüğü bildirim",
      "Lisanslı kamyon (1-25 ton kapasite)",
      "Saha keşif, kategorize toplama, tonaj kantarı",
      "Sanayi atölyesi talaş düzenli toplama (haftalık)",
    ],
    longDescription: `Sanayi tesisi sahibi veya üretim müdürü iseniz, hurda metalin sadece "atılan şey" değil sürekli yönetim gerektiren bir kalem olduğunu biliyorsunuz. Akar Hurda olarak Gebze, Dilovası, Çayırova ve Tuzla organize sanayi bölgelerinde 100'den fazla tesise düzenli hurda yönetimi hizmeti veriyoruz.

**Düzenli Alım Sözleşmesi — Nasıl Çalışır:**

Sözleşme imzalanır, aylık tahmini tonaj belirlenir (ortalama 5-50 ton/ay), haftalık veya iki haftalık periyotlarda Akar Hurda lisanslı kamyonu tesisinize gelir, kategorize toplama yapılır, kantar köprüsünde tartılır, fatura kesilir, ödeme havale ile yapılır. Tüm süreç tek koordinatör ile yönetilir.

**Sanayi Atölyesi Talaş Toplama:**

CNC torna, freze, matkap tezgahı kullanan sanayi atölyeleri haftalık 200-2000 kg arası talaş üretir. Talaş yağ ve kesme sıvısı içerir, depolaması zor ve kokulu olabilir. Akar Hurda olarak haftalık talaş toplama hizmeti sunuyoruz: ayrı kovalarla demir talaşı, alüminyum talaşı, paslanmaz talaş, pirinç talaş ayrılır, her hafta belirlenen günde toplanır, aylık fatura kesilir.

**UATF (Ulusal Atık Taşıma Formu):**

Tehlikesiz atık (hurda metal çoğunlukla bu kategoride) ve tehlikeli atık (akü, elektronik, motor yağı kalıntılı talaş) taşımalarında UATF zorunludur. Akar Hurda olarak UATF formunu otomatik düzenler, taşıma sırasında 3 nüsha (gönderici, taşıyıcı, alıcı) imzalar, Çevre İl Müdürlüğü dijital sistem üzerinden online bildirir. Çevre denetimlerinde gösterilmesi gereken belgedir.

**Çevre İl Müdürlüğü Bildirim:**

Sanayi tesisleri yıllık atık beyanı yapmak zorundadır. Akar Hurda yıllık özet rapor hazırlayarak (toplam tonaj, kategori dağılımı, taşıma tarihleri, plaka numaraları) bildirim sürecinizi kolaylaştırır.

**KDV Faturası ve Vergi:**

Sanayi alımlarında %20 KDV uygulanır. Matrah formülü: ödenen tutar / 1,20. Resmi fatura mali yıl sonunda gider olarak yazılabilir. Akar Hurda olarak fatura aynı gün düzenlenir.

**Saha Keşif Hizmeti:**

5 ton üzeri tek seferlik atık veya yeni başlayacak düzenli alım için saha ekibimiz tesisinize keşfe gelir. Atık kategori dağılımı, depolama alanı analizi, nakliye lojistiği planlanır. Bu hizmet ücretsizdir ve teklif sonrası bağlayıcı değildir.

Tesisinizin atık yönetimi sürecini Akar Hurda'ya bırakırsanız, çevre uyumu sertifikalı, yasal risk sıfır, finansal şeffaf bir partnere sahip olursunuz.`,
    informationGain: `**Sanayi atölyesi atık tipleri saha haritası (Akar Hurda 2024 müşteri verisi, 80 atölye ortalaması):**

| Atölye Tipi | Ana Atık | Aylık Tonaj | Yan Atık |
|-------------|----------|-------------|----------|
| CNC torna atölyesi | Demir talaş | 1-3 ton | Kesme sıvısı kalıntısı |
| Sac kesim atölyesi | Sac demir | 2-5 ton | Boyalı sac, profil |
| Otomotiv tamir | Karışık demir | 0,5-2 ton | Akü, motor parçası |
| Beyaz eşya üretim | Sac+kablo | 5-10 ton | PCB, plastik |
| Mobilya/dekorasyon | Profil alüminyum | 0,3-1 ton | Demir vida, vinç çelik |
| Elektrik panel | Bakır+kablo | 1-3 ton | PCB, kontrol kart |

**Aylık vs Haftalık Toplama Karar Tablosu:**

- Aylık 5 ton altı: Aylık toplama yeterli
- Aylık 5-15 ton: 2 haftalık periyot ideal
- Aylık 15+ ton: Haftalık toplama (depolama alanı sıkıntısı önlenir)

**KDV Optimizasyonu:**

Şirket bünyesinde hurda satışı yapıyorsanız, faturalı satış %20 KDV içerir. Şahıs olarak satış (örn. yöneticinin kendi malı) farklı vergi rejimine tabidir. Mali müşavirinizle görüşmenizi öneririz — biz iki durumda da resmi belge sağlarız.

**Atık Beyanı Yıllık Süreç:**

Çevre İl Müdürlüğü atık beyanı her yıl Mart ayında ÇED Kanunu ek-1 listesi üzerinden yapılır. Akar Hurda yıllık özet raporumuzla bu beyanı kolaylaştırır — sadece toplam değil, kategori dağılımı + UATF numaraları + plaka bilgileri ile.`,
    processSteps: [
      {
        step: 1,
        title: "Tesis bilgisi ve saha keşif",
        description: "Atık türleri, aylık tonaj tahmini, depolama alanı bilgisi alınır. Saha ekibi keşfe gider, plan oluşturur.",
      },
      {
        step: 2,
        title: "Sözleşme ve kategorize toplama",
        description: "Düzenli alım sözleşmesi imzalanır. Tesisinize ayrı atık kategorileri için konteyner sağlanır.",
      },
      {
        step: 3,
        title: "Periyodik lisanslı taşıma",
        description: "Belirlenen periyotta lisanslı kamyon kategorize alım yapar. UATF anında düzenlenir.",
      },
      {
        step: 4,
        title: "Fatura + ödeme + raporlama",
        description: "Aylık fatura, havale ödeme, yıllık özet rapor. Çevre denetimlerine hazır dosyalar.",
      },
    ],
    priceFactors: [
      {
        factor: "Aylık tonaj",
        impact: "Yüksek tonajda metal türü bazında volume discount değil pozitif fiyat ayarlaması (lojistik optimizasyon).",
      },
      {
        factor: "Atık kategori dağılımı",
        impact: "Bakır+alüminyum yoğun atık demir yoğun atıktan daha yüksek toplam fiyatlanır.",
      },
      {
        factor: "Düzenli alım vs tek seferlik",
        impact: "Düzenli alım sözleşmesinde sabit fiyat formülü garanti edilir.",
      },
      {
        factor: "UATF + dokümantasyon hizmeti",
        impact: "Bu hizmet sözleşme kapsamında dahildir, ek ücret alınmaz.",
      },
      {
        factor: "Tehlikeli atık karışımı",
        impact: "Akü, motor yağı kalıntısı talaş, PCB ayrı taşıma gerektirir.",
      },
    ],
  },

  {
    id: "aku-hurda-alimi",
    title: "Akü Hurda Alımı",
    shortDescription: "Otomotiv ve endüstriyel akü — kurşun-asit, çevreye duyarlı",
    description:
      "Eski araç ve endüstriyel akü hurdası alımı. 60, 72, 90, 105 ve 180 amper kurşun-asit aküler için amper bazlı kg fiyatı. Tehlikeli atık kategorisinde lisanslı taşıma zorunludur. Forklift, jeneratör, UPS aküleri için tonaj kapasitesi.",
    icon: "battery",
    primaryKeyword: "hurda akü alımı",
    primaryVolume: 2400,
    features: [
      "60, 72, 90, 105, 180 amper otomotiv akü",
      "Forklift, jeneratör, UPS endüstriyel akü",
      "Tehlikeli atık lisanslı taşıma",
      "Kurşun + sülfürik asit ayrı işleme",
      "Çevreye duyarlı geri dönüşüm sertifikası",
    ],
    longDescription: `Kurşun-asit akü, hurda metal sektörünün en kritik kategorisidir. Kurşun ağır metal olarak tehlikeli atık sınıfında değerlendirilir, sülfürik asit ise korozif kimyasaldır. Yanlış imha çevre felaketi yaratır — bu yüzden Atık Yönetimi Yönetmeliği akü taşıma ve imha süreçlerini sıkı şekilde düzenler.

Akar Hurda olarak Çevre Bakanlığı onaylı tehlikeli atık taşıma lisansına sahibiz ve aküleri yetkili geri kazanım tesislerine teslim ediyoruz. Kurşun ve plastik gövde ayrı, sülfürik asit nötralize edilerek yeni akü üretiminde tekrar kullanılır.

**Otomotiv Aküleri:**

Binek otomobil aküleri genellikle 45, 60, 72 amper kapasitesindedir. Her amper farklı kurşun ağırlığına denk gelir:

- 60 amper akü: yaklaşık 12-13 kg ağırlık (kurşun + plastik + asit)
- 72 amper akü: yaklaşık 15-16 kg ağırlık
- 90 amper akü: yaklaşık 19-21 kg ağırlık
- 105 amper akü: yaklaşık 25-27 kg ağırlık (kamyon, hafif ticari)
- 180 amper akü: yaklaşık 45-50 kg ağırlık (ağır vasıta, otobüs)

Net kurşun içeriği toplam ağırlığın yaklaşık %60-65'idir. Plastik gövde %10-12, sülfürik asit %25-28.

**Endüstriyel Aküler:**

Forklift aküleri (genellikle 24V veya 48V), jeneratör aküleri, UPS aküleri (kesintisiz güç kaynağı) genellikle daha büyük ve ağırdır. Forklift aküsü 200-1000 kg arası olabilir. Bu aküler için tonajlı alım yapıyoruz.

**Lityum-İyon Aküler — Ayrı Kategori:**

Modern elektrikli araçlar (Tesla, BYD, Tesla, Tesla model gibi) lityum-iyon akü kullanır. Bu aküler kurşun-asit aküden tamamen farklı kimyasaldır ve farklı geri dönüşüm sürecine tabidir. Akar Hurda olarak Li-iyon akü alımı yapmıyoruz — yetkili özel firmalara yönlendirme yapıyoruz.

**Yasal Süreç:**

Akü tehlikeli atık olduğundan UATF formu zorunludur. Sanayi tesisleri (forklift, jeneratör akü değişimi) için Çevre İl Müdürlüğü bildirim formu otomatik düzenlenir. Bireysel müşteriler için (otomobil akü değişimi) sadece UATF formu yeterlidir.

**Çevreye Etki:**

1 ton hurda akünün doğru imhası şunları sağlar:
- 600 kg kurşun yeniden kullanıma kazandırılır
- 280 kg sülfürik asit nötralize edilerek tekrar kullanılır
- 120 kg plastik geri dönüştürülür
- Çevreye 1 tondan fazla CO2 salımı önlenir (birincil kurşun madenciliği yerine)

Yanlış imha edilmiş bir akü 100 m² toprak alanını kurşunla kontamine edebilir, yer altı suyuna 50 yıl boyunca sızıntı yapar. Bu yüzden lisanslı hurdacıya teslim etmek hem yasal hem etik zorunluluktur.`,
    informationGain: `**Akar Hurda akü amper-kurşun ağırlık tablosu (saha tartım verisi 2024, 1.500+ akü ölçümü):**

| Akü Tipi | Toplam Ağırlık | Net Kurşun (~%62) | Tahmini Hurda Değeri Sırası |
|----------|----------------|--------------------|-----------------------------|
| 45 Ah binek | 9,5-10,5 kg | 5,9-6,5 kg | Düşük |
| 60 Ah binek | 12-13 kg | 7,4-8 kg | Düşük-orta |
| 72 Ah binek | 15-16 kg | 9,3-9,9 kg | Orta |
| 90 Ah hafif ticari | 19-21 kg | 11,8-13 kg | Orta-yüksek |
| 105 Ah kamyonet | 25-27 kg | 15,5-16,7 kg | Yüksek |
| 180 Ah ağır vasıta | 45-50 kg | 27,9-31 kg | Yüksek |
| 200+ Ah forklift | 200-1000 kg | 124-620 kg | Çok yüksek (tonajlı) |

**LME Kurşun Spot Fiyatı:** Kurşun LME'de aktif işlem görür ve çinko ile birlikte hareket eder. Bakırdan daha az oynak ama TL fiyatı USD/TRY kurundan etkilenir.

**Akü Yaşı Etkisi:** Akünün yeni veya eski olması fiyatı çok az etkiler — sonuçta eritmeye giriyor. Ancak akünün çatlamış olması veya asit sızıntısı varsa taşıma maliyeti yükselir, fiyat marjinal düşebilir.

**Uyarı — Yanlış Beyan:** Bazı müşteriler "akü tertemiz" diye getirir ama incelendiğinde gizli çatlak veya asit sızıntısı çıkar. Bu sızıntı taşıma araçlarını ve kantarımızı kontamine eder. Akar Hurda saha kontrol prosedürü sıkıdır — açık çatlak/sızıntı varsa size haber verir, ek sızıntı önleme malzemesi (sızıntı kovası, emici) kullanırız.

**Forklift Akü — Özel Süreç:** Forklift aküsü ağır ve büyük olduğu için özel forklift veya kanca sistemi gerekir. Akar Hurda kendi forklift kapasitemiz var, sahaya geliriz. 500 kg üzeri akü tek seferde alınamaz, parçalara bölünür veya özel araçla taşınır.`,
    processSteps: [
      {
        step: 1,
        title: "Akü tipi ve adet",
        description: "Otomotiv akü mü, forklift mü, UPS mi? Adet ve amper bilgisi paylaşın.",
      },
      {
        step: 2,
        title: "Lisanslı taşıma randevu",
        description: "Tehlikeli atık taşıma lisanslı aracımız belirlenen saatte adresinizde olur.",
      },
      {
        step: 3,
        title: "Sızıntı kontrolü + tartım",
        description: "Akülerin durumu kontrol edilir (çatlak, sızıntı). Kalibre kantarda her akü ayrı tartılır.",
      },
      {
        step: 4,
        title: "UATF + ödeme",
        description: "UATF formu düzenlenir, kg fiyatı uygulanır, anında ödeme yapılır. Sanayi tesislerinde KDV faturası kesilir.",
      },
    ],
    priceFactors: [
      {
        factor: "LME kurşun spot fiyatı",
        impact: "Kurşun fiyatı LME'de USD/ton olarak işlem görür, TRY'ye çevrilir.",
      },
      {
        factor: "Akü ağırlığı (amper)",
        impact: "Ağır akü daha çok kurşun içerir, kg fiyatı sabit ama toplam tutar yükselir.",
      },
      {
        factor: "Akü durumu",
        impact: "Sağlam akü standart, çatlak/sızıntılı akü taşıma maliyeti nedeniyle marjinal düşük.",
      },
      {
        factor: "Sanayi tonajlı vs perakende",
        impact: "1 ton üzeri forklift/UPS akü tonajlı fiyat üzerinden değerlendirilir.",
      },
      {
        factor: "Lisanslı taşıma",
        impact: "Tehlikeli atık lisanslı taşıma standart fiyat dahilindedir, ek ücret alınmaz.",
      },
    ],
  },

  {
    id: "paslanmaz-krom-hurda-alimi",
    title: "Paslanmaz / Krom Hurda Alımı",
    shortDescription: "304, 316 paslanmaz çelik + krom — XRF analiz ile sınıflama",
    description:
      "Paslanmaz çelik (AISI 304, 316, 316L, 430) ve krom hurda alımı. Mıknatıs + spark testi + XRF analiz ile alaşım sınıflaması. Mutfak ekipmanı, sanayi borusu, tıbbi cihaz, gıda işleme tesisi paslanmazı için kategori bazlı şeffaf fiyatlandırma.",
    icon: "stainless",
    primaryKeyword: "paslanmaz hurda",
    primaryVolume: 170,
    features: [
      "AISI 304, 316, 316L, 430 ayrı kategori",
      "XRF cihazıyla nikel + krom oranı doğrulaması",
      "Mutfak, sanayi, tıbbi, gıda işleme paslanmazı",
      "Manyetik ve manyetik olmayan ayrımı",
      "Saf krom (yüksek değer) ayrı tartım",
    ],
    longDescription: `Paslanmaz çelik, modern hurda sektörünün premium kategorilerindendir. Bakır kadar değerli olmasa da demire göre 5-8 kat fiyatlıdır ve sanayi atölyeleri için stratejik atıktır. Akar Hurda olarak XRF analiz cihazımızla paslanmaz alaşım sınıfını saniyeler içinde belirleyebiliyoruz — bu cihaz olmadan gözle ayrım çok zordur ve siz değer kaybedersiniz.

**Paslanmaz Sınıfları:**

**AISI 304 (18/8 paslanmaz):** %18 krom + %8 nikel içeren standart paslanmaz. Mutfak ekipmanı, lavabo, dekoratif boru, gıda kabı en yaygın kullanım alanı. Manyetik değildir (austenit yapı). Hurda fiyat referansı: orta-yüksek.

**AISI 316 / 316L (Marin paslanmaz):** %16-18 krom + %10-14 nikel + %2-3 molibden. 304'e göre korozyon direnci çok daha yüksek. Tıbbi implant, kimyasal sanayi tankı, deniz ortamı ekipmanı, ilaç sanayisi tesisatı kullanım alanı. Hurda fiyat referansı: yüksek (304'ün %15-25 üzeri).

**AISI 316L (Düşük karbonlu 316):** Kaynak edilebilirliği yüksek 316 türü. Kimyasal sanayi ve sağlık sektörü tercihi.

**AISI 430 (Ferritik paslanmaz):** %16-18 krom + nikel içermez. Daha ucuzdur, manyetiktir. Beyaz eşya iç paneli, dekoratif uygulama. Hurda fiyatı 304'ün %60-70'i.

**AISI 410 (Martenzitik paslanmaz):** %12-13 krom, manyetiktir. Bıçak, mutfak gereci, türbin kanadı. Düşük nikel nedeniyle 304'ten ucuzdur.

**Saha Tanıma Testleri:**

1. **Mıknatıs Testi:** 304 ve 316 manyetik DEĞİLDİR. 430 ve 410 manyetiktir. Mıknatıs çekiyorsa daha düşük sınıf paslanmaz.
2. **Spark (Kıvılcım) Testi:** Taş üzerinde sürtüldüğünde çıkan kıvılcım rengi alaşıma göre değişir. 304 kıvılcımı kısa-kırmızı, 316 daha az kıvılcım ve gri ton, karbon çeliği uzun-sarı kıvılcım.
3. **XRF Analizi:** Akar Hurda Niton XL3t cihazıyla saniyeler içinde tam alaşım kompozisyonu (krom %, nikel %, molibden %, demir %) görüntülenir. En kesin yöntem.

**Krom Saf Hurda:**

Saf krom (kromatlama tesislerinden, krom kaplama atıkları, kimyasal sanayi katalizörleri) yüksek değerlidir. Çok az miktarda olsa bile ayrı tartılır.

**Yaygın Karıştırma — Önemli Uyarı:**

"Paslanmaz görünen" metallerin bir kısmı aslında krom kaplı çeliktir. Krom kaplama 0,1-0,3 mm arası yüzeydedir, altında karbon çeliği bulunur. Hurda olarak kaplı çelik karbon çeliği kategorisinde değerlendirilir — yani fiyatı paslanmazın 1/5'i kadar olabilir. XRF analiz olmadan bu ayrım yapılmaz.`,
    informationGain: `**304 vs 316 hurda fiyat farkı detaylı analiz:**

LME nikel spot fiyatı 304 ve 316 paslanmaz hurda fiyatının ana belirleyicisidir. 316 daha çok nikel + molibden içerdiği için nikel fiyatı yükseldiğinde 316'nın 304'ten farkı açılır.

| Metal İçerik | AISI 304 | AISI 316 |
|--------------|----------|----------|
| Krom | %18-20 | %16-18 |
| Nikel | %8-10,5 | %10-14 |
| Molibden | <%0,75 | %2-3 |
| Manganez | <%2 | <%2 |
| Karbon | <%0,08 | <%0,08 |
| Geri kalan | Demir | Demir |

Saha hesabı: 1 ton 316 paslanmaz hurda eritildiğinde yaklaşık 120 kg nikel + 25 kg molibden geri kazanılır. Bu metaller çok değerlidir — molibden LME fiyatı bakırın 2-3 katıdır.

**Manyetik Çelik Yanıltma:** %15 oranında müşteri 430 paslanmaz veya krom kaplı çeliği "304 olmalı" diyerek getirir. XRF testi gerçek alaşımı gösterir, bu durumda fiyat doğru kategoriden uygulanır. Akar Hurda olarak şeffaflık üzerine kurulu marka olduğumuzdan müşteriye XRF sonucunu doğrudan gösteririz.

**Sanayi Atölyesi Pratik Bilgi:** Gıda işleme, tıbbi cihaz veya kimyasal sanayi atölyesi sahipseniz, atıklarınızı 304/316 ayrı kovalarda biriktirin. Karışık paslanmaz "ortalama" fiyat üzerinden değerlendirilir, oysa ayrı toplandığında %15-25 fazla fiyat alabilirsiniz.

**Saf Krom Lokasyonları:** Krom kaplama tesisleri, galvaniz tesisleri, kimyasal sanayi katalizör atıkları en yaygın saf krom kaynaklarıdır. Bu atıklar genellikle özel ambalajda gelir ve ayrı kategoride tartılır. Bireysel müşteri saf krom hurdası nadir bulur.`,
    processSteps: [
      {
        step: 1,
        title: "Tahmini sınıf bilgisi",
        description: "Mutfak ekipmanı 304 olabilir, tıbbi cihaz/kimyasal tank 316 olabilir. Yaklaşık miktar ve kullanım alanı paylaşın.",
      },
      {
        step: 2,
        title: "Manyetik ön test",
        description: "Adresinize gelmeden önce kendi mıknatısınızla test edebilirsiniz. Mıknatıs çekmiyorsa 304/316 adayı, çekiyorsa 430/410 veya kaplı çelik.",
      },
      {
        step: 3,
        title: "XRF analiz + tartım",
        description: "Niton XRF cihazıyla saniyeler içinde alaşım sınıfı belirlenir. Ekrandaki sonuç size gösterilir, sınıf bazında kantar tartımı yapılır.",
      },
      {
        step: 4,
        title: "Sınıf bazlı fiyat + ödeme",
        description: "304, 316, 430 ayrı kg fiyatları uygulanır. Toplam tutar onayınıza sunulur, anında ödeme yapılır.",
      },
    ],
    priceFactors: [
      {
        factor: "LME nikel spot fiyatı",
        impact: "316 paslanmaz nikel oranı yüksek olduğundan nikel fiyatına çok duyarlı.",
      },
      {
        factor: "LME molibden spot fiyatı",
        impact: "316'da %2-3 molibden, fiyatı doğrudan etkiler.",
      },
      {
        factor: "Alaşım sınıfı (304/316/430)",
        impact: "316 en yüksek, 304 standart, 430 düşük (nikelsiz).",
      },
      {
        factor: "Çapraz kontamine",
        impact: "Paslanmaza karışmış demir, alüminyum saflığı düşürür.",
      },
      {
        factor: "Kaplı çelik vs gerçek paslanmaz",
        impact: "Krom kaplı çelik karbon çeliği fiyatından alınır — XRF olmadan ayrım yapılamaz.",
      },
    ],
  },

  {
    id: "pirinc-bronz-hurda-alimi",
    title: "Pirinç / Bronz Hurda Alımı",
    shortDescription: "Sarı pirinç, kırmızı pirinç, bronz, pirinç talaş — yüksek değer",
    description:
      "Pirinç (sarı/kırmızı) ve bronz hurda alımı. Vana, musluk, kapı kolu, dekoratif eşya, müzik aleti, motor parçası kategorilerinde alaşım analizi ile şeffaf fiyat. Tornalama atölyelerinden çıkan pirinç talaş düzenli alım. Kalibre kantar tartım, anında ödeme.",
    icon: "brass",
    primaryKeyword: "pirinç hurda",
    primaryVolume: 110,
    features: [
      "Sarı pirinç (CuZn37), kırmızı pirinç (CuZn15-20)",
      "Bronz (Cu-Sn alaşım, %10 kalay üzeri)",
      "Pirinç talaş (torna atölyeleri)",
      "XRF analiz ile alaşım kompozisyonu doğrulaması",
      "Vana, musluk, kapı kolu, dekoratif eşya alımı",
    ],
    longDescription: `Pirinç ve bronz, antik çağdan günümüze değerli alaşım metaller olarak kullanılmıştır. Modern hurda sektöründe altın-sarı renklerinden tanınırlar ve bakır içerikleri nedeniyle yüksek değerli kategoride değerlendirilirler. Akar Hurda olarak pirinç ve bronz hurdayı alaşım kompozisyonuna göre kategori bazlı tartıyoruz.

**Pirinç Türleri:**

**Sarı Pirinç (CuZn37 / 70/30 Brass):** %63-67 bakır + %33-37 çinko. En yaygın pirinç türü. Vana, musluk, su tesisatı parçaları, dekoratif eşyalar (kapı kolu, lamba, mum, çerçeve), bazı silah kovanları, müzik aletleri (trombon, trompet, korne). Sarı parlak görünüm. Hurda fiyat referansı: orta-yüksek.

**Kırmızı Pirinç (CuZn15-20):** %80-85 bakır + %15-20 çinko. Bakır oranı yüksek olduğundan kızılımsı renk. Yüksek korozyon direnci, denizcilik ve sanayi vana uygulamaları. Hurda fiyat referansı: yüksek (sarı pirinçten %15-25 üzeri).

**Bronz (Cu-Sn alaşım):** %88-92 bakır + %8-12 kalay (bazen küçük oranda fosfor, çinko, alüminyum, nikel). Antik çağda silah ve alet üretiminde, modern dönemde rulman, dişli, motor parçası, denizcilik propeller, sanat eserlerinde kullanılır. Kalay LME'de bakırın 4-5 katı fiyatlıdır — bu yüzden bronz hurda pirinçten daha yüksek değerlidir.

**Pirinç Talaş:** Vana, musluk, dekoratif eşya tornalama atölyelerinden çıkan ince pirinç talaşı. Yağ ve kesme sıvısı içerir, eritme öncesi temizlenir. Saflığı düşük olabileceğinden ayrı kategoride tartılır.

**Saha Tanıma:**

Pirinç sarı parlak veya altın renktedir. Bronz daha kahverengimsi-kızıl. Bakır pembe-kırmızı (saf), pirinçten farkı çinko içermemesi. XRF analiz cihazımız tüm bu alaşımları saniyeler içinde ayırt eder.

**Yaygın Karıştırma:**

"Sarı görünen" tüm metaller pirinç değildir. Altın kaplı plastik, pirinç renkli metal kaplama veya özellikle dekoratif eşyalarda yumuşak metal alaşımları ile karıştırılır. Akar Hurda saha tecrübesi: mıknatıs testi (pirinç çekmez), ağırlık (pirinç nispeten ağırdır), bükme testi (pirinç sertçe esner, kalay-kurşun alaşımı kolay bükülür).

**Müzik Aleti Pirinci:**

Trompet, trombon, korne, fagot gibi nefesli çalgılar yüksek kaliteli sarı pirinçten yapılır. Bu cihazlar hurda olarak getirildiğinde nostalji veya ikinci el satış değeri olabilir — Akar Hurda olarak mümkün olduğunda müşteriyi ikinci el alıcılara yönlendiriyoruz, hurda fiyatından kazanmaktansa ikinci el satış genellikle 5-10 kat değerlidir.`,
    informationGain: `**Pirinç vs Bronz Alaşım Hesabı (LME spot fiyatı bazında, 2026 ortalaması):**

Sarı pirinç (CuZn37) bileşim:
- 0,67 kg bakır × LME bakır fiyatı + 0,33 kg çinko × LME çinko fiyatı = brüt değer/kg
- Bakır LME ortalaması: 9.500 USD/ton (335 TL/kg)
- Çinko LME ortalaması: 2.700 USD/ton (95 TL/kg)
- Brüt: 0,67 × 335 + 0,33 × 95 = 224 + 31 = 255 TL/kg
- Hurda alış (işlem maliyeti, marj): yaklaşık 220-235 TL/kg

Bronz (Cu-Sn 90/10) bileşim:
- 0,90 kg bakır × LME bakır + 0,10 kg kalay × LME kalay
- Kalay LME: 30.000 USD/ton (1.060 TL/kg) — son derece pahalı
- Brüt: 0,90 × 335 + 0,10 × 1.060 = 301 + 106 = 407 TL/kg
- Hurda alış: yaklaşık 350-380 TL/kg

Yani aynı kg ağırlık bronz pirinçten yaklaşık %50 daha pahalıdır. Bu yüzden ayrım kritik!

**Sarı Pirinç Talaş — Yağ Etkisi:**

Vana ve musluk tornalama atölyelerinden çıkan pirinç talaşı %5-10 oranında yağ ve kesme sıvısı içerir. Eritme tesisi yağı uzaklaştırırken enerji harcar, bu yüzden yağ oranı yüksek talaş %10-15 daha düşük fiyatlandırılır. Talaş depolanırken üst delikten 48 saat süzdürmeniz fiyatınızı yükseltir.

**Antika Pirinç Eşya:**

Eski mum şamdanı, lamba, dekoratif vazo gibi antika pirinç eşyalar hurda fiyatından çok daha değerli olabilir. Akar Hurda saha politikası: hurda olarak alındığında değer kaybeden eşya gördüğümüzde müşteriyi uyarırız, ikinci el alıcılara yönlendiririz.

**Bronz Şehir Heykeli — Ayrı Süreç:**

Belediyelerin sokak heykeli, anıt parçası gibi ulusal kültür mirası niteliğinde bronz eserler asla hurda olarak alınamaz. Bu tür buluntular Kültür Bakanlığı'na bildirilmek zorundadır. Akar Hurda olarak şüpheli antika değer gördüğümüzde müşteriyi uyarır, gerekiyorsa süreci yönlendiririz.`,
    processSteps: [
      {
        step: 1,
        title: "Eşya türü ve tahmini ağırlık",
        description: "Vana, musluk, talaş, dekoratif eşya — kategori ve yaklaşık kg paylaşın.",
      },
      {
        step: 2,
        title: "Antika değer ön kontrol",
        description: "Eski tarihli müzik aleti, dekoratif eşya, antika eşya tespit edilirse hurda yerine ikinci el alıcı yönlendirmesi yapılır.",
      },
      {
        step: 3,
        title: "XRF + ayrımlı tartım",
        description: "Sarı pirinç, kırmızı pirinç, bronz ayrı XRF analiziyle doğrulanır, ayrı tartılır.",
      },
      {
        step: 4,
        title: "Alaşım bazlı ödeme",
        description: "Her kategori için ayrı kg fiyatı uygulanır. Bronz pirinçten %50 daha yüksek değer, kırmızı pirinç sarıdan %15-25 üzeri.",
      },
    ],
    priceFactors: [
      {
        factor: "LME bakır spot fiyatı",
        impact: "Pirinç ve bronzun temel bileşeni — fiyatın %60-90'ını belirler.",
      },
      {
        factor: "LME kalay spot fiyatı",
        impact: "Bronzda %10 kalay var, fiyatı doğrudan etkiler. Kalay bakırdan 3-4 kat daha pahalı.",
      },
      {
        factor: "LME çinko spot fiyatı",
        impact: "Pirinçte %30-37 çinko, fiyat dalgalanmasına etki eder.",
      },
      {
        factor: "Alaşım sınıfı (sarı/kırmızı/bronz)",
        impact: "Bronz > kırmızı pirinç > sarı pirinç > pirinç talaş hiyerarşisi.",
      },
      {
        factor: "Talaş yağ oranı",
        impact: "%10 üzeri yağ talaş fiyatını %10-15 düşürür.",
      },
    ],
  },

  {
    id: "cinko-hurda-alimi",
    title: "Çinko Hurda Alımı",
    shortDescription: "Çinko levha, döküm, galvaniz hurda — endüstriyel kapasite",
    description:
      "Çinko levha, çinko döküm parça ve galvaniz kaplı sac hurdası alımı. Çatı oluk sistemleri, kalıp malzemeleri, sanayi anodları, oyuncak metal parçaları. Galvaniz kaplı sac için kategori bazlı şeffaf değerlendirme. XRF analiz ile çinko/galvaniz ayrımı.",
    icon: "zinc",
    primaryKeyword: "hurda çinko",
    primaryVolume: 70,
    features: [
      "Çinko levha (çatı oluk, dış cephe)",
      "Çinko döküm (kalıp, otomotiv parça)",
      "Galvaniz kaplı sac (kaplama oranı baz)",
      "Anot (deniz ekipmanı katodik koruma)",
      "Saf çinko vs galvaniz ayrı kategori",
    ],
    longDescription: `Çinko, hurda metal sektörünün orta-yüksek değerli kategorilerinden biridir. Saf çinko levha ve döküm yüksek fiyatlanırken galvaniz kaplı sac (üzerinde çinko kaplama olan demir) demir hurda kategorisinde değerlendirilir. Akar Hurda olarak bu ayrımı XRF analizimizle yapıyoruz.

**Çinko Türleri:**

**Saf Çinko Levha (Z1, Z2):** Çatı oluk sistemi, dış cephe kaplama, paratoner sistemi, dekoratif sanayi uygulaması. %99,5 üzeri saflık. Hurda fiyat referansı: yüksek.

**Çinko Döküm (Zamak Alaşımı):** %96 çinko + %4 alüminyum + bakır + magnezyum. Otomotiv kapı kolu, oyuncak araç, lego parçası, küçük makine parçası, dekoratif eşya. Saflık değişken, döküm tipine göre fiyat farkı vardır.

**Galvaniz Kaplı Sac:** Esasen demir veya çelik, üzerinde 0,02-0,2 mm çinko kaplama. Çatı sacı, beyaz eşya iç sacı, depo levhası. Çinko oranı %3-5 (çok düşük), bu yüzden bu malzeme çinko değil DEMİR kategorisinde değerlendirilir. Sadece galvaniz olduğu için demire göre %3-5 daha düşük fiyatlanır.

**Çinko Anot:** Gemi, deniz ekipmanı, su altı yapıların korozyon korumasında kullanılan kurban anot. Saf çinko, deniz suyunda yavaşça çözünür ve metalin korozyona uğramasını önler. Hurda olarak yüksek değerlidir.

**Pirinç Atığı:** Pirinç içinde %30-37 çinko olduğunu hatırlayın — pirinç atığı çinko kategorisinde değil, pirinç kategorisinde değerlendirilir.

**Saha Tanıma:**

Saf çinko gri-mavi parlak görünür, hafif değil orta ağırlıktadır. Bükmede mat-pürüzlü kırılma yüzeyi gösterir. Mıknatıs çekmez (saf çinko değil). Galvaniz kaplı sac mıknatıs çeker (altta demir var). XRF analizi en kesin yöntem.

**Pratik Bilgi — Çatı Oluğu:**

Eski binaların çatı oluk sistemi (özellikle Almanya, Avusturya tarzı binalarda) saf çinko levhadan yapılır. Bu çatı sistemi yenilendiğinde söz konusu çinko hurdası önemli miktarda olabilir (200-500 kg). Akar Hurda olarak bu tür projeler için tonajlı alım yapıyoruz.

**Yasal Çerçeve:**

Çinko tehlikeli atık değildir. Standart hurda taşıma süreçleri uygulanır. Sanayi tesisleri için UATF formu zorunlu, bireysel müşteriler için sadece teslim formu yeterli.`,
    informationGain: `**Çinko vs Galvaniz Sac Karıştırma — Saha Verisi:**

Akar Hurda saha tecrübesi göstermektedir ki müşterilerin %30'u "çinko kaplı sac"ı saf çinko sanarak getiriyor. Fiyat farkı son derece büyüktür:

- Saf çinko: 80-120 TL/kg aralığında (LME çinko + işlem)
- Galvaniz kaplı demir sac: 12-18 TL/kg (demir hurda fiyatı)

Yani 1 ton "çinko" sandığınız malzeme aslında 100.000 TL yerine 15.000 TL değerinde çıkabilir. XRF analizi olmadan bu ayrım yapılamaz, gözle ayrım son derece zordur.

**Çinko Levha Saha Hesabı:**

Eski Avrupa stili (özellikle Anadolu Beyoğlu, eski İzmir Konak) binalarının çatı sistemi yenilendiğinde çıkan çinko levha:
- Standart 1000 m² çatı: yaklaşık 800-1200 kg saf çinko levha
- Bu yaklaşık 80.000-120.000 TL hurda değerine eşittir
- Galvaniz kaplı sandığınızda kaybedeceğiniz fark: 70.000-100.000 TL

**LME Çinko Spot Fiyatı:**

Çinko, LME'de aktif işlem gören 6 baz metalden biridir (Bakır, alüminyum, çinko, kurşun, nikel, kalay). 2024-2026 ortalaması yaklaşık 2.700-3.000 USD/ton seviyesindedir. TL fiyatı USD/TRY kurundan etkilenir.

**Çinko Anot Pratik Bilgi:**

Limanlar, balıkçı tekneleri ve marina bakım atölyelerinde kullanılmış çinko anotlar yıllık tonajlarda hurda olarak çıkar. Bu anotlar genellikle yarı çözünmüş haldedir (deniz suyunda kısmen erimiş), ağırlıkları azalmış olabilir. Ama saf çinko olduğundan kg fiyatı yüksek uygulanır.

**Eski Sanayi Tezgahları:**

1980-90 yıllarına ait eski Türk sanayi tezgahlarında çinko döküm parça (zamak) kapak, kol, dişli kullanılır. Bu parçalar yenilendiğinde hurda olarak çıkar. Akar Hurda olarak bu nostaljik atıkları XRF doğrulamasıyla saf çinko döküm kategorisinde değerlendiriyoruz.`,
    processSteps: [
      {
        step: 1,
        title: "Tahmini malzeme türü",
        description: "Çatı oluk levhası, sanayi anot, döküm parça veya galvaniz sac — kategori bilgisi paylaşın.",
      },
      {
        step: 2,
        title: "Mıknatıs ön testi",
        description: "Mıknatıs çekiyorsa galvaniz kaplı demir (altta çelik var). Çekmiyorsa saf çinko adayı.",
      },
      {
        step: 3,
        title: "XRF analiz + tartım",
        description: "Niton XRF cihazıyla çinko oranı doğrulanır. Saf çinko ayrı, galvaniz sac demir kategorisinde tartılır.",
      },
      {
        step: 4,
        title: "Kategori bazlı ödeme",
        description: "Saf çinko levha/döküm yüksek fiyat, galvaniz sac demir hurda fiyatı + %3-5 prim, anında ödeme.",
      },
    ],
    priceFactors: [
      {
        factor: "LME çinko spot fiyatı",
        impact: "Çinko fiyatı LME'de USD/ton işlem görür, TRY kuruna çevrilir.",
      },
      {
        factor: "Saflık (saf çinko vs galvaniz)",
        impact: "Saf çinko 5-10 kat değerli. Galvaniz sac demir kategorisinde değerlendirilir.",
      },
      {
        factor: "Form (levha/döküm/anot)",
        impact: "Levha ve anot saf çinko, döküm zamak alaşımı (biraz düşük).",
      },
      {
        factor: "Çapraz kontamine",
        impact: "Çinkoya karışmış demir, bakır saflığı düşürür.",
      },
      {
        factor: "Anot kullanım durumu",
        impact: "Yarı çözünmüş anot ağırlıkça az ama kalite saf çinko olduğundan kg fiyatı yüksek.",
      },
    ],
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
