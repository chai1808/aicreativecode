import { useRef } from 'react'
import { useGSAP } from '@gsap/react'

import TopPage from './pages/TopPage'
import PageShutter from './PageShutter'
import LanguageSwitcher from './LanguageSwitcher'
import {
  setupBlockScrollAnimations,
  setupGeneralScrollAnimations,
} from './scrollAnimations'

const App = () => {
  const mainRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      setupBlockScrollAnimations()
      setupGeneralScrollAnimations()
    },
    { scope: mainRef }
  )

  return (
    <>
      <PageShutter />
      <main id="main" ref={mainRef}>
        <div className="app-container">
          <TopPage />
        </div>
        <p className="cr sacramento">@ Ai Creative Code</p>
      </main>
      <LanguageSwitcher />
    </>
  )
}

export default App
