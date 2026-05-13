import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const VeilCloudPink = () => {
  const renderRef = useRef(null);

  useEffect(() => {
    // 1. マウント時に一度だけ実行
    let myP5;

    const sketch = (p) => {
      // 共通変数
      const tileCount = 100;
      const noiseScale = 0.05;
      let grid = [];
      let t = 0;

      // Tileクラスをp5インスタンス内で定義
      class Tile {
        constructor(x, y, size, a) {
          this.x = x;
          this.y = y;
          this.size = size;
          // color() は p5の関数なので p.color()
          this.c = p.color(255, a);
        }

        show() {
          p.noStroke();
          p.fill(this.c);
          p.rect(this.x, this.y, this.size, this.size);
        }
      }

      p.setup = () => {
        // コンテナのサイズに合わせるか、600x600固定にする
        const canvas = p.createCanvas(600, 300);
        canvas.parent(renderRef.current);
      };

      p.draw = () => {
        p.background(194, 167, 124);

        createGrid();
        showGrid();

        // ピンクの水面レイヤー
        drawWaterOverlay();

        t += 0.01;
      };

      // 内部関数（すべて p. をつけて呼び出す）
      const createGrid = () => {
        grid = [];
        let tileSize = p.width / tileCount;
        let ynoise = t;
        for (let row = 0; row < tileCount; row++) {
          grid[row] = [];
          let xnoise = t;
          for (let col = 0; col < tileCount; col++) {
            let x = col * tileSize;
            let y = row * tileSize;
            // noise() や pow() も p. 経由
            let a = p.pow(p.noise(xnoise, ynoise), 1.8) * 255;
            grid[row][col] = new Tile(x, y, tileSize, a);
            xnoise += noiseScale;
          }
          ynoise += noiseScale;
        }
      };

      const showGrid = () => {
        for (let row = 0; row < tileCount; row++) {
          for (let col = 0; col < tileCount; col++) {
            grid[row][col].show();
          }
        }
      };

      const drawWaterOverlay = () => {
        p.noStroke();
        p.fill(249, 206, 238, 110);
        p.rect(0, 0, p.width, p.height);
      };
    };

    // p5インスタンスを作成
    renderRef.current.innerHTML = '';
    myP5 = new p5(sketch, renderRef.current);

    return () => {
      if (myP5) {
        myP5.remove();
      }
    };
  }, []);

  return (
    <div
      ref={renderRef}
      style={{ display: 'flex', justifyContent: 'center' }}
    ></div>
  );
};

export default VeilCloudPink;
