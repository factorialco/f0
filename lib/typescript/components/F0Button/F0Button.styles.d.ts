import type { ButtonVariant } from "./F0Button.types";
import type { TextColor } from "../primitives/F0Text/F0Text.types";
/**
 * Base button styles using tailwind-variants.
 * Handles variant, size, disabled, and round states.
 */
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
/**
 * Pressed-state overrides per variant.
 * Merged on top of base buttonVariants via cn() when pressed.
 */
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
/**
 * Returns the icon className when a label is also visible.
 */
export declare const getIconColor: (variant: ButtonVariant, isPressed: boolean) => string;
/**
 * Returns the icon className in icon-only / round mode.
 */
export declare const getIconOnlyColor: (variant: ButtonVariant, isPressed: boolean) => string;
/**
 * Returns the semantic TextColor for label / emoji text.
 */
export declare const getTextColor: (variant: ButtonVariant, isPressed: boolean) => TextColor;
//# sourceMappingURL=F0Button.styles.d.ts.map