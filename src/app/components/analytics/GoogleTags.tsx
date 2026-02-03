"use client";

import Script from "next/script";
import { useCookieConsent } from "@/app/context/CookieConsentContext";

export default function GoogleTags() {
  const { consent } = useCookieConsent();

  if (!consent) return null;

  return (
    <>
      {(consent.analytics || consent.marketing) && (
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXX"
          strategy="afterInteractive"
        />
      )}

      {(consent.analytics || consent.marketing) && (
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            gtag('consent', 'update', {
              analytics_storage: '${consent.analytics ? "granted" : "denied"}',
              ad_storage: '${consent.marketing ? "granted" : "denied"}',
              ad_user_data: '${consent.marketing ? "granted" : "denied"}',
              ad_personalization: '${consent.marketing ? "granted" : "denied"}'
            });

            gtag('js', new Date());
            gtag('config', 'G-XXXX');
            gtag('config', 'AW-YYYY');
          `}
        </Script>
      )}
    </>
  );
}
