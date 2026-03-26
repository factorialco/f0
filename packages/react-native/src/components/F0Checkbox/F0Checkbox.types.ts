/**
 * Props for the F0Checkbox component.
 */
export interface F0CheckboxProps {
  /**
   * Whether the checkbox is checked.
   *
   * When provided, the component operates in **controlled** mode — the parent
   * owns the state and must update this prop in response to `onValueChange`.
   *
   * When omitted, the component operates in **uncontrolled** mode and manages
   * its own internal state (starts unchecked).
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
   * Visible label text rendered next to the checkbox.
   */
  label?: string

  /**
   * Accessible name for screen readers.
   * Required when `hideLabel` is true or no `label` is provided.
   * Falls back to `label` when omitted.
   */
  accessibilityLabel?: string

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
