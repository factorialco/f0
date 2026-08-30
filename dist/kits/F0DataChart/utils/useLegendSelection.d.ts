import { RefObject } from 'react';
import type * as echarts from "echarts";
/**
 * Reports which series the legend currently has selected, as ECharts' own
 * `{ [seriesName]: boolean }` map, or `null` while every series is on.
 *
 * Anything that derives a number from more than one series needs this. Clicking
 * a legend entry isolates a series (see `useLegendInteraction`), and ECharts
 * re-stacks around what is left — so a total computed from every series stops
 * matching the bar it labels, and a share-of-total in the tooltip stops matching
 * what the reader can see.
 *
 * Observes only: the isolate/restore behaviour belongs to `useLegendInteraction`,
 * and this hook deliberately dispatches nothing, so the two can share the event
 * without fighting over it.
 */
export declare function useLegendSelection(chartRef: RefObject<echarts.ECharts | null>, onChange: (selected: Record<string, boolean> | null) => void): void;
