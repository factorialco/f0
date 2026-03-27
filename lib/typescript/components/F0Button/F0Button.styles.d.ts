import type { IconColor } from "../primitives/F0Icon";
import type { TextColor } from "../primitives/F0Text";
import type { ButtonVariant } from "./F0Button.types";
export declare const buttonVariants: import("tailwind-variants").TVReturnType<{
    variant: {
        default: string;
        outline: string;
        neutral: string;
        critical: string;
        ghost: string;
        promote: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
    round: {
        true: string;
        false: string;
    };
}, undefined, "flex-row items-center justify-center rounded border-none grow-0", {
    variant: {
        default: string;
        outline: string;
        neutral: string;
        critical: string;
        ghost: string;
        promote: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
    round: {
        true: string;
        false: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    variant: {
        default: string;
        outline: string;
        neutral: string;
        critical: string;
        ghost: string;
        promote: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
    round: {
        true: string;
        false: string;
    };
}, undefined, "flex-row items-center justify-center rounded border-none grow-0", unknown, unknown, undefined>>;
export declare const pressedVariants: import("tailwind-variants").TVReturnType<{
    variant: {
        default: string;
        outline: string;
        neutral: string;
        critical: string;
        ghost: string;
        promote: string;
    };
}, undefined, "", {
    variant: {
        default: string;
        outline: string;
        neutral: string;
        critical: string;
        ghost: string;
        promote: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    variant: {
        default: string;
        outline: string;
        neutral: string;
        critical: string;
        ghost: string;
        promote: string;
    };
}, undefined, "", unknown, unknown, undefined>>;
export declare const loadingContentVariants: import("tailwind-variants").TVReturnType<{
    loading: {
        true: string;
        false: string;
    };
}, undefined, undefined, {
    loading: {
        true: string;
        false: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    loading: {
        true: string;
        false: string;
    };
}, undefined, undefined, unknown, unknown, undefined>>;
export declare const loadingIndicatorVariants: import("tailwind-variants").TVReturnType<{
    variant: {
        default: string;
        outline: string;
        neutral: string;
        critical: string;
        ghost: string;
        promote: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, "rounded-full border-solid border-t-transparent", {
    variant: {
        default: string;
        outline: string;
        neutral: string;
        critical: string;
        ghost: string;
        promote: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    variant: {
        default: string;
        outline: string;
        neutral: string;
        critical: string;
        ghost: string;
        promote: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, "rounded-full border-solid border-t-transparent", unknown, unknown, undefined>>;
export declare const getIconColor: (variant: ButtonVariant, isPressed: boolean) => IconColor;
export declare const getIconOnlyColor: (variant: ButtonVariant, isPressed: boolean) => IconColor;
export declare const getTextColor: (variant: ButtonVariant, isPressed: boolean) => TextColor;
//# sourceMappingURL=F0Button.styles.d.ts.map