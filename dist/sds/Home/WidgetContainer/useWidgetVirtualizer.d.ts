/**
 * VIRTUALIZATION — what a column does when it has more widgets than a screen.
 *
 * A widget is not a row: it is a card with its own data, its own chart, its own
 * list of rows inside it. A hundred of them mounted is a hundred fetches, a
 * hundred charts laid out and a DOM the browser spends every frame on, and all
 * but the three you can see are work nobody asked for. So a virtualized column
 * mounts ONLY the widgets in view (plus `overscan` past each edge) and holds the
 * space of the rest open, so the scrollbar still describes the whole column.
 *
 * WHAT IT COSTS, and why it is opt-in rather than the default:
 *
 * - A widget that scrolls out is UNMOUNTED. Whatever it had loaded, timed or
 *   animated is gone, and it starts again when it comes back — the opposite of
 *   what the collapsed rail is built to guarantee. For a column of a few widgets
 *   that trade is a bad one, which is what `threshold` is for.
 * - Dragging still reorders correctly, but only the widgets that are MOUNTED
 *   shuffle out of the way as you go: dnd-kit can't move a card that isn't
 *   there. The dragged card itself is pinned into the DOM for the whole gesture.
 * - `fullHeight` means nothing here. A virtualized column's height is the sum of
 *   its cards, so there is no column height for a card to fill.
 */
export interface WidgetVirtualization {
    /**
     * Below this many widgets the column simply renders them all. Defaults to 12.
     */
    threshold?: number;
    /** First guess at a card's height in px, before it is measured. */
    estimateHeight?: number;
    /** How many cards stay mounted past each edge of the viewport. */
    overscan?: number;
    /**
     * The scroll region to virtualize against. Defaults to the column's nearest
     * scrollable ancestor — pass it when you already have the element (it saves
     * the walk, and it is exact).
     */
    scrollElement?: HTMLElement | null;
}
/** Where one on-screen widget goes, and how much room it takes. */
export interface WidgetPlacement {
    /** Its index in the column's full list of widgets. */
    index: number;
    /** Its offset from the top of the list element, in px. */
    start: number;
}
export interface WidgetVirtualizer {
    /** Goes on the element that holds the widgets. */
    listRef: (node: HTMLDivElement | null) => void;
    /**
     * The widgets to mount and where to put them — or `null`, meaning render
     * every widget in normal flow (not virtualized, paused, below the threshold,
     * or no scroll region to be clipped to).
     */
    window: {
        placements: WidgetPlacement[];
        /** The height the whole column would be, cards not mounted included. */
        totalSize: number;
    } | null;
    /** Goes on every mounted widget's box, alongside its `data-index`. */
    measureRef: (node: HTMLElement | null) => void;
}
export interface UseWidgetVirtualizerOptions {
    /** `false` — the column renders every widget, as an unvirtualized one does. */
    config: WidgetVirtualization | false;
    /** How many widgets the column has in total. */
    count: number;
    /**
     * The column's gap in px. The virtualizer places the cards itself, so it needs
     * the gap as a number as well as a class: placed cards are out of the flex
     * flow, and a flex gap does not apply to them.
     */
    gap: number;
    /**
     * Widgets that must stay mounted wherever the column is scrolled to, by index.
     * The card under the pointer during a drag is the case this exists for:
     * unmounting it mid-gesture takes dnd-kit's active node out from under it.
     */
    pinned?: number[];
    /**
     * Suspends virtualization: the column renders every widget in normal flow
     * again, keeping the SAME elements it had. For a container that stops being a
     * column — `NewHomeLayout`'s floating panel, which is one widget in a box of
     * its own and has no viewport for the others to be measured against.
     */
    paused?: boolean;
}
/**
 * The window of widgets a column should have in the DOM.
 *
 * It is ALWAYS CALLED, virtualized or not, and it always returns the same shape:
 * whether a column virtualizes decides how many widgets it draws and where, not
 * what its tree looks like. A hook (or a wrapper element) that came and went
 * with the setting would remount every widget in the column the moment it
 * flipped — the panel opening, a widget being added past the threshold — which
 * is exactly the cost virtualization is here to avoid paying twice.
 */
export declare function useWidgetVirtualizer({ config, count, gap, pinned, paused, }: UseWidgetVirtualizerOptions): WidgetVirtualizer;
