import { IconType } from "@/components/F0Icon"

export const buttonToggleSizes = ["sm", "md", "lg"] as const
export type ButtonToggleSize = (typeof buttonToggleSizes)[number]

export interface F0ButtonToggleProps {
  /**
   * Whether the button is in selected/active state.
   */
  selected?: boolean
  /**
   * Callback fired when the button is selected.
   */
  onSelectedChange?: (selected: boolean) => void
  /**
   * The accessible label for the button.
   */
  label: string
  /**
   * Whether the button is disabled.
   */
  disabled?: boolean
  /**
   * The icon to display in the button. Can be a single icon or an array of two icons the first for the non-selected state and the second for the selected state.
   */
  icon: IconType | [IconType, IconType]
  /**
   * The size of the button.
   * @default "md"
   */
  size?: ButtonToggleSize
}
