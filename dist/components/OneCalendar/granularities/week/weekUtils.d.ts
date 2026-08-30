import { WeekStartsOn } from '../../types';
export declare const getStartOfWeek: (date: Date, weekStartsOn: WeekStartsOn) => Date;
export declare const getEndOfWeek: (date: Date, weekStartsOn: WeekStartsOn) => Date;
export declare const getIsSameWeek: (dateLeft: Date, dateRight: Date, weekStartsOn: WeekStartsOn) => boolean;
