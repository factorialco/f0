import { RefObject } from 'react';
import { F0DataChartPointClick } from '../types';
import type * as echarts from "echarts";
/**
 * Where a click has to land to count as a pick.
 *
 * - `"mark"` — on the mark itself. Right for bars, slices and points, which
 *   are big enough to hit.
 * - `"plot"` — anywhere inside the plot area, resolved to the nearest mark.
 *   For lines, which are too thin to click reliably — the same reason they
 *   already use an axis-triggered tooltip rather than an item one.
 */
export type F0DataChartHitArea = "mark" | "plot";
/**
 * Reports the single mark the user clicked — one bar segment, one slice, one
 * point — normalised into {@link F0DataChartPointClick}.
 *
 * Works for every chart type because ECharts' item-level click params carry the
 * same fields regardless of series type, so this binds once at the instance
 * level rather than needing a variant per chart.
 *
 * With `hitArea: "plot"` it instead listens at the canvas level and resolves
 * the click itself: nearest category on the x axis, then every series that has
 * a value there. A line is a few pixels wide, so asking the user to hit one is
 * asking them to miss; the axis tooltip already treats the whole column as one
 * target, and this makes clicking agree with it — the click answers with the
 * same rows the hover did.
 *
 * `seriesName` and `value` still name a single series: the one nearest the
 * click, so anything that wants a headline has one. `series` carries the whole
 * column beside it.
 *
 * Dismisses the hover tooltip on a successful pick: the click is answered by
 * something anchored at the same spot, and leaving the tooltip up would stack
 * two floating panels over one mark.
 */
export declare function usePointClick(chartRef: RefObject<echarts.ECharts | null>, onPointClick: ((point: F0DataChartPointClick) => void) | undefined, hitArea?: F0DataChartHitArea): void;
