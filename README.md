# sephirotic_tree

> 10 sephirot. 22 paths. the tree of life as luminous divine network.

This project renders a simple interactive representation of the **Tree of Life** from the Kabbalistic tradition. Ten glowing spheres (sephirot) are laid out in the classical Golden Dawn arrangement and connected by 22 paths labelled with their Hebrew letters and tarot correspondences. Colors flash through the King, Queen and Emperor scales, lightning flashes cascade downward, and a serpentine path winds its way back up.

## Running

Just open `index.html` in a modern browser. The app uses only vanilla JavaScript and the HTML canvas; no bundler is required. The script imports modules from `src/js/` and shaders from `src/shaders/`.

## Controls

| Key | Action |
|---|---|
| Space | Trigger lightning flash down the lightning path |
| S | Toggle serpent path animation |
| F | Cycle through King→Queen→Emperor color scales |
| P | Toggle planetary glyphs |
| H | Toggle Hebrew letter paths |
| 1–10 | Highlight an individual sephira by its number |

## Directory Structure

- `index.html` – entry page with a `<canvas>` element.
- `src/js/` – JavaScript modules:
  - `main.js` – sets up the canvas, draws the tree, and handles input.
  - `tree-layout.js` – defines sephirot positions and path connections.
  - `flashing-colors.js` – color palettes and a helper to cycle them.
  - `energy-flow.js` – utilities for animating flow along paths.
- `src/shaders/` – minimal GLSL shaders for drawing circles and lines.
- `examples/` – additional demos exploring alternate animations.
- `docs/` – design notes and mathematical references.

## Background

The **sephirot** represent emanations of the divine. There are ten primary spheres arranged in three pillars. Twenty‑two paths connect the spheres; each corresponds to a Hebrew letter and an associated tarot trump. The color scales (King, Queen and Emperor) come from the Golden Dawn tradition. See `docs/math-reference.md` for coordinates and path indices.
