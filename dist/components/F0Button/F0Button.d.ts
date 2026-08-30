import { ButtonInternalProps } from './internal-types';
declare const privateProps: readonly ["append", "className", "pressed", "compact", "noTitle", "noAutoTooltip", "style", "block"];
export type F0ButtonProps = Omit<ButtonInternalProps, (typeof privateProps)[number] | "variant"> & {
    variant?: Exclude<ButtonInternalProps["variant"], "ai">;
};
export declare const F0Button: import('../../lib/data-testid').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<Omit<ButtonInternalProps, "style" | "className" | "block" | "variant" | "pressed" | "append" | "compact" | "noAutoTooltip" | "noTitle"> & {
    variant?: Exclude<ButtonInternalProps["variant"], "ai">;
} & import('react').RefAttributes<HTMLAnchorElement | HTMLButtonElement>>>;
export {};
