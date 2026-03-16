import { forwardRef } from "react"

import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import { experimentalComponent } from "@/lib/experimental"

import { ItemContainer } from "../ItemContainer"
import type { EmployeeItemProps } from "../types"
import { getInternalAction } from "../utils"

const _PersonItem = forwardRef<HTMLLIElement, EmployeeItemProps>(
  ({ action, avatarUrl, firstName, lastName }, ref) => {
    const fullName = `${firstName} ${lastName}`
    return (
      <ItemContainer
        ref={ref}
        leftIcon={() => (
          <F0AvatarPerson
            size="xs"
            src={avatarUrl}
            firstName={firstName}
            lastName={lastName}
          />
        )}
        text={fullName}
        action={getInternalAction(action, fullName)}
      />
    )
  }
)

_PersonItem.displayName = "PersonItem"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const PersonItem = experimentalComponent("PersonItem", _PersonItem)
