import { ClockInGraphProps } from './model';
export { CLOCK_IN_COLORS, type ClockInGraphProps, type ClockInGraphVariant, type ClockInStatus, } from './model';
/**
 * The geometry the day is drawn in. Same segments, same colours, same
 * `normalizeData` either way — only the shape differs.
 */
export declare function ClockInGraph({ data, trackedMinutes, remainingMinutes, variant, }: ClockInGraphProps): import("react").JSX.Element;
