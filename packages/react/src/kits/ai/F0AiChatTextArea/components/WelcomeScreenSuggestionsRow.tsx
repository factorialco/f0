import {
  type MouseEvent,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { F0Icon } from "@/components/F0Icon"
import { ArrowUp } from "@/icons/app"
import { useReducedMotion } from "@/lib/a11y"
import { focusRing } from "@/lib/utils"
import { cn } from "@/lib/utils"
import { Popover, PopoverAnchor, PopoverContent } from "@/ui/popover"

import type {
  WelcomeScreenSuggestion,
  WelcomeScreenSuggestionItem,
} from "../../F0AiChat/types"

const MAX_ITEMS_PER_GROUP = 5

// Suggestion-item marquee tuning. The reveal is speed-based, not
// fixed-duration, so short and long overflows scroll at the same visual pace
// across a mixed list.
const SUGGESTION_SCROLL_SPEED = 46 // px/s, constant (linear)
const SUGGESTION_SCROLL_DELAY = 400 // ms hold before the reveal starts
const SUGGESTION_TRAILING_GAP = 16 // px — the tail stops short of the trailing edge
const SUGGESTION_FADE = 16 // px — leading-edge fade width once scrolling

function pickRandomItems(
  list: WelcomeScreenSuggestionItem[],
  amount: number = MAX_ITEMS_PER_GROUP
): WelcomeScreenSuggestionItem[] {
  if (list.length <= amount) return list
  return [...list].sort(() => 0.5 - Math.random()).slice(0, amount)
}

export type WelcomeScreenSuggestionsRowProps = {
  suggestions: WelcomeScreenSuggestion[]
  /**
   * Fired when the user picks a sub-suggestion. Receives the picked `item`
   * AND its parent `group` so callers (tracking, analytics) can attribute
   * the click to the full path the user took.
   */
  onItemClick: (
    item: WelcomeScreenSuggestionItem,
    group: WelcomeScreenSuggestion
  ) => void
  /**
   * Fires while the user hovers an item (passes the item) and when the
   * hover ends (passes null). Used to preview the item's prompt as the
   * textarea placeholder.
   */
  onItemHover?: (item: WelcomeScreenSuggestionItem | null) => void
  /**
   * Side the popover opens towards. Defaults to "top" — the row sits above the
   * textarea, so the popover opens upward into the empty space rather than
   * covering the composer. "bottom" remains available for layouts that place
   * the row below the textarea.
   */
  side?: "top" | "bottom"
  /**
   * Reserve height for two chip rows so a suggestion-set swap that wraps 1↔2
   * rows cannot shift the layout above the row.
   *
   * True for the row standing above the composer, where the reservation is
   * free — it sits in the empty space the welcome screen already has. False
   * when the row is rendered INSIDE the field: there the reservation is not
   * free, it is 72px of permanent dead height inside a bordered box, and the
   * field grows and shrinks with its own text anyway.
   *
   * @default true
   */
  reserveTwoRows?: boolean
}

/**
 * Group buttons + shared popover that lives next to the textarea on the
 * welcome screen. A single Popover, anchored to the row container so its
 * content spans the full textarea width and always opens above-left.
 */
export const WelcomeScreenSuggestionsRow = ({
  suggestions,
  onItemClick,
  onItemHover,
  side = "top",
  reserveTwoRows = true,
}: WelcomeScreenSuggestionsRowProps) => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)
  const rowRef = useRef<HTMLDivElement>(null)
  const lastTriggerRef = useRef<HTMLElement | null>(null)
  const shouldRestoreFocusRef = useRef(false)
  const popoverContentId = useId()
  const popoverHeadingId = useId()
  const activeGroup = activeIdx !== null ? suggestions[activeIdx] : null

  if (suggestions.length === 0) return null

  return (
    <Popover
      open={activeGroup !== null}
      onOpenChange={(next) => {
        if (!next) {
          setActiveIdx(null)
          onItemHover?.(null)
        }
      }}
    >
      {/* min-h reserves two chip rows (2 × h-8 + gap-2) so a suggestion-set
          swap that wraps 1↔2 rows cannot shift the layout above it. The
          reservation lives on this outer box and NOT on the anchor: Radix
          positions the popover off the anchor's border box, so anchoring the
          reserved height would float a single-row popover ~40px above the
          chips it belongs to. See `reserveTwoRows` for why the inside
          placement opts out. */}
      <div
        className={cn(
          "flex w-full items-end",
          reserveTwoRows && "min-h-[72px]"
        )}
      >
        <PopoverAnchor asChild>
          <div
            ref={rowRef}
            className="flex w-full flex-wrap items-center gap-2"
          >
            {/* Plain buttons, NOT `PopoverTrigger`s: Radix registers a single
                trigger per popover (the last one mounted), whose built-in
                toggle fires after the button's own onClick and overwrites the
                group selection — so switching to the last group closed the
                popover instead. The buttons fully own the toggle/switch
                semantics. */}
            {suggestions.map((group, index) => (
              <ButtonInternal
                key={`${group.label}-${index}`}
                // The `inside` placement mounts this row within the composer's
                // <form>, where a button's implicit `type="submit"` submits it —
                // and the submit handler refocuses the textarea, which Radix
                // takes as an outside interaction and closes the popover the
                // same click just opened.
                type="button"
                variant="outline"
                label={group.label}
                icon={group.icon}
                pressed={activeIdx === index}
                aria-haspopup="dialog"
                aria-expanded={activeIdx === index}
                aria-controls={
                  activeIdx === index ? popoverContentId : undefined
                }
                onClick={(event) => {
                  lastTriggerRef.current = event.currentTarget
                  shouldRestoreFocusRef.current = false
                  setActiveIdx((current) => (current === index ? null : index))
                  onItemHover?.(null)
                }}
              />
            ))}
          </div>
        </PopoverAnchor>
      </div>
      {activeGroup && (
        <PopoverContent
          side={side}
          align="start"
          sideOffset={8}
          id={popoverContentId}
          aria-labelledby={popoverHeadingId}
          onOpenAutoFocus={(e) => e.preventDefault()}
          onCloseAutoFocus={(event) => {
            event.preventDefault()
            if (shouldRestoreFocusRef.current) {
              lastTriggerRef.current?.focus()
            }
            shouldRestoreFocusRef.current = false
          }}
          onEscapeKeyDown={() => {
            shouldRestoreFocusRef.current = true
          }}
          onPointerDownOutside={(event) => {
            // Group-button clicks own the open/switch/close semantics; letting
            // the popover also dismiss on the same pointerdown would race the
            // click and close it before the switch lands.
            const target = event.target as Node | null
            if (target && rowRef.current?.contains(target)) {
              event.preventDefault()
            } else {
              shouldRestoreFocusRef.current = false
            }
          }}
          className={cn(
            "flex flex-col gap-1 rounded-md border border-solid border-f1-border-secondary bg-f1-background p-2",
            "w-[var(--radix-popover-trigger-width)]"
          )}
        >
          <div
            id={popoverHeadingId}
            className="flex items-center gap-1.5 p-2 pb-1 text-sm font-medium text-f1-foreground-secondary"
          >
            <F0Icon aria-hidden icon={activeGroup.icon} size="sm" />
            <span>{activeGroup.label}</span>
          </div>
          <div className="flex flex-col">
            {pickRandomItems(activeGroup.items).map((item, index) => (
              <SuggestionItem
                key={index}
                item={item}
                onHover={onItemHover}
                onSelect={(event) => {
                  onItemClick(item, activeGroup)
                  shouldRestoreFocusRef.current =
                    document.activeElement === event.currentTarget
                  setActiveIdx(null)
                  onItemHover?.(null)
                }}
              />
            ))}
          </div>
        </PopoverContent>
      )}
    </Popover>
  )
}

type SuggestionItemProps = {
  item: WelcomeScreenSuggestionItem
  onSelect: (event: MouseEvent<HTMLButtonElement>) => void
  onHover?: (item: WelcomeScreenSuggestionItem | null) => void
}

/**
 * A single suggestion inside the popover. The title is truncated with an
 * ellipsis; on hover/focus it holds for {@link SUGGESTION_SCROLL_DELAY}ms and
 * then reveals the hidden tail with a one-way marquee — the label scrolls left
 * at a constant {@link SUGGESTION_SCROLL_SPEED} until the tail clears (stopping
 * {@link SUGGESTION_TRAILING_GAP}px short of the edge), with the leading edge
 * fading as it moves. It does NOT loop and does NOT animate back: on leave it
 * snaps to the start instantly.
 *
 * The reveal is driven imperatively (transform + mask) rather than via CSS
 * classes because the scroll distance and duration depend on the measured
 * overflow, which is only known at runtime. Pointer/focus handlers live on the
 * button (not the label) so the cursor drifting onto the arrow doesn't reset
 * the reveal mid-scroll.
 *
 * Accessibility: honours `prefers-reduced-motion` (static truncation, no
 * marquee) and treats keyboard focus like hover. The full title is the button's
 * text content, so it stays available to assistive tech regardless of the
 * visual truncation.
 */
function SuggestionItem({ item, onSelect, onHover }: SuggestionItemProps) {
  const wrapRef = useRef<HTMLSpanElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const timerRef = useRef<number | null>(null)
  const reduceMotion = useReducedMotion()

  const stopScroll = useCallback(() => {
    if (timerRef.current != null) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    const text = textRef.current
    const wrap = wrapRef.current
    // Instant return — no animated slide-back.
    if (text) {
      text.style.transition = "none"
      text.style.transform = "translateX(0)"
      text.style.overflow = ""
    }
    if (wrap) {
      wrap.style.removeProperty("mask-image")
      wrap.style.removeProperty("-webkit-mask-image")
    }
  }, [])

  const startScroll = useCallback(() => {
    if (reduceMotion) return
    timerRef.current = window.setTimeout(() => {
      const text = textRef.current
      const wrap = wrapRef.current
      if (!text || !wrap) return
      const overflow = text.scrollWidth - text.clientWidth
      if (overflow <= 0) return // fits — nothing hidden to reveal
      const distance = overflow + SUGGESTION_TRAILING_GAP
      const duration = (distance / SUGGESTION_SCROLL_SPEED) * 1000
      // Let the label spill past its own box so translating reveals the tail
      // (the wrapper still clips), and fade the leading edge as it moves.
      text.style.overflow = "visible"
      const fade = `linear-gradient(90deg, transparent 0, #000 ${SUGGESTION_FADE}px)`
      wrap.style.setProperty("mask-image", fade)
      wrap.style.setProperty("-webkit-mask-image", fade)
      text.style.transition = `transform ${duration}ms linear`
      text.style.transform = `translateX(-${distance}px)`
    }, SUGGESTION_SCROLL_DELAY)
  }, [reduceMotion])

  const activate = useCallback(() => {
    onHover?.(item)
    startScroll()
  }, [item, onHover, startScroll])

  const deactivate = useCallback(() => {
    onHover?.(null)
    stopScroll()
  }, [onHover, stopScroll])

  // Clear a pending reveal timer if the item unmounts (e.g. the popover closes)
  // mid-hold.
  useEffect(
    () => () => {
      if (timerRef.current != null) clearTimeout(timerRef.current)
    },
    []
  )

  return (
    <button
      type="button"
      onClick={onSelect}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      onFocus={activate}
      onBlur={deactivate}
      className={cn(
        "group flex items-center justify-between gap-2 rounded-sm px-2 py-2 text-left text-base font-medium text-f1-foreground transition-colors hover:bg-f1-background-hover focus-visible:bg-f1-background-hover",
        focusRing()
      )}
    >
      <span ref={wrapRef} className="min-w-0 flex-1 overflow-hidden">
        <span ref={textRef} className="block w-full truncate">
          {item.title}
        </span>
      </span>
      <span
        aria-hidden
        className="flex flex-shrink-0 items-center text-f1-foreground-secondary opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        <F0Icon icon={ArrowUp} size="sm" />
      </span>
    </button>
  )
}
