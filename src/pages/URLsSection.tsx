import { useTranslation } from 'react-i18next'
import type { URLItem } from './types'

const URLsSection = () => {
  const { t } = useTranslation('TopPage')
  const urlData = t('URLs.data', { returnObjects: true }) as URLItem[]

  return (
    <section className="block">
      <h2 className="blocktitle sacramento -effecttitle">
        <span className="inwrap">Works</span>
      </h2>

      <div className="txtbox -effect _1 tc">
        <div className="inwrap">
          <ul>
            {Array.isArray(urlData) &&
              urlData.map((item, index) => (
                <li key={index}>
                  <div className="list">
                    <ul>
                      {item.list.map((listItem, listIndex) => (
                        <li key={listIndex}>
                          <p className="itemtitle">・<a href={listItem.URL} target="_blank" rel="noreferrer">{listItem.title}</a></p>
                          {listItem.description && (
                            <p className="itemdesc">{listItem.description}</p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="itemcaution">{item.text}</p>
                </li>
              ))}
          </ul>
        </div>
        <div className="lastsns -effect tc">
          <div className="inwrap">
            <ul>
              <li>
                <a href="https://note.com/chai1808" target="_blank" rel="noreferrer">
                  <img src="/common/noteicon.svg" alt="Note" />
                </a>
              </li>
              <li>
                <a href="https://github.com/chai1808" target="_blank" rel="noreferrer">
                  <img src="/common/github.png" alt="GitHub" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default URLsSection
