import { ReplySelectionAnchor } from '../useReplySelection';
export type ReplyPopoverProps = {
    /** Selection anchor; null hides the popover. */
    anchor: ReplySelectionAnchor | null;
    /** Called when the Reply button is clicked. */
    onReply: (text: string) => void;
};
/**
 * Floating "Reply" button anchored above a text selection inside a chat
 * message. Rendered via a portal to `document.body` so transform/stacking
 * contexts in the chat shell don't clip it.
 */
export declare function ReplyPopover({ anchor, onReply }: ReplyPopoverProps): import('react').ReactPortal | null;
