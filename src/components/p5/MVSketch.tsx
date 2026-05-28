import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const MVSketch = () => {
  const renderRef = useRef(null);

  useEffect(() => {
    // 1. マウント時に一度だけ実行
    let myP5;

    // スケッチの内容
    const sketch = (p) => {
      let n = 0;
      let f = 1;
      let d, ctx, bgCanvas, canvas;

      p.setup = () => {
        const canvasSize = p.max(p.windowWidth, p.windowHeight);
        // キャンバスを作成し、renderRef（div）の中に入れる
        canvas = p.createCanvas(canvasSize, canvasSize);
        canvas.parent(renderRef.current);

        d = p.displayDensity();
        ctx = p.drawingContext;

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
        // 中央寄せ
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

    // p5インスタンスを作成
    renderRef.current.innerHTML = '';
    myP5 = new p5(sketch, renderRef.current);

    // 【重要】コンポーネントが消える時にキャンバスを削除する
    return () => {
      if (myP5) {
        myP5.remove();
      }
    };
  }, []);

  // id="mvcanvas" の代わりに useRef を使って紐付けます
  return <div ref={renderRef}></div>;
};

export default MVSketch;
