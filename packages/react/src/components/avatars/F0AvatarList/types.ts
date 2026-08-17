import {
  CompanyAvatarVariant,
  FileAvatarVariant,
  FlagAvatarVariant,
  PersonAvatarVariant,
  TeamAvatarVariant,
} from "../F0Avatar/types"

export const avatarListSizes = ["xs", "sm", "md"] as const

export type AvatarListSize = (typeof avatarListSizes)[number]

/**
 * Optional extras every avatar entry may carry regardless of `type`.
 * `tooltipDescription` is rendered as the tooltip's secondary line via the
 * underlying `Tooltip` `description` slot (use it for emails, roles, etc.).
 */
export type F0AvatarListExtras = {
  tooltipDescription?: string
}

export type F0AvatarListPropsAvatars =
  | {
      type: "person"
      avatars: (Omit<PersonAvatarVariant, "type"> & // Allow to have more properties in the avatar variant
        F0AvatarListExtras &
        Record<string, unknown>)[]
    }
  | {
      type: "team"
      avatars: (Omit<TeamAvatarVariant, "type"> &
        F0AvatarListExtras &
        Record<string, unknown>)[]
    }
  | {
      type: "company"
      avatars: (Omit<CompanyAvatarVariant, "type"> &
        F0AvatarListExtras &
        Record<string, unknown>)[]
    }
  | {
      type: "flag"
      avatars: (Omit<FlagAvatarVariant, "type"> &
        F0AvatarListExtras &
        Record<string, unknown>)[]
    }
  | {
      type: "file"
      avatars: (Omit<FileAvatarVariant, "type"> &
        F0AvatarListExtras &
        Record<string, unknown>)[]
    }

// Discriminated union that enforces type consistency
export type F0AvatarListProps = {
  /**
   * The size of the avatars in the list.
   * @default "md"
   */
  size?: AvatarListSize

  /**
   * Whether to hide tooltips in each avatar.
   * @default false
   */
  noTooltip?: boolean

  /**
   * The exact number of avatars to keep visible; the rest collapse into the
   * `+N` counter. Not a soft cap — a provided `max` is forwarded as
   * `OverflowList`'s `min` as well, so exactly this many avatars render even in
   * a container too narrow to fit them (see `F0AvatarList.tsx`).
   *
   * There is no numeric default. Left unset, the visible count is
   * container-driven: `OverflowList` measures the available width and shows as
   * many avatars as fit, collapsing the remainder into the counter. So passing
   * a number opts into a fixed footprint, and omitting it opts into filling
   * the row.
   */
  max?: number

  /**
   * The remaining number to display.
   */
  remainingCount?: number

  /**
   * @deprecated Never implemented — `F0AvatarList` has always ignored this
   * prop — and not needed, because `max` already selects between the two
   * layouts it described. Omit `max` for what this called `"fill"`:
   * `OverflowList` measures the row and shows as many avatars as fit. Pass a
   * `max` for `"compact"`: it doubles as `min`, so exactly that many stay
   * visible. A separate switch could only contradict `max` — `layout="fill"`
   * with `max={3}` has no coherent meaning — which is why this is going rather
   * than getting an implementation.
   * @removeIn 7.0.0
   * @migration Remove the prop. If you were passing `layout="compact"` to cap
   * the row, add `max={n}`: `"compact"` never capped anything.
   */
  layout?: "fill" | "compact"

  /**
   * @deprecated No longer has any effect. The `+N` popover now always caps at
   * the available viewport height and scrolls, and that scrolling is reachable
   * by keyboard — neither of the old values is worth selecting. `"vertical"`
   * used to cap and scroll inside a hover card, where Radix strips every tab
   * stop on each render, so no keyboard user could operate the scroll (axe
   * `scrollable-region-focusable`, WCAG 2.1.1); `"none"` avoided that by
   * letting the card grow without limit, off the screen for a large cluster.
   * @removeIn 5.0
   * @migration Remove the prop. The current behaviour is what `"vertical"`
   * always intended, minus the accessibility defect.
   */
  tooltipScroll?: "vertical" | "none"
} & F0AvatarListPropsAvatars
