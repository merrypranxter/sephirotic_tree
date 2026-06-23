import { getSephiraById } from '../src/js/tree-layout.js';

/**
 * Animate a particle along a serpentine path that snakes down and up the tree.
 * The sequence visits the sephirot in a mirrored order to evoke the serpent of wisdom.
 */
export function animateSerpent(ctx, canvas) {
  const sequence = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const segments = [];
  for (let i = 0; i < sequence.length - 1; i++) {
    segments.push({ from: sequence[i], to: sequence[i + 1], t: 0 });
  }
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    segments.forEach((seg) => {
      seg.t += 0.02;
      if (seg.t > 1) seg.t = 0;
      const p1 = getSephiraById(seg.from);
      const p2 = getSephiraById(seg.to);
      const x = (p1.x + (p2.x - p1.x) * seg.t) * canvas.width;
      const y = (1 - (p1.y + (p2.y - p1.y) * seg.t)) * canvas.height;
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fillStyle = 'cyan';
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
}
