import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { TRANSLATIONS } from './index';
import type { Content, Lang } from './types';

const STORAGE_KEY = 'lang';

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Content;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function detectLang(): Lang {
  if (typeof window === 'undefined') return 'ua';

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'ua' || stored === 'en') return stored;

  const browserLangs = navigator.languages?.length ? navigator.languages : [navigator.language];
  const isSlavic = browserLangs.some((locale) => /^(uk|ru)/i.test(locale));

  return isSlavic ? 'ua' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(detectLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: TRANSLATIONS[lang] }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
