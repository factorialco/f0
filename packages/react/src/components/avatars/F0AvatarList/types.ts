import {
  CompanyAvatarVariant,
  FileAvatarVariant,
  FlagAvatarVariant,
  PersonAvatarVariant,
  TeamAvatarVariant,
} from "../F0Avatar/types"

export const avatarListSizes = ["xs", "sm", "md"] as const

export type AvatarListSize = (typeof avatarListSizes)[number]

export type F0AvatarListPropsAvatars =
  | {
      type: "person"
      avatars: // Allow to have more properties in the avatar variant
      (Omit<PersonAvatarVariant, "type"> & Record<string, unknown>)[]
    }
  | {
      type: "team"
      avatars: (Omit<TeamAvatarVariant, "type"> & Record<string, unknown>)[]
    }
  | {
      type: "company"
      avatars: (Omit<CompanyAvatarVariant, "type"> & Record<string, unknown>)[]
    }
  | {
      type: "flag"
      avatars: (Omit<FlagAvatarVariant, "type"> & Record<string, unknown>)[]
    }
  | {
      type: "file"
      avatars: (Omit<FileAvatarVariant, "type"> & Record<string, unknown>)[]
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
} & F0AvatarListPropsAvatars
