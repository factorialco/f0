import { ReactNode } from 'react';
export declare const ChatViewportOverlays: ({ atTop, scrolledUp, hasMoreOlder, loadingOlder, stickyDate, showJumpButton, unreadCount, hasMoreNewer, reducedMotion, onJumpToBottom, }: {
    atTop: boolean;
    scrolledUp: boolean;
    hasMoreOlder: boolean;
    loadingOlder: boolean;
    stickyDate: string | null;
    showJumpButton: boolean;
    unreadCount: number;
    hasMoreNewer: boolean;
    reducedMotion: boolean;
    onJumpToBottom: () => void;
}) => ReactNode;
