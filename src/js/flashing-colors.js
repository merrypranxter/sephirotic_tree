// Colour scales and helpers for cycling through them

/**
 * Colour scales for the Tree of Life.
 * Each array is indexed by sephira id - 1 (0..9).
 * Colours are provided in [r, g, b] with components 0..255.
 */
export const kingScale = [
  [255, 255, 255],    // 1 Kether: white
  [192, 192, 192],    // 2 Chokmah: grey
  [0, 0, 0],          // 3 Binah: black
  [0, 0, 255],        // 4 Chesed: blue
  [255, 0, 0],        // 5 Gevurah: red
  [255, 255, 0],      // 6 Tiphareth: yellow
  [0, 128, 0],        // 7 Netzach: green
  [255, 165, 0],      // 8 Hod: orange
  [128, 0, 128],      // 9 Yesod: violet
  [0, 128, 0]         // 10 Malkuth: green (Earth)
];

export const queenScale = [
  [255, 255, 255], // whitened highlight
  [240, 240, 255],
  [32, 32, 32],
  [64, 64, 255],
  [255, 64, 64],
  [255, 255, 128],
  [32, 192, 32],
  [255, 192, 64],
  [160, 32, 160],
  [32, 192, 32]
];

export const emperorScale = [
  [255, 255, 255],
  [160, 160, 192],
  [64, 64, 64],
  [0, 128, 255],
  [255, 64, 128],
  [255, 224, 64],
  [64, 160, 64],
  [255, 192, 96],
  [160, 64, 192],
  [64, 160, 64]
];

const scales = [kingScale, queenScale, emperorScale];
let currentIndex = 0;

/**
 * Returns the current colour scale and cycles to the next one.
 */
export function nextScale() {
  currentIndex = (currentIndex + 1) % scales.length;
  return scales[currentIndex];
}

/**
 * Returns the colour for a given sephira id from the current scale.
 */
export function getColour(sephiraId) {
  return scales[currentIndex][sephiraId - 1];
}
