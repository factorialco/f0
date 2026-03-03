import { forwardRef } from "react"

import { F0TagStatus, TagStatusProps } from "@/components/tags/F0TagStatus"
import { experimentalComponent } from "@/lib/experimental"

const _StatusTagItem = forwardRef<HTMLLIElement, TagStatusProps>(
  ({ ...props }, ref) => {
    return (
      <li ref={ref} className="flex items-start pt-1">
        <F0TagStatus {...props} />
      </li>
    )
  }
)

_StatusTagItem.displayName = "StatusTagItem"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const StatusTagItem = experimentalComponent(
  "StatusTagItem",
  _StatusTagItem
)
