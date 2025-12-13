import {
  ButtonToggleSize,
  ButtonToggleVariant,
  F0ButtonToggleProps,
} from "../F0ButtonToggle"

export type F0ButtonToggleGroupItem = Pick<
  F0ButtonToggleProps,
  "label" | "icon" | "disabled"
> & {
  value: string
}

export type F0ButtonToggleGroupProps = {
  items: F0ButtonToggleGroupItem[]
  /**
   * The size of the buttons.
   * @default "md"
   */
  size?: ButtonToggleSize

  /**
   * Whether multiple selections are allowed.
   * @default false
   */

  /**
   * The variant of the buttons.
   * @default "compact"
   * "expanded" - The buttons will be expanded to show the label.
   * "compact" - The buttons will be compact and only show the icon.
   */
  variant?: ButtonToggleVariant

  /**
   * Whether a selection is required.
   * @default false
   */
  required?: boolean

  /**
   * Whether all items are disabled.
   * @default false
   */
  disabled?: boolean
} & (
  | {
      multiple: true
      value?: string[]
      onChange?: (value: string[]) => void
    }
  | {
      multiple?: false
      value?: string
      onChange?: (value: string) => void
    }
)
