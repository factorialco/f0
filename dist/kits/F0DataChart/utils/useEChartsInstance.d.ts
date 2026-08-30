import { RefObject } from 'react';
import * as echarts from "echarts";
/**
 * Manages the ECharts instance lifecycle: init, resize, option updates,
 * and cleanup. Shared across all ECharts-based F0 chart components.
 *
 * Accepts a ref to the container `<div>` so it can be shared with other
 * hooks that need access to the same DOM element (e.g. `useChartTheme`
 * for dark mode detection via `element.closest(".dark")`).
 */
export declare function useEChartsInstance(ref: RefObject<HTMLDivElement | null>, options: echarts.EChartsOption): RefObject<echarts.ECharts | null>;
