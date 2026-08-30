import { ValueDisplayRendererContext } from '../../renderers';
export interface HourDistributionDataPoint {
    date: string;
    value: number;
    /** When set, used for two-tone coloring and underworked (value < plannedValue) = orange. */
    plannedValue?: number;
    /** Justified absence minutes rendered as a neutral segment. Missing time without this remains transparent. */
    justifiedAbsenceValue?: number;
    /** Renders a full-height neutral bar for justified non-working days without a minute baseline. */
    justifiedAbsenceFullDay?: boolean;
    /** Per-point label for the neutral segment tooltip. Overrides the chart-level justifiedAbsenceLabel when set. */
    neutralLabel?: string;
}
export interface HourDistributionCellValue {
    dataPoints: HourDistributionDataPoint[];
    /** Label for worked time in tooltips. Defaults to "Worked". */
    workedLabel?: string;
    /** Label for justified absence in tooltips. Defaults to "Justified absence". */
    justifiedAbsenceLabel?: string;
}
export declare const HourDistributionCell: (args: HourDistributionCellValue, meta: ValueDisplayRendererContext) => import("react").JSX.Element;
