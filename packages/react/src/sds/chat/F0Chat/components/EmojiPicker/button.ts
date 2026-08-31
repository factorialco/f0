import { cn, focusRing } from "@/lib/utils"

/** An F0 button at size `md` is a 32px-tall `.main`, and `compact` — which
 * `hideLabel` turns on — leaves an icon-only one square. Both the grid cells
 * and the jump bar are that button, so both are 32×32 and the two rows line up
 * column for column. */
export const EMOJI_BUTTON_SIZE = 32

/**
 * The look of an F0 ghost button, replicated rather than imported.
 *
 * `Action` writes `role="button"` onto the element *after* its rest spread, so
 * an F0 button can never be a listbox `option` or a toolbar `tab` — and these
 * are exactly that. Widening the design system's most-used primitive for the
 * picker's sake isn't worth it, so the geometry and the treatment are copied
 * from `@/ui/Action/variants`: `rounded` at `md`, the ghost hover/active
 * surfaces, the inset press shadow, and the small press nudge.
 *
 * Keep it in step with `actionVariants.ghost` if that moves.
 */
export const emojiButtonClass = (isSelected: boolean): string =>
  cn(
    "flex shrink-0 items-center justify-center rounded",
    "bg-transparent text-f1-foreground",
    // One property list rather than `transition-colors` plus
    // `transition-transform`: tailwind-merge treats those as the same key and
    // silently drops the first.
    "transform-gpu transition-[background-color,box-shadow,transform] duration-100",
    "motion-reduce:transition-none motion-reduce:active:transform-none",
    "hover:bg-f1-background-secondary-hover",
    "active:translate-y-px active:scale-[0.97]",
    "active:bg-f1-background-secondary-hover",
    // The picker drives selection from the keyboard, so the selected cell wears
    // the same surface a pressed F0 button does.
    isSelected && "bg-f1-background-secondary-hover",
    focusRing()
  )
