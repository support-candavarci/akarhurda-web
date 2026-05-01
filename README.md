# Akar Hurda Web

[akarhurda.com](https://akarhurda.com) — Gebze ve Kocaeli'nin güvenilir hurda metal alım adresi.

## Marka

**Akar Hurda** — 20 yıllık tecrübe, adresten alım, anında ödeme. Bakır, alüminyum, demir, kablo, elektronik, akü, paslanmaz, pirinç, çinko hurda alımı.

## Tech Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript 5 strict
- Tailwind v4
- Vercel hosting + Edge runtime

## Geliştirme

```bash
# Bağımlılıkları kur
npm install

# Dev sunucu (Turbopack)
npm run dev

# Production build
npm run build
npm run start

# Lint
npm run lint
```

`http://localhost:3000` adresinden erişin.

## Proje Yapısı

```
src/
├── app/                  # App Router rotaları
│   ├── layout.tsx        # Root layout + Organization JSON-LD
│   ├── page.tsx          # Ana sayfa
│   ├── sitemap.ts        # XML sitemap
│   ├── robots.ts         # AI ALLOWLIST
│   ├── opengraph-image.tsx
│   ├── icon.tsx
│   └── apple-icon.tsx
├── components/
│   ├── layout/           # Header, Footer, MobileBottomBar
│   ├── ui/               # Button, WhatsAppFloat, Card vb.
│   ├── sections/         # Hero, Services, FAQ vb. (Sprint 3+)
│   └── analytics/        # GoogleAnalytics
├── data/                 # ⭐ Tüm içerik tek kaynak
│   ├── site.ts
│   ├── contact.ts
│   ├── navigation.ts
│   ├── services.ts       # 10 hurda türü
│   ├── pages.ts
│   └── footer.ts
└── lib/
    ├── utils.ts          # cn(), formatPhone()
    ├── metadata.ts       # createMetadata helper
    └── breadcrumbs.ts    # JSON-LD breadcrumb generator
```

## Mimari Prensipler

1. **Data-driven:** İçerik `src/data/`'dan gelir, component'larda hardcoded string YASAK
2. **TypeScript strict:** `any` YASAK, interface zorunlu
3. **SEO-first:** generateMetadata + sitemap + robots + JSON-LD
4. **AI-friendly:** Tüm AI bot'lara `Allow: /` (AEO/GEO citation)
5. **Mobile-first:** Tailwind breakpoint'leri (sm/md/lg/xl)

## Tasarım Token'ları

```css
--color-primary: #1e293b;      /* slate-800 */
--color-accent: #ea580c;       /* orange-600 — bakır */
--color-secondary: #475569;    /* slate-600 */
```

## Environment

`.env.example` dosyasını `.env.local` olarak kopyalayın ve değerleri doldurun:

```bash
cp .env.example .env.local
```

## Deploy

Vercel'e otomatik deploy. Production: `akarhurda.com` (Sprint 10'da DNS bağlanacak).

## Lisans

Özel — Candavarci Digital tarafından geliştirildi. © 2026 Akar Hurda.
