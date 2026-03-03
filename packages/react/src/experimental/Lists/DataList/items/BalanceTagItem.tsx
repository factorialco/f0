import { forwardRef } from "react"

import { F0TagBalance, TagBalanceProps } from "@/components/tags/F0TagBalance"
import { experimentalComponent } from "@/lib/experimental"

const _BalanceTagItem = forwardRef<HTMLLIElement, TagBalanceProps>(
  ({ ...props }, ref) => {
    return (
      <li ref={ref} className="flex items-start pt-1">
        <F0TagBalance {...props} />
      </li>
    )
  }
)

_BalanceTagItem.displayName = "BalanceTagItem"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const BalanceTagItem = experimentalComponent(
  "BalanceTagItem",
  _BalanceTagItem
)
