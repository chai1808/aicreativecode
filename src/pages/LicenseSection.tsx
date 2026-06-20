import { useTranslation } from 'react-i18next'
import SanitizedHtml from './SanitizedHtml'
import type { LicenseItem } from './types'

const LicenseSection = () => {
  const { t } = useTranslation('TopPage')
  const licenseData = t('License.data', { returnObjects: true }) as LicenseItem[]

  return (
    <section className="block">
      <h2 className="blocktitle sacramento -effecttitle">
        <span className="inwrap">License</span>
      </h2>

      <div className="historydl1 -effect">
        <div className="inwrap">
          <p className="param" style={{ top: '20px' }}></p>
          <dl>
            {Array.isArray(licenseData) &&
              licenseData.map((item, index) => (
                <div key={index}>
                  <dt>{item.year}</dt>
                  <dd>
                    {item.title}
                    {item.description && (
                      <>
                        <br />
                        <SanitizedHtml
                          tag="span"
                          className="small"
                          html={t(item.description)}
                        />
                      </>
                    )}
                  </dd>
                </div>
              ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default LicenseSection
