import { useTranslation } from 'react-i18next'
import SanitizedHtml from './SanitizedHtml'

const URLsSection = () => {
  const { t } = useTranslation('TopPage')

  return (
    <div className="lastsns tc">
      <SanitizedHtml className="itemcaution" html={t('URLs.message')} />
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
  )
}

export default URLsSection
