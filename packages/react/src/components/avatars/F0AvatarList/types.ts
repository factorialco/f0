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
   * The maximum number of avatars to display.
   * @default 3
   */
  max?: number

  /**
   * The remaining number to display.
   */
  remainingCount?: number

  /**
   * The layout of the avatar list.
   * - "fill" - Avatars will expand to fill the available width, with overflow items shown in a counter
   * - "compact" - Avatars will be stacked tightly together up to the max limit, with remaining shown in counter
   * @default "compact"
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
