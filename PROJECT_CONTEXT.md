# Akar Hurda Web — Proje Bağlamı

## Müşteri

**Akar Hurda** (önceki: Lider Hurdacı, yeni domain ile yeniden konumlandırma)
- Sektör: Hurda metal alımı / geri dönüşüm
- Bölge: Gebze, Kocaeli + çevre ilçeler
- Tecrübe: 20 yıl (2005'ten beri)
- USP: "Adresten alım, anında ödeme, dürüst tartım"

## Plan Referansı

`~/.claude/plans/halen-tam-olmas-gerekti-i-polymorphic-rossum.md` — v4 onaylı, 10 sprint.

## Marka

| | |
|---|---|
| Logo karakteri | "A" (orange-600 ground) — Sprint 4'te gerçek logo eklenecek |
| Renk paleti | slate-800 + orange-600 (bakır çağrışımı) + slate-600 |
| Font | Geist (Google Fonts, next/font) |
| Ses tonu | Profesyonel, güvenilir, yerel ve samimi |

## Tech Stack

- **Framework:** Next.js 16.1.6 (App Router, Turbopack dev)
- **UI:** React 19.2.3 + Tailwind v4 + custom CSS variables
- **Type:** TypeScript 5 strict
- **Hosting:** Vercel (Edge OG, Edge runtime)
- **DNS:** Sprint 10'da Vercel DNS veya Cloudflare → akarhurda.com

## Sayfa Mimarisi

### Static (Sprint 2-3)
- `/` — Ana sayfa (hero + 10 hizmet preview + CTA)
- `/hakkimizda` — Şirket hikayesi
- `/hurda-turleri` — 10 hizmet listesi
- `/hizmet-bolgesi` — 7+ ilçe + harita
- `/iletisim` — Form + harita + telefon
- `/blog` — Blog listesi (Sprint 6)
- KVKK, Gizlilik, Kullanım Şartları (Sprint 3)

### Dynamic (Sprint 4-7)
- `/hurda-turleri/[slug]` — 10 hurda türü landing (Sprint 4)
- `/blog/[slug]` — Blog yazıları (Sprint 6)
- `/[ilce-slug]/[hurda-slug]` — pSEO 70+ sayfa (Sprint 7)

## Veri Mimarisi

```
src/data/
├── site.ts          (marka + meta)
├── contact.ts       (telefon + adres + WhatsApp helpers)
├── navigation.ts    (header menü + CTA)
├── services.ts      (10 hurda türü)
├── pages.ts         (her sayfanın meta verileri)
├── footer.ts        (footer link grupları)
└── (Sprint 3+) districts.ts, articles.ts, faq.ts, testimonials.ts, pseo.ts
```

## Kalan Sprint'ler

| Sprint | Kapsam | Süre |
|--------|--------|------|
| 3 | Foundation pages (Hakkımızda, Hizmet Bölgesi, KVKK) | 4-6 saat |
| 4 | 10 hurda türü landing (`/hurda-turleri/[slug]`) | 8-10 saat |
| 5 | İçerik zenginleştirme + FAQ + testimonials | 4-6 saat |
| 6 | Blog altyapısı + ilk 5 yazı | 6-8 saat |
| 7 | pSEO matrisi (ilçe × hurda) | 6-8 saat |
| 8 | Schema markup genişletme + LocalBusiness | 3-4 saat |
| 9 | Analytics setup (GA4 + GSC + Ads conversion) | 3-4 saat |
| 10 | DNS switch + canlı production | 1-2 saat |

## Bilinen Eksikler (Sprint 2 çıkışında)

1. Logo (placeholder "A" kullanılıyor — Sprint 4'te gerçek logo)
2. Hero görseli (Sprint 4'te eklenecek)
3. KVKK/Gizlilik/Kullanım Şartları sayfaları (Sprint 3)
4. Blog altyapısı (Sprint 6)
5. pSEO matrisi (Sprint 7)
6. GA4 ID (Sprint 9'da env'e eklenecek)

## Critical Decisions

- **Apex domain:** `akarhurda.com` (www yok, SEO temizliği için)
- **AI ALLOWLIST:** Tüm AI bot'lara izin (asil-car-web AI block ile zıt — Akar AEO/GEO öncelikli)
- **Slate + Orange:** Endüstriyel gravitas + bakır çağrışımı (rakip hurda firmaları sadece sarı/kırmızı kullanıyor)
- **Single-locale:** Sadece tr-TR, i18n karmaşıklığı yok
- **miray-kocak'tan founder pattern miras:** Sprint 5'te `lisanslar.ts` (geri dönüşüm lisansları) için kullanılacak

## Vercel Project

- Slug: `akarhurda-web`
- Repo: `support-candavarci/akarhurda-web` (transfer pending → development-candavarci)
- Preview: `https://akarhurda-web.vercel.app` (Sprint 2 sonunda)
- Production: `https://akarhurda.com` (Sprint 10)
