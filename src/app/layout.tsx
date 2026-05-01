import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { contact } from "@/data/contact";
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.legalName,
  alternateName: siteConfig.alternateName,
  url: siteConfig.url,
  description: siteConfig.description,
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
  telephone: contact.phoneHref,
  email: contact.email,
  foundingDate: String(siteConfig.foundedYear),
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Kocaeli",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  publisher: {
    "@id": `${siteConfig.url}/#organization`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.language}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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
