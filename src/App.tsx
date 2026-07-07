import { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'

import TopPage from './pages/TopPage'
import PageMeta from './PageMeta'
import PageShutter from './PageShutter'
import LanguageSwitcher from './LanguageSwitcher'
import {
  setupBlockScrollAnimations,
  setupGeneralScrollAnimations,
} from './scrollAnimations'

const App = () => {
  const mainRef = useRef<HTMLElement>(null)

  // シャッター演出中に p5 を先読みして MV 表示の遅延を防ぐ（クライアント限定）
  useEffect(() => {
    void import('p5')
  }, [])

  useGSAP(
    () => {
      setupBlockScrollAnimations()
      setupGeneralScrollAnimations()
    },
    { scope: mainRef }
  )

  return (
    <>
      <PageMeta />
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
