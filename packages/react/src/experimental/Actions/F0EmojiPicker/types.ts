export const f0EmojiPickerSizes = ["sm", "md", "lg"] as const

export type F0EmojiPickerSize = (typeof f0EmojiPickerSizes)[number]

export interface F0EmojiPickerProps {
  /**
   * Accessible label and tooltip for the trigger button.
   */
  label: string
  /**
   * Selected emoji. Use with `onChange` to control the component.
   */
  value?: string | null
  /**
   * Initially selected emoji when the component is uncontrolled.
   */
  defaultValue?: string | null
  /**
   * Called with the selected emoji, or `null` when cleared.
   */
  onChange?: (emoji: string | null) => void
  /**
   * Allows clearing the selected emoji from the picker.
   */
  clearable?: boolean
  /**
   * Prevents opening the picker and changing the selected emoji.
   */
  disabled?: boolean
  /**
   * Locale used by the search and category labels in the picker.
   */
  locale?: string
  /**
   * Size of the trigger avatar.
   */
  size?: F0EmojiPickerSize
}
