import type { Metadata } from "next";
import Link from "next/link";
import { articles, articlesPageMeta } from "@/data/articles";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: articlesPageMeta.title,
  description: articlesPageMeta.description,
  path: "/blog",
});

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
  ],
};

/**
 * Schema.org JSON-LD: Blog + ItemList of articles
 */
const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${siteConfig.url}/blog#blog`,
  url: `${siteConfig.url}/blog`,
  name: articlesPageMeta.title,
  description: articlesPageMeta.description,
  inLanguage: "tr-TR",
  publisher: { "@id": `${siteConfig.url}/#organization` },
  blogPost: articles.map((article) => ({
    "@type": "BlogPosting",
    "@id": `${siteConfig.url}/blog/${article.slug}#article`,
    headline: article.title,
    description: article.excerpt,
    url: `${siteConfig.url}/blog/${article.slug}`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Organization",
      name: article.author,
    },
  })),
};

const articleListJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${siteConfig.url}/blog#collectionpage`,
  url: `${siteConfig.url}/blog`,
  name: articlesPageMeta.title,
  description: articlesPageMeta.description,
  isPartOf: { "@id": `${siteConfig.url}/#website` },
  inLanguage: "tr-TR",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: articles.length,
    itemListElement: articles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteConfig.url}/blog/${article.slug}`,
      name: article.title,
    })),
  },
};

const categoryLabels: Record<string, string> = {
  "metal-rehberi": "Metal Rehberi",
  "yasal-cevre": "Yasal & Çevre",
  "fiyat-analiz": "Fiyat Analizi",
};

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <main className="min-h-screen bg-background pt-24 pb-16 md:pt-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
            <Link href="/" className="hover:text-primary">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Blog</span>
          </nav>

          <header className="mb-12 max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">{articlesPageMeta.heroTitle}</h1>
            <p className="mt-4 text-lg text-muted md:text-xl">{articlesPageMeta.heroSubtitle}</p>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group rounded-xl border border-border bg-card p-6 transition hover:border-accent hover:shadow-lg"
              >
                <div className="mb-2 flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-accent/10 px-3 py-1 font-bold uppercase text-accent">
                    {categoryLabels[article.category] || article.category}
                  </span>
                  <span className="text-muted">{article.readingTime} dk okuma</span>
                </div>
                <h2 className="text-xl font-bold text-foreground group-hover:text-accent">
                  {article.title}
                </h2>
                <p className="mt-3 text-sm text-muted line-clamp-3">{article.excerpt}</p>
                <div className="mt-4 inline-flex items-center text-sm font-semibold text-accent">
                  Devamını oku →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
