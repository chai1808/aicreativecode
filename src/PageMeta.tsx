import { useLayoutEffect } from 'react'
import { useTranslation } from 'react-i18next'

const setMetaByName = (name: string, content: string) => {
  let element = document.querySelector(`meta[name="${name}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('name', name)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

const setMetaByProperty = (property: string, content: string) => {
  let element = document.querySelector(`meta[property="${property}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('property', property)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

const PageMeta = () => {
  const { t, i18n } = useTranslation('TopPage')

  useLayoutEffect(() => {
    const title = t('meta.title')
    const description = t('meta.description')
    const locale = i18n.language === 'ja' ? 'ja_JP' : 'en_US'

    document.title = title
    document.documentElement.lang = i18n.language

    setMetaByName('description', description)
    setMetaByName('language', i18n.language)
    setMetaByProperty('og:title', title)
    setMetaByProperty('og:description', description)
    setMetaByProperty('og:locale', locale)
  }, [t, i18n.language])

  return null
}

export default PageMeta
