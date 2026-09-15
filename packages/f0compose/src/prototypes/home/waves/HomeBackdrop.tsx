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
    <div
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        // Densest around the composer, gone by the edges (Angel,
        // 2026-09-14): the grid is there to give the input a place to
        // sit, not to tile the whole sheet.
        maskImage:
          "radial-gradient(60% 55% at 50% 50%, black 0%, black 30%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(60% 55% at 50% 50%, black 0%, black 30%, transparent 100%)",
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
