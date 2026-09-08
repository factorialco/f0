import { forwardRef } from "react"
import { F0TagStatus, TagStatusProps } from "@/components/tags/F0TagStatus"
import { experimentalComponent } from "@/lib/experimental"
import { ItemContainer } from "../ItemContainer"
import type { ActionType } from "../types"
import { getInternalAction } from "../utils"

export type StatusTagItemProps = TagStatusProps & {
  /** Makes the row interactive like any other item; the tag itself is unchanged. */
  action?: ActionType
}

const _StatusTagItem = forwardRef<HTMLLIElement, StatusTagItemProps>(
  ({ action, ...props }, ref) => {
    if (action) {
      return (
        <ItemContainer
          ref={ref}
          text={props.text}
          action={getInternalAction(action, props.text)}
          content={
            <span className="flex flex-1">
              <F0TagStatus {...props} />
            </span>
          }
        />
      )
    }

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
