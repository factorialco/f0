import { forwardRef } from "react"

import { F0TagDot, TagDotProps } from "@/components/tags/F0TagDot"
import { experimentalComponent } from "@/lib/experimental"

const _DotTagItem = forwardRef<HTMLLIElement, TagDotProps>(
  ({ ...props }, ref) => {
    return (
      <li ref={ref} className="flex items-start pt-1">
        <F0TagDot {...props} />
      </li>
    )
  }
)

_DotTagItem.displayName = "DotTagItem"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const DotTagItem = experimentalComponent("DotTagItem", _DotTagItem)
