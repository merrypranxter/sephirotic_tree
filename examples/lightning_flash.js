import { getSephiraById } from '../src/js/tree-layout.js';

/**
 * Animate a particle down the classic lightning flash path. Pass your own
 * 2D rendering context (`ctx`) and canvas dimensions.
 */
export function animateLightning(ctx, canvas) {
  const sequence = [1, 3, 5, 6, 10];
  const segments = [];
  for (let i = 0; i < sequence.length - 1; i++) {
    segments.push({ from: sequence[i], to: sequence[i + 1], t: 0 });
  }
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    segments.forEach((seg) => {
      seg.t += 0.03;
      if (seg.t > 1) seg.t = 0;
      const p1 = getSephiraById(seg.from);
      const p2 = getSephiraById(seg.to);
      const x = (p1.x + (p2.x - p1.x) * seg.t) * canvas.width;
      const y = (1 - (p1.y + (p2.y - p1.y) * seg.t)) * canvas.height;
      ctx.beginPath();
      ctx.arc(x, y, 6, 0, Math.PI * 2);
      ctx.fillStyle = 'yellow';
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
}
