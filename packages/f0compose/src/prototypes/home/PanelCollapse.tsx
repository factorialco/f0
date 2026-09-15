import { forwardRef, type SVGProps } from "react"

/**
 * "Collapse the side panel" glyph (Figma: the icon on the panel header's
 * right edge) — f0 ships no sidebar-collapse icon, so this follows the
 * app-icon conventions (24 viewBox, currentColor stroke, round joins,
 * non-scaling stroke) like PlayOutline. Icon gap flagged for the catalog.
 */
export const PanelCollapse = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <rect
        x="3.75"
        y="5"
        width="16.5"
        height="14"
        rx="2.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.5 5v14"
        vectorEffect="non-scaling-stroke"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 12h-3.9m0 0 1.7-1.7m-1.7 1.7 1.7 1.7"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
)
PanelCollapse.displayName = "PanelCollapse"

/**
 * Its mirror, for bringing the panel back — same frame, the arrow
 * pointing out instead of in (Angel, 2026-09-14: with Home collapsed by
 * default there was no way to open the second level again).
 */
export const PanelExpand = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <rect
        x="3.75"
        y="5"
        width="16.5"
        height="14"
        rx="2.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.5 5v14"
        vectorEffect="non-scaling-stroke"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.35 12h3.9m0 0-1.7-1.7m1.7 1.7-1.7 1.7"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
)
PanelExpand.displayName = "PanelExpand"
