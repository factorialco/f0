import { RefObject } from 'react';
import { ChartTheme } from './theme';
import type * as echarts from "echarts";
/**
 * Shows a styled tooltip overlay when hovering over truncated axis labels.
 *
 * ECharts axis labels rendered on canvas don't support native HTML tooltips,
 * so this hook listens for axis label mouse events (requires `triggerEvent: true`
 * on the axis) and positions a floating `<div>` with the full label text.
 *
 * The tooltip only opens when the label is **actually truncated** — labels
 * that fit within their max width get no tooltip, since there's nothing more
 * to show.
 */
export declare function useAxisLabelTooltip(chartRef: RefObject<echarts.ECharts | null>, containerRef: RefObject<HTMLDivElement | null>, theme: ChartTheme): void;
