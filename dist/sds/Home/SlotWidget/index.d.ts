import { WidgetProps } from '../../../experimental/Widgets/Widget';
import { HomeWidgetChrome, HomeWidgetHeader, HomeRenderCtx, HomeWidgetSlot, SlotRenderers, WidgetParams } from '../slotRenderers';
/**
 * SlotWidget — one Home widget rendered from data: the f0 `Widget` frame (the
 * only allowed widget wrapper) with an ordered list of SLOTS stacked below the
 * header, a DASHED divider between consecutive slots.
 *
 * Each slot is `{ visualization, params }`; how a visualization is drawn comes
 * from the merged renderer map (`defaultSlotRenderers` + the `slotRenderers`
 * prop). Bespoke visualizations (e.g. `clock-in`) have no default and must be
 * supplied via `slotRenderers`.
 *
 * `loading` swaps every slot's content for that visualization's SKELETON,
 * keeping the frame, the chrome and the seams — the card doesn't change shape
 * when the data lands, it fills in.
 *
 * THE WAY OUT IS A FOOTER BUTTON. `header.link` is still how a widget declares
 * it, but it lands under the content as a named button rather than as an
 * icon in the header's top-right: that corner belongs to the overflow menu
 * (`actions`), and a button that says "Go to Calendar" needs no tooltip to say
 * where it goes.
 *
 * A CONFIGURABLE widget's `header.title` and `header.info` may be functions of
 * its `params` — "Hours · Design team" rather than "Hours" — so the card says
 * what it is currently showing.
 *
 * `header.info` is NOT an icon in the header: it is the widget's OTHER SIDE. The
 * card turns over to show it (see `flipped`), which is room enough to explain
 * itself in a sentence instead of a tooltip cramped beside the title.
 */
export type SlotWidgetProps = HomeWidgetChrome & {
    header?: HomeWidgetHeader;
    /** The params `header.title` / `header.info` are computed from, if they are. */
    params?: WidgetParams;
    /**
     * Shows the widget's BACK — `header.info`, centered — by turning the card
     * over. The column drives it from the widget's own menu (`WidgetContainer`).
     */
    flipped?: boolean;
    /** Turns it back. Called when the back face is clicked. */
    onFlipBack?: () => void;
    fullHeight?: boolean;
    slots: HomeWidgetSlot[];
    /**
     * Draws each slot's SKELETON instead of its content. How many placeholder
     * items each one draws is the slot's own `expectedItemsCount`.
     */
    loading?: boolean;
    /** Per-visualization renderers, MERGED OVER `defaultSlotRenderers`. */
    slotRenderers?: SlotRenderers;
    /**
     * The header's overflow menu — the three dots at its top-right. This is where
     * a column's "Remove widget" lands (see `WidgetContainer`).
     */
    actions?: WidgetProps["actions"];
    /** Forwarded to the f0 `Widget`: the lifted look while the card is dragged. */
    isDragging?: boolean;
    ctx?: HomeRenderCtx;
};
/**
 * A widget's CONTENT: the slot stack, with the dividers between slots and the
 * skeletons while it loads — everything `SlotWidget` draws, minus the card.
 *
 * Public because the frame is not always wanted. A surface that drills into a
 * widget (an overlay listing the tasks one of its grouped rows summarises) is
 * already a surface: wrapped in a `Widget` it would be a card inside a card,
 * with two borders and two paddings. Rendering the slots here keeps the rows
 * IDENTICAL to the widget's — same slots, same renderers — which composing them
 * by hand would not.
 *
 * Inside a card, prefer `SlotWidget`: it is this plus the frame.
 */
export declare function SlotWidgetContent({ slots, loading, slotRenderers, ctx, }: Pick<SlotWidgetProps, "slots" | "loading" | "slotRenderers" | "ctx">): import("react").JSX.Element;
export declare function SlotWidget({ header, params, fullHeight, action, summaries, headerControls, headerActions, headerSelect, alert, status, slots, loading, slotRenderers, actions, flipped, onFlipBack, isDragging, ctx, }: SlotWidgetProps): import("react").JSX.Element;
