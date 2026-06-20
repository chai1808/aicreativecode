import { useRef } from 'react'
import { useGSAP } from '@gsap/react'

import '../assets/css/TopPage.scss'

import LazyMVSketch from '../components/p5/LazyMVSketch'
import LazyDotsTime from '../components/p5/LazyDotsTime'
import { setupPageShutterAnimation } from '../scrollAnimations'

import FirstSection from './FirstSection'
import CareerSection from './CareerSection'
import EducationalSection from './EducationalSection'
import LicenseSection from './LicenseSection'
import VisualThinkingSection from './VisualThinkingSection'
import URLsSection from './URLsSection'

const TopPage = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    setupPageShutterAnimation()
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <header id="topmv">
        <div className="sitetitle">
          <h1 className="h1title sacramento">Ai Creative Code Portfolio</h1>
        </div>

        <div id="mvcanvas">
          <LazyMVSketch />
        </div>

        <p id="scrolldown">
          <span></span>
        </p>
      </header>

      <article id="article">
        <div id="articlewrap">
          <div className="incnt min">
            <FirstSection />
            <CareerSection />
            <EducationalSection />
            <LicenseSection />
            <VisualThinkingSection />
            <URLsSection />
          </div>
        </div>
      </article>

      <LazyDotsTime />
    </div>
  )
}

export default TopPage
