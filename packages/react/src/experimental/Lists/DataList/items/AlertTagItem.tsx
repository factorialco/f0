import { forwardRef } from "react"
import { F0TagAlert, TagAlertProps } from "@/components/tags/F0TagAlert"
import { experimentalComponent } from "@/lib/experimental"
import { ItemContainer } from "../ItemContainer"
import type { ActionType } from "../types"
import { getInternalAction } from "../utils"

export type AlertTagItemProps = TagAlertProps & {
  /** Makes the row interactive like any other item; the tag itself is unchanged. */
  action?: ActionType
}

const _AlertTagItem = forwardRef<HTMLLIElement, AlertTagItemProps>(
  ({ action, ...props }, ref) => {
    if (action) {
      return (
        <ItemContainer
          ref={ref}
          text={props.text}
          action={getInternalAction(action, props.text)}
          content={
            <span className="flex flex-1">
              <F0TagAlert {...props} />
            </span>
          }
        />
      )
    }

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
