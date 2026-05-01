import type { Metadata } from "next";
import Link from "next/link";
import { policies } from "@/data/policies";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

const policy = policies.kvkk;

export const metadata: Metadata = createMetadata({
  title: policy.title,
  description: policy.description,
  path: "/kvkk",
});

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: policy.heroTitle, item: `${siteConfig.url}/${policy.slug}` },
  ],
};

export default function KvkkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <main className="min-h-screen bg-background pt-24 pb-16 md:pt-32">
        <article className="mx-auto max-w-4xl px-4 md:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
            <Link href="/" className="hover:text-primary">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{policy.heroTitle}</span>
          </nav>
          <header className="mb-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">{policy.heroTitle}</h1>
            <p className="mt-3 text-sm text-muted">Son güncelleme: {policy.lastUpdated}</p>
          </header>
          <div className="space-y-6">
            {policy.sections.map((s, i) => (
              <section key={i} className="rounded-xl border border-border bg-card p-6">
                <h2 className="text-xl font-bold text-foreground">{s.heading}</h2>
                <p className="mt-3 text-muted leading-relaxed">{s.body}</p>
              </section>
            ))}
          </div>
        </article>
      </main>
    </>
  );
}
