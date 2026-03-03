import { forwardRef } from "react"

import { experimentalComponent } from "@/lib/experimental"

import { ItemContainer } from "../ItemContainer"
import type { ItemProps } from "../types"
import { getInternalAction } from "../utils"

const _Item = forwardRef<HTMLLIElement, ItemProps>(
  ({ text, icon, action }, ref) => {
    return (
      <ItemContainer
        ref={ref}
        text={text}
        leftIcon={icon}
        action={getInternalAction(action, text)}
      />
    )
  }
)

_Item.displayName = "DataList.Item"

/**
 * @experimental This is an experimental component, use it at your own risk
 */
export const Item = experimentalComponent("DataList.Item", _Item)
