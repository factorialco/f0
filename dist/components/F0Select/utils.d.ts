/** Separator between labels */
declare const LABEL_SEPARATOR = ", ";
/**
 * Hook to check whether all labels fit within the container.
 * Uses ResizeObserver to recalculate when container size changes.
 *
 * @param labels - Array of label strings to display
 * @returns Object with allFit boolean and containerRef to attach to the container
 */
export declare function useLabelsOverflow(labels: string[]): {
    allFit: boolean;
    containerRef: React.RefObject<HTMLDivElement>;
};
/** Exported constant for use in components */
export { LABEL_SEPARATOR };
