import { forwardRef, useId, type SVGProps } from "react"

// Local "AD" (audio description) toggle glyphs: a line badge for the off state
// and a filled badge for the on state, mirroring the captions toggle. They live
// here because the generated `@/icons/app` set (from `@factorialco/f0-core`) has
// no audio-description glyph. The `<svg>` is `aria-hidden` — the button's label
// carries the accessible name — so the inner "AD" text is never announced or
// counted as a visible label (keeps the toggle label-in-name compliant).
type AudioDescriptionIconProps = SVGProps<SVGSVGElement> & {
  animate?: "normal" | "animate"
}

const AD_TEXT_PROPS = {
  x: 12,
  y: 15,
  textAnchor: "middle" as const,
  fontSize: 8,
  fontWeight: 700,
  fontFamily: "inherit",
  letterSpacing: -0.4,
}

export const AudioDescriptionLineIcon = forwardRef<
  SVGSVGElement,
  AudioDescriptionIconProps
>(({ animate: _animate, ...props }, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    ref={ref}
    {...props}
    aria-hidden="true"
  >
    <rect
      x={3.5}
      y={6.5}
      width={17}
      height={11}
      rx={2.5}
      stroke="currentColor"
      vectorEffect="non-scaling-stroke"
    />
    <text {...AD_TEXT_PROPS} fill="currentColor">
      AD
    </text>
  </svg>
))
AudioDescriptionLineIcon.displayName = "AudioDescriptionLineIcon"

export const AudioDescriptionFilledIcon = forwardRef<
  SVGSVGElement,
  AudioDescriptionIconProps
>(({ animate: _animate, ...props }, ref) => {
  // Unique per instance so multiple icons on a page don't share a mask.
  const maskId = `ad-mask-${useId().replace(/:/g, "")}`
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
      aria-hidden="true"
    >
      {/* Knock "AD" out of the filled badge so the letters read on any background. */}
      <mask id={maskId} maskUnits="userSpaceOnUse">
        <rect x={3} y={6} width={18} height={12} rx={3} fill="white" />
        <text {...AD_TEXT_PROPS} fill="black">
          AD
        </text>
      </mask>
      <rect
        x={3}
        y={6}
        width={18}
        height={12}
        rx={3}
        fill="currentColor"
        mask={`url(#${maskId})`}
      />
    </svg>
  )
})
AudioDescriptionFilledIcon.displayName = "AudioDescriptionFilledIcon"
