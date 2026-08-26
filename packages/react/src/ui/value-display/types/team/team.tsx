/**
 * Team cell type for displaying team information with avatars.
 * Shows team name alongside a team avatar with optional badge.
 */
import { F0Avatar } from "@/components/avatars/F0Avatar"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { cn } from "@/lib/utils"

import { tableDisplayClassNames } from "../../const"
import { ValueDisplayRendererContext } from "../../renderers"
import { WithAvatarBadge } from "../types"

interface TeamValue {
  name: string
  src?: string
}
export type TeamCellValue = WithAvatarBadge<TeamValue>

export const TeamCell = (
  args: TeamCellValue,
  meta: ValueDisplayRendererContext
) => (
  <div
    className={cn(
      "flex min-w-0 flex-1 items-center gap-2",
      meta.visualization === "table" && tableDisplayClassNames.avatar
    )}
  >
    <F0Avatar
      avatar={{
        type: "team",
        name: args.name,
        src: args.src,
      }}
      size="xs"
    />
    <OneEllipsis className="min-w-0 flex-1 text-f1-foreground" tag="span">
      {args.name.toString()}
    </OneEllipsis>
  </div>
)
