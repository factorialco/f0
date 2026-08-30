export declare const fixedGridVariants: readonly ["1x1", "2x2", "4x2"];
export type FixedGridVariant = (typeof fixedGridVariants)[number];
export type GroupGridWidgetSize = {
    w: number;
    h: number;
};
export type GroupGridWidget<Meta extends Record<string, unknown> = Record<string, unknown>, DepsKeys extends string[] = string[]> = {
    id: string;
    availableSizes?: GroupGridWidgetSize[];
    content: React.ReactNode | ((deps: Partial<Record<DepsKeys[number], unknown>>) => React.ReactNode);
    x: number;
    y: number;
    locked?: boolean;
    meta?: Meta;
    /**
     * Dependencies array that, when changed, will trigger a content update.
     * Each value in the array is compared using strict equality (`===`).
     */
    deps?: DepsKeys;
} & GroupGridWidgetSize;
