# Math Reference: sephirotic_tree

This document lists the numerical data used by the renderer: sephirot positions, path definitions, and color scales.

## Sephirot Coordinates

Positions are normalised to a unit square `(0,0)` to `(1,1)`. The traditional Golden Dawn tree has three pillars. Coordinates:

| # | Name      | x    | y    | Planet            |
|---|-----------|------|------|------------------|
| 1 | Kether    | 0.5  | 0.95 | Pluto / Crown     |
| 2 | Chokmah   | 0.75 | 0.78 | Uranus / Wisdom   |
| 3 | Binah     | 0.25 | 0.78 | Saturn / Understanding |
| 4 | Chesed    | 0.75 | 0.61 | Jupiter / Mercy   |
| 5 | Gevurah   | 0.25 | 0.61 | Mars / Severity   |
| 6 | Tiphareth | 0.5  | 0.45 | Sun / Beauty      |
| 7 | Netzach   | 0.75 | 0.28 | Venus / Victory   |
| 8 | Hod       | 0.25 | 0.28 | Mercury / Splendour |
| 9 | Yesod     | 0.5  | 0.16 | Moon / Foundation |
|10 | Malkuth   | 0.5  | 0.05 | Earth / Kingdom   |

## Path Indices

There are 22 paths numbered 11–32. Each connects two sephirot. A subset is listed here:

| Path | From | To   | Hebrew | Tarot              |
|------|------|------|--------|-------------------|
| 11   | 1    | 2    | Aleph  | The Fool          |
| 12   | 1    | 3    | Beth   | The Magician      |
| 13   | 2    | 3    | Gimel  | The High Priestess |
| 14   | 2    | 4    | Daleth | The Empress       |
| 15   | 3    | 5    | He     | The Emperor       |
| 16   | 4    | 5    | Vau    | The Hierophant    |
| 17   | 4    | 6    | Zain   | The Lovers        |
| 18   | 5    | 6    | Cheth  | The Chariot       |
| 19   | 4    | 7    | Teth   | Strength          |
| 20   | 5    | 8    | Yod    | The Hermit        |
| 21   | 6    | 7    | Kaph   | Wheel of Fortune  |
| 22   | 6    | 8    | Lamed  | Justice           |
| ...  | ...  | ...  | ...    | ...               |

The full list is defined in `src/js/tree-layout.js`.

## Color Scales

The Golden Dawn colour scales assign different hues to each sephira in three modalities:

- **King scale:** Active / divine colours.
- **Queen scale:** Passive / manifest colours.
- **Emperor scale:** Harmonising colours.

Each scale is implemented as an array of RGB values in `src/js/flashing-colors.js`.
