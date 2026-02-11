import type { F0ButtonProps } from "../F0Button";
export { BUTTON_VARIANTS as variants, BUTTON_SIZES as sizes, } from "../F0Button";
export type { ButtonVariant, ButtonSize } from "../F0Button";
/**
 * @deprecated Use F0ButtonProps instead.
 * Extends F0ButtonProps to include className for backward compat.
 */
export interface ButtonProps extends F0ButtonProps {
    className?: string;
}
/**
 * @deprecated Use F0Button instead.
 */
export declare const Button: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<F0ButtonProps & import("react").RefAttributes<import("react-native").View>>>;
//# sourceMappingURL=index.d.ts.map