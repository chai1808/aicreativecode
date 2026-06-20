import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import TopPageEN from './locales/en/TopPage.json'
import TopPageJA from './locales/ja/TopPage.json'

const STORAGE_KEY = 'aicreativecode-lang'

const resources = {
  en: {
    TopPage: TopPageEN,
  },
  ja: {
    TopPage: TopPageJA,
  },
}

export const supportedLngs = {
  en: 'English',
  ja: '日本語',
}

const getInitialLanguage = (): string => {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'ja' || stored === 'en') return stored
  return navigator.language.startsWith('ja') ? 'ja' : 'en'
}

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: 'en',
  returnEmptyString: false,
  supportedLngs: Object.keys(supportedLngs),
  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', (lang) => {
  localStorage.setItem(STORAGE_KEY, lang)
})

export default i18n
