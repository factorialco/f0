import { type VariantProps } from "tailwind-variants";
import React from "react";
import { View } from "react-native";
import { type IconType } from "../Icon";
export declare const variants: readonly ["default", "outline", "critical", "neutral", "ghost", "promote"];
export type ButtonVariant = (typeof variants)[number];
export declare const sizes: readonly ["sm", "md", "lg"];
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
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<View>>;
export {};
//# sourceMappingURL=index.d.ts.map