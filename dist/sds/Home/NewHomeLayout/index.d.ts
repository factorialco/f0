import { ReactNode } from 'react';
import { HomeRenderCtx, HomeWidgetItem, SlotRenderers, WidgetParams } from '../slotRenderers';
import { WidgetContainerSide, WidgetVirtualization } from '../WidgetContainer';
/**
 * The DaytimePage gradient wash, by period — the same stops and the same 8%
 * opacity, so Home and the daytime header read as one surface.
 */
declare const GRADIENTS: {
    readonly morning: "bg-gradient-to-bl from-[#E51943] from-20% via-[#F97316] via-35% to-transparent to-50%";
    readonly afternoon: "bg-gradient-to-bl from-[#5596F6] from-20% via-[#10B881] via-35% to-transparent to-50%";
    readonly evening: "bg-gradient-to-bl from-[#3739A8] from-20% via-[#CB6687] via-35% to-transparent to-50%";
};
export type HomePeriod = keyof typeof GRADIENTS;
export interface NewHomeLayoutProps {
    /** Freeform main-column content on top (greeting, shortcut cards, ranked feed…). */
    children?: ReactNode;
    /** Main column: widget slots stacked below `children`. */
    leftWidgets?: HomeWidgetItem[];
    /** Side rail: spec-conforming widgets. */
    rightWidgets?: HomeWidgetItem[];
    /** Freeform side-rail content, rendered above `rightWidgets` (expanded rail only). */
    aside?: ReactNode;
    /** Per-visualization renderers, MERGED OVER the kit's `defaultSlotRenderers`. */
    slotRenderers?: SlotRenderers;
    /** Full override of how a whole widget is drawn. Defaults to `SlotWidget`. */
    renderWidget?: (widget: HomeWidgetItem, ctx: HomeRenderCtx) => ReactNode;
    /**
     * Which containers a user may arrange. Only these offer "Remove widget",
     * dragging and the add placeholder; the others stay put. Both by default.
     */
    editableWidgetContainers?: WidgetContainerSide[];
    /**
     * Which containers may still be ADDED TO. Narrower than
     * `editableWidgetContainers`, which it is a subset of: a column not named here
     * keeps its dragging and its "Remove widget" and only loses the offer to add.
     *
     * Defaults to every editable container — the common case, where the catalog
     * always has something for every column. Name the sides once a column's
     * catalog can run out: a main column that only ever holds one kind of widget
     * has nothing to offer the moment that widget is on it, and a "+" that opens
     * an empty picker is an offer the app cannot keep.
     */
    addableWidgetContainers?: WidgetContainerSide[];
    /**
     * Which containers keep ONLY THE WIDGETS YOU CAN SEE in the DOM. None by
     * default: for a Home of a dozen widgets, mounting them all is what keeps a
     * card's data, clock and animation alive across everything this layout does to
     * it, and virtualizing would trade that away for nothing.
     *
     * Name a side once its widgets can outnumber a screen — a hundred cards is a
     * hundred fetches and a hundred charts, and all but the three in view are work
     * nobody asked for. Below `virtualization.threshold` widgets (12 by default) the
     * column still renders them all, so naming a side here is a CEILING rather than
     * a switch. What it costs is on `WidgetVirtualization`; in short, a widget that
     * scrolls out is unmounted and comes back new, and only the cards in view get
     * out of a dragged one's way.
     *
     * STACKED (below `md`) the rail's widgets belong to the main column, so "main"
     * is what virtualizes them there.
     */
    virtualizedWidgetContainers?: WidgetContainerSide[];
    /**
     * Tuning for the above — the height a card is guessed at before it is measured,
     * how many are kept past each edge, and the count it starts at. The scroll
     * region is this layout's own, per side, and is not yours to set.
     */
    virtualization?: Omit<WidgetVirtualization, "scrollElement">;
    /**
     * Called with a widget id when its "Remove widget" menu item is used — the
     * three-dots menu in the widget's own header.
     */
    onRemoveWidget?: (id: string) => void;
    /**
     * Called with a widget id and its new params when its "Edit params" dialog is
     * saved. Providing it is what offers that item, in the same menu, for every
     * widget that declares a `paramsSchema`. PERSIST what it hands you and pass it
     * back as the widget's `params` — rebuilding the widget's slots for the new
     * params is the app's own job, since only it knows where their data comes from.
     */
    onChangeWidgetParams?: (id: string, params: WidgetParams) => void;
    /**
     * REBUILDS a widget for params being tried out in that dialog, before they are
     * saved — the same widget with slots that follow the new params, which only
     * the app can produce. It hands back DATA, and f0 draws it through the same
     * `SlotWidget` the column uses, so the preview cannot drift from the card.
     *
     * Without it the preview is the widget with those params swapped in — already
     * live for everything they derive (title, info), just not for its slots.
     */
    rebuildWidget?: (widget: HomeWidgetItem, params: WidgetParams) => HomeWidgetItem;
    /**
     * @deprecated Use `rebuildWidget`. A preview the app renders has to reproduce
     * `SlotWidget` by hand and drifts from the column the moment either side
     * changes. Ignored when `rebuildWidget` is given.
     */
    renderWidgetPreview?: (widget: HomeWidgetItem, params: WidgetParams) => ReactNode;
    /**
     * When set, renders a "+ Add widget" affordance at the bottom of each column
     * that takes widgets — see `addableWidgetContainers`.
     */
    onClickAddNewWidget?: (side: WidgetContainerSide) => void;
    /** Called with a side and its widget ids in their new order after a drag. */
    onReorderWidgets?: (side: WidgetContainerSide, ids: string[]) => void;
    /** The daytime gradient period for the page surface. */
    period?: HomePeriod;
    /** Fixed px width of the side rail. */
    asideWidth?: number;
    /**
     * Max px width of the (centered) main-column content. Defaults to 672px, the
     * width the Home widgets are designed at — it is what decides a two-tile
     * widget's tile size, since every tile is
     * `(column − 32 padding + 16 gutter) / 2 − 16`.
     *
     * ⚠️ NOT `max-w-content` (712px) any more. A surface in the main column that
     * has to line up with the chat's composer or message list should cap ITSELF at
     * the reading column rather than assume the column is it.
     */
    mainWidth?: number;
    /**
     * How far the page surface reaches past this layout's box, in px — set it to
     * the page's own gutter so the gradient runs to the window's edges instead of
     * stopping at that padding. The layout's HEIGHT is not its business: that
     * comes from the box the page gives it.
     */
    bleed?: number;
    /**
     * When the layout stacks (below `md` there is no rail), how many leading
     * blocks of `children` come before the pinned widgets folded in from it.
     * Defaults to 2 — a greeting and the shortcuts under it.
     */
    stackedPinsAfter?: number;
    ctx?: HomeRenderCtx;
    className?: string;
    /** Tooltip copy for the One switch, forwarded to `F0OneSwitch`. */
    oneSwitchTooltip?: {
        whenDisabled?: string;
        whenEnabled?: string;
    };
    /** Opens the One switch's tooltip for 3s on mount. */
    oneSwitchAutoOpen?: boolean;
    /**
     * Hides the One AI toggle in the controls row. Use when One is reached
     * elsewhere (e.g. a sidebar tab) so Home doesn't show a redundant switch.
     */
    hideOneSwitch?: boolean;
}
/**
 * NewHomeLayout — the shell for the redesigned Home, modelled on the custom-home
 * prototype's Feed page.
 *
 * A growing MAIN column (content capped to a centered `mainWidth`) next to a
 * FIXED-width side rail, separated only by a gap — no divider. The WHOLE page
 * sits on one full-bleed DaytimePage gradient (`period`): neither column paints
 * a background, so the wash runs under both and across the gap, out to the
 * window's edges. Below `md` everything stacks into one column, main first.
 *
 * WHEN THE LAYOUT IS TOO NARROW for both columns at full width (but still two
 * columns), the rail COLLAPSES: one `lg` avatar per widget carrying that
 * widget's own catalog `icon`. Hovering (or clicking) an avatar floats the SAME
 * widget render out over the feed at the rail's expanded width — one render,
 * two states, exactly like the prototype.
 */
export declare const NewHomeLayout: import('react').ForwardRefExoticComponent<NewHomeLayoutProps & import('react').RefAttributes<HTMLDivElement>>;
export {};
