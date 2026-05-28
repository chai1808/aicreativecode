import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

interface ITile {
  x: number;
  y: number;
  size: number;
  opacity: number;
  show(): void;
}

const VeilCloudPink: React.FC = () => {
  const renderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!renderRef.current) return;

    let myP5: p5;

    const sketch = (p: p5) => {
      const tileCount = 60;
      const noiseScale = 0.05;
      let grid: ITile[][] = [];
      let t = 0;

      class Tile implements ITile {
        x: number;
        y: number;
        size: number;
        opacity: number;

        constructor(x: number, y: number, size: number) {
          this.x = x;
          this.y = y;
          this.size = size;
          this.opacity = 0;
        }

        show() {
          p.noStroke();
          p.fill(255, 255, 255, this.opacity);
          p.rect(this.x, this.y, this.size, this.size);
        }
      }

      p.setup = () => {
        const canvas = p.createCanvas(600, 300);
        if (renderRef.current) {
          canvas.parent(renderRef.current);
        }

        let tileSize = p.width / tileCount;
        for (let row = 0; row < tileCount; row++) {
          grid[row] = [];
          for (let col = 0; col < tileCount; col++) {
            let x = col * tileSize;
            let y = row * tileSize;
            grid[row][col] = new Tile(x, y, tileSize);
          }
        }
      };

      p.draw = () => {
        p.background(194, 167, 124);
        
        updateAndShowGrid();
        
        drawWaterOverlay();
        t += 0.005;
      };

      const updateAndShowGrid = () => {
        let ynoise = t;
        for (let row = 0; row < tileCount; row++) {
          let xnoise = t;
          for (let col = 0; col < tileCount; col++) {
            let a = p.pow(p.noise(xnoise, ynoise), 1.8) * 255;
            
            const tile = grid[row][col];
            tile.opacity = a;
            tile.show();
            
            xnoise += noiseScale;
          }
          ynoise += noiseScale;
        }
      };

      const drawWaterOverlay = () => {
        p.noStroke();
        p.fill(249, 206, 238, 110);
        p.rect(0, 0, p.width, p.height);
      };
    };

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