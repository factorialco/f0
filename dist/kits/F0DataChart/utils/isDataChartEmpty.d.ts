import { F0DataChartProps } from '../types';
/**
 * Returns `true` when a chart has no data points to render — i.e. the
 * `series` / `data` arrays are missing or empty. **All-zero datasets are
 * NOT empty** (e.g. `data: [0, 0, 0]` is a legitimate zero-valued chart),
 * so this detection avoids hijacking what was previously a valid render.
 *
 * Null-safe: malformed input is treated as empty.
 *
 * Consumers that prefer to surface the empty state for all-zero data can
 * pass `emptyState.disabled: false` is the default — opt-in to a custom
 * `render` prop or wrap the chart themselves.
 */
export declare function isDataChartEmpty(props: F0DataChartProps): boolean;
