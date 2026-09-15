import type { IconType } from "@factorialco/f0-react"

import { forwardRef, type Ref, type SVGProps } from "react"

/**
 * Glyphs f0 does not ship yet, drawn here so the prototype does not have
 * to borrow a near-miss from `icons/app`. Same 24 viewBox and the same
 * `currentColor` contract as an f0 icon, so `F0Icon` renders them
 * unchanged.
 */

type Props = SVGProps<SVGSVGElement>

function icon(name: string, body: React.ReactNode): IconType {
  const Svg = (props: Props, ref: Ref<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}
    >
      {body}
    </svg>
  )
  Svg.displayName = name
  return forwardRef(Svg) as IconType
}

/** Background tasks — the two interlocking diamonds, from Angel's own
 *  export (2026-09-14). Routines are background tasks, so this is their
 *  glyph. */
export const BackgroundTasks = icon(
  "BackgroundTasks",
  <path
    fill="currentColor"
    fillRule="evenodd"
    clipRule="evenodd"
    d="M12.0009 5.66258C13.4343 4.49925 15.5447 4.58452 16.8789 5.91844L20.3935 9.43309C21.8189 10.8585 21.8189 13.1708 20.3935 14.5962L16.8789 18.1108C15.5446 19.4448 13.4343 19.5293 12.0009 18.3657C10.5675 19.5285 8.45797 19.4447 7.12399 18.1108L3.60934 14.5962C2.18393 13.1708 2.18393 10.8585 3.60934 9.43309L7.12399 5.91844C8.45792 4.58465 10.5675 4.49995 12.0009 5.66258ZM11.3672 6.83836C10.4495 5.92067 8.96166 5.92076 8.04391 6.83836L4.52927 10.353C3.61153 11.2707 3.61153 12.7585 4.52927 13.6763L8.04391 17.1909C8.96166 18.1085 10.4495 18.1086 11.3672 17.1909L14.8818 13.6763C15.7994 12.7586 15.7994 11.2707 14.8818 10.353L11.3672 6.83836ZM15.9599 6.83738C15.1392 6.01694 13.8633 5.93247 12.9463 6.57957L15.8007 9.43406C17.226 10.8594 17.226 13.1698 15.8007 14.5952L12.9472 17.4487C13.8642 18.0956 15.1393 18.0122 15.9599 17.1919L19.4746 13.6763C20.392 12.7585 20.3922 11.2697 19.4746 10.352L15.9599 6.83738Z"
  />
)
