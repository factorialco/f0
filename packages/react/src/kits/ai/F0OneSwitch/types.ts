import * as SwitchPrimitive from "@radix-ui/react-switch"

/**
 * Props for the F0OneSwitch component
 */
export type F0OneSwitchProps = React.ComponentPropsWithoutRef<
  typeof SwitchPrimitive.Root
> & {
  /** Callback when the switch is visible */
  onVisible?: () => void
  /** Callback when the switch is toggled */
  onToggle?: () => void
  /** Custom text shown in the tooltip when the chat is closed */
  tooltip?: { whenDisabled?: string; whenEnabled?: string }
  /** When true, the tooltip is opened automatically for 3 seconds*/
  autoOpen?: boolean
}
