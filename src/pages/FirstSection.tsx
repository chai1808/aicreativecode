import { useTranslation } from 'react-i18next'
import SanitizedHtml from './SanitizedHtml'

const FirstSection = () => {
  const { t } = useTranslation('TopPage')

  return (
    <section className="block">
      <SanitizedHtml
        tag="h2"
        className="copytitle zen-kurenaido-regular tcspl -effectcopy"
        html={t('firstSection.title')}
      />
      <SanitizedHtml className="txtbox -effect" html={t('firstSection.text')} />
    </section>
  )
}

export default FirstSection
