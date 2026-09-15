import { DotGrid } from "./DotGrid"

/**
 * The Home backdrop: React Bits' DotGrid on Angel's settings, in
 * Factorial's ramp — a neutral grid that tints radical around the
 * pointer, and scatters on a click before springing back.
 *
 *   base    #D4D6DC  a neutral a shade under the sheet it sits on
 *   active  #E61942  radical 50
 */
/** A circle around the composer, as it was before the flat-bottom
 *  experiment (Angel, 2026-09-15). */
const CIRCLE =
  "radial-gradient(60% 55% at 50% 50%, black 0%, black 30%, transparent 100%)"

export function HomeBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0"
      // The grid belongs to the composer, so it fades out as the page
      // scrolls past it: Home drives the opacity from the same scroll
      // that pins the first screen (Angel, 2026-09-15).
      data-home-backdrop
      style={{
        maskImage: CIRCLE,
        WebkitMaskImage: CIRCLE,
        transition: "opacity 160ms linear",
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
