import { DataAttributes } from "@/global.types"
import { experimentalComponent } from "@/lib/experimental"
import { inlineControlBox } from "@/lib/inline-variant"
import { Switch as SwitchRoot } from "@/ui/switch"

interface SwitchBaseProps extends DataAttributes {
  /**
   * The title of the switch
   */
  title?: string

  /**
   * The id of the switch
   */
  id?: string

  /**
   * The checked state of the switch
   * @default false
   */
  checked?: boolean

  /**
   * The callback function that is called when the switch is toggled
   */
  onCheckedChange?: (checked: boolean) => void

  /**
   * Whether the switch is disabled
   * @default false
   */
  disabled?: boolean

  /**
   * The value of the switch
   */
  value?: string

  /**
   * Whether to hide the label
   * @default false
   */
  hideLabel?: boolean

  /**
   * Whether the switch is only presentational, so it does not have functionality
   * @default false
   */
  presentational?: boolean

  /**
   * Whether the switch is required (must be true)
   * @default false
   */
  required?: boolean
}

export type SwitchFieldProps = SwitchBaseProps & {
  /**
   * @default "field"
   */
  variant?: "field"
  editing?: never
  onDismiss?: never
}

export type SwitchInlineProps = SwitchBaseProps & {
  /** Fills the detail row without field chrome. */
  variant: "inline"

  /** Toggles commit directly through onCheckedChange and have no edit mode. */
  editing?: never
  onDismiss?: never
}

export type SwitchProps = SwitchFieldProps | SwitchInlineProps

function _Switch({
  variant = "field",
  // Strip unsupported props from untyped callers before spreading to the DOM.
  editing: _editing,
  onDismiss: _onDismiss,
  title,
  onCheckedChange,
  id,
  disabled,
  checked = false,
  value,
  hideLabel = false,
  presentational = false,
  required = false,
  ...rest
}: SwitchProps) {
  const control = (
    <SwitchRoot
      title={title}
      onCheckedChange={onCheckedChange}
      id={id}
      disabled={disabled}
      checked={checked}
      value={value}
      hideLabel={hideLabel}
      required={required}
      tabIndex={presentational ? -1 : undefined}
      {...rest}
    />
  )

  if (variant !== "inline") {
    return control
  }

  return (
    <div data-testid="switch-inline-box" className={inlineControlBox}>
      {control}
    </div>
  )
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const Switch = experimentalComponent("Switch", _Switch)
