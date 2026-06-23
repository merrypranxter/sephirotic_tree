// Main application entry: draws the tree and handles input

import { sephirot, paths, getSephiraById } from './tree-layout.js';
import { getColour, nextScale } from './flashing-colors.js';

const canvas = document.getElementById('gl');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

// State flags
let serpentActive = false;
let flashActive = false;
let highlightId = null;

// Precomputed flows for serpent and lightning path
let serpentFlows = [];
let flashFlows = [];

function initFlows() {
  // Serpent winds down and up the tree
  const serpentSequence = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2];
  serpentFlows = [];
  for (let i = 0; i < serpentSequence.length - 1; i++) {
    serpentFlows.push({ from: serpentSequence[i], to: serpentSequence[i + 1], t: Math.random() });
  }
  // Lightning flash path: classic zigzag from crown to kingdom
  const lightning = [1, 3, 5, 6, 10];
  flashFlows = [];
  for (let i = 0; i < lightning.length - 1; i++) {
    flashFlows.push({ from: lightning[i], to: lightning[i + 1], t: 0 });
  }
}
initFlows();

function toggleSerpent() {
  serpentActive = !serpentActive;
}
function toggleFlash() {
  flashActive = !flashActive;
}

document.addEventListener('keydown', (e) => {
  const k = e.key;
  if (k === 'f' || k === 'F') {
    nextScale();
  } else if (k === 's' || k === 'S') {
    toggleSerpent();
  } else if (k === ' ') {
    toggleFlash();
  } else if (k >= '1' && k <= '9') {
    highlightId = parseInt(k);
  } else if (k === '0') {
    highlightId = 10;
  }
});

function drawPaths() {
  ctx.strokeStyle = 'rgba(100,100,100,0.4)';
  ctx.lineWidth = 2;
  paths.forEach((p) => {
    const from = getSephiraById(p.from);
    const to = getSephiraById(p.to);
    const x1 = from.x * canvas.width;
    const y1 = (1 - from.y) * canvas.height;
    const x2 = to.x * canvas.width;
    const y2 = (1 - to.y) * canvas.height;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  });
}

function drawSephirot() {
  sephirot.forEach((s) => {
    const [r, g, b] = getColour(s.id);
    const x = s.x * canvas.width;
    const y = (1 - s.y) * canvas.height;
    ctx.beginPath();
    ctx.arc(x, y, 18, 0, Math.PI * 2);
    ctx.fillStyle = `rgb(${r},${g},${b})`;
    ctx.fill();
    if (highlightId === s.id) {
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 3;
      ctx.stroke();
    }
    ctx.fillStyle = '#000';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(String(s.id), x, y);
  });
}

function drawFlowParticle(fromId, toId, t, colour) {
  const from = getSephiraById(fromId);
  const to = getSephiraById(toId);
  const x = from.x + (to.x - from.x) * t;
  const y = from.y + (to.y - from.y) * t;
  const px = x * canvas.width;
  const py = (1 - y) * canvas.height;
  ctx.beginPath();
  ctx.arc(px, py, 6, 0, Math.PI * 2);
  ctx.fillStyle = colour;
  ctx.fill();
}

function updateAndDrawFlows() {
  const dt = 0.01;
  if (serpentActive) {
    serpentFlows.forEach((fl) => {
      fl.t += dt;
      if (fl.t > 1) fl.t = 0;
      drawFlowParticle(fl.from, fl.to, fl.t, 'rgba(0,255,255,0.7)');
    });
  }
  if (flashActive) {
    flashFlows.forEach((fl) => {
      fl.t += dt * 3;
      if (fl.t > 1) fl.t = 0;
      drawFlowParticle(fl.from, fl.to, fl.t, 'rgba(255,255,0,0.8)');
    });
  }
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPaths();
  updateAndDrawFlows();
  drawSephirot();
  requestAnimationFrame(render);
}
render();
