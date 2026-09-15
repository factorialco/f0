import { DotGrid } from "./DotGrid"

/**
 * The Home backdrop: React Bits' DotGrid on Angel's settings, in
 * Factorial's ramp — a neutral grid that tints radical around the
 * pointer, and scatters on a click before springing back.
 *
 *   base    #D4D6DC  a neutral a shade under the sheet it sits on
 *   active  #E61942  radical 50
 */
/** Falls off towards both edges, at every height. */
const SIDES =
  "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)"
/** Falls off towards the TOP only, so the foot of the grid stays solid. */
const TOP = "linear-gradient(to bottom, transparent 0%, black 38%, black 100%)"

export function HomeBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        // Rounded over the input, flat under it (Angel, 2026-09-15): the
        // sides fade at every height, while the vertical fade only works
        // on the way UP. Their intersection curves the top corners in and
        // leaves the bottom two square, so the grid runs off the foot of
        // the canvas instead of closing into a disc.
        maskImage: `${SIDES}, ${TOP}`,
        maskComposite: "intersect",
        WebkitMaskImage: `${SIDES}, ${TOP}`,
        WebkitMaskComposite: "source-in",
      }}
    >
      <DotGrid
        dotSize={3}
        gap={26}
        baseColor="#D4D6DC"
        activeColor="#E61942"
        proximity={70}
        shockRadius={250}
        shockStrength={2}
        resistance={1600}
        returnDuration={0.9}
      />
    </div>
  )
}
