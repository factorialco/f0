import { InputInternalProps } from './internal';
declare const privateProps: readonly ["buttonToggle"];
export type F0TextInputProps = Omit<InputInternalProps, (typeof privateProps)[number]>;
/**
 * F0TextInput is the writable text field for forms — a box where the user
 * types text, passwords, emails, etc. It is the canonical "text input" of
 * F0. For numeric data use F0NumberInput; for durations use F0DurationInput;
 * for queries use F0SearchInput.
 */
export declare const F0TextInput: import('react').ForwardRefExoticComponent<Omit<F0TextInputProps, "ref"> & import('react').RefAttributes<HTMLInputElement>>;
export {};
