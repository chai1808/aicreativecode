import { useEffect, useRef } from 'react';
import p5 from 'p5';

const MVSketch = () => {
  const renderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let myP5: p5;

    const sketch = (p: p5) => {
      let n = 0;
      let f = 1;
      let d: number, ctx: any, bgCanvas: p5.Graphics, canvas: p5.Renderer;

      p.setup = () => {
        const canvasSize = p.max(p.windowWidth, p.windowHeight);
        canvas = p.createCanvas(canvasSize, canvasSize);
        canvas.parent(renderRef.current!);

        d = p.displayDensity();
        ctx = (p as any).drawingContext;

        bgCanvas = p.createGraphics(canvasSize, canvasSize);
        bgCanvas.background('#4a7c9d');
      };

      p.windowResized = () => {
        const canvasSize = p.max(p.windowWidth, p.windowHeight);
        p.resizeCanvas(canvasSize, canvasSize);
        bgCanvas.resizeCanvas(canvasSize, canvasSize);
        bgCanvas.background('#4a7c9d');
      };

      p.draw = () => {
        const x = (p.windowWidth - p.width) / 2;
        const y = (p.windowHeight - p.height) / 2;
        canvas.position(x, y);

        p.image(bgCanvas, 0, 0);

        p.push();
        p.noFill();
        p.stroke(255, 255, 255, 100);
        p.strokeWeight(1);
        f += 1;

        if (ctx) {
          ctx.shadowColor = '#fff';
          ctx.shadowBlur = 30 * d;
        }

        for (n = f % 40; n < 200; n += 40) {
          p.circle(p.width * p.noise(n - f), p.height * p.noise(n - f, 1), n);
        }
        p.pop();
      };
    };

    if (renderRef.current) {
      renderRef.current.innerHTML = '';
      myP5 = new p5(sketch, renderRef.current);
    }

    return () => {
      if (myP5) myP5.remove();
    };
  }, []);

  return <div ref={renderRef}></div>;
};

export default MVSketch;