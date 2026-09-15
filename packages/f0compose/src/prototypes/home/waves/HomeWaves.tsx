import { GradientWaves } from "./GradientWaves"

/**
 * The Home backdrop: React Bits' GradientWaves in Factorial's own ramp —
 * radical for the water, the shell's neutral ground for the haze it
 * dissolves into, so the effect ends where the page begins instead of
 * stopping at an edge.
 *
 *   horizon  #FAFAFA  the ground behind the content sheet
 *   wave     #E61942  radical 50
 *   crest    #FF5C7A  radical 50 lifted, for the nearest crests
 *
 * Tuned low and slow: this sits behind an input people type into.
 */
export function HomeWaves() {
  return (
    <div className="pointer-events-none absolute inset-x-0 -top-[88%] z-0 h-[188%]">
      <GradientWaves
        horizonColor="#FAFAFA"
        waveColor="#E61942"
        crestColor="#FF5C7A"
        speed={0.08}
        amplitude={2.2}
        waveScale={0.7}
        waveRatio={2.6}
        swell={10}
        turbulence={14}
        tilt={1.15}
        zoom={0.9}
        height={4.0}
        fogDepth={24}
        detail="medium"
        brightness={1.3}
        opacity={0.45}
        mouseInteraction
        parallaxStrength={0.4}
        grain
        grainIntensity={0.02}
      />
    </div>
  )
}
