import React from "react";
import { View } from "react-native";
import { type VariantProps } from "tailwind-variants";
import { type IconType } from "../primitives/F0Icon";
/**
 * @deprecated Use `F0Button` from `../F0Button` instead.
 */
export declare const variants: readonly ["default", "outline", "critical", "neutral", "ghost", "promote"];
/**
 * @deprecated Use `F0ButtonVariant` from `../F0Button` instead.
 */
export type ButtonVariant = (typeof variants)[number];
/**
 * @deprecated Use `BUTTON_SIZES` from `../F0Button` instead.
 */
export declare const sizes: readonly ["sm", "md", "lg"];
/**
 * @deprecated Use `F0ButtonSize` from `../F0Button` instead.
 */
export type ButtonSize = (typeof sizes)[number];
declare const buttonVariants: import("tailwind-variants").TVReturnType<{
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
 * @deprecated Use `F0ButtonProps` from `../F0Button` instead.
 */
export interface ButtonProps extends VariantProps<typeof buttonVariants> {
    label: string;
    onPress?: () => void | Promise<unknown>;
    disabled?: boolean;
    loading?: boolean;
    icon?: IconType;
    emoji?: string;
    hideLabel?: boolean;
    className?: string;
    accessibilityHint?: string;
    showBadge?: boolean;
    fullWidth?: boolean;
}
/**
 * @deprecated Use `F0Button` from `../F0Button` instead.
 */
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<View>>;
export {};
//# sourceMappingURL=index.d.ts.map