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
   * Controls the scroll behavior of the `+N` overflow popover.
   * - `"vertical"` (default): caps the popover height and scrolls vertically.
   * - `"none"`: lets the popover grow to fit all entries.
   * @default "vertical"
   */
  tooltipScroll?: "vertical" | "none"
  /**
   * Optional CSS color applied to the text inside the `+N` overflow popover
   * (names and `tooltipDescription` lines). Accepts any CSS color string,
   * including design tokens (e.g. `"var(--f1-foreground-secondary)"`). When
   * omitted, text inherits the surrounding foreground color.
   */
  tooltipDescriptionFontColor?: string
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
          tooltipScroll: args.tooltipScroll,
          tooltipDescriptionFontColor: args.tooltipDescriptionFontColor,
        } as F0AvatarListProps)}
      />
    </div>
  )
}
