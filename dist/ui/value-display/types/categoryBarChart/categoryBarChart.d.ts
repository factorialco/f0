import { ChartColorToken } from '../../../../kits/F0DataChart/utils/colors';
import { ValueDisplayRendererContext } from '../../renderers';
/**
 * Legacy `kits/Charts` color tokens, resolved as `hsl(var(--chart-*))`.
 * Kept for backward compatibility alongside the F0DataChart base-color palette.
 */
declare const LEGACY_CHART_COLORS: readonly ["categorical-1", "categorical-2", "categorical-3", "categorical-4", "categorical-5", "categorical-6", "categorical-7", "categorical-8", "feedback-negative", "feedback-neutral", "feedback-positive"];
type LegacyChartColor = (typeof LEGACY_CHART_COLORS)[number];
/**
 * A segment color. Accepts both color systems:
 * - a 15-palette base-color token (`"viridian"`, `"yellow"`, `"barbie"`, …),
 *   resolved through `kits/F0DataChart`; or
 * - a legacy `kits/Charts` token (`"categorical-1"…"categorical-8"`,
 *   `"feedback-positive"`, …), resolved as a CSS `--chart-*` variable.
 */
export type CategoryBarColor = ChartColorToken | LegacyChartColor;
export interface CategoryBarDataPoint {
    name: string;
    value: number;
    /**
     * Color of the segment. Supports both the 15 chromatic F0 base-color tokens
     * (e.g. `"viridian"`, `"yellow"`, `"barbie"`) and the legacy chart tokens
     * (`"categorical-1"…"categorical-8"`, `"feedback-*"`). When omitted, a color
     * is auto-assigned by index from the shared chart palette.
     */
    color?: CategoryBarColor;
}
export interface CategoryBarChartCellValue {
    dataPoints: CategoryBarDataPoint[];
    hideTooltip?: boolean;
    /**
     * Renders a skeleton (same height/width as the loaded bar) instead of the
     * chart while the row's data is still loading. Prevents flashing the empty
     * dash before the values arrive.
     */
    loading?: boolean;
}
export declare const CategoryBarChartCell: (args: CategoryBarChartCellValue, meta: ValueDisplayRendererContext) => import("react").JSX.Element;
export {};
