import * as SwitchPrimitive from "@radix-ui/react-switch"

/**
 * Props for the F0OneSwitch component
 */
export type F0OneSwitchProps = React.ComponentPropsWithoutRef<
  typeof SwitchPrimitive.Root
> & {
  /** Callback when the switch is visible */
  onVisible?: () => void
  /** Callback when the switch is clicked */
  onClick?: () => void
}
