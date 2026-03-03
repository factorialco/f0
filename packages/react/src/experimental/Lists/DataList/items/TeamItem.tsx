import { forwardRef } from "react"

import { F0AvatarTeam } from "@/components/avatars/F0AvatarTeam"
import { experimentalComponent } from "@/lib/experimental"

import { ItemContainer } from "../ItemContainer"
import type { TeamItemProps } from "../types"
import { getInternalAction } from "../utils"

const _TeamItem = forwardRef<HTMLLIElement, TeamItemProps>(
  ({ action, name }, ref) => {
    return (
      <ItemContainer
        ref={ref}
        leftIcon={() => <F0AvatarTeam name={name} size="xs" />}
        text={name}
        action={getInternalAction(action, name)}
      />
    )
  }
)

_TeamItem.displayName = "TeamItem"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const TeamItem = experimentalComponent("TeamItem", _TeamItem)
