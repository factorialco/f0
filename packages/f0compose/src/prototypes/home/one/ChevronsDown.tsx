import { forwardRef, type SVGProps } from "react"

/**
 * Lucide's `chevrons-down`, drawn here rather than imported: the
 * prototype's dependency list is fixed and f0 ships no double chevron
 * (Angel, 2026-09-15). Same 24px grid and 2px round stroke as the
 * original, so it sits with f0's own glyphs.
 */
export const ChevronsDown = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  function ChevronsDown(props, ref) {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="m7 6 5 5 5-5" />
        <path d="m7 13 5 5 5-5" />
      </svg>
    )
  }
)
