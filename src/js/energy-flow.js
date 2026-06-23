// Utilities for animating energy flow along paths

import { paths, getSephiraById } from './tree-layout.js';

/**
 * Create a flow state for a given path ID.
 */
export function createFlow(pathId) {
  const path = paths.find(p => p.id === pathId);
  if (!path) throw new Error('Invalid path');
  const from = getSephiraById(path.from);
  const to = getSephiraById(path.to);
  return { pathId, t: 0, from, to };
}

/**
 * Advance the flow by dt (0..1).
 */
export function updateFlow(flow, dt) {
  flow.t = (flow.t + dt) % 1;
}

/**
 * Interpolate the current position of a flow.
 */
export function getFlowPosition(flow) {
  const { from, to, t } = flow;
  const x = from.x + (to.x - from.x) * t;
  const y = from.y + (to.y - from.y) * t;
  return { x, y };
}
