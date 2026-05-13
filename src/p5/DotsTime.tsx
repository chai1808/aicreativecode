import { useEffect, useRef } from 'react';
import p5 from 'p5';

const DotsTime = () => {
  const renderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let myP5: p5;

    const sketch = (p: p5) => {
      let secondsRadius: number;
      let minutesRadius: number;
      let hoursRadius: number;
      let clockDiameter: number;
      let bubbles: any[] = [];

      p.setup = () => {
        const canvas = p.createCanvas(600, 300);
        canvas.parent(renderRef.current!);

        p.stroke(255);
        p.angleMode(p.DEGREES);

        let radius = p.min(p.width, p.height) / 2.4;
        secondsRadius = radius * 0.71;
        minutesRadius = radius * 0.6;
        hoursRadius = radius * 0.5;
        clockDiameter = radius * 1.7;

        p.noStroke();
        for (let i = 0; i < 80; i++) {
          bubbles.push({
            x: p.random(-100, p.width + 100),
            y: p.random(-100, p.height + 100),
            size: p.random(10, 40),
            speedX: p.random(0.5, 1.5),
            speedY: p.random(0.5, 1.5),
          });
        }
      };

      p.draw = () => {
        p.background(25, 15, 40);
        p.noStroke();
        p.fill(120, 255, 200, 120);

        for (let b of bubbles) {
          let pulse = p.sin(p.frameCount * 0.1 + b.x) * 3;
          p.ellipse(b.x, b.y, b.size + pulse);
          b.x += b.speedX;
          b.y -= b.speedY;
          b.x += p.sin(p.frameCount * 0.05 + b.y) * 0.8;
          if (b.x > p.width + 20 || b.y < -20) {
            b.x = p.random(-50, p.width);
            b.y = p.random(p.height, p.height + 50);
          }
        }

        p.translate(p.width / 2, p.height / 2);
        p.noStroke();
        p.fill(210, 180, 255, 160);
        p.ellipse(0, 0, clockDiameter + 25, clockDiameter + 25);
        p.fill(85, 40, 130, 240);
        p.ellipse(0, 0, clockDiameter, clockDiameter);

        let secondAngle = p.map(p.second(), 0, 60, 0, 360);
        let minuteAngle = p.map(p.minute(), 0, 60, 0, 360);
        let hourAngle = p.map(p.hour(), 0, 12, 0, 360);

        p.stroke(255);
        p.push();
        p.rotate(secondAngle);
        p.strokeWeight(1);
        p.line(0, 0, 0, -secondsRadius);
        p.pop();

        p.push();
        p.strokeWeight(2);
        p.rotate(minuteAngle);
        p.line(0, 0, 0, -minutesRadius);
        p.pop();

        p.push();
        p.strokeWeight(4);
        p.rotate(hourAngle);
        p.line(0, 0, 0, -hoursRadius);
        p.pop();

        p.push();
        p.strokeWeight(2);
        for (let ticks = 0; ticks < 60; ticks += 1) {
          p.point(0, -secondsRadius);
          p.rotate(6);
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

  return <div ref={renderRef} style={{ display: 'flex', justifyContent: 'center' }}></div>;
};

export default DotsTime;