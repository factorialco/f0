import { F0ButtonToggleInternalProps } from './internal/types.internal';
declare const privateProps: readonly ["withBorder"];
export type F0ButtonToggleProps = Omit<F0ButtonToggleInternalProps, (typeof privateProps)[number]>;
export declare const F0ButtonToggle: import('../../lib/data-testid').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<F0ButtonToggleProps & import('react').RefAttributes<HTMLButtonElement>>>;
export {};
