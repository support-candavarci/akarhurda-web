"use client";

import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA4_ID || "";
const ADS_ID = process.env.NEXT_PUBLIC_ADS_ID || "";

export function GoogleAnalytics() {
  if (!GA_ID) {
    // Sprint 3'te GA4 ID env'e eklenecek; o zamana kadar render etmez
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied'
          });
          gtag('config', '${GA_ID}');
          ${ADS_ID ? `gtag('config', '${ADS_ID}');` : ""}
        `}
      </Script>
    </>
  );
}
