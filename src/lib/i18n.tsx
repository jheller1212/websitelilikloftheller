"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { translations as dataTranslations } from "@/data/i18n";

export type Locale = "en" | "de" | "nl";

const STORAGE_KEY = "locale";

function detectLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "de" || stored === "nl" || stored === "en") return stored;
  const lang = navigator.language?.toLowerCase() ?? "";
  if (lang.startsWith("de")) return "de";
  if (lang.startsWith("nl")) return "nl";
  return "en";
}

type TranslationMap = Record<string, Record<Locale, string>>;

// Merge data translations with any core overrides
const translations: TranslationMap = {
  ...dataTranslations,
};

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue>({
  locale: "en",
  setLocale: () => {},
  t: (key) => key,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(detectLocale());
    setMounted(true);
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang = l;
  }, []);

  const t = useCallback(
    (key: string) => {
      const entry = translations[key];
      if (!entry) return key;
      return entry[locale] ?? entry.en ?? key;
    },
    [locale],
  );

  if (!mounted) {
    return <I18nContext.Provider value={{ locale: "en", setLocale, t: (key) => translations[key]?.en ?? key }}>{children}</I18nContext.Provider>;
  }

  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  de: "DE",
  nl: "NL",
};
