import { RefObject } from 'react';
type UseMessageScrollOptions = {
    viewportRef: RefObject<HTMLDivElement | null>;
    contentRef: RefObject<HTMLDivElement | null>;
    endRef: RefObject<HTMLDivElement | null>;
    lastTurnRef: RefObject<HTMLDivElement | null>;
    turnsCount: number;
    /**
     * When true, pauses the ResizeObserver-driven turnMinHeight updates. Use
     * this during transient input-area size changes (e.g. the clarifying
     * question panel appearing/disappearing) to prevent the last turn's
     * reserved minHeight from shrinking/growing and causing a visible
     * content jump while the user is interacting.
     */
    freezeTurnMinHeight?: boolean;
};
type UseMessageScrollReturn = {
    showScrollBtn: boolean;
    turnMinHeight: number;
    scrollToBottom: (behavior?: ScrollBehavior) => void;
};
/**
 * Encapsulates scroll-to-bottom detection, ResizeObserver-based height
 * measurement, and auto-scroll behaviour for the messages container.
 */
export declare function useMessageScroll({ viewportRef, contentRef, endRef, lastTurnRef, turnsCount, freezeTurnMinHeight, }: UseMessageScrollOptions): UseMessageScrollReturn;
export {};
