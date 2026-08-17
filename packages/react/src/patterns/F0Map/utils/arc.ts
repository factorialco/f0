/**
 * Quadratic-bezier arc between two `[lng, lat]` points, sampled into a
 * LineString. The control point sits on the perpendicular bisector of the
 * chord, offset by `curvature * chordLength`, so the line bows out into the
 * connection look mapcn-style flight paths use - without pulling in a geo
 * library. Sampling in lng/lat space is a deliberate simplification: at
 * city-to-continent scale the projected curve reads clean, and F0Map's default
 * `renderWorldCopies: false` keeps it from wrapping oddly at the antimeridian.
 */
export const arcLineString = (
  from: [number, number],
  to: [number, number],
  curvature = 0.3,
  samples = 64
): [number, number][] => {
  const [x1, y1] = from
  const [x2, y2] = to
  const mx = (x1 + x2) / 2
  const my = (y1 + y2) / 2
  // Control point offset along the chord normal (-dy, dx).
  const cx = mx - (y2 - y1) * curvature
  const cy = my + (x2 - x1) * curvature

  const points: [number, number][] = []
  for (let i = 0; i <= samples; i++) {
    const t = i / samples
    const mt = 1 - t
    const a = mt * mt
    const b = 2 * mt * t
    const c = t * t
    points.push([a * x1 + b * cx + c * x2, a * y1 + b * cy + c * y2])
  }
  return points
}
