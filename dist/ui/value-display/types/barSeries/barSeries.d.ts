import { ValueDisplayRendererContext } from '../../renderers';
export interface BarSeriesDataPoint {
    label: string;
    value: number;
    secondaryValue?: number;
    neutralValue?: number;
    neutralFullHeight?: boolean;
    /** Per-point label for the neutral segment. Overrides any chart-level label when set. */
    neutralLabel?: string;
}
export interface BarSeriesCellValue {
    dataPoints: BarSeriesDataPoint[];
    formatLabel?: (label: string) => string;
    formatValue?: (value: number) => string;
    formatTooltip?: (args: {
        point: BarSeriesDataPoint;
        formattedLabel: string;
        formattedValue: string;
    }) => string;
    /** Optional max for scale; if not set, derived from data. */
    scaleMax?: number;
}
export declare const BarSeriesCell: (args: BarSeriesCellValue, meta: ValueDisplayRendererContext) => import("react").JSX.Element;
