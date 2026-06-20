import { useTranslation } from 'react-i18next'
import type { CareerItem } from './types'

const CareerSection = () => {
  const { t } = useTranslation('TopPage')
  const careerData = t('Career.data', { returnObjects: true }) as CareerItem[]

  return (
    <section className="block">
      <h2 className="blocktitle sacramento -effecttitle">
        <span className="inwrap">Career</span>
      </h2>

      <div className="historydl1 -effect _1">
        <div className="inwrap">
          <p className="param"></p>
          <dl>
            {Array.isArray(careerData) &&
              careerData.map((item, index) => (
                <div key={index}>
                  <dt>{item.date}</dt>
                  <dd>
                    <p className="main">{item.mainTitle}</p>
                    <div className="sub">
                      <p>{item.subDescription}</p>
                      <ul>
                        {item.skills.map((skill, skillIndex) => (
                          <li key={skillIndex}>・{skill}</li>
                        ))}
                      </ul>
                    </div>
                  </dd>
                </div>
              ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default CareerSection
