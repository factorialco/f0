/**
 * Avatar list cell type for displaying multiple user avatars in a collection.
 * Supports limiting the maximum number of visible avatars and per-avatar
 * tooltip descriptions (e.g. emails, roles) via `tooltipDescription`.
 */
import {
  CompanyAvatarVariant,
  PersonAvatarVariant,
  TeamAvatarVariant,
} from "@/components/avatars/F0Avatar"
import {
  F0AvatarList,
  F0AvatarListProps,
} from "@/components/avatars/F0AvatarList"
import { F0AvatarListExtras } from "@/components/avatars/F0AvatarList/types"
import { cn } from "@/lib/utils"

import { tableDisplayClassNames } from "../../const"
import { ValueDisplayRendererContext } from "../../renderers"

type AvatarListValue = {
  /**
   * Maximum number of visible avatars. Overflow is collapsed into a `+N`
   * counter that opens the full list on hover.
   */
  max?: number
  /**
   * @deprecated No longer has any effect; the `+N` popover always caps at the
   * available viewport height and scrolls. See
   * `F0AvatarListProps["tooltipScroll"]`.
   * @removeIn 5.0
   * @migration Remove the prop.
   */
  tooltipScroll?: "vertical" | "none"
} & (
  | {
      type?: "person"
      avatarList: (PersonAvatarVariant & F0AvatarListExtras)[]
    }
  | {
      type: "team"
      avatarList: (TeamAvatarVariant & F0AvatarListExtras)[]
    }
  | {
      type: "company"
      avatarList: (CompanyAvatarVariant & F0AvatarListExtras)[]
    }
)
export type AvatarListCellValue = AvatarListValue

export const AvatarListCell = (
  args: AvatarListCellValue,
  meta: ValueDisplayRendererContext
) => {
  const type = args.type ?? ("person" as const)

  return (
    <div
      className={cn(
        "pointer-events-auto w-full",
        meta.visualization === "table" && tableDisplayClassNames.avatarList
      )}
    >
      <F0AvatarList
        {...({
          type,
          avatars: args.avatarList,
          size: "xs" as const,
          max: args.max,
        } as F0AvatarListProps)}
      />
    </div>
  )
}
