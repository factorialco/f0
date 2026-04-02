import type {
  F0AvatarListCompanyItem,
  F0AvatarListPersonItem,
  F0AvatarListTeamItem,
} from "../F0Avatar/F0AvatarList.types"
import type { F0TagDotColor, F0TagStatusVariant } from "../F0Tag/F0Tag.types"

export const F0_METADATA_ORIENTATIONS = ["vertical", "horizontal"] as const

export type F0MetadataOrientation = (typeof F0_METADATA_ORIENTATIONS)[number]

export type MetadataItemValue =
  | { type: "text"; content: string }
  | {
      type: "avatar"
      avatarType: "person"
      firstName: string
      lastName: string
      src?: string
      deactivated?: boolean
    }
  | { type: "avatar"; avatarType: "team"; name: string; src?: string }
  | { type: "avatar"; avatarType: "company"; name: string; src?: string }
  | { type: "status"; label: string; variant: F0TagStatusVariant }
  | { type: "list"; variant: "person"; avatars: F0AvatarListPersonItem[] }
  | { type: "list"; variant: "team"; avatars: F0AvatarListTeamItem[] }
  | { type: "list"; variant: "company"; avatars: F0AvatarListCompanyItem[] }
  | { type: "data-list"; data: string[] }
  | { type: "tag-list"; tags: string[] }
  | { type: "dot-tag"; label: string; color: F0TagDotColor }
  | { type: "date"; formattedDate: string; icon?: "warning" | "critical" }
  | {
      type: "progress-bar"
      value: number
      max?: number
      label?: string
      progressType?: "linear" | "circular"
    }

export interface MetadataItem {
  /**
   * Descriptive label shown alongside or above the value.
   */
  label: string

  /**
   * Value to render. The `type` discriminant selects the correct F0 primitive.
   */
  value: MetadataItemValue

  /**
   * When true, the label is not rendered. Useful when the value is self-describing.
   */
  hideLabel?: boolean
}

export interface F0MetadataProps {
  /**
   * Items to render. `undefined` and `boolean` values are filtered out to allow
   * conditional item expressions: `condition && { label, value }`.
   */
  items: (MetadataItem | undefined | boolean)[]

  /**
   * Layout direction for items.
   * - `"vertical"` — each item in its own row, label above value (default)
   * - `"horizontal"` — items in a row, label aligned to the left of the value
   */
  orientation?: F0MetadataOrientation
}
