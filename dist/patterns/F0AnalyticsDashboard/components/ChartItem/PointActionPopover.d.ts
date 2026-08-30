export type PointActionAnchor = {
    /** Viewport coordinates of the click that opened this. */
    clientX: number;
    clientY: number;
};
export type PointActionPopoverProps = {
    /** Click position; null hides the popover. */
    anchor: PointActionAnchor | null;
    /** Called when the action is chosen. */
    onAsk: () => void;
    /** Called when the popover should close without acting. */
    onDismiss: (reason: "escape" | "outside" | "viewport") => void;
};
/**
 * Floating single-action menu anchored to a clicked chart mark — the same shape
 * as the "Reply" affordance over a text selection in the chat, so quoting works
 * the same way wherever the user starts.
 *
 * Portalled to `document.body`: the widget clips its content (`overflow-hidden`
 * on the card, and charts sit inside scroll containers), which would cut a
 * popover positioned within the tree.
 */
export declare function PointActionPopover({ anchor, onAsk, onDismiss, }: PointActionPopoverProps): import('react').ReactPortal | null;
