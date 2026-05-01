# Akar Hurda — Proje Talimatları (Claude Code)

> Repo: `support-candavarci/akarhurda-web` (Sprint 2'de oluşturuldu, dev-candavarci'ye transfer bekliyor)
> Domain: `akarhurda.com` (Sprint 10'da DNS bağlanacak)
> Plan: `~/.claude/plans/halen-tam-olmas-gerekti-i-polymorphic-rossum.md` (v4 onaylı)
> Müşteri: Lider Hurdacı yeni domain — Akar Hurda markası

---

## Marka Kimliği

| Alan | Değer |
|------|-------|
| Marka adı | **Akar Hurda** (legalName) |
| Alternatif ad | **Akar Hurdacı** |
| Slogan | "20 Yıllık Güven, Adresten Alım, Anında Ödeme" |
| Sektör | Hurda metal alımı, geri dönüşüm |
| Bölge | Gebze, Kocaeli ve çevre ilçeler |
| Kuruluş | 2005 |
| Telefon | 0534 776 75 79 |
| Adres | Balçık Mahallesi 3228. Sokak no 16/1, Gebze/Kocaeli 41400 |

## Tasarım Token'ları

```css
--color-primary: #1e293b;        /* slate-800 — endüstriyel */
--color-primary-light: #475569;  /* slate-600 */
--color-primary-dark: #0f172a;   /* slate-900 */
--color-accent: #ea580c;         /* orange-600 — bakır çağrışımı */
--color-accent-hover: #c2410c;   /* orange-700 */
--color-secondary: #475569;      /* slate-600 */
```

**Font:** Geist (next/font self-host)

## Dil Disiplini

- **Locale:** tr-TR (sadece Türkçe — i18n YOK, müşteri tek dilli)
- **Diakritik ZORUNLU:** sınıf, çocuk, ölçü, hassasiyet (TRAP-1)
- **Semantik:** Hurda metal sektörü dili — "kg üzeri tartım", "adresten alım", "anında ödeme"

## İçerik Kuralları

- Hardcoded string YASAK — her şey `src/data/` dosyalarından gelir
- Telefon/email/adres = `contact.ts`, marka = `site.ts`, sayfalar = `pages.ts`
- Yeni hizmet/sayfa eklemek = data dosyasına satır eklemek

## SEO Stratejisi

- **AI ALLOWLIST:** Tüm AI bot'lara `Allow: /` (AEO/GEO citation eligibility için)
- 10 hizmet silosu — her biri pSEO landing'e dönüşecek (Sprint 4-6)
- pSEO matrisi: 7+ ilçe × 10 hurda türü = ~70+ sayfa potansiyeli (Sprint 7'de)
- generateMetadata + sitemap.ts + robots.ts + JSON-LD (Organization + WebSite) layout'ta hazır

## Tech Stack

- Next.js 16.1.6 (App Router)
- React 19.2.3
- TypeScript 5 (strict)
- Tailwind v4 (`@tailwindcss/postcss`)
- next/font Geist (self-host)
- Vercel (Edge runtime OG image)

## KVKK

İletişim formu (Sprint 5+) ZORUNLU KVKK aydınlatma metni içerecek. Müşteri bilgi paylaşımı: telefon, ad, adres → sadece teklif amacıyla.

## Mevcut Sprint Durumu

- ✅ Sprint 1A: Saha tespiti (RAPOR-1)
- ✅ Sprint 1B: Plan v4 onaylandı
- ✅ Sprint 1C: Repo + scaffold (BU SPRINT — Sprint 2)
- ⏳ Sprint 3: Foundation pages (Hakkımızda, Hizmet Bölgesi, KVKK, Gizlilik)
- ⏳ Sprint 4: Service silos (10 hurda türü landing)
- ⏳ Sprint 5: pSEO matrisi
- ⏳ Sprint 6: Blog altyapısı
- ⏳ Sprint 7: Schema/JSON-LD genişletme
- ⏳ Sprint 8: Performance optimization
- ⏳ Sprint 9: Analytics + GSC submission
- ⏳ Sprint 10: DNS switch — akarhurda.com canlı

## Vercel Deploy

- Vercel project: `akarhurda-web` (Sprint 2 sonunda link edilecek)
- Preview URL: `akarhurda-web.vercel.app`
- Production domain: `akarhurda.com` (Sprint 10)
- Build: `next build` (Turbopack dev, Webpack prod)

## Commit Disiplini

- TRAP-9 base_tree güvenliği: `mcp__github__push_files` BİRİNCİ TERCİH
- Her commit sonrası dosya sayısı kontrolü: `gh api repos/.../git/trees/main?recursive=1`
- %10+ düşüş = KRİTİK ALARM
