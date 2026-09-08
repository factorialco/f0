import { forwardRef } from "react"
import { F0TagDot, TagDotProps } from "@/components/tags/F0TagDot"
import { experimentalComponent } from "@/lib/experimental"
import { ItemContainer } from "../ItemContainer"
import type { ActionType } from "../types"
import { getInternalAction } from "../utils"

export type DotTagItemProps = TagDotProps & {
  /** Makes the row interactive like any other item; the tag itself is unchanged. */
  action?: ActionType
}

const _DotTagItem = forwardRef<HTMLLIElement, DotTagItemProps>(
  ({ action, ...props }, ref) => {
    if (action) {
      return (
        <ItemContainer
          ref={ref}
          text={props.text}
          action={getInternalAction(action, props.text)}
          content={
            <span className="flex flex-1">
              <F0TagDot {...props} />
            </span>
          }
        />
      )
    }

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
