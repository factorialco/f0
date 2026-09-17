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
  /**
   * `"inline"` is the detail-row presentation: the switch fills the row's box
   * and carries no chrome of its own.
   */
  variant: "inline"

  /**
   * A switch has no separate editor — one click commits through
   * `onCheckedChange` — so there is no edit mode to enter and nothing to
   * dismiss. Both props exist as `never` so a field layer can hand every
   * inline component the same prop bag.
   */
  editing?: never
  onDismiss?: never
}

export type SwitchProps = SwitchFieldProps | SwitchInlineProps

function _Switch({
  variant = "field",
  // Typed `never`, stripped here so a stray prop from an untyped caller never
  // reaches the DOM.
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
