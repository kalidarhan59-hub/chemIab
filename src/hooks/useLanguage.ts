import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Language, LocalizedField } from '../types';
import { STORAGE_KEYS, SUPPORTED_LANGUAGES } from '../utils/constants';
import { tData } from '../utils/helpers';

export function useLanguage() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useParams<{ lang?: string }>();

  // Determine current active language
  const currentLanguage: Language = 
    lang && SUPPORTED_LANGUAGES.includes(lang as Language)
      ? (lang as Language)
      : SUPPORTED_LANGUAGES.includes(i18n.language as Language)
      ? (i18n.language as Language)
      : 'kk';

  // Synchronize i18n instance if route param changed
  useEffect(() => {
    if (lang && SUPPORTED_LANGUAGES.includes(lang as Language) && i18n.language !== lang) {
      i18n.changeLanguage(lang);
      try {
        localStorage.setItem(STORAGE_KEYS.LANGUAGE, lang);
      } catch {
        // ignore
      }
    }
  }, [lang, i18n.language]);

  // Change language and cleanly replace the route prefix
  const changeLanguage = useCallback(
    (newLang: Language) => {
      if (newLang === currentLanguage) return;

      try {
        localStorage.setItem(STORAGE_KEYS.LANGUAGE, newLang);
      } catch {
        // ignore
      }

      i18n.changeLanguage(newLang);

      // Reconstruct path: /kk/some/page -> /ru/some/page
      const segments = location.pathname.split('/').filter(Boolean);
      if (segments.length > 0 && SUPPORTED_LANGUAGES.includes(segments[0] as Language)) {
        segments[0] = newLang;
      } else {
        segments.unshift(newLang);
      }

      const newPath = '/' + segments.join('/') + location.search + location.hash;
      navigate(newPath);
    },
    [currentLanguage, i18n, location, navigate]
  );

  const translateData = useCallback(
    <T = string>(obj?: LocalizedField<T> | null): T | string => {
      return tData(obj, currentLanguage);
    },
    [currentLanguage]
  );

  return {
    language: currentLanguage,
    setLanguage: changeLanguage,
    tData: translateData,
    supportedLanguages: SUPPORTED_LANGUAGES,
  };
}
