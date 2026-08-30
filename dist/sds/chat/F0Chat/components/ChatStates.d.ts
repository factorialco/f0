import { ReactNode } from 'react';
/** First load: a bubble skeleton (not a spinner). On re-entry the data is
 * cached, so the runtime reports "ready" immediately and this never shows. */
export declare const ChatConnecting: () => ReactNode;
export declare const ChatError: () => ReactNode;
export declare const ChatEmptyState: () => ReactNode;
