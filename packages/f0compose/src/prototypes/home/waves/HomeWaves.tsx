import { GradientWaves } from "./GradientWaves"

/**
 * The Home backdrop: React Bits' GradientWaves on Angel's settings, in
 * Factorial's ramp — his example's roles kept, its colours swapped for
 * ours.
 *
 *   horizon  #FCFCFC  the content sheet itself, so the field has no
 *                     edge — it simply stops being visible
 *   wave     #C11538  radical 60, the rolling bodies
 *   crest    #E61942  radical 50, the nearest crests
 *
 * The layer matches the canvas exactly: oversizing it to move the
 * horizon also stretched the shader's aspect, which is what made the
 * waves read as too big and off-centre.
 */
export function HomeWaves() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <GradientWaves
        horizonColor="#FCFCFC"
        waveColor="#C11538"
        crestColor="#E61942"
        speed={0.1}
        amplitude={2.2}
        waveScale={0.75}
        waveRatio={2.9}
        swell={8}
        turbulence={12.5}
        tilt={1.3}
        zoom={0.85}
        height={2.2}
        fogDepth={34}
        detail="medium"
        brightness={1.5}
        opacity={0.27}
        mouseInteraction
        parallaxStrength={0.51}
        grain
        grainIntensity={0.025}
      />
    </div>
  )
}
