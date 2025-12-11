import { ButtonToggleSize, F0ButtonToggleProps } from "../F0ButtonToggle"

export type F0ButtonToggleGroupProps = {
  items: Pick<F0ButtonToggleProps, "label" | "icon" | "disabled">[]
  /**
   * The size of the buttons.
   * @default "md"
   */
  size: ButtonToggleSize

  /**
   * Whether multiple selections are allowed.
   * @default false
   */
  multiple: boolean

  /**
   * Whether a selection is required.
   * @default false
   */
  required: boolean
} & (
  | {
      multiple: true
      value: string[]
      onChange: (value: string[]) => void
    }
  | {
      multiple?: false
      value: string
      onChange: (value: string) => void
    }
)
