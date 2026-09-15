import { GradientWaves } from "./GradientWaves"

/**
 * The Home backdrop: React Bits' GradientWaves on Angel's settings, in
 * Factorial's ramp — his example's roles kept, its colours swapped for
 * ours.
 *
 * All three steps of radical, darkest furthest away:
 *
 *   horizon  #9C112F  radical 70, the deep haze the waves fade into
 *   wave     #C11538  radical 60, the rolling bodies
 *   crest    #E61942  radical 50, the nearest crests
 *
 * The layer is oversized and pulled up so the horizon lands a quarter
 * down the canvas: the composer floats ON the wash rather than capping
 * it.
 */
export function HomeWaves() {
  return (
    <div className="pointer-events-none absolute inset-x-0 -top-[88%] z-0 h-[188%]">
      <GradientWaves
        horizonColor="#9C112F"
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
        height={5.2}
        fogDepth={15}
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
