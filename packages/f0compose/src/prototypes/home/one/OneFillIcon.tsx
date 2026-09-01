import type { Ref, SVGProps } from "react"

import { forwardRef } from "react"

/**
 * The One mark as a plain monochrome GLYPH (Figma 2730:458181's One-fill
 * asset, exported by Oskar) — an icon gap: f0's `F0OneIcon` is the brand
 * mark with its animated gradient, which is the wrong thing to put inside
 * an outline button.
 *
 * FILL paths, so no `vector-effect: non-scaling-stroke` (same rule as
 * `windows/PanelIcons.tsx`). `forwardRef` so it satisfies f0's `IconType`
 * and can be handed to `F0Button`'s `icon` prop.
 *
 * The fill is pinned to the `neutral-100` TOKEN rather than
 * `currentColor`: f0's outline button paints its icon `text-f1-icon` (a
 * mid grey) and the design wants the mark black — #0d1625, which is
 * exactly what this token resolves to, and it flips correctly on dark.
 */
const ONE_FILL =
  "M7.99414 10.8838C9.04709 10.8839 10.0832 11.1947 10.9766 11.7998C11.3363 12.0435 11.3327 12.6027 10.9717 12.8438C10.0794 13.4389 9.04504 13.7675 7.99414 13.7676C6.91255 13.7675 5.89842 13.4276 5.03223 12.8525C4.66599 12.6093 4.6649 12.0418 5.03125 11.7988C5.92012 11.2093 6.94875 10.8839 7.99414 10.8838ZM3.14941 5.02441C3.39299 4.66488 3.95214 4.6687 4.19336 5.0293C4.78846 5.92149 5.11708 6.95598 5.11719 8.00684C5.11715 9.08861 4.77738 10.1034 4.20215 10.9697C3.95881 11.3356 3.39233 11.336 3.14941 10.9697C2.55985 10.0808 2.23441 9.05231 2.23438 8.00684C2.23447 6.95392 2.54435 5.91778 3.14941 5.02441ZM11.7998 5.02441C12.0435 4.665 12.6026 4.66858 12.8438 5.0293C13.4389 5.92149 13.7675 6.95598 13.7676 8.00684C13.7675 9.08861 13.4278 10.1034 12.8525 10.9697C12.6093 11.3358 12.0418 11.336 11.7988 10.9697C11.2094 10.0809 10.8838 9.0522 10.8838 8.00684C10.8839 6.95392 11.1947 5.91778 11.7998 5.02441ZM7.99414 2.23438C9.04702 2.23444 10.0832 2.54441 10.9766 3.14941C11.3362 3.39303 11.3325 3.95223 10.9717 4.19336C10.0794 4.78849 9.04505 5.11711 7.99414 5.11719C6.91247 5.11711 5.89846 4.77732 5.03223 4.20215C4.66607 3.95899 4.66512 3.39249 5.03125 3.14941C5.92013 2.55988 6.94873 2.23445 7.99414 2.23438Z"

export const OneFill = forwardRef(function OneFill(
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      ref={ref}
      {...props}
    >
      <path fill="hsl(var(--neutral-100))" d={ONE_FILL} />
    </svg>
  )
})
