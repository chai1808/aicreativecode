import { lazy, Suspense, useEffect, useState } from 'react'

const MVSketch = lazy(() => import('./MVSketch'))

const SHUTTER_DURATION_MS = 2800

const LazyMVSketch = () => {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setShouldLoad(true), SHUTTER_DURATION_MS)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <Suspense fallback={null}>
      {shouldLoad && <MVSketch />}
    </Suspense>
  )
}

export default LazyMVSketch
