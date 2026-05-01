import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articles } from "@/data/articles";
import { contact } from "@/data/contact";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

interface PageParams {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return createMetadata({
    title: `${article.title} | Akar Hurda Blog`,
    description: article.excerpt,
    path: `/blog/${slug}`,
  });
}

const categoryLabels: Record<string, string> = {
  "metal-rehberi": "Metal Rehberi",
  "yasal-cevre": "Yasal & Çevre",
  "fiyat-analiz": "Fiyat Analizi",
};

// Naive markdown-ish render — paragraphs, headings, lists, tables
function renderContent(content: string) {
  return content.split("\n\n").map((block, i) => {
    const trimmed = block.trim();
    if (trimmed.startsWith("## ")) {
      return (
        <h2 key={i} className="mt-8 mb-3 text-2xl font-bold text-foreground">
          {trimmed.replace(/^##\s/, "")}
        </h2>
      );
    }
    if (trimmed.startsWith("### ")) {
      return (
        <h3 key={i} className="mt-6 mb-2 text-xl font-bold text-foreground">
          {trimmed.replace(/^###\s/, "")}
        </h3>
      );
    }
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      const items = trimmed.split("\n").map((l) => l.replace(/^[-*]\s/, ""));
      return (
        <ul key={i} className="my-4 list-disc space-y-1 pl-6 text-muted">
          {items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );
    }
    if (trimmed.startsWith("1. ")) {
      const items = trimmed.split("\n").map((l) => l.replace(/^\d+\.\s/, ""));
      return (
        <ol key={i} className="my-4 list-decimal space-y-1 pl-6 text-muted">
          {items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ol>
      );
    }
    if (trimmed.startsWith("|")) {
      // Table block
      const lines = trimmed.split("\n").filter((l) => l.startsWith("|"));
      if (lines.length < 2) return null;
      const headers = lines[0]
        .split("|")
        .map((c) => c.trim())
        .filter(Boolean);
      const rows = lines.slice(2).map((line) =>
        line
          .split("|")
          .map((c) => c.trim())
          .filter(Boolean),
      );
      return (
        <div key={i} className="my-4 overflow-x-auto">
          <table className="w-full border border-border text-sm">
            <thead>
              <tr className="bg-card">
                {headers.map((h, j) => (
                  <th key={j} className="border border-border p-2 text-left font-bold text-foreground">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, j) => (
                <tr key={j}>
                  {row.map((cell, k) => (
                    <td key={k} className="border border-border p-2 text-muted">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    if (trimmed.startsWith("> ")) {
      return (
        <blockquote
          key={i}
          className="my-4 border-l-4 border-accent bg-accent/5 px-4 py-3 italic text-muted"
        >
          {trimmed.replace(/^>\s/, "")}
        </blockquote>
      );
    }
    if (trimmed.length === 0) return null;
    return (
      <p key={i} className="my-4 text-muted leading-relaxed">
        {trimmed.split("**").map((part, j) =>
          j % 2 === 1 ? <strong key={j} className="text-foreground">{part}</strong> : part,
        )}
      </p>
    );
  });
}

export default async function BlogDetailPage({ params }: PageParams) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    author: {
      "@type": "Organization",
      name: article.author,
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${slug}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${siteConfig.url}/blog/${slug}`,
      },
    ],
  };

  const otherArticles = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <main className="min-h-screen bg-background pt-24 pb-16 md:pt-32">
        <article className="mx-auto max-w-4xl px-4 md:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
            <Link href="/" className="hover:text-primary">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{article.title}</span>
          </nav>

          <header className="mb-8">
            <div className="mb-3 flex items-center gap-3 text-xs">
              <span className="rounded-full bg-accent/10 px-3 py-1 font-bold uppercase text-accent">
                {categoryLabels[article.category]}
              </span>
              <span className="text-muted">{article.readingTime} dk okuma</span>
              <span className="text-muted">·</span>
              <time dateTime={article.publishedAt} className="text-muted">
                {new Date(article.publishedAt).toLocaleDateString("tr-TR")}
              </time>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              {article.title}
            </h1>
            <p className="mt-4 text-lg text-muted md:text-xl">{article.excerpt}</p>
          </header>

          <div className="prose prose-lg max-w-none">
            {renderContent(article.content)}
          </div>

          <section className="mt-12 rounded-2xl border-2 border-accent/30 bg-accent/5 p-6 md:p-8">
            <h2 className="text-xl font-bold text-foreground">Hurdanız İçin Anında Fiyat</h2>
            <p className="mt-2 text-muted">
              20 yıllık tecrübemizle adresten alım, dürüst tartım, anında ödeme.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <a href={contact.phoneHref} className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 font-bold text-primary transition hover:bg-accent-light">
                {contact.phone}
              </a>
              <a href={contact.whatsappUrl} className="inline-flex items-center justify-center rounded-lg border-2 border-accent px-5 py-3 font-bold text-accent transition hover:bg-accent hover:text-primary">
                WhatsApp Talep
              </a>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Diğer Yazılar</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {otherArticles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/blog/${a.slug}`}
                  className="rounded-xl border border-border bg-card p-4 text-sm transition hover:border-accent"
                >
                  <h3 className="font-bold text-foreground">{a.title}</h3>
                  <p className="mt-1 text-xs text-muted">{a.readingTime} dk okuma</p>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
