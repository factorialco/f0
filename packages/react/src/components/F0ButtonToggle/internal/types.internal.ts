import { IconType } from "@/components/F0Icon"
import { AllOrNone } from "@/lib/typescript-utils/allOrNone"
import { ButtonToggleSize, ButtonToggleVariant } from "../types"

export type F0ButtonToggleInternalProps = {
  /**
   * The accessible label for the button.
   */
  label: string | [string, string]
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

  /**
   * The variant of the button.
   * @default "compact"
   * "default" - The button will only show the icon.
   * "with-label" - The button will show the icon and the label.
   */
  variant?: ButtonToggleVariant

  /**
   * @private
   * Whether to show a border around the button toggle.
   */
  withBorder?: boolean
} & AllOrNone<{
  selected: boolean
  onSelectedChange: (selected: boolean) => void
}> & {
    selected?: undefined
    onSelectedChange?: undefined
    defaultSelected?: boolean
  }
