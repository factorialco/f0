import type { F0Field } from "../F0Form/fields/types"

/**
 * Standalone form field props — decoupled from react-hook-form.
 * This is the minimal contract that field renderers need to operate.
 */
export interface FormFieldProps {
  /** Current field value */
  value: unknown
  /** Called when the field value changes */
  onChange: (value: unknown) => void
  /** Called when the field loses focus (used for validation triggers) */
  onBlur: () => void
  /** Field name (defaults to field.id if not provided) */
  name?: string
  /** Ref callback for the underlying input element */
  ref?: React.RefCallback<HTMLElement>
}

export interface F0FormFieldProps {
  /** Field definition (type, label, placeholder, etc.) */
  field: F0Field
  /** Current field value */
  value: unknown
  /** Called when the field value changes */
  onChange: (value: unknown) => void
  /** Called when the field loses focus */
  onBlur?: () => void
  /** Whether the field has an error */
  error?: boolean
  /** Error message to display */
  errorMessage?: string
  /** Whether the field is in a loading/validating state */
  loading?: boolean
  /** Whether the field is required */
  required?: boolean
  /** Whether the field is disabled (overrides field.disabled) */
  disabled?: boolean
  /** Whether to hide the label (useful when label is rendered externally) */
  hideLabel?: boolean
}
