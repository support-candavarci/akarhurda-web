import type { Metadata } from "next";
import Link from "next/link";
import { faqs, faqCategoryLabels, faqPageMeta, type FaqCategory } from "@/data/faq";
import { contact } from "@/data/contact";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: faqPageMeta.title,
  description: faqPageMeta.description,
  path: "/sss",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "SSS", item: `${siteConfig.url}/sss` },
  ],
};

export default function SssPage() {
  const categories = Object.keys(faqCategoryLabels) as FaqCategory[];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <main className="min-h-screen bg-background pt-24 pb-16 md:pt-32">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
            <Link href="/" className="hover:text-primary">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">SSS</span>
          </nav>

          <header className="mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">{faqPageMeta.heroTitle}</h1>
            <p className="mt-4 text-lg text-muted md:text-xl">{faqPageMeta.heroSubtitle}</p>
          </header>

          {categories.map((cat) => {
            const items = faqs.filter((f) => f.category === cat);
            if (items.length === 0) return null;
            return (
              <section key={cat} className="mb-10">
                <h2 className="mb-4 text-2xl font-bold text-foreground">{faqCategoryLabels[cat]}</h2>
                <div className="space-y-3">
                  {items.map((faq) => (
                    <details key={faq.id} className="rounded-xl border border-border bg-card p-5">
                      <summary className="cursor-pointer font-bold text-foreground">{faq.question}</summary>
                      <p className="mt-3 text-muted leading-relaxed">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            );
          })}

          <section className="mt-12 rounded-2xl border border-border bg-primary p-8 text-white md:p-12">
            <h2 className="text-2xl font-extrabold md:text-3xl">Sorunuz mu Var?</h2>
            <p className="mt-3 text-white/90 md:text-lg">
              Yukarıda cevabını bulamadığınız bir konu için doğrudan iletişime geçin.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={contact.phoneHref} className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 font-bold text-primary transition hover:bg-accent-light">{contact.phone}</a>
              <a href={contact.whatsappUrl} className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-bold text-white transition hover:bg-white hover:text-primary">WhatsApp ile Yaz</a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
