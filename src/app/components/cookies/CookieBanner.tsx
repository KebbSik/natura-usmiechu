"use client";

import Link from "next/link";
import { useCookieConsent } from "@/app/context/CookieConsentContext";

export default function CookieBanner() {
  const { consent, isReady, acceptAll, rejectAll } = useCookieConsent();

  if (!isReady) return null;
  if (consent) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-primary/90 text-white p-4">
      <p className="text-sm">
        Używamy cookies technicznych niezbędnych do działania strony oraz — za
        Twoją zgodą — cookies analitycznych i marketingowych (Google Analytics,
        Google Ads). <br /> Zgodę możesz w każdej chwili zmienić w stopce
        strony.
      </p>

      <div className="mt-3 flex gap-3">
        <button onClick={acceptAll} className="btn btn-outline px-4 py-2">
          Akceptuj
        </button>
        <button onClick={rejectAll} className="btn btn-outline px-4 py-2">
          Odrzuć
        </button>
      </div>
    </div>
  );
}
