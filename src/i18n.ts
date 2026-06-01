import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import topPageEN from './locales/en/topPage.json';
import topPageJA from './locales/ja/topPage.json'; 

const resources = {
  en: {
    topPage: topPageEN,
  },
  ja: {
    topPage: topPageJA,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ja',
    fallbackLng: 'ja',
    ns: ['topPage'],
    defaultNS: 'topPage',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;