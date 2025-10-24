import { IconType } from "@/components/F0Icon"
import { actionSizes } from "@/ui/Action"

export const buttonDropdownVariants = ["default", "outline", "neutral"] as const
export type ButtonDropdownVariant = (typeof buttonDropdownVariants)[number]
export const buttonDropdownSizes = actionSizes
export type ButtonDropdownSize = (typeof buttonDropdownSizes)[number]

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

export type F0ButtonDropdownProps<T = string> = {
  /**
   * The size of the button.
   * @default "md"
   */
  size?: ButtonDropdownSize
  /**
   * The items to display in the dropdown.
   */
  items: ButtonDropdownItem<T>[]
  /**
   * The variant of the button.
   * @default "default"
   */
  variant?: ButtonDropdownVariant
  /**
   * The value of the button.
   */
  value?: T
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
  /**
   * The callback function to be called when the button is clicked.
   * @param value The value of the item that was clicked.
   * @param item The item that was clicked.
   */
  onClick: (value: T, item: ButtonDropdownItem<T>) => void
}
