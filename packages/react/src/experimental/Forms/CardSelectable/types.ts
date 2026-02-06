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
  /** Whether this item is required (shows asterisk indicator) */
  required?: boolean
}

export interface CardSelectableSingleProps<T extends CardSelectableValue> {
  /** List of selectable items */
  items: CardSelectableItem<T>[]
  /** Single selection mode (default) */
  multiple?: false
  /** Currently selected value */
  value?: T
  /** Callback when selection changes (receives undefined when isToggle and toggling off) */
  onChange?: (value: T | undefined) => void
  /** Whether the entire selector is disabled */
  disabled?: boolean
  /** Label for the group (used for accessibility) */
  label?: string
  /** Layout direction (default: vertical) */
  layout?: "vertical" | "horizontal"
  /** When true, shows a toggle/switch indicator instead of radio and allows toggling off */
  isToggle?: boolean
  /** When true, items are grouped in a single bordered container with dividers */
  grouped?: boolean
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
  /** Label for the group (used for accessibility) */
  label?: string
  /** Layout direction (default: vertical) */
  layout?: "vertical" | "horizontal"
  /** When true, shows a toggle/switch indicator instead of checkbox */
  isToggle?: boolean
  /** When true, items are grouped in a single bordered container with dividers */
  grouped?: boolean
}

export type CardSelectableContainerProps<T extends CardSelectableValue> =
  | CardSelectableSingleProps<T>
  | CardSelectableMultipleProps<T>
