import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { detectInitialLanguage } from './utils/helpers';
import kkTranslations from './locales/kk.json';
import ruTranslations from './locales/ru.json';
import enTranslations from './locales/en.json';

const initialLang = detectInitialLanguage();

i18n
  .use(initReactI18next)
  .init({
    resources: {
      kk: { translation: kkTranslations },
      ru: { translation: ruTranslations },
      en: { translation: enTranslations },
    },
    lng: initialLang,
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

// Update html lang attribute whenever language changes
i18n.on('languageChanged', (lng) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lng;
  }
});

// Set initial html lang attribute
if (typeof document !== 'undefined') {
  document.documentElement.lang = initialLang;
}

export default i18n;
