import { ClockInControlsProps } from './index';
export declare const getNormalizedRemainingMinutes: (trackedMinutes: ClockInControlsProps["trackedMinutes"], remainingMinutes: ClockInControlsProps["remainingMinutes"]) => number;
export declare const getInfo: ({ data, labels, trackedMinutes, remainingMinutes, canSeeRemainingTime, }: Pick<ClockInControlsProps, "data" | "labels" | "trackedMinutes" | "remainingMinutes" | "canSeeRemainingTime">) => {
    status: import('../ClockInGraph').ClockInStatus;
    statusText: string;
    subtitle: string | undefined;
    statusColor: string;
};
