import { forwardRef } from "react"

import { F0TagAlert, TagAlertProps } from "@/components/tags/F0TagAlert"
import { experimentalComponent } from "@/lib/experimental"

const _AlertTagItem = forwardRef<HTMLLIElement, TagAlertProps>(
  ({ ...props }, ref) => {
    return (
      <li ref={ref} className="flex items-start pt-1">
        <F0TagAlert {...props} />
      </li>
    )
  }
)

_AlertTagItem.displayName = "AlertTagItem"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const AlertTagItem = experimentalComponent("AlertTagItem", _AlertTagItem)
