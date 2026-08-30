/** An F0 button at size `md` is a 32px-tall `.main`, and `compact` — which
 * `hideLabel` turns on — leaves an icon-only one square. Both the grid cells
 * and the jump bar are that button, so both are 32×32 and the two rows line up
 * column for column. */
export declare const EMOJI_BUTTON_SIZE = 32;
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
export declare const emojiButtonClass: (isSelected: boolean) => string;
