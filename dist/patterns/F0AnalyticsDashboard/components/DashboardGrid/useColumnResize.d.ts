type ColSpan = 1 | 2 | 3;
interface UseColumnResizeOptions {
    itemId: string;
    currentSpan: ColSpan;
    gridElement: HTMLDivElement | null;
    onSpanChange: (itemId: string, newSpan: ColSpan) => void;
}
interface UseColumnResizeResult {
    resizeHandleProps: {
        onPointerDown: (e: React.PointerEvent) => void;
    };
    isResizing: boolean;
    previewSpan: ColSpan | null;
    /** Pixel width that follows the cursor during resize, null when idle */
    resizeWidthPx: number | null;
}
export declare function useColumnResize({ itemId, currentSpan, gridElement, onSpanChange, }: UseColumnResizeOptions): UseColumnResizeResult;
export {};
