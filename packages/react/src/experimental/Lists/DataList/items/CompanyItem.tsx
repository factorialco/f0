import { forwardRef } from "react"

import { F0AvatarCompany } from "@/components/avatars/F0AvatarCompany"
import { experimentalComponent } from "@/lib/experimental"

import { ItemContainer } from "../ItemContainer"
import type { CompanyItemProps } from "../types"
import { getInternalAction } from "../utils"

const _CompanyItem = forwardRef<HTMLLIElement, CompanyItemProps>(
  ({ avatarUrl, name, action }, ref) => {
    return (
      <ItemContainer
        ref={ref}
        leftIcon={() => (
          <F0AvatarCompany name={name} size="xs" src={avatarUrl} />
        )}
        text={name}
        action={getInternalAction(action, name)}
      />
    )
  }
)

_CompanyItem.displayName = "CompanyItem"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const CompanyItem = experimentalComponent("CompanyItem", _CompanyItem)
