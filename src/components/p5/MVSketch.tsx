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
      p.frameRate(15)

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

      const step = 15
      const t = p.frameCount * 0.2
      const cols = Math.ceil(p.width / step)
      const rows = Math.ceil(p.height / step)

      p.noStroke()
      p.fill('#33CCC9')

      for (let i = 0; i <= cols; i += 1.5) {
        for (let j = 0; j <= rows; j += 1.5) {
          const noiseVal = p.noise(i * 10, j * 10, t)
          p.ellipse(i * step, j * step, step * (0.2 + noiseVal))
        }
      }

      p.noFill()
      p.stroke('#bde7f2')
      p.strokeWeight(1)

      if (ctx) {
        ctx.shadowColor = 'rgba(12, 162, 192, 0.35)'
        ctx.shadowBlur = 20 * density
      }

      f += 3

      const phase = f % 36
      for (let n = phase; n < 200; n += 36) {
        const radius = Math.pow(n / 200, 0.8) * 200
        p.circle(
          p.width * p.noise(n - f),
          p.height * p.noise(n - f, 1),
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
