import { CSSProperties, ReactNode } from 'react';
import { HomeRenderCtx, HomeWidgetItem, SlotRenderers, WidgetParams } from '../slotRenderers';
import { WidgetVirtualization } from './useWidgetVirtualizer';
import { WidgetStow } from './WidgetMotion';
export type { WidgetVirtualization } from './useWidgetVirtualizer';
/** Which column a container is: the growing main one, or the fixed side rail. */
export type WidgetContainerSide = "main" | "right";
export interface WidgetContainerProps {
    /** The widgets this column shows, in order. */
    widgets?: HomeWidgetItem[];
    /** Which column this is. Only affects the gap between its widgets. */
    side?: WidgetContainerSide;
    /** Freeform content above the widgets (the main column's greeting, feed, …). */
    children?: ReactNode;
    /** Per-visualization renderers, MERGED OVER the kit's `defaultSlotRenderers`. */
    slotRenderers?: SlotRenderers;
    /** Full override of how a whole widget is drawn. Defaults to `SlotWidget`. */
    renderWidget?: (widget: HomeWidgetItem, ctx: HomeRenderCtx) => ReactNode;
    /**
     * Opts this container OUT of arranging entirely: no remove item in any
     * widget's menu, no dragging, no add placeholder. For a column whose contents
     * are fixed (a curated feed, say) rather than user-arranged.
     */
    disableEdition?: boolean;
    /** Disables dragging without changing the tree: the sortables stay mounted. */
    disableDrag?: boolean;
    /**
     * Marks the element a dragged card should carry a copy of behind it — the
     * page's own surface, so the card the pointer holds is the colour it was.
     */
    dragSurfaceSelector?: string;
    /**
     * Called with a widget id when its "Remove widget" menu item is used. Omit it
     * and no widget offers removal.
     */
    onRemoveWidget?: (id: string) => void;
    /** Called when the add placeholder is clicked. The container knows its side. */
    onClickAddNewWidget?: () => void;
    /**
     * Called with the column's widget ids in their new order after a drag. Omit
     * it and the column is not draggable.
     */
    onReorder?: (ids: string[]) => void;
    /**
     * Shows ONE of the column's widgets and hides the rest — hides, not drops:
     * every widget stays mounted, so what it had loaded, timed or animated
     * survives. `undefined` (the default) shows them all; `null` shows none.
     *
     * For a container that is sometimes a whole column and sometimes a single
     * floating widget — `NewHomeLayout`'s collapsed rail, which hovers one widget
     * out over the feed from this same container rather than mounting a copy.
     */
    visibleWidgetId?: string | null;
    /**
     * How this column's widgets ARRIVE: each one fades and rises into place, in
     * order, one beat after the last (`home-motion`).
     *
     * `order` is where the first widget sits in the page's SHARED stagger, so a
     * column that has freeform content above it can hand over the rhythm instead
     * of restarting it; `delayMs` holds the whole column back (what makes the side
     * rail land after the main column). `false` mounts the widgets outright, with
     * no wrapper of any kind around them.
     */
    entrance?: false | {
        order?: number;
        delayMs?: number;
    };
    /**
     * KEEPS ONLY THE WIDGETS YOU CAN SEE IN THE DOM. `true` for the defaults, or an
     * object to tune them; omitted (the default), every widget is mounted.
     *
     * For a column that can hold more widgets than fit on a screen — a hundred
     * cards, each with its own data and its own chart, is a hundred fetches and a
     * DOM the browser pays for on every frame. What it costs, and why it is not the
     * default, is on `WidgetVirtualization`.
     *
     * Choose it ONCE for the life of the column: turning it on or off swaps how
     * every card is laid out, which is a jump if anyone is looking.
     */
    virtualized?: boolean | WidgetVirtualization;
    /**
     * THE STOW: where this column's widgets go when the rail collapses. Each card
     * scales down onto its own glyph and fades, and grows back out of it when the
     * rail opens, so a card and its glyph read as one object rather than two
     * representations that replace each other. See `WidgetMotion`.
     *
     * `pitch` and `scale` describe the strip the widgets are going into — only
     * `NewHomeLayout` knows those, which is why they come in from outside.
     */
    stow?: Omit<WidgetStow, "stowed" | "instant"> & {
        stowed: boolean;
    };
    /**
     * Tooltip and accessible name for the add placeholder, which shows no text.
     * Defaults to the provider's `t.widgets.addWidget`.
     */
    addWidgetLabel?: string;
    /**
     * Called with a widget id and its NEW params when its params dialog is saved.
     * Providing it is what puts "Edit params" in the menu of every widget that
     * declares a `paramsSchema` — locked widgets included, since being mandatory
     * says nothing about being configurable.
     */
    onChangeWidgetParams?: (id: string, params: WidgetParams) => void;
    /**
     * REBUILDS a widget for params the user is trying out in that dialog, before
     * they are saved — the same widget with slots that follow the new params,
     * which only the app can produce (it knows where their data comes from).
     *
     * It hands back DATA, not a rendered node, so the preview is drawn by this
     * column through the same `SlotWidget` the column itself uses: a preview and
     * the card it is previewing cannot come out differently, because they are the
     * same render.
     *
     * Without it the preview is the widget as it is with those params swapped in
     * — already live for everything the params DERIVE (its title, its info), just
     * not for its slots.
     */
    rebuildWidget?: (widget: HomeWidgetItem, params: WidgetParams) => HomeWidgetItem;
    /**
     * @deprecated Use `rebuildWidget`, which returns the widget as DATA and lets
     * f0 draw it — a preview rendered by the app has to reproduce `SlotWidget` by
     * hand, and drifts from the column the moment either side changes. Ignored
     * when `rebuildWidget` is given.
     */
    renderWidgetPreview?: (widget: HomeWidgetItem, params: WidgetParams) => ReactNode;
    /** Content width the params dialog previews a widget at. */
    paramsPreviewWidth?: number;
    /**
     * The copy of the remove item in a widget's menu. Defaults to the PROVIDER's
     * (`t.widgets.removeWidget`) — override it only for a column that means
     * something more specific by removing.
     */
    removeLabel?: string;
    /** The copy of the params item. Defaults to `t.widgets.editParams`. */
    editParamsLabel?: string;
    ctx?: HomeRenderCtx;
    className?: string;
    style?: CSSProperties;
}
/**
 * WidgetContainer — one column of Home widgets, and the only thing that knows
 * how a column is arranged.
 *
 * It renders its `children` (freeform content) followed by each widget through
 * `SlotWidget`, ending in an "Add widget" placeholder. THERE IS NO EDIT MODE:
 * every widget is draggable (the whole card, no handle) and carries "Remove
 * widget" in its own overflow menu, so rearranging a Home is something you just
 * do rather than something you switch into. `disableEdition` opts a column out
 * of all of it, placeholder included.
 *
 * `NewHomeLayout` uses one of these per side; nothing about the column's own
 * width or background lives here (that's the layout's job), so the same
 * component serves the main column and the rail.
 */
export declare function WidgetContainer({ widgets, side, children, slotRenderers, renderWidget, disableEdition, disableDrag, dragSurfaceSelector, onRemoveWidget, onClickAddNewWidget, onReorder, visibleWidgetId, entrance, virtualized, stow, addWidgetLabel, onChangeWidgetParams, rebuildWidget, renderWidgetPreview, paramsPreviewWidth, removeLabel, editParamsLabel, ctx, className, style, }: WidgetContainerProps): import("react").JSX.Element;
