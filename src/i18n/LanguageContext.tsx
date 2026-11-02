import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, TRANSLATIONS } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof TRANSLATIONS.vi;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'vi',
  setLanguage: () => {},
  t: TRANSLATIONS.vi,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      // 1. Check URL query parameter first (?lang=en or ?lang=vi)
      if (typeof window !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        if (urlLang === 'en' || urlLang === 'vi') {
          return urlLang;
        }
      }
      // 2. Check localStorage
      const saved = localStorage.getItem('cham_viec_lang');
      if (saved === 'en' || saved === 'vi') return saved;
    } catch (e) {
      // ignore
    }
    return 'vi';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('cham_viec_lang', lang);
      // Synchronize with URL search parameter without full reload
      if (typeof window !== 'undefined') {
        const url = new URL(window.location.href);
        url.searchParams.set('lang', lang);
        window.history.replaceState({}, '', url.toString());
      }
    } catch (e) {
      // ignore
    }
  };

  // Listen to popstate (browser Back/Forward)
  useEffect(() => {
    const handlePopState = () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        if ((urlLang === 'en' || urlLang === 'vi') && urlLang !== language) {
          setLanguageState(urlLang as Language);
          localStorage.setItem('cham_viec_lang', urlLang);
        }
      } catch (e) {
        // ignore
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [language]);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.title = language === 'en' 
        ? 'CHẠM VIỆC - Career Guidance & Admissions' 
        : 'CHẠM VIỆC - Hướng Nghiệp & Tuyển Sinh';
    }
  }, [language]);

  const t = language === 'en' ? TRANSLATIONS.en : TRANSLATIONS.vi;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
