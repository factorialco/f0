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
  /**
   * `"inline"` is the detail-row presentation: the checkbox fills the row's
   * box and carries no chrome of its own.
   */
  variant: "inline"

  /**
   * A checkbox has no separate editor — one click commits through
   * `onCheckedChange` — so there is no edit mode to enter and nothing to
   * dismiss. Both props exist as `never` so a field layer can hand every
   * inline component the same prop bag.
   */
  editing?: never
  onDismiss?: never
}

export type F0CheckboxProps = F0CheckboxFieldProps | F0CheckboxInlineProps

function _F0Checkbox({
  variant = "field",
  // Typed `never`, stripped here so a stray prop from an untyped caller never
  // reaches the DOM.
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
