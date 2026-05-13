import { useEffect, useRef } from 'react';
import p5 from 'p5';

const VeilCloudPink = () => {
  const renderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let myP5: p5;

    const sketch = (p: p5) => {
      const tileCount = 100;
      const noiseScale = 0.05;
      let grid: Tile[][] = [];
      let t = 0;

      class Tile {
        x: number;
        y: number;
        size: number;
        c: p5.Color;

        constructor(x: number, y: number, size: number, a: number) {
          this.x = x;
          this.y = y;
          this.size = size;
          this.c = p.color(255, a);
        }

        show() {
          p.noStroke();
          p.fill(this.c);
          p.rect(this.x, this.y, this.size, this.size);
        }
      }

      p.setup = () => {
        const canvas = p.createCanvas(600, 300);
        canvas.parent(renderRef.current!);
      };

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

      p.draw = () => {
        p.background(194, 167, 124);
        createGrid();
        showGrid();
        drawWaterOverlay();
        t += 0.01;
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

  return <div ref={renderRef} style={{ display: 'flex', justifyContent: 'center' }}></div>;
};

export default VeilCloudPink;