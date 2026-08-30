/** Half of Radix's 700ms default: the tooltip is the only way to read the labels. */
export declare const CATEGORY_BAR_TOOLTIP_DELAY_MS = 350;
export declare function formatCategoryBarPercentage(value: number, total: number): string;
export interface CategoryBarSource {
    name: string;
    value: number;
}
export type CategoryBarSegment<T extends CategoryBarSource> = T & {
    key: string;
    percentage: number;
    color: string;
};
/** `resolveColor` is a callback because the two bars use different color systems. */
export declare function buildCategoryBarSegments<T extends CategoryBarSource>(items: T[], total: number, resolveColor: (item: T, index: number) => string): CategoryBarSegment<T>[];
export declare function toCategoryBarTooltipItems<T extends CategoryBarSource>(segments: CategoryBarSegment<T>[], total: number): CategoryBarTooltipItem[];
export interface CategoryBarTooltipItem {
    key: string;
    name: string;
    color: string;
    /** Pre-formatted, e.g. `"12 (60%)"`. */
    valueLabel: string;
}
interface CategoryBarTooltipContentProps {
    items: CategoryBarTooltipItem[];
    /** Segment under the pointer; the rest are dimmed. Keyed, not indexed, so a
     * data refresh mid-hover can't dim the wrong row. */
    activeKey?: string;
}
/** Lists every segment, so one hover reveals the whole legend. */
export declare function CategoryBarTooltipContent({ items, activeKey, }: CategoryBarTooltipContentProps): import("react").JSX.Element;
export {};
