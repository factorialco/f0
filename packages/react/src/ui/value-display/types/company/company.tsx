/**
 * Company cell type for displaying company information with avatars.
 * Shows company name alongside a company avatar with optional badge.
 */
import { F0Avatar } from "@/components/avatars/F0Avatar"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { cn } from "@/lib/utils"
import { tableDisplayClassNames } from "../../const"
import { ValueDisplayRendererContext } from "../../renderers"
import { resolveNameClamp } from "../../utils"
import { WithAvatarBadge } from "../types"

interface CompanyValue {
  name: string
  src?: string
}

export type CompanyCellValue = WithAvatarBadge<CompanyValue> &
  ({ lines?: number; full?: never } | { lines?: never; full: true })

export const CompanyCell = (
  args: CompanyCellValue,
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
          type: "company",
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
