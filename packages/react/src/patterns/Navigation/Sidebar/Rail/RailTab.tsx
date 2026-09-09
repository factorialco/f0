import { forwardRef } from "react"

import { F0Icon } from "@/components/F0Icon"
import { Circle as CircleIcon } from "@/icons/app"
import { cn, focusRing } from "@/lib/utils"
import { Badge } from "@/ui/IconBadge"

import type { SidebarTab } from "../Tabs"

/**
 * Unread marker over the icon box's top-right. The same `Badge` the footer's
 * bell uses, inside a halo the colour of the rail so it reads as a sticker on
 * the icon rather than a dot floating beside it.
 */
const UnreadDot = () => (
  <span
    aria-hidden="true"
    className="absolute -right-1 -top-1 rounded-full bg-f1-background"
  >
    <Badge type="highlight" size="sm" icon={CircleIcon} />
  </span>
)

export type RailTabProps = {
  tab: SidebarTab
  isActive: boolean
  /** The single tab stop of the roving group. */
  isFocusable: boolean
  onSelect: () => void
  onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => void
}

/**
 * One module in the rail: a 32px icon box with a 9px label under it.
 *
 * The selection is the icon box's background, not a pill spanning the whole
 * button — the label belongs to the module either way, so highlighting it too
 * would read as two selected things. `aria-current` rather than `aria-pressed`:
 * this is which module you are in, not a control you have switched on.
 */
export const RailTab = forwardRef<HTMLButtonElement, RailTabProps>(
  function RailTab({ tab, isActive, isFocusable, onSelect, onKeyDown }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        aria-label={tab.label}
        aria-current={isActive ? "true" : undefined}
        title={tab.label}
        tabIndex={isFocusable ? 0 : -1}
        onClick={onSelect}
        onKeyDown={onKeyDown}
        className={cn(
          "group flex w-full cursor-pointer flex-col items-center gap-0.5 rounded-[10px]",
          focusRing()
        )}
      >
        <span
          className={cn(
            "relative flex size-8 items-center justify-center rounded-[10px] transition-colors",
            isActive
              ? "bg-f1-background-secondary"
              : "group-hover:bg-f1-background-secondary"
          )}
        >
          <F0Icon icon={tab.icon} size="md" color="default" />
          {!!tab.badge && <UnreadDot />}
        </span>
        {/* Truncated, never hidden. Unlike the horizontal row there is nothing
            to measure: 48px is 48px whatever the translation says, so a long
            label can only ever be cut — and the full one is in the title and
            in the accessible name. */}
        <span className="w-full truncate text-center text-[9px] font-medium leading-3 text-f1-foreground-secondary">
          {tab.label}
        </span>
      </button>
    )
  }
)
