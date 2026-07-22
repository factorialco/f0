import { baseColors } from "@factorialco/f0-core"

import { useI18n } from "@/lib/providers/i18n"

import { MARKER_SHADOW_HSL } from "./BaseMapMarker"

// The "you are here" dot. Internal and intentionally not a marker: it isn't
// clickable, has no pin/label/selection, and never clusters - `F0Map` renders
// one at the user's coordinate. A solid malibu.60 centre on a single light
// malibu halo (one translucent layer, not two), with a soft drop shadow.
// Hues come from the core tokens (no per-hue CSS vars exist, and the semantic
// ones remap in dark mode - the dot must stay malibu on both themes).

// Halo diameter (a mid-point between the earlier too-small and too-big tries);
// the solid centre is ~half of it.
const SIZE = 22
const CENTER = Math.round(SIZE * 0.48)

export const CurrentLocationDot = () => {
  const i18n = useI18n()
  return (
    <span
      role="img"
      aria-label={i18n.map.currentLocation}
      className="flex items-center justify-center rounded-full"
      style={{
        width: SIZE,
        height: SIZE,
        backgroundColor: `hsl(${baseColors.malibu[50]} / 0.3)`,
        boxShadow: `0 1px 3px hsl(${MARKER_SHADOW_HSL} / 0.25)`,
        // Never intercepts clicks - taps fall through to the map.
        pointerEvents: "none",
      }}
    >
      <span
        className="rounded-full"
        style={{
          width: CENTER,
          height: CENTER,
          backgroundColor: `hsl(${baseColors.malibu[60]})`,
        }}
      />
    </span>
  )
}

CurrentLocationDot.displayName = "CurrentLocationDot"
