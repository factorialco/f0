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
  /**
   * Drives the switch from the outside instead of from the AI chat context.
   *
   * Passing `onCheckedChange` puts the switch in CONTROLLED mode: `checked` is
   * the state, the handler is the toggle, and the `enabled` gate that normally
   * renders `null` is bypassed — you have already decided it should be there.
   *
   * This exists for surfaces mounted outside `F0AiChatProvider`, where
   * `useAiChat()` silently returns a no-op proxy and the switch would otherwise
   * render nothing with no error. Omit both and nothing changes.
   */
  checked?: boolean
  onCheckedChange?: (open: boolean) => void
}
