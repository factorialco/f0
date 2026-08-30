import { ClockInControlsProps } from './index';
export { getNormalizedRemainingMinutes } from '../utils';
export declare const getInfo: ({ data, labels, trackedMinutes, remainingMinutes, canSeeRemainingTime, }: Pick<ClockInControlsProps, "data" | "labels" | "trackedMinutes" | "remainingMinutes" | "canSeeRemainingTime">) => {
    status: import('../ClockInGraph').ClockInStatus;
    statusText: string;
    subtitle: string | undefined;
    statusColor: string;
};
