import type { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react"

/**
 * An icon component, as generated from the design-system SVG assets.
 *
 * Animated icons additionally accept an `animate` prop, which `F0Icon` drives
 * from its own `state` prop.
 */
export type IconComponent = ForwardRefExoticComponent<
  SVGProps<SVGSVGElement> &
    RefAttributes<SVGSVGElement> & {
      animate?: "normal" | "animate"
    }
>
