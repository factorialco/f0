import { forwardRef } from "react"

import { F0TagRaw, TagRawProps } from "@/components/tags/F0TagRaw"
import { experimentalComponent } from "@/lib/experimental"

const _RawTagItem = forwardRef<HTMLLIElement, TagRawProps>(
  ({ ...props }, ref) => {
    return (
      <li ref={ref} className="flex items-start pt-1">
        <F0TagRaw {...props} />
      </li>
    )
  }
)

_RawTagItem.displayName = "RawTagItem"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const RawTagItem = experimentalComponent("RawTagItem", _RawTagItem)
