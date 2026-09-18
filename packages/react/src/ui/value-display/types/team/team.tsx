/**
 * Team cell type for displaying team information with avatars.
 * Shows team name alongside a team avatar with optional badge.
 */
import { F0Avatar } from "@/components/avatars/F0Avatar"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { cn } from "@/lib/utils"
import { tableDisplayClassNames } from "../../const"
import { ValueDisplayRendererContext } from "../../renderers"
import { resolveNameClamp } from "../../utils"
import { WithAvatarBadge } from "../types"

interface TeamValue {
  name: string
  src?: string
}

export type TeamCellValue = WithAvatarBadge<TeamValue & { lines?: number }>

export const TeamCell = (
  args: TeamCellValue,
  meta: ValueDisplayRendererContext
) => {
  const { lines, full, wraps } = resolveNameClamp(args)

  return (
    <div
      className={cn(
        "flex min-w-0 flex-1 gap-2",
        // The xs avatar is 20px, one line of text, so top-aligning a name that
        // can wrap puts it on the first line instead of the block's middle.
        wraps ? "items-start" : "items-center",
        meta.visualization === "table" &&
          (wraps
            ? tableDisplayClassNames.multiline
            : tableDisplayClassNames.avatar)
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
      <OneEllipsis
        className={cn(
          "min-w-0 flex-1 text-f1-foreground",
          wraps && "break-words"
        )}
        tag="span"
        lines={lines}
        disabled={full}
      >
        {args.name.toString()}
      </OneEllipsis>
    </div>
  )
}
