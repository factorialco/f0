import { StoryFn } from '@storybook/react-vite';
import { F0DataChartProps } from '../types';
export declare const ChartDecorator: (Story: StoryFn) => import("react").JSX.Element;
export declare const ChartDecoratorWide: (Story: StoryFn) => import("react").JSX.Element;
/**
 * Fixed-size decorators that mirror the responsive matrix in the AI Analytics
 * Figma (file `1smmEIugmR0CNeu7NvK33y`, node `10181-31958`). They map to the
 * three breakpoints of the line chart:
 *
 * - Small  (< 220px) — narrow chat card
 * - Medium (220–519px) — wide chat card
 * - Large  (≥ 520px) — dashboard cell
 */
export declare const ChartDecoratorSmall: (Story: StoryFn) => import("react").JSX.Element;
export declare const ChartDecoratorMedium: (Story: StoryFn) => import("react").JSX.Element;
export declare const ChartDecoratorLarge: (Story: StoryFn) => import("react").JSX.Element;
export type ResponsiveSnapshotProps = {
    /**
     * Returns the chart props for a given series-count column. Each chart in
     * the column shares the same data — only the wrapping container width
     * changes between rows.
     */
    getProps: (column: "low" | "normal" | "large") => F0DataChartProps;
};
/**
 * Renders the 3×3 (size × series-count) responsive matrix described in the
 * Figma. Designed for visual review only — every cell renders an independent
 * `F0DataChart` instance so the responsive logic gets exercised end-to-end.
 */
export declare const ResponsiveSnapshot: ({ getProps }: ResponsiveSnapshotProps) => import("react").JSX.Element;
