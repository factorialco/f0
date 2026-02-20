import * as SwitchPrimitive from "@radix-ui/react-switch"

/**
 * Props for the F0OneSwitch component
 */
export type F0OneSwitchProps = React.ComponentPropsWithoutRef<
  typeof SwitchPrimitive.Root
> & {
  /** Custom text shown in the tooltip when the chat is closed */
  tooltip?: string
  /** When true, the tooltip is opened automatically for 3 seconds*/
  autoOpen?: boolean
}
