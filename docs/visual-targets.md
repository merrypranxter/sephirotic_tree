# Visual Targets: sephirotic_tree

The goal of this generator is to create a luminous, stylised version of the Tree of Life that maintains recognizable proportions while being dynamic and psychedelic.

- **Tree layout:** The sephirot are arranged in three columns. The x‑coordinates follow the pillar arrangement (left, middle, right) and the y‑coordinates follow the descending order from Kether to Malkuth. See `docs/math-reference.md` for the exact normalised positions.
- **Sephira orbs:** Each sphere is drawn as a glowing circle. A small planetary glyph (☉ ☽ ☿ ♀ ♂ ♃ ♄ ♅ ♆ ♇) may be overlaid.
- **Paths:** The 22 connections are drawn as curving lines. They pulse with animated gradients to suggest moving energy.
- **Flashing colours:** Cycling through the King, Queen and Emperor scales makes the sephirot flash with complementary colors.
- **Lightning flash:** Pressing Space triggers a zigzag descent from Kether to Malkuth, tracing the traditional lightning path.
- **Serpent path:** Toggling the serpent path animates a sinuous curve that visits every sephira in a different order.

Use these ideas as inspiration; the provided examples in `examples/` show how to implement some of them.
