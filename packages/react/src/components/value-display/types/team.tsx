/**
 * Team cell type for displaying team information with avatars.
 * Shows team name alongside a team avatar with optional badge.
 */
import { F0Avatar } from "@/components/avatars/F0Avatar"
import { WithAvatarBadge } from "./types"

interface TeamValue {
  name: string
  src?: string
}
export type TeamCellValue = WithAvatarBadge<TeamValue>

export const TeamCell = (args: TeamCellValue) => (
  <div className="flex items-center gap-2">
    <F0Avatar
      avatar={{
        type: "team",
        name: args.name,
        src: args.src,
      }}
      size="xs"
    />
    <span className="text-f1-foreground">{args.name.toString()}</span>
  </div>
)
