/**
 * Props for the F0Checkbox component.
 */
export interface F0CheckboxProps {
  /**
   * Whether the checkbox is checked.
   * @default false
   */
  checked?: boolean

  /**
   * Whether the checkbox is in an indeterminate state.
   * Takes visual precedence over `checked` when true.
   * @default false
   */
  indeterminate?: boolean

  /**
   * Callback fired when the user toggles the checkbox.
   * Receives the new checked value (always `true`/`false`, never indeterminate).
   */
  onValueChange?: (checked: boolean) => void

  /**
   * Whether the checkbox is disabled.
   * @default false
   */
  disabled?: boolean

  /**
   * Accessible label for the checkbox.
   * Required for screen-reader support when `hideLabel` is true or no visible label is shown.
   */
  label?: string

  /**
   * When true, the label text is visually hidden but remains accessible to screen readers.
   * @default false
   */
  hideLabel?: boolean

  /**
   * Test ID for automated testing.
   */
  testID?: string
}
