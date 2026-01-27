import type { AvatarVariant } from "@/components/avatars/F0Avatar"
import type { IconType } from "@/components/F0Icon"

export type CardSelectableValue = string | number

export type CardSelectableAvatarVariant =
  | AvatarVariant
  | { type: "emoji"; emoji: string }
  | { type: "file"; file: File }
  | { type: "icon"; icon: IconType }

export interface CardSelectableItem<T extends CardSelectableValue> {
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

export interface CardSelectableSingleProps<T extends CardSelectableValue> {
  /** List of selectable items */
  items: CardSelectableItem<T>[]
  /** Single selection mode (default) */
  multiple?: false
  /** Currently selected value */
  value?: T
  /** Callback when selection changes */
  onChange?: (value: T) => void
  /** Whether the entire selector is disabled */
  disabled?: boolean
  /** Accessible label for the group */
  "aria-label"?: string
  /** Layout direction */
  layout?: "horizontal" | "vertical"
}

export interface CardSelectableMultipleProps<T extends CardSelectableValue> {
  /** List of selectable items */
  items: CardSelectableItem<T>[]
  /** Multiple selection mode */
  multiple: true
  /** Currently selected values */
  value?: T[]
  /** Callback when selection changes */
  onChange?: (value: T[]) => void
  /** Whether the entire selector is disabled */
  disabled?: boolean
  /** Accessible label for the group */
  "aria-label"?: string
  /** Layout direction */
  layout?: "horizontal" | "vertical"
}

export type CardSelectableContainerProps<T extends CardSelectableValue> =
  | CardSelectableSingleProps<T>
  | CardSelectableMultipleProps<T>
