import type { AvatarVariant } from "@/components/avatars/F0Avatar"
import type { IconType } from "@/components/F0Icon"

export type CardSelectableValue = string | number

export type CardSelectableAvatarVariant =
  | AvatarVariant
  | { type: "emoji"; emoji: string }
  | { type: "file"; file: File }
  | { type: "icon"; icon: IconType }

export interface CardSelectableItemProps<T extends CardSelectableValue> {
  /** Unique value for this option */
  value: T
  /** Main title of the card */
  title: string
  /** Description text below the title */
  description?: string
  /** Avatar to display on the left */
  avatar?: CardSelectableAvatarVariant
  /** Whether this item is disabled */
  disabled?: boolean
}

export interface CardSelectableProps<T extends CardSelectableValue> {
  /** Currently selected value */
  value?: T
  /** Callback when selection changes */
  onValueChange?: (value: T) => void
  /** Default value for uncontrolled mode */
  defaultValue?: T
  /** Whether the entire selector is disabled */
  disabled?: boolean
  /** Accessible label for the group */
  "aria-label"?: string
  /** Layout direction */
  layout?: "horizontal" | "vertical"
  /** Card selector items */
  children: React.ReactNode
}

export interface CardSelectableContextValue<T extends CardSelectableValue> {
  value?: T
  onSelect: (value: T) => void
  disabled?: boolean
}
