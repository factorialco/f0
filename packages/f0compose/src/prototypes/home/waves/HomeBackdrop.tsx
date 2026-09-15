import { DotGrid } from "./DotGrid"

/**
 * The Home backdrop: React Bits' DotGrid on Angel's settings, in
 * Factorial's ramp — a neutral grid that tints radical around the
 * pointer, and scatters on a click before springing back.
 *
 *   base    #D4D6DC  a neutral a shade under the sheet it sits on
 *   active  #E61942  radical 50
 */
export function HomeBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <DotGrid
        dotSize={2}
        gap={19}
        baseColor="#D4D6DC"
        activeColor="#E61942"
        proximity={70}
        shockRadius={250}
        shockStrength={3}
        resistance={1600}
        returnDuration={1.5}
      />
    </div>
  )
}
