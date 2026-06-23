# Design Notes

This document captures design choices made when expanding the sephirotic_tree generator beyond its bare scaffold.

## Modular Architecture

The renderer is split into small modules:

- `tree-layout.js` holds all data (coordinates, paths, color scales).
- `flashing-colors.js` encapsulates the logic for cycling colour scales.
- `energy-flow.js` defines functions to animate particles along a path.
- `main.js` ties everything together, sets up the canvas, draws, and handles user input.

This separation makes it easy to write alternative examples in `examples/` that reuse the same data.

## Extensibility

You can add new animation regimes by creating additional modules in `examples/` that import from `tree-layout.js`. For instance, a *planetary-hours* demo modulates sephira glow by the current hour, while a *custom path working* demo animates meditation along a specific path.

## Future Work

- Use WebGL shaders instead of 2D canvas for smoother glowing orbs and path gradients.
- Incorporate audio synthesis to sonify each sephira.
- Expand the docstrings with deeper Qabalistic correspondences (Hebrew, tarot, astrological).
