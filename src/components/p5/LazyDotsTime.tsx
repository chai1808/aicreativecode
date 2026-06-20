import { lazy, Suspense, useEffect, useRef, useState } from 'react'

const DotsTime = lazy(() => import('./DotsTime'))

const LazyDotsTime = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '300px' }
    )

    observer.observe(container)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="p5jsBox">
      {shouldLoad && (
        <Suspense fallback={null}>
          <DotsTime />
        </Suspense>
      )}
    </div>
  )
}

export default LazyDotsTime
