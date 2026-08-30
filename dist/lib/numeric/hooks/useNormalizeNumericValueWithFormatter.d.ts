import { Numeric, NumericFormatterOptions, RelaxedNumericWithFormatter } from '../types';
export declare const useNormalizeNumericValueWithFormatter: () => (value: Numeric | RelaxedNumericWithFormatter, options?: {
    formatterOptions?: NumericFormatterOptions;
}) => Required<import('..').NumericWithFormatter>;
