import { useP5Sketch } from './useP5Sketch'
import type p5 from "p5";

const MVSketch = () => {
  const renderRef = useP5Sketch((el) => (p) => {
    let ctx: CanvasRenderingContext2D | null = null

    const getSize = () => ({
      width: el.clientWidth || window.innerWidth,
      height: el.clientHeight || window.innerHeight,
    })
    let starLayer: p5.Graphics | null = null;
    const buildStarLayer = () => {
      
      starLayer = p.createGraphics(p.width, p.height);
      starLayer.colorMode(p.HSB, 360, 100, 100, 100)
      p.randomSeed(2);
      p.noiseSeed(2);
      
      const starCount = Math.min(50, Math.floor((p.width * p.height) / 10000))
      for (let i = 0; i < starCount; i++) {
        starLayer.fill(p.random(60) + 210, 50, 100, 100)
        const x = starLayer.noise(i / 1000) * p.width * 2 - p.width / 2
        const y = starLayer.noise(i / 1000, 9) * p.width * 2 - p.width
        starLayer.noStroke()
        starLayer.circle(
          x + p.random(p.width),
          y + p.random(p.height),
          p.random(3) ** 1.2
        )
      }
    }

    p.setup = () => {
      p.pixelDensity(1)
      p.frameRate(10)

      const { width, height } = getSize()
      p.createCanvas(width, height).parent(el)

      p.colorMode(p.HSB, 360, 100, 100, 100)

      density = p.displayDensity()
      ctx = p.drawingContext as CanvasRenderingContext2D

      buildStarLayer()
    }

    p.windowResized = () => {
      const { width, height } = getSize()
      p.resizeCanvas(width, height)

      buildStarLayer()
    }

    p.draw = () => {
      p.background('#000a14')
      if (starLayer) p.image(starLayer, 0, 0)

      p.noFill()
      p.stroke('#bde7f2')
      p.strokeWeight(1)

      const f = p.frameCount * 2
      const phase = f % 36
      for (let n = phase; n < 300; n += 36) {
        const progress = n / 300
        const radius = Math.pow(progress, 0.8) * 170
        const alpha = 100 * (1 - progress) * 0.6

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
