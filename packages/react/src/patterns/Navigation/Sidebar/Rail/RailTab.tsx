import { forwardRef, useCallback, useEffect, useRef, useState } from "react"

import { F0Icon } from "@/components/F0Icon"
import { Circle as CircleIcon } from "@/icons/app"
import { cn, focusRing } from "@/lib/utils"
import { Badge } from "@/ui/IconBadge"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"

import { PRESSABLE_CHIP, PRESSABLE_CHIP_TRIGGER } from "../pressable"
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

/**
 * Long enough that running the cursor down the rail does not flash a panel
 * per module, short enough that aiming at one does not feel gated.
 */
const FLYOUT_OPEN_DELAY = 140
/** Forgiveness for the gap between the chip and the flyout. */
const FLYOUT_CLOSE_DELAY = 200

export type RailTabProps = {
  tab: SidebarTab
  isActive: boolean
  /** The single tab stop of the roving group. */
  isFocusable: boolean
  onSelect: () => void
  onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => void
  /**
   * A second level shown beside the rail instead of in the panel, on hover or
   * on click. A tab with one is a menu, not a destination: selecting it opens
   * the flyout and leaves the module you are in alone.
   */
  flyout?: React.ReactNode
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
  function RailTab(
    { tab, isActive, isFocusable, onSelect, onKeyDown, flyout },
    ref
  ) {
    const [open, setOpen] = useState(false)
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
    // Hover must not take the focus off whatever the user was typing in; a
    // click or Enter must, or the flyout is unreachable from the keyboard.
    const openedByPointer = useRef(false)

    const clearTimer = useCallback(() => {
      if (timer.current) clearTimeout(timer.current)
      timer.current = null
    }, [])

    const schedule = useCallback(
      (next: boolean, delay: number) => {
        clearTimer()
        timer.current = setTimeout(() => {
          openedByPointer.current = next
          setOpen(next)
        }, delay)
      },
      [clearTimer]
    )

    useEffect(() => clearTimer, [clearTimer])

    const hoverProps = flyout
      ? {
          onPointerEnter: (event: React.PointerEvent) => {
            if (event.pointerType === "touch") return
            schedule(true, FLYOUT_OPEN_DELAY)
          },
          onPointerLeave: (event: React.PointerEvent) => {
            if (event.pointerType === "touch") return
            schedule(false, FLYOUT_CLOSE_DELAY)
          },
        }
      : {}

    const button = (
      <button
        ref={ref}
        type="button"
        aria-label={tab.label}
        aria-current={isActive ? "true" : undefined}
        title={tab.label}
        tabIndex={isFocusable ? 0 : -1}
        onClick={
          flyout
            ? () => {
                // Radix's trigger toggles `open`; all this has to do is stop a
                // pending hover timer from undoing it a frame later.
                clearTimer()
                openedByPointer.current = false
              }
            : onSelect
        }
        onKeyDown={onKeyDown}
        {...hoverProps}
        className={cn(
          "group flex w-full cursor-pointer flex-col items-center gap-1 rounded-[10px] py-2",
          focusRing()
        )}
      >
        <span
          className={cn(
            "relative flex size-9 items-center justify-center rounded-lg",
            flyout ? PRESSABLE_CHIP_TRIGGER : PRESSABLE_CHIP,
            isActive
              ? "bg-f1-background-secondary text-f1-icon-bold"
              : "group-hover:bg-f1-background-secondary",
            // An open flyout is the chip being held in: without it the menu
            // hangs off a rail with nothing on it to say where it came from.
            flyout && "group-data-[state=open]:bg-f1-background-secondary"
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

    if (!flyout) return button

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>{button}</PopoverTrigger>
        <PopoverContent
          side="right"
          // Centred on the chip it came out of, not hung from its top edge: a
          // menu that grows from the middle of its trigger stays pointed at it
          // whatever length the catalog happens to be.
          align="center"
          sideOffset={8}
          collisionPadding={8}
          onOpenAutoFocus={(event) => {
            if (openedByPointer.current) event.preventDefault()
          }}
          onPointerEnter={clearTimer}
          onPointerLeave={(event) => {
            if (event.pointerType === "touch") return
            schedule(false, FLYOUT_CLOSE_DELAY)
          }}
          // A dark, translucent sheet — a menu that floats over the page is
          // not part of the page, and the surface is what says so. `dark`
          // rather than an inverse background: it flips every token inside, so
          // the rows that come out of it are the ones the navigation already
          // ships rather than a second, hand-tinted set of them.
          className="dark w-[264px] max-h-[min(36rem,var(--radix-popover-content-available-height))] overflow-y-auto rounded-xl border-solid border-f1-border-secondary bg-f1-background/60 p-2 shadow-xl backdrop-blur-[4px]"
        >
          {flyout}
        </PopoverContent>
      </Popover>
    )
  }
)
