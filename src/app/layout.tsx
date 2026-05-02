import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { contact } from "@/data/contact";
import { founder } from "@/data/founder";
import { bolgeler } from "@/data/bolgeler";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileBottomBar from "@/components/layout/MobileBottomBar";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

/**
 * Schema.org JSON-LD: Organization extended with LocalBusiness
 *
 * - Wikidata Q1373083 (ScrapDealer) sameAs via additionalType
 * - Full NAP (Name, Address, Phone) data
 * - openingHoursSpecification (Pazartesi-Cumartesi 08:00-19:00)
 * - areaServed: 7 ilçe (bolgeler.ts)
 * - contactPoint customer service
 */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.legalName,
  alternateName: siteConfig.alternateName,
  url: siteConfig.url,
  description: siteConfig.description,
  slogan: siteConfig.slogan,
  foundingDate: String(siteConfig.foundedYear),
  logo: {
    "@type": "ImageObject",
    "@id": `${siteConfig.url}/#logo`,
    url: `${siteConfig.url}/icon`,
    width: 512,
    height: 512,
  },
  image: `${siteConfig.url}/opengraph-image`,
  telephone: contact.phoneHref.replace("tel:", ""),
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.address.street,
    addressLocality: contact.address.district,
    addressRegion: contact.address.city,
    postalCode: contact.address.postalCode,
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: contact.geo.lat,
    longitude: contact.geo.lng,
  },
  areaServed: bolgeler.map((b) => ({
    "@type": "City",
    name: b.name,
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "19:00",
    },
  ],
  priceRange: "₺₺",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: contact.phoneHref.replace("tel:", ""),
      contactType: "customer service",
      areaServed: "TR",
      availableLanguage: ["Turkish"],
    },
  ],
  // Wikidata: ScrapDealer entity (https://www.wikidata.org/wiki/Q1373083)
  additionalType: "https://www.wikidata.org/wiki/Q1373083",
  // sameAs reserved for social profiles when CEO provides them
  ...(founder.sameAs.length > 0 && { sameAs: founder.sameAs }),
};

/**
 * Schema.org JSON-LD: WebSite with SearchAction
 */
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: "tr-TR",
  publisher: {
    "@id": `${siteConfig.url}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.url}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

/**
 * Schema.org JSON-LD: Person (founder)
 *
 * NOT: founder.ts placeholder veri içerir. CEO gerçek bilgi sağlayınca güncellenir.
 */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteConfig.url}/#founder`,
  name: founder.name,
  jobTitle: founder.jobTitle,
  description: founder.bio,
  worksFor: {
    "@id": `${siteConfig.url}/#organization`,
  },
  ...(founder.sameAs.length > 0 && { sameAs: founder.sameAs }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.language}>
      <head>
        {/* Performance hints: preconnect/dns-prefetch (LCP optimization) */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://maps.gstatic.com" />

        {/* Theme color (browser UI tint) */}
        <meta name="theme-color" content="#08090d" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#1e293b" />

        {/* Format detection — telefon numaraları için */}
        <meta name="format-detection" content="telephone=yes" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        <GoogleAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBottomBar />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
