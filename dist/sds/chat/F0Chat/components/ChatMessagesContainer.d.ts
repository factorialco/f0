import { ReactNode } from 'react';
/** Scrollable transcript: virtualized separators, messages, the unread divider,
 * a sticky date header, pagination and a jump-to-bottom / unread-count affordance.
 * Virtuoso owns the scroll physics (bottom follow, prepend retention, entry
 * positioning); useChatVirtuoso owns the bookkeeping around it. */
export declare const ChatMessagesContainer: () => ReactNode;
