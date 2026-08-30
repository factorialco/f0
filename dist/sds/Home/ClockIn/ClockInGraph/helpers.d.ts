import { ClockInGraphProps } from './model';
export declare const normalizeData: ({ data, trackedMinutes, remainingMinutes, }: {
    data: ClockInGraphProps["data"];
    trackedMinutes: number;
    remainingMinutes?: number;
}) => {
    value: number;
    color: string;
}[];
export declare const getLabels: ({ data, remainingMinutes, trackedMinutes, }: ClockInGraphProps) => {
    primaryLabel: string;
    secondaryLabel: string;
    time: string;
};
