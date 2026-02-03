import { CookieConsent } from "@/app/types/cookies";

const STORAGE_KEY = "cookie_consent";

export const getConsent = (): CookieConsent | null => {
  if (typeof window === "undefined") return null;

  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : null;
};

export const setConsent = (consent: CookieConsent) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
};

export const clearConsent = () => {
  localStorage.removeItem(STORAGE_KEY);
};
