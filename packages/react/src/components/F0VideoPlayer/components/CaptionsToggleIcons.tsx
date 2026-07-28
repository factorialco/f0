import { forwardRef, type SVGProps } from "react"

// Local captions ("CC") glyphs for the caption toggle: a line variant for the
// off state and a filled variant for the on state. They live here rather than
// in `@/icons/app` because that set is generated from `@factorialco/f0-core`
// (see the `generate-icons` script) and has no captions glyph — a hand-added
// icon there would be wiped on the next regen. Shaped to match `IconType`
// (forwardRef SVG, 24×24, `currentColor`); `animate` is accepted and dropped so
// it isn't spread onto the DOM node.
type CaptionsIconProps = SVGProps<SVGSVGElement> & {
  animate?: "normal" | "animate"
}

export const CaptionsLineIcon = forwardRef<SVGSVGElement, CaptionsIconProps>(
  ({ animate: _animate, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
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
      <path
        stroke="currentColor"
        strokeLinecap="round"
        d="M7 10.75h8"
        vectorEffect="non-scaling-stroke"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        d="M7 13.75h4.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
)
CaptionsLineIcon.displayName = "CaptionsLineIcon"

export const CaptionsFilledIcon = forwardRef<SVGSVGElement, CaptionsIconProps>(
  ({ animate: _animate, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      {/* Filled badge with the two caption lines knocked out (evenodd), so they
          read as gaps on any background. */}
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 6h12a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3Zm1.25 4.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Zm0 3a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
)
CaptionsFilledIcon.displayName = "CaptionsFilledIcon"
