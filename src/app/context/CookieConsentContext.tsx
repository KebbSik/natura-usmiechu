"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { CookieConsent } from "@/app/types/cookies";
import { clearConsent, getConsent, setConsent } from "@/app/lib/cookies";

type CookieContextType = {
  consent: CookieConsent | null;
  isReady: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  resetConsent: () => void;
};

const CookieConsentContext = createContext<CookieContextType | null>(null);

export const CookieConsentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [consent, setConsentState] = useState<CookieConsent | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setConsentState(getConsent());
    setIsReady(true);
  }, []);

  const acceptAll = () => {
    const value: CookieConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setConsent(value);
    setConsentState(value);
  };

  const rejectAll = () => {
    const value: CookieConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setConsent(value);
    setConsentState(value);
  };

  const resetConsent = () => {
    clearConsent();
    setConsentState(null);
  };

  return (
    <CookieConsentContext.Provider
      value={{ consent, isReady, acceptAll, rejectAll, resetConsent }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = () => {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent must be used within provider");
  }
  return ctx;
};
