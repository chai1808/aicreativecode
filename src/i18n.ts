import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from "i18next-http-backend";
import LanguageDetector from 'i18next-browser-languagedetector';

import TopPageEN from './locales/en/TopPage.json';
import TopPageJA from './locales/ja/TopPage.json'; 

const resources = {
  en: {
    TopPage: TopPageEN,
  },
  ja: {
    TopPage: TopPageJA,
  },
};

export const supportedLngs = {
  en: "English",
  ja: "日本語",
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    returnEmptyString: false,
    supportedLngs: Object.keys(supportedLngs),
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;