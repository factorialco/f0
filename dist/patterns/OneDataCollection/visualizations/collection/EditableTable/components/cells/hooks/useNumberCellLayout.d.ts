import { RecordType } from '../../../../../../../../hooks/datasource/types/records.typings';
import { NumberCellConfig } from '../../../types';
/**
 * Resolve `units` from config, which can be a static string or a per-row function.
 */
export declare function resolveUnits<R extends RecordType>(config: NumberCellConfig<R> | undefined, item: R): string | undefined;
/**
 * Encapsulates formatting, units placement, and width measurement
 * for number/money cells so the component only deals with rendering.
 */
export declare function useNumberCellLayout<R extends RecordType>(config: NumberCellConfig<R> | undefined, numericValue: number | null, item: R): {
    ref: (node: HTMLDivElement | null) => void;
    width: number | undefined;
    locale: string;
    units: string | undefined;
    unitsBefore: boolean;
    grouping: boolean;
};
