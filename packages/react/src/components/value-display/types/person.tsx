/**
 * Person cell type for displaying person information with avatars.
 * Shows full name alongside a person avatar with optional badge.
 */
import { F0Avatar } from "@/components/avatars/F0Avatar"
import { WithAvatarBadge } from "./types"

interface PersonValue {
  firstName: string
  lastName: string
  src?: string
}

export type PersonCellValue = WithAvatarBadge<PersonValue>

export const PersonCell = (args: PersonCellValue) => (
  <div className="flex items-center gap-2">
    <F0Avatar
      avatar={{
        type: "person",
        firstName: args.firstName.toString(),
        lastName: args.lastName.toString(),
        src: args.src,
        badge: args.badge,
      }}
      size="xs"
    />
    <span className="text-f1-foreground">
      {args.firstName.toString()} {args.lastName.toString()}
    </span>
  </div>
)
