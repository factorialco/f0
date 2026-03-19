import { IconType } from "@/components/F0Icon"
import { actionSizes } from "@/ui/Action"

export const buttonDropdownVariants = ["default", "outline", "neutral"] as const
export type ButtonDropdownVariant = (typeof buttonDropdownVariants)[number]
export const buttonDropdownSizes = actionSizes
export type ButtonDropdownSize = (typeof buttonDropdownSizes)[number]

export const buttonDropdownModes = ["split", "dropdown"] as const
export type ButtonDropdownMode = (typeof buttonDropdownModes)[number]

export type ButtonDropdownItem<T = string> = {
  /**
   * The value of the item.
   */
  value: T
  /**
   * The label of the item.
   */
  label: string
  /**
   * The icon of the item.
   */
  icon?: IconType
  /**
   * Whether the item is critical.
   * @default false
   */
  critical?: boolean
  /**
   * The description of the item.
   */
  description?: string
}

export type ButtonDropdownGroup<T = string> = {
  label?: string
  items: ButtonDropdownItem<T>[]
}

type F0ButtonDropdownBaseProps<T = string> = {
  /**
   * The size of the button.
   * @default "md"
   */
  size?: ButtonDropdownSize
  /**
   * The items to display in the dropdown.
   */
  items:
    | ButtonDropdownItem<T>[]
    | ButtonDropdownGroup<T>[]
    | ButtonDropdownGroup<T>
  /**
   * The variant of the button.
   * @default "default"
   */
  variant?: ButtonDropdownVariant
  /**
   * The disabled state of the button.
   * @default false
   */
  disabled?: boolean
  /**
   * The loading state of the button.
   * @default false
   */
  loading?: boolean
  /**
   * The tooltip of the button.
   * @default undefined
   */
  tooltip?: string
}

/**
 * Props for split mode (default): a split button where the main button triggers the selected item,
 * and a chevron reveals the remaining items.
 */
type F0ButtonDropdownSplitProps<T = string> = F0ButtonDropdownBaseProps<T> & {
  /**
   * The rendering mode.
   * - "split": (default) Split button — main button triggers the selected item, chevron reveals others.
   * @default "split"
   */
  mode?: "split"
  /**
   * The currently selected value. Defaults to the first item.
   */
  value?: T
  /**
   * Called when the main button or a dropdown item is clicked.
   * @param value The value of the item that was clicked.
   * @param item The item that was clicked.
   */
  onClick: (value: T, item: ButtonDropdownItem<T>) => void
}

/**
 * Props for dropdown mode: a unified button with chevron that opens a dropdown
 * showing all items (with optional descriptions and icons).
 */
type F0ButtonDropdownDropdownProps<T = string> =
  F0ButtonDropdownBaseProps<T> & {
    /**
     * The rendering mode.
     * - "dropdown": Single button with chevron — clicking anywhere opens the dropdown with all items.
     */
    mode: "dropdown"
    /**
     * Optional trigger button label. Customize the label shown on the
     * trigger button independently from the dropdown items.
     * Falls back to the first item's label if not provided.
     */
    trigger?: string
    /**
     * Called when a dropdown item is clicked.
     * @param value The value of the item that was clicked.
     * @param item The item that was clicked.
     */
    onClick: (value: T, item: ButtonDropdownItem<T>) => void
  }

export type F0ButtonDropdownProps<T = string> =
  | F0ButtonDropdownSplitProps<T>
  | F0ButtonDropdownDropdownProps<T>
