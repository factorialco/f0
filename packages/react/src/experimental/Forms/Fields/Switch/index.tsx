import { DataAttributes } from "@/global.types"
import { experimentalComponent } from "@/lib/experimental"
import { Switch as SwitchRoot } from "@/ui/switch"

interface SwitchProps extends DataAttributes {
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
}

function _Switch({
  title,
  onCheckedChange,
  id,
  disabled,
  checked = false,
  value,
  hideLabel = false,
  presentational = false,
  ...rest
}: SwitchProps) {
  return (
    <SwitchRoot
      title={title}
      onCheckedChange={onCheckedChange}
      id={id}
      disabled={disabled}
      checked={checked}
      value={value}
      hideLabel={hideLabel}
      tabIndex={presentational ? -1 : undefined}
      {...rest}
    />
  )
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const Switch = experimentalComponent("Switch", _Switch)
