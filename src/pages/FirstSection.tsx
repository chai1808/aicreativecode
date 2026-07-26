import { useTranslation } from 'react-i18next'
import SanitizedHtml from './SanitizedHtml'
import type { FaqItem } from './types'

const FirstSection = () => {
  const { t } = useTranslation('TopPage')
  const FaqData = t('firstSection.faq', { returnObjects: true }) as FaqItem[]

  return (
    <section className="block">
      <SanitizedHtml
        tag="h2"
        className="copytitle zen-kurenaido-regular tcspl -effectcopy"
        html={t('firstSection.copytitle')}
      />
      <SanitizedHtml className="txtbox -effect" html={t('firstSection.text')} />
      <dl className="faqlist">
        {FaqData.map((faq, index) => (
          <div key={index} className="faqgroup -effect">
            <dt className='question zen-kurenaido-regular'><h3>{faq.question}</h3></dt>
            <dd className='answer'><SanitizedHtml html={faq.answer} /></dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default FirstSection
