import * as SwitchPrimitive from "@radix-ui/react-switch"

/**
 * Props for the F0OneSwitch component
 */
export type F0OneSwitchProps = React.ComponentPropsWithoutRef<
  typeof SwitchPrimitive.Root
> & {
  /** Custom text shown in the tooltip when the chat is closed */
  customTooltip?: string
  /** When true, the tooltip text is shown as a persistent label next to the switch (always in layout, no hover) */
  tooltipAlwaysVisible?: boolean
}
