import { ReactNode } from 'react';
import { Transition } from 'motion/react';
/**
 * Home's motion vocabulary. Two separate things happen on this page, and they
 * must not borrow each other's timing:
 *
 * ARRIVAL — the page lands the way it is read. The MAIN column's blocks rise in
 * on a stagger and the SIDE RAIL follows them, because the rail is context and
 * context that arrives with the content it is context for reads as noise.
 *
 * THE GENIE — collapsing the rail must not read as one thing being swapped for
 * another. The cards FADE WHERE THEY STAND while the glyphs slide into the strip
 * over the same beat, so the two states cross over in place rather than one of
 * them being replaced by the other; hovering a glyph then sends that widget back
 * out of the strip's corner. Expanding reverses it: the glyphs slide out as the
 * cards come back up in their column.
 *
 * Every value here is a TRANSFORM or an OPACITY, so the whole gesture is
 * composited: nothing in this file animates a width, a height or an offset. Two
 * exceptions, both of them the LAYOUT ITSELF changing shape rather than
 * something moving through it — the rail's grid column (`railWidthTransition`)
 * and an item's height as it joins or leaves a slot (`HomeSlotItem`).
 */
/** Fast start, soft landing, NO overshoot (Material "emphasized decelerate"). */
export declare const HOME_EASE: [number, number, number, number];
/** For anything that must not animate at all (reduced motion, first paint). */
export declare const INSTANT_TRANSITION: Transition;
/** How long one block takes to arrive. */
export declare const ENTRANCE_MS = 320;
/** How far it rises on the way in — small: this is a settle, not a slide. */
export declare const ENTRANCE_RISE_PX = 10;
/** Gap between consecutive blocks. Rhythm, not a parade. */
export declare const ENTRANCE_STAGGER_MS = 55;
/**
 * Stagger ceiling. Blocks hold their space from the first frame (they arrive at
 * opacity 0, not at zero height), so an uncapped stagger would leave the bottom
 * of a long column blank for over a second. The first ~6 keep the rhythm and
 * the rest land together.
 */
export declare const ENTRANCE_STAGGER_CAP_MS = 330;
/**
 * How long the right area waits for the main one. Long enough that the main
 * column is unmistakably first, short enough that the page still reads as ONE
 * arrival rather than two.
 */
export declare const RIGHT_AREA_DELAY_MS = 220;
/** When the nth block of a stagger starts, in seconds (motion's unit). */
export declare const entranceDelay: (order: number, delayMs?: number) => number;
export declare const entranceTransition: (order: number, delayMs?: number, reducedMotion?: boolean) => Transition;
/**
 * The collapsed strip sits at the rail's top right corner, so that corner is
 * where a widget retracts to and comes back out of. Every genie scale is taken
 * from here — it is the whole reason the two states read as the same widget.
 */
export declare const GENIE_ORIGIN = "top right";
/** How long the column of cards spends shrinking into the strip. */
export declare const GENIE_RETRACT_MS = 180;
/** …and how long a floating widget spends going back in. */
export declare const GENIE_CLOSE_MS = 140;
/**
 * The glyphs start arriving BEFORE the cards have finished retracting: the
 * overlap is what makes it read as a transfer rather than as a sequence of two
 * animations.
 */
export declare const GENIE_GLYPH_DELAY_MS = 90;
/** How small a retracted widget gets before it is gone. */
export declare const GENIE_RETRACTED_SCALE = 0.9;
/** …and how far toward the strip it slides while it shrinks. */
export declare const GENIE_RETRACTED_OFFSET_PX = 10;
/**
 * How far a glyph travels on its way into the strip, and back out of it.
 *
 * The glyphs used to arrive SCALED — from 1.18, as though each one were the card
 * that had just shrunk into it, and out again at 1.3. That reading only held
 * while the cards really were shrinking onto them; now that a card simply fades
 * where it stands (see `WidgetMotion`), a glyph blooming out of nothing was the
 * only thing left on the page still playing the old gesture. What replaces it is
 * a short slide along the axis the column is closing on: the strip arrives as the
 * cards go, and nothing on either side of the swap is drawn at a size it was
 * never designed at.
 *
 * NEGATIVE on the way in — the glyph comes from the cards' side of the rail and
 * settles at its edge — and it leaves the same way.
 */
export declare const GENIE_GLYPH_SLIDE_PX = 8;
/** A glyph whose widget is floating, held slightly forward. */
export declare const GENIE_GLYPH_OPEN_SCALE = 1.06;
/** …and the pointer's own feedback on it, under the open state. */
export declare const GENIE_GLYPH_HOVER_SCALE = 1.08;
export declare const GENIE_GLYPH_TAP_SCALE = 0.94;
/** Coming OUT: physical, with the faintest settle (ζ ≈ 0.82 — no visible bounce). */
export declare const genieOpenTransition: Transition;
/** Going IN: a tween. A spring's overshoot on the way out reads as a bounce. */
export declare const genieCloseTransition: Transition;
/** The glyphs' own arrival — springier than the panel; they are small. */
export declare const glyphTransition: Transition;
/**
 * Moving the OPEN panel from one glyph to the next. It glides rather than cuts,
 * which is what says "same panel, different widget" — and it only ever runs
 * between two glyphs, never on the way out of one (see `NewHomeLayout`).
 */
export declare const geniePanelGlideTransition: Transition;
/**
 * A widget going INTO the strip — the fade it leaves on. It ACCELERATES away — a
 * card being stowed should leave, not be set down — and it has to be gone by the
 * time the strip owns it (`GENIE_RETRACT_MS`), because that is when the column
 * stops drawing it at all.
 */
export declare const stowInTransition: Transition;
/**
 * …and coming back OUT. Still the spring the floating panel uses: the card only
 * fades back in now, but it does it on the beat a widget springs out of a glyph
 * on, so opening the rail and floating one of its widgets stay the same page.
 */
export declare const stowOutTransition: Transition;
/**
 * The rail's grid column, collapsing from its full width to the strip. The one
 * animated LAYOUT value on the page: the main column has to give the space back
 * over the same beat the cards retract over, or the collapse reads as a jump
 * with an animation next to it.
 */
export declare const railWidthTransition: {
    duration: number;
    ease: [number, number, number, number];
};
export declare const withReducedMotion: (transition: Transition, reducedMotion: boolean) => Transition;
/**
 * `value`, but only once it has been true for `delayMs` — and false the INSTANT
 * it turns false.
 *
 * For a presentation change that has to wait for an exit animation to finish:
 * the flag that would cut the animation short (a `hidden`, a reposition) arrives
 * late, while the flag that STARTS one is never delayed. Already-true at mount
 * is not a change, so it is not delayed either.
 */
export declare const useDelayedTrue: (value: boolean, delayMs: number) => boolean;
/**
 * False on mount, true once `delayMs` has passed — for "that moment is over".
 *
 * The mirror of `useDelayedTrue`, which reports a value that has SETTLED; this
 * one reports that a WINDOW has closed, so it must start out false however long
 * the window is.
 */
export declare const useElapsed: (delayMs: number) => boolean;
/** How long the whole arrival takes, from the first block to the last landing. */
export declare const arrivalWindowMs: (delayMs?: number) => number;
export interface HomeEntranceProps {
    /** Position in the stagger. 0 lands first. */
    order?: number;
    /** Milliseconds before the stagger's first block. */
    delayMs?: number;
    /**
     * Whether this block still has an arrival to play. `false` puts it straight
     * where it belongs — for a wrapper that MOUNTS after the page has arrived, which
     * is not the same thing as arriving: entering edit mode re-parents every card
     * (the sortable branch is a different tree), and a wrapper that animated on
     * every mount would replay the whole page's arrival on each toggle.
     *
     * The wrapper still renders either way. Dropping it once the arrival is over
     * would change the tree's shape, and changing shape is what unmounts a render.
     */
    arriving?: boolean;
    /**
     * The wrapped widget's own `fullHeight`. This wrapper becomes the flex item
     * the card used to be, so it has to carry the full-height chain or the card's
     * `h-full` resolves against a box that has no height of its own.
     */
    fullHeight?: boolean;
    className?: string;
    children: ReactNode;
}
/**
 * ONE ITEM COMING OR GOING — a row dismissed, a request that just landed.
 *
 * A widget's items change under the user while they are reading them, and an
 * item that vanishes between two blinks leaves them wondering which one they
 * just lost. The gesture is deliberately small: this is a list correcting
 * itself, not the page announcing something.
 *
 * THE ITEM'S HEIGHT IS ANIMATED, and it is the exception this file's rule names
 * (see the header): everything else here is a transform or an opacity.
 *
 * It has to be. A row that only faded and then vanished gave its space back in
 * ONE FRAME, and everything under it — the rest of the list, the widget's footer
 * button, the card's own bottom edge — snapped up by a row's height while the
 * fade was still settling. Sliding the neighbours with `layout` fixes the rows
 * and nothing else: the footer is not in the list, so it still jumped. Closing
 * the row's own height is the only version where the CARD shrinks continuously,
 * and everything standing on it follows for free.
 *
 * The cost is `overflow: hidden` on every item, which would clip a focus ring
 * drawn outside its element — which is why `HomeListItem`'s is an INSET ring.
 */
export declare const ITEM_ENTER_MS = 220;
export declare const ITEM_EXIT_MS = 140;
/** How far an arriving item rises — half the page's, because it is one row. */
export declare const ITEM_RISE_PX = 5;
/** Coming IN: the page's own ease, at a row's pace. */
export declare const itemEnterTransition: Transition;
/** Going OUT: quicker, and accelerating — a row that leaves should be gone. */
export declare const itemExitTransition: Transition;
/**
 * The row's own height opening and closing. A spring, because this is the
 * movement the eye actually follows — everything below it, the footer button and
 * the card's bottom edge included, rides on it — and a spring is what makes that
 * read as the card SETTLING rather than as a box being resized.
 *
 * No bounce (ζ ≈ 0.87): a card that overshot its new height would draw more
 * attention to the gap than to the row that left it.
 */
export declare const itemSizeTransition: Transition;
/**
 * Past this many items changing at once, the churn animation is NOT what is
 * happening — the list is being replaced.
 *
 * "View more" revealing thirty rows, a filter clearing, a widget's params
 * swapping its whole contents: animating each of those individually is thirty
 * springs on thirty heights (expensive) resolving into one shove of the card
 * (unreadable). The gesture says "this one item changed", so it is only ever
 * spent on a change small enough for that to be true; a bigger one is simply
 * the new list.
 */
export declare const ITEM_CHURN_BULK_AFTER = 4;
/**
 * Whether the item count changed by more than {@link ITEM_CHURN_BULK_AFTER}
 * since the last render — i.e. whether THIS render is a bulk replacement rather
 * than an item coming or going. Feed it to {@link HomeSlotItem}'s `animated`.
 */
export declare const useIsBulkChange: (count: number, threshold?: number) => boolean;
/**
 * The list an item's arrival and departure is animated in. Wrap the items of
 * ANY slot in it — `list` rows, `event-list` events, a bespoke renderer's own —
 * and give each {@link HomeSlotItem} the item's stable id as its key.
 *
 * `initial={false}`: the items already there when the widget mounts have not
 * arrived, they simply are. The widget's own entrance (`HomeEntrance`) is what
 * brings the whole card in; without this every list would replay a row-by-row
 * arrival inside it.
 */
export declare const HomeSlotItems: ({ children }: {
    children: ReactNode;
}) => import("react").JSX.Element;
export interface HomeSlotItemProps {
    className?: string;
    /**
     * `false` puts the item straight where it belongs, with no enter or exit —
     * for a render that is replacing the list rather than changing one item of it
     * (see {@link useIsBulkChange}).
     */
    animated?: boolean;
    children: ReactNode;
}
/**
 * One item inside a {@link HomeSlotItems}. MUST carry the item's stable id as
 * its `key` — that key is the only thing telling the list which items are the
 * same ones between two renders, and a positional key would animate every row
 * below a removal as though it had been replaced.
 */
export declare const HomeSlotItem: ({ className, animated, children, }: HomeSlotItemProps) => import("react").JSX.Element;
/**
 * One block arriving: a fade with a small rise, at its place in the shared
 * stagger. Opacity and transform only, so a column of these costs one
 * composited layer each and no layout.
 */
export declare const HomeEntrance: ({ order, delayMs, arriving, fullHeight, className, children, }: HomeEntranceProps) => import("react").JSX.Element;
