import { ReactNode } from 'react';
import { F0ChatMessage, F0ChatUser } from '../types';
type BubbleCornerLayer = "inner" | "outer";
interface BubbleCornerOptions {
    isMine: boolean;
    isFirstOfRun: boolean;
    isLastOfRun: boolean;
    /** Whether an avatar sits in the gutter beside this row — see the tail
     * corner in {@link bubbleCornerClass}. */
    hasAvatar?: boolean;
    layer?: BubbleCornerLayer;
}
/**
 * Border-radius classes for a chat bubble given its position in a same-author
 * run.
 *
 * On the tail side the top corner tucks in while the run continues above, and
 * the bottom corner takes one of three shapes: tucked while another bubble
 * follows, and **squared** on the last one — the corner points down at the
 * sender's own side, which is how Telegram and Messages mark where a stack
 * ends. Only one bubble per run carries it.
 *
 * That point only appears where an **avatar** sits in the gutter: it exists to
 * aim at the face it belongs to. With nothing beside the bubble (a DM, or your
 * own messages) it has nothing to point at and reads as a chipped corner, so
 * the run simply ends on the base radius.
 *
 * Exported so the highlight ring / hover surface in `ChatMessageItem`, and the
 * media cards in `ChatMessageAttachments`, follow the exact same shape.
 */
export declare const bubbleCornerClass: ({ isMine, isFirstOfRun, isLastOfRun, hasAvatar, layer, }: BubbleCornerOptions) => string;
export declare const ChatBubble: import('react').MemoExoticComponent<({ message, isMine, author, currentUserId, isFirstOfRun, isLastOfRun, hasAvatar, }: {
    message: F0ChatMessage;
    isMine: boolean;
    /** When set (group incoming, first of a run), render the name as line one. */
    author?: F0ChatUser;
    /** The viewer's id — a mention of it reads in warning/amber (Slack-style). */
    currentUserId?: string;
    /** First message of a same-author run. When false, the bubble tucks in its
     * tail-side top corner so the run reads as one chained, stacked group. */
    isFirstOfRun?: boolean;
    /** Last message of a same-author run. When false, the bubble tucks in its
     * tail-side bottom corner so the run reads as one chained, stacked group. */
    isLastOfRun?: boolean;
    /** An avatar sits in the gutter beside this row — the only case where the
     * run ends on a point (see `bubbleCornerClass`). */
    hasAvatar?: boolean;
}) => ReactNode>;
export {};
