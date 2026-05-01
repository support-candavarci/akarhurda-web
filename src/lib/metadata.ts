import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

interface CreateMetadataParams {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
  ogImage?: string;
}

const DEFAULT_OG_IMAGE = "/opengraph-image";

export function createMetadata({
  title,
  description,
  path = "",
  noIndex = false,
  ogImage,
}: CreateMetadataParams = {}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const pageTitle = title ?? siteConfig.name;
  const pageDescription = description ?? siteConfig.description;
  const image = ogImage || DEFAULT_OG_IMAGE;

  return {
    title: { absolute: pageTitle },
    description: pageDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [image],
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}
