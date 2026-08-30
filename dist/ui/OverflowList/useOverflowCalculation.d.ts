/**
 * Custom hook for overflow calculations
 *
 * This hook dynamically determines which items should be visible in the main list and which should be placed in an overflow dropdown based on available space.
 *
 * @param items - The items to display
 * @param gap - The gap between items
 * @returns The overflow calculation state
 */
export declare function useOverflowCalculation<T>(items: T[], gap: number, options?: {
    max?: number;
    min?: number;
    itemsWidth?: number | number[];
}): {
    containerRef: import('react').RefObject<HTMLDivElement>;
    overflowButtonRef: import('react').RefObject<HTMLButtonElement>;
    customOverflowIndicatorRef: import('react').RefObject<HTMLDivElement>;
    measurementContainerRef: import('react').RefObject<HTMLDivElement>;
    visibleItems: T[];
    overflowItems: T[];
    isInitialized: boolean;
};
