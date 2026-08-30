import { F0Button } from "@/components/F0Button"
import { F0ButtonToggle } from "@/components/F0ButtonToggle"

import { type F0MeetingAction } from "../../types"

export type MeetingActionButtonProps = {
  action: F0MeetingAction
  compact?: boolean
}

/**
 * Renders one action with the design system's own controls rather than a
 * bespoke button: toggles get {@link F0ButtonToggle}'s dual icon, everything
 * else is an {@link F0Button}. Both already derive a tooltip from `label` when
 * it is visually hidden, so the bar needs no tooltip plumbing of its own.
 */
export const MeetingActionButton = ({
  action,
  compact = false,
}: MeetingActionButtonProps) => {
  const size = compact ? "sm" : "md"
  // A disabled control explains itself: without the reason it is a dead end for
  // anyone who cannot see the state that caused it.
  const tooltip =
    action.disabled && action.disabledReason
      ? action.disabledReason
      : action.shortcut
        ? { label: action.label, description: action.shortcut }
        : undefined

  // Anything with an on/off state is a toggle, so it gets the real toggle
  // control and its `aria-pressed`, not a button styled to look active.
  if (action.pressed !== undefined) {
    return (
      <F0ButtonToggle
        // For mic and camera `pressed` means "the source is off", so the
        // selected half of the pair is the negative glyph.
        selected={action.pressed}
        onSelectedChange={() => action.onClick?.()}
        icon={
          action.activeIcon ? [action.icon, action.activeIcon] : action.icon
        }
        label={action.label}
        disabled={action.disabled || action.pending}
        size={size}
        variant="compact"
      />
    )
  }

  // Hanging up is the one action that carries its label. It is irreversible and
  // it is the only red control in the bar, so it should not depend on reading a
  // glyph — the design gives it a wider, labelled button for exactly that.
  if (action.variant === "critical") {
    return (
      <F0Button
        variant="critical"
        size={size}
        label={action.label}
        disabled={action.disabled}
        loading={action.pending}
        onClick={action.onClick}
      />
    )
  }

  return (
    <F0Button
      variant="ghost"
      size={size}
      hideLabel
      icon={action.icon}
      label={action.label}
      tooltip={tooltip}
      disabled={action.disabled}
      loading={action.pending}
      onClick={action.onClick}
    />
  )
}
