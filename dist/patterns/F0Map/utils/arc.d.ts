/**
 * Quadratic-bezier arc between two `[lng, lat]` points, sampled into a
 * LineString. The control point sits on the perpendicular bisector of the
 * chord, offset by `curvature * chordLength`, so the line bows out into the
 * connection look mapcn-style flight paths use - without pulling in a geo
 * library. Sampling in lng/lat space is a deliberate simplification: at
 * city-to-continent scale the projected curve reads clean, and F0Map's default
 * `renderWorldCopies: false` keeps it from wrapping oddly at the antimeridian.
 */
export declare const arcLineString: (from: [number, number], to: [number, number], curvature?: number, samples?: number) => [number, number][];
