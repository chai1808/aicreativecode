import { useTranslation } from 'react-i18next'
import type { EducationalItem } from './types'

const EducationalSection = () => {
  const { t } = useTranslation('TopPage')
  const educationalData = t('Educational.data', {
    returnObjects: true,
  }) as EducationalItem[]

  return (
    <section className="block">
      <h2 className="blocktitle sacramento -effecttitle">
        <span className="inwrap">Educational</span>
      </h2>

      <div className="txtbox -effect _1 tcspl">
        <div className="inwrap">
          <ul>
            {Array.isArray(educationalData) &&
              educationalData.map((item, index) => (
                <li key={index}>・{item.name}</li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default EducationalSection
