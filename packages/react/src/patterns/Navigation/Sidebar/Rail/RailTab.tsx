import { forwardRef } from "react"

import { F0Icon } from "@/components/F0Icon"
import { Circle as CircleIcon } from "@/icons/app"
import { cn, focusRing } from "@/lib/utils"
import { Badge } from "@/ui/IconBadge"

import type { SidebarTab } from "../Tabs"

/**
 * Press feedback for the rail's bespoke buttons: a 0.97 scale on the same
 * ease-out every pressable surface in the product uses, dropped entirely under
 * reduced motion.
 *
 * It goes on the CHIP, not on the button, and reads the button's `group`:
 * scaling the whole item drags the label in with it, and a word sliding a
 * pixel and a half toward its icon is the kind of movement you notice without
 * being able to say what moved. The chip is the thing being pressed.
 */
export const PRESS =
  "transition-[background-color,transform] duration-150 ease-out group-active:scale-[0.97] motion-reduce:transition-none motion-reduce:group-active:scale-100"

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
 * One module in the rail: a 36px icon chip with an 11px label under it.
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
          "group flex w-full cursor-pointer flex-col items-center gap-1 rounded-[10px] py-2",
          focusRing()
        )}
      >
        <span
          className={cn(
            "relative flex size-9 items-center justify-center rounded-lg",
            PRESS,
            isActive
              ? "bg-f1-background-secondary text-f1-icon-bold"
              : "group-hover:bg-f1-background-secondary"
          )}
        >
          <F0Icon
            icon={isActive && tab.activeIcon ? tab.activeIcon : tab.icon}
            size="lg"
            color={isActive ? "currentColor" : "default"}
          />
          {!!tab.badge && <UnreadDot />}
        </span>
        {/* Wrapped, never hidden. Unlike the horizontal row there is nothing
            to measure: 68px is 68px whatever the translation says, and a
            German or Finnish module name will not fit on one line at any
            width we would accept for a rail. So it wraps, hyphenating where
            the language allows it, and only past the third line does it give
            up and ellipses — by then the item is 100px tall and the label has
            stopped being a label. The full one is in the title and in the
            accessible name either way.

            `hyphens` rather than `break-words`: a forced break wins over
            hyphenation in Blink, so asking for both is asking for neither and
            "Comunicaciones" splits as "Comunicaci|ones" with nothing to say it
            was cut. Hyphenation reads the nearest `lang`, which the app sets
            on <html> — a story that shows translated copy under `lang="en"`
            is reading the wrong dictionary, not a broken label. */}
        <span className="line-clamp-3 w-full hyphens-auto px-0.5 text-center text-[11px] font-semibold leading-3 text-f1-foreground-secondary">
          {tab.label}
        </span>
      </button>
    )
  }
)
