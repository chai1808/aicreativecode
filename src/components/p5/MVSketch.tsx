import { useP5Sketch } from './useP5Sketch'

const MVSketch = () => {
  const renderRef = useP5Sketch((el) => (p) => {
    let density = 1
    let ctx: CanvasRenderingContext2D | null = null
    let f = 1

    const getSize = () => ({
      width: el.clientWidth || window.innerWidth,
      height: el.clientHeight || window.innerHeight,
    })

    p.setup = () => {
      p.pixelDensity(1)
      p.frameRate(10)

      const { width, height } = getSize()
      p.createCanvas(width, height).parent(el)

      p.colorMode(p.HSB, 360, 100, 100, 100)
      density = p.displayDensity()
      ctx = p.drawingContext as CanvasRenderingContext2D
    }

    p.windowResized = () => {
      const { width, height } = getSize()
      p.resizeCanvas(width, height)
    }

    p.draw = () => {
      p.background('#000a14')


      p.noFill()
      p.stroke('#bde7f2')
      p.strokeWeight(1)

      if (ctx) {
        ctx.shadowColor = 'rgba(12, 162, 192, 0.18)'
        ctx.shadowBlur = 8 * density
      }

      f += 2

      const phase = f % 36
      for (let n = phase; n < 300; n += 36) {
        const progress = n / 300
        const radius = Math.pow(progress, 0.8) * 170
        
        const alpha = 100 * (1 - progress)
        
        ctx.shadowBlur = (4 + progress * 18) * density
        
        p.stroke(190, 20, 95, alpha)
        
        p.circle(
          p.width * p.noise((n - f) * 0.04),
          p.height * p.noise((n - f) * 0.04, 1),
          radius
        )
      }
    }
  })

  return (
    <div
      ref={renderRef}
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    />
  )
}

export default MVSketch
