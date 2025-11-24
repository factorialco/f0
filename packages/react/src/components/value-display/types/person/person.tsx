/**
 * Person cell type for displaying person information with avatars.
 * Shows full name alongside a person avatar with optional badge.
 */
import { F0Avatar } from "@/components/avatars/F0Avatar"
import { OneEllipsis } from "@/components/OneEllipsis"
import { cn } from "@/lib/utils"
import { tableDisplayClassNames } from "../../const"
import { ValueDisplayRendererContext } from "../../renderers"
import { WithAvatarBadge } from "../types"

interface PersonValue {
  firstName: string
  lastName: string
  src?: string
  deactivated?: boolean
}

export type PersonCellValue = WithAvatarBadge<PersonValue>

export const PersonCell = (
  args: PersonCellValue,
  meta: ValueDisplayRendererContext
) => {
  const fullName = `${args.firstName.toString()} ${args.lastName.toString()}`
  return (
    <div
      className={cn(
        "flex min-w-0 flex-1 items-center gap-2",
        meta.visualization === "table" && tableDisplayClassNames.avatar
      )}
    >
      <F0Avatar
        avatar={{
          type: "person",
          firstName: args.firstName.toString(),
          lastName: args.lastName.toString(),
          src: args.src,
          badge: args.badge,
          deactivated: args.deactivated,
        }}
        size="xs"
      />
      <OneEllipsis className="min-w-0 flex-1 text-f1-foreground" tag="span">
        {fullName}
      </OneEllipsis>
    </div>
  )
}
