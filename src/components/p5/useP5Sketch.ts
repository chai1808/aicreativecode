import { useEffect, useRef } from 'react'
import type p5 from 'p5'

type SketchFactory = (el: HTMLElement) => (p: p5) => void

export const useP5Sketch = (buildSketch: SketchFactory) => {
  const renderRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = renderRef.current
    if (!el) return

    let instance: p5 | null = null
    let cancelled = false

    const initSketch = async () => {
      const { default: P5 } = await import('p5')
      if (cancelled || !renderRef.current) return

      const sketch = buildSketch(el)
      el.innerHTML = ''
      instance = new P5(sketch, el)
    }

    void initSketch()

    return () => {
      cancelled = true
      instance?.remove()
    }
    // buildSketch is intentionally run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return renderRef
}
