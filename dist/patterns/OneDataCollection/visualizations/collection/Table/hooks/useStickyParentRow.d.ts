interface UseStickyParentRowResult {
    isSticky: boolean;
}
export declare const useStickyParentRow: (open: boolean, parentRowRef: React.RefObject<HTMLTableRowElement | null>, sentinelRef: React.RefObject<HTMLElement | null>, options?: {
    stickyTopOffset?: number;
}) => UseStickyParentRowResult;
export {};
