import { useTranslation } from 'react-i18next'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import i18n from './i18n'

const LanguageSwitcher = () => {
  const { i18n: i18nInstance } = useTranslation()
  const currentLanguage = i18nInstance.language

  const handleSwitchLanguage = (lang: string) => {
    i18n.changeLanguage(lang).then(() => {
      ScrollTrigger.refresh()
    })
  }

  return (
    <div id="translateswitcher">
      <ul>
        <li className={`ja ${currentLanguage === 'ja' ? 'is-active' : ''}`}>
          <button type="button" onClick={() => handleSwitchLanguage('ja')}>
            日本語
          </button>
        </li>
        <li className={`en ${currentLanguage === 'en' ? 'is-active' : ''}`}>
          <button type="button" onClick={() => handleSwitchLanguage('en')}>
            English
          </button>
        </li>
      </ul>
    </div>
  )
}

export default LanguageSwitcher
