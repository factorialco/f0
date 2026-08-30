import { NumberInputInternalProps, NumberInputPopoverConfig } from './internal';
declare const privateProps: readonly ["buttonToggle"];
export type F0NumberInputProps = Omit<NumberInputInternalProps, (typeof privateProps)[number]>;
export type { NumberInputPopoverConfig };
/**
 * F0NumberInput is the writable numeric field for forms — a box where the
 * user types a number. For arbitrary text use F0TextInput; for durations
 * (hours/minutes) use F0DurationInput.
 */
export declare const F0NumberInput: import('react').ForwardRefExoticComponent<Omit<F0NumberInputProps, "ref"> & import('react').RefAttributes<HTMLInputElement>>;
