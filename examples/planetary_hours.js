import { sephirot } from '../src/js/tree-layout.js';
import { kingScale } from '../src/js/flashing-colors.js';

/**
 * Modulate the brightness of each sephira according to a sine wave. This is a
 * simple stand‑in for planetary hours: each sephira pulses at a slightly
 * different phase, creating a shimmering effect across the tree.
 */
export function animatePlanetaryHours(ctx, canvas) {
  let t = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    sephirot.forEach((s, i) => {
      const base = kingScale[i];
      const intensity = 0.5 + 0.5 * Math.sin(t + i);
      const r = Math.round(base[0] * intensity);
      const g = Math.round(base[1] * intensity);
      const b = Math.round(base[2] * intensity);
      const x = s.x * canvas.width;
      const y = (1 - s.y) * canvas.height;
      ctx.beginPath();
      ctx.arc(x, y, 15, 0, Math.PI * 2);
      ctx.fillStyle = `rgb(${r},${g},${b})`;
      ctx.fill();
    });
    t += 0.03;
    requestAnimationFrame(draw);
  }
  draw();
}
