import { Numeric, NumericFormatter, NumericFormatterOptions, NumericWithFormatter, RelaxedNumericWithFormatter } from '../types';
export declare const normalizeNumericWithFormatter: (value: Numeric | RelaxedNumericWithFormatter, defaults?: {
    formatter?: NumericFormatter;
    formatterOptions?: NumericFormatterOptions;
}) => Required<NumericWithFormatter>;
