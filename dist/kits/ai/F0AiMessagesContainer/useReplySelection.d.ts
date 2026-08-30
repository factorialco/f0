import { RefObject } from 'react';
export type ReplySelectionAnchor = {
    /** Viewport-relative rect of the selection (from range.getBoundingClientRect). */
    rect: DOMRect;
    /** Plain-text content of the selection, clamped to this message container. */
    text: string;
};
type UseReplySelectionArgs = {
    /** Ref to the DOM node that wraps the selectable message content. */
    containerRef: RefObject<HTMLElement | null>;
    /** When false the hook stays dormant (no listeners attached). */
    enabled?: boolean;
};
export declare function useReplySelection({ containerRef, enabled, }: UseReplySelectionArgs): {
    anchor: ReplySelectionAnchor | null;
    clear: () => void;
};
export {};
