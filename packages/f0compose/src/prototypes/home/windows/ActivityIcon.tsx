import { forwardRef, type SVGProps } from "react"

/**
 * The Activity glyph — a vitals pulse (the widgets menu, Figma "View
 * drawer"). ICON GAP: f0 ships no pulse/heartbeat icon, and the closest
 * candidates (`ChartLine`, `Graph`) are line charts that would read as a
 * duplicate of Insights sitting right above it.
 *
 * Drawn to f0's app-icon convention rather than exported from the frame
 * (the node Oskar linked carries only the Communities asset): 24 viewBox,
 * currentColor STROKE, round caps and joins, `non-scaling-stroke` — the
 * same recipe as `PanelCollapse`. Swap for the real asset when it lands.
 */
export const Activity = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 12.5h3.2l2-6 3.6 12 2.6-7.5 1.6 4.5H21"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
)
Activity.displayName = "Activity"
