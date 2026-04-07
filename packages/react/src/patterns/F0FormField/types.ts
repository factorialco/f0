import type { InitialFile } from "@/patterns/F0Form/fields/file/types"
import type { F0Field, F0FileField } from "@/patterns/F0Form/fields/types"
import type { InputFieldStatus } from "@/ui/InputField/types"

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

interface F0FormFieldCommonProps {
  /** Field definition (type, label, placeholder, etc.) */
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
  /** Field status for warning/info/error/default messages */
  status?: InputFieldStatus
  /** Whether the field is in a loading/validating state */
  loading?: boolean
  /** Whether the field is required */
  required?: boolean
  /** Whether the field is disabled (overrides field.disabled) */
  disabled?: boolean
  /** Whether to hide the label (useful when label is rendered externally) */
  hideLabel?: boolean
}

export interface F0FormFieldFileProps extends F0FormFieldCommonProps {
  /** File field definition */
  field: F0FileField
  /** Shared pool of pre-existing file metadata for standalone file fields */
  initialFiles?: InitialFile[]
}

export interface F0FormFieldNonFileProps extends F0FormFieldCommonProps {
  /** Non-file field definition */
  field: Exclude<F0Field, F0FileField>
  /** Only supported for file fields */
  initialFiles?: never
}

export type F0FormFieldProps = F0FormFieldFileProps | F0FormFieldNonFileProps
