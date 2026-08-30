import { DurationFields, DurationUnit } from './types';
export declare const UNIT_ORDER: DurationUnit[];
export declare const DEFAULT_UNITS: DurationUnit[];
export declare const SECONDS_PER_UNIT: Record<DurationUnit, number>;
export declare function secondsToFields(totalSeconds: number): DurationFields;
export declare function fieldsToSeconds(fields: DurationFields): number;
export declare function secondsToVisibleFields(totalSeconds: number, visibleUnits: DurationUnit[]): DurationFields;
export declare function clampValue(val: number, max: number | undefined): number;
