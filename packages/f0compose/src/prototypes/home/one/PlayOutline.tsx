import { forwardRef, type SVGProps } from "react"

/**
 * Stroke-style play triangle. f0 only ships SolidPlay (filled) — this
 * strokes SolidPlay's EXACT path (same silhouette, corner rounding, and
 * optical center) so it reads as f0 while the icon gap lasts. Follows
 * the app-icon conventions (currentColor stroke, round joins,
 * non-scaling stroke) so it picks up F0Icon sizing and the prototype's
 * stroke-width override. Icon gap flagged for the f0 catalog.
 */
export const PlayOutline = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.99988 16.5536V7.44636C5.99988 5.91072 7.65884 4.94798 8.99216 5.70988L16.961 10.2635C18.3047 11.0313 18.3047 12.9687 16.961 13.7365L8.99216 18.2901C7.65884 19.052 5.99988 18.0893 5.99988 16.5536Z"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
)

PlayOutline.displayName = "PlayOutline"
