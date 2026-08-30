import { ReactNode } from 'react';
/** Unread-count pill shared by chat items and collapsed group headers. Caps at
 * "+99". Render only for counts > 0. When `hasMention` is set (the unread run
 * includes a message that mentions you), the count is prefixed with an `@`,
 * Slack-style — no separate badge. */
export declare const UnreadBadge: ({ count, hasMention, }: {
    count: number;
    hasMention?: boolean;
}) => ReactNode;
