import { RefObject } from 'react';
import { ChartTheme } from './theme';
/**
 * Resolves the complete chart theme from CSS custom properties and
 * re-resolves it when the dark mode context changes.
 *
 * Accepts a ref to the chart's container element so it can:
 * 1. Detect `.dark` on **any ancestor** via `element.closest(".dark")`
 * 2. Resolve CSS custom properties via `getComputedStyle(element)` so
 *    that localized dark islands (a parent `<div class="dark">`) are
 *    respected.
 * 3. Observe class attribute changes on every ancestor element so the
 *    theme re-resolves when `.dark` is added or removed at any level.
 *
 * Every chart-type hook (bar, line, pie, …) should call this once and
 * pass the returned `ChartTheme` through to `buildBaseChartOptions()`.
 */
export declare function useChartTheme(containerRef: RefObject<HTMLDivElement | null>): ChartTheme;
