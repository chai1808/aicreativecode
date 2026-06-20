import { useTranslation } from 'react-i18next'
import SanitizedHtml from './SanitizedHtml'

const VisualThinkingSection = () => {
  const { t } = useTranslation('TopPage')

  return (
    <section className="block">
      <h2 className="blocktitle sacramento -effecttitle">
        <span className="inwrap">Visual Thinking</span>
      </h2>

      <div className="visualthinking">
        <SanitizedHtml
          className="txtbox -effect"
          html={t('VisualThinking.text')}
        />
      </div>
    </section>
  )
}

export default VisualThinkingSection
