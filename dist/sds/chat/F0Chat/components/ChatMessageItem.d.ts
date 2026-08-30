import { ReactNode } from 'react';
import { F0ChatMessage, F0ChatUser } from '../types';
/** One message: bubble (with any reply quote nested inside) + reactions, with a
 * hover ellipsis menu. */
export declare const ChatMessageItem: ({ message, isMine, author, bubbleGutter, belowGutter, isFirstOfRun, isLastOfRun, hasAvatar, }: {
    message: F0ChatMessage;
    isMine: boolean;
    /** Group incoming, first of a run: renders the sender name inside the bubble. */
    author?: F0ChatUser;
    /** Left gutter aligned to the bubble (the avatar on a run's last message, or
     * an invisible spacer otherwise) — keeps the avatar level with the bubble. */
    bubbleGutter?: ReactNode;
    /** Matching invisible spacer so reactions line up under the bubble. */
    belowGutter?: ReactNode;
    /** First message of a same-author run — drives the bubble's chained corners. */
    isFirstOfRun?: boolean;
    /** Last message of a same-author run — drives the bubble's chained corners. */
    isLastOfRun?: boolean;
    /** The gutter holds a real avatar, not a spacer: the only case where the run
     * ends on a point (see `bubbleCornerClass`). */
    hasAvatar?: boolean;
}) => ReactNode;
