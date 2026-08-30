import { RefObject } from 'react';
import type * as echarts from "echarts";
/**
 * Implements Plotly-style legend interaction:
 *
 * - Click a legend item when all are visible → isolate it (hide all others)
 * - Click a hidden item → add it back (show it)
 * - Click the only visible item → show all again
 *
 * Requires `selectedMode: true` on the legend (set by `buildLegend`).
 * Does not need an explicit legend data list — it reads the full selected
 * state from ECharts' `legendselectchanged` event.
 */
export declare function useLegendInteraction(chartRef: RefObject<echarts.ECharts | null>, onSelectionChange?: (selected: Record<string, boolean>) => void): void;
