import { DataAttributes } from "@/global.types"
import { withDataTestId } from "@/lib/data-testid"
import { inlineControlBox } from "@/lib/inline-variant"
import { Checkbox as CheckboxRoot } from "@/ui/checkbox"

interface CheckboxBaseProps extends DataAttributes {
  /**
   * The title of the checkbox
   */
  title?: string

  /**
   * A secondary line of text rendered under the title, for context the title
   * cannot carry on its own. Hidden along with the title when `hideLabel` is
   * set, and exposed to assistive technology as the checkbox's description.
   */
  description?: string

  /**
   * The id of the checkbox
   */
  id?: string

  /**
   * The checked state of the checkbox
   * @default false
   */
  checked?: boolean

  /**
   * Whether the checkbox is indeterminate
   * @default false
   */
  indeterminate?: boolean

  /**
   * The callback function that is called when the checkbox is checked
   */
  onCheckedChange?: (checked: boolean) => void

  /**
   * Whether the checkbox is disabled
   * @default false
   */
  disabled?: boolean

  /**
   * The value of the checkbox
   */
  value?: string

  /**
   * Whether to hide the label
   * @default false
   */
  hideLabel?: boolean

  /**
   * Whether the checkbox is only presentational, so it does not have functionality
   * @default false
   */
  presentational?: boolean

  /**
   * Whether the checkbox should stop event propagation
   * @default false
   */
  stopPropagation?: boolean

  /**
   * The name of the checkbox
   */
  name?: string

  /**
   * Whether the checkbox is required
   * @default false
   */
  required?: boolean
}

export type F0CheckboxFieldProps = CheckboxBaseProps & {
  /**
   * @default "field"
   */
  variant?: "field"
  editing?: never
  onDismiss?: never
}

export type F0CheckboxInlineProps = CheckboxBaseProps & {
  /** Fills the detail row without field chrome. */
  variant: "inline"

  /** Toggles commit directly through onCheckedChange and have no edit mode. */
  editing?: never
  onDismiss?: never
}

export type F0CheckboxProps = F0CheckboxFieldProps | F0CheckboxInlineProps

function _F0Checkbox({
  variant = "field",
  // Strip unsupported props from untyped callers before spreading to the DOM.
  editing: _editing,
  onDismiss: _onDismiss,
  title,
  description,
  onCheckedChange,
  id,
  disabled,
  indeterminate = false,
  checked = false,
  value,
  hideLabel = false,
  presentational = false,
  stopPropagation = false,
  name,
  required = false,
  ...rest
}: F0CheckboxProps) {
  const control = (
    <CheckboxRoot
      title={title}
      description={description}
      onCheckedChange={onCheckedChange}
      id={id}
      disabled={disabled}
      indeterminate={indeterminate}
      checked={checked}
      value={value}
      name={name}
      hideLabel={hideLabel}
      required={required}
      tabIndex={presentational ? -1 : undefined}
      onClick={(e) => stopPropagation && e.stopPropagation()}
      {...rest}
    />
  )

  if (variant !== "inline") {
    return control
  }

  return (
    <div data-testid="checkbox-inline-box" className={inlineControlBox}>
      {control}
    </div>
  )
}

export const F0Checkbox = withDataTestId(_F0Checkbox)
