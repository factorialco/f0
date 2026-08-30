import { F0Icon } from "@/components/F0Icon"
import { Check, ChevronDown } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu"

import { type F0MeetingAction, type F0MeetingLocalSource } from "../../types"

export type MeetingMediaControlProps = {
  /** The mute toggle. Its `pressed` means "the source is OFF". */
  action: F0MeetingAction
  source: F0MeetingLocalSource
  /** Localized name of the picker, e.g. "Select microphone". */
  pickerLabel: string
  compact?: boolean
}

/**
 * Mute toggle and device picker as one control, split by a hairline.
 *
 * This reverses an earlier decision — the picker used to be a separate sibling
 * button, on the grounds that a menu glued to a toggle turns one target into
 * two and the small one wins the misclick. The design asks for the fused pair
 * that every other call product uses, so the mitigation moves into the shape:
 * the toggle half is 52px against the chevron's 36, and they are separated by
 * a real gap in the hit areas rather than only a painted line.
 */
export const MeetingMediaControl = ({
  action,
  source,
  pickerLabel,
  compact = false,
}: MeetingMediaControlProps) => {
  const i18n = useI18n()
  const isOff = Boolean(action.pressed)
  const devices = source.devices ?? []
  const canPick = devices.length > 0 && Boolean(source.selectDevice)
  const icon = isOff && action.activeIcon ? action.activeIcon : action.icon
  const disabled = action.disabled || action.pending

  const height = compact ? "h-8" : "h-10"

  return (
    <div
      className={cn(
        "flex items-stretch overflow-hidden rounded-xl",
        height,
        // Muted is a state you must be able to spot without reading an icon,
        // so it takes the critical surface rather than a generic "on" look.
        isOff
          ? "bg-f1-background-critical text-f1-foreground-critical"
          : "bg-f1-background-secondary text-f1-foreground"
      )}
    >
      <button
        type="button"
        onClick={action.onClick}
        aria-pressed={isOff}
        aria-label={action.label}
        title={action.disabled ? action.disabledReason : action.label}
        disabled={disabled}
        className={cn(
          "flex items-center justify-center transition-colors duration-150 ease-out",
          compact ? "w-10" : "w-[52px]",
          isOff
            ? "hover:bg-f1-background-critical-bold/10"
            : "hover:bg-f1-background-secondary-hover",
          disabled && "cursor-not-allowed opacity-50",
          focusRing()
        )}
      >
        <F0Icon icon={icon} size={compact ? "sm" : "md"} />
      </button>

      {canPick && (
        <>
          <span
            aria-hidden
            className="my-2 w-px shrink-0 bg-f1-border-secondary"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                aria-label={pickerLabel}
                disabled={action.disabled}
                className={cn(
                  "flex items-center justify-center transition-colors duration-150 ease-out",
                  compact ? "w-7" : "w-9",
                  isOff
                    ? "hover:bg-f1-background-critical-bold/10"
                    : "hover:bg-f1-background-secondary-hover",
                  action.disabled && "cursor-not-allowed opacity-50",
                  focusRing()
                )}
              >
                <F0Icon icon={ChevronDown} size="sm" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" side="top">
              {devices.map((device) => (
                <DropdownMenuItem
                  key={device.id}
                  onSelect={() => source.selectDevice?.(device.id)}
                >
                  {/* The check keeps its slot on every row, so the labels stay
                      in one column instead of shifting as the choice moves. */}
                  <span className="flex w-4 shrink-0 justify-center">
                    {device.id === source.selectedDeviceId && (
                      <F0Icon icon={Check} size="sm" />
                    )}
                  </span>
                  {device.isDefault
                    ? `${device.label} · ${i18n.meeting.systemDefault}`
                    : device.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      )}
    </div>
  )
}
